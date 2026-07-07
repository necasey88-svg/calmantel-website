import { mantelProducts, type MantelProduct } from "./mantel-products-data";
import { mantelDimensions } from "./mantel-dimensions";

// ── Fit rules (confirmed with CalMantel) ──────────────────────────────────
// • Mantel opening must be at least firebox + 1" (½" reveal each side minimum).
//   A mantel can be LARGER than the firebox — extra reveal is covered with fillers —
//   so firebox size is a FLOOR, not an exact match.
// • Overall (shelf) width must fit the available wall space — that's the CAP.
// • Precast is non-combustible: no clearance limit.
// • Wood is combustible: the shelf must clear the firebox opening per CalMantel's
//   stepped clearance schedule (height above opening → max projection).

const MIN_REVEAL_PER_SIDE = 0.5; // → opening must be ≥ firebox + 1"

// CalMantel wood-mantel clearance schedule: [height above opening (in), max projection (in)]
const CLEARANCE_STEPS: [number, number][] = [
  [8, 1.5],
  [12, 5],
  [14, 8],
  [16, 10],
  [18, 12],
];

/** Max combustible projection allowed at a given shelf height above the opening. */
export function maxProjectionAt(heightAboveOpening: number): number {
  if (heightAboveOpening < CLEARANCE_STEPS[0][0]) return 0;
  const last = CLEARANCE_STEPS[CLEARANCE_STEPS.length - 1];
  if (heightAboveOpening >= last[0]) return Infinity; // above 18" → unrestricted
  for (let i = 0; i < CLEARANCE_STEPS.length - 1; i++) {
    const [h1, p1] = CLEARANCE_STEPS[i];
    const [h2, p2] = CLEARANCE_STEPS[i + 1];
    if (heightAboveOpening >= h1 && heightAboveOpening < h2) {
      // linear interpolation between steps
      return p1 + ((p2 - p1) * (heightAboveOpening - h1)) / (h2 - h1);
    }
  }
  return last[1];
}

export type ClearanceStatus = "na" | "ok" | "verify";

export interface FitCriteria {
  fireboxWidth: number;        // firebox opening width, inches
  fireboxHeight?: number;      // firebox opening height, inches (optional — extra check)
  maxWallWidth?: number;       // available wall space, inches (omit = no restriction)
  maxOverallHeight?: number;   // ceiling / available height, inches (omit = no restriction)
  material?: "any" | "precast" | "wood";
  style?: "any" | "contemporary" | "traditional" | "transitional";
}

export interface FittingSize {
  openingWidth: number;
  overallWidth: number;
  revealPerSide: number;       // filler needed each side for this firebox
}

export interface FitResult {
  product: MantelProduct;
  fittingSizes: FittingSize[];
  clearance: ClearanceStatus;  // wood only; "na" for precast
  snuggestReveal: number;      // smallest reveal among fitting sizes (for sorting)
  overallHeight: number;       // full mantel height, inches
}

function woodClearance(slug: string): ClearanceStatus {
  const d = mantelDimensions[slug];
  if (!d) return "verify";
  if (d.shelfHeightAboveOpening == null || d.shelfDepth == null) return "verify";
  return d.shelfDepth <= maxProjectionAt(d.shelfHeightAboveOpening) ? "ok" : "verify";
}

/** Returns every mantel (with dimension data) that fits the given firebox + wall space. */
export function findFittingMantels(criteria: FitCriteria): FitResult[] {
  const { fireboxWidth, fireboxHeight, maxWallWidth, maxOverallHeight, material = "any", style = "any" } = criteria;
  const results: FitResult[] = [];

  for (const product of mantelProducts) {
    // Only firebox surrounds — overmantels/beams aren't sized to a firebox.
    if (product.type === "overmantel" || product.type === "beam") continue;
    if (material === "precast" && product.type !== "precast") continue;
    if (material === "wood" && product.type !== "wood") continue;
    if (style !== "any" && product.style !== style) continue;

    const d = mantelDimensions[product.slug];
    if (!d) continue; // no dimensions yet → can't size-match

    // Opening must be tall enough for the firebox (extra height = top reveal, coverable).
    if (fireboxHeight != null && d.openingHeight < fireboxHeight) continue;

    // Overall height must clear the ceiling / available height.
    if (maxOverallHeight != null && d.overallHeight > maxOverallHeight) continue;

    const fittingSizes: FittingSize[] = [];
    d.openingWidths.forEach((ow, i) => {
      if (ow < fireboxWidth + 2 * MIN_REVEAL_PER_SIDE) return; // opening too small
      const overall = d.overallWidths[i] ?? d.overallWidths[d.overallWidths.length - 1];
      if (maxWallWidth != null && overall > maxWallWidth) return; // won't fit the wall
      fittingSizes.push({
        openingWidth: ow,
        overallWidth: overall,
        revealPerSide: (ow - fireboxWidth) / 2,
      });
    });

    if (fittingSizes.length === 0) continue;

    results.push({
      product,
      fittingSizes,
      clearance: product.type === "wood" ? woodClearance(product.slug) : "na",
      snuggestReveal: Math.min(...fittingSizes.map((s) => s.revealPerSide)),
      overallHeight: d.overallHeight,
    });
  }

  // Snuggest fit first (least filler needed).
  return results.sort((a, b) => a.snuggestReveal - b.snuggestReveal);
}

/**
 * Browse mode: every mantel with dimension data, no firebox floor applied.
 * Honors the material / style / wall-width / height filters so the same controls
 * narrow the full list. Sorted alphabetically by name. revealPerSide is 0 (n/a).
 */
export function listAllMantels(
  criteria: Omit<FitCriteria, "fireboxWidth" | "fireboxHeight"> = {}
): FitResult[] {
  const { maxWallWidth, maxOverallHeight, material = "any", style = "any" } = criteria;
  const results: FitResult[] = [];

  for (const product of mantelProducts) {
    if (product.type === "overmantel" || product.type === "beam") continue;
    if (material === "precast" && product.type !== "precast") continue;
    if (material === "wood" && product.type !== "wood") continue;
    if (style !== "any" && product.style !== style) continue;

    const d = mantelDimensions[product.slug];
    if (!d) continue;
    if (maxOverallHeight != null && d.overallHeight > maxOverallHeight) continue;

    const fittingSizes: FittingSize[] = [];
    d.openingWidths.forEach((ow, i) => {
      const overall = d.overallWidths[i] ?? d.overallWidths[d.overallWidths.length - 1];
      if (maxWallWidth != null && overall > maxWallWidth) return;
      fittingSizes.push({ openingWidth: ow, overallWidth: overall, revealPerSide: 0 });
    });
    if (fittingSizes.length === 0) continue;

    results.push({
      product,
      fittingSizes,
      clearance: product.type === "wood" ? woodClearance(product.slug) : "na",
      snuggestReveal: 0,
      overallHeight: d.overallHeight,
    });
  }

  return results.sort((a, b) => a.product.name.localeCompare(b.product.name));
}

/**
 * Best-seller slugs — the curated shortlist shown in the homepage fit finder.
 * EDIT THIS LIST to match actual best sellers. The full /mantels finder is unaffected.
 */
export const bestSellerSlugs: string[] = [
  "barossa",
  "covington",
  "manly",
  "heritage",
  "clarendon",
  "mornington",
  "kensington",
  "nullarbor",
];

/** How many mantels currently have dimension data (for progress display). */
export function mantelsWithDimensions(): number {
  return Object.keys(mantelDimensions).length;
}
