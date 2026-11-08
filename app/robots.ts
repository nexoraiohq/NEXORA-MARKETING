import type { MetadataRoute } from "next";

/**
 * The marketing site lives at its own origin — only this domain is indexed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    host: "https://marketing.nexoraio.vercel.app",
    sitemap: "https://marketing.nexoraio.vercel.app/sitemap.xml",
  };
}
