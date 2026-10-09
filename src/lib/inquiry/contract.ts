/**
 * Requirements-document contract.
 * Storage and retention are not configured. Callers must not upload the file.
 * Attachments are disabled in the current phase; the 10 MB specification is kept
 * for the future secure-attachment phase.
 */

export const requirementsDocumentContract = {
  maxBytes: 10 * 1024 * 1024,
  extensions: ["pdf", "docx"] as const,
  mediaTypes: [
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ] as const,
  storage: "none",
  retention: "not configured",
} as const;

export type RequirementsDocumentMeta = {
  fileName: string;
  byteLength: number;
  mediaType: string;
};

export type RequirementsDocumentErrorCode = "documentType" | "documentEmpty" | "documentTooLarge";

/** Returns a language-neutral error code; display text lives in `messages.ts`. */
export function requirementsDocumentError(
  meta: RequirementsDocumentMeta | null,
): RequirementsDocumentErrorCode | null {
  if (!meta) return null;
  const name = meta.fileName.trim();
  const extension = name.includes(".") ? name.split(".").pop()?.toLowerCase() ?? "" : "";
  const extensionOk = requirementsDocumentContract.extensions.some((item) => item === extension);
  const typeOk =
    meta.mediaType === "" ||
    requirementsDocumentContract.mediaTypes.some((item) => item === meta.mediaType);
  if (!extensionOk || !typeOk) return "documentType";
  if (meta.byteLength <= 0) return "documentEmpty";
  if (meta.byteLength > requirementsDocumentContract.maxBytes) return "documentTooLarge";
  return null;
}
