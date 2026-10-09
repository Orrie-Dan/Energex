import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteChrome } from "../../../components/site-chrome";
import { equipmentCategories as englishCategories } from "../../../../data/energex";
import { LOCALES, formatText, isLocale, type Locale } from "../../../../i18n/config";
import { getContent } from "../../../../i18n/content";
import { pageMetadata } from "../../../../i18n/metadata";
import { publicInquiryConfig } from "../../../../lib/inquiry/public-config";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => englishCategories.map((category) => ({ locale, slug: category.slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const { getEquipmentCategory, ui } = getContent(locale);
  const category = getEquipmentCategory(slug);
  if (!category) return { title: ui.meta.equipment.title };
  return pageMetadata(locale, `/equipment/${category.slug}`, {
    title: category.title,
    description: formatText(ui.meta.equipmentCategory.description, { description: category.description }),
  });
}

export default async function EquipmentCategoryPage({ params }: Props) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const {
    equipmentCategories,
    equipmentCategoryHref,
    equipmentPage,
    equipmentProcurement,
    equipmentQuoteHref,
    getEquipmentCategory,
    ui,
    href,
  } = getContent(locale);
  const t = ui.equipment;
  const category = getEquipmentCategory(slug);
  if (!category) notFound();

  const related = equipmentCategories.filter((item) => item.slug !== category.slug);
  const quoteHref = equipmentQuoteHref(category.slug);

  return (
    <SiteChrome locale={locale} tone="plain">
      <header className="relative min-h-[28rem] overflow-hidden bg-[#011836] text-white md:min-h-[34rem]">
        <img
          src={category.imgSrc}
          alt={category.imgAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#011836]/70" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-end px-5 py-14 md:min-h-[34rem] md:px-8 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">
            <a href={href("/equipment")} className="hover:text-white">
              {equipmentPage.eyebrow}
            </a>
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {category.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/85">{category.description}</p>
          <a
            href={quoteHref}
            className="mt-8 inline-flex w-fit rounded-md bg-[#f06f12] px-5 py-3 text-sm font-semibold text-white hover:bg-[#c4500a]"
          >
            {t.requestQuote}
          </a>
          <p className="mt-3 max-w-xl text-sm text-white/70">{t.quoteHint}</p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="max-w-3xl text-[#011836]/80">{t.categoryIntro}</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#011836]/70">{equipmentPage.boundary}</p>

        <section className="mt-12" aria-labelledby="equipment-types">
          <h2 id="equipment-types" className="text-2xl font-semibold tracking-tight text-[#011836] md:text-3xl">
            {t.typesHeading}
          </h2>
          <ul className="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2">
            {category.scope.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-[#011836]/10 bg-[#f6f4f0] px-5 py-4 text-base font-medium text-[#011836]"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14" aria-labelledby="procurement">
          <h2 id="procurement" className="text-2xl font-semibold tracking-tight text-[#011836] md:text-3xl">
            {t.procurementHeading}
          </h2>
          <p className="mt-4 max-w-3xl text-[#011836]/80">{equipmentPage.coordination}</p>
          <ul className="mt-6 grid list-none gap-3 p-0 sm:grid-cols-2">
            {equipmentProcurement.map((item) => (
              <li key={item} className="border-l-2 border-[#f06f12] py-2 pl-4 text-[#011836]">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-lg bg-[#011836] px-6 py-10 text-white md:px-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.requestQuote}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
            {publicInquiryConfig.enabled ? equipmentPage.quoteNoteLive : equipmentPage.quoteNote}
          </p>
          <a
            href={quoteHref}
            className="mt-6 inline-flex rounded-md bg-[#f06f12] px-5 py-3 text-sm font-semibold text-white hover:bg-[#c4500a]"
          >
            {t.requestQuote}
          </a>
        </section>

        <section className="mt-14" aria-labelledby="related-equipment">
          <h2 id="related-equipment" className="text-2xl font-semibold tracking-tight text-[#011836] md:text-3xl">
            {t.relatedHeading}
          </h2>
          <ul className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <a
                  href={equipmentCategoryHref(item.slug)}
                  className="block overflow-hidden rounded-lg border border-[#011836]/10 bg-white hover:border-[#f06f12]"
                >
                  <img src={item.imgSrc} alt="" className="h-36 w-full object-cover" />
                  <span className="block px-4 py-4 text-sm font-semibold text-[#011836]">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SiteChrome>
  );
}
