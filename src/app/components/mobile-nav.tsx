"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";
import type { Locale } from "../../i18n/config";
import { LanguageSwitcher } from "./language-switcher";

type NavLink = { href: string; label: string };
type NavCta = { href: string; label: string };

type MobileNavProps = {
  locale: Locale;
  links: readonly NavLink[];
  cta: NavCta;
  logo: string;
  logoAlt: string;
  homeHref: string;
  labels: { open: string; close: string; dialog: string; switchLanguage: string };
};

/** Full-screen navy menu for viewports below 1025px. */
export function MobileNav({ locale, links, cta, logo, logoAlt, homeHref, labels }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname() ?? "";

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close]);

  const toggle = (
    <button
      type="button"
      className="nx-focus inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-[rgba(11,26,48,0.35)] text-white backdrop-blur-md"
      aria-expanded={open}
      aria-controls={panelId}
      aria-label={open ? labels.close : labels.open}
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg aria-hidden className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {open ? (
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        ) : (
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        )}
      </svg>
    </button>
  );

  return (
    <div className="lg:hidden">
      {toggle}
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label={labels.dialog}
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#0b1a30] text-white"
        >
          <div className="nx-wrap flex items-center justify-between gap-4 py-[22px]">
            <Link href={homeHref} onClick={close} className="nx-focus flex min-h-11 items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} alt={logoAlt} width={131} height={34} className="block h-[34px] w-auto" />
            </Link>
            {toggle}
          </div>
          <nav className="nx-wrap flex flex-1 flex-col pb-10 pt-6">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`nx-focus border-b border-white/10 py-4 nx-display text-2xl ${
                    active ? "text-[#f07a1a]" : "text-white"
                  }`}
                  onClick={close}
                >
                  {link.label}
                </Link>
              );
            })}
            <LanguageSwitcher
              locale={locale}
              switchLabel={labels.switchLanguage}
              className="nx-focus border-b border-white/10 py-4 text-lg font-medium text-white/85"
              onNavigate={close}
            />
            <Link href={cta.href} className="nx-btn nx-btn--accent nx-btn--lg mt-8 self-start" onClick={close}>
              {cta.label} <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
