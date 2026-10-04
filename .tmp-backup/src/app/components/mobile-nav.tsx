"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

type NavLink = { href: string; label: string };
type NavCta = { href: string; label: string };

type MobileNavProps = {
  links: readonly NavLink[];
  cta: NavCta;
};

export function MobileNav({ links, cta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

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

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#00183c]/15 text-[#00183c] hover:bg-[#00183c]/5"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg
          aria-hidden
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          {open ? (
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          className="fixed inset-0 z-50 flex flex-col bg-[#f3f6f5] pt-[4.5rem]"
        >
          <nav className="flex flex-1 flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-[#00183c] hover:bg-white"
                onClick={close}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-[#3ca80c] px-4 py-3 text-sm font-semibold text-white hover:bg-[#349609]"
              onClick={close}
            >
              {cta.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
