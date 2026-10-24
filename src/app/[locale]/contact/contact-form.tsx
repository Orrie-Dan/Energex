"use client";

import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";
import { getEquipmentCategory } from "../../../data/energex";
import type { Locale } from "../../../i18n/config";
import type { UiText } from "../../../i18n/ui/en";
import { createInquiryAttemptTracker } from "../../../lib/inquiry/attempt";
import {
  inquiryFieldErrorMessage,
  inquiryLocaleFor,
  inquiryMessages,
  inquiryOutcomeMessage,
} from "../../../lib/inquiry/messages";
import { publicInquiryConfig } from "../../../lib/inquiry/public-config";
import { submitInquiry, type InquiryDeliveryResult } from "../../../lib/inquiry/submit";
import {
  INQUIRY_FIELD_NAMES,
  validateEquipmentInquiry,
  validateProjectInquiry,
  type EquipmentInquiryFields,
  type InquiryFieldErrors,
  type InquiryFieldName,
  type InquiryMode,
  type ProjectInquiryFields,
} from "../../../lib/inquiry/validate";
import { Emph } from "../../components/shell/emph";
import { TurnstileWidget } from "./turnstile-widget";

const EMPTY_PROJECT: ProjectInquiryFields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  location: "",
  description: "",
};

const EMPTY_EQUIPMENT: EquipmentInquiryFields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  category: "",
  description: "",
  quantity: "",
  destination: "",
  timeline: "",
};

type QueryState = {
  mode: InquiryMode;
  category: string;
  rejectedCategory: boolean;
};

function readQuery(fallback: InquiryMode): QueryState {
  if (typeof window === "undefined") {
    return { mode: fallback, category: "", rejectedCategory: false };
  }
  const params = new URLSearchParams(window.location.search);
  const interest = params.get("interest")?.trim().toLowerCase() ?? "";
  const rawCategory = params.get("category")?.trim() ?? "";
  const category = getEquipmentCategory(rawCategory);
  const rejectedCategory = rawCategory.length > 0 && !category;
  if (interest === "equipment" || (!interest && (category || fallback === "equipment"))) {
    return { mode: "equipment", category: category?.slug ?? "", rejectedCategory };
  }
  return { mode: "project", category: category?.slug ?? "", rejectedCategory: false };
}

const FIELD_ORDER = INQUIRY_FIELD_NAMES;

const OUTCOME_CLASS = {
  success: "border-[#166534]/30 bg-[#f0fdf4] text-[#166534]",
  error: "border-[#9f1239]/30 bg-[#fff1f2] text-[#9f1239]",
  warning: "border-amber-500/40 bg-amber-50 text-amber-900",
  info: "border-[#011836]/15 bg-[#f6f4f0] text-[#011836]",
} as const;

export type ContactFormProps = {
  locale: Locale;
  /** Form heading; `*text*` marks the accent phrase. */
  title: string;
  /** Localized form labels (`ui.contact`). */
  text: UiText["contact"];
  formNote: string;
  formNoteLive: string;
  /** Published categories with localized titles; slugs are the submitted values. */
  categories: readonly { slug: string; title: string }[];
  /** Mode used when the URL does not set `interest`. */
  defaultMode?: InquiryMode;
};

export function ContactForm({
  locale,
  title,
  text,
  formNote,
  formNoteLive,
  categories,
  defaultMode = "project",
}: ContactFormProps) {
  const live = publicInquiryConfig.enabled;
  const messageLocale = inquiryLocaleFor(locale);
  const inquiryStateText = inquiryMessages[messageLocale].state;
  const markers: FieldMarkers = { required: text.requiredSr, optional: text.optional };
  // "Fields marked with {mark} are required." — the mark is rendered as a visual asterisk plus screen-reader text.
  const [legendBefore = "", legendAfter = ""] = text.requiredLegend.split("{mark}");
  const formRef = useRef<HTMLFormElement>(null);
  const [mode, setMode] = useState<InquiryMode>(defaultMode);
  const [project, setProject] = useState(EMPTY_PROJECT);
  const [equipment, setEquipment] = useState(EMPTY_EQUIPMENT);
  const [errors, setErrors] = useState<InquiryFieldErrors>({});
  const [rejectedCategory, setRejectedCategory] = useState(false);
  const [outcome, setOutcome] = useState<InquiryDeliveryResult | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileReset, setTurnstileReset] = useState(0);
  const [turnstileUnavailable, setTurnstileUnavailable] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  /** Idempotency key per inquiry content plus the double-submission guard. */
  const attemptRef = useRef(createInquiryAttemptTracker());

  useEffect(() => {
    const query = readQuery(defaultMode);
    setMode(query.mode);
    setRejectedCategory(query.rejectedCategory);
    if (query.category) {
      setEquipment((current) => ({ ...current, category: query.category }));
    }
  }, []);

  /** Any edit makes this a different inquiry: drop the stale outcome and idempotency key. */
  function contentChanged() {
    setOutcome(null);
    attemptRef.current.invalidate();
  }

  function updateShared(key: "name" | "company" | "email" | "phone", value: string) {
    setProject((current) => ({ ...current, [key]: value }));
    setEquipment((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
    contentChanged();
  }

  function updateProject<K extends keyof ProjectInquiryFields>(key: K, value: ProjectInquiryFields[K]) {
    setProject((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
    contentChanged();
  }

  function updateEquipment<K extends keyof EquipmentInquiryFields>(key: K, value: EquipmentInquiryFields[K]) {
    setEquipment((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
    contentChanged();
  }

  function switchMode(next: InquiryMode) {
    setMode(next);
    setErrors({});
    contentChanged();
    const params = new URLSearchParams(window.location.search);
    params.set("interest", next);
    if (next !== "equipment") params.delete("category");
    const search = params.toString();
    window.history.replaceState(null, "", search ? `?${search}` : window.location.pathname);
  }

  function startNewInquiry() {
    setProject(EMPTY_PROJECT);
    setEquipment((current) => ({ ...EMPTY_EQUIPMENT, category: current.category }));
    setErrors({});
    contentChanged();
  }

  function focusFirstError(nextErrors: InquiryFieldErrors) {
    const first = FIELD_ORDER.find((key) => nextErrors[key]);
    if (first) formRef.current?.querySelector<HTMLElement>(`#${fieldId(first)}`)?.focus();
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (outcome?.status === "accepted") return;
    setOutcome(null);
    // Attachments are disabled in this phase; no document is validated or sent.
    const nextErrors =
      mode === "project" ? validateProjectInquiry(project) : validateEquipmentInquiry(equipment, null);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      focusFirstError(nextErrors);
      return;
    }
    if (!live) {
      setOutcome({ status: "unavailable" });
      return;
    }
    if (!turnstileToken) {
      setOutcome({ status: "verification_failed" });
      return;
    }

    const idempotencyKey = attemptRef.current.begin();
    if (!idempotencyKey) return;
    setSubmitting(true);
    const attempt = { turnstileToken, idempotencyKey, honeypot };
    try {
      const result =
        mode === "project"
          ? await submitInquiry({ mode: "project", fields: project }, attempt)
          : await submitInquiry({ mode: "equipment", fields: equipment }, attempt);
      setOutcome(result);
      if (result.status === "invalid") {
        setErrors(result.errors);
        focusFirstError(result.errors);
      }
    } finally {
      attemptRef.current.finish();
      setSubmitting(false);
      // Turnstile tokens are single-use; request a fresh one for any further attempt.
      setTurnstileReset((value) => value + 1);
    }
  }

  const messages: Partial<Record<InquiryFieldName, string>> = {};
  for (const key of FIELD_ORDER) {
    const error = errors[key];
    if (error) messages[key] = inquiryFieldErrorMessage(mode, key, error, messageLocale);
  }
  const errorEntries = FIELD_ORDER.filter((key) => messages[key]).map((key) => ({
    id: fieldId(key),
    message: messages[key],
  }));
  const accepted = outcome?.status === "accepted";
  const outcomeMessage = outcome ? inquiryOutcomeMessage(outcome, messageLocale) : null;
  const submitLabel = submitting
    ? inquiryStateText.submitting
    : live
      ? inquiryStateText.submitLive
      : inquiryStateText.submitPreview;

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      aria-labelledby="inquiry-title"
      className="m-0 flex flex-col gap-[30px]"
      noValidate
      aria-busy={submitting || undefined}
    >
      <div className="flex flex-wrap items-end justify-between gap-5">
        <h2 id="inquiry-title" className="nx-display m-0 nx-t-h3">
          <Emph text={title} />
        </h2>
        <fieldset className="m-0 border-0 p-0" disabled={submitting || accepted}>
          <legend className="sr-only">{text.inquiryType}</legend>
          <div className="grid grid-cols-2 gap-1 rounded-full bg-[var(--nx-sand)] p-[5px]">
            <ModeButton pressed={mode === "project"} label={text.projectInquiry} onClick={() => switchMode("project")}>
              {text.projectShort}
            </ModeButton>
            <ModeButton pressed={mode === "equipment"} label={text.equipmentInquiry} onClick={() => switchMode("equipment")}>
              {text.equipmentShort}
            </ModeButton>
          </div>
        </fieldset>
      </div>

      <div className="-mt-3 flex flex-col gap-1 text-sm leading-relaxed text-[var(--nx-muted)]">
        <p className="m-0">{live ? formNoteLive : formNote}</p>
        <p className="m-0">
          {legendBefore}
          <span aria-hidden="true" className="text-[var(--nx-accent-ink)]">*</span>
          <span className="sr-only">{text.requiredMarkSr}</span>
          {legendAfter}
        </p>
      </div>

      {rejectedCategory && mode === "equipment" ? (
        <p className="m-0 text-sm text-[var(--nx-ink)]" role="status">
          {inquiryStateText.rejectedCategory}
        </p>
      ) : null}

      {errorEntries.length > 0 ? (
        <div className="rounded-2xl border border-[#9f1239]/30 bg-[#fff1f2] p-4" role="alert">
          <p className="text-sm font-semibold text-[#9f1239]">{inquiryStateText.errorSummary}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#9f1239]">
            {errorEntries.map((entry) => (
              <li key={entry.id}>
                <a href={`#${entry.id}`} className="underline">
                  {entry.message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <fieldset
        className="m-0 grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-[18px] border-0 p-0"
        disabled={submitting || accepted}
      >
        <TextField
          markers={markers}
          id={fieldId("name")}
          label={text.fieldName}
          required
          autoComplete="name"
          value={mode === "project" ? project.name : equipment.name}
          error={messages.name}
          onChange={(value) => updateShared("name", value)}
        />
        <TextField
          markers={markers}
          id={fieldId("company")}
          label={text.fieldCompany}
          required
          autoComplete="organization"
          value={mode === "project" ? project.company : equipment.company}
          error={messages.company}
          onChange={(value) => updateShared("company", value)}
        />
        <TextField
          markers={markers}
          id={fieldId("email")}
          label={text.fieldEmail}
          required
          type="email"
          autoComplete="email"
          value={mode === "project" ? project.email : equipment.email}
          error={messages.email}
          onChange={(value) => updateShared("email", value)}
        />
        <TextField
          markers={markers}
          id={fieldId("phone")}
          label={text.fieldPhone}
          type="tel"
          autoComplete="tel"
          value={mode === "project" ? project.phone : equipment.phone}
          error={messages.phone}
          onChange={(value) => updateShared("phone", value)}
        />

        {mode === "project" ? (
          <>
            <TextField
              markers={markers}
              id={fieldId("location")}
              label={text.fieldLocation}
              required
              autoComplete="off"
              value={project.location}
              error={messages.location}
              onChange={(value) => updateProject("location", value)}
            />
            <TextAreaField
              markers={markers}
              id={fieldId("description")}
              label={text.fieldProjectDescription}
              hint={text.projectDescriptionHint}
              required
              value={project.description}
              error={messages.description}
              onChange={(value) => updateProject("description", value)}
            />
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2">
            <label className={LABEL_CLASS} htmlFor={fieldId("category")}>
              <span>
                {text.fieldCategory}
                <RequiredMark srText={text.requiredSr} />
              </span>
              <select
                id={fieldId("category")}
                name="category"
                className={inputClass(Boolean(errors.category))}
                value={equipment.category}
                aria-invalid={errors.category ? true : undefined}
                aria-describedby={errors.category ? errorId("category") : undefined}
                onChange={(event) => {
                  setRejectedCategory(false);
                  updateEquipment("category", event.target.value);
                }}
              >
                <option value="">{text.selectCategory}</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.title}
                  </option>
                ))}
              </select>
            </label>
            <FieldError id={errorId("category")} message={messages.category} />
            </div>
            <TextAreaField
              markers={markers}
              id={fieldId("description")}
              label={text.fieldEquipmentDescription}
              hint={text.equipmentDescriptionHint}
              required
              value={equipment.description}
              error={messages.description}
              onChange={(value) => updateEquipment("description", value)}
            />
            <TextField
              markers={markers}
              id={fieldId("quantity")}
              label={text.fieldQuantity}
              required
              value={equipment.quantity}
              error={messages.quantity}
              onChange={(value) => updateEquipment("quantity", value)}
            />
            <TextField
              markers={markers}
              id={fieldId("destination")}
              label={text.fieldDestination}
              required
              value={equipment.destination}
              error={messages.destination}
              onChange={(value) => updateEquipment("destination", value)}
            />
            <TextField
              markers={markers}
              id={fieldId("timeline")}
              label={text.fieldTimeline}
              required
              value={equipment.timeline}
              error={messages.timeline}
              onChange={(value) => updateEquipment("timeline", value)}
            />
            <div className="col-span-full flex flex-col gap-2">
              <label className={LABEL_CLASS} htmlFor={fieldId("document")}>
                <span>
                  {text.fieldDocument}
                  <span className="ml-2 font-normal text-[var(--nx-muted)]">{text.documentUnavailable}</span>
                </span>
                <input
                  id={fieldId("document")}
                  name="document"
                  type="file"
                  disabled
                  className="block w-full cursor-not-allowed text-sm text-[var(--nx-muted)]"
                  aria-describedby="document-note"
                />
              </label>
              <p id="document-note" className="m-0 text-sm text-[var(--nx-muted)]">
                {text.documentNote}
              </p>
            </div>
          </>
        )}
      </fieldset>

      {/* Honeypot: hidden from people and assistive technology; automated fillers tend to complete it. */}
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="inquiry-website">
          Website
          <input
            id="inquiry-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>
      </div>

      {live && !accepted ? (
        turnstileUnavailable ? (
          <p className="m-0 text-sm text-[#9f1239]" role="status">
            {inquiryStateText.verificationUnavailable}
          </p>
        ) : (
          <TurnstileWidget
            siteKey={publicInquiryConfig.turnstileSiteKey}
            language={locale === "zh-hk" ? "zh-tw" : "en"}
            resetSignal={turnstileReset}
            onToken={setTurnstileToken}
            onLoadError={() => setTurnstileUnavailable(true)}
          />
        )
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--nx-line)] pt-[22px]">
        <span className="text-sm text-[var(--nx-muted)]">
          {live && !accepted && !submitting && !turnstileToken && !turnstileUnavailable
            ? inquiryStateText.verificationPending
            : null}
        </span>
        {accepted ? (
          <button type="button" onClick={startNewInquiry} className="nx-btn nx-btn--outline">
            {inquiryStateText.startNew}
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting || (live && (!turnstileToken || turnstileUnavailable))}
            className="nx-btn nx-btn--accent nx-btn--lg border-0 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitLabel} <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
      <div aria-live="polite" role="status">
        {outcomeMessage ? (
          <p className={`m-0 rounded-2xl border p-4 text-sm font-medium ${OUTCOME_CLASS[outcomeMessage.tone]}`}>
            {outcomeMessage.text}
          </p>
        ) : null}
      </div>
    </form>
  );
}

type FieldMarkers = { required: string; optional: string };

function fieldId(name: string) {
  return `inquiry-${name}`;
}

function errorId(name: string) {
  return `inquiry-${name}-error`;
}

function describedBy(name: string, error: string | undefined, hintId?: string) {
  const ids = [hintId, error ? errorId(name) : ""].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

/** Label wraps its control: text on top, field below. */
const LABEL_CLASS = "flex flex-col gap-2 text-sm font-semibold text-[var(--nx-ink)]";

// `aria-invalid` drives the error styling in `.nx-field`.
function inputClass(_invalid: boolean) {
  return "nx-field font-normal";
}

function RequiredMark({ srText }: { srText: string }) {
  return (
    <>
      <span aria-hidden="true" className="text-[var(--nx-accent-ink)]"> *</span>
      <span className="sr-only">{srText}</span>
    </>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="m-0 text-sm text-[#9f1239]">
      {message}
    </p>
  );
}

function ModeButton({
  pressed,
  label,
  onClick,
  children,
}: {
  pressed: boolean;
  /** Full accessible name (the visible text is the short form). */
  label: string;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      aria-label={label}
      onClick={onClick}
      className={`nx-focus min-h-[46px] cursor-pointer rounded-full border-0 px-[22px] text-sm ${
        pressed ? "bg-[var(--nx-navy)] font-semibold text-white" : "bg-transparent font-medium text-[var(--nx-ink)]"
      }`}
    >
      {children}
    </button>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  autoComplete,
  markers,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  markers: FieldMarkers;
}) {
  const name = id.replace("inquiry-", "");
  return (
    <div className="flex flex-col gap-2">
      <label className={LABEL_CLASS} htmlFor={id}>
        <span>
          {label}
          {required ? (
            <RequiredMark srText={markers.required} />
          ) : (
            <span className="ml-1.5 font-normal text-[var(--nx-muted)]">{markers.optional}</span>
          )}
        </span>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId(name) : undefined}
          className={inputClass(Boolean(error))}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
      <FieldError id={errorId(name)} message={error} />
    </div>
  );
}

function TextAreaField({
  id,
  label,
  value,
  onChange,
  error,
  required,
  hint,
  markers,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  hint?: string;
  markers: FieldMarkers;
}) {
  const name = id.replace("inquiry-", "");
  return (
    <div className="col-span-full flex flex-col gap-2">
      <label className={LABEL_CLASS} htmlFor={id}>
        <span>
          {label}
          {required ? <RequiredMark srText={markers.required} /> : null}
        </span>
        {hint ? (
          <span id={`${id}-hint`} className="-mt-1 block text-sm font-normal leading-relaxed text-[var(--nx-muted)]">
            {hint}
          </span>
        ) : null}
        <textarea
          id={id}
          name={name}
          rows={5}
          value={value}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(name, error, hint ? `${id}-hint` : undefined)}
          className={inputClass(Boolean(error))}
          onChange={(event) => onChange(event.target.value)}
        />
      </label>
      <FieldError id={errorId(name)} message={error} />
    </div>
  );
}
