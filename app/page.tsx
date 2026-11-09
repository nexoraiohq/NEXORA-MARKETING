import { LOGO_DARK_DATA_URI } from "@/lib/logos";
import { whatsappLink } from "@/lib/site";
import { JsonLd } from "@/components/JsonLd";

import {
  AUDIENCES,
  BUILD,
  FAQ,
  FEATURES,
  FOOTER_COLS,
  INDUSTRIES,
  NAV,
  SERVICES_STRIP,
  STATS,
  STEPS,
  WA_TEXT,
} from "./content";

function Marquee({ items, alt = false }: { items: string[]; alt?: boolean }) {
  return (
    <div className={`mk-marquee${alt ? " mk-marquee-alt" : ""}`} aria-hidden="true">
      <div className="mk-marquee-track">
        {[...items, ...items, ...items].map((name, i) => (
          <span key={`${name}-${i}`}>{name}</span>
        ))}
      </div>
    </div>
  );
}

export default function MarketingPage() {
  const wa = whatsappLink(WA_TEXT);

  return (
    <div className="mk">
      {/* ── NAV ── */}
      <header className="mk-nav">
        <a href="https://nexoraio.vercel.app/" className="mk-nav-logo" aria-label="Nexora Studio home">
          <img src={LOGO_DARK_DATA_URI} width={120} height={80} alt="Nexora Studio" fetchPriority="high" />
        </a>

        <nav className="mk-nav-links" aria-label="Marketing navigation">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mk-nav-actions">
          <a href="https://nexoraio.vercel.app/" className="mk-nav-login">
            Main site
          </a>
          <a href={wa} target="_blank" rel="noopener" className="mk-pill mk-pill-dark">
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
            WhatsApp us
          </a>
        </div>
      </header>

      <main id="main-content">
        {/* ── HERO ── */}
        <section className="mk-hero">
          <h1 className="mk-h1">
            Got a <span className="mk-chip mk-chip-indigo"><i className="fas fa-briefcase" aria-hidden="true"></i></span> business?
            <br />
            We&apos;ll get you <span className="mk-chip mk-chip-cyan"><i className="fas fa-arrow-trend-up" aria-hidden="true"></i></span> customers.
          </h1>

          <p className="mk-sub">
            We build fast, mobile-first websites for salons, barbershops, spas and small businesses
            across Kenya — and we put a WhatsApp button on every page, because that&apos;s how
            business actually gets done here.
          </p>

          <div className="mk-hero-actions">
            <a href={wa} target="_blank" rel="noopener" className="mk-pill mk-pill-dark">
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              Get a free quote
            </a>
            <a href="#build" className="mk-pill mk-pill-ghost">
              See what we build
            </a>
          </div>

          <p className="mk-trust">
            <img src={LOGO_DARK_DATA_URI} width={70} height={47} alt="" aria-hidden="true" />
            Kisii-based studio · We reply the same day · Sites live across Kenya
          </p>
        </section>

        <Marquee items={INDUSTRIES} />

        {/* ── STATS BENTO ── */}
        <section className="mk-stats" aria-label="Nexora at a glance">
          <article className="mk-stat-dark">
            <div className="mk-stat-copy">
              <p className="mk-stat-value">{STATS.dark.value}</p>
              <p className="mk-stat-label">{STATS.dark.label}</p>
              <p className="mk-stat-body">{STATS.dark.body}</p>
            </div>
            <div className="mk-stat-web" aria-hidden="true">
              <span className="mk-node n1"><i className="fas fa-palette"></i></span>
              <span className="mk-node n2"><i className="fas fa-code"></i></span>
              <span className="mk-node n3"><i className="fab fa-whatsapp"></i></span>
              <span className="mk-node n4"><i className="fas fa-search"></i></span>
              <span className="mk-node n5"><i className="fas fa-rocket"></i></span>
              <span className="mk-hub"><i className="fas fa-layer-group"></i></span>
              <span className="mk-link l1"></span>
              <span className="mk-link l2"></span>
              <span className="mk-link l3"></span>
              <span className="mk-link l4"></span>
            </div>
          </article>

          {STATS.light.map((s) => (
            <article className="mk-stat-light" key={s.value}>
              <p className="mk-stat-value">{s.value}</p>
              <p className="mk-stat-label">{s.label}</p>
              <p className="mk-stat-body">{s.body}</p>
            </article>
          ))}
        </section>

        {/* ── QUOTE ── */}
        <section className="mk-quote">
          <p className="mk-quote-mark">nexora</p>
          <blockquote>
            &ldquo;A website is only good if it grows your business. Every Nexora site is built to do
            one thing: bring you customers — on the phone that&apos;s already in your customer&apos;s
            hand.&rdquo;
          </blockquote>
          <p className="mk-quote-by">Nexora Studio · Kisii, Kenya</p>
        </section>

        {/* ── WHAT WE BUILD ── */}
        <section className="mk-section" id="build">
          <h2 className="mk-h2">What we build</h2>
          <p className="mk-lead">
            Three types of project, all designed and built by the same small team in Kisii — no
            outsourcing, no account managers. Not sure which one you need? Ask us.
          </p>

          <div className="mk-build">
            {BUILD.map((card) => (
              <article className={`mk-build-card ${card.tone}`} key={card.title}>
                {card.ribbon ? <span className="mk-ribbon">{card.ribbon}</span> : null}
                <div className="mk-phone" aria-hidden="true">
                  <div className="mk-phone-notch"></div>
                  <div className={`mk-phone-screen s-${card.screen}`}>
                    <span className="ps-bar wide"></span>
                    <span className="ps-bar"></span>
                    <span className="ps-card"></span>
                    <span className="ps-card"></span>
                    <span className="ps-cta"></span>
                  </div>
                </div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── WHY ── */}
        <section className="mk-section mk-why" id="why">
          <h2 className="mk-h2">Why Nexora</h2>
          <p className="mk-lead">
            The person you talk to is the person building your site. Here&apos;s what that gets you.
          </p>

          <div className="mk-features">
            {FEATURES.map((f) => (
              <article className="mk-feature" key={f.title}>
                <span className={`mk-feat-ic ${f.tone}`}>
                  <i className={f.icon} aria-hidden="true"></i>
                </span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── AUDIENCES ── */}
        <section className="mk-section">
          <h2 className="mk-h2">Built for businesses like you</h2>
          <p className="mk-lead">
            These three we know inside out. For anything else, tell us about your business and
            we&apos;ll be straight with you about whether we&apos;re a good fit.
          </p>

          <div className="mk-audience">
            {AUDIENCES.map((a) => (
              <article className={`mk-aud-card ${a.tone}`} key={a.title}>
                <div className="mk-aud-art" aria-hidden="true">
                  <span className="art-row"><i></i><i></i><i></i></span>
                  <span className="art-block"></span>
                  <span className="art-pill"></span>
                </div>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
                <a href={a.href} className="mk-aud-link">
                  {a.cta} <i className="fas fa-arrow-right" aria-hidden="true"></i>
                </a>
              </article>
            ))}
          </div>
        </section>

        <Marquee items={SERVICES_STRIP} alt />

        {/* ── PROCESS ── */}
        <section className="mk-section mk-process" id="process">
          <h2 className="mk-h2">How it works</h2>
          <p className="mk-lead">From the first message to the day you go live.</p>

          <ol className="mk-steps">
            {STEPS.map((s) => (
              <li key={s.n}>
                <span className="mk-step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <em>{s.tag}</em>
              </li>
            ))}
          </ol>
        </section>

        {/* ── FAQ (conversion copy + FAQPage schema) ── */}
        <section className="mk-section mk-faq" id="faq">
          <h2 className="mk-h2">Questions people actually ask</h2>
          <p className="mk-lead">
            Answered honestly — including the ones where the answer is &ldquo;you don&apos;t need
            that yet&rdquo;.
          </p>

          <div className="mk-faq-list">
            {FAQ.map((item) => (
              <details className="mk-faq-item" key={item.q}>
                <summary>
                  {item.q}
                  <i className="fas fa-angle-right" aria-hidden="true"></i>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>

          <div className="mk-faq-cta">
            <a href={wa} target="_blank" rel="noopener" className="mk-pill mk-pill-dark">
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              Ask us on WhatsApp
            </a>
            <span>We answer the same day.</span>
          </div>
        </section>

        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }}
        />

        {/* ── DARK CTA ── */}
        <section className="mk-cta">
          <span className="mk-shape sh-1" aria-hidden="true"></span>
          <span className="mk-shape sh-2" aria-hidden="true"></span>
          <span className="mk-shape sh-3" aria-hidden="true"></span>
          <span className="mk-shape sh-4" aria-hidden="true"></span>

          <h2>Ready when you are.</h2>
          <p>
            Send us a message about your business and where you&apos;d like it to be in a year.
            You&apos;ll get a straight answer and a price — usually the same day.
          </p>
          <a href={wa} target="_blank" rel="noopener" className="mk-pill mk-pill-accent">
            <i className="fab fa-whatsapp" aria-hidden="true"></i>
            Message us on WhatsApp
          </a>
          <p className="mk-cta-note">No forms, no sales calls.</p>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="mk-footer">
        <div className="mk-footer-top">
          <div className="mk-footer-brand">
            <a href="https://nexoraio.vercel.app/" className="mk-footer-logo" aria-label="Nexora Studio home">
              <img src={LOGO_DARK_DATA_URI} width={110} height={73} alt="Nexora Studio" />
            </a>
            <p>Building the digital systems that move businesses forward.</p>
            <span>Kisii, Kenya</span>
            <a href={wa} target="_blank" rel="noopener" className="mk-pill mk-pill-dark mk-foot-wa">
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
              Get a price
            </a>
          </div>

          {FOOTER_COLS.map((col) => (
            <nav key={col.head} aria-label={col.head}>
              <h2>{col.head}</h2>
              {col.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>

        <div className="mk-footer-bottom">
          <span>&copy; 2026 Nexora Studio. All rights reserved</span>
          <a href="https://nexoraio.vercel.app/">Visit the main site &rarr;</a>
        </div>
      </footer>

      {/* ── STICKY WHATSAPP CTA — always one tap away ── */}
      <a
        href={wa}
        target="_blank"
        rel="noopener"
        className="mk-wa-fab"
        aria-label="Chat with Nexora on WhatsApp — get your free website quote"
      >
        <i className="fab fa-whatsapp" aria-hidden="true"></i>
        <span>Free quote</span>
      </a>
    </div>
  );
}
