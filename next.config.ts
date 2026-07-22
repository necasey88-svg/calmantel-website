import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images as-is: Vercel Hobby's image-optimization quota (1000 new
    // source images/month) was exhausted post-launch, returning 402s for all
    // newly added images. We pre-compress assets ourselves (webp), so direct
    // serving is fine. Remove this if the project moves to Vercel Pro.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.squarespace-cdn.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "hearthnhome.getbynder.com" },
      { protocol: "https", hostname: "www.mendotahearth.com" },
      { protocol: "https", hostname: "www.modernflames.com" },
      { protocol: "https", hostname: "d2zjr2e3be66hk.cloudfront.net" },
      { protocol: "https", hostname: "www.ortalheat.com" },
      { protocol: "https", hostname: "f.hubspotusercontent00.net" },
      { protocol: "https", hostname: "5208252.fs1.hubspotusercontent-na1.net" },
    ],
  },
  async redirects() {
    return [
      // ── Dealeron legacy (.html pages & old URL structure) ──────────────────
      { source: "/home", destination: "/", permanent: true },
      { source: "/catalog.aspx", destination: "/mantels", permanent: true },
      { source: "/shop-electric.html", destination: "/fireplaces/electric", permanent: true },
      { source: "/mantels.html", destination: "/mantels", permanent: true },
      { source: "/service.html", destination: "/contact", permanent: true },
      { source: "/hours.html", destination: "/showrooms", permanent: true },
      { source: "/gas-fireplaces-contemporary", destination: "/fireplaces/gas-inserts", permanent: true },
      { source: "/gas-fireplaces-traditional", destination: "/fireplaces/gas-inserts", permanent: true },
      { source: "/outdoor-fireplaces", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/gas-inserts/detail/our-locations", destination: "/showrooms", permanent: true },
      // Dealeron colors-finishes product pages (wildcard catches all variants)
      { source: "/colors-finishes/:slug*", destination: "/mantels/colors-finishes", permanent: true },

      // ── Old Squarespace promo / misc pages ─────────────────────────────────
      { source: "/projects-1", destination: "/projects", permanent: true },
      { source: "/masonry-1", destination: "/masonry-new-page", permanent: true },
      { source: "/ortal-1", destination: "/fireplaces/ortal", permanent: true },
      { source: "/ortal-fall-promo", destination: "/fireplaces/ortal", permanent: true },
      // Labor Day sale → individual mantel pages (typo fix for reynalla first)
      { source: "/labor-day-sale-1/p/reynalla", destination: "/mantels/p/reynella", permanent: true },
      { source: "/labor-day-sale-1/p/:slug*", destination: "/mantels/p/:slug*", permanent: true },

      // ── Page renames ────────────────────────────────────────────────────────
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/estimate-new", destination: "/estimate", permanent: true },
      { source: "/mantels-landing-page", destination: "/mantels", permanent: true },
      { source: "/stellar", destination: "/fireplaces/stellar", permanent: true },
      { source: "/home-new", destination: "/", permanent: true },
      { source: "/test-1", destination: "/", permanent: true },
      { source: "/new-dropdown", destination: "/", permanent: true },

      // Showroom location pages
      { source: "/fireplace-store-anaheim", destination: "/showrooms/anaheim", permanent: true },
      { source: "/fireplace-store-dublin-ca", destination: "/showrooms/dublin", permanent: true },
      { source: "/fireplace-store-sacramento", destination: "/showrooms/sacramento", permanent: true },

      // Projects
      { source: "/projects-main", destination: "/projects", permanent: true },
      { source: "/projects-mantels", destination: "/projects", permanent: true },
      { source: "/projects-gas-inserts", destination: "/projects", permanent: true },
      { source: "/projects-electric-fireplace", destination: "/projects", permanent: true },
      { source: "/projects-log-sets", destination: "/projects", permanent: true },
      { source: "/projectdetails", destination: "/projects", permanent: true },
      { source: "/projectdetails-1", destination: "/projects", permanent: true },

      // Masonry — note: /masonry-new-page and /masonry-gallery are LIVE page URLs
      // (unchanged from Squarespace), so they intentionally have no redirect.

      // Fireplace brand pages
      { source: "/mendota", destination: "/fireplaces/mendota", permanent: true },
      { source: "/ortal", destination: "/fireplaces/ortal", permanent: true },
      { source: "/flare", destination: "/fireplaces/flare", permanent: true },
      { source: "/heat-n-glo", destination: "/fireplaces/heat-and-glo", permanent: true },
      { source: "/heatilator", destination: "/fireplaces/heatilator", permanent: true },
      { source: "/modern-flames", destination: "/fireplaces/modern-flames", permanent: true },
      { source: "/napoleon", destination: "/fireplaces/napoleon", permanent: true },

      // Stone finish variants (Indian Summer, Grecian, Macambo, Le Marais, London Fog, Kingsbury, Atlantic)
      // → Colors & Finishes page
      { source: "/mantels/p/indian-summer-smooth", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/indian-summer-stone-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/indian-summer-old-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/grecian-stone-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/macambo-smooth", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/macambo-old-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/le-marais-smooth", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/le-marais-travertine", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/london-fog-smooth", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/london-fog-travertine", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/kingsbury-travertine", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/atlantic-travertine", destination: "/mantels/colors-finishes", permanent: true },

      // Mantel product slug fixes (Squarespace added -1 suffixes)
      { source: "/mantels/p/melbourne-1", destination: "/mantels/p/melbourne", permanent: true },
      { source: "/mantels/p/rockhampton-1", destination: "/mantels/p/rockhampton", permanent: true },
      { source: "/mantels/p/milagro-1", destination: "/mantels/p/milagro", permanent: true },
      { source: "/mantels/p/sausalito-1", destination: "/mantels/p/sausalito", permanent: true },
      { source: "/mantels/p/koonunga-1", destination: "/mantels/p/koonunga", permanent: true },

      // /booking stays on-site so the scheduling handoff can be branded and tracked.

      { source: "/mantels/p/kendall-1", destination: "/mantels/p/kendall", permanent: true },
      { source: "/mantels/p/hobart-1", destination: "/mantels/p/hobart", permanent: true },

      // ── Gap-fill from live-site sitemap audit (2026-07-09) ──────────────────
      // Additional finish-variant product pages → Colors & Finishes
      // (same pattern as the existing block above; these combinations were
      // missing from the original manually-curated list)
      { source: "/mantels/p/aspen-old-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/aspen-smooth", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/aspen-stone-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/atlantic-stone-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/grecian-old-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/grecian-smooth", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/grecian-travertine", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/indian-summer-travertine", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/kingsbury-old-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/kingsbury-smooth", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/kingsbury-stone-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/le-marais-old-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/le-marais-stone-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/limestone-stone-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/limestone-travertine", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/london-fog-old-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/london-fog-stone-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/milano-old-world", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/p/milano-smooth", destination: "/mantels/colors-finishes", permanent: true },

      // Standalone hearth product pages → Hearths category (hearths aren't
      // individually routed on the new site, just listed on this page)
      { source: "/mantels/p/45-degree-hearth", destination: "/mantels/hearths", permanent: true },
      { source: "/mantels/p/radius-hearth", destination: "/mantels/hearths", permanent: true },
      { source: "/mantels/p/semi-radius-hearth", destination: "/mantels/hearths", permanent: true },
      { source: "/mantels/p/standard-hearth", destination: "/mantels/hearths", permanent: true },
      { source: "/mantels/p/standard-raised-hearth", destination: "/mantels/hearths", permanent: true },

      // Renamed / spelling-corrected mantel products
      { source: "/mantels/p/flutted-filler", destination: "/mantels/p/fluted-filler", permanent: true },
      { source: "/mantels/p/santa-ana", destination: "/mantels/p/santa-anita", permanent: true },
      { source: "/mantels/p/randino", destination: "/mantels/p/benedict", permanent: true },

      // Discontinued mantel products — no direct replacement, send to the
      // closest live category so link equity lands on a relevant page
      { source: "/mantels/p/cosmo-with-darlinghurst", destination: "/mantels/beams", permanent: true },
      { source: "/mantels/p/rosella", destination: "/mantels/contemporary", permanent: true },
      { source: "/mantels/p/landmark", destination: "/mantels/traditional", permanent: true },

      // Legacy top-level pages
      { source: "/electric-fireplaces", destination: "/fireplaces/electric", permanent: true },
      { source: "/gas-inserts", destination: "/fireplaces/gas-inserts", permanent: true },
      { source: "/faq", destination: "/", permanent: true },

      // Blog → Insights (two posts have a direct match; the rest are
      // Squarespace placeholder posts with no equivalent content)
      { source: "/blog/how-to-prep-your-fireplace-for-winter-a-california-homeowners-guide", destination: "/insights/how-to-prep-your-fireplace-for-winter", permanent: true },
      { source: "/blog-1/modern-fireplace-design-trends-2026-edition", destination: "/insights/modern-fireplace-design-trends-2026", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog-1", destination: "/insights", permanent: true },
      { source: "/blog/:slug*", destination: "/insights", permanent: true },
      { source: "/blog-1/:slug*", destination: "/insights", permanent: true },

      // Overstock — old "-1" section prefix. Items still in current
      // inventory map directly; discontinued items fall back to the listing.
      { source: "/overstock-sale-1", destination: "/overstock-sale", permanent: true },
      { source: "/overstock-sale-1/p/heritage", destination: "/overstock-sale/p/heritage", permanent: true },
      { source: "/overstock-sale-1/p/nullarbor", destination: "/overstock-sale/p/nullarbor", permanent: true },
      { source: "/overstock-sale-1/p/nullarbor-1", destination: "/overstock-sale/p/nullarbor", permanent: true },
      { source: "/overstock-sale-1/p/manly", destination: "/overstock-sale/p/manly", permanent: true },
      { source: "/overstock-sale-1/p/sausalito", destination: "/overstock-sale/p/sausalito", permanent: true },
      { source: "/overstock-sale-1/p/:slug*", destination: "/overstock-sale", permanent: true },
    ];
  },
};

export default nextConfig;
