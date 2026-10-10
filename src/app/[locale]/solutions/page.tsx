import Link from "next/link";
import type { Metadata } from "next";
import { HomeReveal } from "../../components/home-reveal";
import { SiteChrome } from "../../components/site-chrome";
import CapabilityIndexSection from "../../sections/capability-index-section";
import { formatText, isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";
import "../../solutions-index.css";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/solutions", getContent(locale).ui.meta.solutions);
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { brandLifecycle, capabilities, digitalEnergy, familyLabels, solutionsIndexPage, ui } =
    getContent(locale);
  const t = ui.solutions;
  return (
    <SiteChrome locale={locale} tone="plain">
      <div className="sl-page">
        <section className="sl-hero" aria-label={t.heroLabel}>
          <HomeReveal stagger className="sl-hero-inner">
            <div className="sl-hero-eyebrow">
              <span className="sl-hero-eyebrow-bar" aria-hidden />
              <p>{solutionsIndexPage.eyebrow}</p>
            </div>
            <h1 className="sl-hero-title">
              {solutionsIndexPage.headingLead}{" "}
              <span className="sl-hero-title-muted">{solutionsIndexPage.headingAccent}</span>
            </h1>
            <p className="sl-hero-intro">{solutionsIndexPage.intro}</p>
          </HomeReveal>
        </section>

        <CapabilityIndexSection
          capabilities={capabilities}
          familyLabels={familyLabels}
          familiesNote={solutionsIndexPage.familiesNote}
          text={{
            eyebrow: t.portfolioEyebrow,
            heading: t.portfolioHeading,
            listLabel: t.capabilitiesList,
            crossCutting: t.crossCutting,
            belongsTo: t.belongsTo,
            viewAll: t.viewAllCapabilities,
            familyLink: t.familyLink,
          }}
        />

        <section className="sl-connect" id="digital-energy" aria-labelledby="digital-heading">
          <HomeReveal stagger className="sl-connect-inner">
            <h2 id="digital-heading" className="sl-connect-title">
              {digitalEnergy.headingLead} {digitalEnergy.headingAccent}
            </h2>
            <p className="sl-connect-body">{digitalEnergy.supporting}</p>
            <p className="sl-connect-body">
              {formatText(t.physicalLayers, { items: digitalEnergy.layers.join(" · ") })}
            </p>
            <p className="sl-connect-body">
              {formatText(t.digitalActions, { items: digitalEnergy.capabilities.join(" · ") })}
            </p>
          </HomeReveal>
        </section>

        <section className="sl-connect" aria-labelledby="connect-heading">
          <HomeReveal stagger className="sl-connect-inner">
            <h2 id="connect-heading" className="sl-connect-title">
              {solutionsIndexPage.connectHeading}
            </h2>
            <p className="sl-connect-body">{solutionsIndexPage.connectBody}</p>
            <p className="sl-connect-body">
              {formatText(t.brandLifecycle, { stages: brandLifecycle.map((stage) => stage.title).join(" · ") })}
            </p>
          </HomeReveal>
        </section>

        <Link href={solutionsIndexPage.finalCta.href} className="sl-final-cta">
          <HomeReveal stagger>
            <h2 className="sl-final-cta-title">{solutionsIndexPage.finalCta.heading}</h2>
            <span className="sl-final-cta-action">
              {solutionsIndexPage.finalCta.label} →
            </span>
          </HomeReveal>
        </Link>
      </div>
    </SiteChrome>
  );
}
