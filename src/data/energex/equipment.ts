/**
 * Power Equipment Supply — website scope taken only from capability 11
 * (Equipment Trading & Global Procurement).
 * No manufacturers, SKUs, stock, specifications, pricing, certifications, or warranties.
 */

export type EquipmentCategory = {
  /** Route segment under /equipment. */
  slug: string;
  title: string;
  /** Restates verified scope language. Not a product list. */
  description: string;
  scope: readonly string[];
  imgSrc: string;
  imgAlt: string;
};

/** Sourcing activities named in capability 11. Not certifications or warranties. */
export const equipmentProcurement = [
  "OEM evaluation",
  "Factory audit",
  "Logistics support",
  "Customs support",
] as const;

export const equipmentPage = {
  eyebrow: "Power Equipment Supply",
  heading: "Powering Projects with the Right Equipment.",
  intro:
    "From generation and energy storage to grid infrastructure, ENERGEX coordinates equipment sourcing and procurement for energy projects.",
  /** Concise sourcing disclaimer shown below the category grid. */
  note:
    "This is not a stocked catalogue. Manufacturers, specifications, prices, certifications, warranties and availability are not published here. Sourcing support such as OEM evaluation, factory audit, logistics and customs is not a claim of certification or warranty.",
  boundary:
    "Energex does not publish manufacturers, product codes, specifications, prices, certifications, warranties, or availability here. Product pages will be added only when an approved record exists.",
  coordination:
    "Procurement coordination can include OEM evaluation, factory audit, logistics, and customs support. Those are sourcing activities, not a claim of certification or warranty.",
  inquiryHeading: "Equipment inquiries",
  inquiryBody:
    "Open the contact page to describe an equipment requirement. The form is a preview and does not send a message.",
  /** Shown only when live delivery is configured. Not a quotation. */
  inquiryBodyLive:
    "Open the contact page to describe an equipment requirement and send it to the ENERGEX team. Sending a request is not a quotation.",
  quoteNote:
    "Describe the requirement on the inquiry form. Delivery is not connected, so the form does not send a message or issue a quotation.",
  quoteNoteLive:
    "Describe the requirement on the inquiry form and send it to the ENERGEX team. Sending a request does not issue a quotation.",
  inquiryHref: "/contact?interest=equipment",
  inquiryLabel: "Discuss equipment supply",
} as const;

export const equipmentCategories: readonly EquipmentCategory[] = [
  {
    slug: "power-generation",
    title: "Power Generation Equipment",
    description: "Engines, turbines, and generators coordinated as project equipment supply.",
    scope: ["Engines", "Turbines", "Generators"],
    imgSrc: "/assets/energex/power.webp",
    imgAlt: "Waterfront power plant",
  },
  {
    slug: "solar-storage",
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
    slug: "charging-controls",
    title: "Charging & Energy Controls",
    description: "EV chargers, smart meters, and digital controls.",
    scope: ["EV chargers", "Smart meters", "Digital controls"],
    imgSrc: "/assets/energex/fleet-charging.png",
    imgAlt: "Vehicle charging infrastructure",
  },
  {
    slug: "lng-cryogenic",
    title: "LNG & Cryogenic Equipment",
    description: "LNG equipment, pumps, compressors, and cryogenic systems.",
    scope: ["LNG equipment", "Pumps", "Compressors", "Cryogenic systems"],
    imgSrc: "/assets/energex/lng.webp",
    imgAlt: "LNG infrastructure",
  },
  {
    slug: "spare-parts",
    title: "Spare Parts & Support",
    description:
      "Spare parts and lifecycle replacement components, coordinated with logistics and customs support.",
    scope: ["Spare parts", "Lifecycle replacement components"],
    imgSrc: "/assets/energex/trading-hd.webp",
    imgAlt: "Industrial equipment handling",
  },
] as const;

/** Homepage commercial card. Separate from the four solution families. */
export const equipmentSupplyCard = {
  href: "/equipment",
  title: "Power Equipment Supply",
  description:
    "International trading and procurement of generation, solar, storage, grid, charging, LNG, and spare-parts equipment.",
  imgSrc: "/assets/energex/trading-hd.webp",
} as const;

export function equipmentCategoryHref(slug: string): string {
  return `/equipment/${slug}`;
}

export function equipmentQuoteHref(slug: string): string {
  return `/contact?interest=equipment&category=${encodeURIComponent(slug)}`;
}

export function getEquipmentCategory(slug: string): EquipmentCategory | undefined {
  const key = slug.trim().toLowerCase();
  return equipmentCategories.find((category) => category.slug === key);
}
