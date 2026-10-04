import type { ReactNode } from "react";
import type { Logo3Styles } from "../_styles";
import { cn } from "../../lib/utils";
export type Logo3Data = {
  href: string;
  icon: ReactNode;
};
/** A logo. */
export default function Logo3({ d, cids, styles }: { d: Logo3Data; cids: string[]; styles: Logo3Styles }) {
  return (
    <a data-cid={cids[0]} className="w-5 flex relative justify-center items-center content-center shrink-0 overflow-clip aspect-square text-primary cursor-pointer 2xl:hidden" data-component="link" href={d.href} target="_blank">
      <div data-cid={cids[1]} className={cn("block relative shrink-0 2xl:hidden", styles.className)} aria-hidden="true">
        <div data-cid={cids[2]} className="h-full block 2xl:hidden">
          <svg data-cid={cids[3]} className={cn("block overflow-hidden 2xl:hidden", styles.className2)} data-component="icon" height="100%" width="100%" preserveAspectRatio="none" fill="currentColor">{d.icon}</svg>
        </div>
      </div>
    </a>
  );
}
