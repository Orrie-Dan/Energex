import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import {
  CapabilityExplorer,
  type ExplorerCapability,
  type ExplorerGroup,
} from "../../components/shell/capability-explorer";
import { CtaBanner } from "../../components/shell/cta-banner";
import { Emph, pad2 } from "../../components/shell/emph";
import { PageHero } from "../../components/shell/page-hero";
import { Marquee, SectionHead, StatFigure } from "../../components/shell/section-head";
import type { Capability } from "../../../data/energex/capabilities";
import { formatText, isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

const HERO_VIDEO = "/assets/energex/solutions-hero.mp4";
const HERO_POSTER = "/assets/energex/solutions-hero-poster.jpg";
const DIGITAL_IMAGE = "/assets/energex/digital.jpg";
const CTA_VIDEO = "/assets/energex/cta-loop.mp4";
const CTA_POSTER = "/assets/energex/cta-loop-poster.jpg";

/** Display groups, in the same order as `pageCopy.solutions.families`. */
const GROUPS: readonly ExplorerGroup[] = ["pg", "rs", "gd", "pd", "es"];
/** Capability ids shown on each family card. */
const FAMILY_CAPS: Record<ExplorerGroup, readonly string[]> = {
  pg: ["02", "05", "06"],
  rs: ["03", "04"],
  gd: ["07", "08", "09", "10"],
  pd: ["01", "12", "13", "14", "15"],
  es: ["11"],
};
/** Bento spans for the five family cards. */
const BENTO = ["nx-b7", "nx-b5", "nx-b4", "nx-b4", "nx-b4"] as const;

function groupOf(cap: Capability): ExplorerGroup {
  if (cap.id === "11") return "es";
  switch (cap.familySlug) {
    case "power-generation":
      return "pg";
    case "renewables-storage":
      return "rs";
    case "grid-distributed-energy":
      return "gd";
    default:
      return "pd";
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/solutions", getContent(locale).ui.meta.solutions);
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { brandLifecycle, capabilities, digitalEnergy, navCta, pageCopy, ui, href } = getContent(locale);
  const t = pageCopy.solutions;

  const groupLabels = Object.fromEntries(GROUPS.map((group, i) => [group, t.families[i]!.label])) as Record<
    ExplorerGroup,
    string
  >;
  const explorerCaps: ExplorerCapability[] = capabilities.map((cap) => {
    const group = groupOf(cap);
    return {
      id: cap.id,
      title: cap.title,
      summary: cap.summary,
      includes: cap.includes,
      group,
      imgSrc: cap.imgSrc,
      familyHref: group === "es" ? href("/equipment") : cap.familyHref,
    };
  });
  const lastAction = digitalEnergy.capabilities.length - 1;
  const contactHref = navCta.href;

  return (
    <SiteChrome locale={locale} tone="plain" heroOverlay>
      <PageHero
        label={ui.solutions.heroLabel}
        video={HERO_VIDEO}
        poster={HERO_POSTER}
        shade="linear-gradient(180deg, rgba(11,26,48,0.72) 0%, rgba(11,26,48,0.25) 35%, rgba(11,26,48,0.55) 70%, rgba(11,26,48,0.96) 100%)"
        minHeight={860}
        paddingBottom={128}
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        titleMaxWidth={1180}
        lead={t.heroLead}
        actions={
          <>
            <Link href={contactHref} className="nx-btn nx-btn--accent">
              {navCta.label} <span aria-hidden="true">→</span>
            </Link>
            <a href="#capabilities" className="nx-btn nx-btn--ghost">
              {t.heroSecondary}
            </a>
          </>
        }
        footer={<Marquee items={t.marquee} />}
      />

      <section className="nx-dark">
        <div data-reveal="stagger" className="nx-wrap nx-grid nx-grid-220 gap-8 pb-[88px] pt-14 max-[640px]:grid-cols-2 max-[640px]:gap-x-5 max-[640px]:gap-y-8 max-[640px]:pb-16">
          {t.stats.map((stat, i) => (
            <StatFigure key={stat.number} number={stat.number} label={stat.label} accent={i === t.stats.length - 1} />
          ))}
        </div>
      </section>

      <section aria-labelledby="families-heading" className="nx-wrap flex flex-col gap-14 pb-24 pt-32 max-[900px]:pt-[88px]">
        <SectionHead id="families-heading" eyebrow={t.familiesEyebrow} title={t.familiesTitle} aside={t.familiesIntro} />
        <div data-reveal="stagger" className="nx-bento">
          {t.families.map((family, i) => {
            const group = GROUPS[i]!;
            const large = i < 2;
            return (
              <Link
                key={family.href}
                href={family.href}
                className={`nx-media nx-zoom nx-focus ${BENTO[i]} flex flex-col rounded-[24px] text-white no-underline ${
                  large ? "min-h-[560px] justify-between p-9" : "min-h-[440px] justify-end p-8"
                } max-[640px]:min-h-[380px] max-[640px]:p-6`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={family.imgSrc} alt={family.imgAlt} loading="lazy" />
                <span
                  aria-hidden="true"
                  className="nx-shade"
                  style={{
                    background: large
                      ? "linear-gradient(180deg, rgba(11,26,48,0.15) 30%, rgba(11,26,48,0.92) 100%)"
                      : "linear-gradient(180deg, rgba(11,26,48,0) 35%, rgba(11,26,48,0.92) 100%)",
                  }}
                />
                {large ? (
                  <span className="nx-label relative self-start rounded-full border border-white/20 bg-[rgba(11,26,48,0.45)] px-3.5 py-2 backdrop-blur-[10px]">
                    {formatText(t.capTag, { ids: FAMILY_CAPS[group].join(" · ") })}
                  </span>
                ) : null}
                <span className="relative flex max-w-[560px] flex-col gap-3.5">
                  <span className="nx-label text-xs text-[var(--nx-accent)]">{family.label}</span>
                  <span
                    className={`nx-display block ${
                      i === 0 ? "nx-t-h3" : i === 1 ? "nx-t-h3" : "nx-t-h4"
                    }`}
                  >
                    {family.title}
                  </span>
                  <span className="inline-flex items-center gap-2.5 text-sm font-semibold">
                    {t.learnMore} <span className="nx-arrow" aria-hidden="true">→</span>
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="why-heading" className="bg-[var(--nx-sand)]">
        <div className="nx-wrap nx-section--lg flex flex-wrap gap-12">
          <p className="nx-eyebrow flex-[0_0_220px]">{t.whyEyebrow}</p>
          <div className="flex min-w-0 flex-[1_1_600px] flex-col gap-[72px]">
            <h2
              id="why-heading"
              data-reveal
              className="nx-display m-0 nx-t-statement"
            >
              <Emph text={t.whyStatement} />
            </h2>
            <div data-reveal="stagger" className="nx-grid nx-grid-220 gap-10">
              {t.pillars.map((pillar, i) => (
                <div key={pillar.title} className="flex flex-col gap-3">
                  <span className="nx-num nx-t-num">{pad2(i + 1)}</span>
                  <h3 className="m-0 text-lg font-semibold">{pillar.title}</h3>
                  <p className="m-0 text-sm leading-relaxed text-[var(--nx-muted)]">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" aria-labelledby="portfolio-heading" className="nx-wrap nx-section flex scroll-mt-6 flex-col gap-9">
        <SectionHead id="portfolio-heading" eyebrow={t.portfolioEyebrow} title={t.portfolioTitle} />
        <CapabilityExplorer
          capabilities={explorerCaps}
          filters={[
            { key: "all", label: t.filterAll },
            ...GROUPS.map((group) => ({ key: group, label: groupLabels[group] })),
          ]}
          groupLabels={groupLabels}
          discussHref={contactHref}
          text={{
            filterLabel: t.filterLabel,
            capabilityLabel: t.capabilityLabel,
            discuss: t.discuss,
            familyPage: t.familyPage,
          }}
        />
      </section>

      <section id="digital-energy" aria-labelledby="digital-heading" className="nx-dark relative scroll-mt-6 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={DIGITAL_IMAGE} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        <div
          aria-hidden="true"
          className="nx-shade"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,26,48,0.97) 0%, rgba(11,26,48,0.85) 45%, rgba(11,26,48,0.35) 100%)",
          }}
        />
        <div data-reveal="stagger" className="nx-wrap relative flex flex-col gap-7 py-36 max-[900px]:py-24">
          <p className="nx-eyebrow">{t.digitalEyebrow}</p>
          <h2
            id="digital-heading"
            className="nx-display m-0 max-w-[820px] nx-t-h2"
          >
            <Emph text={t.digitalTitle} />
          </h2>
          <p className="m-0 max-w-[560px] text-lg leading-relaxed text-[var(--nx-cloud)]">{t.digitalBody}</p>
          <ul className="m-0 flex max-w-[640px] list-none flex-wrap gap-2.5 p-0 pt-3">
            {digitalEnergy.capabilities.map((action, i) =>
              i === lastAction ? (
                <li key={action} className="rounded-full bg-[var(--nx-accent)] px-[18px] py-2.5 text-sm font-semibold text-[var(--nx-ink)]">
                  {action}
                </li>
              ) : (
                <li
                  key={action}
                  className="rounded-full border border-white/30 bg-white/[0.06] px-[18px] py-2.5 text-sm backdrop-blur-[8px]"
                >
                  {action}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section aria-labelledby="lifecycle-heading" className="nx-wrap nx-section flex flex-col gap-16">
        <SectionHead id="lifecycle-heading" eyebrow={t.lifecycleEyebrow} title={t.lifecycleTitle} titleMaxWidth={820} />
        <ol
          data-reveal="stagger"
          className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(150px,1fr))] border-t-2 border-[var(--nx-line)] p-0"
        >
          {brandLifecycle.map((stage, i) => {
            const early = i < 3;
            return (
              <li
                key={stage.title}
                className="-mt-0.5 flex flex-col gap-2.5 pr-4 pt-7"
                style={{ borderTop: `2px solid ${early ? "var(--nx-accent)" : "var(--nx-navy)"}` }}
              >
                <span className={`nx-num text-base ${early ? "" : "!text-[var(--nx-muted)]"}`}>{pad2(i + 1)}</span>
                <span className="nx-t-h4">{stage.title}</span>
                <span className="text-sm leading-relaxed text-[var(--nx-muted)]">{stage.description}</span>
              </li>
            );
          })}
        </ol>
      </section>

      <CtaBanner
        flushTop
        eyebrow={t.ctaEyebrow}
        title={t.ctaTitle}
        video={CTA_VIDEO}
        poster={CTA_POSTER}
        actions={
          <Link href={contactHref} className="nx-btn nx-btn--accent nx-btn--lg">
            {navCta.label} <span aria-hidden="true">→</span>
          </Link>
        }
      />
    </SiteChrome>
  );
}
