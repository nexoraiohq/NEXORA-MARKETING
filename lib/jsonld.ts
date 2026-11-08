const SITE_URL = "https://nexoraio.vercel.app";

export type JsonLdNode = Record<string, unknown>;

/**
 * BreadcrumbList schema - helps Google show rich site-link breadcrumbs and
 * reinforces the internal architecture of the site.
 */
export function breadcrumbJsonLd(
  items: { name: string; url: string }[]
): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : SITE_URL + item.url,
    })),
  };
}

/**
 * Site-wide Organization + LocalBusiness + WebSite schema.
 * Rendered on every route so the Kisii/Kenya entity signals are consistent.
 */
export function organizationJsonLd(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#business`,
        name: "Nexora Studio",
        alternateName: "Nexora",
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/assets/favicon/nexora-favicon/web-app-manifest-512x512.png`,
        description:
          "Nexora Studio is a web design and website development studio in Kisii, Kenya building digital experiences, booking systems, WhatsApp integrations and SEO foundations for salons, barbershops, spas and SMEs across Kenya.",
        slogan: "Digital experiences that move businesses forward.",
        email: "salonflow01@gmail.com",
        telephone: "+254713324672",
        priceRange: "KES 15,000 - KES 250,000",
        knowsAbout: [
          "web design Kisii",
          "website development Kenya",
          "salon websites",
          "barbershop websites",
          "spa websites",
          "beauty and wellness web design",
          "booking websites",
          "local SEO Kenya",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kisii",
          addressRegion: "Kisii County",
          addressCountry: "KE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -0.6773,
          longitude: 34.7796,
        },
        areaServed: [
          { "@type": "AdministrativeArea", name: "Kisii County" },
          { "@type": "City", name: "Kisii" },
          { "@type": "City", name: "Nyamira" },
          { "@type": "City", name: "Migori" },
          { "@type": "City", name: "Homa Bay" },
          { "@type": "City", name: "Kisumu" },
          { "@type": "City", name: "Kakamega" },
          { "@type": "City", name: "Nairobi" },
          { "@type": "City", name: "Nakuru" },
          { "@type": "City", name: "Eldoret" },
          { "@type": "City", name: "Mombasa" },
          { "@type": "Country", name: "Kenya" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "10:00",
            closes: "15:00",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+254713324672",
            contactType: "customer support",
            areaServed: ["KE"],
            availableLanguage: ["English", "Swahili"],
          },
          {
            "@type": "ContactPoint",
            telephone: "+254713324672",
            contactType: "sales",
            areaServed: ["KE"],
            availableLanguage: ["English", "Swahili"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Nexora Studio",
        description:
          "Web design and website development in Kisii, Kenya for salons, barbershops, spas and small businesses.",
        publisher: { "@id": `${SITE_URL}/#business` },
        inLanguage: "en-KE",
        // NOTE: no SearchAction here on purpose. The site has no search page,
        // and advertising a `?s={search_term_string}` URL made Google crawl and
        // index a phantom query URL that served a duplicate of the homepage.
      },
    ],
  };
}
