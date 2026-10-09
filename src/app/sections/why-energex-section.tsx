import type { Locale } from "../../i18n/config";
import { getContent } from "../../i18n/content";
import { HomeReveal } from "../components/home-reveal";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/** Four customer-value pillars. Hover and focus use the existing accent rule — no new motion system. */
export default function WhyEnergexSection({ locale }: { locale: Locale }) {
  const { whyEnergex } = getContent(locale);
  return (
    <section
      id="why"
      className="w-full flex flex-col items-center bg-surface"
      aria-labelledby="why-heading"
    >
      <div className="flex w-full max-w-400 flex-col gap-12 px-8 py-28 max-lg:gap-8 max-lg:px-6 max-lg:py-18">
        <div className="flex max-w-150 flex-col gap-4">
          <HomeReveal>
            <p className={`text-color-001 ${FONT} text-sm font-semibold leading-5.5`}>
              {whyEnergex.label}
            </p>
            <h2
              id="why-heading"
              className={`text-color-001 ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9 max-lg:tracking-[-1.44px]`}
            >
              {whyEnergex.headingLead}{" "}
              <span className="text-muted-foreground">{whyEnergex.headingAccent}</span>
            </h2>
          </HomeReveal>
          <HomeReveal delayMs={90}>
            <p className={`max-w-150 text-muted-foreground ${FONT} text-base leading-6.5`}>
              {whyEnergex.supporting}
            </p>
          </HomeReveal>
        </div>
        <HomeReveal as="ol" stagger className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-4">
          {whyEnergex.pillars.map((pillar) => (
            <li key={pillar.title}>
              <article className="group flex h-full flex-col gap-4 border border-color-001/10 bg-background p-6 transition-[border-color] duration-300 ease-[cubic-bezier(0.33,0,0.2,1)] hover:border-accent focus-within:border-accent motion-reduce:transition-none">
                <span className={`text-accent ${FONT} text-sm font-semibold leading-5`}>
                  {pillar.number}
                </span>
                <h3 className={`text-color-001 ${FONT} text-xl font-medium leading-7 tracking-[-0.2px]`}>
                  {pillar.title}
                </h3>
                <p className={`text-muted-foreground ${FONT} text-sm leading-6`}>{pillar.body}</p>
              </article>
            </li>
          ))}
        </HomeReveal>
      </div>
    </section>
  );
}
