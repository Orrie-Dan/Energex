/**
 * Locale configuration and URL helpers. Safe to import from client and server.
 *
 * URL segments are lowercase (`/en`, `/zh-hk`); `htmlLang` / `hreflang` use
 * BCP 47 casing (`zh-HK`).
 */

export const LOCALES = ["en", "zh-hk"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_META: Record<
  Locale,
  {
    htmlLang: string;
    hreflang: string;
    ogLocale: string;
    /** Name of the language in that language (used by the switcher). */
    nativeName: string;
    /** Short switcher label. */
    shortLabel: string;
  }
> = {
  en: { htmlLang: "en", hreflang: "en", ogLocale: "en_US", nativeName: "English", shortLabel: "EN" },
  "zh-hk": { htmlLang: "zh-HK", hreflang: "zh-HK", ogLocale: "zh_HK", nativeName: "繁體中文", shortLabel: "中文" },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Paths that are never locale-prefixed (assets, API, metadata files). */
function isUnlocalizedPath(path: string): boolean {
  return (
    path.startsWith("/assets/") ||
    path.startsWith("/api/") ||
    path.startsWith("/_next/") ||
    path === "/reference-solution-test" ||
    /\.[a-z0-9]+$/i.test(path)
  );
}

function splitHref(href: string): { path: string; suffix: string } {
  const index = href.search(/[?#]/);
  return index === -1 ? { path: href, suffix: "" } : { path: href.slice(0, index), suffix: href.slice(index) };
}

/** Removes a leading locale segment. Returns the remaining path ("/" for the locale root). */
export function stripLocale(pathname: string): { locale: Locale | null; path: string } {
  const match = /^\/([^/?#]+)(\/.*)?$/.exec(pathname);
  if (match && isLocale(match[1])) {
    return { locale: match[1], path: match[2] || "/" };
  }
  return { locale: null, path: pathname || "/" };
}

/**
 * Prefixes an internal href with the locale, keeping any query and fragment.
 * External URLs, fragments, assets, API routes and already-localized hrefs are returned unchanged.
 */
export function localizeHref(locale: Locale, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const { path, suffix } = splitHref(href);
  if (isUnlocalizedPath(path)) return href;
  const stripped = stripLocale(path);
  if (stripped.locale) return href;
  return `/${locale}${path === "/" ? "" : path}${suffix}`;
}

/** Path of the same page in another locale. `search` and `hash` are appended as given. */
export function switchLocaleHref(pathname: string, target: Locale, search = "", hash = ""): string {
  const { path } = stripLocale(pathname);
  return `${localizeHref(target, path)}${search}${hash}`;
}

/** Replaces `{name}` placeholders. Unknown placeholders are left as-is. */
export function formatText(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (whole, key: string) =>
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : whole,
  );
}
