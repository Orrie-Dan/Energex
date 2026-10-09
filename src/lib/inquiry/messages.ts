import type { InquiryDeliveryResult } from "./submit";
import type { InquiryFieldError, InquiryFieldName, InquiryMode } from "./validate";

/**
 * Display text for inquiry validation codes and submission outcomes.
 * Validation rules stay in `validate.ts` and the server returns only codes, so
 * a locale is added by writing one more catalogue. Each catalogue composes
 * whole sentences itself (no shared English fragments), because word order
 * and capitalisation differ between languages such as English and zh-HK.
 */

/** Add "zh-HK" here together with its catalogue once translations are approved. */
export type InquiryLocale = "en";

export const DEFAULT_INQUIRY_LOCALE: InquiryLocale = "en";

export type InquiryOutcomeTone = "success" | "error" | "warning" | "info";

export type InquiryMessageCatalogue = {
  fieldError(mode: InquiryMode, field: InquiryFieldName, error: InquiryFieldError): string;
  outcome(result: InquiryDeliveryResult): string;
  state: {
    submitting: string;
    submitLive: string;
    submitPreview: string;
    verificationPending: string;
    verificationUnavailable: string;
    startNew: string;
    errorSummary: string;
    rejectedCategory: string;
  };
};

const EN_FIELD_NOUN: Record<InquiryMode, Partial<Record<InquiryFieldName, string>>> = {
  project: {
    name: "your name",
    company: "your company",
    email: "your email",
    location: "the project location",
    description: "a project description",
  },
  equipment: {
    name: "your name",
    company: "your company",
    email: "your email",
    description: "the equipment description",
    quantity: "a quantity",
    destination: "the delivery destination",
    timeline: "the required delivery timeline",
  },
};

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const en: InquiryMessageCatalogue = {
  fieldError(mode, field, error) {
    const noun = EN_FIELD_NOUN[mode][field] ?? "this field";
    switch (error.code) {
      case "required":
        return `Enter ${noun}.`;
      case "tooLong":
        return `${capitalize(noun)} must be ${error.max ?? ""} characters or fewer.`;
      case "singleLine":
        return `${capitalize(noun)} must be on one line.`;
      case "controlCharacters":
        return `${capitalize(noun)} contains unsupported control characters.`;
      case "invalidEmail":
        return "Enter a valid email address.";
      case "invalidPhone":
        return "Enter a phone number using digits, spaces, and + ( ) . - only, or leave it blank.";
      case "unknownCategory":
        return "Select an equipment category.";
      case "documentType":
        return "Only a PDF or DOCX file can be attached. This file was not uploaded.";
      case "documentEmpty":
        return "The selected file is empty. It was not uploaded.";
      case "documentTooLarge":
        return "The file is larger than 10 MB. It was not uploaded.";
    }
  },
  outcome(result) {
    switch (result.status) {
      case "unavailable":
        return "Online submission is not available yet. Nothing was sent. To contact ENERGEX now, write to the correspondence address shown on this page.";
      case "accepted":
        return `Your inquiry was sent to the ENERGEX team. Reference ${result.reference}. Our email provider accepted it for delivery; this does not confirm it has been read. Keep the reference for any follow-up.`;
      case "invalid":
        return "The inquiry was not sent. Correct the highlighted fields and try again.";
      case "rate_limited": {
        const minutes = Math.max(1, Math.ceil(result.retryAfterSeconds / 60));
        return `The inquiry was not sent because there were too many attempts. Wait about ${minutes} minute${minutes === 1 ? "" : "s"} and try again.`;
      }
      case "verification_failed":
        return "The inquiry was not sent because the security check did not complete. Complete the check and try again.";
      case "failed":
        return "The inquiry was not sent. The service could not accept it right now. Please try again later.";
      case "uncertain":
        return "We could not confirm whether your inquiry was sent. Retry without changing your details: an unchanged retry within 24 hours reuses the same reference, so it can be recognised as the same inquiry rather than sent again.";
    }
  },
  state: {
    submitting: "Sending inquiry…",
    submitLive: "Send inquiry",
    submitPreview: "Preview inquiry",
    verificationPending: "Complete the security check to send your inquiry.",
    verificationUnavailable:
      "The security check could not load, so the inquiry cannot be sent right now. Nothing was sent.",
    startNew: "Start a new inquiry",
    errorSummary: "The inquiry is not complete.",
    rejectedCategory: "The category in the link is not a published equipment category, so none was selected.",
  },
};

export const inquiryMessages: Record<InquiryLocale, InquiryMessageCatalogue> = { en };

export function inquiryFieldErrorMessage(
  mode: InquiryMode,
  field: InquiryFieldName,
  error: InquiryFieldError,
  locale: InquiryLocale = DEFAULT_INQUIRY_LOCALE,
): string {
  return inquiryMessages[locale].fieldError(mode, field, error);
}

export const inquiryStateText = inquiryMessages[DEFAULT_INQUIRY_LOCALE].state;

/** Tone is presentation, not language, so it is shared by every locale. */
function outcomeTone(result: InquiryDeliveryResult): InquiryOutcomeTone {
  switch (result.status) {
    case "accepted":
      return "success";
    case "uncertain":
      return "warning";
    case "unavailable":
      return "info";
    default:
      return "error";
  }
}

/** Display text for each submission outcome. Only `accepted` claims anything was sent. */
export function inquiryOutcomeMessage(
  result: InquiryDeliveryResult,
  locale: InquiryLocale = DEFAULT_INQUIRY_LOCALE,
): { tone: InquiryOutcomeTone; text: string } {
  return { tone: outcomeTone(result), text: inquiryMessages[locale].outcome(result) };
}
