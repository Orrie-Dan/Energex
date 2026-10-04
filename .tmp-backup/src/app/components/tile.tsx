import type { TileStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type TileData = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile({ d, cids, styles }: { d: TileData; cids: string[]; styles: TileStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("hidden 2xl:block 2xl:relative 2xl:shrink-0", styles.className)}>
      <a data-cid={cids[1]} className="hidden 2xl:flex 2xl:relative 2xl:px-1 2xl:flex-col 2xl:justify-start 2xl:items-start 2xl:content-start 2xl:overflow-clip 2xl:text-primary 2xl:cursor-pointer" href={d.href}>
        <div data-cid={cids[2]} className="hidden 2xl:w-1 2xl:h-1 2xl:block 2xl:absolute 2xl:right-0 2xl:z-0 2xl:min-w-0 2xl:shrink-0 2xl:overflow-clip 2xl:bg-accent" />
        <div data-cid={cids[3]} className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0 2xl:whitespace-pre 2xl:text-nowrap", styles.className2)}>
          <p data-cid={cids[4]} className="hidden 2xl:block 2xl:text-color-001 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-sm 2xl:font-semibold 2xl:leading-[1.375rem]" dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </div>
  );
}
