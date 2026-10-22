/**
 * Power Equipment Supply — website scope taken only from capability 11
 * (Equipment Trading & Global Procurement).
 * No manufacturers, SKUs, stock, specifications, pricing, certifications, or warranties.
 */

/** An equipment type sourced within a category. A type, not a product or model. */
export type EquipmentScopeItem = {
  label: string;
  detail: string;
};

export type EquipmentCategory = {
  /** Route segment under /equipment. */
  slug: string;
  title: string;
  /** Restates verified scope language. Not a product list. */
  description: string;
  scope: readonly EquipmentScopeItem[];
  /** Highlighted in the category list on /equipment. */
  featured?: boolean;
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
  /** One line per `equipmentProcurement` item, same order. Sourcing activities only. */
  procurementDetails: [
    "Manufacturers are evaluated against the project requirement as part of technical qualification.",
    "Factory audits can be coordinated during sourcing, before equipment leaves the manufacturer.",
    "Shipping is coordinated as part of supply-chain management, from the manufacturer toward the project site.",
    "Customs support is coordinated for delivery into the destination country.",
  ],
  inquiryHref: "/contact?interest=equipment",
  inquiryLabel: "Discuss equipment supply",
} as const;

export const equipmentCategories: readonly EquipmentCategory[] = [
  {
    slug: "generators-engines",
    title: "Generators & Engines",
    description:
      "Generator sets and engines for baseload, standby and peaking duty — for a single unit or a full power station.",
    scope: [
      { label: "Diesel & HFO gensets", detail: "Diesel and heavy-fuel-oil generator sets." },
      { label: "Gas & dual-fuel engines", detail: "Gas and dual-fuel reciprocating engines." },
      { label: "Generators", detail: "Alternators and generator ends." },
      { label: "Balance of plant", detail: "Auxiliary equipment for engine power stations." },
    ],
    featured: true,
    imgSrc: "/assets/energex/power.webp",
    imgAlt: "Waterfront power plant",
  },
  {
    slug: "turbines",
    title: "Turbines",
    description: "Gas and steam turbines for utility, IPP and industrial generation.",
    scope: [
      { label: "Gas turbines", detail: "Simple-cycle and combined-cycle units." },
      { label: "Steam turbines", detail: "Combined-cycle and industrial applications." },
      { label: "Turbine auxiliaries", detail: "Associated balance-of-plant equipment." },
    ],
    imgSrc: "/assets/energex/grid-future.webp",
    imgAlt: "Thermal power plant connected to the grid",
  },
  {
    slug: "transmission-distribution",
    title: "Transmission & Distribution",
    description: "Transformers, switchgear, cables and substation equipment.",
    scope: [
      { label: "Transformers", detail: "Power and distribution transformers." },
      { label: "Switchgear", detail: "Medium- and high-voltage switchgear." },
      { label: "Cables", detail: "Power cables and accessories." },
      { label: "Substation equipment", detail: "Protection, control and substation packages." },
    ],
    imgSrc: "/assets/energex/grid.webp",
    imgAlt: "Electrical substation",
  },
  {
    slug: "solar-storage",
    title: "Solar & Storage",
    description: "Solar and battery energy storage (BESS) equipment within the same procurement scope.",
    scope: [
      { label: "Solar modules", detail: "PV modules for utility, commercial and off-grid sites." },
      { label: "Inverters", detail: "String and central inverters." },
      { label: "Battery storage (BESS)", detail: "Battery energy storage systems." },
    ],
    imgSrc: "/assets/energex/renewables-storage.png",
    imgAlt: "Renewable generation and storage",
  },
  {
    slug: "charging-controls",
    title: "Charging & Controls",
    description: "EV chargers, smart meters and digital controls.",
    scope: [
      { label: "EV chargers", detail: "AC and DC charging equipment." },
      { label: "Smart meters", detail: "Metering for billing and monitoring." },
      { label: "Digital controls", detail: "Monitoring and control systems." },
    ],
    imgSrc: "/assets/energex/fleet-charging.png",
    imgAlt: "Vehicle charging infrastructure",
  },
  {
    slug: "lng-cryogenic",
    title: "LNG & Cryogenic",
    description: "LNG equipment, pumps, compressors and cryogenic systems.",
    scope: [
      { label: "LNG equipment", detail: "Storage and regasification equipment." },
      { label: "Pumps", detail: "Cryogenic and transfer pumps." },
      { label: "Compressors", detail: "Gas and boil-off gas compressors." },
      { label: "Cryogenic systems", detail: "Vaporisers and cryogenic process systems." },
    ],
    imgSrc: "/assets/energex/lng.webp",
    imgAlt: "LNG infrastructure",
  },
  {
    slug: "spare-parts",
    title: "Spare Parts",
    description: "Parts and components for installed fleets across all of the above.",
    scope: [
      { label: "Engine parts", detail: "Cylinder heads, liners, pistons, injectors." },
      { label: "Turbocharger parts", detail: "Cartridges and overhaul kits." },
      { label: "Electrical components", detail: "Breakers, relays and AVRs." },
      { label: "Overhaul kits", detail: "Planned-maintenance kits." },
    ],
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
