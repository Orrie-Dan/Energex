import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import { brand } from "../../data/energex";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy placeholder for ENERGEX Global Solutions.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="rounded-md border border-amber-500/40 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong className="font-semibold">Temporary placeholder</strong> — This privacy policy is
          awaiting legal review and will be replaced with approved text.
        </p>
        <h1 className="mt-8 text-3xl font-semibold text-[#00183c]">Privacy Policy</h1>
        <p className="mt-4 text-[#00183c]/80">
          {brand.name} respects your privacy. A full policy covering data collection, use, retention,
          and your rights will be published here following counsel review.
        </p>
      </div>
    </SiteChrome>
  );
}
