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

function readQuery(): QueryState {
  if (typeof window === "undefined") {
    return { mode: "project", category: "", rejectedCategory: false };
  }
  const params = new URLSearchParams(window.location.search);
  const interest = params.get("interest")?.trim().toLowerCase() ?? "";
  const rawCategory = params.get("category")?.trim() ?? "";
  const category = getEquipmentCategory(rawCategory);
  const rejectedCategory = rawCategory.length > 0 && !category;
  if (interest === "equipment" || (!interest && category)) {
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
  /** Localized form labels (`ui.contact`). */
  text: UiText["contact"];
  formNote: string;
  formNoteLive: string;
  /** Published categories with localized titles; slugs are the submitted values. */
  categories: readonly { slug: string; title: string }[];
};

export function ContactForm({ locale, text, formNote, formNoteLive, categories }: ContactFormProps) {
  const live = publicInquiryConfig.enabled;
  const messageLocale = inquiryLocaleFor(locale);
  const inquiryStateText = inquiryMessages[messageLocale].state;
  const markers: FieldMarkers = { required: text.requiredSr, optional: text.optional };
  // "Fields marked with {mark} are required." — the mark is rendered as a visual asterisk plus screen-reader text.
  const [legendBefore = "", legendAfter = ""] = text.requiredLegend.split("{mark}");
  const formRef = useRef<HTMLFormElement>(null);
  const [mode, setMode] = useState<InquiryMode>("project");
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
    const query = readQuery();
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
      className="rounded-lg border border-[#011836]/10 bg-white p-6 shadow-sm"
      noValidate
      aria-busy={submitting || undefined}
    >
      <p className="text-sm text-[#011836]/70">{live ? formNoteLive : formNote}</p>
      <p className="mt-2 text-sm text-[#011836]/70">
        {legendBefore}
        <span aria-hidden="true">*</span>
        <span className="sr-only">{text.requiredMarkSr}</span>
        {legendAfter}
      </p>

      <fieldset className="mt-5" disabled={submitting || accepted}>
        <legend className="text-sm font-medium text-[#011836]">{text.inquiryType}</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          <ModeButton pressed={mode === "project"} onClick={() => switchMode("project")}>
            {text.projectInquiry}
          </ModeButton>
          <ModeButton pressed={mode === "equipment"} onClick={() => switchMode("equipment")}>
            {text.equipmentInquiry}
          </ModeButton>
        </div>
      </fieldset>

      {rejectedCategory && mode === "equipment" ? (
        <p className="mt-4 text-sm text-[#011836]" role="status">
          {inquiryStateText.rejectedCategory}
        </p>
      ) : null}

      {errorEntries.length > 0 ? (
        <div className="mt-4 rounded-md border border-[#9f1239]/30 bg-[#fff1f2] p-4" role="alert">
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

      <fieldset className="mt-5 space-y-4" disabled={submitting || accepted}>
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
              required
              value={project.description}
              error={messages.description}
              onChange={(value) => updateProject("description", value)}
            />
          </>
        ) : (
          <>
            <label className="block text-sm font-medium text-[#011836]" htmlFor={fieldId("category")}>
              {text.fieldCategory}
              <RequiredMark srText={text.requiredSr} />
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
            <div>
              <label className="block text-sm font-medium text-[#011836]" htmlFor={fieldId("document")}>
                {text.fieldDocument}
                <span className="ml-2 font-normal text-[#011836]/60">{text.documentUnavailable}</span>
                <input
                  id={fieldId("document")}
                  name="document"
                  type="file"
                  disabled
                  className="mt-1 block w-full cursor-not-allowed text-sm text-[#011836]/50"
                  aria-describedby="document-note"
                />
              </label>
              <p id="document-note" className="mt-1 text-sm text-[#011836]/60">
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
          <p className="mt-6 text-sm text-[#9f1239]" role="status">
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

      {accepted ? (
        <button
          type="button"
          onClick={startNewInquiry}
          className="mt-6 rounded-md border border-[#011836]/20 px-5 py-2.5 text-sm font-semibold text-[#011836] hover:bg-[#011836]/5"
        >
          {inquiryStateText.startNew}
        </button>
      ) : (
        <button
          type="submit"
          disabled={submitting || (live && (!turnstileToken || turnstileUnavailable))}
          className="mt-6 rounded-md bg-[#f06f12] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#c4500a] disabled:opacity-60"
        >
          {submitLabel}
        </button>
      )}
      {live && !accepted && !submitting && !turnstileToken && !turnstileUnavailable ? (
        <p className="mt-2 text-sm text-[#011836]/60">{inquiryStateText.verificationPending}</p>
      ) : null}
      <div aria-live="polite" role="status">
        {outcomeMessage ? (
          <p className={`mt-4 rounded-md border p-4 text-sm font-medium ${OUTCOME_CLASS[outcomeMessage.tone]}`}>
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

function inputClass(invalid: boolean) {
  return `mt-1 w-full rounded-md border px-3 py-2 text-sm text-[#011836] ${
    invalid ? "border-[#9f1239]" : "border-[#011836]/20"
  }`;
}

function RequiredMark({ srText }: { srText: string }) {
  return (
    <>
      <span aria-hidden="true"> *</span>
      <span className="sr-only">{srText}</span>
    </>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-[#9f1239]">
      {message}
    </p>
  );
}

function ModeButton({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={`rounded-md px-3 py-2 text-sm font-semibold ${
        pressed ? "bg-[#011836] text-white" : "border border-[#011836]/20 text-[#011836]"
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
    <div>
      <label className="block text-sm font-medium text-[#011836]" htmlFor={id}>
        {label}
        {required ? <RequiredMark srText={markers.required} /> : <span className="ml-2 font-normal text-[#011836]/60">{markers.optional}</span>}
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
    <div>
      <label className="block text-sm font-medium text-[#011836]" htmlFor={id}>
        {label}
        {required ? <RequiredMark srText={markers.required} /> : null}
        {hint ? (
          <span id={`${id}-hint`} className="mt-1 block font-normal text-[#011836]/60">
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
