type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: GtagParams) => void;
  }
}

export function trackEvent(eventName: string, params: GtagParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackLeadConversion(params: GtagParams = {}) {
  trackEvent("generate_lead", params);
  trackEvent("qualify_lead", params);
  trackEvent("converted_lead", params);
}
