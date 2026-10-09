import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Parent dirs also have lockfiles (D:\Ideas\ditto, ditto.site, …). Pin root
  // so PostCSS resolves @tailwindcss/postcss from this app, not the parent.
  outputFileTracingRoot: __dirname,
  // Hybrid deployment: pages remain statically generated; only /api/inquiry
  // runs as a server function. (Previously `output: "export"`.)
  images: { unoptimized: true },
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  // The dev-tools badge would leak into reviewer/validator screenshots.
  devIndicators: false,
  // Pre-localization URLs permanently redirect (308) to their English page.
  // Next keeps the query string; browsers keep the #fragment across redirects.
  // Listed explicitly so assets, /api, robots, sitemap and llms.txt are never caught.
  async redirects() {
    const pages = ["/about", "/contact", "/equipment", "/industries", "/solutions", "/projects", "/privacy", "/terms"];
    return [
      { source: "/", destination: "/en", permanent: true },
      ...pages.map((path) => ({ source: path, destination: `/en${path}`, permanent: true })),
      { source: "/equipment/:slug", destination: "/en/equipment/:slug", permanent: true },
      { source: "/solutions/:slug", destination: "/en/solutions/:slug", permanent: true },
    ];
  },
};
export default nextConfig;
