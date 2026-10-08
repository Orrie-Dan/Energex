import { contactClose } from "../../data/energex";

const FONT = "[font-family:Inter,_'Inter_Placeholder',_sans-serif]";

/** Closing inquiry routes. These links do not submit a form. */
export default function ContactCloseSection() {
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center bg-color-001"
      aria-labelledby="contact-heading"
    >
      <div className="flex w-full max-w-400 flex-col gap-8 px-8 py-28 max-lg:px-6 max-lg:py-18">
        <p className={`text-accent ${FONT} text-sm font-semibold leading-5.5`}>{contactClose.label}</p>
        <h2
          id="contact-heading"
          className={`max-w-200 text-background ${FONT} text-[2.75rem] font-medium leading-11 tracking-[-1.76px] text-balance max-lg:text-4xl max-lg:leading-9`}
        >
          {contactClose.heading}
        </h2>
        <p className={`max-w-150 text-background/80 ${FONT} text-base leading-6.5`}>{contactClose.body}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href={contactClose.project.href}
            className={`inline-flex h-12 items-center bg-accent px-6 text-background ${FONT} text-sm font-semibold hover:opacity-90`}
          >
            {contactClose.project.label}
          </a>
          <a
            href={contactClose.equipment.href}
            className={`inline-flex h-12 items-center border border-background/40 px-6 text-background ${FONT} text-sm font-semibold hover:border-background hover:bg-background/10`}
          >
            {contactClose.equipment.label}
          </a>
        </div>
      </div>
    </section>
  );
}
