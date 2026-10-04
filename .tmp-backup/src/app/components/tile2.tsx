import type { Tile2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile2Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile2({ d, cids, styles }: { d: Tile2Data; cids: string[]; styles: Tile2Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("block relative shrink-0 max-lg:hidden", styles.className)}>
      <a data-cid={cids[1]} className="flex relative px-1 flex-col justify-start items-start content-start overflow-clip text-primary cursor-pointer max-lg:hidden" data-component="link" href={d.href}>
        <div data-cid={cids[2]} className="w-1 h-1 block absolute right-0 z-0 min-w-0 shrink-0 overflow-clip bg-accent max-lg:hidden" />
        <div data-cid={cids[3]} className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap max-lg:hidden", styles.className2)}>
          <p data-cid={cids[4]} className="block text-color-002 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] max-lg:hidden" dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </div>
  );
}
