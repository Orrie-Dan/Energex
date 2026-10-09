import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import { formatText, isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/terms", { ...getContent(locale).ui.meta.terms, noindex: true });
}

/** Temporary placeholder. Legal text is not final in any language. */
export default async function TermsPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { brand, ui } = getContent(locale);
  const t = ui.legal;
  const address = brand.addressLines.join(", ");
  return (
    <SiteChrome locale={locale}>
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="rounded-md border border-amber-500/40 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong className="font-semibold">{t.placeholderTitle}</strong> — {t.termsBanner}
        </p>
        <h1 className="mt-8 text-3xl font-semibold text-[#011836]">{t.termsHeading}</h1>
        <p className="mt-4 text-[#011836]/80">{formatText(t.termsBody, { name: brand.name })}</p>
        <p className="mt-4 text-sm text-[#011836]/70">{t.termsScope}</p>
        <p className="mt-6 text-sm text-[#011836]/60">
          {formatText(t.termsRegistration, { name: brand.name, address, registration: brand.registration })}
        </p>
      </div>
    </SiteChrome>
  );
}
