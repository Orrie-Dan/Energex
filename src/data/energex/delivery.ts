/**
 * Source: Scope of Work §01 (brand lifecycle) and §17 (Project Delivery Framework + controls).
 */

/** Brand-level end-to-end lifecycle statement (SOW §01). Not the delivery process UI. */
export const brandLifecycle = [
  { title: "Develop", description: "Requirements, feasibility and project structuring." },
  { title: "Design", description: "Engineering and technology configuration." },
  { title: "Finance", description: "Commercial structuring and financing support." },
  { title: "Source", description: "OEM selection and global procurement." },
  { title: "Build", description: "EPC coordination, construction and commissioning." },
  { title: "Operate", description: "Operations, maintenance and monitoring." },
  { title: "Optimize", description: "Performance improvement, expansion and repowering." },
] as const;

/** @deprecated Prefer brandLifecycle for brand statement; deliveryFramework for How We Deliver. */
export const lifecycle = brandLifecycle;

export const lifecycleSection = {
  label: "How We Deliver",
  headingLead: "From Requirement",
  headingAccent: "to Long-Term Operation.",
  supporting:
    "A documented project delivery framework from client requirement through commercial operation, O&M and expansion.",
} as const;

/** Source: Scope of Work §17 Project Delivery Framework */
export const deliveryFramework = [
  {
    id: "01",
    title: "Client Requirement",
    description: "Define demand, reliability, tariff, schedule and site constraints.",
  },
  {
    id: "02",
    title: "Technical Assessment",
    description: "Assess load, site, fuel, grid and renewable resources.",
  },
  {
    id: "03",
    title: "Solution Engineering",
    description: "Select and configure the optimal technology mix.",
  },
  {
    id: "04",
    title: "Commercial Structuring",
    description: "Establish CAPEX, OPEX, LCOE, contracting and financing structure.",
  },
  {
    id: "05",
    title: "OEM / EPC Procurement",
    description: "Run technical and commercial sourcing with qualified partners.",
  },
  {
    id: "06",
    title: "Engineering & Construction",
    description: "Manage design, procurement, construction and interfaces.",
  },
  {
    id: "07",
    title: "Testing & Commissioning",
    description: "Verify safety, performance and contractual guarantees.",
  },
  {
    id: "08",
    title: "Commercial Operation",
    description: "Handover or commence the long-term operating phase.",
  },
  {
    id: "09",
    title: "O&M & Monitoring",
    description: "Optimize availability, efficiency and lifecycle performance.",
  },
  {
    id: "10",
    title: "Expansion / Repowering",
    description: "Add capacity, storage or technology upgrades as demand evolves.",
  },
] as const;

/** Source: Scope of Work §17 Expected Delivery Controls */
export const deliveryControls = [
  {
    title: "Governance",
    description:
      "Project-specific governance with defined decision rights, reporting and escalation procedures.",
  },
  {
    title: "HSE",
    description: "Formal HSE requirements and contractor compliance management.",
  },
  {
    title: "Vendor qualification",
    description: "Vendor prequalification and documented technical/commercial evaluation.",
  },
  {
    title: "QA/QC",
    description:
      "QA/QC plans covering manufacturing, FAT, shipment, installation and commissioning.",
  },
  {
    title: "Contract risk",
    description:
      "Risk allocation covering schedule, performance, warranty, liquidated damages and interfaces.",
  },
  {
    title: "Compliance",
    description:
      "Applicable local laws, permits, grid codes and recognized international technical standards.",
  },
  {
    title: "Project risk",
    description:
      "Insurance, logistics, currency, fuel-supply, political and counterparty risk assessed by project.",
  },
] as const;

/** Source: Scope of Work §19 Typical Deliverables & Responsibility Framework */
export const deliverableGroups = [
  {
    id: "01",
    title: "Development / Advisory",
    items: [
      "Demand and load assessments",
      "Site/resource screening",
      "Pre-feasibility and feasibility coordination",
      "CAPEX/OPEX/LCOE models",
      "Commercial/PPA structures",
      "Bankability and risk assessment",
    ],
  },
  {
    id: "02",
    title: "Engineering / Technical",
    items: [
      "Technology configuration",
      "Concept/basic engineering coordination",
      "Grid/interconnection studies",
      "Balance-of-plant definition",
      "Technical specifications and bid packages",
      "Detailed engineering management through partners",
    ],
  },
  {
    id: "03",
    title: "Procurement / Supply Chain",
    items: [
      "OEM prequalification and evaluation",
      "Commercial negotiation",
      "Factory audit and inspection",
      "Equipment supply and spares",
      "Logistics and customs coordination",
      "Vendor documentation and warranty coordination",
    ],
  },
  {
    id: "04",
    title: "EPC / Delivery",
    items: [
      "Construction planning and contractor coordination",
      "Project controls for schedule, cost and documentation",
      "QA/QC and HSE management",
      "FAT/SAT",
      "Commissioning and performance testing",
      "Handover and interface management",
    ],
  },
  {
    id: "05",
    title: "Operations / Lifecycle",
    items: [
      "Preventive/corrective maintenance",
      "Remote monitoring and reporting",
      "Spare-parts planning",
      "Warranty/OEM service coordination",
      "Major overhaul/rehabilitation planning",
      "Availability and lifecycle cost optimization",
    ],
  },
  {
    id: "06",
    title: "Digital / Commercial",
    items: [
      "Energy and asset dashboards",
      "Metering, billing and revenue monitoring",
      "Forecasting and dispatch support",
      "Fleet charging/network management",
      "Energy service and recurring contract structures",
    ],
  },
] as const;
