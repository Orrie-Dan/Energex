/**
 * Source: Scope of Work §18 Geographic Strategy.
 * These are STRATEGIC PHASES — not verified current operating territories.
 */

export const marketPhases = [
  {
    phase: "Phase I",
    title: "Africa & Middle East",
    description:
      "Priority markets with power deficits, industrial growth, credible offtakers, available fuel or resources and viable financing pathways.",
    emphasis: "primary" as const,
  },
  {
    phase: "Phase II",
    title: "Wider Emerging Markets",
    description:
      "Expansion into Southeast Asia, Central Asia, Latin America and Indian Ocean markets through project-specific partnerships and local representation.",
    emphasis: "secondary" as const,
  },
  {
    phase: "Phase III",
    title: "Multi-Regional Platform",
    description:
      "A diversified portfolio of development, EPC, service and owned-energy assets across multiple jurisdictions over time.",
    emphasis: "ambition" as const,
  },
] as const;

export const marketStrategySection = {
  label: "Market Strategy",
  headingLead: "Built for",
  headingAccent: "Global Energy Markets.",
} as const;

export const marketBridge = {
  label: "Market Strategy",
  headingLead: "Africa & Middle East",
  headingAccent: "First.",
  supporting: "Wider emerging markets next — through project-specific partnerships and local representation.",
  cta: { href: "/about#markets", label: "Explore Our Approach" },
} as const;
