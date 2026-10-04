import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteChrome } from "../../components/site-chrome";
import { SolutionDetailPage } from "../../components/solution-detail/solution-detail-page";
import {
  getSolutionBySlug,
  solutionSlugs,
} from "../../../data/solutions";
import "../../solution-detail.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return { title: "Solutions" };
  return {
    title: solution.title,
    description: solution.seoDescription,
  };
}

export default async function SolutionFamilyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  return (
    <SiteChrome tone="plain">
      <SolutionDetailPage solution={solution} useFamilyNavigation />
    </SiteChrome>
  );
}
