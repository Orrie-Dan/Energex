import type { Metadata } from "next";
import { EquipmentExplorer } from "../../components/equipment-explorer";
import { ProcurementStepper } from "../../components/procurement-stepper";
import { SiteChrome } from "../../components/site-chrome";
import { SmoothScrollLink } from "../../components/smooth-scroll-link";
import { isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

/** Hero background video (no poster, so the navy header shows until it plays); the image is the fallback when the video is unset. */
const HERO_VIDEO_SRC: string | null = "/assets/energex/equipment-hero.mp4";
const HERO_IMAGE = "/assets/energex/trading-hd.webp";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/equipment", getContent(locale).ui.meta.equipment);
}

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-[#f06f12]">
      <span className="size-1.5 bg-[#f06f12]" aria-hidden />
      {children}
    </p>
  );
}

export default async function EquipmentPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const {
    equipmentCategories,
    equipmentCategoryHref,
    equipmentPage,
    equipmentProcurement,
    equipmentQuoteHref,
    href,
    ui,
  } = getContent(locale);
  const t = ui.equipment;
  const steps = equipmentProcurement.map((title, index) => ({
    title,
    body: equipmentPage.procurementDetails[index],
  }));

  return (
    <SiteChrome locale={locale} tone="plain">
      <header className="relative isolate overflow-hidden bg-[#011836] text-white">
        {HERO_VIDEO_SRC ? (
          <video
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            src={HERO_VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={HERO_IMAGE} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        )}
        <div
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(1,24,54,0.85),rgba(1,24,54,0.45)_40%,rgba(1,24,54,0.05)_75%)] lg:bg-[linear-gradient(to_right,rgba(1,24,54,0.8),rgba(1,24,54,0.35)_40%,transparent_65%)]"
          aria-hidden
        />
        <div className="mx-auto flex w-full max-w-[100rem] flex-col justify-end gap-8 px-6 pb-10 pt-16 portrait:min-h-[30rem] md:px-8 md:pb-12 md:portrait:min-h-[34rem] lg:flex-row lg:pb-14 landscape:min-h-[min(68svh,44rem)] lg:items-end lg:justify-between lg:px-10">
          <div data-enter className="max-w-3xl">
            <Eyebrow>{equipmentPage.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              {equipmentPage.heading}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {equipmentPage.intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={href("/contact?interest=equipment")}
                className="inline-flex rounded-md bg-[#f06f12] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c4500a]"
              >
                {t.requestQuote} →
              </a>
              <SmoothScrollLink
                href="#categories"
                className="inline-flex rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#f06f12]"
              >
                {t.browseCategories}
              </SmoothScrollLink>
            </div>
          </div>
          <div data-enter className="hidden shrink-0 rounded-md bg-[#f06f12] px-4 py-3 lg:block">
            <p className="font-mono text-[0.6875rem] uppercase tracking-wider text-white/80">{t.heroBadge}</p>
            <p className="mt-0.5 text-sm font-semibold">{equipmentProcurement.slice(0, 2).join(" · ")}</p>
          </div>
        </div>
      </header>

      <section id="categories" className="scroll-mt-24 bg-[#f6f4f0]">
        <div className="mx-auto w-full max-w-[100rem] px-6 py-16 md:px-8 md:py-24 lg:px-10 lg:py-28">
          <div data-reveal className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>{t.categoriesEyebrow}</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#011836] md:text-5xl lg:text-6xl">
                {t.categoriesHeading}
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-[#011836]/60">{equipmentPage.note}</p>
          </div>
          <div data-reveal className="mt-10 md:mt-14">
            <EquipmentExplorer
              label={t.categoriesHeading}
              featured={t.featured}
              requestQuote={t.requestQuote}
              items={equipmentCategories.map((category) => ({
                slug: category.slug,
                title: category.title,
                description: category.description,
                scope: category.scope,
                featured: category.featured ?? false,
                href: equipmentCategoryHref(category.slug),
                quoteHref: equipmentQuoteHref(category.slug),
              }))}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#011836] text-white" aria-labelledby="procure-heading">
        <div className="mx-auto w-full max-w-[100rem] px-6 py-12 md:px-8 md:py-16 lg:px-10">
          <div data-reveal className="max-w-3xl">
            <Eyebrow>{t.procureEyebrow}</Eyebrow>
            <h2 id="procure-heading" className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              {t.procureHeading}
            </h2>
          </div>
          <div data-reveal className="mt-8 md:mt-10">
            <ProcurementStepper steps={steps} pause={t.pauseSteps} play={t.playSteps} stepOf={t.stepOf} />
          </div>
          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-white/50">{equipmentPage.coordination}</p>
        </div>
      </section>

    </SiteChrome>
  );
}
