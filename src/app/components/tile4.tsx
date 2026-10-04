import type { Tile4Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile4Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile4({ d, cids, styles }: { d: Tile4Data; cids: string[]; styles: Tile4Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("hidden 2xl:flex 2xl:relative 2xl:flex-col 2xl:justify-start 2xl:shrink-0", styles.className)}>
      <p data-cid={cids[1]} className="hidden 2xl:block 2xl:text-background 2xl:[font-family:Inter,_'Inter_Placeholder',_sans-serif] 2xl:text-base 2xl:leading-[1.625rem] 2xl:[font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11']" dir="auto">
        <a data-cid={cids[2]} className="hidden 2xl:inline 2xl:cursor-pointer" href={d.href}>
          {d.description}
        </a>
      </p>
    </div>
  );
}
