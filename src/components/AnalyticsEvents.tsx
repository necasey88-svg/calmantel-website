"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function getLinkEvent(anchor: HTMLAnchorElement) {
  const href = anchor.getAttribute("href") || "";
  const label = anchor.textContent?.trim().replace(/\s+/g, " ").slice(0, 120) || href;

  if (href.startsWith("tel:")) {
    return {
      name: "phone_click",
      params: {
        phone_number: href.replace("tel:", ""),
        link_text: label,
      },
    };
  }

  if (href.includes("bookings.cloud.microsoft") || href.includes("outlook.office.com/book")) {
    return {
      name: "booking_click",
      params: {
        destination: href,
        link_text: label,
      },
    };
  }

  if (href === "/booking") {
    return {
      name: "booking_page_click",
      params: {
        destination: href,
        link_text: label,
      },
    };
  }

  if (href === "/estimate") {
    return {
      name: "estimate_link_click",
      params: {
        destination: href,
        link_text: label,
      },
    };
  }

  if (href === "/instant-estimate") {
    return {
      name: "instant_pricing_click",
      params: {
        destination: href,
        link_text: label,
      },
    };
  }

  return null;
}

export default function AnalyticsEvents() {
  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const linkEvent = getLinkEvent(anchor);
      if (!linkEvent) return;

      trackEvent(linkEvent.name, {
        ...linkEvent.params,
        page_path: window.location.pathname,
      });
    }

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return null;
}
