/**
 * Source: Scope of Work §18 Commercial & Revenue Models; §14 Financing wording.
 */

export const revenueModels = [
  {
    stream: "Development & Advisory",
    mechanism: "Feasibility, development and structuring fees",
    character: "Project-based",
  },
  {
    stream: "Trading & Procurement",
    mechanism: "Equipment and supply-chain margin",
    character: "Transactional",
  },
  {
    stream: "EPC & Integration",
    mechanism: "Engineering, procurement and construction margin",
    character: "Project-based",
  },
  {
    stream: "O&M & Asset Management",
    mechanism: "Long-term service contracts",
    character: "Recurring",
  },
  {
    stream: "Energy Services",
    mechanism: "Charging, microgrid and infrastructure fees",
    character: "Recurring",
  },
  {
    stream: "IPP / PPA Revenue",
    mechanism: "Electricity sales from owned or co-owned assets",
    character: "Long-term recurring",
  },
  {
    stream: "Investment Returns",
    mechanism: "SPV distributions and value realization",
    character: "Portfolio-based",
  },
] as const;

export const financingStructures = [
  "EPC + Finance",
  "IPP / long-term PPA",
  "BOT / BOOT / BOO",
  "Lease-to-own",
  "Energy-as-a-Service",
  "Equipment financing / vendor-credit coordination",
] as const;

export const financingNote =
  "Energex supports project structuring and investor/lender coordination — including IPP/PPA, BOT/BOOT/BOO, lease-to-own and Energy-as-a-Service models — and may selectively participate through project SPVs. Energex is not a bank and does not automatically finance client projects.";
