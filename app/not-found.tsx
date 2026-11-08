import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found | Nexora Studio",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="mk">
      <main id="main-content" className="mk-404">
        <p className="mk-sub">404 — page not found</p>
        <h1 className="mk-h1">This page doesn&apos;t exist.</h1>
        <p className="mk-lead">
          The link may be old or mistyped. Head back to the marketing home, or
          jump straight to the main Nexora site.
        </p>
        <div className="mk-hero-actions">
          <a href="/" className="mk-pill mk-pill-dark">
            Back to the marketing home
          </a>
          <a href="https://nexoraio.vercel.app/" className="mk-pill mk-pill-ghost">
            Visit the main site
          </a>
        </div>
      </main>
    </div>
  );
}
