import Link from "next/link";
import type { Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { LanguageSwitcher } from "../language-switcher";
import { MobileNav } from "../mobile-nav";
import { NavLinks } from "./nav-links";

export const LOGO_ON_DARK = "/assets/energex/logo-on-dark-hd.png";

type SiteHeaderProps = {
  locale: Locale;
  /** `overlay` floats over a dark page hero; `solid` sits on a navy band. */
  variant?: "overlay" | "solid";
};

export function SiteHeader({ locale, variant = "solid" }: SiteHeaderProps) {
  const { brand, navCta, navLinks, ui, href } = getContent(locale);
  return (
    <header className={`nx-header nx-header--${variant}`}>
      <div className="nx-wrap flex items-center justify-between gap-4 py-[22px]">
        <Link href={href("/")} aria-label={brand.shortName} className="nx-focus flex min-h-11 shrink-0 items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_ON_DARK} alt={brand.shortName} width={162} height={42} className="block h-[34px] w-auto lg:h-[42px]" />
        </Link>

        <nav aria-label={ui.chrome.mainNav} className="nx-nav-pill max-lg:hidden">
          <NavLinks links={navLinks} />
          <LanguageSwitcher locale={locale} switchLabel={ui.chrome.switchLanguage} className="nx-nav-link nx-focus" />
          <Link href={navCta.href} className="nx-btn nx-btn--accent nx-btn--sm">
            {navCta.label} <span aria-hidden="true">↗</span>
          </Link>
        </nav>

        <MobileNav
          locale={locale}
          links={navLinks}
          cta={navCta}
          logo={LOGO_ON_DARK}
          logoAlt={brand.shortName}
          homeHref={href("/")}
          labels={{
            open: ui.chrome.openMenu,
            close: ui.chrome.closeMenu,
            dialog: ui.chrome.mobileNav,
            switchLanguage: ui.chrome.switchLanguage,
          }}
        />
      </div>
    </header>
  );
}
