import type { NextConfig } from "next";

/**
 * NEXORA-MARKETING — standalone marketing site.
 * Serves https://nexoraio-marketing.vercel.app/ (root route only).
 * The main site lives in the separate NEXORA repository.
 */
const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    agentUpgrade: "security",
  },
  images: {
    // All imagery is pre-optimised (webp + png) and served from /public,
    // so the Next.js image optimiser stays out of the way.
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
      {
        source: "/manifest.json",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;
