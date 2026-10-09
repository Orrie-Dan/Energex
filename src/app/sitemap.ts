import type { MetadataRoute } from "next";
import { equipmentCategories } from "../data/energex";
import { solutionSlugs } from "../data/solutions";
import { LOCALES, localizeHref } from "../i18n/config";
import { languageAlternates } from "../i18n/metadata";
import { absoluteUrl } from "../lib/site";

export const dynamic = "force-static";

/** Indexable routes only (unprefixed). Privacy, terms and projects stay noindex and out of the sitemap. */
const routes = [
  "/",
  "/solutions",
  ...solutionSlugs.map((slug) => `/solutions/${slug}`),
  "/equipment",
  ...equipmentCategories.map((category) => `/equipment/${category.slug}`),
  "/industries",
  "/about",
  "/contact",
];

/** One entry per locale, each listing every language version (hreflang) of the page. */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((path) => {
    const languages = Object.fromEntries(
      Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, absoluteUrl(href)]),
    );
    return LOCALES.map((locale) => ({
      url: absoluteUrl(localizeHref(locale, path)),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: { languages },
    }));
  });
}
