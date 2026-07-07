import type { MantelDimensions } from "./mantel-products-data";

// Physical dimensions extracted from the CAD drawings in /public/cad, keyed by product slug.
// All values in inches. openingWidths/overallWidths list the offered size options.
// Opening width = firebox size + ~1" (a 36" firebox uses a ~37" opening).
// `cadVerified: false` = machine-extracted, awaiting human confirmation against the CAD.
//
// EXTRACTION PROGRESS: 45 / ~60 CADs done. Batches added alphabetically.
// (cobar, coonawarra, macquarie, monash are overmantels — read but excluded,
//  no firebox opening.)
//
// NOTE ON WIDTHS: overallWidths = the SHELF/body width (the widest part of the
// mantel at wall height). The wider "base" number on some CADs is the HEARTH
// (a floor slab in front) — it does not constrain window-to-window wall space,
// so it is intentionally NOT used here. Cap-only pieces (e.g. Camberwell) have
// no firebox opening and are excluded from the fit finder.

export const mantelDimensions: Record<string, MantelDimensions> = {
  // ── Batch 1 (awaiting verification) ──────────────────────────────────────
  belmont: {
    openingWidths: [38, 43], // NOTE: CAD reads 38" not 37⅛" — verify
    openingHeight: 40.875,
    overallWidths: [61.5, 66.5],
    overallHeight: 58.25,
    shelfDepth: 8.75,
    cadVerified: false,
  },
  barossa: {
    openingWidths: [35.125, 37.125, 43.125],
    openingHeight: 40,
    overallWidths: [58.375, 60.375, 66.375],
    overallHeight: 55.25,
    shelfDepth: 7.5,
    cadVerified: false,
  },
  bendigo: {
    openingWidths: [38, 43], // NOTE: CAD reads 38" not 37⅛" — verify
    openingHeight: 37.25,
    overallWidths: [67.5, 72.5],
    overallHeight: 61.5,
    shelfDepth: 8.125,
    cadVerified: false,
  },
  beltana: {
    openingWidths: [54.75], // single large-format size
    openingHeight: 42.375,
    overallWidths: [75.25],
    overallHeight: 59.5,
    shelfDepth: 10.125,
    cadVerified: false,
  },

  // ── Batch 2: brighton → cazadero (awaiting verification) ─────────────────
  brighton: {
    openingWidths: [37.25, 43.25],
    openingHeight: 37,
    overallWidths: [53.25, 59.25], // shelf; hearth reads 60/66
    overallHeight: 47,
    shelfDepth: 3, // slim cap
    cadVerified: false,
  },
  "broken-hill": {
    openingWidths: [35], // single size
    openingHeight: 40.25,
    overallWidths: [62.5], // shelf; hearth reads 60/66 — VERIFY
    overallHeight: 59.75,
    shelfDepth: 14.25,
    cadVerified: false,
  },
  cairns: {
    openingWidths: [48], // single, arched (10¼ + 48 + 10¼)
    openingHeight: 40.125, // to arch spring
    overallWidths: [73], // shelf; hearth reads 88
    overallHeight: 67.5,
    shelfDepth: 14,
    cadVerified: false,
  },
  cambridge: {
    openingWidths: [52.25], // single large-format (Kings Cross)
    openingHeight: 47.25,
    overallWidths: [87.5], // shelf; hearth reads 96
    overallHeight: 79.375,
    shelfDepth: 16.75,
    cadVerified: false,
  },
  cannes: {
    openingWidths: [44.75], // single size
    openingHeight: 41,
    overallWidths: [72.125], // shelf; hearth reads 72
    overallHeight: 53.5,
    shelfDepth: 9.75,
    cadVerified: false,
  },
  casden: {
    openingWidths: [35.5], // single; flat frame surround
    openingHeight: 41.75,
    overallWidths: [48], // outer frame; hearth reads 60/66
    overallHeight: 50,
    shelfDepth: 4.5,
    cadVerified: false,
  },
  cassis: {
    openingWidths: [44, 50], // arched, two sizes
    openingHeight: 42.75, // to spring, smaller size (larger = 47½) — VERIFY
    overallWidths: [76.5, 81.875], // shelf; hearth reads 80/88
    overallHeight: 81, // smaller size (larger = 89¼)
    shelfDepth: 12.375,
    cadVerified: false,
  },
  castellina: {
    openingWidths: [38.125], // single, arched
    openingHeight: 65.125, // interior arch peak (side height lower) — VERIFY
    overallWidths: [65.25], // shelf; hearth reads 72
    overallHeight: 83.125,
    shelfDepth: 10.125,
    cadVerified: false,
  },
  cazadero: {
    openingWidths: [39], // single; flat frame surround
    openingHeight: 45.75,
    overallWidths: [66.25], // shelf; hearth reads 66
    overallHeight: 63,
    shelfDepth: 10.25,
    cadVerified: false,
  },

  // ── Batch 3: ceduna → … (awaiting verification) ──────────────────────────
  ceduna: {
    openingWidths: [38.125, 44.25], // two sizes
    openingHeight: 36,
    overallWidths: [57.25, 63.375], // shelf; hearth reads 60/66
    overallHeight: 54.25,
    shelfDepth: 5.5,
    cadVerified: false,
  },
  chateau: {
    openingWidths: [38.625, 43.5], // arched, two sizes
    openingHeight: 29, // to arch spring; peak +17¾ — VERIFY
    overallWidths: [65.75, 73.625], // shelf; hearth reads 72/80
    overallHeight: 52.375,
    shelfDepth: 9.375,
    cadVerified: false,
  },
  clare: {
    openingWidths: [54.5], // single, arched
    openingHeight: 37.25, // to arch spring; peak +11¾ — VERIFY
    overallWidths: [73], // shelf; hearth reads 80
    overallHeight: 51,
    shelfDepth: 12.25,
    cadVerified: false,
  },
  clarendon: {
    openingWidths: [38, 44], // two sizes; flat ornate surround
    openingHeight: 45.75,
    overallWidths: [57.5, 63.5], // shelf; hearth reads 66/72
    overallHeight: 54.25,
    shelfDepth: 4.25,
    cadVerified: false,
  },

  // ── Batch 4: classique → coober-pedy (awaiting verification) ─────────────
  // (cobar + coonawarra are OVERMANTELS — no firebox opening — excluded.)
  classique: {
    openingWidths: [54.5], // single, arched (9⅞ + 54½ + 9⅞)
    openingHeight: 43.125,
    overallWidths: [81], // shelf; hearth reads 80
    overallHeight: 65.625,
    shelfDepth: 9.5,
    cadVerified: false,
  },
  "coober-pedy": {
    openingWidths: [50], // single width; two heights offered
    openingHeight: 40, // smaller size (larger = 48) — VERIFY
    overallWidths: [80.75], // shelf; hearth reads 90
    overallHeight: 61.5, // smaller size (larger = 69½)
    shelfDepth: 13.5,
    cadVerified: false,
  },

  // ── Batch 5: corvallis → dominique (awaiting verification) ───────────────
  // (covington-line.pdf = a second Gold Coast Covington drawing not tied to any
  //  product slug — the Covington product uses covington.pdf; skipped.)
  corvallis: {
    openingWidths: [33.25, 39.25, 41.25], // three sizes
    openingHeight: 36, // smaller (larger = 40)
    overallWidths: [56.125, 62.125, 64.125], // shelf; hearth reads 60/66
    overallHeight: 48.25, // smaller (larger = 52¼)
    shelfDepth: 7,
    cadVerified: false,
  },
  covington: {
    openingWidths: [37, 43], // two widths; three heights offered (Opera House)
    openingHeight: 26, // smallest (26/32/48)
    overallWidths: [66, 72], // shelf; hearth reads 66/72
    overallHeight: 51.5, // smallest (51½/57½/73½)
    shelfDepth: 8,
    cadVerified: false,
  },
  dominique: {
    openingWidths: [42.5, 48.375, 56], // three sizes
    openingHeight: 41.125,
    overallWidths: [73.75, 79.625, 87.5], // shelf; hearth reads 80/88/96
    overallHeight: 62.75, // (62¾/62¾/63)
    shelfDepth: 12,
    cadVerified: false,
  },

  // ── Batch 6: eudunda → hindmarsh (awaiting verification) ─────────────────
  // (gambier-line.pdf = a second Ayers Rock "Gambier" drawing not tied to any
  //  product slug — the Gambier product uses gambier.pdf (Opera House); skipped.)
  eudunda: {
    openingWidths: [36.625, 42.625], // two sizes (Opera House columns)
    openingHeight: 30,
    overallWidths: [61.5, 67.5], // shelf; hearth reads 72
    overallHeight: 55.25,
    shelfDepth: 7.875,
    cadVerified: false,
  },
  flinders: {
    openingWidths: [37, 43], // arched, two sizes
    openingHeight: 33, // to arch spring, smaller (larger = 42) — VERIFY
    overallWidths: [62.5, 68.5], // shelf; hearth reads 66/72
    overallHeight: 49.875, // smaller (larger = 58⅞)
    shelfDepth: 7.25,
    cadVerified: false,
  },
  gambier: {
    openingWidths: [40, 46.125], // arched, two sizes (Opera House)
    openingHeight: 40, // to arch spring — VERIFY
    overallWidths: [65.5, 71.625], // shelf; hearth reads 66/72
    overallHeight: 59.875,
    shelfDepth: 11.25,
    cadVerified: false,
  },
  gosford: {
    openingWidths: [37.25, 43.25], // two sizes
    openingHeight: 40.125,
    overallWidths: [61.375, 67.375], // shelf; hearth reads 60/66
    overallHeight: 55.375,
    shelfDepth: 8.75,
    cadVerified: false,
  },
  gundagai: {
    openingWidths: [38.25, 44.25], // two sizes
    openingHeight: 50.5,
    overallWidths: [59.5, 65.5], // shelf; hearth reads 60/66
    overallHeight: 69.25,
    shelfDepth: 7.25,
    cadVerified: false,
  },
  heritage: {
    openingWidths: [44.625], // single (Opera House fluted columns)
    openingHeight: 40,
    overallWidths: [73.625], // shelf; hearth reads 72
    overallHeight: 60.625,
    shelfDepth: 9,
    cadVerified: false,
  },
  hindmarsh: {
    openingWidths: [38], // single, Tudor arch
    openingHeight: 38, // side height to spring; arch peak +13⅛ — VERIFY
    overallWidths: [67.625], // shelf; hearth reads 72
    overallHeight: 60.625,
    shelfDepth: 8.375,
    cadVerified: false,
  },

  // ── Batch 7: kensington → nullarbor (awaiting verification) ──────────────
  // (macquarie + monash are OVERMANTELS — no firebox opening — excluded.
  //  manly-line.pdf / manly-no-peds.pdf = alternate Manly drawings not tied to
  //  any product slug — the Manly product uses manly.pdf; skipped.)
  kensington: {
    openingWidths: [37, 43], // two sizes
    openingHeight: 40, // smaller (larger = 48)
    overallWidths: [60.625, 66.625], // shelf; hearth reads 60/66
    overallHeight: 59.125, // smaller (larger = 67⅛)
    shelfDepth: 6.875,
    cadVerified: false,
  },
  koonunga: {
    openingWidths: [38, 43.125, 50], // arched, three sizes
    openingHeight: 43.375, // to arch spring — VERIFY
    overallWidths: [70.5, 75.5, 84.125], // shelf; hearth reads 72/80
    overallHeight: 69.5, // (69½/69¾)
    shelfDepth: 11.125, // side reads 11⅛/12⅛/11¾
    cadVerified: false,
  },
  lancelot: {
    openingWidths: [36.125, 42.125, 44.125], // three sizes
    openingHeight: 35.75, // smaller (larger = 40)
    overallWidths: [58.125, 64.125, 66.125], // shelf; hearth reads 60/66
    overallHeight: 47.875, // smaller (larger = 52⅛)
    shelfDepth: 8,
    cadVerified: false,
  },
  manly: {
    openingWidths: [37.875, 44.625], // two sizes (Gold Coast)
    openingHeight: 24, // smaller — unusually short; larger = 40 — VERIFY
    overallWidths: [65.5, 72.25], // shelf; hearth reads 66/72
    overallHeight: 43.625, // smaller (larger = 59⅝)
    shelfDepth: 8,
    cadVerified: false,
  },
  mannix: {
    openingWidths: [33.125, 37.125, 43.25], // three sizes
    openingHeight: 40, // smaller (larger = 48)
    overallWidths: [56.125, 60.125, 66.25], // shelf; hearth reads 60/66/72
    overallHeight: 53.25, // smaller (larger = 61¼)
    shelfDepth: 6.75,
    cadVerified: false,
  },
  mingary: {
    openingWidths: [38.375, 44.375], // two sizes; slim frame surround
    openingHeight: 40.125,
    overallWidths: [54.375, 60.375], // shelf; hearth reads 60/66
    overallHeight: 54.375,
    shelfDepth: 3.25, // slim frame
    cadVerified: false,
  },
  mornington: {
    openingWidths: [48.625], // single (Kings Cross)
    openingHeight: 48,
    overallWidths: [72], // shelf; hearth reads 72
    overallHeight: 61.375,
    shelfDepth: 10,
    cadVerified: false,
  },
  nullarbor: {
    openingWidths: [42.25], // single; flat frame surround
    openingHeight: 36,
    overallWidths: [67.25], // shelf & hearth both 67¼
    overallHeight: 56.25,
    shelfDepth: 3, // flat frame
    cadVerified: false,
  },

  // ── Batch 8: onkaparinga → queensland (awaiting verification) ─────────────
  onkaparinga: {
    openingWidths: [38.125, 44.25], // two sizes; slim frame surround (Tasmania)
    openingHeight: 36,
    overallWidths: [50.125, 56.25], // shelf; hearth reads 60/66
    overallHeight: 50,
    shelfDepth: 3.75, // slim frame
    cadVerified: false,
  },
  paddington: {
    openingWidths: [38.375, 44.375], // two sizes; flat frame surround (Southern Cross)
    openingHeight: 40.125,
    overallWidths: [60.25, 66.25], // shelf; hearth reads 60/66
    overallHeight: 54.375,
    shelfDepth: 3.25, // slim frame
    cadVerified: false,
  },
  padthaway: {
    openingWidths: [41.25, 47.25, 55.25], // three sizes (Ayers Rock)
    openingHeight: 45.75,
    overallWidths: [70.25, 76.25, 84.25], // shelf; hearth reads 72/80/88
    overallHeight: 62.5,
    shelfDepth: 12.25, // side reads 8
    cadVerified: false,
  },
  parliament: {
    openingWidths: [50], // single, corbels (Ayers Rock)
    openingHeight: 40.25,
    overallWidths: [82.25], // shelf; hearth reads 88
    overallHeight: 63.5,
    shelfDepth: 10.875,
    cadVerified: false,
  },
  parramatta: {
    openingWidths: [43.5], // single opening; hearth offered 66/72
    openingHeight: 28.25, // unusually short — VERIFY
    overallWidths: [64.75], // shelf; hearth reads 66/72
    overallHeight: 57.5,
    shelfDepth: 11.375,
    cadVerified: false,
  },
  penfold: {
    openingWidths: [38, 44], // two sizes; ornate flat surround
    openingHeight: 36,
    overallWidths: [67.5, 73.5], // shelf; hearth reads 66/72
    overallHeight: 60.25,
    shelfDepth: 8.25,
    cadVerified: false,
  },
  pitcairn: {
    openingWidths: [37.125, 43.125], // two sizes (Southern Cross)
    openingHeight: 34.25, // smaller (larger = 40¼)
    overallWidths: [60.625, 66.625], // shelf; hearth reads 66/72
    overallHeight: 51, // smaller (larger = 57)
    shelfDepth: 8.75,
    cadVerified: false,
  },
  queensland: {
    openingWidths: [43], // single; stepped frame surround (Tasmania)
    openingHeight: 37.25,
    overallWidths: [67], // shelf; hearth reads 72
    overallHeight: 51.25,
    shelfDepth: 5.5,
    cadVerified: false,
  },
};
