import type { Metadata } from "next";
import { brand } from "../data/energex";
import { DEFAULT_LOCALE, LOCALES, LOCALE_META, localizeHref, type Locale } from "./config";

/** `hreflang` → URL map for one page, including `x-default` (English). */
export function languageAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) languages[LOCALE_META[locale].hreflang] = localizeHref(locale, path);
  languages["x-default"] = localizeHref(DEFAULT_LOCALE, path);
  return languages;
}

/**
 * Page metadata with a self-referencing canonical, hreflang alternates and the
 * Open Graph locale. `path` is the unprefixed route, e.g. "/about" or "/".
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  page: { title?: string; description: string; noindex?: boolean },
): Metadata {
  const url = localizeHref(locale, path);
  return {
    ...(page.title ? { title: page.title } : {}),
    description: page.description,
    ...(page.noindex ? { robots: { index: false, follow: true } } : {}),
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      ...(page.title ? { title: page.title } : {}),
      description: page.description,
      url,
      type: "website",
      siteName: brand.name,
      images: [brand.logoLight],
      locale: LOCALE_META[locale].ogLocale,
      alternateLocale: LOCALES.filter((other) => other !== locale).map((other) => LOCALE_META[other].ogLocale),
    },
  };
}
