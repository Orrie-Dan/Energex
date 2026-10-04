import type { ReactNode } from "react";
import type { MediaCard2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type MediaCard2Data = {
  ariahidden: boolean;
  icon: ReactNode;
  title: string;
  description: string;
};
/** A card with media + heading. */
export default function MediaCard2({ d, cids, styles }: { d: MediaCard2Data; cids: string[]; styles: MediaCard2Styles }) {
  return (
    <li data-cid={cids[0]} className="hidden">
      <div data-cid={cids[1]} className="hidden 2xl:w-[32rem] 2xl:h-full 2xl:block 2xl:relative 2xl:shrink-0 2xl:aspect-[0.773196/1]" aria-hidden={d.ariahidden}>
        <div data-cid={cids[2]} className="hidden 2xl:w-[32rem] 2xl:h-[42.25rem] 2xl:flex 2xl:relative 2xl:p-8 2xl:flex-col 2xl:justify-between 2xl:items-center 2xl:content-center 2xl:overflow-clip after:content-[''] after:block after:absolute after:inset-0 after:w-[32rem] after:h-[42.25rem] max-lg:after:hidden">
          <div data-cid={cids[3]} className={cn("hidden 2xl:w-full 2xl:flex 2xl:relative 2xl:p-8 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:grow 2xl:shrink-0 2xl:basis-0", styles.className)}>
            <svg data-cid={cids[4]} className="hidden 2xl:w-[16.8125rem] 2xl:h-[16.8125rem] 2xl:block 2xl:relative 2xl:shrink-0 2xl:overflow-hidden 2xl:aspect-square" role="presentation" viewBox="0 0 200 200" fill="currentColor">{d.icon}</svg>
          </div>
          <div data-cid={cids[5]} className="hidden 2xl:w-[28rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:gap-4 2xl:overflow-clip">
            <div data-cid={cids[6]} className="hidden 2xl:w-[28rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre-wrap 2xl:[word-break:break-word] 2xl:[overflow-wrap:break-word]">
              <h4 data-cid={cids[7]} className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-2xl 2xl:font-medium 2xl:leading-[1.9375rem] 2xl:tracking-[-0.2px] 2xl:text-balance" dir="auto">
                {d.title}
              </h4>
            </div>
            <div data-cid={cids[8]} className="hidden 2xl:w-[28rem] 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0">
              <p data-cid={cids[9]} className="hidden 2xl:block 2xl:text-color-002 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem] 2xl:text-balance" dir="auto">
                {d.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
