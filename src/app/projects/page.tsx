import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import { finalCta, projectsPage } from "../../data/energex";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected ENERGEX Global Solutions project references will be published as cleared for disclosure.",
  robots: { index: false, follow: true },
};

export default function ProjectsPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">
          {projectsPage.eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#011836] md:text-4xl">
          {projectsPage.heading}
        </h1>
        <p className="mt-8 rounded-lg border border-[#011836]/10 bg-white p-8 text-[#011836]/80">
          {projectsPage.body}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex rounded-md bg-[#f06f12] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c4500a]"
          >
            {finalCta.cta.label}
          </Link>
          <Link
            href="/solutions"
            className="inline-flex rounded-md border border-[#011836]/20 px-5 py-2.5 text-sm font-semibold text-[#011836] hover:border-[#f06f12]/50"
          >
            Explore Solutions
          </Link>
        </div>
      </div>
    </SiteChrome>
  );
}
