import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import { isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";
import { publicInquiryConfig } from "../../../lib/inquiry/public-config";
import { ContactForm } from "./contact-form";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/contact", getContent(locale).ui.meta.contact);
}

export default async function ContactPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { brand, contactPage, equipmentCategories, ui } = getContent(locale);
  const t = ui.contact;
  return (
    <SiteChrome locale={locale}>
      <div data-enter className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">
          {contactPage.eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-[#011836] md:text-4xl">
          {contactPage.heading}
        </h1>
        <p className="mt-4 max-w-3xl text-[#011836]/80">{contactPage.supporting}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-[#011836]">{brand.name}</h2>
            <p className="mt-1 text-sm text-[#011836]/60">{brand.taglinePrimary}</p>

            <address className="mt-6 not-italic text-[#011836]/80">
              <span className="block text-xs font-semibold uppercase tracking-wide text-[#011836]/50">
                {t.correspondenceAddress}
              </span>
              {brand.addressLines.map((line) => (
                <span key={line} className="mt-1 block">
                  {line}
                </span>
              ))}
            </address>

            <dl className="mt-6 space-y-3 text-sm text-[#011836]/75">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-[#011836]/50">
                  {t.businessRegistration}
                </dt>
                <dd className="mt-1">{brand.registration}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-[#011836]/50">
                  {t.natureOfBusiness}
                </dt>
                <dd className="mt-1">{brand.natureOfBusiness}</dd>
              </div>
            </dl>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#011836]">
              {t.topicsHeading}
            </h3>
            <ul className="mt-3 space-y-2">
              {contactPage.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex gap-3 text-sm leading-relaxed text-[#011836]/80"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f06f12]"
                    aria-hidden
                  />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-[#011836]/60">{publicInquiryConfig.enabled ? contactPage.formNoteLive : contactPage.formNote}</p>
          </div>

          <ContactForm
            locale={locale}
            text={t}
            formNote={contactPage.formNote}
            formNoteLive={contactPage.formNoteLive}
            categories={equipmentCategories.map((category) => ({ slug: category.slug, title: category.title }))}
          />
        </div>
      </div>
    </SiteChrome>
  );
}
