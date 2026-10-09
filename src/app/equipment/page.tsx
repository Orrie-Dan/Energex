import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import { equipmentCategories, equipmentCategoryHref, equipmentPage } from "../../data/energex";
import { publicInquiryConfig } from "../../lib/inquiry/public-config";

export const metadata: Metadata = {
  title: "Power Equipment Supply",
  description:
    "ENERGEX equipment trading and global procurement scope — generation, solar and storage, transmission and distribution, charging controls, LNG and cryogenic systems, and spare parts.",
  alternates: { canonical: "/equipment" },
  openGraph: {
    title: "Power Equipment Supply",
    description:
      "Equipment trading and global procurement scope. Not a stocked product catalogue.",
    url: "/equipment",
  },
};

export default function EquipmentPage() {
  return (
    <SiteChrome tone="plain">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">
          {equipmentPage.eyebrow}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-[#011836] md:text-4xl">
          {equipmentPage.heading}
        </h1>
        <p className="mt-4 max-w-3xl text-[#011836]/80">{equipmentPage.intro}</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#011836]/70">{equipmentPage.boundary}</p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#011836]/70">
          {equipmentPage.coordination}
        </p>

        <ul className="mt-12 grid list-none gap-6 p-0 md:grid-cols-2">
          {equipmentCategories.map((category) => (
            <li key={category.slug} id={category.slug} className="overflow-hidden rounded-lg border border-[#011836]/10 bg-white">
              <a href={equipmentCategoryHref(category.slug)} className="block hover:bg-[#f6f4f0]">
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

        <section id="inquiry" className="mt-14 scroll-mt-24 rounded-lg border border-[#011836]/10 bg-white px-6 py-8 md:px-10">
          <h2 className="text-xl font-semibold text-[#011836]">{equipmentPage.inquiryHeading}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#011836]/75">{publicInquiryConfig.enabled ? equipmentPage.inquiryBodyLive : equipmentPage.inquiryBody}</p>
          <a
            href={equipmentPage.inquiryHref}
            className="mt-6 inline-flex rounded-md bg-[#f06f12] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c4500a]"
          >
            {equipmentPage.inquiryLabel}
          </a>
        </section>
      </div>
    </SiteChrome>
  );
}
