import type { MantelDimensions } from "./mantel-products-data";

// Physical dimensions extracted from the CAD drawings in /public/cad, keyed by product slug.
// All values in inches. openingWidths/overallWidths list the offered size options.
// Opening width = firebox size + ~1" (a 36" firebox uses a ~37" opening).
// `cadVerified: false` = machine-extracted, awaiting human confirmation against the CAD.
//
// EXTRACTION PROGRESS: 13 / ~60 CADs done. Batches added alphabetically.
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
};
