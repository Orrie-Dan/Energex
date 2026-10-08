import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/site";

export const dynamic = "force-static";

/** Indexable routes only. Privacy and terms stay noindex and out of the sitemap. */
const routes = [
  "/",
  "/solutions",
  "/solutions/power-generation",
  "/solutions/renewables-storage",
  "/solutions/grid-distributed-energy",
  "/solutions/project-delivery-lifecycle",
  "/equipment",
  "/industries",
  "/about",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: "weekly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
}
