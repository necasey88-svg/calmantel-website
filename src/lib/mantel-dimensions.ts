import type { MantelDimensions } from "./mantel-products-data";

// Physical dimensions extracted from the CAD drawings in /public/cad, keyed by product slug.
// All values in inches. openingWidths/overallWidths list the offered size options.
// Opening width = firebox size + ~1" (a 36" firebox uses a ~37" opening).
// `cadVerified: false` = machine-extracted, awaiting human confirmation against the CAD.
//
// EXTRACTION PROGRESS: 4 / ~60 CADs done. Batches added alphabetically.

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
};
