import type { Locale } from "../../i18n/config";
import { getContent } from "../../i18n/content";
import { HomeReveal } from "../components/home-reveal";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/**
 * Capability strengths, plus an evidence list that renders only once
 * approvedEvidence has records cleared for publication.
 */
export default function CapabilitiesEvidenceSection({ locale }: { locale: Locale }) {
  const { approvedEvidence, capabilityStrengths, evidenceSection, ui } = getContent(locale);
  const hasEvidence = approvedEvidence.length > 0;

  return (
    <section
      id="evidence"
      className="w-full flex flex-col items-center bg-surface"
      aria-labelledby="evidence-heading"
    >
      <div className="flex w-full max-w-400 flex-col gap-12 px-8 py-28 max-lg:gap-8 max-lg:px-6 max-lg:py-18">
        <div className="flex max-w-175 flex-col gap-4">
          <HomeReveal>
            <p className={`text-color-001 ${FONT} text-sm font-semibold leading-5.5`}>
              {evidenceSection.label}
            </p>
            <h2
              id="evidence-heading"
              className={`text-color-001 ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
            >
              {evidenceSection.headingLead}{" "}
              <span className="text-muted-foreground">{evidenceSection.headingAccent}</span>
            </h2>
          </HomeReveal>
        </div>

        {hasEvidence ? (
          <HomeReveal delayMs={140} className="flex flex-col gap-4 border border-color-001/10 bg-background p-6 md:p-8">
            <h3 className={`text-color-001 ${FONT} text-lg font-medium leading-6`}>
              {ui.home.evidenceApproved}
            </h3>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {approvedEvidence.map((item) => (
                <li key={item.id} className="border-t border-color-001/10 pt-4 first:border-t-0 first:pt-0">
                  <p className={`text-accent ${FONT} text-xs font-semibold uppercase tracking-wide`}>
                    {item.kind}
                  </p>
                  <p className={`mt-1 text-color-001 ${FONT} text-base font-medium`}>{item.title}</p>
                  <p className={`mt-1 text-muted-foreground ${FONT} text-sm leading-6`}>{item.summary}</p>
                </li>
              ))}
            </ul>
          </HomeReveal>
        ) : null}

        <HomeReveal as="ul" stagger className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2">
          {capabilityStrengths.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                className="flex h-full flex-col gap-2 border border-color-001/10 bg-background p-6 outline-none hover:border-accent focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className={`text-color-001 ${FONT} text-base font-medium leading-6`}>
                  {item.title}
                </span>
                <span className={`text-muted-foreground ${FONT} text-sm leading-6`}>{item.body}</span>
              </a>
            </li>
          ))}
        </HomeReveal>
      </div>
    </section>
  );
}
