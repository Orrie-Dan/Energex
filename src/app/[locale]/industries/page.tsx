import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import { isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/industries", getContent(locale).ui.meta.industries);
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { customers, finalCta, industrialVerticals, industriesSection, ui, href } = getContent(locale);
  const t = ui.industries;
  return (
    <SiteChrome locale={locale} tone="plain">
      <div className="mx-auto w-full max-w-[100rem] px-6 py-14 md:px-8 md:py-20 lg:px-10">
        <header data-enter className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">
            {industriesSection.label}
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight text-balance text-[#011836] md:text-5xl lg:text-6xl">
            <span className="inline-block">{t.heroHeadingLead}</span>{" "}
            <span className="inline-block text-[#011836]/55">{t.heroHeadingAccent}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#011836]/75 md:text-lg">
            {t.heroDescription}
          </p>
        </header>

        <div className="mt-10 space-y-6 md:mt-14">
          {customers.map((item, index) => (
            <article
              data-reveal
              key={item.title}
              id={item.anchorId}
              className="motion-zoom overflow-hidden rounded-lg border border-[#011836]/10 bg-white scroll-mt-24"
            >
              <div className="grid lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)]">
                <div className="relative min-h-56 bg-[#011836] lg:min-h-full">
                  <img
                    src={item.imgSrc}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#011836]/80 via-[#011836]/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-xs font-semibold text-[#f06f12]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-1 text-xl font-semibold text-white">{item.title}</h2>
                  </div>
                </div>

                <div className="grid gap-8 p-6 md:p-8 xl:grid-cols-[minmax(0,1fr)_minmax(16rem,0.8fr)] xl:gap-12">
                  <div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#011836]/50">
                          {t.primaryNeed}
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#011836]">{item.need}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#011836]/50">
                          {t.response}
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#011836]">{item.response}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-[#011836]/80">{item.detail}</p>
                  </div>

                  <ul className="space-y-2 xl:mt-0">
                    {item.offerings.map((offering) => (
                      <li
                        key={offering}
                        className="flex gap-3 text-sm leading-relaxed text-[#011836]/80"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f06f12]"
                          aria-hidden
                        />
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <div data-reveal className="grid items-end gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.7fr)] lg:gap-16">
            <h2 className="text-xl font-semibold text-[#011836]">{t.focusHeading}</h2>
            <p className="text-sm text-[#011836]/70">{t.focusIntro}</p>
          </div>
          <ul data-reveal="stagger" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industrialVerticals.map((vertical) => (
              <li
                key={vertical.title}
                className="motion-lift rounded-lg border border-[#011836]/10 bg-white p-5"
              >
                <h3 className="font-semibold text-[#011836]">{vertical.title}</h3>
                <p className="mt-2 text-sm text-[#011836]/75">{vertical.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section data-reveal className="mt-14 flex flex-col gap-6 rounded-lg border border-[#011836]/10 bg-white px-6 py-8 md:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-xl font-semibold text-[#011836]">{finalCta.heading}</h2>
            <p className="mt-3 text-sm text-[#011836]/75">{finalCta.body}</p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Link
              href={finalCta.cta.href}
              className="inline-flex rounded-md bg-[#f06f12] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c4500a]"
            >
              {finalCta.cta.label}
            </Link>
            <Link
              href={href("/solutions")}
              className="inline-flex rounded-md border border-[#011836]/20 px-5 py-2.5 text-sm font-semibold text-[#011836] hover:border-[#f06f12]/50"
            >
              {t.exploreAllCapabilities}
            </Link>
          </div>
        </section>
      </div>
    </SiteChrome>
  );
}
