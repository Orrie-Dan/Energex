import { localizeHref, type Locale } from "./config";

/**
 * Translation overlays.
 *
 * English modules in `src/data/` stay the single source of truth for structure.
 * A locale overlay mirrors that structure but contains only display text:
 * structural keys (links, media, ids, slugs, brand identifiers) are omitted from
 * the overlay type and always come from English, so they cannot drift.
 */

/** Keys whose values are identifiers, URLs, media, or brand marks — never translated. */
export const STRUCTURAL_KEYS = [
  "href",
  "familyHref",
  "inquiryHref",
  "imgSrc",
  "imgSrc2",
  "srcSet",
  "srcSet2",
  "id",
  "slug",
  "familySlug",
  "capabilityIds",
  "customerTitles",
  "number",
  "emphasis",
  "heroObjectPosition",
  "logoLight",
  "logoDark",
  "registration",
  "name",
  "shortName",
  "addressLines",
  "node",
  "kind",
  "height",
  "height2",
  "width",
  "width2",
] as const;

export type StructuralKey = (typeof STRUCTURAL_KEYS)[number];

/** Keys holding internal links; their values are locale-prefixed during merge. */
const LINK_KEYS: ReadonlySet<string> = new Set(["href", "familyHref", "inquiryHref"]);
const STRUCTURAL: ReadonlySet<string> = new Set(STRUCTURAL_KEYS);

type TextKeys<T> = {
  [K in keyof T]-?: K extends StructuralKey
    ? never
    : NonNullable<T[K]> extends string | object
      ? NonNullable<T[K]> extends (...args: never[]) => unknown
        ? never
        : K
      : never;
}[keyof T];

/** The text-only shape a locale overlay must provide for `T`. */
export type Translation<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: Translation<T[K]> }
    : T extends object
      ? { readonly [K in keyof T as K extends TextKeys<T> ? K : never]: Translation<NonNullable<T[K]>> }
      : never;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Builds the localized value: text from `overlay` (falling back to English when
 * absent), structure from `source`, and every internal link prefixed for `locale`.
 */
export function localizeContent<T>(source: T, overlay: unknown, locale: Locale): T {
  return merge(source, overlay, locale, null) as T;
}

function merge(source: unknown, overlay: unknown, locale: Locale, key: string | null): unknown {
  if (typeof source === "string") {
    if (key !== null && LINK_KEYS.has(key)) return localizeHref(locale, source);
    if (key !== null && STRUCTURAL.has(key)) return source;
    return typeof overlay === "string" ? overlay : source;
  }
  if (Array.isArray(source)) {
    // Structural arrays (ids, slugs, join keys, address) keep English values.
    if (key !== null && STRUCTURAL.has(key)) return source;
    const items = Array.isArray(overlay) ? overlay : [];
    return source.map((item, index) => merge(item, items[index], locale, key));
  }
  if (isPlainObject(source)) {
    const layer = isPlainObject(overlay) ? overlay : {};
    const out: Record<string, unknown> = {};
    for (const [childKey, value] of Object.entries(source)) {
      out[childKey] = merge(value, STRUCTURAL.has(childKey) ? undefined : layer[childKey], locale, childKey);
    }
    return out;
  }
  return source;
}

/** Text paths present in `source` but missing or non-string in `overlay`. Used by tests. */
export function missingTranslations(source: unknown, overlay: unknown, path = ""): string[] {
  if (typeof source === "string") {
    return typeof overlay === "string" && overlay.trim() !== "" ? [] : [path || "(root)"];
  }
  if (Array.isArray(source)) {
    if (!Array.isArray(overlay)) return [path || "(root)"];
    const missing = source.flatMap((item, index) => missingTranslations(item, overlay[index], `${path}[${index}]`));
    if (overlay.length !== source.length) missing.push(`${path} (length ${overlay.length} ≠ ${source.length})`);
    return missing;
  }
  if (isPlainObject(source)) {
    const layer = isPlainObject(overlay) ? overlay : {};
    return Object.entries(source).flatMap(([childKey, value]) => {
      if (STRUCTURAL.has(childKey) || typeof value === "function" || value === undefined) return [];
      if (typeof value !== "string" && typeof value !== "object") return [];
      return missingTranslations(value, layer[childKey], path ? `${path}.${childKey}` : childKey);
    });
  }
  return [];
}
