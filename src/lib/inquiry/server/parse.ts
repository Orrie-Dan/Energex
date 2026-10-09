import {
  EQUIPMENT_FIELD_KEYS,
  PROJECT_FIELD_KEYS,
  isIdempotencyKey,
  type InquiryRequestBody,
} from "../protocol";
import type { EquipmentInquiryFields, ProjectInquiryFields } from "../validate";

/** Generous upper bound per raw field; business limits are applied by validate.ts. */
const MAX_RAW_FIELD_LENGTH = 4000;
/** Cloudflare documents a 2048-character maximum for Turnstile tokens. */
const MAX_TOKEN_LENGTH = 2048;
const MAX_HONEYPOT_LENGTH = 200;

const TOP_LEVEL_KEYS = ["mode", "fields", "turnstileToken", "idempotencyKey", "website"] as const;

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasExactKeys(value: Record<string, unknown>, keys: readonly string[]): boolean {
  const actual = Object.keys(value);
  return actual.length === keys.length && keys.every((key) => Object.prototype.hasOwnProperty.call(value, key));
}

function readFields(value: unknown, keys: readonly string[]): Record<string, string> | null {
  if (!isPlainObject(value) || !hasExactKeys(value, keys)) return null;
  const fields: Record<string, string> = {};
  for (const key of keys) {
    const item = value[key];
    if (typeof item !== "string" || item.length > MAX_RAW_FIELD_LENGTH) return null;
    fields[key] = item;
  }
  return fields;
}

/**
 * Strict structural parse of the request body. Unknown keys (including any
 * document or file property), wrong types, and oversized values are rejected.
 * Returns null when the structure is not acceptable.
 */
export function parseInquiryRequest(value: unknown): InquiryRequestBody | null {
  if (!isPlainObject(value) || !hasExactKeys(value, TOP_LEVEL_KEYS)) return null;
  const { mode, turnstileToken, idempotencyKey, website } = value;
  if (typeof turnstileToken !== "string" || turnstileToken.length === 0 || turnstileToken.length > MAX_TOKEN_LENGTH) {
    return null;
  }
  if (!isIdempotencyKey(idempotencyKey)) return null;
  if (typeof website !== "string" || website.length > MAX_HONEYPOT_LENGTH) return null;

  if (mode === "project") {
    const fields = readFields(value.fields, PROJECT_FIELD_KEYS);
    if (!fields) return null;
    return {
      mode,
      fields: fields as ProjectInquiryFields,
      turnstileToken,
      idempotencyKey,
      website,
    };
  }
  if (mode === "equipment") {
    const fields = readFields(value.fields, EQUIPMENT_FIELD_KEYS);
    if (!fields) return null;
    return {
      mode,
      fields: fields as EquipmentInquiryFields,
      turnstileToken,
      idempotencyKey,
      website,
    };
  }
  return null;
}
