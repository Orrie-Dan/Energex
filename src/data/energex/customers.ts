/**
 * Source: Scope of Work §18 Target Customer Segments.
 * Exact eight segments — do not invent additional primary segments.
 */

export type CustomerSegment = {
  title: string;
  need: string;
  response: string;
  tags: readonly string[];
  imgSrc: string;
  detail: string;
  offerings: readonly string[];
};

export const customers: readonly CustomerSegment[] = [
  {
    title: "Governments & Utilities",
    need: "Generation capacity, grid stability and electrification",
    response: "IPP, EPC, BESS and grid solutions",
    tags: ["IPP", "EPC", "BESS", "Grid Solutions"],
    imgSrc: "/assets/energex/ind-gov.jpg",
    detail:
      "Public utilities and government programs need dependable capacity additions, stronger grids and practical electrification pathways.",
    offerings: [
      "Utility-scale and hybrid generation",
      "Substations and grid integration",
      "Rural electrification and mini-grids",
      "Public-private project structuring",
    ],
  },
  {
    title: "Independent Power Producers",
    need: "Development and execution",
    response: "Engineering, sourcing and EPC integration",
    tags: ["Engineering", "Sourcing", "EPC Integration"],
    imgSrc: "/assets/energex/ind-ipp.jpg",
    detail:
      "IPPs need a partner that can move from opportunity screening to bankable design, OEM selection and delivery without fragmenting accountability.",
    offerings: [
      "Feasibility and bankability support",
      "Technology and OEM evaluation",
      "Global procurement",
      "EPC integration and commissioning",
    ],
  },
  {
    title: "Mining & Heavy Industry",
    need: "Reliable captive power",
    response: "Hybrid generation and storage",
    tags: ["Hybrid Generation", "Storage", "Captive Power"],
    imgSrc: "/assets/energex/ind-mining.jpg",
    detail:
      "Mining and heavy industry need cost-competitive, high-availability captive and hybrid power — often behind the meter.",
    offerings: [
      "Captive and hybrid power",
      "Emergency and continuous generation",
      "Efficiency and power-quality upgrades",
      "Long-term O&M",
    ],
  },
  {
    title: "Industrial Parks & Data Centers",
    need: "High-availability energy",
    response: "Integrated utility infrastructure",
    tags: ["Integrated Utility", "Infrastructure"],
    imgSrc: "/assets/energex/ind-dc.jpg",
    detail:
      "Industrial zones and data centers require scalable, high-availability energy infrastructure with clear expansion paths.",
    offerings: [
      "Utility infrastructure for campuses",
      "High-availability power for data centers",
      "On-site solar and storage",
      "Phased expansion",
    ],
  },
  {
    title: "Oil & Gas / LNG",
    need: "Fuel and power infrastructure",
    response: "LNG-to-power and gas systems",
    tags: ["LNG-to-Power", "Gas Systems"],
    imgSrc: "/assets/energex/ind-lng.jpg",
    detail:
      "Oil, gas and LNG stakeholders need integrated fuel-to-power pathways from receiving through generation and grid connection.",
    offerings: [
      "Mini LNG terminals",
      "FSRU / FSRP pathways",
      "Gas pipelines and metering",
      "Integrated LNG-to-power delivery",
    ],
  },
  {
    title: "Commercial & Real Estate",
    need: "Cost reduction and resilience",
    response: "C&I solar, BESS and EMS",
    tags: ["C&I Solar", "BESS", "Energy Management"],
    imgSrc: "/assets/energex/city-night.jpg",
    detail:
      "Commercial buildings and real-estate portfolios seek lower energy cost, higher resilience and cleaner on-site generation.",
    offerings: [
      "Rooftop and carport solar",
      "Peak shaving and backup storage",
      "Energy management",
      "Energy-as-a-service models",
    ],
  },
  {
    title: "Fleet Operators",
    need: "Charging capacity",
    response: "Charging hubs and software",
    tags: ["Charging Hubs", "Charging Management"],
    imgSrc: "/assets/energex/ind-fleet.jpg",
    detail:
      "Fleet operators need charging capacity that fits depot operations, power availability and commercial models.",
    offerings: [
      "AC and DC fast charging",
      "Depot and bus charging hubs",
      "Solar-plus-storage hubs",
      "Charging management software",
    ],
  },
  {
    title: "Development Institutions",
    need: "Energy access and climate impact",
    response: "Mini-grids and distributed energy",
    tags: ["Mini-Grids", "Distributed Energy"],
    imgSrc: "/assets/energex/ind-dev.jpg",
    detail:
      "Development institutions need bankable, inclusive energy-access solutions with durable operating models.",
    offerings: [
      "Solar home systems",
      "Hybrid mini-grids",
      "Prepaid metering",
      "Local operator training and O&M models",
    ],
  },
] as const;

/** Stable in-page id shared by the homepage tiles and /industries. */
export function customerSegmentId(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Alias used by existing homepage / industries components. */
export const industries = customers;

export const industriesSection = {
  label: "Who We Serve",
  headingLead: "Built Around",
  headingAccent: "the Energy Requirement.",
  supporting:
    "Documented target customer segments. Each context drives a different mix of generation, fuel, grid, storage and commercial structure.",
} as const;

/** Industrial verticals within SOW §10 Industrial Energy — not additional primary customer segments. */
export const industrialVerticals = [
  {
    title: "Mining & Metals",
    description: "Reliable power for mining and mineral processing, including aluminium and graphite operations.",
  },
  {
    title: "Cement & Heavy Industry",
    description: "Stable power for cement, steel and continuous heavy-industrial production loads.",
  },
  {
    title: "Industrial Parks & SEZs",
    description: "Integrated energy supply for industrial zones and special economic zones.",
  },
  {
    title: "Data Centers",
    description: "High-availability, scalable power pathways for digital infrastructure.",
  },
  {
    title: "Ports & Logistics",
    description: "Power and related infrastructure for ports, logistics hubs and trade zones.",
  },
  {
    title: "Commercial & Industrial Facilities",
    description: "Tailored C&I energy solutions for businesses seeking cost reduction and resilience.",
  },
] as const;
