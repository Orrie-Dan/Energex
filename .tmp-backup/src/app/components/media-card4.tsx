import type { MediaCard4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCard4Data = {
  title: string;
  description: string;
  title2: string;
  description2: string;
};
/** A card with media + heading. */
export default function MediaCard4({ d, cids, styles }: { d: MediaCard4Data; cids: string[]; styles: MediaCard4Styles }) {
  return (
    <div data-cid={cids[0]} className="contents min-w-0 2xl:w-271.5 2xl:h-[5.8125rem] 2xl:block 2xl:relative 2xl:shrink-0">
      <div data-cid={cids[1]} className="w-191.5 block relative shrink-0 max-md:w-[20.4375rem] md:max-lg:w-180 2xl:w-271.5 2xl:flex 2xl:p-8 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:overflow-clip 2xl:bg-clr-6 2xl:cursor-pointer 2xl:shrink-[initial]">
        <div data-cid={cids[2]} className={cn("w-191.5 h-[5.8125rem] flex relative inset-0 p-8 flex-col justify-start items-start content-start overflow-clip bg-clr-6 cursor-pointer max-md:w-[20.4375rem] max-lg:p-4 md:max-lg:w-180 md:max-lg:h-[3.8125rem] 2xl:w-[162.9px] 2xl:h-px 2xl:block 2xl:absolute 2xl:z-1 2xl:min-w-0 2xl:shrink-0 2xl:right-auto 2xl:bottom-auto 2xl:p-0 2xl:[flex-direction:initial] 2xl:[justify-content:initial] 2xl:[align-items:initial] 2xl:[align-content:initial] 2xl:[overflow-x:initial] 2xl:[overflow-y:initial] 2xl:bg-[initial] 2xl:[cursor:inherit]", styles.className)}>
          <div data-cid={cids[3]} className="w-[114.9px] h-px block absolute top-0 left-0 z-1 min-w-0 shrink-0 max-md:w-[3.0625rem] md:max-lg:w-27 2xl:w-[162.9px] 2xl:flex 2xl:relative 2xl:right-0 2xl:bottom-0 2xl:justify-between 2xl:items-center 2xl:content-center 2xl:z-[initial] 2xl:shrink-[initial]" data-name="Line">
            <div data-cid={cids[4]} className="w-full h-px flex relative justify-between items-center content-center 2xl:w-[10%] 2xl:justify-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" data-name="Line">
              <div data-cid={cids[5]} className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" />
              <div data-cid={cids[6]} className="w-[72%] h-full flex relative justify-center items-center content-center grow shrink-0 basis-0 overflow-clip bg-surface max-md:w-[35%] md:max-lg:w-[70.5%] 2xl:hidden" />
              <div data-cid={cids[7]} className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" />
            </div>
            <div data-cid={cids[8]} className="hidden 2xl:w-[130.9px] 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip 2xl:bg-surface" />
            <div data-cid={cids[9]} className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" />
          </div>
          <div data-cid={cids[10]} className="w-px h-full block absolute top-0 left-0 z-1 min-w-0 shrink-0 2xl:hidden" data-name="Line">
            <div data-cid={cids[11]} className="w-px h-full flex relative flex-col justify-start items-center content-center 2xl:hidden" data-name="Line">
              <div data-cid={cids[12]} className="w-px h-4 flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" />
              <div data-cid={cids[13]} className={cn("w-px h-[3.8125rem] flex relative justify-center items-center content-center grow shrink-0 basis-0 overflow-clip bg-surface md:max-lg:h-[1.8125rem] 2xl:hidden", styles.className2)} />
              <div data-cid={cids[14]} className="w-px h-4 flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" />
            </div>
          </div>
          <div data-cid={cids[15]} className={cn("w-px h-full block absolute top-0 right-0 z-1 min-w-0 shrink-0 transform-[matrix(-1,0,0,-1,0,0)] origin-[0.5px_46.5px] md:max-lg:origin-[0.5px_30.5px] 2xl:hidden", styles.className3)} data-name="Line">
            <div data-cid={cids[16]} className="w-px h-full flex relative flex-col justify-start items-center content-center 2xl:hidden" data-name="Line">
              <div data-cid={cids[17]} className="w-px h-4 flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" />
              <div data-cid={cids[18]} className={cn("w-px h-[3.8125rem] flex relative justify-center items-center content-center grow shrink-0 basis-0 overflow-clip bg-surface md:max-lg:h-[1.8125rem] 2xl:hidden", styles.className4)} />
              <div data-cid={cids[19]} className="w-px h-4 flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" />
            </div>
          </div>
          <div data-cid={cids[20]} className="w-[114.9px] h-px block absolute right-0 bottom-0 z-1 min-w-0 shrink-0 transform-[matrix(-1,0,0,-1,0,0)] origin-[57.4453px_0.5px] max-md:w-[3.0625rem] max-md:origin-[24.5234px_0.5px] md:max-lg:w-27 md:max-lg:origin-[54px_0.5px] 2xl:hidden" data-name="Line">
            <div data-cid={cids[21]} className="flex relative justify-between items-center content-center 2xl:hidden" data-name="Line">
              <div data-cid={cids[22]} className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" />
              <div data-cid={cids[23]} className="w-[72%] h-full flex relative justify-center items-center content-center grow shrink-0 basis-0 overflow-clip bg-surface max-md:w-[35%] md:max-lg:w-[70.5%] 2xl:hidden" />
              <div data-cid={cids[24]} className="w-4 h-full flex relative justify-center items-center content-center shrink-0 overflow-clip bg-color-002 2xl:hidden" />
            </div>
          </div>
          <div data-cid={cids[25]} className="w-full h-full flex relative justify-start items-center content-center shrink-0 2xl:hidden">
            <div data-cid={cids[26]} className="w-169.5 h-full flex relative flex-col justify-start grow shrink-0 basis-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] max-md:w-[16.9375rem] md:max-lg:w-166 2xl:hidden">
              <h5 data-cid={cids[27]} className="h-full block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-xl font-semibold leading-7 tracking-[-0.2px] text-balance 2xl:hidden" data-component="heading" dir="auto">
                {d.title}
              </h5>
            </div>
            <svg data-cid={cids[28]} className="w-auto h-6 block relative shrink-0 overflow-hidden aspect-square 2xl:hidden" data-component="icon" role="presentation" viewBox="0 0 24 24" fill="currentColor">
              <use href="#465907804" />
            </svg>
          </div>
          <div data-cid={cids[29]} className="w-175.5 h-px flex relative flex-col justify-start items-start content-start shrink-0 overflow-clip max-md:w-[18.4375rem] md:max-lg:w-172 2xl:hidden">
            <div data-cid={cids[30]} className="w-175.5 flex relative flex-col justify-start shrink-0 max-md:w-[18.4375rem] md:max-lg:w-172 2xl:hidden">
              <p data-cid={cids[31]} className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] text-balance [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" dir="auto">
                {d.description}
              </p>
            </div>
          </div>
        </div>
        <div data-cid={cids[32]} className="hidden 2xl:w-px 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:left-0 2xl:z-1 2xl:min-w-0 2xl:shrink-0" data-name="Line">
          <div data-cid={cids[33]} className="hidden 2xl:w-px 2xl:h-[5.8125rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center" data-name="Line">
            <div data-cid={cids[34]} className="hidden 2xl:w-px 2xl:h-4 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" />
            <div data-cid={cids[35]} className="hidden 2xl:w-px 2xl:h-[3.8125rem] 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip 2xl:bg-surface" />
            <div data-cid={cids[36]} className="hidden 2xl:w-px 2xl:h-4 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" />
          </div>
        </div>
        <div data-cid={cids[37]} className="hidden 2xl:w-px 2xl:h-full 2xl:block 2xl:absolute 2xl:top-0 2xl:right-0 2xl:z-1 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(-1,0,0,-1,0,0)] 2xl:origin-[0.5px_46.5px]" data-name="Line">
          <div data-cid={cids[38]} className="hidden 2xl:w-px 2xl:h-[5.8125rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-center 2xl:content-center" data-name="Line">
            <div data-cid={cids[39]} className="hidden 2xl:w-px 2xl:h-4 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" />
            <div data-cid={cids[40]} className="hidden 2xl:w-px 2xl:h-[3.8125rem] 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip 2xl:bg-surface" />
            <div data-cid={cids[41]} className="hidden 2xl:w-px 2xl:h-4 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" />
          </div>
        </div>
        <div data-cid={cids[42]} className="hidden 2xl:w-[162.9px] 2xl:h-px 2xl:block 2xl:absolute 2xl:right-0 2xl:bottom-0 2xl:z-1 2xl:min-w-0 2xl:shrink-0 2xl:transform-[matrix(-1,0,0,-1,0,0)] 2xl:origin-[81.4453px_0.5px]" data-name="Line">
          <div data-cid={cids[43]} className="hidden 2xl:w-[162.9px] 2xl:flex 2xl:relative 2xl:justify-between 2xl:items-center 2xl:content-center" data-name="Line">
            <div data-cid={cids[44]} className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" />
            <div data-cid={cids[45]} className="hidden 2xl:w-[130.9px] 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:overflow-clip 2xl:bg-surface" />
            <div data-cid={cids[46]} className="hidden 2xl:w-4 2xl:h-full 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:bg-color-002" />
          </div>
        </div>
        <div data-cid={cids[47]} className="hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:justify-start 2xl:items-center 2xl:content-center 2xl:shrink-0">
          <div data-cid={cids[48]} className="hidden 2xl:w-249.5 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:grow 2xl:shrink-0 2xl:basis-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
            <h5 data-cid={cids[49]} className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-xl 2xl:font-semibold 2xl:leading-7 2xl:tracking-[-0.2px] 2xl:text-balance" dir="auto">
              {d.title2}
            </h5>
          </div>
          <svg data-cid={cids[50]} className="hidden 2xl:w-6 2xl:h-6 2xl:block 2xl:relative 2xl:shrink-0 2xl:overflow-hidden 2xl:aspect-square" role="presentation" viewBox="0 0 24 24" fill="currentColor">
            <use href="#465907804" />
          </svg>
        </div>
        <div data-cid={cids[51]} className="hidden 2xl:w-255.5 2xl:h-px 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:shrink-0 2xl:overflow-clip">
          <div data-cid={cids[52]} className="hidden 2xl:w-255.5 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0">
            <p data-cid={cids[53]} className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:text-balance 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
              {d.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
