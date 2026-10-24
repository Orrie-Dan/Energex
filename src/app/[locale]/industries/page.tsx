import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import { CtaBanner } from "../../components/shell/cta-banner";
import { pad2 } from "../../components/shell/emph";
import { IndustrySelector } from "../../components/shell/industry-selector";
import { PageHero } from "../../components/shell/page-hero";
import { SectionHead } from "../../components/shell/section-head";
import { isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

const HERO_VIDEO = "/assets/energex/industries-hero.mp4";
const HERO_POSTER = "/assets/energex/industries-hero-poster.jpg";
const CTA_IMAGE = "/assets/energex/ind-ipp.jpg";

/** Bento layout for the six focus areas; the last one is a wide banner with a description. */
const VERTICAL_LAYOUT = [
  { span: "nx-b8", height: "min-h-[460px]", size: "nx-t-h3", pad: "p-8" },
  { span: "nx-b4", height: "min-h-[460px]", size: "nx-t-h4", pad: "p-7" },
  { span: "nx-b4", height: "min-h-[380px]", size: "nx-t-h4", pad: "p-7" },
  { span: "nx-b4", height: "min-h-[380px]", size: "nx-t-h4", pad: "p-7" },
  { span: "nx-b4", height: "min-h-[380px]", size: "nx-t-h4", pad: "p-7" },
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/industries", getContent(locale).ui.meta.industries);
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { customers, industrialVerticals, navCta, pageCopy, href } = getContent(locale);
  const t = pageCopy.industries;
  const wide = industrialVerticals.length - 1;

  return (
    <SiteChrome locale={locale} tone="plain" heroOverlay>
      <PageHero
        label={t.heroEyebrow}
        video={HERO_VIDEO}
        poster={HERO_POSTER}
        shade="linear-gradient(180deg, rgba(11,26,48,0.78) 0%, rgba(11,26,48,0.45) 40%, rgba(11,26,48,0.95) 100%)"
        tint
        minHeight={780}
        paddingBottom={152}
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        lead={t.heroLead}
        aside={
          <div className="flex flex-wrap gap-4">
            {t.stats.map((stat, i) => (
              <div
                key={stat.number}
                className="flex flex-col gap-1.5 rounded-[20px] border border-white/15 bg-white/[0.08] px-7 py-6 backdrop-blur-[14px]"
              >
                <span
                  className={`nx-t-stat font-semibold ${
                    i === t.stats.length - 1 ? "text-[var(--nx-accent)]" : ""
                  }`}
                >
                  {stat.number}
                </span>
                <span className="text-sm text-[var(--nx-cloud)]">{stat.label}</span>
              </div>
            ))}
          </div>
        }
      />

      <section aria-labelledby="segments-heading" className="nx-wrap nx-section flex flex-col gap-14">
        <SectionHead id="segments-heading" eyebrow={t.segmentsEyebrow} title={t.segmentsTitle} aside={t.segmentsIntro} />
        <IndustrySelector
          segments={customers.map((customer, i) => ({
            anchorId: customer.anchorId,
            title: customer.title,
            need: customer.need,
            response: customer.response,
            services: customer.offerings,
            imgSrc: customer.imgSrc,
            imgAlt: t.segmentAlts[i] ?? "",
          }))}
          discussHref={navCta.href}
          exploreHref={href("/solutions")}
          text={{
            label: t.segmentsLabel,
            segmentOf: t.segmentOf,
            need: t.need,
            response: t.response,
            discuss: t.discuss,
            explore: t.explore,
          }}
        />
      </section>

      <section aria-labelledby="focus-heading" className="bg-[var(--nx-sand)]">
        <div className="nx-wrap nx-section flex flex-col gap-14">
          <SectionHead id="focus-heading" eyebrow={t.focusEyebrow} title={t.focusTitle} titleMaxWidth={820} />
          <ul data-reveal="stagger" className="nx-bento m-0 list-none p-0">
            {industrialVerticals.map((vertical, i) => {
              const media = t.verticals[i];
              if (i === wide) {
                return (
                  <li key={vertical.title} className="nx-media nx-zoom nx-b12 flex min-h-[360px] items-end rounded-[24px] text-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    {media ? <img src={media.imgSrc} alt={media.imgAlt} loading="lazy" /> : null}
                    <div
                      aria-hidden="true"
                      className="nx-shade"
                      style={{ background: "linear-gradient(90deg, rgba(11,26,48,0.88) 0%, rgba(11,26,48,0.2) 70%)" }}
                    />
                    <div className="relative flex max-w-[560px] flex-col gap-3 p-10 max-[640px]:p-7">
                      <span className="nx-num text-lg !text-[var(--nx-accent)]">{pad2(i + 1)}</span>
                      <h3 className="nx-display m-0 nx-t-h3">
                        {vertical.title}
                      </h3>
                      <p className="m-0 text-sm leading-relaxed text-[var(--nx-cloud)]">{t.commercialDescription}</p>
                    </div>
                  </li>
                );
              }
              const layout = VERTICAL_LAYOUT[i] ?? VERTICAL_LAYOUT[4];
              return (
                <li
                  key={vertical.title}
                  className={`nx-media nx-zoom ${layout.span} ${layout.height} flex items-end rounded-[24px] text-white max-[640px]:min-h-[320px]`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {media ? <img src={media.imgSrc} alt={media.imgAlt} loading="lazy" /> : null}
                  <div
                    aria-hidden="true"
                    className="nx-shade"
                    style={{ background: "linear-gradient(180deg, rgba(11,26,48,0) 45%, rgba(11,26,48,0.88) 100%)" }}
                  />
                  <div className={`relative flex w-full items-baseline justify-between gap-4 ${layout.pad}`}>
                    <h3 className={`nx-display m-0 ${layout.size}`}>
                      {vertical.title}
                    </h3>
                    <span className="nx-num text-lg !text-[var(--nx-accent)]">{pad2(i + 1)}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CtaBanner
        eyebrow={t.ctaEyebrow}
        title={t.ctaTitle}
        image={CTA_IMAGE}
        actions={
          <Link href={navCta.href} className="nx-btn nx-btn--accent nx-btn--lg">
            {navCta.label} <span aria-hidden="true">→</span>
          </Link>
        }
      />
    </SiteChrome>
  );
}
