import Link from "next/link";
import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import { capabilities } from "../../data/energex";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Integrated energy capabilities from development and power generation to storage, grid, e-mobility, and digital energy platforms.",
};

export default function SolutionsPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#3ca80c]">Capabilities</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-[#00183c] md:text-4xl">
          One partner across the full energy stack
        </h1>
        <p className="mt-4 max-w-3xl text-[#00183c]/80">
          Energex coordinates technology-agnostic solutions from early development through long-term
          operations. Highlights include{" "}
          <strong className="font-semibold text-[#00183c]">E-Mobility &amp; Charging Infrastructure</strong>{" "}
          for fleet and hub deployments, and the{" "}
          <strong className="font-semibold text-[#00183c]">Digital Energy Platform</strong> for
          monitoring, forecasting, dispatch, and asset optimization.
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <li
              key={cap.id}
              className="rounded-lg border border-[#00183c]/10 bg-white p-6 shadow-sm"
            >
              <span className="text-xs font-semibold text-[#3ca80c]">{cap.id}</span>
              <h2 className="mt-1 text-lg font-semibold text-[#00183c]">{cap.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#00183c]/75">{cap.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-lg bg-[#00183c] px-6 py-8 text-center text-white md:px-10">
          <p className="text-lg font-medium">Ready to shape your project requirements?</p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-md bg-[#3ca80c] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#349609]"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </SiteChrome>
  );
}
