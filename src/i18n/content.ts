/**
 * Localized site content for server components.
 *
 * Client components must not import this module (it carries every locale's
 * content); pass them the already-localized values as props instead.
 */
import {
  about,
  approvedEvidence,
  brand,
  brandLifecycle,
  capabilities,
  capabilityStrengths,
  contactClose,
  contactPage,
  customers,
  customerSegmentId,
  deliverableGroups,
  deliveryControls,
  deliveryFlexibility,
  deliveryFramework,
  deliveryRoles,
  digitalEnergy,
  equipmentCategories,
  equipmentPage,
  equipmentProcurement,
  equipmentSupplyCard,
  evidenceSection,
  familyLabels,
  finalCta,
  financingNote,
  financingStructures,
  footer,
  hero,
  industrialVerticals,
  industriesSection,
  integratorModel,
  marketPhases,
  marketStrategySection,
  navCta,
  navLinks,
  organizationFunctions,
  organizationSection,
  projectsPage,
  revenueModels,
  scale,
  solutionFamilies,
  visionMission,
  solutionFamilyDefs,
  solutionsIndexPage,
  whyEnergex,
  type Capability,
  type CustomerSegment,
  type EquipmentCategory,
} from "../data/energex";
import { familyToDetail, type SolutionDetail } from "../data/solutions";
import { localizeHref, type Locale } from "./config";
import { localizeContent, type Translation } from "./translate";
import { uiEn, type UiText } from "./ui/en";
import { uiZhHk } from "./ui/zh-hk";
import { contentZhHk } from "./zh-hk";

/** English source content rendered by public pages. */
export const englishContent = {
  brand,
  navLinks,
  navCta,
  hero,
  about,
  solutionFamilies,
  whyEnergex,
  integratorModel,
  scale,
  deliveryRoles,
  deliveryFlexibility,
  digitalEnergy,
  contactPage,
  contactClose,
  approvedEvidence,
  evidenceSection,
  capabilityStrengths,
  projectsPage,
  finalCta,
  footer,
  capabilities,
  solutionsIndexPage,
  solutionFamilyDefs,
  familyLabels,
  brandLifecycle,
  deliveryFramework,
  deliveryControls,
  deliverableGroups,
  customers,
  industriesSection,
  industrialVerticals,
  marketPhases,
  marketStrategySection,
  organizationFunctions,
  organizationSection,
  revenueModels,
  financingStructures,
  financingNote,
  visionMission,
  equipmentPage,
  equipmentCategories,
  equipmentProcurement,
  equipmentSupplyCard,
};

export type EnglishContent = typeof englishContent;
export type ContentTranslation = Translation<EnglishContent>;

const OVERLAYS: Record<Locale, ContentTranslation | null> = {
  en: null,
  "zh-hk": contentZhHk,
};

const UI: Record<Locale, UiText> = { en: uiEn, "zh-hk": uiZhHk };

export type LocalizedCustomer = CustomerSegment & {
  /** In-page anchor, derived from the English title so it is identical in every locale. */
  anchorId: string;
};

export type SiteContent = Omit<EnglishContent, "customers"> & {
  locale: Locale;
  ui: UiText;
  customers: readonly LocalizedCustomer[];
  solutionDetails: readonly SolutionDetail[];
  /** Localized display title for an English customer title (join key). */
  customerTitle(englishTitle: string): string;
  getCapabilityById(id: string): Capability | undefined;
  getCapabilitiesByIds(ids: readonly string[]): Capability[];
  getEquipmentCategory(slug: string): EquipmentCategory | undefined;
  equipmentCategoryHref(slug: string): string;
  equipmentQuoteHref(slug: string): string;
  /** Locale-prefixed internal href. */
  href(path: string): string;
};

function build(locale: Locale): SiteContent {
  const overlay = OVERLAYS[locale];
  const localized = localizeContent(englishContent, overlay ?? englishContent, locale);
  const ui = UI[locale];
  const href = (path: string) => localizeHref(locale, path);

  const customersLocalized: LocalizedCustomer[] = localized.customers.map((customer, index) => ({
    ...customer,
    anchorId: customerSegmentId(englishContent.customers[index]!.title),
  }));
  const titleByEnglish = new Map(
    englishContent.customers.map((customer, index) => [customer.title, customersLocalized[index]!.title]),
  );

  const solutionDetails = localized.solutionFamilyDefs.map((def) =>
    familyToDetail(def, {
      eyebrow: ui.solutionDetail.eyebrow,
      cta: { href: href("/contact"), label: localized.navCta.label },
      finalCta: { heading: localized.finalCta.heading, href: href("/contact") },
    }),
  );

  const getCapabilityById = (id: string) => localized.capabilities.find((item) => item.id === id);
  const getEquipmentCategory = (slug: string) => {
    const key = slug.trim().toLowerCase();
    return localized.equipmentCategories.find((category) => category.slug === key);
  };

  return {
    ...localized,
    locale,
    ui,
    customers: customersLocalized,
    solutionDetails,
    customerTitle: (englishTitle) => titleByEnglish.get(englishTitle) ?? englishTitle,
    getCapabilityById,
    getCapabilitiesByIds: (ids) =>
      ids.map((id) => getCapabilityById(id)).filter((item): item is Capability => item != null),
    getEquipmentCategory,
    equipmentCategoryHref: (slug) => href(`/equipment/${slug}`),
    equipmentQuoteHref: (slug) => href(`/contact?interest=equipment&category=${encodeURIComponent(slug)}`),
    href,
  };
}

const cache = new Map<Locale, SiteContent>();

export function getContent(locale: Locale): SiteContent {
  let content = cache.get(locale);
  if (!content) {
    content = build(locale);
    cache.set(locale, content);
  }
  return content;
}
