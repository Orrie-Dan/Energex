import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import { CtaBanner } from "../../components/shell/cta-banner";
import { Emph, pad2 } from "../../components/shell/emph";
import { PageHero } from "../../components/shell/page-hero";
import { SectionHead } from "../../components/shell/section-head";
import { isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

const HERO_VIDEO = "/assets/energex/about-hero.mp4";
const HERO_POSTER = "/assets/energex/city-night.jpg";
const WHO_IMAGE = "/assets/energex/about-team.jpg";
const VISION_IMAGE = "/assets/energex/about-vision.jpg";
const CTA_IMAGE = "/assets/energex/fam-grid.jpg";

/** Groups the ten delivery-framework steps (by position) into four stages; `Deliver` is highlighted. */
const DELIVERY_STAGES = [
  { key: "stageDefine", from: 0, to: 2 },
  { key: "stageStructure", from: 2, to: 4 },
  { key: "stageDeliver", from: 4, to: 7 },
  { key: "stageOperate", from: 7, to: 10 },
] as const;
const HIGHLIGHT_STAGE = 2;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/about", getContent(locale).ui.meta.about);
}

export default async function AboutPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { deliveryControls, deliveryFramework, deliveryRoles, marketPhases, navCta, pageCopy, ui, href } =
    getContent(locale);
  const t = pageCopy.about;
  const phaseNotes = [ui.about.marketPhase1Note, ui.about.marketPhase2Note, ui.about.marketPhase3Note];
  const lastRole = deliveryRoles.length - 1;
  const lastPrinciple = t.principles.length - 1;
  const lastStep = t.journey.length - 1;

  return (
    <SiteChrome locale={locale} tone="plain" heroOverlay>
      <PageHero
        label={t.heroEyebrow}
        video={HERO_VIDEO}
        poster={HERO_POSTER}
        shade="linear-gradient(180deg, rgba(11,26,48,0.7) 0%, rgba(11,26,48,0.2) 40%, rgba(11,26,48,0.94) 100%)"
        minHeight={820}
        paddingBottom={168}
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        lead={t.heroLead}
      />

      <section id="who-we-are" aria-labelledby="who-heading" className="nx-wrap nx-section--lg flex scroll-mt-6 flex-wrap items-stretch gap-14">
        <div className="flex min-w-0 flex-[1_1_560px] flex-col justify-between gap-10">
          <div data-reveal className="flex flex-col gap-6">
            <p className="nx-eyebrow">{t.whoEyebrow}</p>
            <h2
              id="who-heading"
              className="nx-display m-0 nx-t-statement"
            >
              <Emph text={t.whoTitle} />
            </h2>
          </div>
          <div data-reveal className="nx-dark relative flex flex-col gap-4 overflow-hidden rounded-[28px] !bg-[var(--nx-navy)] p-10 max-[640px]:p-7">
            <span
              aria-hidden="true"
              className="absolute -right-2.5 -top-10 text-[220px] font-semibold text-white/5"
            >
              “
            </span>
            <span className="nx-label relative text-[var(--nx-accent)]">{t.missionLabel}</span>
            <p className="nx-display relative m-0 text-base md:text-lg">{t.mission}</p>
          </div>
        </div>
        <div data-reveal className="nx-media nx-zoom relative min-h-[620px] min-w-0 flex-[1_1_480px] rounded-[28px] max-[640px]:min-h-[420px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={WHO_IMAGE} alt={t.whoImgAlt} loading="lazy" />
          <ol className="absolute bottom-6 left-6 right-6 m-0 flex list-none flex-wrap gap-2 p-0">
            {t.journey.map((step, i) => (
              <li
                key={step}
                className={`rounded-full px-4 py-2.5 text-xs font-semibold text-[var(--nx-ink)] ${
                  i === lastStep ? "bg-[var(--nx-accent)]" : "bg-white/85 backdrop-blur-[10px]"
                }`}
              >
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="operating-model" aria-labelledby="operate-heading" className="nx-dark scroll-mt-6">
        <div className="nx-wrap nx-section--lg flex flex-col gap-16">
          <SectionHead id="operate-heading" eyebrow={t.operateEyebrow} title={t.operateTitle} titleMaxWidth={760} />
          <ul data-reveal="stagger" className="nx-grid nx-grid-300 m-0 list-none p-0">
            {t.principles.map((principle, i) => {
              const on = i === lastPrinciple;
              return (
                <li
                  key={principle.title}
                  className={`flex flex-col gap-14 rounded-[28px] p-10 max-[640px]:p-7 ${
                    on ? "border border-[var(--nx-accent)] bg-[rgba(240,122,26,0.08)]" : "border border-white/15 bg-white/[0.03]"
                  }`}
                >
                  <span className="nx-num nx-t-stat">{pad2(i + 1)}</span>
                  <div className="flex flex-col gap-3.5">
                    <h3 className="m-0 nx-t-h4">
                      {principle.title}
                    </h3>
                    <p className="m-0 text-sm leading-relaxed text-[var(--nx-mist)]">{principle.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <div id="roles" className="flex scroll-mt-6 flex-col gap-5 border-t border-white/15 pt-6">
            <h3 className="nx-label m-0 text-[var(--nx-mist)]">{t.rolesLabel}</h3>
            <ul data-reveal="stagger" className="m-0 flex list-none flex-wrap gap-2.5 p-0">
              {deliveryRoles.map((role, i) => (
                <li
                  key={role}
                  className={`rounded-full px-[22px] py-3 text-sm ${
                    i === lastRole ? "bg-[var(--nx-accent)] text-[var(--nx-ink)]" : "border border-white/25"
                  }`}
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="delivery" aria-labelledby="delivery-heading" className="nx-wrap nx-section--lg flex scroll-mt-6 flex-col gap-16">
        <SectionHead id="delivery-heading" eyebrow={t.deliveryEyebrow} title={t.deliveryTitle} titleMaxWidth={820} />
        <ol data-reveal="stagger" className="nx-grid nx-grid-260 m-0 list-none gap-4 p-0">
          {DELIVERY_STAGES.map((stage, i) => {
            const on = i === HIGHLIGHT_STAGE;
            return (
              <li
                key={stage.key}
                className={`flex min-h-[320px] flex-col gap-7 rounded-[24px] p-8 ${
                  on ? "nx-dark !bg-[var(--nx-navy)]" : "bg-[var(--nx-sand)]"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="m-0 nx-t-h3">
                    {ui.about[stage.key]}
                  </h3>
                  <span className="nx-num text-lg">{pad2(i + 1)}</span>
                </div>
                <ol className="m-0 flex list-none flex-col p-0 text-sm">
                  {deliveryFramework.slice(stage.from, stage.to).map((step) => (
                    <li key={step.id} className={`border-t py-3 ${on ? "border-white/15" : "border-[var(--nx-line)]"}`}>
                      {step.title}
                    </li>
                  ))}
                </ol>
              </li>
            );
          })}
        </ol>
        <div id="controls" className="flex scroll-mt-6 flex-wrap items-center gap-3 rounded-[20px] border border-[var(--nx-line)] px-7 py-6">
          <h3 className="nx-label m-0 mr-2 text-[var(--nx-accent-ink)]">{t.controlsLabel}</h3>
          <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
            {deliveryControls.map((control) => (
              <li key={control.title} className="nx-tag">
                {control.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="markets" aria-labelledby="vision-heading" className="nx-dark relative scroll-mt-6 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={VISION_IMAGE}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
        />
        <div
          aria-hidden="true"
          className="nx-shade"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,26,48,0.6) 0%, rgba(11,26,48,0.88) 55%, rgba(11,26,48,0.98) 100%)",
          }}
        />
        <div className="nx-wrap relative flex flex-col gap-[72px] pb-[136px] pt-40 max-[900px]:py-24">
          <div data-reveal className="flex max-w-[1040px] flex-col gap-6">
            <p className="nx-eyebrow">{t.visionEyebrow}</p>
            <h2
              id="vision-heading"
              className="nx-display m-0 nx-t-statement"
            >
              <Emph text={t.visionStatement} />
            </h2>
          </div>
          <ol data-reveal="stagger" className="nx-grid nx-grid-300 m-0 list-none p-0">
            {marketPhases.map((phase, i) => {
              const primary = phase.emphasis === "primary";
              const media = t.phaseImages[i];
              return (
                <li
                  key={phase.phase}
                  className="nx-media nx-zoom flex min-h-[380px] items-end rounded-[24px]"
                  style={primary ? { border: "2px solid var(--nx-accent)" } : undefined}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {media ? <img src={media.imgSrc} alt={media.imgAlt} loading="lazy" /> : null}
                  <div
                    aria-hidden="true"
                    className="nx-shade"
                    style={{ background: "linear-gradient(180deg, rgba(11,26,48,0.05) 30%, rgba(11,26,48,0.92) 100%)" }}
                  />
                  <div className="relative flex flex-col gap-2 p-7">
                    <span className={`nx-label ${primary ? "text-[var(--nx-accent)]" : "text-[var(--nx-cloud)]"}`}>
                      {phase.phase} · {phaseNotes[i]}
                    </span>
                    <h3 className="nx-display m-0 nx-t-h3">{phase.title}</h3>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <CtaBanner
        title={t.ctaTitle}
        image={CTA_IMAGE}
        actions={
          <>
            <Link href={navCta.href} className="nx-btn nx-btn--accent nx-btn--lg">
              {navCta.label} <span aria-hidden="true">→</span>
            </Link>
            <Link href={href("/solutions")} className="nx-btn nx-btn--ghost nx-btn--lg">
              {t.ctaSecondary}
            </Link>
          </>
        }
      />
    </SiteChrome>
  );
}
