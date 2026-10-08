/** Public deployment until a custom domain is approved. Override with NEXT_PUBLIC_SITE_ORIGIN. */
export const DEFAULT_SITE_ORIGIN = "https://energex-roan.vercel.app";

/** Strip trailing slashes so sitemap, canonical, and social URLs share one origin. */
export function normalizeSiteOrigin(value: string | undefined): string {
  const configured = (value ?? "").trim().replace(/\/+$/, "");
  return configured || DEFAULT_SITE_ORIGIN;
}

export const SITE_ORIGIN = normalizeSiteOrigin(process.env.NEXT_PUBLIC_SITE_ORIGIN);

export function absoluteUrl(path: string): string {
  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${suffix}`;
}
