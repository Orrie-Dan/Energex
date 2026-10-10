"use client";

import OfferCarousel, { type OfferCarouselText } from "../components/offer-carousel";
import { HomeReveal } from "../components/home-reveal";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

export type IndustrySegmentCard = {
  title: string;
  need: string;
  imgSrc: string;
  /** Locale-prefixed link to the segment on /industries. */
  href: string;
};

export type IndustriesCompactText = {
  carouselLabel: string;
  label: string;
  headingLead: string;
  headingAccent: string;
  details: string;
  carousel: OfferCarouselText;
};

/** Compact segment index. Full need, response, and offerings stay on /industries. */
export default function IndustriesCompactSection({
  segments,
  industriesHref,
  text,
}: {
  segments: readonly IndustrySegmentCard[];
  industriesHref: string;
  text: IndustriesCompactText;
}) {
  return (
    <section
      id="industries"
      className="w-full overflow-x-clip flex flex-col items-center bg-background"
      aria-labelledby="industries-heading"
    >
      <div className="flex w-full max-w-400 flex-col px-8 py-28 max-lg:px-6 max-lg:py-18">
        <OfferCarousel
          label={text.carouselLabel}
          text={text.carousel}
          header={(controls) => (
            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <HomeReveal className="flex max-w-150 flex-col gap-4">
                <p className={`text-color-001 ${FONT} text-sm font-semibold leading-5.5`}>
                  {text.label}
                </p>
                <h2
                  id="industries-heading"
                  className={`text-color-001 ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
                >
                  {text.headingLead}{" "}
                  <span className="text-muted-foreground">{text.headingAccent}</span>
                </h2>
              </HomeReveal>
              <div className="flex items-center gap-3">
                {controls}
                <HomeReveal delayMs={90}>
                  <a
                    href={industriesHref}
                    className={`inline-flex items-center gap-2 text-color-001 ${FONT} text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent`}
                  >
                    {text.details}
                  </a>
                </HomeReveal>
              </div>
            </div>
          )}
        >
          {segments.map((segment) => (
            <a
              key={segment.href}
              href={segment.href}
              className="offer-card group flex h-full w-full flex-col overflow-hidden bg-background text-primary ring-1 ring-color-001/10 outline-none hover:ring-accent focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="relative block aspect-[16/10] overflow-hidden bg-color-001">
                <img
                  src={segment.imgSrc}
                  alt=""
                  draggable={false}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="flex flex-1 flex-col gap-2 p-5">
                <span className={`text-color-001 ${FONT} text-base font-medium leading-6`}>{segment.title}</span>
                <span className={`text-muted-foreground ${FONT} text-sm leading-5 line-clamp-3`}>{segment.need}</span>
              </span>
            </a>
          ))}
        </OfferCarousel>
      </div>
    </section>
  );
}
