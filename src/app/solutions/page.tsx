import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import CapabilityIndexSection from "../sections/capability-index-section";
import { digitalEnergy, solutionsIndexPage } from "../../data/energex";
import "../solutions-index.css";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Complete ENERGEX capability portfolio — fifteen specialist areas from development and generation through grid, industrial energy, financing support, O&M and digital energy.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions",
    description:
      "Complete ENERGEX capability portfolio — fifteen specialist areas from development and generation through grid, industrial energy, financing support, O&M and digital energy.",
    url: "/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <SiteChrome tone="plain">
      <div className="sl-page">
        <section className="sl-hero" aria-label="Solutions hero">
          <div className="sl-hero-inner">
            <div className="sl-hero-eyebrow">
              <span className="sl-hero-eyebrow-bar" aria-hidden />
              <p>{solutionsIndexPage.eyebrow}</p>
            </div>
            <h1 className="sl-hero-title">
              {solutionsIndexPage.headingLead}{" "}
              <span className="sl-hero-title-muted">{solutionsIndexPage.headingAccent}</span>
            </h1>
            <p className="sl-hero-intro">{solutionsIndexPage.intro}</p>
          </div>
        </section>

        <CapabilityIndexSection />

        <section className="sl-connect" id="digital-energy" aria-labelledby="digital-heading">
          <div className="sl-connect-inner">
            <h2 id="digital-heading" className="sl-connect-title">
              {digitalEnergy.headingLead} {digitalEnergy.headingAccent}
            </h2>
            <p className="sl-connect-body">{digitalEnergy.supporting}</p>
            <p className="sl-connect-body">
              Physical layers: {digitalEnergy.layers.join(" · ")}
            </p>
            <p className="sl-connect-body">
              Digital actions: {digitalEnergy.capabilities.join(" · ")}
            </p>
          </div>
        </section>

        <section className="sl-connect" aria-labelledby="connect-heading">
          <div className="sl-connect-inner">
            <h2 id="connect-heading" className="sl-connect-title">
              {solutionsIndexPage.connectHeading}
            </h2>
            <p className="sl-connect-body">{solutionsIndexPage.connectBody}</p>
            <p className="sl-connect-body">
              Brand lifecycle: Develop · Design · Finance · Source · Build · Operate · Optimize —
              assembled through the documented project delivery framework on About.
            </p>
          </div>
        </section>

        <Link href={solutionsIndexPage.finalCta.href} className="sl-final-cta">
          <h2 className="sl-final-cta-title">{solutionsIndexPage.finalCta.heading}</h2>
          <span className="sl-final-cta-action">
            {solutionsIndexPage.finalCta.label} →
          </span>
        </Link>
      </div>
    </SiteChrome>
  );
}
