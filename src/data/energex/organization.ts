/**
 * Source: Scope of Work §19 Organization & Key Functions.
 * Key functions only — the source does NOT define reporting lines.
 * Do NOT invent hierarchy.
 */

export const organizationFunctions = [
  {
    id: "01",
    title: "Board / Executive Leadership",
    description: "Strategy, investment approvals, governance and major partnerships.",
  },
  {
    id: "02",
    title: "Business Development",
    description: "Origination, client management and market expansion.",
  },
  {
    id: "03",
    title: "Engineering & Solutions",
    description: "System design, technical due diligence and technology selection.",
  },
  {
    id: "04",
    title: "Projects / EPC",
    description: "Project controls, procurement, construction and commissioning.",
  },
  {
    id: "05",
    title: "Supply Chain & Trading",
    description: "OEM management, commercial negotiation, inspection and logistics.",
  },
  {
    id: "06",
    title: "Finance & Investment",
    description: "Modeling, financing, SPV structuring and investor relations.",
  },
  {
    id: "07",
    title: "O&M / Asset Management",
    description: "Operational performance and lifecycle services.",
  },
  {
    id: "08",
    title: "Legal, Compliance & HSE",
    description: "Contracts, regulatory compliance, ethics, quality and safety.",
  },
] as const;

export const organizationSection = {
  label: "Organization",
  headingLead: "Organization &",
  headingAccent: "Key Functions.",
  supporting:
    "Functional capabilities behind origination, delivery, trading, finance and lifecycle services. This is not a reporting hierarchy.",
} as const;
