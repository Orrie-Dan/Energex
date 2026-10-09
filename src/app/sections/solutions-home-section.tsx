"use client";

import { equipmentSupplyCard, solutionFamilies } from "../../data/energex";
import OfferCarousel from "../components/offer-carousel";
import { HomeReveal } from "../components/home-reveal";
import SolutionOfferingCard from "./solution-offering-card";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

const offerings = [
  ...solutionFamilies.map((family) => ({
    href: family.href,
    title: family.title,
    description: family.description,
    imgSrc: family.imgSrc,
  })),
  equipmentSupplyCard,
];

/** Four solution families plus Power Equipment Supply. Families stay defined in solutionFamilies. */
export default function SolutionsHomeSection() {
  return (
    <section
      id="solutions"
      className="w-full overflow-x-clip flex flex-col items-center bg-background"
      aria-labelledby="solutions-heading"
    >
      <div className="flex w-full max-w-400 flex-col px-8 py-28 max-lg:px-6 max-lg:py-18">
        <OfferCarousel
          label="Energy solutions and equipment supply"
          header={(controls) => (
            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <HomeReveal className="flex max-w-175 flex-col gap-4">
                <p className={`text-color-001 ${FONT} text-sm font-semibold leading-5.5`}>Energy Solutions</p>
                <h2
                  id="solutions-heading"
                  className={`text-color-001 ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
                >
                  {"What We "}
                  <span className="text-muted-foreground">Deliver</span>
                </h2>
              </HomeReveal>
              <div className="flex items-center gap-3">
                {controls}
                <HomeReveal delayMs={90}>
                  <a
                    href="/solutions"
                    className={`inline-flex items-center gap-2 text-color-001 ${FONT} text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent`}
                  >
                    Explore All Capabilities
                  </a>
                </HomeReveal>
              </div>
            </div>
          )}
        >
          {offerings.map((offering) => (
            <SolutionOfferingCard key={offering.href} offering={offering} />
          ))}
        </OfferCarousel>
      </div>
    </section>
  );
}
