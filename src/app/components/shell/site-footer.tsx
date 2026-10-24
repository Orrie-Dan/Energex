import Link from "next/link";
import { formatText, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { Emph } from "./emph";
import { LOGO_ON_DARK } from "./site-header";

function FooterColumn({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <div className="flex flex-col gap-0 text-sm lg:gap-3">
      <h2 className="nx-label m-0 text-[#f07a1a]">{title}</h2>
      {links.map((link) => (
        <Link key={link.label} href={link.href} className="nx-foot-link nx-focus flex min-h-11 items-center lg:min-h-0">
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const { brand, footer, pageCopy, ui, href } = getContent(locale);
  return (
    <footer className="nx nx-dark nx-footer">
      <div className="nx-wrap flex flex-col gap-16 pb-10 pt-[88px]">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="flex max-w-[420px] flex-[1_1_300px] flex-col gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_ON_DARK} alt={brand.shortName} width={200} height={52} className="h-[52px] w-auto self-start" />
            <p className="nx-display m-0 nx-t-h3">
              <Emph text={pageCopy.chrome.footerTagline} />
            </p>
            <address className="m-0 text-sm not-italic leading-relaxed text-[#b9c4d6]">
              {brand.addressLines.join(", ")}
              <br />
              {formatText(ui.chrome.registration, { registration: brand.registration })}
            </address>
          </div>
          <div className="flex flex-wrap gap-14">
            <FooterColumn title={ui.chrome.footerSolutions} links={footer.solutions} />
            <FooterColumn title={ui.chrome.footerDelivery} links={footer.delivery} />
            <FooterColumn title={ui.chrome.footerCompany} links={footer.company} />
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-white/15 pt-6 text-sm text-[#b9c4d6]">
          <span>{formatText(ui.chrome.rights, { year: new Date().getFullYear(), name: "ENERGEX Global Solutions" })}</span>
          <span className="flex gap-6">
            <Link href={href("/privacy")} className="nx-foot-link nx-focus inline-flex min-h-11 items-center lg:min-h-0">
              {ui.chrome.privacyPolicy}
            </Link>
            <Link href={href("/terms")} className="nx-foot-link nx-focus inline-flex min-h-11 items-center lg:min-h-0">
              {ui.chrome.termsOfUse}
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
