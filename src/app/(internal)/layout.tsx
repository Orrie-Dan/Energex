import "../globals.css";
import "../ditto.css";
import type { ReactNode } from "react";
import { SITE_ORIGIN } from "../../lib/site";
import ScrollMotion from "../components/scroll-motion";
import DittoBehaviors from "../ditto/behaviors";
import SvgSprite from "../svgs/svg-sprite";

/** Root layout for internal, unlocalized tooling routes (not linked, noindex). */
export const metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  robots: { index: false, follow: false },
};

export default function InternalLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="block text-foreground [font-family:sans-serif] text-xs font-normal not-italic leading-3.5 bg-background">
        <SvgSprite />
        {children}
        <DittoBehaviors />
        <ScrollMotion />
      </body>
    </html>
  );
}
