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
    need: "Generation capacity, grid stability and electrification.",
    response: "IPP / EPC / BESS / Grid Solutions.",
    tags: ["IPP", "EPC", "BESS", "Grid Solutions"],
    imgSrc: "/assets/energex/grid.webp",
    detail:
      "Public utilities and government programs need dependable capacity additions, stronger grids and practical electrification pathways.",
    offerings: [
      "Utility-scale generation, BESS and hybrid capacity packages",
      "HV/MV substations, T&D reinforcement and grid integration",
      "Rural electrification and mini-grid programs",
      "IPP, EPC and public–private project structuring support",
    ],
  },
  {
    title: "Independent Power Producers",
    need: "Development and execution.",
    response: "Engineering / Sourcing / EPC Integration.",
    tags: ["Engineering", "Sourcing", "EPC Integration"],
    imgSrc: "/assets/energex/power.webp",
    detail:
      "IPPs need a partner that can move from opportunity screening to bankable design, OEM selection and delivery without fragmenting accountability.",
    offerings: [
      "Development support, feasibility coordination and bankability packages",
      "Technology selection and OEM/EPC technical evaluation",
      "Global procurement and supply-chain coordination",
      "EPC integration, owner's representative and commissioning support",
    ],
  },
  {
    title: "Mining & Heavy Industry",
    need: "Reliable captive power.",
    response: "Hybrid Generation / Storage.",
    tags: ["Hybrid Generation", "Storage", "Captive Power"],
    imgSrc: "/assets/energex/mining.jpg",
    detail:
      "Mining and heavy industry need cost-competitive, high-availability captive and hybrid power — often behind the meter.",
    offerings: [
      "Captive and hybrid power combining grid, gas, solar, wind and BESS",
      "Emergency and continuous generation for industrial loads",
      "Energy-efficiency and power-quality improvements",
      "Demand optimization, reliability planning and long-term O&M",
    ],
  },
  {
    title: "Industrial Parks & Data Centers",
    need: "High-availability energy.",
    response: "Integrated Utility Infrastructure.",
    tags: ["Integrated Utility", "Infrastructure"],
    imgSrc: "/assets/energex/grid-future.webp",
    detail:
      "Industrial zones and data centers require scalable, high-availability energy infrastructure with clear expansion paths.",
    offerings: [
      "Integrated utility infrastructure for parks and campuses",
      "High-availability power pathways for data centers",
      "On-site solar, BESS, backup generation and EMS layers",
      "Interconnection, distribution and phased capacity expansion",
    ],
  },
  {
    title: "Oil & Gas / LNG",
    need: "Fuel and power infrastructure.",
    response: "LNG-to-Power / Gas Systems.",
    tags: ["LNG-to-Power", "Gas Systems"],
    imgSrc: "/assets/energex/oil-and-gas.jpg",
    detail:
      "Oil, gas and LNG stakeholders need integrated fuel-to-power pathways from receiving through generation and grid connection.",
    offerings: [
      "Mini LNG terminals, storage and regasification packages",
      "FSRU/FSRP pathways and floating LNG-to-power configurations",
      "Gas pipelines, metering and power-plant fuel-gas systems",
      "Integrated LNG-to-power project development and delivery support",
    ],
  },
  {
    title: "Commercial & Real Estate",
    need: "Cost reduction and resilience.",
    response: "C&I Solar / BESS / EMS.",
    tags: ["C&I Solar", "BESS", "Energy Management"],
    imgSrc: "/assets/energex/commercial-campus.png",
    detail:
      "Commercial buildings and real-estate portfolios seek lower energy cost, higher resilience and cleaner on-site generation.",
    offerings: [
      "Rooftop and C&I solar, carports and hybrid configurations",
      "BESS for peak shaving, backup and demand-charge management",
      "Energy management, metering and performance visibility",
      "Phased retrofit and Energy-as-a-Service style commercial models",
    ],
  },
  {
    title: "Fleet Operators",
    need: "Charging capacity.",
    response: "Charging Hubs / Software.",
    tags: ["Charging Hubs", "Charging Management"],
    imgSrc: "/assets/energex/fleet-charging.png",
    detail:
      "Fleet operators need charging capacity that fits depot operations, power availability and commercial models.",
    offerings: [
      "AC, DC fast and ultra-fast charging infrastructure",
      "Fleet, bus and commercial depot charging hubs",
      "Solar + BESS supported hubs and battery swapping where suitable",
      "Charging management software and flexible commercial models",
    ],
  },
  {
    title: "Development Institutions",
    need: "Energy access and climate impact.",
    response: "Mini-Grids / Distributed Energy.",
    tags: ["Mini-Grids", "Distributed Energy"],
    imgSrc: "/assets/energex/rural-electrification.jpg",
    detail:
      "Development institutions need bankable, inclusive energy-access solutions with durable operating models.",
    offerings: [
      "Solar home systems and community electrification programs",
      "Solar and hybrid mini-grids with productive-use focus",
      "Smart prepaid / PAYGO metering and revenue monitoring",
      "Local operator training, spare-parts planning and O&M models",
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
