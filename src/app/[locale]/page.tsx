import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import { CtaBanner } from "../components/shell/cta-banner";
import { pad2 } from "../components/shell/emph";
import { PageHero } from "../components/shell/page-hero";
import { Marquee, SectionHead, StatFigure } from "../components/shell/section-head";
import { isLocale, type Locale } from "../../i18n/config";
import { getContent } from "../../i18n/content";
import { pageMetadata } from "../../i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

const HERO_VIDEO = "/assets/energex/hero.mp4";
const CTA_VIDEO = "/assets/energex/cta-loop.mp4";
const CTA_POSTER = "/assets/energex/cta-loop-poster.jpg";
/** Bento spans for the five solution-family cards (same layout as /solutions). */
const BENTO = ["nx-b7", "nx-b5", "nx-b4", "nx-b4", "nx-b4"] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { ui } = getContent(locale);
  // The layout's title template is skipped so the home title stays "ENERGEX".
  return { ...pageMetadata(locale, "/", ui.meta.home), title: { absolute: ui.meta.home.title } };
}

export default async function Page({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const {
    approvedEvidence,
    capabilityStrengths,
    contactClose,
    customers,
    evidenceSection,
    hero,
    industriesSection,
    pageCopy,
    ui,
    whyEnergex,
    href,
  } = getContent(locale);
  const s = pageCopy.solutions;

  return (
    <SiteChrome locale={locale} tone="plain" heroOverlay>
      <PageHero
        label={ui.home.heroLabel}
        video={HERO_VIDEO}
        shade="linear-gradient(180deg, rgba(11,26,48,0.72) 0%, rgba(11,26,48,0.25) 35%, rgba(11,26,48,0.55) 70%, rgba(11,26,48,0.96) 100%)"
        minHeight={860}
        paddingBottom={128}
        eyebrow={hero.eyebrow}
        chips={[hero.supporting]}
        title={`${hero.headlineLead} *${hero.headlineAccent}*`}
        lead={hero.body}
        actions={
          <>
            <Link href={hero.secondaryCta.href} className="nx-btn nx-btn--accent">
              {hero.secondaryCta.label} <span aria-hidden="true">→</span>
            </Link>
            <Link href={hero.primaryCta.href} className="nx-btn nx-btn--ghost">
              {hero.primaryCta.label}
            </Link>
          </>
        }
        footer={<Marquee items={s.marquee} />}
      />

      <section className="nx-dark">
        <div data-reveal="stagger" className="nx-wrap nx-grid nx-grid-220 gap-8 pb-[88px] pt-14 max-[640px]:grid-cols-2 max-[640px]:gap-x-5 max-[640px]:gap-y-8 max-[640px]:pb-16">
          {s.stats.map((stat, i) => (
            <StatFigure key={stat.number} number={stat.number} label={stat.label} accent={i === s.stats.length - 1} />
          ))}
        </div>
      </section>

      <section aria-labelledby="home-solutions" className="nx-wrap flex flex-col gap-14 pb-24 pt-32 max-[900px]:pt-[88px]">
        <SectionHead
          id="home-solutions"
          eyebrow={ui.home.solutionsEyebrow}
          title={`${ui.home.solutionsHeadingLead}*${ui.home.solutionsHeadingAccent}*`}
          aside={
            <Link href={href("/solutions")} className="nx-link">
              {ui.home.exploreAllCapabilities} <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          }
        />
        <div data-reveal="stagger" className="nx-bento">
          {s.families.map((family, i) => {
            const large = i < 2;
            return (
              <Link
                key={family.href}
                href={family.href}
                className={`nx-media nx-zoom nx-focus ${BENTO[i]} flex flex-col justify-end rounded-[24px] text-white no-underline ${
                  large ? "min-h-[520px] p-9" : "min-h-[400px] p-8"
                } max-[640px]:min-h-[340px] max-[640px]:p-6`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={family.imgSrc} alt={family.imgAlt} loading="lazy" />
                <span
                  aria-hidden="true"
                  className="nx-shade"
                  style={{ background: "linear-gradient(180deg, rgba(11,26,48,0.05) 35%, rgba(11,26,48,0.92) 100%)" }}
                />
                <span className="relative flex max-w-[560px] flex-col gap-3">
                  <span className="nx-label text-[var(--nx-accent)]">{family.label}</span>
                  <span className={`nx-display block ${large ? "nx-t-h3" : "nx-t-h4"}`}>{family.title}</span>
                  <span className="inline-flex items-center gap-2.5 text-sm font-semibold">
                    {ui.home.explore} <span className="nx-arrow" aria-hidden="true">→</span>
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="home-why" className="bg-[var(--nx-sand)]">
        <div className="nx-wrap nx-section flex flex-col gap-14">
          <SectionHead
            id="home-why"
            eyebrow={whyEnergex.label}
            title={`${whyEnergex.headingLead} *${whyEnergex.headingAccent}*`}
            aside={whyEnergex.supporting}
          />
          <ol data-reveal="stagger" className="nx-grid nx-grid-220 m-0 list-none gap-10 p-0">
            {whyEnergex.pillars.map((pillar) => (
              <li key={pillar.title} className="flex flex-col gap-3 border-t-2 border-[var(--nx-accent)] pt-6">
                <span className="nx-num nx-t-num">{pillar.number}</span>
                <h3 className="nx-t-h4">{pillar.title}</h3>
                <p className="nx-body">{pillar.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="home-industries" className="nx-wrap nx-section flex flex-col gap-14">
        <SectionHead
          id="home-industries"
          eyebrow={industriesSection.label}
          title={`${industriesSection.headingLead} *${industriesSection.headingAccent}*`}
          aside={industriesSection.supporting}
        />
        <ul data-reveal="stagger" className="nx-grid nx-grid-260 m-0 list-none p-0">
          {customers.map((segment, i) => (
            <li key={segment.anchorId}>
              <Link
                href={`${href("/industries")}#${segment.anchorId}`}
                className="nx-media nx-zoom nx-focus flex min-h-[320px] items-end rounded-[24px] text-white no-underline max-[640px]:min-h-[220px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={segment.imgSrc} alt="" loading="lazy" />
                <span
                  aria-hidden="true"
                  className="nx-shade"
                  style={{ background: "linear-gradient(180deg, rgba(11,26,48,0.05) 30%, rgba(11,26,48,0.92) 100%)" }}
                />
                <span className="relative flex flex-col gap-2 p-6">
                  <span className="nx-num text-sm !text-[var(--nx-accent)]">{pad2(i + 1)}</span>
                  <span className="nx-t-h4">{segment.title}</span>
                  <span className="text-sm text-[var(--nx-cloud)]">{segment.need}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="home-capabilities" className="nx-dark">
        <div className="nx-wrap nx-section flex flex-col gap-14">
          <SectionHead
            id="home-capabilities"
            eyebrow={evidenceSection.label}
            title={`${evidenceSection.headingLead} *${evidenceSection.headingAccent}*`}
          />
          <ul data-reveal="stagger" className="nx-grid nx-grid-260 m-0 list-none p-0">
            {capabilityStrengths.map((item, i) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="nx-zoom nx-focus flex h-full min-h-[260px] flex-col justify-between gap-10 rounded-[24px] border border-white/15 bg-white/[0.03] p-8 text-white no-underline transition-colors hover:border-[var(--nx-accent)]"
                >
                  <span className="nx-num nx-t-num">{pad2(i + 1)}</span>
                  <span className="flex flex-col gap-3">
                    <span className="nx-t-h4">{item.title}</span>
                    <span className="nx-body">{item.body}</span>
                    <span className="nx-arrow text-[var(--nx-accent)]" aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {approvedEvidence.length > 0 ? (
            <div className="flex flex-col gap-4 border-t border-white/15 pt-6">
              <h3 className="nx-label m-0 text-[var(--nx-mist)]">{ui.home.evidenceApproved}</h3>
              <ul className="nx-grid nx-grid-300 m-0 list-none p-0">
                {approvedEvidence.map((item) => (
                  <li key={item.id} className="flex flex-col gap-1">
                    <span className="nx-label text-[var(--nx-accent)]">{item.kind}</span>
                    <span className="nx-t-h4">{item.title}</span>
                    <span className="nx-body">{item.summary}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <CtaBanner
        eyebrow={contactClose.label}
        title={contactClose.heading}
        body={contactClose.body}
        video={CTA_VIDEO}
        poster={CTA_POSTER}
        actions={
          <>
            <Link href={contactClose.project.href} className="nx-btn nx-btn--accent nx-btn--lg">
              {contactClose.project.label} <span aria-hidden="true">→</span>
            </Link>
            <Link href={contactClose.equipment.href} className="nx-btn nx-btn--ghost nx-btn--lg">
              {contactClose.equipment.label}
            </Link>
          </>
        }
      />
    </SiteChrome>
  );
}

