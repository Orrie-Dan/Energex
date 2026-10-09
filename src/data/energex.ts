/**
 * ENERGEX site content barrel.
 * Authoritative business content: Scope of Work (September 2026).
 * Domain modules live under ./energex/*.
 */

export {
  capabilities,
  solutionsIndexPage,
  getCapabilityById,
  getCapabilitiesByIds,
  type Capability,
  type CapabilityFamilySlug,
} from "./energex/capabilities";

export {
  solutionFamilyDefs,
  familyLabels,
  SOLUTION_FAMILY_ORDER,
  getFamilyDefBySlug,
  type SolutionFamilyDef,
  type PrimaryFamilySlug,
} from "./energex/families";

export {
  brandLifecycle,
  lifecycle,
  lifecycleSection,
  deliveryFramework,
  deliveryControls,
  deliverableGroups,
} from "./energex/delivery";

export {
  customerSegmentId,
  customers,
  industries,
  industriesSection,
  industrialVerticals,
  type CustomerSegment,
} from "./energex/customers";

export {
  marketPhases,
  marketStrategySection,
  marketBridge,
} from "./energex/markets";

export {
  organizationFunctions,
  organizationSection,
} from "./energex/organization";

export {
  revenueModels,
  financingStructures,
  financingNote,
} from "./energex/commercial";

export {
  equipmentCategories,
  equipmentCategoryHref,
  equipmentPage,
  equipmentProcurement,
  equipmentQuoteHref,
  equipmentSupplyCard,
  getEquipmentCategory,
  type EquipmentCategory,
} from "./energex/equipment";

export const brand = {
  name: "ENERGEX GLOBAL SOLUTIONS",
  shortName: "ENERGEX",
  taglinePrimary: "ONE PARTNER. EVERY ENERGY SOLUTION.",
  taglineSecondary: "FROM CONCEPT TO POWER.",
  taglineCorporate: "ONE COMPANY. ONE INTEGRATED ENERGY SOLUTION.",
  addressLines: ["18 Harbour Road", "Wan Chai", "Hong Kong"] as const,
  registration: "59818014-000-05-26-5",
  natureOfBusiness: "Trading",
  logoLight: "/assets/energex/logo-cropped.png",
  logoDark: "/assets/energex/logo-on-dark-cropped.png",
};

/** Primary nav — Projects omitted until verified case studies are supplied. */
export const navLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/equipment", label: "Equipment Supply" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const navCta = { href: "/contact", label: "Start a Project" } as const;

export const hero = {
  eyebrow: "Integrated Energy Solutions",
  headlineLead: "One Partner.",
  headlineAccent: "Every Energy Solution.",
  supporting: "From Concept to Power.",
  body: "Energex gives energy buyers one interface for engineering, equipment sourcing, project delivery, and lifecycle support — from the first requirement through operations.",
  primaryCta: { href: "/solutions", label: "Explore Solutions" },
  secondaryCta: { href: "/contact?interest=project", label: "Start a Project" },
};

export const about = {
  eyebrow: "About Energex",
  heading: "One Company. One Integrated Energy Solution.",
  body: "ENERGEX Global Solutions is structured as an integrated energy solutions platform that provides clients with a single commercial and technical interface across the full energy project lifecycle.",
  introExtended:
    "Its role can connect project development, engineering, global procurement, EPC delivery, financing support, operations and long-term asset management under one delivery framework.",
  operatingModel:
    "The operating model is technology-agnostic: each client requirement is assessed and the most appropriate combination of conventional generation, renewable energy, battery storage, grid infrastructure, LNG and gas-to-power, distributed energy, e-mobility and digital energy systems is assembled around the project need. Energex operates as an integrator rather than manufacturing every technology internally — specialist OEMs, EPC contractors, engineering firms, shipyards, technology providers, financial institutions, logistics providers and local contractors may execute defined packages while Energex retains the client interface, project integration, commercial coordination and overall delivery framework.",
  cta: { href: "/about", label: "About Energex" },
};

/** Company Intro pillars — retained on About for brand narrative; not SOW § numbered. */
export const corePillars = [
  {
    title: "Integrated Solutions",
    description: "End-to-end energy solutions under one commercial and technical interface.",
  },
  {
    title: "Global Partnership",
    description: "A network of world-class OEMs, engineering, EPC, finance and local partners.",
  },
  {
    title: "Bankable Projects",
    description: "Structuring technically sound, commercially viable and financeable projects.",
  },
  {
    title: "Sustainable Impact",
    description: "Reliable, affordable and cleaner energy for utilities, industry and communities.",
  },
] as const;

export const visionMission = {
  vision: {
    title: "Vision",
    body: "To become a leading integrated energy solutions platform connecting world-class technology, capital and execution capabilities with the growing energy needs of emerging markets.",
  },
  mission: {
    title: "Mission",
    body: "To provide clients with a single point of responsibility for their energy requirements — from identifying the problem to delivering and maintaining the operating asset.",
  },
} as const;

export const solutionFamilies = [
  {
    href: "/solutions/power-generation",
    title: "Power & Generation",
    description:
      "Power generation, LNG & gas-to-power, and floating power — one of four executive families spanning the full portfolio.",
    imgSrc: "/assets/energex/power.webp",
    srcSet: "/assets/energex/power.webp 1400w",
    imgSrc2: "/assets/energex/floating-power.png",
    srcSet2: "/assets/energex/floating-power.png 1400w",
  },
  {
    href: "/solutions/renewables-storage",
    title: "Renewables & Storage",
    description:
      "Renewable energy and battery storage capabilities grouped for executive overview.",
    imgSrc: "/assets/energex/renewables-storage.png",
    srcSet: "/assets/energex/renewables-storage.png 1400w",
    imgSrc2: "/assets/energex/renewables-storage.png",
    srcSet2: "/assets/energex/renewables-storage.png 1400w",
  },
  {
    href: "/solutions/grid-distributed-energy",
    title: "Grid & Distributed Energy",
    description:
      "Grid, rural electrification, industrial energy and e-mobility capabilities.",
    imgSrc: "/assets/energex/grid.webp",
    srcSet: "/assets/energex/grid.webp 1400w",
    imgSrc2: "/assets/energex/grid-future.webp",
    srcSet2: "/assets/energex/grid-future.webp 1400w",
  },
  {
    href: "/solutions/project-delivery-lifecycle",
    title: "Project Delivery & Lifecycle",
    description:
      "Development, trading, EPC, financing support and O&M — with digital energy as a cross-cutting layer.",
    imgSrc: "/assets/energex/investment.webp",
    srcSet: "/assets/energex/investment.webp 1400w",
    imgSrc2: "/assets/energex/investment.webp",
    srcSet2: "/assets/energex/investment.webp 1400w",
  },
] as const;

export function solutionFamilyMediaCards() {
  return solutionFamilies.map((family) => ({
    href: family.href,
    title: family.title,
    title2: family.title,
    description: family.description,
    title3: family.description,
    height: "600",
    imgSrc: family.imgSrc,
    srcSet: family.srcSet,
    width: "1400",
    title4: family.description,
    height2: "600",
    imgSrc2: family.imgSrc2,
    srcSet2: family.srcSet2,
    width2: "1400",
  }));
}

export const whyEnergex = {
  label: "Why ENERGEX",
  headingLead: "One interface",
  headingAccent: "across the work.",
  supporting:
    "Four ways Energex can take responsibility around an energy requirement. These describe how the company can participate. They are not a record of completed projects.",
  pillars: [
    {
      number: "01",
      title: "Engineering",
      body: "Define the technical configuration around load, site, fuel or resource, and the grid or industrial connection.",
    },
    {
      number: "02",
      title: "Global Sourcing",
      body: "Qualify and coordinate OEM equipment and supply packages, including factory audit, logistics, and customs support.",
    },
    {
      number: "03",
      title: "Project Delivery",
      body: "Integrate engineering, procurement, and construction interfaces while Energex keeps the client relationship.",
    },
    {
      number: "04",
      title: "Lifecycle Support",
      body: "Plan operations, maintenance, spare parts, and performance follow-through after commercial operation.",
    },
  ],
} as const;

export const whySlides = [
  {
    title: "One Integrated Interface",
    description: "One commercial and technical interface across the project lifecycle.",
  },
  {
    title: "Technology Agnostic",
    description: "Solutions configured around project requirements rather than a single technology.",
  },
  {
    title: "Global Sourcing",
    description: "Qualified OEMs, engineering partners and supply-chain coordination.",
  },
  {
    title: "Flexible Delivery",
    description:
      "Developer, advisor, supplier, EPC integrator, owner's representative, operator or asset manager depending on the project.",
  },
  {
    title: "Lifecycle Focus",
    description:
      "From initial requirement through commercial operation, monitoring, optimization and expansion.",
  },
] as const;

export const integratorModel = {
  label: "The Energex Model",
  headingLead: "One Partner.",
  headingAccent: "Every Moving Part.",
  supporting:
    "Energex coordinates the technologies, partners and delivery capabilities required around each project — through one commercial and technical interface.",
  closing: "One commercial + technical interface",
  closingLines: ["One commercial +", "technical interface"] as const,
  node: "ENERGEX",
  client: "CLIENT",
  // Simplified six-node visualization — not a complete organizational structure.
  // Source also references shipyards and technology providers.
  partners: [
    { id: "engineering", label: "Engineering", number: "01" },
    { id: "oems", label: "OEMs", number: "02" },
    { id: "epc", label: "EPC", number: "03" },
    { id: "finance", label: "Finance", number: "04" },
    { id: "logistics", label: "Logistics", number: "05" },
    { id: "local", label: "Local Partners", number: "06" },
  ],
} as const;

export const scale = {
  from: "1 MW",
  to: "1 GW+",
  label: "Power at Every Scale.",
  supporting: "From distributed energy systems to utility-scale power infrastructure.",
};

export const deliveryRoles = [
  "Development",
  "Technical / Commercial Advisory",
  "Equipment Supply",
  "EPC Integration",
  "Prime EPC Contractor",
  "Owner's Representative",
  "O&M",
  "Asset Management",
  "Selective Investment / Co-Development",
] as const;

export const deliveryFlexibility = {
  label: "How We Can Participate",
  headingLead: "One Platform.",
  headingAccent: "Built Around the Project.",
  supporting:
    "Depending on project scale, risk allocation, licensing and commercial structure, Energex can participate in different roles across the project lifecycle.",
  financingNote:
    "Financing support can include IPP/PPA, BOT/BOOT/BOO, lease-to-own and Energy-as-a-Service structuring, plus investor and lender coordination — with selective SPV participation where appropriate. Energex is not a bank.",
  cta: { href: "/about", label: "About Energex" },
  matrix: [
    { left: "Development", right: "EPC Integration" },
    { left: "Advisory", right: "Equipment Supply" },
    { left: "Owner's Representative", right: "O&M" },
    { left: "Asset Management", right: "Financing Support" },
    { left: "Prime EPC Contractor", right: "Selective Investment" },
  ],
} as const;

export const digitalEnergy = {
  label: "Digital Energy",
  headingLead: "Energy.",
  headingAccent: "Connected.",
  supporting:
    "Energex can progressively deploy a unified digital layer across owned and managed assets — connecting generation, storage, grid and charging for monitoring, predictive maintenance, forecasting, dispatch, metering, billing and VPP aggregation where market rules permit.",
  layers: ["Generation", "Storage", "Grid", "Charging"] as const,
  capabilities: [
    "Monitor",
    "Predict",
    "Forecast",
    "Dispatch",
    "Meter",
    "Bill",
    "Optimize",
    "Aggregate",
  ] as const,
} as const;

export const digitalEnergyCapabilities = digitalEnergy.capabilities;

export const contactPage = {
  eyebrow: "Contact",
  heading: "Start a Project",
  supporting:
    "Tell us about your energy requirement — demand, site, fuel or renewable resources, schedule and commercial objectives. Energex will help shape the right technical and commercial pathway.",
  topics: [
    "Power generation, LNG-to-power and floating power",
    "Renewables, BESS and hybrid systems",
    "Grid, mini-grids and rural electrification",
    "Industrial captive power and e-mobility",
    "Development, EPC, procurement and financing support",
    "O&M, asset management and digital energy",
  ],
  formNote:
    "Form preview only. Inquiry delivery is not connected, so nothing on this page is emailed. Direct email and phone lines will be published when confirmed.",
  /** Shown only when live delivery is configured (NEXT_PUBLIC_INQUIRY_DELIVERY_ENABLED). */
  formNoteLive:
    "Sending this form emails your details to the ENERGEX team so they can respond. Do not include confidential information you do not want sent by email.",
} as const;

export const contactClose = {
  label: "Contact",
  heading: "Project and equipment inquiries.",
  body: "Choose a path. Both open a page on this site. Nothing is submitted from the homepage.",
  project: { href: "/contact?interest=project", label: "Project inquiries" },
  equipment: { href: "/equipment#inquiry", label: "Equipment inquiries" },
} as const;

/** Approved public evidence. Leave empty until a record is cleared for publication. */
export type ApprovedEvidence = {
  id: string;
  title: string;
  summary: string;
  kind: "Project" | "Delivery" | "Credential";
};

export const approvedEvidence: readonly ApprovedEvidence[] = [];

export const evidenceSection = {
  label: "Capabilities & Evidence",
  headingLead: "What can be stated",
  headingAccent: "today.",
  supporting:
    "Capabilities and delivery methods are listed separately from project evidence. Completed projects, clients, and credentials appear only after they are approved for publication.",
  empty: "No project, client, delivery, or credential record is approved for publication yet.",
  strengthsLabel: "Verified capabilities — not completed-project claims",
} as const;

export const capabilityStrengths = [
  {
    title: "Fifteen specialist capabilities",
    body: "Development, generation, renewables, storage, grid, industrial energy, procurement, EPC, financing support, operations, and a digital layer.",
    href: "/solutions",
  },
  {
    title: "Power equipment supply",
    body: "International trading and procurement with technical qualification and supply-chain management.",
    href: "/equipment",
  },
  {
    title: "Ten-stage delivery framework",
    body: "From the client requirement through testing, commercial operation, monitoring, and expansion.",
    href: "/about#delivery",
  },
  {
    title: "Configurable participation",
    body: "Developer, advisor, equipment supplier, EPC integrator, owner's representative, operator, or asset manager — set per project.",
    href: "/about#roles",
  },
] as const;

export const projectsPage = {
  eyebrow: "Project Experience",
  heading: "Verified project case studies are being prepared for publication.",
  body: "Selected project references will be published as they are cleared for public disclosure. Energex does not invent case studies — portfolio materials will reflect real assignments, partnerships and operating assets. Until then, explore Solutions or start a project conversation.",
} as const;

export const finalCta = {
  headingLead: "Let's Power",
  headingAccent: "What's Next.",
  heading: "Let's Power What's Next.",
  body: "From concept to operation, Energex brings together the technologies, partners and project capabilities required around your energy needs.",
  cta: { href: "/contact", label: "Start a Project" },
};

export const footer = {
  solutions: [
    { href: "/solutions/power-generation", label: "Power & Generation" },
    { href: "/solutions/renewables-storage", label: "Renewables & Storage" },
    { href: "/solutions/grid-distributed-energy", label: "Grid & Distributed Energy" },
    { href: "/solutions/project-delivery-lifecycle", label: "Project Delivery & Lifecycle" },
    { href: "/equipment", label: "Power Equipment Supply" },
    { href: "/solutions", label: "All Capabilities" },
  ],
  delivery: [
    { href: "/about#delivery", label: "Delivery Framework" },
    { href: "/about#controls", label: "Delivery Controls" },
    { href: "/solutions/project-delivery-lifecycle", label: "Global Procurement" },
    { href: "/solutions/project-delivery-lifecycle", label: "Financing Support" },
    { href: "/solutions/project-delivery-lifecycle", label: "O&M & Asset Management" },
    { href: "/solutions", label: "Digital Energy" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/industries", label: "Industries" },
    { href: "/contact", label: "Contact" },
  ],
};
