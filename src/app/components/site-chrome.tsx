import Link from "next/link";
import type { ReactNode } from "react";
import { formatText, type Locale } from "../../i18n/config";
import { getContent } from "../../i18n/content";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";

const NAVY = "#011836";
const ACCENT = "#f06f12";

type SiteChromeProps = {
  locale: Locale;
  children: ReactNode;
  /** `plain` uses white page chrome (closer to Tilanium secondary pages). */
  tone?: "cream" | "plain";
};

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/70">{title}</h3>
      <ul className="space-y-2">
        {links.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-white/90 transition-colors hover:text-[#f06f12]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteChrome({ locale, children, tone = "cream" }: SiteChromeProps) {
  const { brand, footer, navCta, navLinks, ui, href } = getContent(locale);
  return (
    <div
      className={`flex min-h-screen flex-col text-[#011836] [font-family:Inter,system-ui,sans-serif] text-base leading-normal ${
        tone === "plain" ? "bg-white" : "bg-[#f6f4f0]"
      }`}
      style={{ color: NAVY }}
    >
      <header data-site-header className="sticky top-0 z-40 border-b border-[#011836]/10 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[100rem] items-center justify-between gap-4 px-6 py-4 md:px-8 lg:px-10">
          <Link href={href("/")} className="flex shrink-0 items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.logoLight}
              alt={brand.shortName}
              width={160}
              height={40}
              className="h-9 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label={ui.chrome.mainNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#011836]/85 transition-colors hover:text-[#f06f12]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher
              locale={locale}
              switchLabel={ui.chrome.switchLanguage}
              className="hidden rounded-md border border-[#011836]/15 px-3 py-2 text-sm font-semibold text-[#011836] transition-colors hover:border-[#f06f12] hover:text-[#f06f12] lg:inline-flex"
            />
            <Link
              href={navCta.href}
              className="hidden rounded-md px-4 py-2 text-sm font-semibold text-white transition-colors hover:opacity-90 sm:inline-flex"
              style={{ backgroundColor: ACCENT }}
            >
              {navCta.label}
            </Link>
            <MobileNav
              locale={locale}
              links={navLinks}
              cta={navCta}
              labels={{
                open: ui.chrome.openMenu,
                close: ui.chrome.closeMenu,
                dialog: ui.chrome.mobileNav,
                switchLanguage: ui.chrome.switchLanguage,
              }}
            />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-white/10 bg-[#011836] text-white">
        <div className="mx-auto w-full max-w-[100rem] px-6 py-12 md:px-8 lg:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <p className="text-lg font-semibold tracking-tight">{brand.shortName}</p>
              <p className="mt-2 text-sm font-medium text-[#f06f12]">{brand.taglineSecondary}</p>
              <address className="mt-4 not-italic text-sm leading-relaxed text-white/75">
                {brand.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-4 text-xs text-white/50">
                {formatText(ui.chrome.registrationShort, { registration: brand.registration })}
              </p>
            </div>
            <FooterColumn title={ui.chrome.footerSolutions} links={footer.solutions} />
            <FooterColumn title={ui.chrome.footerDelivery} links={footer.delivery} />
            <FooterColumn title={ui.chrome.footerCompany} links={footer.company} />
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>{formatText(ui.chrome.rights, { year: new Date().getFullYear(), name: brand.name })}</p>
            <div className="flex gap-6">
              <Link href={href("/privacy")} className="hover:text-white">
                {ui.chrome.privacy}
              </Link>
              <Link href={href("/terms")} className="hover:text-white">
                {ui.chrome.terms}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
