"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  eventName:
    | "call_click"
    | "whatsapp_click"
    | "booking_form_start"
    | "booking_form_submit"
    | "service_view"
    | "blog_cta_click"
    | "map_click",
  payload: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("lifecare-analytics", {
      detail: { eventName, payload },
    }),
  );

  window.gtag?.("event", eventName, payload);
}
