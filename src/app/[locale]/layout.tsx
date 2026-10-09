import "../globals.css";
import "../ditto.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { brand } from "../../data/energex";
import { LOCALES, LOCALE_META, isLocale } from "../../i18n/config";
import { getContent } from "../../i18n/content";
import { languageAlternates } from "../../i18n/metadata";
import { SITE_ORIGIN } from "../../lib/site";
import ScrollMotion from "../components/scroll-motion";
import DittoBehaviors from "../ditto/behaviors";
import SvgSprite from "../svgs/svg-sprite";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getContent(locale);
  const description = t.ui.meta.siteDescription;
  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: {
      default: brand.shortName,
      template: `%s | ${brand.shortName}`,
    },
    description,
    robots: "max-image-preview:large",
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates("/"),
    },
    openGraph: {
      title: t.brand.taglinePrimary,
      description,
      type: "website",
      url: `/${locale}`,
      siteName: brand.name,
      locale: LOCALE_META[locale].ogLocale,
      images: [brand.logoLight],
    },
    twitter: {
      card: "summary_large_image",
      title: t.brand.taglinePrimary,
      description,
      images: [brand.logoLight],
    },
    icons: {
      icon: [{ url: "/assets/energex/favicon.svg", type: "image/svg+xml" }],
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={LOCALE_META[locale].htmlLang}>
      <body className="block text-foreground [font-family:sans-serif] text-xs font-normal not-italic leading-3.5 tracking-[normal] [word-spacing:0px] text-start normal-case whitespace-normal [word-break:normal] [overflow-wrap:normal] indent-0 [text-shadow:none] [font-variant-caps:normal] [font-feature-settings:normal] list-outside [writing-mode:horizontal-tb] [direction:ltr] bg-background" data-cid="n0">
        <SvgSprite />
        {children}
        <DittoBehaviors />
        <ScrollMotion />
      </body>
    </html>
  );
}
