import type { Locale } from "../../i18n/config";
import type { InquiryDeliveryResult } from "./submit";
import type { InquiryFieldError, InquiryFieldName, InquiryMode } from "./validate";

/**
 * Display text for inquiry validation codes and submission outcomes.
 * Validation rules stay in `validate.ts` and the server returns only codes, so
 * a locale is added by writing one more catalogue. Each catalogue composes
 * whole sentences itself (no shared English fragments), because word order
 * and capitalisation differ between languages such as English and zh-HK.
 */

/** BCP 47 tags of the supported catalogues. */
export type InquiryLocale = "en" | "zh-HK";

/** Maps a site route locale (`/zh-hk`) to its message catalogue. */
export function inquiryLocaleFor(locale: Locale): InquiryLocale {
  return locale === "zh-hk" ? "zh-HK" : "en";
}

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

const ZH_HK_FIELD_NOUN: Record<InquiryMode, Partial<Record<InquiryFieldName, string>>> = {
  project: {
    name: "姓名",
    company: "公司名稱",
    email: "電郵地址",
    location: "項目地點",
    description: "項目描述",
  },
  equipment: {
    name: "姓名",
    company: "公司名稱",
    email: "電郵地址",
    description: "設備描述",
    quantity: "數量",
    destination: "交付目的地",
    timeline: "所需交付時間",
  },
};

/** Traditional Chinese (Hong Kong). Draft pending native-speaker review. */
const zhHK: InquiryMessageCatalogue = {
  fieldError(mode, field, error) {
    const noun = ZH_HK_FIELD_NOUN[mode][field] ?? "此欄位";
    switch (error.code) {
      case "required":
        return `請輸入${noun}。`;
      case "tooLong":
        return `${noun}不得超過 ${error.max ?? ""} 個字元。`;
      case "singleLine":
        return `${noun}必須在同一行內。`;
      case "controlCharacters":
        return `${noun}包含不支援的控制字元。`;
      case "invalidEmail":
        return "請輸入有效的電郵地址。";
      case "invalidPhone":
        return "電話號碼只可包含數字、空格及 + ( ) . -，或留空。";
      case "unknownCategory":
        return "請選擇設備類別。";
      case "documentType":
        return "只可附加 PDF 或 DOCX 檔案。此檔案未有上載。";
      case "documentEmpty":
        return "所選檔案為空白，未有上載。";
      case "documentTooLarge":
        return "檔案大於 10 MB，未有上載。";
    }
  },
  outcome(result) {
    switch (result.status) {
      case "unavailable":
        return "網上提交功能暫未開放，並未傳送任何資料。如需立即聯絡 ENERGEX，請按本頁所示的通訊地址致函。";
      case "accepted":
        return `您的查詢已傳送至 ENERGEX 團隊。參考編號：${result.reference}。我們的電郵服務供應商已接收此查詢以作傳送，但這並不代表查詢已被閱讀。請保留參考編號以便日後跟進。`;
      case "invalid":
        return "查詢未有傳送。請更正標示的欄位後再試。";
      case "rate_limited": {
        const minutes = Math.max(1, Math.ceil(result.retryAfterSeconds / 60));
        return `由於嘗試次數過多，查詢未有傳送。請等候約 ${minutes} 分鐘後再試。`;
      }
      case "verification_failed":
        return "由於未能完成安全驗證，查詢未有傳送。請完成驗證後再試。";
      case "failed":
        return "查詢未有傳送。服務目前未能接收查詢，請稍後再試。";
      case "uncertain":
        return "我們未能確認您的查詢是否已傳送。請在不更改資料的情況下重試：24 小時內以相同內容重試會沿用相同的參考編號，因此會被識別為同一查詢，而不會重複傳送。";
    }
  },
  state: {
    submitting: "正在傳送查詢…",
    submitLive: "傳送查詢",
    submitPreview: "預覽查詢",
    verificationPending: "請完成安全驗證以傳送查詢。",
    verificationUnavailable: "安全驗證未能載入，因此暫時無法傳送查詢。並未傳送任何資料。",
    startNew: "開始新的查詢",
    errorSummary: "查詢資料尚未完整。",
    rejectedCategory: "連結中的類別並非已公佈的設備類別，因此未有選取任何類別。",
  },
};

export const inquiryMessages: Record<InquiryLocale, InquiryMessageCatalogue> = { en, "zh-HK": zhHK };

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
