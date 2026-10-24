import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import { PageHero } from "../../components/shell/page-hero";
import { formatText, isLocale, type Locale } from "../../../i18n/config";
import { getContent } from "../../../i18n/content";
import { pageMetadata } from "../../../i18n/metadata";
import { ContactForm } from "./contact-form";

type Props = { params: Promise<{ locale: string }> };

const HERO_VIDEO = "/assets/energex/cta-loop.mp4";
const HERO_POSTER = "/assets/energex/cta-loop-poster.jpg";
const HQ_IMAGE = "/assets/energex/fam-delivery.jpg";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, "/contact", getContent(locale).ui.meta.contact);
}

export default async function ContactPage({ params }: Props) {
  const { locale } = (await params) as { locale: Locale };
  const { brand, contactPage, equipmentCategories, pageCopy, ui } = getContent(locale);
  const t = pageCopy.contact;

  return (
    <SiteChrome locale={locale} tone="plain" heroOverlay>
      <PageHero
        label={t.heroEyebrow}
        video={HERO_VIDEO}
        poster={HERO_POSTER}
        shade="linear-gradient(180deg, rgba(11,26,48,0.75) 0%, rgba(11,26,48,0.35) 45%, rgba(11,26,48,0.92) 100%)"
        minHeight={640}
        paddingBottom={280}
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        titleMaxWidth={1100}
        lead={t.heroLead}
      />

      <section
        id="inquiry"
        aria-label={t.heroEyebrow}
        className="nx-wrap relative z-[3] -mt-[150px] flex flex-wrap items-start gap-6 pb-32 max-[900px]:pb-20"
      >
        <div className="min-w-0 flex-[999_1_640px] rounded-[32px] bg-white p-[52px] shadow-[0_40px_100px_rgba(11,26,48,0.18)] max-[640px]:rounded-[24px] max-[640px]:p-6">
          <ContactForm
            locale={locale}
            title={t.formTitle}
            text={ui.contact}
            formNote={contactPage.formNote}
            formNoteLive={contactPage.formNoteLive}
            categories={equipmentCategories.map((category) => ({ slug: category.slug, title: category.title }))}
          />
        </div>

        <aside className="flex min-w-0 flex-[1_1_340px] flex-col gap-5">
          <div className="nx-media flex min-h-[300px] items-end rounded-[28px] text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HQ_IMAGE} alt={t.hqImgAlt} loading="lazy" />
            <div
              aria-hidden="true"
              className="nx-shade"
              style={{ background: "linear-gradient(180deg, rgba(11,26,48,0) 30%, rgba(11,26,48,0.92) 100%)" }}
            />
            <div className="relative flex flex-col gap-2 p-7">
              <h2 className="nx-label m-0 text-[var(--nx-accent)]">{t.hqLabel}</h2>
              <address className="nx-display not-italic nx-t-h4">
                {brand.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <span className="pt-1.5 text-sm text-[var(--nx-cloud)]">
                {formatText(ui.chrome.registration, { registration: brand.registration })}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[28px] bg-[var(--nx-sand)] p-8 max-[640px]:p-6">
            <h2 className="nx-label m-0 text-[var(--nx-accent-ink)]">{t.topicsLabel}</h2>
            <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
              {t.topics.map((topic) => (
                <li key={topic} className="rounded-full bg-white px-3.5 py-[9px] text-sm">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </SiteChrome>
  );
}
