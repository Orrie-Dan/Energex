/**
 * Solution-family editorial layer.
 * Capabilities resolve from capabilities.ts — do not duplicate full capability content here.
 */

import type { CapabilityFamilySlug } from "./capabilities";

export type PrimaryFamilySlug = Exclude<CapabilityFamilySlug, "cross-cutting">;

export type SolutionFamilyDef = {
  slug: PrimaryFamilySlug;
  title: string;
  titleLines: string[];
  /** Short hero supporting statement — source-aligned, not a capability dump. */
  supporting: string;
  heroAlt: string;
  heroObjectPosition?: string;
  introduction: readonly string[];
  /** Primary capability IDs belonging to this family (excludes cross-cutting 15). */
  capabilityIds: readonly string[];
  approach: readonly string[];
  /** Simple editorial integration chain. */
  integration: {
    label: string;
    steps: readonly string[];
  };
  /** How Digital Energy (15) can connect to this family — progressive language. */
  digitalContext: string;
  /** Customer segment titles from customers.ts (exact titles only). */
  customerTitles: readonly string[];
  /** Optional restrained link into the 10-stage framework (Delivery family only). */
  frameworkCta?: {
    heading: string;
    body: string;
    href: string;
    label: string;
  };
  seoDescription: string;
};

export const SOLUTION_FAMILY_ORDER = [
  "power-generation",
  "renewables-storage",
  "grid-distributed-energy",
  "project-delivery-lifecycle",
] as const satisfies readonly PrimaryFamilySlug[];

export const familyLabels: Record<CapabilityFamilySlug, string> = {
  "power-generation": "Power & Generation",
  "renewables-storage": "Renewables & Storage",
  "grid-distributed-energy": "Grid & Distributed Energy",
  "project-delivery-lifecycle": "Project Delivery & Lifecycle",
  "cross-cutting": "Cross-cutting",
};

export const solutionFamilyDefs: readonly SolutionFamilyDef[] = [
  {
    slug: "power-generation",
    title: "Power & Generation",
    titleLines: ["Power &", "Generation"],
    supporting:
      "Integrated generation solutions configured around project requirements, fuel availability, reliability and scale.",
    heroAlt: "Large-scale generation and thermal infrastructure (thematic)",
    heroObjectPosition: "50% 45%",
    introduction: [
      "Reliable generation sits at the center of many energy systems — from distributed plants serving industrial loads to utility-scale stations feeding networks and offtakers.",
      "This family groups power generation with LNG / gas-to-power and floating power so fuel pathway, plant configuration and deployment mode can be coordinated as one solution space.",
    ],
    capabilityIds: ["02", "05", "06"],
    approach: [
      "Technology selection follows demand, fuel availability, reliability targets, site conditions, commercial structure and schedule — not a preferred OEM list.",
      "Energex coordinates engineering, sourcing and delivery interfaces so generation assets commission into a coherent operating system with a single client interface.",
    ],
    integration: {
      label: "How capabilities connect",
      steps: ["Gas / LNG", "Generation", "Grid / industrial load", "Digital monitoring"],
    },
    digitalContext:
      "A digital energy layer can support monitoring, forecasting, dispatch assistance and performance visibility across generation assets as systems mature.",
    customerTitles: [
      "Governments & Utilities",
      "Independent Power Producers",
      "Mining & Heavy Industry",
      "Oil & Gas / LNG",
    ],
    seoDescription:
      "Power generation, LNG and gas-to-power, and floating power — Energex solution family spanning Scope capabilities 02, 05 and 06.",
  },
  {
    slug: "renewables-storage",
    title: "Renewables & Storage",
    titleLines: ["Renewables &", "Storage"],
    supporting:
      "Renewable generation and energy storage integrated around performance, resilience and project requirements.",
    heroAlt: "Utility renewable generation and storage context (thematic)",
    heroObjectPosition: "50% 40%",
    introduction: [
      "Renewable generation and storage address different parts of the same performance problem: converting resource into dependable, bankable energy under real grid and offtake conditions.",
      "This family keeps renewable energy and battery energy storage systems together so hybrids, time shifting and resilience packages can be planned as one configuration space.",
    ],
    capabilityIds: ["03", "04"],
    approach: [
      "Resource quality, load profile, grid hosting capacity, storage need and commercial structure determine the technology mix.",
      "Storage is introduced where it improves reliability, usable renewable output or operating economics — not as a default add-on.",
    ],
    integration: {
      label: "How capabilities connect",
      steps: ["Solar / wind", "BESS", "Grid / load"],
    },
    digitalContext:
      "Digital layers can support forecasting, storage optimization, remote monitoring and performance visibility across renewable and hybrid assets.",
    customerTitles: [
      "Governments & Utilities",
      "Independent Power Producers",
      "Commercial & Real Estate",
      "Development Institutions",
    ],
    seoDescription:
      "Renewable energy and battery energy storage — Energex solution family spanning Scope capabilities 03 and 04.",
  },
  {
    slug: "grid-distributed-energy",
    title: "Grid & Distributed Energy",
    titleLines: ["Grid &", "Distributed Energy"],
    supporting:
      "Infrastructure connecting generation, networks, distributed systems, industrial demand and emerging electric loads.",
    heroAlt: "Transmission, substation or distributed energy infrastructure (thematic)",
    heroObjectPosition: "50% 35%",
    introduction: [
      "Energy only creates value when it reaches the right loads — through transmission and distribution networks, distributed systems, industrial sites or charging infrastructure.",
      "This family covers grid and T&D work alongside rural electrification, industrial energy solutions and e-mobility — so network, distributed and demand-side packages can be coordinated without treating them as unrelated product lines.",
    ],
    capabilityIds: ["07", "08", "09", "10"],
    approach: [
      "Network requirement, demand profile, reliability targets and local infrastructure shape the solution before topology or equipment is fixed.",
      "Grid, distributed and charging options are evaluated as one system — protection, metering, productive use and expansion paths included.",
    ],
    integration: {
      label: "How capabilities connect",
      steps: ["Generation", "T&D", "Distributed energy", "Industrial / charging loads"],
    },
    digitalContext:
      "Digital layers can support smart metering, charging management, network visibility and aggregation where market rules permit.",
    customerTitles: [
      "Governments & Utilities",
      "Industrial Parks & Data Centers",
      "Fleet Operators",
      "Development Institutions",
    ],
    seoDescription:
      "Grid and T&D, rural electrification, industrial energy and e-mobility — Energex solution family spanning Scope capabilities 07–10.",
  },
  {
    slug: "project-delivery-lifecycle",
    title: "Project Delivery & Lifecycle",
    titleLines: ["Project Delivery", "& Lifecycle"],
    supporting:
      "Project capabilities spanning development, sourcing, EPC integration, financing support, operations and long-term asset performance.",
    heroAlt: "Major energy infrastructure under construction or commissioning (thematic)",
    heroObjectPosition: "50% 40%",
    introduction: [
      "Delivery and lifecycle capabilities convert an energy requirement into a structured, sourced, executable and operable project — without implying that every specialist discipline is performed internally.",
      "Energex acts as integrator: specialist OEMs, EPC contractors, engineering firms, financiers and local partners may execute defined packages while Energex retains the client interface and commercial coordination.",
    ],
    capabilityIds: ["01", "11", "12", "13", "14"],
    approach: [
      "Energex coordinates specialist packages through one commercial and technical interface — defining roles for development, procurement, EPC integration, financing support and operations case by case.",
      "Financing support focuses on project structuring and investor/lender coordination. Energex is not a bank and does not automatically finance client projects.",
    ],
    integration: {
      label: "How capabilities connect",
      steps: ["Develop", "Source", "EPC", "Operate", "Optimize"],
    },
    digitalContext:
      "Digital layers can support asset monitoring, predictive maintenance and commercial or performance visibility across the operating life of delivered assets.",
    customerTitles: [
      "Governments & Utilities",
      "Independent Power Producers",
      "Mining & Heavy Industry",
      "Development Institutions",
    ],
    frameworkCta: {
      heading: "From requirement to long-term operation.",
      body: "Energex uses a ten-stage delivery framework spanning opportunity screening through operations and optimization.",
      href: "/about#delivery",
      label: "Explore our 10-stage delivery framework →",
    },
    seoDescription:
      "Project development, procurement, EPC, financing support and O&M — Energex solution family spanning Scope capabilities 01 and 11–14.",
  },
] as const;

export function getFamilyDefBySlug(slug: string): SolutionFamilyDef | undefined {
  return solutionFamilyDefs.find((f) => f.slug === slug);
}
