/**
 * Asset readiness for Energex-branded pages (brief inventory).
 */

export const mediaStatus = [
  {
    path: "/assets/energex/favicon.svg",
    status: "available" as const,
    note: "In use for site icon where configured.",
  },
  {
    path: "/assets/energex/logo.png",
    status: "temporary" as const,
    note: "Referenced as brand.logoLight; replace with final light-background logo.",
  },
  {
    path: "/assets/energex/logo-on-dark.png",
    status: "temporary" as const,
    note: "Referenced as brand.logoDark; replace with final on-dark logo.",
  },
  {
    path: "/assets/energex/power.webp",
    status: "replace" as const,
    note: "Homepage solution family imagery — swap for approved photography.",
  },
  {
    path: "/assets/energex/renewables.webp",
    status: "replace" as const,
    note: "Homepage solution family imagery — swap for approved photography.",
  },
  {
    path: "/assets/energex/grid.webp",
    status: "replace" as const,
    note: "Homepage solution family imagery — swap for approved photography.",
  },
  {
    path: "/assets/energex/investment.webp",
    status: "replace" as const,
    note: "Homepage solution family imagery — swap for approved photography.",
  },
] as const;
