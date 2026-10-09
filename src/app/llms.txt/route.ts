import {
  brand,
  capabilities,
  equipmentCategories,
  equipmentCategoryHref,
  marketPhases,
  navLinks,
  solutionFamilies,
  visionMission,
} from "../../data/energex";
import { localizeHref } from "../../i18n/config";
import { getContent } from "../../i18n/content";
import { SITE_ORIGIN } from "../../lib/site";

export const dynamic = "force-static";

export async function GET() {
  const origin = SITE_ORIGIN;
  const links = [
    { path: "/", label: "Home" },
    ...navLinks.map((l) => ({ path: l.href, label: l.label })),
    ...equipmentCategories.map((category) => ({
      path: equipmentCategoryHref(category.slug),
      label: category.title,
    })),
    { path: "/privacy", label: "Privacy" },
    { path: "/terms", label: "Terms" },
  ].map((link) => ({ ...link, path: localizeHref("en", link.path) }));

  const zh = getContent("zh-hk");
  const zhLinks = [
    { path: zh.href("/"), label: zh.ui.chrome.home },
    ...zh.navLinks.map((l) => ({ path: l.href, label: l.label })),
    ...zh.equipmentCategories.map((category) => ({
      path: zh.equipmentCategoryHref(category.slug),
      label: category.title,
    })),
  ];

  const body = [
    `# ${brand.name}`,
    "",
    brand.taglinePrimary,
    brand.taglineSecondary,
    brand.taglineCorporate,
    "",
    "ENERGEX Global Solutions is an integrated energy solutions platform providing a single commercial and technical interface across the energy project lifecycle. The operating model is technology-agnostic.",
    "",
    "## Vision",
    "",
    visionMission.vision.body,
    "",
    "## Mission",
    "",
    visionMission.mission.body,
    "",
    "## Solution families",
    "",
    ...solutionFamilies.map((f) => `- ${f.title}: ${f.description}`),
    "",
    "## Capabilities",
    "",
    ...capabilities.map((c) => `- ${c.id} ${c.title}: ${c.summary}`),
    "",
    "## Geographic focus",
    "",
    ...marketPhases.map((p) => `- ${p.phase} — ${p.title}: ${p.description}`),
    "",
    "## Routes",
    "",
    ...links.map((l) => `- [${l.label}](${origin}${l.path})`),
    "",
    "## Traditional Chinese (Hong Kong) / 繁體中文（香港）",
    "",
    "Every public page is also available in Traditional Chinese (Hong Kong) under /zh-hk.",
    "",
    ...zhLinks.map((l) => `- [${l.label}](${origin}${l.path})`),
    "",
    "## Corporate",
    "",
    ...brand.addressLines,
    "",
    `Business Registration Certificate No.: ${brand.registration}`,
    `Nature of Business: ${brand.natureOfBusiness}`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
