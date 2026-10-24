/**
 * On narrow screens the detail panel of a selector sits below its list, so a tap
 * would change content the visitor cannot see. Bring the panel into view when its
 * top is off-screen. No-op on wide layouts (list and panel side by side).
 */
export function revealPanelOnSmallScreens(panel: HTMLElement | null) {
  if (!panel || typeof window === "undefined") return;
  if (!window.matchMedia("(max-width: 900px)").matches) return;
  const top = panel.getBoundingClientRect().top;
  if (top >= 0 && top < window.innerHeight * 0.6) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // Leave a little room above the panel.
  window.scrollTo({ top: window.scrollY + top - 16, behavior: reduce ? "auto" : "smooth" });
}
