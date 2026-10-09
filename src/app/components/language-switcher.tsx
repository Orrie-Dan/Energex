"use client";

import { usePathname } from "next/navigation";
import type { FocusEvent, MouseEvent } from "react";
import { LOCALES, LOCALE_META, formatText, switchLocaleHref, type Locale } from "../../i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  /** Localized "Switch language to {language}" template (from `ui.chrome.switchLanguage`). */
  switchLabel: string;
  className?: string;
  onNavigate?: () => void;
};

/**
 * Links to the same page in the other locale. The server-rendered href covers
 * the path; the current query string and fragment are appended at interaction
 * time so state written with `history.replaceState` (e.g. the contact form's
 * `?interest=`) is preserved too.
 */
export function LanguageSwitcher({ locale, switchLabel, className, onNavigate }: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;
  const target: Locale = LOCALES.find((item) => item !== locale) ?? "en";
  const meta = LOCALE_META[target];
  const baseHref = switchLocaleHref(pathname, target);

  const syncHref = (event: MouseEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>) => {
    event.currentTarget.href = switchLocaleHref(pathname, target, window.location.search, window.location.hash);
  };

  return (
    <a
      href={baseHref}
      hrefLang={meta.hreflang}
      lang={meta.htmlLang}
      aria-label={formatText(switchLabel, { language: meta.nativeName })}
      className={className}
      onMouseEnter={syncHref}
      onFocus={syncHref}
      onClick={(event) => {
        syncHref(event);
        onNavigate?.();
      }}
    >
      {meta.shortLabel}
    </a>
  );
}
