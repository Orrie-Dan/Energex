import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/solutions",
  "/solutions/power-generation",
  "/solutions/renewables-storage",
  "/solutions/grid-distributed-energy",
  "/solutions/project-delivery-lifecycle",
  "/industries",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path, i) => ({
    url: SITE_ORIGIN + path,
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
