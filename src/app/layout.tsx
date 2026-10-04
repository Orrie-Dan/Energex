import "./globals.css";
import "./ditto.css";
import type { ReactNode } from "react";
import { brand } from "../data/energex";
import { SITE_ORIGIN } from "../lib/site";
import ScrollMotion from "./components/scroll-motion";
import DittoBehaviors from "./ditto/behaviors";
import SvgSprite from "./svgs/svg-sprite";

const siteDescription =
  "ENERGEX Global Solutions — one partner across integrated energy development, delivery, operations, and digital energy. From concept to power.";

export const metadata = {
  metadataBase: new URL(SITE_ORIGIN || "http://localhost:3000"),
  title: {
    default: brand.shortName,
    template: `%s | ${brand.shortName}`,
  },
  description: siteDescription,
  robots: "max-image-preview:large",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: brand.taglinePrimary,
    description: siteDescription,
    type: "website",
    url: "/",
    siteName: brand.name,
    images: [brand.logoLight],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.taglinePrimary,
    description: siteDescription,
    images: [brand.logoLight],
  },
  icons: {
    icon: [{ url: "/assets/energex/favicon.svg", type: "image/svg+xml" }],
  },
};
export const viewport = {
  "width": "device-width",
  "initialScale": 1
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={"en"}>
      <body className="block text-foreground [font-family:sans-serif] text-xs font-normal not-italic leading-3.5 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        <SvgSprite />
        {children}
        <DittoBehaviors />
        <ScrollMotion />
      </body>
    </html>
  );
}
