import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SectionRail } from "../../components/section-rail";
import { SiteChrome } from "../../components/site-chrome";
import { isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { ui } = getContent(locale);
  return pageMetadata(locale, "/about", ui.meta.about);
}

/** Groups the ten delivery-framework steps (by position) into four readable stages. */
const DELIVERY_STAGES = [
  { key: "stageDefine", from: 0, to: 2 },
  { key: "stageStructure", from: 2, to: 4 },
  { key: "stageDeliver", from: 4, to: 7 },
  { key: "stageOperate", from: 7, to: 10 },
] as const;

const HERO_IMAGE = "/assets/energex/engineers.png";

function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div data-reveal>
      <p className="flex items-center gap-3 font-mono text-sm font-semibold text-[#f06f12]">
        {index}
        <span className="h-px w-10 bg-[#f06f12]/40" aria-hidden />
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#011836] md:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#011836]/55">
      {children}
    </h3>
  );
}

const sectionClass =
  "scroll-mt-24 border-t border-[#011836]/10 py-16 first:border-t-0 md:py-24";

export default async function AboutPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const {
    about,
    deliveryControls,
    deliveryFramework,
    deliveryRoles,
    finalCta,
    marketPhases,
    visionMission,
    ui,
    href,
  } = getContent(locale);
  const t = ui.about;
  const phaseNotes = [
    t.marketPhase1Note,
    t.marketPhase2Note,
    t.marketPhase3Note,
  ];
  const sections = [
    { id: "who-we-are", index: "01", label: t.sectionWho },
    { id: "operating-model", index: "02", label: t.sectionOperate },
    { id: "delivery", index: "03", label: t.sectionDelivery },
    { id: "markets", index: "04", label: t.sectionVision },
  ];

  return (
    <SiteChrome locale={locale} tone="plain">
      <header className="relative overflow-hidden bg-[#011836] text-white">
        <div className="mx-auto grid w-full max-w-[100rem] gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div data-enter>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">
              {about.eyebrow}
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              {about.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {about.body}
            </p>
            <nav aria-label={t.onThisPage} className="mt-10 xl:hidden">
              <ul className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/80 transition-colors hover:border-[#f06f12] hover:text-white"
                    >
                      <span className="font-mono text-xs text-[#f06f12]">
                        {section.index}
                      </span>
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div data-enter>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-[5/4]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMAGE}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-linear-to-t from-[#011836]/50 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-8 lg:px-10 xl:grid xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-16">
        <aside className="hidden py-24 xl:block">
          <SectionRail items={sections} label={t.onThisPage} />
        </aside>

        <div className="min-w-0">
          {/* 01 — Who We Are */}
          <section className={sectionClass} id="who-we-are">
            <SectionHeader index="01" title={t.sectionWho} />

            <div
              data-reveal
              className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-10"
            >
              <p className="text-xl leading-relaxed text-[#011836] md:text-2xl">
                {about.introExtended}
              </p>
              <div className="rounded-lg bg-[#011836] p-6 text-white md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#f06f12]">
                  {visionMission.mission.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/85 md:text-lg">
                  {visionMission.mission.body}
                </p>
              </div>
            </div>
          </section>

          {/* 02 — How We Operate */}
          <section className={sectionClass} id="operating-model">
            <SectionHeader index="02" title={t.sectionOperate} />

            <ul
              data-reveal="stagger"
              className="mt-10 grid gap-4 md:grid-cols-3"
            >
              {about.principles.map((principle) => (
                <li
                  key={principle.title}
                  className="motion-lift rounded-lg border border-[#011836]/10 bg-white p-6"
                >
                  <span
                    className="block h-1 w-8 rounded-full bg-[#f06f12]"
                    aria-hidden
                  />
                  <h3 className="mt-4 text-lg font-semibold text-[#011836]">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#011836]/75">
                    {principle.description}
                  </p>
                </li>
              ))}
            </ul>

            <div data-reveal className="mt-12 scroll-mt-24" id="roles">
              <SubHeading>{t.rolesHeading}</SubHeading>
              <ul className="mt-5 flex flex-wrap gap-2">
                {deliveryRoles.map((role) => (
                  <li
                    key={role}
                    className="rounded-full border border-[#011836]/15 bg-white px-4 py-2 text-sm text-[#011836]"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 03 — Our Delivery Approach (tinted panel for rhythm) */}
          <section className={sectionClass} id="delivery">
            <div className="rounded-2xl bg-[#e4eaf2] px-5 py-10 md:px-10 md:py-14 lg:px-12">
              <SectionHeader index="03" title={t.sectionDelivery} />

              <ol
                data-reveal="stagger"
                className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-5"
              >
                {DELIVERY_STAGES.map((stage) => (
                  <li key={stage.key} className="flex flex-col">
                    <div className="relative flex items-center gap-3 border-t-2 border-[#011836]/15 pt-5">
                      <span
                        className="absolute -top-[7px] left-0 size-3 rounded-full bg-[#f06f12] ring-4 ring-[#e4eaf2]"
                        aria-hidden
                      />
                      <p className="text-sm font-semibold uppercase tracking-wider text-[#011836]">
                        {t[stage.key]}
                      </p>
                    </div>
                    <ol className="mt-4 flex flex-col gap-2">
                      {deliveryFramework
                        .slice(stage.from, stage.to)
                        .map((step) => (
                          <li
                            key={step.id}
                            className="flex gap-3 text-sm text-[#011836]"
                          >
                            <span className="shrink-0 font-mono font-semibold text-[#f06f12]">
                              {step.id}
                            </span>
                            {step.title}
                          </li>
                        ))}
                    </ol>
                  </li>
                ))}
              </ol>

              <div className="mt-14 scroll-mt-24" id="controls">
                <SubHeading>{t.controlsHeading}</SubHeading>
                <ul data-reveal="stagger" className="mt-5 flex flex-wrap gap-2">
                  {deliveryControls.map((item) => (
                    <li
                      key={item.title}
                      className="rounded-full border border-[#011836]/15 bg-white px-4 py-2 text-sm text-[#011836]"
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 04 — Our Global Vision */}
          <section className={sectionClass} id="markets">
            <SectionHeader index="04" title={t.sectionVision} />

            <figure
              data-reveal
              className="mt-10 max-w-4xl border-l-2 border-[#f06f12] pl-6"
            >
              <figcaption className="text-xs font-semibold uppercase tracking-wider text-[#011836]/55">
                {visionMission.vision.title}
              </figcaption>
              <blockquote className="mt-3 text-xl leading-relaxed text-[#011836] md:text-2xl">
                {visionMission.vision.body}
              </blockquote>
            </figure>

            <ol
              data-reveal="stagger"
              className="mt-10 flex flex-wrap gap-3"
              aria-label={t.marketsAria}
            >
              {marketPhases.map((phase, index) => (
                <li
                  key={phase.phase}
                  className={`rounded-lg border px-5 py-3 ${
                    phase.emphasis === "primary"
                      ? "border-[#011836] bg-[#011836] text-white"
                      : "border-[#011836]/15 bg-white text-[#011836]"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#f06f12]">
                    {phase.phase}
                  </span>
                  <span className="ml-3 font-semibold">{phase.title}</span>
                  <span className="ml-2 text-xs opacity-65">
                    · {phaseNotes[index]}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section
            data-reveal
            className="relative mb-16 overflow-hidden rounded-2xl bg-[#011836] px-6 py-10 text-white md:mb-24 md:px-12 md:py-14"
          >
            <span
              className="absolute inset-y-0 left-0 w-1 bg-[#f06f12]"
              aria-hidden
            />
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {finalCta.heading}
                </h2>
                <p className="mt-3 text-base text-white/75">{finalCta.body}</p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center gap-3">
                <Link
                  href={finalCta.cta.href}
                  className="inline-flex rounded-md bg-[#f06f12] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c4500a]"
                >
                  {finalCta.cta.label}
                </Link>
                <Link
                  href={href("/solutions")}
                  className="inline-flex rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#f06f12]"
                >
                  {t.exploreAllCapabilities}
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </SiteChrome>
  );
}
