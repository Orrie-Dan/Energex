"use client";

import { useEffect, useRef } from "react";
import { INQUIRY_TURNSTILE_ACTION } from "../../lib/inquiry/protocol";

/**
 * Cloudflare Turnstile widget (explicit rendering). Loaded only when live
 * delivery is configured. Tokens are single-use, so the parent bumps
 * `resetSignal` after every submission attempt to obtain a fresh one.
 */

type TurnstileApi = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let scriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<TurnstileApi>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error("turnstile missing")));
    script.onerror = () => {
      scriptPromise = null;
      reject(new Error("turnstile failed to load"));
    };
    document.head.appendChild(script);
  });
  return scriptPromise;
}

export function TurnstileWidget({
  siteKey,
  resetSignal,
  onToken,
  onLoadError,
}: {
  siteKey: string;
  resetSignal: number;
  onToken: (token: string | null) => void;
  onLoadError: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  const onLoadErrorRef = useRef(onLoadError);
  onTokenRef.current = onToken;
  onLoadErrorRef.current = onLoadError;

  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then((api) => {
        if (cancelled || !containerRef.current || widgetIdRef.current) return;
        widgetIdRef.current = api.render(containerRef.current, {
          sitekey: siteKey,
          action: INQUIRY_TURNSTILE_ACTION,
          callback: (token: string) => onTokenRef.current(token),
          "expired-callback": () => onTokenRef.current(null),
          "error-callback": () => onTokenRef.current(null),
        });
      })
      .catch(() => {
        if (!cancelled) onLoadErrorRef.current();
      });
    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) window.turnstile.remove(widgetIdRef.current);
      widgetIdRef.current = null;
    };
  }, [siteKey]);

  useEffect(() => {
    if (resetSignal === 0) return;
    onTokenRef.current(null);
    if (widgetIdRef.current && window.turnstile) window.turnstile.reset(widgetIdRef.current);
  }, [resetSignal]);

  return <div ref={containerRef} className="mt-6 min-h-[65px]" />;
}
