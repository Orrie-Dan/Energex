import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import { industries } from "../../data/energex";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How Energex supports governments, IPPs, industry, real estate, fleet operators, and development institutions.",
};

export default function IndustriesPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#3ca80c]">Industries</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-[#00183c] md:text-4xl">
          Energy challenges by sector
        </h1>
        <p className="mt-4 max-w-2xl text-[#00183c]/80">
          Each client context drives a different mix of generation, grid, storage, and delivery models.
          Energex aligns the response to the need—not a fixed technology portfolio.
        </p>

        <div className="mt-12 space-y-4">
          {industries.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-[#00183c]/10 bg-white p-6 md:grid md:grid-cols-3 md:gap-6"
            >
              <h2 className="text-lg font-semibold text-[#00183c] md:col-span-1">{item.title}</h2>
              <div className="mt-3 md:col-span-1 md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#00183c]/50">Need</p>
                <p className="mt-1 text-sm text-[#00183c]/80">{item.need}</p>
              </div>
              <div className="mt-3 md:col-span-1 md:mt-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#00183c]/50">
                  Response
                </p>
                <p className="mt-1 text-sm text-[#00183c]/80">{item.response}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SiteChrome>
  );
}
