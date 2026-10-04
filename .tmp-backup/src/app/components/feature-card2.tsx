import type { FeatureCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCard2Data = {
  title: string;
  title2: string;
  description: string;
  description2: string;
  title3: string;
  title4: string;
  description3: string;
  description4: string;
};
/** A feature card. */
export default function FeatureCard2({ d, cids, styles }: { d: FeatureCard2Data; cids: string[]; styles: FeatureCard2Styles }) {
  return (
    <div data-cid={cids[0]} className="contents min-w-0 2xl:h-[11.3375rem] 2xl:block 2xl:relative 2xl:[align-self:start] 2xl:shrink-0">
      <div data-cid={cids[1]} className="w-76 block relative [align-self:start] shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-96 2xl:flex 2xl:p-8 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:gap-8 2xl:overflow-clip 2xl:[align-self:initial] 2xl:shrink-[initial] after:content-[''] after:block after:absolute after:inset-0 after:w-96 after:h-[11.3375rem] max-lg:after:hidden">
        <div data-cid={cids[2]} className="w-76 h-[11.3375rem] flex relative inset-0 p-8 flex-col justify-start items-start content-start gap-8 overflow-clip transform-[none] max-md:w-[20.4375rem] max-lg:h-[8.6rem] max-lg:p-6 max-lg:gap-6 md:max-lg:w-180 2xl:w-[9.6rem] 2xl:h-[453.5px] 2xl:block 2xl:absolute 2xl:top-[-136.5px] 2xl:left-[14.3375rem] 2xl:z-1 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(1,0,0,1,0,100)] 2xl:right-auto 2xl:bottom-auto 2xl:p-0 2xl:[flex-direction:initial] 2xl:[justify-content:initial] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:gap-[initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] after:content-[''] after:block after:absolute after:inset-0 2xl:after:hidden">
          <div data-cid={cids[3]} className="w-[7.6rem] h-[453.5px] block absolute top-[-136.5px] left-[11.3375rem] z-1 min-w-0 shrink-0 transform-[matrix(1,0,0,1,0,100)] max-md:w-[8.175rem] max-lg:h-69.5 max-lg:-top-[4.4125rem] max-md:left-[12.2rem] md:max-lg:w-72 md:max-lg:left-[26.9375rem] 2xl:w-[9.6rem] 2xl:min-h-[0.3125rem] 2xl:relative 2xl:inset-0 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-4 2xl:transform-[none] 2xl:z-[initial] 2xl:shrink-[initial] 2xl:[mask-image:initial]">
            <div data-cid={cids[4]} className="w-[7.6rem] h-[453.5px] min-h-[0.3125rem] block relative inset-0 min-w-[0.3125rem] overflow-hidden bg-clr-4 max-md:w-[8.175rem] max-lg:h-69.5 md:max-lg:w-72 2xl:w-[15.1rem] 2xl:h-[541.5px] 2xl:absolute 2xl:-top-11 2xl:-left-11 2xl:pointer-events-none 2xl:min-h-0 2xl:right-auto 2xl:bottom-auto 2xl:min-w-0 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] 2xl:bg-[initial]" aria-hidden="true">
              <div data-cid={cids[5]} className="h-[541.5px] block absolute -top-11 -inset-x-11 pointer-events-none max-lg:h-91.5 2xl:hidden" style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--surface-3) 0px, var(--surface-3) 2px, var(--clr-2) 2px, var(--clr-2) 16px)" }} />
            </div>
          </div>
          <div data-cid={cids[6]} className="w-full flex relative justify-start items-center content-center shrink-0 max-lg:order-[1] 2xl:hidden">
            <div data-cid={cids[7]} className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className)}>
              <h1 data-cid={cids[8]} className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] whitespace-pre-wrap text-balance max-lg:text-5xl max-lg:leading-[2.6875rem] max-lg:tracking-[-1.92px] 2xl:hidden" data-component="heading" dir="auto">
                <span data-count-up={d.title}>{d.title}</span>
              </h1>
            </div>
            <div data-cid={cids[9]} className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className2)}>
              <h1 data-cid={cids[10]} className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[4.375rem] font-medium leading-[3.9375rem] tracking-[-2.8px] whitespace-pre-wrap text-balance max-lg:text-5xl max-lg:leading-[2.6875rem] max-lg:tracking-[-1.92px] 2xl:hidden" data-component="heading" dir="auto">
                {d.title2}
              </h1>
            </div>
          </div>
          <div data-cid={cids[11]} className="w-60 block relative shrink-0 max-md:w-[17.4375rem] max-lg:order-[2] md:max-lg:w-168 2xl:hidden">
            <div data-cid={cids[12]} className="flex relative max-w-212.5 pr-2 pl-3 flex-col justify-start items-start content-start overflow-clip 2xl:hidden after:content-[''] after:block after:absolute after:inset-0 after:h-[1.4rem] 2xl:after:hidden">
              <div data-cid={cids[13]} className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className3)}>
                <p data-cid={cids[14]} className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] 2xl:hidden" dir="auto">
                  <span data-cid={cids[15]} className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,-20,0)] 2xl:hidden">
                    {d.description}
                  </span>
                  {" "}
                  <span data-cid={cids[16]} className="inline-block opacity-[0.001] transform-[matrix(1,0,0,1,-20,0)] 2xl:hidden">
                    {d.description2}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div data-cid={cids[17]} className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-0">
          <div data-cid={cids[18]} className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className4)}>
            <h1 data-cid={cids[19]} className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[4.375rem] 2xl:font-medium 2xl:leading-[3.9375rem] 2xl:tracking-[-2.8px] 2xl:whitespace-pre-wrap 2xl:text-balance" dir="auto">
              <span data-count-up={d.title3}>{d.title3}</span>
            </h1>
          </div>
          <div data-cid={cids[20]} className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className5)}>
            <h1 data-cid={cids[21]} className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[4.375rem] 2xl:font-medium 2xl:leading-[3.9375rem] 2xl:tracking-[-2.8px] 2xl:whitespace-pre-wrap 2xl:text-balance" dir="auto">
              {d.title4}
            </h1>
          </div>
        </div>
        <div data-cid={cids[22]} className="hidden 2xl:w-80 2xl:block 2xl:relative 2xl:shrink-0">
          <div data-cid={cids[23]} className="hidden 2xl:flex 2xl:relative 2xl:max-w-212.5 2xl:pr-2 2xl:pl-3 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-80 after:h-[1.4rem] max-lg:after:hidden">
            <div data-cid={cids[24]} className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className6)}>
              <p data-cid={cids[25]} className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" dir="auto">
                <span data-cid={cids[26]} className="hidden 2xl:inline-block">
                  {d.description3}
                </span>
                {" "}
                <span data-cid={cids[27]} className="hidden 2xl:inline-block">
                  {d.description4}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
