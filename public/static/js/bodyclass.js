/* ============================================================
  NEXORA BODY CLASSES
  Applies the per-route <body> classes (reveal-on-load /
  dark-hero-page) as early as possible while the document
  parses, so entrance animations start with the first paint -
  exactly like the original static site.
  Loaded via next/script (beforeInteractive) from the root layout.
============================================================ */

(function () {
  "use strict";

  var BODY_CLASSES = {
    "/": "reveal-on-load",
    "/about": "reveal-on-load",
    "/work": "reveal-on-load",
    "/services": "reveal-on-load dark-hero-page",
    "/contact": "reveal-on-load dark-hero-page",
    "/web-design-kisii": "reveal-on-load dark-hero-page",
    "/web-development-kisii": "reveal-on-load dark-hero-page",
    "/web-design-kenya": "reveal-on-load dark-hero-page",
    "/salon-website-design-kenya": "reveal-on-load dark-hero-page",
    "/barbershop-website-kenya": "reveal-on-load dark-hero-page",
    "/spa-website-design-kenya": "reveal-on-load dark-hero-page",
    "/beauty-wellness-web-design": "reveal-on-load dark-hero-page",
    "/booking-websites": "reveal-on-load dark-hero-page",
    "/seo-services-kenya": "reveal-on-load dark-hero-page"
  };

  function apply() {
    if (!document.body) return false;
    var p = location.pathname.replace(/\/$/, "") || "/";
    document.body.className = BODY_CLASSES[p] || "";
    return true;
  }

  /* <head> runs before <body> exists - poll briefly until the
     body element appears so the class lands before first paint. */
  if (!apply()) {
    var t = setInterval(function () {
      if (apply()) clearInterval(t);
    }, 4);
  }
})();
