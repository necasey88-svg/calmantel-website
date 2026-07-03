import type { MetadataRoute } from "next";
import { SITE_URL, showrooms } from "@/lib/business-data";
import { mantelProducts, overstockProducts } from "@/lib/mantel-products-data";
import { mantelCategories } from "@/lib/mantels-data";
import { fireplaceCategories } from "@/lib/fireplaces-data";
import { gasInserts } from "@/lib/gas-inserts-data";
import { electricFireplaces } from "@/lib/electric-fireplaces-data";
import { insightPosts } from "@/lib/insights-data";

// Dynamically generated so every product/category/post is discoverable by Google
// and the sitemap never goes stale as the catalog grows.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Top-level & evergreen static routes with hand-tuned priorities.
  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/mantels", priority: 0.9, changeFrequency: "weekly" },
    { path: "/fireplaces", priority: 0.9, changeFrequency: "weekly" },
    { path: "/mantels/colors-finishes", priority: 0.7, changeFrequency: "monthly" },
    { path: "/projects", priority: 0.8, changeFrequency: "weekly" },
    { path: "/showrooms", priority: 0.8, changeFrequency: "monthly" },
    { path: "/overstock-sale", priority: 0.7, changeFrequency: "daily" },
    { path: "/masonry-new-page", priority: 0.6, changeFrequency: "monthly" },
    { path: "/masonry-gallery", priority: 0.6, changeFrequency: "monthly" },
    { path: "/insights", priority: 0.6, changeFrequency: "weekly" },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/estimate", priority: 0.7, changeFrequency: "monthly" },
    { path: "/instant-estimate", priority: 0.7, changeFrequency: "monthly" },
    // /booking intentionally omitted — it 301-redirects to external Microsoft Bookings.
    { path: "/sms-privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  ];

  // Dynamic route groups derived from the data files.
  const dynamicPaths: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    ...showrooms.map((s) => ({ path: `/showrooms/${s.slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
    ...mantelCategories.map((c) => ({ path: `/mantels/${c.slug}`, priority: 0.8, changeFrequency: "weekly" as const })),
    ...mantelProducts.map((p) => ({ path: `/mantels/p/${p.slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
    ...overstockProducts.map((p) => ({ path: `/overstock-sale/p/${p.slug}`, priority: 0.6, changeFrequency: "weekly" as const })),
    ...fireplaceCategories.map((c) => ({ path: `/fireplaces/${c.slug}`, priority: 0.8, changeFrequency: "weekly" as const })),
    ...gasInserts.map((g) => ({ path: `/fireplaces/gas-inserts/${g.slug}`, priority: 0.6, changeFrequency: "monthly" as const })),
    ...electricFireplaces.map((e) => ({ path: `/fireplaces/electric/${e.slug}`, priority: 0.6, changeFrequency: "monthly" as const })),
    ...insightPosts.map((p) => ({ path: `/insights/${p.slug}`, priority: 0.6, changeFrequency: "monthly" as const })),
  ];

  // Dedupe by path (a few fireplace category slugs also have static brand pages).
  const seen = new Set<string>();
  const all = [...staticRoutes, ...dynamicPaths].filter((r) => {
    if (seen.has(r.path)) return false;
    seen.add(r.path);
    return true;
  });

  return all.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
