import type { MediaCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCardData = {
  href: string;
  title: string;
  title2: string;
  description: string;
  title3: string;
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
  title4: string;
  height2: string;
  imgSrc2: string;
  srcSet2: string;
  width2: string;
};
/** A card with media + heading. */
export default function MediaCard({ d, cids, styles, index = 0 }: { d: MediaCardData; cids: string[]; styles: MediaCardStyles; index?: number }) {
  return (
    <div data-cid={cids[0]} data-service-card={index} className={cn("w-full h-112.5 flex sticky z-1 flex-col justify-center items-start content-start shrink-0 gap-25 max-md:w-[20.4375rem] max-lg:gap-16 md:max-lg:w-180 md:max-lg:h-[23.65rem] 2xl:w-384 2xl:h-135", styles.className)}>
      <a data-cid={cids[1]} data-service-tilt="" className={cn("group w-full flex relative z-1 justify-start items-center content-center shrink-0 gap-2.5 text-primary cursor-pointer", styles.className2)} data-component="link" href={d.href}>
        <div data-cid={cids[2]} className="contents min-w-0 2xl:w-384 2xl:h-135 2xl:min-h-135 2xl:block 2xl:relative 2xl:z-1 2xl:grow 2xl:shrink-0 2xl:basis-0">
          <div data-cid={cids[3]} className={cn("w-full h-112.5 min-h-100 block relative z-1 grow shrink-0 basis-0 max-md:w-[20.4375rem] max-lg:min-h-0 md:max-lg:w-180 md:max-lg:h-[23.65rem] 2xl:w-384 2xl:flex 2xl:p-2 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:overflow-clip 2xl:bg-surface 2xl:min-h-0 2xl:z-[initial] 2xl:grow-[initial] 2xl:shrink-[initial] 2xl:basis-[initial] after:content-[''] after:block after:absolute after:inset-0 after:w-full after:h-112.5 max-lg:after:hidden 2xl:after:w-384", styles.className3)}>
            <div data-cid={cids[4]} className={cn("w-full h-full flex relative p-2 justify-center items-center content-center overflow-clip bg-surface max-lg:flex-col max-lg:justify-start max-lg:items-start max-lg:content-start 2xl:w-1/2 2xl:z-1 2xl:p-6 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] 2xl:bg-[initial] after:content-[''] after:block after:absolute after:inset-0 after:w-full after:h-112.5 max-md:after:w-[20.4375rem] md:max-lg:after:w-180 md:max-lg:after:h-[23.65rem] 2xl:after:hidden", styles.className4)}>
              <div data-cid={cids[5]} className={cn("w-1/2 h-108.5 flex relative z-1 p-6 flex-col justify-start items-start content-start grow shrink-0 basis-0 max-md:w-[92%] max-lg:p-4 max-lg:gap-4 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:w-[92.5%] md:max-lg:h-[6.4rem] 2xl:h-[2.4rem] 2xl:whitespace-pre 2xl:text-nowrap 2xl:z-[initial] 2xl:p-0 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:grow-[initial] 2xl:basis-[initial]", styles.className5)}>
                <h3 data-cid={cids[6]} className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-[2rem] 2xl:font-medium 2xl:leading-[2.375rem] 2xl:tracking-[-0.3px] 2xl:whitespace-pre-wrap 2xl:text-balance" dir="auto">
                  {d.title}
                </h3>
                <div data-cid={cids[7]} className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className6)}>
                  <h3 data-cid={cids[8]} className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-[2rem] font-medium leading-[2.375rem] tracking-[-0.3px] whitespace-pre-wrap text-balance max-lg:text-2xl max-lg:leading-[1.8125rem] 2xl:hidden" data-component="heading" dir="auto">
                    {d.title2}
                  </h3>
                </div>
                <div data-cid={cids[9]} className={cn("w-full h-[21.725rem] flex relative justify-between items-end content-end grow shrink-0 basis-0 max-lg:justify-start max-lg:items-start max-lg:content-start max-lg:gap-6 max-lg:grow-[initial] max-lg:basis-[initial] md:max-lg:h-[1.6rem] 2xl:hidden", styles.className7)}>
                  <div data-cid={cids[10]} className="service-arrow flex relative pb-2 justify-center items-center content-center shrink-0 text-color-001 max-lg:hidden 2xl:hidden">
                    <div data-cid={cids[11]} className="service-arrow-glyph basis-full shrink-0 h-10 w-10 flex relative justify-center items-center content-center max-lg:hidden 2xl:hidden">
                      <div data-cid={cids[12]} className="service-arrow-slash w-[0.6875rem] h-px block absolute top-1 left-7.5 min-w-0 shrink-0 origin-[5.5px_0.5px] max-lg:hidden 2xl:hidden" aria-hidden="true">
                        <div data-cid={cids[13]} className="h-full block max-lg:hidden 2xl:hidden">
                          <svg data-cid={cids[14]} className="w-[0.6875rem] h-px block overflow-hidden max-lg:hidden 2xl:hidden" data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                            <use href="#svg-62705727_246" />
                          </svg>
                        </div>
                      </div>
                      <div data-cid={cids[15]} className="service-arrow-box w-10 h-10 block relative shrink-0 max-lg:hidden 2xl:hidden" aria-hidden="true">
                        <div data-cid={cids[16]} className="h-full block max-lg:hidden 2xl:hidden">
                          <svg data-cid={cids[17]} className="w-10 h-10 block overflow-hidden max-lg:hidden 2xl:hidden" data-component="image" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                            <use href="#svg-170617100_279" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-cid={cids[18]} className="w-[22.425rem] flex relative flex-col justify-start shrink-0 max-md:w-[17.4375rem] max-lg:flex-1 md:max-lg:w-168 2xl:hidden">
                    <p data-cid={cids[19]} className="hidden max-lg:block max-lg:text-color-001 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-base max-lg:leading-[1.625rem] max-lg:text-balance max-lg:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
                      {d.description}
                    </p>
                    <h6 data-cid={cids[20]} className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-lg leading-[1.6875rem] tracking-[-0.2px] text-balance max-lg:hidden 2xl:hidden" data-component="heading" dir="auto">
                      {d.title3}
                    </h6>
                  </div>
                </div>
              </div>
              <div data-cid={cids[21]} className="w-1/2 h-108.5 flex relative z-1 justify-center items-center content-center shrink-0 gap-2.5 overflow-clip max-lg:w-[99.5%] max-lg:h-65 2xl:w-[99.5%] 2xl:h-[21.725rem] 2xl:justify-between 2xl:items-end 2xl:content-end 2xl:flex-1 2xl:z-[initial] 2xl:gap-[initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial]">
                <div data-cid={cids[22]} className="service-arrow w-full h-full block relative z-1 grow shrink-0 basis-0 text-color-001 2xl:w-[7%] 2xl:h-auto 2xl:flex 2xl:pb-2 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:z-[initial] 2xl:grow-[initial] 2xl:basis-[initial]">
                  <div data-cid={cids[23]} className="w-full h-full block absolute inset-0 max-md:w-[19.4375rem] max-lg:h-65 max-lg:w-full md:max-lg:w-full 2xl:w-10 2xl:h-10 2xl:flex 2xl:relative 2xl:inset-auto 2xl:right-0 2xl:bottom-0 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5">
                    <div className="service-arrow-glyph hidden 2xl:flex 2xl:relative 2xl:w-10 2xl:h-10 2xl:justify-center 2xl:items-center 2xl:shrink-0">
                      <div data-cid={cids[24]} className="service-arrow-slash hidden 2xl:w-[0.6875rem] 2xl:h-px 2xl:block 2xl:absolute 2xl:top-1 2xl:left-7.5 2xl:min-w-0 2xl:shrink-0 2xl:origin-[5.5px_0.5px]" aria-hidden="true">
                        <div data-cid={cids[25]} className="hidden 2xl:h-full 2xl:block">
                          <svg data-cid={cids[26]} className="hidden 2xl:w-[0.6875rem] 2xl:h-px 2xl:block 2xl:overflow-hidden" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                            <use href="#svg-62705727_246" />
                          </svg>
                        </div>
                      </div>
                      <div data-cid={cids[27]} className="service-arrow-box hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:relative 2xl:shrink-0" aria-hidden="true">
                        <div data-cid={cids[28]} className="hidden 2xl:h-full 2xl:block">
                          <svg data-cid={cids[29]} className="hidden 2xl:w-10 2xl:h-10 2xl:block 2xl:overflow-hidden" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">
                            <use href="#svg-170617100_279" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <img data-cid={cids[30]} className={cn("w-full h-full block overflow-clip object-cover max-lg:h-65 2xl:hidden", styles.className8)} data-component="image" alt="" height={d.height} sizes="max((max(min(100vw, 1600px) - 64px, 1px) - 16px) / 2, 1px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
                  </div>
                </div>
                <div data-cid={cids[31]} className="hidden 2xl:w-[28.925rem] 2xl:h-13.5 2xl:flex 2xl:relative 2xl:right-0 2xl:bottom-0 2xl:flex-col 2xl:justify-start 2xl:pointer-events-auto">
                  <h6 data-cid={cids[32]} className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-lg 2xl:leading-[1.6875rem] 2xl:tracking-[-0.2px] 2xl:text-balance" dir="auto">
                    {d.title4}
                  </h6>
                </div>
              </div>
            </div>
            <div data-cid={cids[35]} className="hidden 2xl:w-190 2xl:h-full 2xl:flex 2xl:relative 2xl:z-1 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-2.5 2xl:overflow-clip">
              <div data-cid={cids[36]} className="hidden 2xl:basis-0 2xl:shrink-0 2xl:h-full 2xl:block 2xl:relative 2xl:z-1 2xl:grow">
                <div data-cid={cids[37]} className={cn("hidden 2xl:w-190 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0", styles.className10)}>
                  <img data-cid={cids[38]} className={cn("hidden 2xl:w-full 2xl:h-108.5 2xl:block 2xl:overflow-clip 2xl:object-cover", styles.className11)} alt="" height={d.height2} sizes="max((max(min(100vw, 1600px) - 64px, 1px) - 16px) / 2, 1px)" src={d.imgSrc2} srcSet={d.srcSet2} width={d.width2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
