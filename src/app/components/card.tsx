import type { CardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type CardData = {
  href: string;
  description: string;
  description2: string;
  imgSrc: string;
  srcSet: string;
  href2: string;
  description3: string;
  description4: string;
  imgSrc2: string;
  srcSet2: string;
};
/** A card. */
export default function Card({ d, cids, styles }: { d: CardData; cids: string[]; styles: CardStyles }) {
  return (
    <div data-cid={cids[0]} className="w-full flex relative flex-col justify-start items-start content-start [align-self:start] shrink-0">
      <div data-cid={cids[1]} className="contents min-w-0 2xl:w-191.5 2xl:h-62.5 2xl:block 2xl:relative 2xl:shrink-0">
        <a data-cid={cids[2]} className="hidden 2xl:w-191.5 2xl:h-62.5 2xl:flex 2xl:relative 2xl:p-1 2xl:justify-between 2xl:items-end 2xl:content-end 2xl:overflow-clip 2xl:text-primary 2xl:cursor-pointer after:content-[''] after:block after:absolute after:inset-0 after:w-191.5 after:h-62.5 max-lg:after:hidden" href={d.href}>
          <div data-cid={cids[3]} className="hidden 2xl:w-191.5 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:z-0 2xl:min-w-0 2xl:shrink-0">
            <div data-cid={cids[4]} className="hidden 2xl:w-191.5 2xl:h-62.5 2xl:min-h-[0.3125rem] 2xl:block 2xl:relative 2xl:min-w-[0.3125rem] 2xl:overflow-hidden 2xl:bg-clr-7" aria-hidden="true">
              <div data-cid={cids[5]} className="hidden 2xl:w-208 2xl:h-79 2xl:block 2xl:absolute 2xl:-top-[2.0625rem] 2xl:-left-[2.0625rem] 2xl:pointer-events-none" />
            </div>
          </div>
          <div data-cid={cids[6]} className="hidden 2xl:w-[23.6875rem] 2xl:h-full 2xl:flex 2xl:relative 2xl:p-4 2xl:flex-col 2xl:justify-between 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:overflow-clip">
            <div data-cid={cids[7]} className="hidden 2xl:w-[21.6875rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <p data-cid={cids[8]} className="hidden 2xl:block 2xl:text-muted-foreground 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-left" dir="auto">
                {d.description}
              </p>
            </div>
            <div data-cid={cids[9]} className="hidden 2xl:w-[21.6875rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0">
              <p data-cid={cids[10]} className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:font-semibold 2xl:leading-[1.625rem] 2xl:text-left 2xl:text-balance 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                {d.description2}
              </p>
            </div>
          </div>
          <div data-cid={cids[11]} className="hidden 2xl:h-[7.5625rem] 2xl:flex 2xl:relative 2xl:z-0 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip 2xl:aspect-[1.272/1]">
            <div data-cid={cids[12]} className="hidden 2xl:basis-0 2xl:shrink-0 2xl:h-full 2xl:block 2xl:relative 2xl:grow">
              <div data-cid={cids[13]} className="hidden 2xl:w-[9.625rem] 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0">
                <img data-cid={cids[14]} className="hidden 2xl:w-full 2xl:h-[7.5625rem] 2xl:block 2xl:overflow-clip 2xl:object-cover 2xl:aspect-[auto_1232/928]" alt="" height="928" sizes="max(121 * 1.272, 1px)" src={d.imgSrc} srcSet={d.srcSet} width="1232" />
              </div>
            </div>
          </div>
        </a>
        <div data-cid={cids[15]} className="w-full block relative shrink-0 2xl:hidden">
          <a data-cid={cids[16]} className={cn("h-62.5 flex relative p-1 justify-between items-end content-end overflow-clip text-primary cursor-pointer max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:[cursor:inherit] md:max-lg:h-[35.125rem] 2xl:hidden after:content-[''] after:block after:absolute after:inset-0 2xl:after:hidden", styles.className)} data-component="link" href={d.href2}>
            <div data-cid={cids[17]} className={cn("w-151.5 h-full block absolute top-0 left-0 z-0 min-w-0 shrink-0 max-md:w-[20.4375rem] max-lg:z-1 md:max-lg:w-180 2xl:hidden focus:[mask-image:linear-gradient(135deg,_var(--foreground)_0%,_var(--clr-2)_22.973%)] focus:[-webkit-mask-image:linear-gradient(135deg,_var(--foreground)_0%,_var(--clr-2)_22.973%)]", styles.className2)} style={{ maskImage: "linear-gradient(135deg, var(--foreground) 0%, var(--clr-2) 22.973%)" }}>
              <div data-cid={cids[18]} className="h-full min-h-[0.3125rem] block relative min-w-[0.3125rem] overflow-hidden bg-clr-7 2xl:hidden" aria-hidden="true">
                <div data-cid={cids[19]} className={cn("h-79 block absolute -top-[2.0625rem] -inset-x-[2.0625rem] pointer-events-none md:max-lg:h-[39.25rem] 2xl:hidden", styles.className3)} style={{ backgroundImage: "repeating-linear-gradient(-45deg, var(--background) 0px, var(--background) 1px, var(--clr-2) 1px, var(--clr-2) 12px)" }} />
              </div>
            </div>
            <div data-cid={cids[20]} className={cn("w-[18.6875rem] h-60.5 flex relative p-4 flex-col justify-between items-start content-start shrink-0 overflow-clip max-md:w-[19.9375rem] max-lg:justify-center max-lg:order-[2] max-lg:gap-2 md:max-lg:w-178 md:max-lg:h-22 2xl:hidden", styles.className4)}>
              <div data-cid={cids[21]} className="w-[16.6875rem] flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[17.9375rem] md:max-lg:w-170 2xl:hidden">
                <p data-cid={cids[22]} className="block text-muted-foreground [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-left 2xl:hidden" dir="auto">
                  {d.description3}
                </p>
              </div>
              <div data-cid={cids[23]} className="w-[16.6875rem] flex relative flex-col justify-start shrink-0 max-md:w-[17.9375rem] md:max-lg:w-170 2xl:hidden">
                <p data-cid={cids[24]} className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base font-semibold leading-[1.625rem] text-left text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" dir="auto">
                  {d.description4}
                </p>
              </div>
            </div>
            <div data-cid={cids[25]} className="w-[25.5%] h-[7.5625rem] flex relative z-0 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip aspect-[1.272/1] max-lg:w-full max-md:h-[13.05rem] max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:order-[1] max-lg:aspect-[1.528/1] max-lg:gap-[initial] md:max-lg:h-[29.125rem] 2xl:hidden">
              <div data-cid={cids[26]} className="w-full h-full block relative grow shrink-0 basis-0 2xl:hidden">
                <div data-cid={cids[27]} className="h-full block absolute top-0 inset-x-0 2xl:hidden">
                  <img data-cid={cids[28]} className="w-full h-[7.5625rem] block overflow-clip object-cover aspect-[auto_1232/928] max-md:h-[13.0625rem] md:max-lg:h-116.5 2xl:hidden" data-component="image" alt="" height="928" sizes="max(121 * 1.272, 1px)" src={d.imgSrc2} srcSet={d.srcSet2} width="1232" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
