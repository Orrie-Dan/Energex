import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import {
  customerSegmentId,
  finalCta,
  industrialVerticals,
  industries,
  industriesSection,
} from "../../data/energex";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "ENERGEX target customers — governments, IPPs, mining, industrial parks, oil & gas, commercial real estate, fleet operators and development institutions.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries",
    description:
      "ENERGEX target customers — governments, IPPs, mining, industrial parks, oil and gas, commercial real estate, fleet operators and development institutions.",
    url: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <SiteChrome tone="plain">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">
          {industriesSection.label}
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-[#011836] md:text-4xl">
          {industriesSection.headingLead}{" "}
          <span className="text-[#011836]/55">{industriesSection.headingAccent}</span>
        </h1>
        <p className="mt-4 max-w-3xl text-[#011836]/80">{industriesSection.supporting}</p>

        <div className="mt-12 space-y-6">
          {industries.map((item, index) => (
            <article
              key={item.title}
              id={customerSegmentId(item.title)}
              className="overflow-hidden rounded-lg border border-[#011836]/10 bg-white scroll-mt-24"
            >
              <div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <div className="relative min-h-48 bg-[#011836] md:min-h-full">
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

                <div className="p-6 md:p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#011836]/50">
                        Primary need
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#011836]">{item.need}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#011836]/50">
                        Energex response
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#011836]">{item.response}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-[#011836]/80">{item.detail}</p>

                  <ul className="mt-5 space-y-2">
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
          <h2 className="text-xl font-semibold text-[#011836]">Industrial focus areas</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#011836]/70">
            Within industrial energy (Scope of Work §10), solutions are configured around operating
            verticals — not additional primary customer segments.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industrialVerticals.map((vertical) => (
              <li
                key={vertical.title}
                className="rounded-lg border border-[#011836]/10 bg-white p-5"
              >
                <h3 className="font-semibold text-[#011836]">{vertical.title}</h3>
                <p className="mt-2 text-sm text-[#011836]/75">{vertical.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14 rounded-lg border border-[#011836]/10 bg-white px-6 py-8 text-center md:px-10">
          <h2 className="text-xl font-semibold text-[#011836]">{finalCta.heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#011836]/75">{finalCta.body}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={finalCta.cta.href}
              className="inline-flex rounded-md bg-[#f06f12] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c4500a]"
            >
              {finalCta.cta.label}
            </Link>
            <Link
              href="/solutions"
              className="inline-flex rounded-md border border-[#011836]/20 px-5 py-2.5 text-sm font-semibold text-[#011836] hover:border-[#f06f12]/50"
            >
              Explore All Capabilities
            </Link>
          </div>
        </section>
      </div>
    </SiteChrome>
  );
}
