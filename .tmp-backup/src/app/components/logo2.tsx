import type { ReactNode } from "react";
import type { Logo2Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo2Data = {
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo2({ d, cids, styles }: { d: Logo2Data; cids: string[]; styles: Logo2Styles }) {
  return (
    <a data-cid={cids[0]} className="hidden 2xl:w-5 2xl:flex 2xl:relative 2xl:justify-center 2xl:items-center 2xl:content-center 2xl:shrink-0 2xl:overflow-clip 2xl:aspect-square 2xl:text-primary 2xl:cursor-pointer" href={d.href} target="_blank">
      <div data-cid={cids[1]} className={cn("hidden 2xl:block 2xl:relative 2xl:shrink-0", styles.className)} aria-hidden="true">
        <div data-cid={cids[2]} className="hidden 2xl:h-full 2xl:block">
          <svg data-cid={cids[3]} className={cn("hidden 2xl:block 2xl:overflow-hidden", styles.className2)} height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
        </div>
      </div>
    </a>
  );
}
