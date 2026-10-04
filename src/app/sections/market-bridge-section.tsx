import Link from "next/link";
import { marketBridge } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/** Compact strategic market bridge — not an operating-footprint claim. */
export default function MarketBridgeSection() {
  return (
    <section
      id="market-strategy"
      className="w-full flex relative flex-col justify-start items-center content-center shrink-0 overflow-clip bg-surface"
      aria-labelledby="market-bridge-heading"
    >
      <div className="w-full max-w-400 flex relative py-20 px-8 flex-col justify-start items-start content-start shrink-0 gap-6 max-lg:py-14 max-lg:px-6">
        <p className={`block text-color-001 ${FONT} text-sm font-semibold leading-5.5`}>
          {marketBridge.label}
        </p>
        <h2
          id="market-bridge-heading"
          className={`block max-w-150 text-color-001 ${FONT} text-[2.5rem] font-medium leading-10 tracking-[-1.4px] text-balance max-lg:text-3xl max-lg:leading-9`}
        >
          {marketBridge.headingLead}{" "}
          <span className="inline text-muted-foreground">{marketBridge.headingAccent}</span>
        </h2>
        <p className={`block max-w-125 text-muted-foreground ${FONT} text-base leading-6.5`}>
          {marketBridge.supporting}
        </p>
        <Link
          href={marketBridge.cta.href}
          className={`inline-flex items-center gap-2 text-color-001 ${FONT} text-sm font-semibold underline decoration-accent decoration-2 underline-offset-4 hover:text-accent`}
        >
          {marketBridge.cta.label} →
        </Link>
      </div>
    </section>
  );
}
