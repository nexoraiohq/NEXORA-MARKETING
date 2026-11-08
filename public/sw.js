/* ============================================================
  NEXORA SERVICE WORKER
  App shell precache + offline support
  Scope: /  (this file MUST live at /sw.js)
============================================================ */

const CACHE_NAME = "nexora-marketing-v1";

const APP_SHELL = [
  "/",
  "/manifest.json",
  "/static/js/bodyclass.js",
  "/static/js/pwa.js",
  "/assets/favicon/nexora-favicon/favicon.svg",
  "/assets/favicon/nexora-favicon/favicon-96x96.png",
  "/assets/favicon/nexora-favicon/apple-touch-icon.png",
  "/assets/favicon/nexora-favicon/web-app-manifest-192x192.png",
  "/assets/favicon/nexora-favicon/web-app-manifest-512x512.png"
];

/* Next.js CSS/JS chunks are content-hashed per build, so they are discovered
   from the prerendered shell HTML at install time instead of hardcoded. */
async function precacheBuildAssets(cache) {
  try {
    const home = await (await fetch("/", { cache: "reload" })).text();
    const refs = new Set();
    for (const m of home.matchAll(/(?:href|src)="(\/_next\/[^"]+)"/g)) refs.add(m[1]);
    await Promise.allSettled(
      [...refs].map((url) => cache.add(new Request(url, { cache: "reload" })))
    );
  } catch {
    /* offline install - shell pages above still cache */
  }
}

async function precacheOffline404(cache) {
  try {
    const res = await fetch("/_not-found", { cache: "reload" });
    if (res.ok || res.status === 404) {
      await cache.put("/_not-found", res);
    }
  } catch {
    /* ignore - offline fallback then uses "/" */
  }
}

/* ============================================================
   INSTALL — precache app shell, tolerate single-file failures
   (cache.addAll fails entirely if ONE file 404s, so add one-by-one)
============================================================ */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(async (cache) => {
        console.log("[SW] Caching Nexora app shell...");
        const results = await Promise.allSettled(
          APP_SHELL.map((url) =>
            cache.add(new Request(url, { cache: "reload" }))
          )
        );
        const failed = APP_SHELL.filter((_, i) => results[i].status === "rejected");
        if (failed.length) {
          console.warn("[SW] Failed to precache:", failed);
        } else {
          console.log("[SW] App shell cached.");
        }
        await precacheBuildAssets(cache);
        await precacheOffline404(cache);
      })
  );
  self.skipWaiting();
});

/* ============================================================
   ACTIVATE — delete old caches, take control immediately
============================================================ */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names.map((name) => {
            if (name !== CACHE_NAME) {
              console.log("[SW] Removing old cache:", name);
              return caches.delete(name);
            }
            return undefined;
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

/* Allow pages to trigger an update: navigator.serviceWorker.controller.postMessage("SKIP_WAITING") */
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

/* ============================================================
   FETCH
   - Only handle http(s) GET requests
   - Cross-origin (Google Fonts, Font Awesome CDN, WhatsApp,
     Pinterest images, etc.) → network only, never cached
   - Navigations (HTML pages) → network-first, offline fallback
   - Same-origin static assets → stale-while-revalidate
   - manifest.json → network-first, fallback to cache
============================================================ */
self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") return;

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // Never intercept cross-origin requests — just let the browser handle them.
  if (url.origin !== self.location.origin) return;

  // --- manifest: always try network first so icon/theme updates apply ---
  if (url.pathname === "/manifest.json") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // --- Navigations / HTML documents: network-first ---
  if (request.mode === "navigate" || request.destination === "document") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(async () => {
          const cached =
            (await caches.match(request)) ||
            (await caches.match("/_not-found")) ||
            (await caches.match("/"));
          return cached || Response.error();
        })
    );
    return;
  }

  // --- Same-origin static assets: stale-while-revalidate ---
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response && response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
