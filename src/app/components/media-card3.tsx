import type { ReactNode } from "react";
import type { MediaCard3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCard3Data = {
  ariahidden: boolean;
  kind?: string;
  icon: ReactNode;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard3({ d, cids, styles }: { d: MediaCard3Data; cids: string[]; styles: MediaCard3Styles }) {
  return (
    <li data-cid={cids[0]} className="contents min-w-0 2xl:hidden">
      <div data-cid={cids[1]} className={cn("w-[405.3px] h-full block relative shrink-0 aspect-[0.773196/1] max-md:w-[20.4375rem] md:max-lg:w-180 2xl:hidden", styles.className)} aria-hidden={d.ariahidden}>
        <div data-cid={cids[2]} className={cn("flex relative p-8 flex-col justify-between items-center content-center overflow-clip 2xl:hidden after:content-[''] after:block after:absolute after:inset-0 2xl:after:hidden", styles.className2)}>
          <div data-cid={cids[3]} className={cn("w-full h-[23.7rem] flex relative p-8 justify-center items-center content-center grow shrink-0 basis-0 2xl:hidden", styles.className3)}>
            <svg data-cid={cids[4]} className={cn("h-48.5 block relative shrink-0 overflow-hidden aspect-square max-md:h-[8.6875rem] md:max-lg:h-103.5 2xl:hidden", styles.className4)} data-component={d.kind} role="presentation" viewBox="0 0 200 200" fill="currentColor">{d.icon}</svg>
          </div>
          <div data-cid={cids[5]} className={cn("w-[341.3px] flex relative flex-col justify-center items-center content-center shrink-0 gap-4 overflow-clip 2xl:hidden", styles.className5)}>
            <div data-cid={cids[6]} className={cn("w-[341.3px] flex relative flex-col justify-start shrink-0 whitespace-pre-wrap [word-break:break-word] [overflow-wrap:break-word] 2xl:hidden", styles.className6)}>
              <h4 data-cid={cids[7]} className={cn("block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-2xl font-medium leading-[1.9375rem] tracking-[-0.2px] text-balance 2xl:hidden", styles.className7)} data-component="heading" dir="auto">
                {d.title}
              </h4>
            </div>
            <div data-cid={cids[8]} className={cn("w-[341.3px] flex relative flex-col justify-start shrink-0 2xl:hidden", styles.className8)}>
              <p data-cid={cids[9]} className={cn("block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] text-balance 2xl:hidden", styles.className9)} dir="auto">
                {d.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
