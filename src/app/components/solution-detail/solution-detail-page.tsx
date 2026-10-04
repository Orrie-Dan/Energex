import Link from "next/link";
import type { SolutionDetail } from "../../../data/solutions";
import { getAdjacentSolutions, solutionDetails } from "../../../data/solutions";
import {
  finalCta as siteFinalCta,
  getCapabilitiesByIds,
  getCapabilityById,
} from "../../../data/energex";
import { FamilyCapabilityList } from "./family-capability-list";
import { SolutionHero } from "./solution-hero";
import { SolutionMedia } from "./solution-media";
import { SolutionNavigation } from "./solution-navigation";
import { SolutionPageMotion } from "./solution-page-motion";
import { SolutionReveal } from "./solution-reveal";

type SolutionDetailPageProps = {
  solution: SolutionDetail;
  /**
   * When true, previous/next walk the Energex family list.
   * Reference replica passes its own adjacent pair (or none).
   */
  useFamilyNavigation?: boolean;
  previousOverride?: SolutionDetail | null;
  nextOverride?: SolutionDetail | null;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="sd-bullets">
      {items.map((item) => (
        <li key={item}>
          <span className="sd-bullet-dot" aria-hidden />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}

function IntegrationChain({
  label,
  steps,
}: {
  label: string;
  steps: readonly string[];
}) {
  return (
    <section className="sd-block">
      <h2 className="sd-h">{label}</h2>
      <ol className="sd-integration" aria-label={label}>
        {steps.map((step, i) => (
          <li key={step} className="sd-integration-step">
            <span className="sd-integration-label">{step}</span>
            {i < steps.length - 1 ? (
              <span className="sd-integration-arrow" aria-hidden>
                ↓
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}

export function SolutionDetailPage({
  solution,
  useFamilyNavigation = true,
  previousOverride,
  nextOverride,
}: SolutionDetailPageProps) {
  const adjacent = useFamilyNavigation
    ? getAdjacentSolutions(solution.slug)
    : { previous: previousOverride ?? null, next: nextOverride ?? null };

  const previous = adjacent.previous;
  const next =
    adjacent.next ??
    (!useFamilyNavigation ? solutionDetails[0] ?? null : null);

  const motionKey = solution.slug;
  const familyCapabilities = solution.capabilityIds
    ? getCapabilitiesByIds(solution.capabilityIds)
    : [];
  const digitalCapability = getCapabilityById("15");
  const isFamilyPage = Boolean(solution.capabilityIds?.length);

  return (
    <SolutionPageMotion routeKey={motionKey}>
      <article className="sd-page">
        <SolutionHero
          motionKey={motionKey}
          eyebrow={solution.eyebrow}
          titleLines={solution.titleLines}
          supporting={solution.supporting}
          cta={solution.cta}
        />

        <section className="sd-body-stage">
          <SolutionMedia
            motionKey={motionKey}
            src={solution.heroImage.src}
            srcSet={solution.heroImage.srcSet}
            alt={solution.heroImage.alt}
            objectPosition={solution.heroImage.objectPosition}
          />

          <div className="sd-content">
            <div className="sd-content-col">
              <SolutionReveal>
                <section className="sd-block">
                  <h2 className="sd-h">Introduction</h2>
                  {solution.introduction.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)} className="sd-body">
                      {p}
                    </p>
                  ))}
                </section>
              </SolutionReveal>

              <SolutionReveal delayMs={40}>
                <section className="sd-block">
                  <h2 className="sd-h">What We Deliver</h2>
                  {familyCapabilities.length > 0 ? (
                    <FamilyCapabilityList capabilities={familyCapabilities} />
                  ) : (
                    <div className="sd-deliverables">
                      {(solution.deliverables ?? []).map((item, index) => (
                        <SolutionReveal key={item.title} delayMs={index * 70}>
                          <div className="sd-deliverable">
                            <h3 className="sd-h6">{item.title}</h3>
                            <p className="sd-body sd-body-tight">{item.description}</p>
                          </div>
                        </SolutionReveal>
                      ))}
                    </div>
                  )}
                </section>
              </SolutionReveal>

              <SolutionReveal delayMs={40}>
                <section className="sd-block">
                  <h2 className="sd-h">Our Approach</h2>
                  {solution.approach.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)} className="sd-body">
                      {p}
                    </p>
                  ))}
                </section>
              </SolutionReveal>

              {solution.integration ? (
                <SolutionReveal delayMs={40}>
                  <IntegrationChain
                    label={solution.integration.label}
                    steps={solution.integration.steps}
                  />
                </SolutionReveal>
              ) : null}

              {solution.digitalContext && digitalCapability ? (
                <SolutionReveal delayMs={40}>
                  <section className="sd-block sd-digital" aria-label="Digital layer">
                    <p className="sd-digital-eyebrow">Cross-cutting</p>
                    <h2 className="sd-h">Digital Layer</h2>
                    <div className="sd-cap-head">
                      <h3 className="sd-cap-title sd-cap-title-digital">
                        <span className="sd-cap-num">{digitalCapability.id}</span>
                        <span className="sd-cap-title-text">{digitalCapability.title}</span>
                      </h3>
                    </div>
                    <p className="sd-body">{solution.digitalContext}</p>
                    <p className="sd-body sd-muted">
                      Not a family-exclusive capability — can integrate across
                      generation, renewables, grid, charging and lifecycle packages.
                    </p>
                  </section>
                </SolutionReveal>
              ) : null}

              {solution.customerTitles?.length ? (
                <SolutionReveal delayMs={40}>
                  <section className="sd-block">
                    <h2 className="sd-h">Built For</h2>
                    <ul className="sd-built-for">
                      {solution.customerTitles.map((title) => (
                        <li key={title}>{title}</li>
                      ))}
                    </ul>
                  </section>
                </SolutionReveal>
              ) : null}

              {solution.frameworkCta ? (
                <SolutionReveal delayMs={40}>
                  <section className="sd-block sd-framework">
                    <h2 className="sd-h">{solution.frameworkCta.heading}</h2>
                    <p className="sd-body">{solution.frameworkCta.body}</p>
                    <Link href={solution.frameworkCta.href} className="sd-text-link">
                      {solution.frameworkCta.label}
                    </Link>
                  </section>
                </SolutionReveal>
              ) : null}

              {solution.why?.length ? (
                <SolutionReveal delayMs={40}>
                  <section className="sd-block">
                    <h2 className="sd-h">Why Companies Choose Us</h2>
                    <BulletList items={solution.why} />
                  </section>
                </SolutionReveal>
              ) : null}

              {solution.results?.length ? (
                <SolutionReveal delayMs={40}>
                  <section className="sd-block">
                    <h2 className="sd-h">Results</h2>
                    <BulletList items={solution.results} />
                  </section>
                </SolutionReveal>
              ) : null}

              {isFamilyPage ? (
                <SolutionReveal delayMs={20}>
                  <p className="sd-portfolio-link-wrap">
                    <Link href="/solutions" className="sd-text-link">
                      View all capabilities →
                    </Link>
                  </p>
                </SolutionReveal>
              ) : null}

              <SolutionNavigation previous={previous} next={next} />
            </div>
          </div>
        </section>

        <SolutionReveal>
          <Link href={solution.finalCta.href} className="sd-final-cta">
            <h2 className="sd-final-cta-title">
              <span className="sd-final-cta-lead">{siteFinalCta.headingLead}</span>
              <span className="sd-final-cta-accent">{siteFinalCta.headingAccent}</span>
            </h2>
            <p className="sd-final-cta-sub">{siteFinalCta.body}</p>
            <span className="sd-final-cta-action">{solution.cta.label}</span>
          </Link>
        </SolutionReveal>
      </article>
    </SolutionPageMotion>
  );
}
