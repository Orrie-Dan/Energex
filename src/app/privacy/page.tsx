import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import { brand } from "../../data/energex";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy placeholder for ENERGEX Global Solutions.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privacy" },
  openGraph: { url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-5 py-14 md:px-8 md:py-20">
        <p className="rounded-md border border-amber-500/40 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong className="font-semibold">Temporary placeholder</strong> — This privacy policy is
          awaiting legal review and will be replaced with approved text.
        </p>
        <h1 className="mt-8 text-3xl font-semibold text-[#011836]">Privacy Policy</h1>
        <p className="mt-4 text-[#011836]/80">
          {brand.name} ({brand.addressLines.join(", ")}) respects your privacy. A full policy
          covering data collection, use, retention, cookies, international transfers and your rights
          will be published here following counsel review.
        </p>
        <p className="mt-4 text-sm text-[#011836]/70">
          Until the approved policy is published, contact-form fields on this website are for
          interface preview only and are not connected to a live submission endpoint.
        </p>
        <p className="mt-6 text-sm text-[#011836]/60">
          Business Registration Certificate No. {brand.registration}. Nature of business:{" "}
          {brand.natureOfBusiness}.
        </p>
      </div>
    </SiteChrome>
  );
}
