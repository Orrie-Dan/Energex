import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected project information from ENERGEX Global Solutions.",
};

export default function ProjectsPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#3ca80c]">Projects</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#00183c] md:text-4xl">
          Project portfolio
        </h1>
        <p className="mt-8 rounded-lg border border-[#00183c]/10 bg-white p-8 text-center text-[#00183c]/80">
          Selected project information will be published as it becomes available.
        </p>
      </div>
    </SiteChrome>
  );
}
