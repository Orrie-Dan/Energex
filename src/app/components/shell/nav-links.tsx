"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  links: readonly { href: string; label: string }[];
};

/** Primary links inside the header pill; the current section is marked with `aria-current`. */
export function NavLinks({ links }: NavLinksProps) {
  const pathname = usePathname() ?? "";
  return (
    <>
      {links.map((link) => {
        const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            className="nx-nav-link nx-focus"
            aria-current={active ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
