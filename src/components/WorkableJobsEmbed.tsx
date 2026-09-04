"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    whr?: (target: Document) => { ready: (callback: () => void) => void };
    whr_embed?: (
      accountId: number,
      options: { base: string; detail: string; zoom: string }
    ) => void;
  }
}

const WORKABLE_ACCOUNT_ID = 737265;
const WORKABLE_EMBED_OPTIONS = { base: "locations", detail: "titles", zoom: "city" };

export default function WorkableJobsEmbed() {
  const embeddedRef = useRef(false);

  function tryEmbed() {
    if (embeddedRef.current) return;
    if (typeof window === "undefined" || !window.whr || !window.whr_embed) return;

    embeddedRef.current = true;
    window.whr(document).ready(() => {
      window.whr_embed?.(WORKABLE_ACCOUNT_ID, WORKABLE_EMBED_OPTIONS);
    });
  }

  useEffect(() => {
    tryEmbed();
  }, []);

  return (
    <>
      <Script
        src="https://www.workable.com/assets/embed.js"
        strategy="afterInteractive"
        onReady={tryEmbed}
      />
      <div id="whr_embed_hook" />
    </>
  );
}
