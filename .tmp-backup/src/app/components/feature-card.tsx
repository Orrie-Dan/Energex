import type { FeatureCardStyles } from "../_styles";
import { cn } from "../../lib/utils";
export type FeatureCardData = {
  href: string;
  title: string;
  description: string;
};
/** A feature card. */
export default function FeatureCard({ d, cids, styles }: { d: FeatureCardData; cids: string[]; styles: FeatureCardStyles }) {
  return (
    <div data-cid={cids[0]} className={cn("block relative shrink-0 max-lg:opacity-0 2xl:hidden", styles.className)}>
      <a data-cid={cids[1]} className="flex relative px-1 flex-col justify-start items-start content-start overflow-clip text-primary cursor-pointer max-lg:[overflow-x:initial] max-lg:[overflow-y:initial] 2xl:hidden" data-component="link" href={d.href}>
        <div data-cid={cids[2]} className="w-1 h-1 block absolute right-0 z-0 min-w-0 shrink-0 overflow-clip bg-accent 2xl:hidden" />
        <div data-cid={cids[3]} className={cn("flex relative flex-col justify-start shrink-0 whitespace-pre text-nowrap 2xl:hidden", styles.className2)}>
          <h2 data-cid={cids[4]} className="hidden max-lg:block max-lg:text-color-002 max-lg:[font-family:Inter,_'Inter_Placeholder',_sans-serif] max-lg:text-4xl max-lg:font-medium max-lg:leading-9 max-lg:tracking-[-1.44px]" dir="auto">
            {d.title}
          </h2>
          <p data-cid={cids[5]} className="block text-color-001 [font-family:Inter,_'Inter_Placeholder',_sans-serif] text-sm font-semibold leading-[1.375rem] max-lg:hidden 2xl:hidden" dir="auto">
            {d.description}
          </p>
        </div>
      </a>
    </div>
  );
}
