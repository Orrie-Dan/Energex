/**
 * Source: Scope of Work §§02–16 (website-facing capability numbers 01–15).
 * Document sections are numbered 02–16 because §01 is Purpose & Operating Model.
 */

export type CapabilityFamilySlug =
  | "power-generation"
  | "renewables-storage"
  | "grid-distributed-energy"
  | "project-delivery-lifecycle"
  | "cross-cutting";

export type Capability = {
  id: string;
  title: string;
  /** Short positioning sentence from SOW. */
  summary: string;
  /** Key included scope items (compressed from SOW bullets). */
  includes: readonly string[];
  familySlug: CapabilityFamilySlug;
  familyHref: string;
  imgSrc: string;
};

export const capabilities: readonly Capability[] = [
  {
    id: "01",
    title: "Project Development & Advisory",
    summary:
      "Converting an energy requirement into a technically defined and commercially structured opportunity.",
    includes: [
      "Demand, load-profile and reliability assessment",
      "Site screening and preliminary resource assessment",
      "Technology selection and configuration studies",
      "Pre-feasibility and feasibility coordination",
      "CAPEX, OPEX, LCOE and lifecycle cost analysis",
      "PPA support, bankability assessment and investor materials",
    ],
    familySlug: "project-delivery-lifecycle",
    familyHref: "/solutions/project-delivery-lifecycle",
    imgSrc: "/assets/energex/investment.webp",
  },
  {
    id: "02",
    title: "Power Generation",
    summary:
      "Flexible and utility-scale generation from distributed plants to large power stations.",
    includes: [
      "Natural-gas engines and gas turbine generation",
      "Open-cycle and combined-cycle (CCGT) plants",
      "Dual-fuel, diesel, LFO and HFO generation",
      "CHP / industrial cogeneration",
      "Containerized, skid-mounted and modular plants",
      "Balance of plant and rehabilitation / repowering",
    ],
    familySlug: "power-generation",
    familyHref: "/solutions/power-generation",
    imgSrc: "/assets/energex/power.webp",
  },
  {
    id: "03",
    title: "Renewable Energy",
    summary:
      "Renewable generation configured around resource, land, tariff and grid conditions.",
    includes: [
      "Utility-scale ground-mounted solar PV",
      "Commercial and industrial rooftop solar",
      "Floating solar and solar carports where appropriate",
      "Solar PV + BESS and solar + thermal hybrids",
      "Onshore and offshore wind; wind + solar + BESS hybrids",
      "CSP and captive renewable supply for industry",
    ],
    familySlug: "renewables-storage",
    familyHref: "/solutions/renewables-storage",
    imgSrc: "/assets/energex/renewables-storage.png",
  },
  {
    id: "04",
    title: "Battery Energy Storage Systems",
    summary:
      "Battery systems for utilities, renewable plants and industrial customers.",
    includes: [
      "Grid stabilization and frequency support",
      "Peak shaving and demand-charge management",
      "Renewable time shifting and curtailment reduction",
      "Backup, resilience, black-start and reserves",
      "Microgrid and islanded operation",
      "PCS, BMS, EMS integration and augmentation planning",
    ],
    familySlug: "renewables-storage",
    familyHref: "/solutions/renewables-storage",
    imgSrc: "/assets/energex/renewables-storage.png",
  },
  {
    id: "05",
    title: "LNG, Natural Gas & Gas-to-Power",
    summary:
      "Fuel infrastructure integrated with generation for complete fuel-to-power solutions.",
    includes: [
      "Mini and modular LNG receiving terminals",
      "Storage, cryogenic systems, BOG and regasification",
      "Truck loading and satellite LNG infrastructure",
      "FSRU / floating storage and regasification via partners",
      "Gas pipelines and plant fuel-gas systems",
      "Integrated LNG supply through to grid connection",
    ],
    familySlug: "power-generation",
    familyHref: "/solutions/power-generation",
    imgSrc: "/assets/energex/oil-and-gas.jpg",
  },
  {
    id: "06",
    title: "Floating Power Solutions",
    summary:
      "Rapid-deployment floating generation for coastal and port markets with qualified partners.",
    includes: [
      "Gas turbine and CCGT power barges",
      "Dual-fuel and engine-based power barges",
      "Floating LNG-to-power configurations",
      "FSRU / FSRP integration",
      "Floating BESS and auxiliary energy systems",
      "Marine engineering, mooring and electrical export coordination",
    ],
    familySlug: "power-generation",
    familyHref: "/solutions/power-generation",
    imgSrc: "/assets/energex/floating-power.png",
  },
  {
    id: "07",
    title: "Grid, Transmission & Distribution",
    summary:
      "Extending responsibility from the generating asset to interconnection and distribution.",
    includes: [
      "HV/MV AIS and GIS substations",
      "Power transformers, switchgear and protection",
      "Transmission lines and underground cable systems",
      "Distribution networks and feeder systems",
      "SCADA, synchronization and metering",
      "Power quality, reactive power and grid-code compliance",
    ],
    familySlug: "grid-distributed-energy",
    familyHref: "/solutions/grid-distributed-energy",
    imgSrc: "/assets/energex/grid.webp",
  },
  {
    id: "08",
    title: "Rural Electrification & Distributed Energy",
    summary:
      "Scalable decentralized solutions for underserved communities and remote loads.",
    includes: [
      "Solar home systems and productive-use packages",
      "Solar PV + BESS mini-grids",
      "Hybrid mini-grids with thermal backup where required",
      "Smart prepaid meters and PAYGO-compatible systems",
      "Community, telecom, healthcare and education electrification",
      "Local operator training and spare-parts planning",
    ],
    familySlug: "grid-distributed-energy",
    familyHref: "/solutions/grid-distributed-energy",
    imgSrc: "/assets/energex/rural-electrification.jpg",
  },
  {
    id: "09",
    title: "Industrial Energy Solutions",
    summary:
      "Captive and behind-the-meter solutions for energy-intensive customers.",
    includes: [
      "Mining, cement, steel, aluminium, graphite and manufacturing",
      "Industrial parks, ports, logistics and data centers",
      "Hybrid captive power: grid, gas, solar, wind and BESS",
      "Energy-efficiency and power-quality improvements",
      "Energy management and demand optimization",
      "Reliability planning for continuous industrial loads",
    ],
    familySlug: "grid-distributed-energy",
    familyHref: "/solutions/grid-distributed-energy",
    imgSrc: "/assets/energex/mining.jpg",
  },
  {
    id: "10",
    title: "E-Mobility & Charging Infrastructure",
    summary:
      "Charging infrastructure as equipment supply and energy-services business.",
    includes: [
      "AC, DC fast and ultra-fast charging",
      "Fleet, taxi, bus and commercial depot charging",
      "Battery swapping where commercially suitable",
      "Solar + BESS supported charging hubs",
      "Charging management software and payment integration",
      "EPC, Charging-as-a-Service and own-and-operate models",
    ],
    familySlug: "grid-distributed-energy",
    familyHref: "/solutions/grid-distributed-energy",
    imgSrc: "/assets/energex/fleet-charging.png",
  },
  {
    id: "11",
    title: "Equipment Trading & Global Procurement",
    summary:
      "International trading and procurement with technical qualification and supply-chain management.",
    includes: [
      "Solar, battery, engine, turbine and generator equipment",
      "Transformers, switchgear, cables and substation gear",
      "EV chargers, smart meters and digital controls",
      "LNG equipment, pumps, compressors and cryogenic systems",
      "Spare parts and lifecycle replacement components",
      "OEM evaluation, factory audit, logistics and customs support",
    ],
    familySlug: "project-delivery-lifecycle",
    familyHref: "/solutions/project-delivery-lifecycle",
    imgSrc: "/assets/energex/investment.webp",
  },
  {
    id: "12",
    title: "EPC & Project Management",
    summary:
      "Prime EPC, EPC integrator or owner's representative roles depending on project conditions.",
    includes: [
      "Concept and basic engineering coordination",
      "Detailed engineering management through partners",
      "Procurement and vendor management",
      "Construction planning and project controls",
      "QA/QC, HSE, FAT and SAT",
      "Commissioning, performance testing and handover",
    ],
    familySlug: "project-delivery-lifecycle",
    familyHref: "/solutions/project-delivery-lifecycle",
    imgSrc: "/assets/energex/investment.webp",
  },
  {
    id: "13",
    title: "Financing & Investment Solutions",
    summary:
      "Support structuring financeable projects, with selective SPV equity participation where appropriate.",
    includes: [
      "EPC + Finance structures",
      "IPP and long-term PPA structures",
      "BOT, BOOT and BOO models",
      "Lease-to-own and Energy-as-a-Service",
      "Equipment financing and vendor-credit coordination",
      "Banks, ECAs, DFIs, funds and climate-finance engagement",
    ],
    familySlug: "project-delivery-lifecycle",
    familyHref: "/solutions/project-delivery-lifecycle",
    imgSrc: "/assets/energex/investment.webp",
  },
  {
    id: "14",
    title: "Operations, Maintenance & Asset Management",
    summary:
      "Long-term lifecycle services after commercial operation begins.",
    includes: [
      "Preventive and corrective maintenance",
      "Remote monitoring and performance reporting",
      "Spare-parts and consumables management",
      "Warranty and OEM service coordination",
      "Major overhaul and BESS augmentation planning",
      "Availability tracking and lifecycle cost optimization",
    ],
    familySlug: "project-delivery-lifecycle",
    familyHref: "/solutions/project-delivery-lifecycle",
    imgSrc: "/assets/energex/investment.webp",
  },
  {
    id: "15",
    title: "Digital Energy Platform",
    summary:
      "A unified digital layer that can be progressively deployed across owned and managed assets.",
    includes: [
      "Remote monitoring of generation, storage, grid and charging",
      "Predictive maintenance and condition monitoring",
      "Energy forecasting and automated dispatch support",
      "Smart metering, billing and revenue monitoring",
      "Fleet charging and charger-network management",
      "VPP aggregation where market rules permit",
    ],
    familySlug: "cross-cutting",
    familyHref: "/solutions",
    imgSrc: "/assets/energex/grid-future.webp",
  },
] as const;

export function getCapabilityById(id: string): Capability | undefined {
  return capabilities.find((c) => c.id === id);
}

export function getCapabilitiesByIds(ids: readonly string[]): Capability[] {
  return ids
    .map((id) => getCapabilityById(id))
    .filter((c): c is Capability => c != null);
}

export const solutionsIndexPage = {
  eyebrow: "Solutions",
  headingLead: "Energy Infrastructure,",
  headingAccent: "From Concept to Operation.",
  intro:
    "Energex coordinates technology-agnostic solutions across fifteen specialist capabilities — from early development and generation through grid, industrial energy, procurement, financing support, operations and digital layers. Specialist partners may execute defined packages while Energex retains the client interface and delivery framework.",
  familiesNote:
    "The four solution families on the homepage are executive groupings. The complete portfolio is listed below.",
  connectHeading: "How capabilities connect",
  connectBody:
    "Capabilities are assembled around project need. Generation, fuel, storage, grid and delivery packages can be combined under one commercial and technical interface — without locking clients into a single technology path.",
  finalCta: {
    heading: "Ready to Shape Your Energy Project?",
    href: "/contact",
    label: "Start a Project",
  },
} as const;
