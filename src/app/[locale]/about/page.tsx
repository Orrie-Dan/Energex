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
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#011836] md:text-4xl">{title}</h2>
    </div>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#011836]/55">{children}</h3>
  );
}

const sectionClass = "scroll-mt-24 border-t border-[#011836]/10 py-16 first:border-t-0 md:py-24";

export default async function AboutPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const {
    about,
    brandLifecycle,
    integratorModel,
    scale,
    deliverableGroups,
    deliveryControls,
    deliveryFramework,
    deliveryRoles,
    financingNote,
    financingStructures,
    finalCta,
    marketPhases,
    organizationFunctions,
    organizationSection,
    revenueModels,
    visionMission,
    ui,
    href,
  } = getContent(locale);
  const t = ui.about;
  const phaseNotes = [t.marketPhase1Note, t.marketPhase2Note, t.marketPhase3Note];
  const sections = [
    { id: "who-we-are", index: "01", label: t.sectionWho },
    { id: "operating-model", index: "02", label: t.sectionOperate },
    { id: "delivery", index: "03", label: t.sectionDelivery },
    { id: "governance", index: "04", label: t.sectionGovernance },
    { id: "markets", index: "05", label: t.sectionVision },
  ];

  return (
    <SiteChrome locale={locale} tone="plain">
      <header className="relative overflow-hidden bg-[#011836] text-white">
        <div className="mx-auto grid w-full max-w-[100rem] gap-10 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:px-10 lg:py-24">
          <div data-enter>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">{about.eyebrow}</p>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              {about.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">{about.body}</p>
            <nav aria-label={t.onThisPage} className="mt-10 xl:hidden">
              <ul className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 text-sm text-white/80 transition-colors hover:border-[#f06f12] hover:text-white"
                    >
                      <span className="font-mono text-xs text-[#f06f12]">{section.index}</span>
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
              <img src={HERO_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#011836]/50 via-transparent to-transparent" aria-hidden />
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

            <div data-reveal className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-10">
              <p className="text-xl leading-relaxed text-[#011836] md:text-2xl">{about.introExtended}</p>
              <div className="rounded-lg bg-[#011836] p-6 text-white md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#f06f12]">
                  {visionMission.mission.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/85 md:text-lg">{visionMission.mission.body}</p>
              </div>
            </div>

            <div
              data-reveal
              className="mt-10 grid scroll-mt-24 gap-4 rounded-lg border border-[#011836]/10 bg-[#f6f4f0] p-6 md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-12 md:p-8"
              id="scale"
            >
              <div>
                <SubHeading>{scale.label}</SubHeading>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-[#011836] md:text-5xl">
                  {scale.from} <span className="text-[#f06f12]">–</span> {scale.to}
                </p>
              </div>
              <div className="max-w-2xl">
                <p className="text-[#011836]/80">{scale.supporting}</p>
              </div>
            </div>

            <div className="mt-12">
              <SubHeading>{t.brandLifecycle}</SubHeading>
              <ol
                data-reveal="stagger"
                className="mt-5 grid gap-px overflow-hidden rounded-lg border border-[#011836]/10 bg-[#011836]/10 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-7"
              >
                {brandLifecycle.map((stage, index) => (
                  <li key={stage.title} className="bg-white px-5 py-4 sm:last:col-span-2 2xl:py-5 2xl:last:col-span-1">
                    <p className="flex items-baseline gap-2 font-semibold text-[#011836]">
                      <span className="font-mono text-xs text-[#f06f12]">{String(index + 1).padStart(2, "0")}</span>
                      {stage.title}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-[#011836]/65">{stage.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* 02 — How We Operate */}
          <section className={sectionClass} id="operating-model">
            <SectionHeader index="02" title={t.sectionOperate} />

            <ul data-reveal="stagger" className="mt-10 grid gap-4 md:grid-cols-3">
              {about.principles.map((principle) => (
                <li key={principle.title} className="motion-lift rounded-lg border border-[#011836]/10 bg-white p-6">
                  <span className="block h-1 w-8 rounded-full bg-[#f06f12]" aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold text-[#011836]">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#011836]/75">{principle.description}</p>
                </li>
              ))}
            </ul>

            {/* Simplified coordination view — partner types, not an organization chart. */}
            <div data-reveal className="mt-12 rounded-lg bg-[#e4eaf2] p-6 md:p-10">
              <SubHeading>{t.coordinationInterfaces}</SubHeading>
              <div className="mt-6 grid items-center gap-4 lg:grid-cols-[minmax(0,0.6fr)_auto_minmax(0,0.8fr)_auto_minmax(0,1.6fr)]">
                <div className="rounded-md border border-[#011836]/15 bg-white px-5 py-4 text-center text-sm font-semibold uppercase tracking-wider text-[#011836]">
                  {integratorModel.client}
                </div>
                <span className="text-center text-xl text-[#f06f12] max-lg:rotate-90" aria-hidden>
                  ↔
                </span>
                <div className="rounded-md bg-[#011836] px-5 py-5 text-center text-white">
                  <p className="text-sm font-semibold tracking-[0.2em]">{integratorModel.node}</p>
                  <p className="mt-1 text-xs text-white/65">{integratorModel.closing}</p>
                </div>
                <span className="text-center text-xl text-[#f06f12] max-lg:rotate-90" aria-hidden>
                  ↔
                </span>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {integratorModel.partners.map((partner) => (
                    <li
                      key={partner.id}
                      className="rounded-md border border-[#011836]/10 bg-white px-3 py-3 text-center text-sm text-[#011836]"
                    >
                      {partner.label}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-6 text-sm text-[#011836]/65">
                {integratorModel.supporting}
              </p>
            </div>

            <div data-reveal="stagger" className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="scroll-mt-24" id="roles">
                <SubHeading>{t.rolesHeading}</SubHeading>
                <p className="mt-3 text-sm leading-relaxed text-[#011836]/70">{t.rolesIntro}</p>
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

              <div className="scroll-mt-24" id="commercial">
                <SubHeading>{t.commercialHeading}</SubHeading>
                <p className="mt-3 text-sm leading-relaxed text-[#011836]/70">{financingNote}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {financingStructures.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-[#011836]/5 px-3 py-1.5 text-xs font-medium text-[#011836]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <dl data-reveal className="mt-8 divide-y divide-[#011836]/8 rounded-lg border border-[#011836]/10 bg-white">
              {revenueModels.map((row) => (
                <div
                  key={row.stream}
                  className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_minmax(0,11rem)] sm:items-center sm:gap-6"
                >
                  <dt className="font-medium text-[#011836]">{row.stream}</dt>
                  <dd className="text-sm text-[#011836]/70">{row.mechanism}</dd>
                  <dd className="justify-self-start text-xs font-semibold uppercase tracking-wide text-[#f06f12] sm:justify-self-end sm:text-right">
                    {row.character}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* 03 — Our Delivery Approach (tinted panel for rhythm) */}
          <section className={sectionClass} id="delivery">
            <div className="rounded-2xl bg-[#e4eaf2] px-5 py-10 md:px-10 md:py-14 lg:px-12">
              <SectionHeader index="03" title={t.sectionDelivery} />

              <ol data-reveal="stagger" className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
                {DELIVERY_STAGES.map((stage) => (
                  <li key={stage.key} className="flex flex-col">
                    <div className="relative flex items-center gap-3 border-t-2 border-[#011836]/15 pt-5">
                      <span
                        className="absolute -top-[7px] left-0 size-3 rounded-full bg-[#f06f12] ring-4 ring-[#e4eaf2]"
                        aria-hidden
                      />
                      <p className="text-sm font-semibold uppercase tracking-wider text-[#011836]">{t[stage.key]}</p>
                      <span className="ml-auto font-mono text-xs text-[#011836]/50">
                        {deliveryFramework[stage.from]!.id}–{deliveryFramework[stage.to - 1]!.id}
                      </span>
                    </div>
                    <ol className="mt-4 flex flex-1 flex-col gap-3">
                      {deliveryFramework.slice(stage.from, stage.to).map((step) => (
                        <li
                          key={step.id}
                          className="motion-lift flex gap-4 rounded-lg border border-[#011836]/10 bg-white p-4"
                        >
                          <span className="shrink-0 font-mono text-sm font-semibold text-[#f06f12]">{step.id}</span>
                          <div>
                            <h3 className="font-semibold text-[#011836]">{step.title}</h3>
                            <p className="mt-1 text-sm leading-snug text-[#011836]/70">{step.description}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </li>
                ))}
              </ol>

              <div className="mt-14 scroll-mt-24" id="deliverables">
                <div data-reveal>
                  <SubHeading>{t.deliverablesHeading}</SubHeading>
                  <p className="mt-3 max-w-2xl text-sm text-[#011836]/70">{t.deliverablesIntro}</p>
                </div>
                <div data-reveal="stagger" className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {deliverableGroups.map((group) => (
                    <details
                      key={group.id}
                      className="group rounded-lg border border-[#011836]/10 bg-white px-5 py-4 open:shadow-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-center gap-3 font-semibold text-[#011836] [&::-webkit-details-marker]:hidden">
                        <span className="font-mono text-xs text-[#f06f12]">{group.id}</span>
                        <span className="flex-1">{group.title}</span>
                        <span
                          className="text-lg leading-none text-[#011836]/40 transition-transform duration-300 group-open:rotate-45"
                          aria-hidden
                        >
                          +
                        </span>
                      </summary>
                      <ul className="mt-4 space-y-2 border-t border-[#011836]/8 pt-4">
                        {group.items.map((item) => (
                          <li key={item} className="text-sm text-[#011836]/75">
                            · {item}
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 04 — Governance & Quality */}
          <section className={sectionClass} id="governance">
            <SectionHeader index="04" title={t.sectionGovernance} />

            <div className="mt-10 scroll-mt-24" id="controls">
              <SubHeading>{t.controlsHeading}</SubHeading>
              <ul data-reveal="stagger" className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {deliveryControls.map((item, index) => (
                  <li
                    key={item.title}
                    className={`motion-lift rounded-lg border p-5 ${
                      index === 0
                        ? "border-[#011836] bg-[#011836] text-white md:col-span-2"
                        : "border-[#011836]/10 bg-white"
                    }`}
                  >
                    <h3 className={`font-semibold ${index === 0 ? "text-white" : "text-[#011836]"}`}>{item.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${index === 0 ? "text-white/75" : "text-[#011836]/70"}`}>
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 scroll-mt-24" id="organization">
              <div data-reveal>
                <SubHeading>
                  {organizationSection.headingLead} {organizationSection.headingAccent}
                </SubHeading>
                <p className="mt-3 max-w-2xl text-sm text-[#011836]/70">{organizationSection.supporting}</p>
              </div>
              <ul
                data-reveal="stagger"
                className="mt-5 grid gap-x-8 gap-y-5 border-t border-[#011836]/10 pt-6 sm:grid-cols-2 xl:grid-cols-4"
              >
                {organizationFunctions.map((fn) => (
                  <li key={fn.id} className="flex gap-3">
                    <span className="font-mono text-xs font-semibold leading-6 text-[#f06f12]">{fn.id}</span>
                    <div>
                      <h3 className="font-semibold text-[#011836]">{fn.title}</h3>
                      <p className="mt-1 text-sm leading-snug text-[#011836]/70">{fn.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 05 — Our Global Vision */}
          <section className={sectionClass} id="markets">
            <SectionHeader index="05" title={t.sectionVision} />

            <figure data-reveal className="mt-10 max-w-4xl border-l-2 border-[#f06f12] pl-6">
              <figcaption className="text-xs font-semibold uppercase tracking-wider text-[#011836]/55">
                {visionMission.vision.title}
              </figcaption>
              <blockquote className="mt-3 text-xl leading-relaxed text-[#011836] md:text-2xl">
                {visionMission.vision.body}
              </blockquote>
            </figure>

            <ol
              data-reveal="stagger"
              className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-4"
              aria-label={t.marketsAria}
            >
              {marketPhases.map((phase, index) => {
                const primary = phase.emphasis === "primary";
                return (
                  <li
                    key={phase.phase}
                    className={`relative flex flex-col rounded-lg border p-6 ${
                      primary
                        ? "border-[#011836] bg-[#011836] text-white"
                        : phase.emphasis === "secondary"
                          ? "border-[#011836]/15 bg-white"
                          : "border-dashed border-[#011836]/25 bg-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#f06f12]">{phase.phase}</p>
                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                          primary ? "bg-white/10 text-white/80" : "bg-[#011836]/5 text-[#011836]/65"
                        }`}
                      >
                        {phaseNotes[index]}
                      </span>
                    </div>
                    <h3 className={`mt-4 text-xl font-semibold ${primary ? "text-white" : "text-[#011836]"}`}>
                      {phase.title}
                    </h3>
                    <p className={`mt-2 text-sm leading-relaxed ${primary ? "text-white/75" : "text-[#011836]/70"}`}>
                      {phase.description}
                    </p>
                    {index < marketPhases.length - 1 ? (
                      <span
                        className="absolute -bottom-5 left-1/2 z-10 flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#011836]/10 bg-white text-sm text-[#f06f12] shadow-sm md:-right-6 md:bottom-auto md:left-auto md:top-1/2 md:translate-x-0 md:-translate-y-1/2"
                        aria-hidden
                      >
                        <span className="rotate-90 md:rotate-0">→</span>
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </section>

          <section
            data-reveal
            className="relative mb-16 overflow-hidden rounded-2xl bg-[#011836] px-6 py-10 text-white md:mb-24 md:px-12 md:py-14"
          >
            <span className="absolute inset-y-0 left-0 w-1 bg-[#f06f12]" aria-hidden />
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{finalCta.heading}</h2>
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
