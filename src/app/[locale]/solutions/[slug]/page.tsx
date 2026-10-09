import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteChrome } from "../../../components/site-chrome";
import { SolutionDetailPage } from "../../../components/solution-detail/solution-detail-page";
import { solutionSlugs } from "../../../../data/solutions";
import { LOCALES, isLocale, type Locale } from "../../../../i18n/config";
import { getContent } from "../../../../i18n/content";
import { pageMetadata } from "../../../../i18n/metadata";
import "../../../solution-detail.css";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => solutionSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const { solutionDetails, ui } = getContent(locale);
  const solution = solutionDetails.find((item) => item.slug === slug);
  if (!solution) return { title: ui.meta.solutions.title };
  return pageMetadata(locale, `/solutions/${solution.slug}`, {
    title: solution.title,
    description: solution.seoDescription,
  });
}

export default async function SolutionFamilyPage({ params }: Props) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const solution = getContent(locale).solutionDetails.find((item) => item.slug === slug);
  if (!solution) notFound();

  return (
    <SiteChrome locale={locale} tone="plain">
      <SolutionDetailPage locale={locale} solution={solution} useFamilyNavigation />
    </SiteChrome>
  );
}
