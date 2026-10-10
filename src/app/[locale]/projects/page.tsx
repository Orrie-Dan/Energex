import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import { isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/projects", { ...getContent(locale).ui.meta.projects, noindex: true });
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { finalCta, projectsPage, ui, href } = getContent(locale);
  return (
    <SiteChrome locale={locale}>
      <div data-enter className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-24">
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
            href={href("/contact")}
            className="inline-flex rounded-md bg-[#f06f12] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c4500a]"
          >
            {finalCta.cta.label}
          </Link>
          <Link
            href={href("/solutions")}
            className="inline-flex rounded-md border border-[#011836]/20 px-5 py-2.5 text-sm font-semibold text-[#011836] hover:border-[#f06f12]/50"
          >
            {ui.projects.exploreSolutions}
          </Link>
        </div>
      </div>
    </SiteChrome>
  );
}
