import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { JsonLd } from "@/components/JsonLd";
import { marketingJsonLd, organizationJsonLd } from "@/lib/jsonld";

/* Full Font Awesome 7 (all icons) straight from the package. */
import "@fortawesome/fontawesome-free/css/all.min.css";

/* Tailwind first so the existing Nexora / .mk* styles keep winning. */
import "./globals.css";
import "@/styles/css/style.css";
import "@/styles/css/responsive/style.css";
import "./marketing.css";

const SITE_URL = "https://nexoraio-marketing.vercel.app";
const GTM_ID = "GTM-TT9M5PKZ";

const TITLE = "Web Design Kenya | Websites That Get You Clients | Nexora Studio";
const DESCRIPTION =
  "Fast, mobile-first websites for salons, barbershops, spas and SMEs across Kenya. Built in Kisii by Nexora Studio — prices from KES 15,000, same-day reply on WhatsApp.";

const GTM_SNIPPET = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "web design Kenya",
    "website design Kenya",
    "web designer Kenya",
    "web design Kisii",
    "website developer Kenya",
    "salon website Kenya",
    "barbershop website Kenya",
    "spa website Kenya",
    "booking website Kenya",
    "WhatsApp booking website",
    "SME website Kenya",
    "affordable website Kenya",
    "SEO services Kenya",
    "Google Business setup Kenya",
    "Nexora Studio",
  ],
  applicationName: "Nexora Studio",
  authors: [{ name: "Nexora Studio" }],
  publisher: "Nexora Studio",
  category: "technology",
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    locale: "en_KE",
    siteName: "Nexora Studio",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/assets/favicon/nexora-favicon/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Nexora Studio — web design in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/favicon/nexora-favicon/web-app-manifest-512x512.png"],
  },
  icons: {
    icon: [
      {
        url: "/assets/favicon/nexora-favicon/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/assets/favicon/nexora-favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: ["/assets/favicon/nexora-favicon/favicon.ico"],
    apple: ["/assets/favicon/nexora-favicon/apple-touch-icon.png"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Nexora",
    statusBarStyle: "black-translucent",
  },
  other: {
    "geo.region": "KE",
    "geo.placename": "Kisii, Kenya",
    "geo.position": "-0.6773;34.7796",
    ICBM: "-0.6773, 34.7796",
    coverage: "Kenya",
    distribution: "global",
    target: "Kenya",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4F46E5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <link
          rel="preload"
          href="/assets/fonts/SFPRODISPLAYMEDIUM.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/nevera/Nevera-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <Script id="gtm" strategy="afterInteractive">
          {GTM_SNIPPET}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script src="/static/js/bodyclass.js" strategy="beforeInteractive" />

        {/* Entity schema (brand, main site) + this origin's site/service schema. */}
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={marketingJsonLd(TITLE, DESCRIPTION)} />

        {children}

        <Script src="/static/js/pwa.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
