import Link from "next/link";
import { LOCALES, LOCALE_META } from "../../i18n/config";
import { uiEn } from "../../i18n/ui/en";
import { uiZhHk } from "../../i18n/ui/zh-hk";

const TEXT = { en: uiEn.notFound, "zh-hk": uiZhHk.notFound } as const;

/** Not-found pages do not receive route params, so both languages are shown. */
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f4f0] px-5 py-20 text-[#011836] [font-family:Inter,system-ui,sans-serif]">
      <div className="grid max-w-3xl gap-10 sm:grid-cols-2">
        {LOCALES.map((locale) => (
          <section key={locale} lang={LOCALE_META[locale].htmlLang}>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#f06f12]">404</p>
            <h1 className="mt-2 text-2xl font-semibold">{TEXT[locale].heading}</h1>
            <p className="mt-3 text-base text-[#011836]/75">{TEXT[locale].body}</p>
            <Link
              href={`/${locale}`}
              className="mt-6 inline-flex rounded-md bg-[#f06f12] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c4500a]"
            >
              {TEXT[locale].home}
            </Link>
          </section>
        ))}
      </div>
    </main>
  );
}
