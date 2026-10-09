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
