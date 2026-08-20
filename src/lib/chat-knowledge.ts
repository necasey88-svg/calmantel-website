import { business, showrooms } from "@/lib/business-data";
import { mantelProducts } from "@/lib/mantel-products-data";
import { fireplaceCategories } from "@/lib/fireplaces-data";

// Server-only: builds the grounding context injected into the chat system
// prompt. Kept out of client bundles by only being imported from the API
// route. Deliberately a condensed catalog (name/specs, not full marketing
// descriptions) to keep prompt size and latency reasonable — the assistant
// is instructed to point to the product page or a specialist for specifics
// beyond that rather than inventing details.
export function buildSiteKnowledge(): string {
  const showroomLines = showrooms
    .map((s) => {
      const hours = s.hours
        .map((h) => `${h.days.map((d) => d.slice(0, 3)).join("/")} ${h.opens}-${h.closes}`)
        .join("; ");
      return `- ${s.city}: ${s.streetAddress}, ${s.addressLocality}, ${s.addressRegion} ${s.postalCode} — phone ${s.phone} — hours: ${hours}`;
    })
    .join("\n");

  const mantelCatalogLines = mantelProducts
    .map((p) => `- ${p.name} (${p.type}, ${p.style})`)
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

  return `BUSINESS: ${business.name}, family-owned since ${business.founded}. ${business.description}

SHOWROOMS:
${showroomLines}

SERVICES: mantel manufacturing (wood and precast concrete), gas/electric/outdoor fireplace installation, fireplace service & repair (diagnosis, cleaning/maintenance, older-fireplace replacement guidance), masonry (Anaheim location only).

MANTEL CATALOG (name, type, style — for matching customer requests to categories, not full specs):
${mantelCatalogLines}

FIREPLACE & INSERT CATALOG (brand/category, product name, key specs — customers may ask by brand, model name, or size, e.g. "Cosmo 42" means the 42" size of the Heat & Glo Cosmo):
${fireplaceCatalogLines}`;
}
