/**
 * Asset readiness for the Energex homepage (brief inventory).
 *
 * status:
 *  - available: final / safe to ship as-is
 *  - temporary: functional stand-in; ship only until the approved asset arrives
 *  - replace:   placeholder imagery that should be swapped for approved photography
 *  - unused:    present in /public but not referenced by the homepage
 */

export const mediaStatus = [
  // --- Brand
  {
    path: "/assets/energex/favicon.svg",
    status: "available" as const,
    note: "Site icon (layout metadata).",
  },
  {
    path: "/assets/energex/logo-cropped.png",
    status: "temporary" as const,
    note: "brand.logoLight — desktop top nav (light background). Flame/X mark from brand artwork.",
  },
  {
    path: "/assets/energex/logo-on-dark-cropped.png",
    status: "temporary" as const,
    note: "brand.logoDark — mobile nav, bottom nav and footers (dark navy background).",
  },
  {
    path: "/assets/energex/logo.png",
    status: "unused" as const,
    note: "Uncropped light logo; not referenced by the homepage.",
  },
  {
    path: "/assets/energex/logo-on-dark.png",
    status: "unused" as const,
    note: "Uncropped on-dark logo; not referenced by the homepage.",
  },

  // --- Solution family cards ("Energy Solutions" section)
  {
    path: "/assets/energex/power.webp",
    status: "available" as const,
    note: "Power & Generation card — waterfront power plant photography.",
  },
  {
    path: "/assets/energex/renewables-storage.png",
    status: "available" as const,
    note: "Renewables & Storage card / capabilities 03–04 — renewable storage at sunset.",
  },
  {
    path: "/assets/energex/floating-power.png",
    status: "available" as const,
    note: "Floating Power capability; Power & Generation card (xl).",
  },
  {
    path: "/assets/energex/renewables.webp",
    status: "unused" as const,
    note: "Previous Renewables card solar farm; superseded by renewables-storage.png.",
  },
  {
    path: "/assets/energex/renewables-wind.webp",
    status: "unused" as const,
    note: "Previous Renewables card wind farm; superseded by renewables-storage.png.",
  },
  {
    path: "/assets/energex/grid.webp",
    status: "available" as const,
    note: "Grid & Distributed Energy card (default) — substation photography.",
  },
  {
    path: "/assets/energex/grid-future.webp",
    status: "available" as const,
    note: "Grid & Distributed Energy card (xl) — integrated renewable grid illustration.",
  },
  {
    path: "/assets/energex/investment.webp",
    status: "available" as const,
    note: "Project Delivery & Lifecycle card — aerial project-site photography.",
  },

  // --- About block (template media still in use)
  {
    path: "/assets/energex/hero.mp4",
    status: "available" as const,
    note: "Sticky About / hero video — Energex project footage.",
  },
  {
    path: "/assets/energex/engineers.png",
    status: "available" as const,
    note: "About section image — Energex engineers inspecting a solar array.",
  },

  // --- Who We Serve / capability photography
  {
    path: "/assets/energex/mining.jpg",
    status: "available" as const,
    note: "Mining & Heavy Industry segment; Industrial Energy capability preview.",
  },
  {
    path: "/assets/energex/oil-and-gas.jpg",
    status: "available" as const,
    note: "Oil & Gas / LNG segment; LNG and floating-power capability previews.",
  },
  {
    path: "/assets/energex/fleet-charging.png",
    status: "available" as const,
    note: "Fleet Operators segment; E-Mobility capability preview.",
  },
  {
    path: "/assets/energex/rural-electrification.jpg",
    status: "available" as const,
    note: "Development Institutions segment; Rural Electrification capability preview.",
  },
  {
    path: "/assets/energex/commercial-campus.png",
    status: "available" as const,
    note: "Commercial & Real Estate segment — sustainable corporate campus.",
  },

  // --- Decorative textures carried over from the capture (no brand content)
  {
    path: "/assets/cloned/images/2e27d753b57b.png",
    status: "available" as const,
    note: "Hero line-field texture (decorative, no template branding).",
  },
  {
    path: "/assets/cloned/images/14747878a642.png",
    status: "available" as const,
    note: "Hero info-panel noise overlay (decorative).",
  },
  {
    path: "/assets/cloned/images/f96b27607340.png",
    status: "available" as const,
    note: "Why Energex section noise overlay (decorative).",
  },
  {
    path: "/assets/cloned/svg/de9d52a631a7.svg",
    status: "available" as const,
    note: "Carousel Previous/Next arrows (UI chrome).",
  },
  {
    path: "/assets/cloned/svg/0db50e6c503d.svg",
    status: "available" as const,
    note: "Carousel Previous/Next arrows (UI chrome).",
  },

  // --- Energex imagery available but not on the homepage
  ...(
    [
      "community.webp",
      "floating.webp",
      "industry.webp",
      "lng.webp",
      "mobility.webp",
      "storage.webp",
      "trading.webp",
    ] as const
  ).map((file) => ({
    path: `/assets/energex/${file}`,
    status: "unused" as const,
    note: "Available for solution/industry subpages; not referenced by the homepage.",
  })),
];
