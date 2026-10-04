/** Measured / observed on tilanium.framer.website service-detail pages. */
export const SD_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
export const SD_MEDIA_START_SCALE = 1.11167;
export const SD_CHAR_STAGGER_MS = 12;
export const SD_HERO_CTA_DELAY_MS = 280;
export const SD_MEDIA_ENTER_DELAY_MS = 220;

export function sdReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
