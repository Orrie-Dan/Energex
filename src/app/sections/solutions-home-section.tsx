"use client";

import OfferCarousel, { type OfferCarouselText } from "../components/offer-carousel";
import { HomeReveal } from "../components/home-reveal";
import SolutionOfferingCard, { type SolutionOffering } from "./solution-offering-card";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

export type SolutionsHomeText = {
  carouselLabel: string;
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  exploreAll: string;
  explore: string;
  carousel: OfferCarouselText;
};

/**
 * Four solution families plus Power Equipment Supply. Families stay defined in
 * solutionFamilies; the server page passes them already localized.
 */
export default function SolutionsHomeSection({
  offerings,
  allCapabilitiesHref,
  text,
}: {
  offerings: readonly SolutionOffering[];
  allCapabilitiesHref: string;
  text: SolutionsHomeText;
}) {
  return (
    <section
      id="solutions"
      className="w-full overflow-x-clip flex flex-col items-center bg-background"
      aria-labelledby="solutions-heading"
    >
      <div className="flex w-full max-w-400 flex-col px-8 py-28 max-lg:px-6 max-lg:py-18">
        <OfferCarousel
          label={text.carouselLabel}
          text={text.carousel}
          header={(controls) => (
            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <HomeReveal className="flex max-w-175 flex-col gap-4">
                <p className={`text-color-001 ${FONT} text-sm font-semibold leading-5.5`}>{text.eyebrow}</p>
                <h2
                  id="solutions-heading"
                  className={`text-color-001 ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
                >
                  {text.headingLead}
                  <span className="text-muted-foreground">{text.headingAccent}</span>
                </h2>
              </HomeReveal>
              <div className="flex items-center gap-3">
                {controls}
                <HomeReveal delayMs={90}>
                  <a
                    href={allCapabilitiesHref}
                    className={`inline-flex items-center gap-2 text-color-001 ${FONT} text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent`}
                  >
                    {text.exploreAll}
                  </a>
                </HomeReveal>
              </div>
            </div>
          )}
        >
          {offerings.map((offering) => (
            <SolutionOfferingCard key={offering.href} offering={offering} exploreLabel={text.explore} />
          ))}
        </OfferCarousel>
      </div>
    </section>
  );
}
