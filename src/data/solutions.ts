/**
 * Solution-detail family pages — data-driven from energex/families + capabilities.
 * Geometry / motion follow the Tilanium service-detail system.
 */

import {
  finalCta,
  solutionFamilies,
  solutionFamilyDefs,
  type SolutionFamilyDef,
} from "./energex";

export type SolutionHeroImage = {
  src: string;
  srcSet: string;
  alt: string;
  objectPosition?: string;
};

/** Same hero assets as homepage solution-family cards (single source of truth). */
export function solutionFamilyHero(
  slug: string,
  alt: string,
  objectPosition?: string,
): SolutionHeroImage {
  const family = solutionFamilies.find((f) => f.href === `/solutions/${slug}`);
  const media = family ?? solutionFamilies[0]!;
  return {
    src: media.imgSrc,
    srcSet: media.srcSet,
    alt,
    objectPosition,
  };
}

export type SolutionDeliverable = {
  title: string;
  description: string;
};

export type SolutionDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  titleLines: string[];
  /** Short supporting statement under the hero title. */
  supporting?: string;
  heroImage: SolutionHeroImage;
  cta: { href: string; label: string };
  introduction: {
    paragraphs: string[];
  };
  /** Primary Scope capability IDs — resolved at render from capabilities.ts. */
  capabilityIds?: readonly string[];
  /** Legacy / reference-shell deliverables when capabilityIds absent. */
  deliverables?: SolutionDeliverable[];
  approach: {
    paragraphs: string[];
  };
  integration?: {
    label: string;
    steps: readonly string[];
  };
  digitalContext?: string;
  customerTitles?: readonly string[];
  frameworkCta?: SolutionFamilyDef["frameworkCta"];
  /** Legacy reference-shell sections. */
  why?: string[];
  results?: string[];
  finalCta: {
    heading: string;
    href: string;
  };
  seoDescription: string;
};

function familyToDetail(def: SolutionFamilyDef): SolutionDetail {
  return {
    slug: def.slug,
    eyebrow: "Solutions",
    title: def.title,
    titleLines: [...def.titleLines],
    supporting: def.supporting,
    heroImage: solutionFamilyHero(def.slug, def.heroAlt, def.heroObjectPosition),
    cta: { href: "/contact", label: "Start a Project" },
    introduction: {
      paragraphs: [...def.introduction],
    },
    capabilityIds: def.capabilityIds,
    approach: {
      paragraphs: [...def.approach],
    },
    integration: {
      label: def.integration.label,
      steps: def.integration.steps,
    },
    digitalContext: def.digitalContext,
    customerTitles: def.customerTitles,
    frameworkCta: def.frameworkCta,
    finalCta: {
      heading: finalCta.heading,
      href: "/contact",
    },
    seoDescription: def.seoDescription,
  };
}

/** Temporary Tilanium-density copy for A/B geometry testing only. */
export const referenceSolutionTest: SolutionDetail = {
  slug: "reference-solution-test",
  eyebrow: "Services",
  title: "Automation Solutions",
  titleLines: ["Automation Solutions"],
  heroImage: solutionFamilyHero(
    "power-generation",
    "Reference hero using approved Power & Generation imagery",
    "50% 40%",
  ),
  cta: { href: "/contact", label: "Get in Touch" },
  introduction: {
    paragraphs: [
      "Industrial automation plays a vital role in improving production efficiency, reducing operational costs, and increasing overall manufacturing performance. Our automation solutions are designed to help modern industrial operations run with greater precision and reliability.",
      "We combine engineering expertise, intelligent system integration, and modern automation strategies to create reliable industrial solutions tailored to the specific operational needs of each business.",
    ],
  },
  deliverables: [
    {
      title: "Industrial Automation Systems",
      description:
        "Custom automation solutions designed to improve production efficiency and operational consistency.",
    },
    {
      title: "Process Automation",
      description:
        "Streamline industrial workflows through automated systems that reduce manual operations and improve precision.",
    },
    {
      title: "Control System Integration",
      description:
        "Reliable integration of industrial control systems for optimized production performance.",
    },
    {
      title: "Production Line Optimization",
      description:
        "Improve manufacturing speed, accuracy, and operational reliability through automation technologies.",
    },
    {
      title: "Smart Manufacturing Solutions",
      description:
        "Modern automation strategies that support scalable and future-ready production environments.",
    },
    {
      title: "Operational Efficiency Improvements",
      description:
        "Automation systems designed to reduce downtime, improve productivity, and increase overall operational performance.",
    },
  ],
  approach: {
    paragraphs: [
      "We begin every automation project by analyzing operational workflows, production challenges, and system requirements. This allows us to create automation strategies specifically tailored to the client's industrial environment.",
      "Our team works closely with clients throughout planning, integration, testing, and optimization to ensure that every automation solution delivers measurable improvements in performance, reliability, and efficiency.",
    ],
  },
  why: [
    "Experienced automation specialists",
    "Reliable industrial technologies",
    "Scalable automation solutions",
    "Focus on operational efficiency",
    "Modern engineering methodologies",
    "Long-term technical support",
  ],
  results: [
    "Improved production efficiency",
    "Reduced operational costs",
    "Increased manufacturing precision",
    "Better workflow consistency",
    "Reduced manual processes",
    "Enhanced industrial performance",
  ],
  finalCta: {
    heading: "Ready to Modernize Your Industrial Operations?",
    href: "/contact",
  },
  seoDescription: "Reference fidelity shell for solution-detail geometry testing.",
};

export const solutionDetails: SolutionDetail[] = solutionFamilyDefs.map(familyToDetail);

export const solutionSlugs = solutionDetails.map((s) => s.slug);

export function getSolutionBySlug(slug: string): SolutionDetail | undefined {
  return solutionDetails.find((s) => s.slug === slug);
}

export function getSolutionIndex(slug: string): number {
  return solutionDetails.findIndex((s) => s.slug === slug);
}

/**
 * Tilanium does NOT wrap: first page has next only, last has previous only.
 */
export function getAdjacentSolutions(slug: string): {
  previous: SolutionDetail | null;
  next: SolutionDetail | null;
} {
  const index = getSolutionIndex(slug);
  if (index < 0) return { previous: null, next: null };
  return {
    previous: index > 0 ? solutionDetails[index - 1]! : null,
    next: index < solutionDetails.length - 1 ? solutionDetails[index + 1]! : null,
  };
}
