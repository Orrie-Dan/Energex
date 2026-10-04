import type { LogoStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type LogoData = {
  height: string;
  imgSrc: string;
  srcSet: string;
  width: string;
};
/** A logo. */
export default function Logo({ d, cids, styles }: { d: LogoData; cids: string[]; styles: LogoStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("w-31 block absolute top-0 left-0 min-w-0 shrink-0", styles.className)}>
      <div data-cid={cids[1]} className="w-31 h-full block absolute top-0 left-0">
        <img data-cid={cids[2]} className={cn("w-full h-[5.3125rem] block overflow-clip object-cover", styles.className2)} data-component="image" alt="" height={d.height} sizes="(min-width: 1200px) max(100vw - 16px, 1px), (min-width: 810px) and (max-width: 1199.98px) max(100vw - 16px, 1px), (max-width: 809.98px) max(100vw - 16px, 1px)" src={d.imgSrc} srcSet={d.srcSet} width={d.width} />
      </div>
    </div>
  );
}
