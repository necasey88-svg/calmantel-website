import { business, showrooms } from "@/lib/business-data";
import { mantelProducts } from "@/lib/mantel-products-data";
import { fireplaceCategories } from "@/lib/fireplaces-data";
import { showroomInventory } from "@/lib/showroom-inventory";

// Server-only: builds the grounding context injected into the chat system
// prompt. Kept out of client bundles by only being imported from the API
// route. Deliberately a condensed catalog (name/specs, not full marketing
// descriptions) to keep prompt size and latency reasonable — the assistant
// is instructed to point to the product page or a specialist for specifics
// beyond that rather than inventing details.
// Source hours are 24h "HH:MM" (for schema.org markup elsewhere) — reformat
// to 12h so the assistant naturally says "9:00 AM" instead of "09:00".
function to12Hour(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
}

export function buildSiteKnowledge(): string {
  const showroomLines = showrooms
    .map((s) => {
      const hours = s.hours
        .map((h) => `${h.days.map((d) => d.slice(0, 3)).join("/")} ${to12Hour(h.opens)}-${to12Hour(h.closes)}`)
        .join("; ");
      return `- ${s.city}: ${s.streetAddress}, ${s.addressLocality}, ${s.addressRegion} ${s.postalCode} — phone ${s.phone} — hours: ${hours}`;
    })
    .join("\n");

  const mantelLines = mantelProducts
    .filter((p) => p.type !== "beam")
    .map((p) => `- ${p.name} (${p.type}, ${p.style})`)
    .join("\n");

  // Precast beams look like wood but are non-combustible concrete — keep
  // this distinction explicit, it's a recurring point of customer confusion.
  const beamLines = mantelProducts
    .filter((p) => p.type === "beam")
    .map((p) => `- ${p.name} (${p.beamMaterial === "precast" ? "precast concrete" : "wood"})`)
    .join("\n");

  // Same product often appears under both a type category (e.g. "Gas
  // Inserts") and a brand category (e.g. "Heat & Glo Fireplaces") — kept
  // as separate lines on purpose so a customer asking by brand+model name
  // (e.g. "Heat & Glo Cosmo") and one asking by type both find it.
  const fireplaceCatalogLines = fireplaceCategories
    .flatMap((cat) =>
      cat.products.map(
        (p) => `- [${cat.title}] ${p.name}${p.specs?.length ? " — " + p.specs.join(", ") : ""}`
      )
    )
    .join("\n");

  // On-floor display units at each showroom — separate from the full online
  // catalog above, so the bot can answer "what's on display" accurately
  // instead of assuming everything in the catalog is physically there.
  const showroomInventoryLines = showroomInventory
    .map(
      (loc) =>
        `${loc.city}:\n` +
        loc.units
          .map((u) => `- ${u.name} (${u.brand})${u.pairedMantel ? ` — paired with ${u.pairedMantel}` : ""}`)
          .join("\n")
    )
    .join("\n\n");

  return `BUSINESS: ${business.name}, family-owned since ${business.founded}. ${business.description}

SHOWROOMS:
${showroomLines}

WHAT WE DO:
- Manufacture custom fireplace mantels (precast concrete and wood surrounds) — contemporary, traditional, and beam styles, made in California.
- Sell and install gas, electric, and outdoor fireplace systems — both inserts (convert an existing fireplace opening) and new-construction systems (built where no fireplace exists yet) — from brands including Heat & Glo, Heatilator, Napoleon, Mendota, Modern Flames, Ortal, Flare, and Stellar.
- Fireplace service & repair: diagnosis, cleaning/maintenance, and guidance on older-fireplace replacement (see /fireplaces/service-repair for the request form).
- Masonry — stone, brick, and tile fireplace surrounds and feature walls — available exclusively in Southern California, coordinated through the Anaheim showroom. Full masonry portfolio at cmfmasonry.com.
- Decorative chimney shrouds and a rotating warehouse clearance / overstock inventory (limited-quantity, pickup-only, Anaheim and Sacramento).
- Pricing is generally quote-based ("request pricing") rather than listed online; point visitors to /instant-estimate (quick guided ballpark) or /estimate (detailed request with photos) rather than guessing a number.

MANTEL CATALOG (name, type, style — for matching customer requests to categories, not full specs):
${mantelLines}

FIREPLACE BEAMS (part of the mantel lineup):
${beamLines}

FIREPLACE & INSERT CATALOG (brand/category, product name, key specs — customers may ask by brand, model name, or size, e.g. "Cosmo 42" means the 42" size of the Heat & Glo Cosmo):
${fireplaceCatalogLines}

SHOWROOM DISPLAY UNITS (what's physically on the showroom floor right now, by location — use this to answer "what can I see in person" or "is X on display" questions; don't assume every catalog item above is on display, only what's listed here):
${showroomInventoryLines}`;
}
