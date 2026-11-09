# NEXORA-MARKETING

Standalone marketing landing page for **[marketing.nexoraio.vercel.app](https://nexoraio-marketing.vercel.app)**.

- The main website lives in the separate **NEXORA** repository (`nexoraio.vercel.app`).
- This project serves one page: the marketing landing page at the domain root (`/`).
- Stack: **Next.js 16** (App Router) · **React 19** · **TypeScript** · **Tailwind CSS v4** · Font Awesome 7.
- Design: SF Pro Display + Nevera, brand indigo `#4F46E5` / cyan `#00C8FF` / violet `#7C5CFF`, ink `#0F172A`, all page styles scoped to `.mk*` in `app/marketing.css`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | The marketing landing page |
| `/robots.txt` | Allows crawling, hosts the sitemap for this origin |
| `/sitemap.xml` | Single entry for `https://marketing.nexoraio.vercel.app/` |
| `/_not-found` | Branded 404 (see `app/not-found.tsx`) |

## Links

Every link that leaves this project points at the **full** main-site domain
(`https://nexoraio.vercel.app/...`) — this project does not host those routes.
In-page anchors (`#why`, `#build`, `#process`) stay local.

## Structure

```
app/
  page.tsx         # the marketing landing page (nav, hero, marquees, bento, ...)
  content.ts       # all page copy/data arrays (incl. link targets)
  marketing.css    # all .mk* styles
  layout.tsx       # root layout: metadata/canonical, fonts, GTM, global CSS
  globals.css      # @import "tailwindcss" (loaded first)
  robots.ts        # robots.txt for marketing.nexoraio.vercel.app
  sitemap.ts       # sitemap.xml
  not-found.tsx    # branded 404
components/
  JsonLd.tsx       # Organization structured data
lib/
  logos.ts         # Nexora logo data URIs
  site.ts          # site constants + WhatsApp link helper
  jsonld.ts        # Organization structured data nodes
styles/css/        # Nexora base stylesheet (style.css + responsive)
public/
  assets/          # fonts, favicon, logo artwork
  static/js/       # bodyclass.js (per-route body classes), pwa.js
  sw.js            # service worker — marketing assets only
  manifest.json    # PWA manifest
```

Font Awesome 7 is consumed straight from `@fortawesome/fontawesome-free`
(the bundled copy shipped with the original site was subsetted to 14 glyphs,
which is why most icons rendered blank).

## Deploy

Vercel project → domain `marketing.nexoraio.vercel.app`
(`vercel.json` is already framework-agnostic `nextjs`).
