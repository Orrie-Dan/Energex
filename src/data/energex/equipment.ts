/**
 * Power Equipment Supply — website scope taken only from capability 11
 * (Equipment Trading & Global Procurement).
 * No manufacturers, SKUs, stock, specifications, pricing, certifications, or warranties.
 */

export type EquipmentCategory = {
  slug: string;
  title: string;
  /** Restates verified scope language. Not a product list. */
  description: string;
  scope: readonly string[];
  imgSrc: string;
  imgAlt: string;
};

export const equipmentPage = {
  eyebrow: "Power Equipment Supply",
  heading: "Equipment sourced for the project.",
  intro:
    "Equipment Trading & Global Procurement covers international trading and procurement with technical qualification and supply-chain management. The groups below organize that scope. This page is not a stocked catalogue.",
  boundary:
    "Energex does not publish manufacturers, product codes, specifications, prices, certifications, warranties, or availability here. Product pages will be added only when an approved record exists.",
  coordination:
    "Procurement coordination can include OEM evaluation, factory audit, logistics, and customs support. Those are sourcing activities, not a claim of certification or warranty.",
  inquiryHeading: "Equipment inquiries",
  inquiryBody:
    "Open the contact page to describe an equipment requirement. The form is a preview and does not send a message.",
  inquiryHref: "/contact?interest=equipment",
  inquiryLabel: "Discuss equipment supply",
} as const;

export const equipmentCategories: readonly EquipmentCategory[] = [
  {
    slug: "power-generation-equipment",
    title: "Power Generation Equipment",
    description: "Engines, turbines, and generators coordinated as project equipment supply.",
    scope: ["Engines", "Turbines", "Generators"],
    imgSrc: "/assets/energex/power.webp",
    imgAlt: "Waterfront power plant",
  },
  {
    slug: "solar-energy-storage",
    title: "Solar & Energy Storage",
    description: "Solar and battery equipment within the same procurement scope.",
    scope: ["Solar equipment", "Battery equipment"],
    imgSrc: "/assets/energex/renewables-storage.png",
    imgAlt: "Renewable generation and storage",
  },
  {
    slug: "transmission-distribution",
    title: "Transmission & Distribution",
    description: "Transformers, switchgear, cables, and substation equipment.",
    scope: ["Transformers", "Switchgear", "Cables", "Substation equipment"],
    imgSrc: "/assets/energex/grid.webp",
    imgAlt: "Electrical substation",
  },
  {
    slug: "charging-energy-controls",
    title: "Charging & Energy Controls",
    description: "EV chargers, smart meters, and digital controls.",
    scope: ["EV chargers", "Smart meters", "Digital controls"],
    imgSrc: "/assets/energex/fleet-charging.png",
    imgAlt: "Vehicle charging infrastructure",
  },
  {
    slug: "lng-cryogenic-equipment",
    title: "LNG & Cryogenic Equipment",
    description: "LNG equipment, pumps, compressors, and cryogenic systems.",
    scope: ["LNG equipment", "Pumps", "Compressors", "Cryogenic systems"],
    imgSrc: "/assets/energex/lng.webp",
    imgAlt: "LNG infrastructure",
  },
  {
    slug: "spare-parts-support",
    title: "Spare Parts & Support",
    description:
      "Spare parts and lifecycle replacement components, coordinated with logistics and customs support.",
    scope: ["Spare parts", "Lifecycle replacement components", "Logistics and customs support"],
    imgSrc: "/assets/energex/trading.webp",
    imgAlt: "Industrial equipment handling",
  },
] as const;

/** Homepage commercial card. Separate from the four solution families. */
export const equipmentSupplyCard = {
  href: "/equipment",
  title: "Power Equipment Supply",
  description:
    "International trading and procurement of generation, solar, storage, grid, charging, LNG, and spare-parts equipment.",
  imgSrc: "/assets/energex/trading.webp",
} as const;
