import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
      { source: "/shop-electric.html", destination: "/electric-fireplaces", permanent: true },
      { source: "/mantels.html", destination: "/mantels", permanent: true },
      { source: "/service.html", destination: "/contact", permanent: true },
      { source: "/hours.html", destination: "/showrooms", permanent: true },
      { source: "/gas-fireplaces-contemporary", destination: "/gas-inserts", permanent: true },
      { source: "/gas-fireplaces-traditional", destination: "/gas-inserts", permanent: true },
      { source: "/outdoor-fireplaces", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/gas-inserts/detail/our-locations", destination: "/showrooms", permanent: true },
      // Dealeron colors-finishes product pages (wildcard catches all variants)
      { source: "/colors-finishes/:slug*", destination: "/mantels", permanent: true },

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
      { source: "/stellar", destination: "/", permanent: true },
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
      { source: "/heat-n-glo", destination: "/fireplaces/heat-n-glo", permanent: true },
      { source: "/heatilator", destination: "/fireplaces/heatilator", permanent: true },
      { source: "/modern-flames", destination: "/fireplaces/modern-flames", permanent: true },
      { source: "/napoleon", destination: "/fireplaces/napoleon", permanent: true },

      // Blog → Insights
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog-1", destination: "/insights", permanent: true },
      { source: "/blog/:slug*", destination: "/insights/:slug*", permanent: true },
      { source: "/blog-1/:slug*", destination: "/insights/:slug*", permanent: true },

      // Overstock
      { source: "/overstock-sale-1", destination: "/overstock-sale", permanent: true },
      { source: "/overstock-sale-1/p/:slug*", destination: "/overstock-sale", permanent: true },

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

      // Booking → Microsoft Bookings
      { source: "/booking", destination: "https://bookings.cloud.microsoft/book/CaliforniaMantelFireplace@calmantel.com/?ismsaljsauthenabled", permanent: true },

      { source: "/mantels/p/kendall-1", destination: "/mantels/p/kendall", permanent: true },
      { source: "/mantels/p/hobart-1", destination: "/mantels/p/hobart", permanent: true },
    ];
  },
};

export default nextConfig;
