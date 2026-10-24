import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import { CtaBanner } from "../../components/shell/cta-banner";
import { Emph, pad2 } from "../../components/shell/emph";
import { EquipmentTabs } from "../../components/shell/equipment-tabs";
import { PageHero } from "../../components/shell/page-hero";
import { SectionHead } from "../../components/shell/section-head";
import { isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

/** Hero background video; no poster so the navy hero shows until it plays. */
const HERO_VIDEO = "/assets/energex/equipment-hero-ship.mp4";
const CTA_IMAGE = "/assets/energex/eq-td.jpg";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/equipment", getContent(locale).ui.meta.equipment);
}

export default async function EquipmentPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { equipmentCategories, equipmentCategoryHref, equipmentProcurement, equipmentQuoteHref, pageCopy, href } =
    getContent(locale);
  const t = pageCopy.equipment;
  const quoteHref = href("/contact?interest=equipment");

  return (
    <SiteChrome locale={locale} tone="plain" heroOverlay>
      <PageHero
        label={t.heroEyebrow}
        video={HERO_VIDEO}
        shade="linear-gradient(180deg, rgba(11,26,48,0.75) 0%, rgba(11,26,48,0.3) 40%, rgba(11,26,48,0.95) 100%)"
        minHeight={800}
        paddingBottom={168}
        eyebrow={t.heroEyebrow}
        chips={t.heroChips}
        title={t.heroTitle}
        lead={t.heroLead}
        actions={
          <>
            <Link href={quoteHref} className="nx-btn nx-btn--accent">
              {t.requestQuote} <span aria-hidden="true">→</span>
            </Link>
            <a href="#categories" className="nx-btn nx-btn--ghost">
              {t.browse}
            </a>
          </>
        }
      />

      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="nx-wrap flex scroll-mt-6 flex-col gap-12 pb-24 pt-32 max-[900px]:pt-[88px]"
      >
        <div data-reveal className="nx-head">
          <div>
            <p className="nx-eyebrow">{t.categoriesEyebrow}</p>
            <h2 id="categories-heading" className="nx-h2">
              <Emph text={t.categoriesTitle} />
            </h2>
          </div>
          <p className="m-0 max-w-[400px] rounded-r-xl border-l-2 border-[var(--nx-accent)] bg-[var(--nx-sand)] px-5 py-4 text-sm leading-relaxed text-[var(--nx-muted)]">
            {t.categoriesNote}
          </p>
        </div>
        <EquipmentTabs
          categories={equipmentCategories.map((category) => ({
            slug: category.slug,
            title: category.title,
            description: category.description,
            scope: category.scope,
            featured: category.featured ?? false,
            imgSrc: category.imgSrc,
            imgAlt: category.imgAlt,
            quoteHref: equipmentQuoteHref(category.slug),
            detailHref: equipmentCategoryHref(category.slug),
          }))}
          text={{
            label: t.categoriesLabel,
            featured: t.featured,
            categoryOf: t.categoryOf,
            requestQuote: t.requestQuote,
            viewCategory: t.viewCategory,
          }}
        />
      </section>

      <section aria-labelledby="process-heading" className="nx-dark">
        <div className="nx-wrap nx-section--lg flex flex-col gap-16">
          <SectionHead id="process-heading" eyebrow={t.processEyebrow} title={t.processTitle} aside={t.processNote} />
          <ol data-reveal="stagger" className="nx-grid nx-grid-260 m-0 list-none p-0">
            {t.process.map((step, i) => (
              <li key={step.imgSrc} className="nx-media nx-zoom flex min-h-[440px] items-end rounded-[24px] max-[640px]:min-h-[360px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.imgSrc} alt={step.imgAlt} loading="lazy" />
                <div
                  aria-hidden="true"
                  className="nx-shade"
                  style={{ background: "linear-gradient(180deg, rgba(11,26,48,0.1) 25%, rgba(11,26,48,0.95) 100%)" }}
                />
                <div className="relative flex flex-col gap-2.5 p-7">
                  <span className="nx-num nx-t-num">{pad2(i + 1)}</span>
                  <h3 className="m-0 nx-t-h4">
                    {equipmentProcurement[i]}
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-[var(--nx-cloud)]">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBanner
        eyebrow={t.ctaEyebrow}
        title={t.ctaTitle}
        image={CTA_IMAGE}
        actions={
          <Link href={quoteHref} className="nx-btn nx-btn--accent nx-btn--lg">
            {t.requestQuote} <span aria-hidden="true">→</span>
          </Link>
        }
      />
    </SiteChrome>
  );
}
