"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type LeadConversionTrackerProps = {
  leadType: string;
};

export default function LeadConversionTracker({ leadType }: LeadConversionTrackerProps) {
  useEffect(() => {
    const storageKey = `lead-conversion:${window.location.pathname}:${leadType}`;
    if (window.sessionStorage.getItem(storageKey)) return;

    trackEvent("generate_lead", {
      lead_type: leadType,
      page_path: window.location.pathname,
    });
    trackEvent("qualify_lead", {
      lead_type: leadType,
      page_path: window.location.pathname,
    });
    window.sessionStorage.setItem(storageKey, "1");
  }, [leadType]);

  return null;
}
