import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import { brand } from "../../data/energex";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact ENERGEX Global Solutions in Hong Kong.",
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#3ca80c]">Contact</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#00183c] md:text-4xl">
          Get in touch
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-[#00183c]">{brand.name}</h2>
            <address className="mt-4 not-italic text-[#00183c]/80">
              {brand.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-6 text-sm text-[#00183c]/60">
              Hong Kong registered company. Direct email and phone lines will be published when
              confirmed.
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </SiteChrome>
  );
}
