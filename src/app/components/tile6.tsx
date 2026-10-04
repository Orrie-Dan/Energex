import type { Tile6Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Tile6Data = {
  href: string;
  description: string;
};
/** A content tile. */
export default function Tile6({ d, cids, styles }: { d: Tile6Data; cids: string[]; styles: Tile6Styles }) {
  return (
    <div data-cid={cids[0]} className={cn("flex relative flex-col justify-start shrink-0 2xl:hidden", styles.className)}>
      <p data-cid={cids[1]} className="block text-background [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-base leading-[1.625rem] [font-feature-settings:'blwf',_'cv03',_'cv04',_'cv09',_'cv11'] 2xl:hidden" dir="auto">
        <a data-cid={cids[2]} className={cn("inline cursor-pointer 2xl:hidden", styles.className2)} data-component="link" href={d.href}>
          {d.description}
        </a>
      </p>
    </div>
  );
}
