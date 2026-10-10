import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import { isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";
import { publicInquiryConfig } from "../../../lib/inquiry/public-config";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/equipment", getContent(locale).ui.meta.equipment);
}

export default async function EquipmentPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { equipmentCategories, equipmentCategoryHref, equipmentPage } = getContent(locale);
  return (
    <SiteChrome locale={locale} tone="plain">
      <div className="mx-auto w-full max-w-[100rem] px-6 py-14 md:px-8 md:py-20 lg:px-10">
        <header data-enter className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">
            {equipmentPage.eyebrow}
          </p>
          <h1 className="mt-3 text-balance break-keep text-4xl font-semibold tracking-tight text-[#011836] md:text-5xl lg:text-6xl">
            {equipmentPage.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#011836]/75 md:text-lg">
            {equipmentPage.intro}
          </p>
        </header>

        <ul data-reveal="stagger" className="mt-10 grid list-none gap-6 p-0 sm:grid-cols-2 md:mt-14 xl:grid-cols-3">
          {equipmentCategories.map((category) => (
            <li key={category.slug} id={category.slug} className="motion-lift motion-zoom overflow-hidden rounded-lg border border-[#011836]/10 bg-white">
              <a href={equipmentCategoryHref(category.slug)} className="block transition-colors duration-300 hover:bg-[#f6f4f0]">
                <img src={category.imgSrc} alt={category.imgAlt} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-[#011836]">{category.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#011836]/80">{category.description}</p>
                  <p className="mt-4 flex flex-wrap gap-2">
                    {category.scope.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#011836]/15 px-3 py-1 text-xs font-medium text-[#011836]"
                      >
                        {item}
                      </span>
                    ))}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-4xl text-xs leading-relaxed text-[#011836]/60">{equipmentPage.note}</p>

        <section data-reveal id="inquiry" className="mt-12 flex scroll-mt-24 flex-col gap-6 rounded-lg border border-[#011836]/10 bg-white px-6 py-8 md:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-[#011836]">{equipmentPage.inquiryHeading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#011836]/75">{publicInquiryConfig.enabled ? equipmentPage.inquiryBodyLive : equipmentPage.inquiryBody}</p>
          </div>
          <a
            href={equipmentPage.inquiryHref}
            className="inline-flex shrink-0 rounded-md bg-[#f06f12] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c4500a]"
          >
            {equipmentPage.inquiryLabel}
          </a>
        </section>
      </div>
    </SiteChrome>
  );
}
