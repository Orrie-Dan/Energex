import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import { brand } from "../../data/energex";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use placeholder for ENERGEX Global Solutions.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="rounded-md border border-amber-500/40 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong className="font-semibold">Temporary placeholder</strong> — These terms are awaiting
          legal review and will be replaced with approved text.
        </p>
        <h1 className="mt-8 text-3xl font-semibold text-[#00183c]">Terms of Use</h1>
        <p className="mt-4 text-[#00183c]/80">
          Use of this website is subject to terms that will be published by {brand.name} following
          legal review. Until then, content is provided for informational purposes only.
        </p>
      </div>
    </SiteChrome>
  );
}
