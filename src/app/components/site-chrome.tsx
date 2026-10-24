import type { ReactNode } from "react";
import type { Locale } from "../../i18n/config";
import { SiteFooter } from "./shell/site-footer";
import { SiteHeader } from "./shell/site-header";

type SiteChromeProps = {
  locale: Locale;
  children: ReactNode;
  /** `plain` uses a white page background; `cream` a warm off-white. */
  tone?: "cream" | "plain";
  /** The page opens with a dark hero: the header floats over it instead of sitting on a navy band. */
  heroOverlay?: boolean;
};

/** Shared page frame: site header, page content and site footer. */
export function SiteChrome({ locale, children, tone = "cream", heroOverlay = false }: SiteChromeProps) {
  return (
    <div
      className={`nx relative flex min-h-screen flex-col text-base leading-normal ${
        tone === "plain" ? "bg-white" : "bg-[#f6f4f0]"
      }`}
    >
      <SiteHeader locale={locale} variant={heroOverlay ? "overlay" : "solid"} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
