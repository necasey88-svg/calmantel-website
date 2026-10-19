import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Project moved to Vercel Pro (2026-08-19), which lifts the Hobby-plan
    // image-optimization quota that caused 402s on new images. Real
    // optimization (resize/AVIF/WebP transforms) is back on.
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
  // ── GSC crawl-waste reduction (2026-09-21) ────────────────────────────────
  // Two buckets of "Crawled - currently not indexed" noise, fixed at the HTTP
  // layer rather than by blocking anything in robots.txt (Google's own
  // guidance is explicit: don't robots.txt-block pages/assets you want
  // Googlebot to still read a noindex signal from, and don't block the JS/CSS
  // it needs to render the page — see robots.txt for the reasoning):
  //   1. /estimate?product=... — every product CTA links to its own query
  //      variant purely to prefill the form. The page-level `generateMetadata`
  //      in src/app/estimate/page.tsx already emits a `<meta name="robots"
  //      content="noindex, follow">` for any query string; this header is a
  //      belt-and-suspenders duplicate of that same signal (X-Robots-Tag has
  //      identical semantics to the meta tag, per Google's docs) so it still
  //      applies even if a caching layer ever strips the meta tag.
  //   2. Hashed, per-deploy asset URLs Google discovers via the HTML itself
  //      (favicon.ico?<hash>, /opengraph-image?<hash>, /twitter-image?<hash>,
  //      /_next/static/...) — these aren't content pages, so tell Google not
  //      to index them, without disallowing them in robots.txt (which would
  //      also hide them from Googlebot's renderer and hurt rendering-based
  //      indexing of real pages).
  async headers() {
    return [
      {
        source: "/estimate",
        has: [{ type: "query", key: "product" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      },
      {
        source: "/favicon.ico",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/opengraph-image",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/twitter-image",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
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
      // ── GA4 404-report cleanup (found 2026-07-27 via Page path + query string) ──
      { source: "/gas-fireplaces", destination: "/fireplaces/gas-inserts", permanent: true },
      { source: "/fireplace-mantels", destination: "/mantels", permanent: true },
      { source: "/mantels/wood-mantels", destination: "/mantels/wood-surrounds", permanent: true },
      { source: "/overstock", destination: "/fireplaces/overstock", permanent: true },
      { source: "/masonry", destination: "/masonry-new-page", permanent: true },
      { source: "/masonry.html", destination: "/masonry-new-page", permanent: true },
      { source: "/color-finishes.html", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/our-locations", destination: "/showrooms", permanent: true },
      { source: "/hearths-overmantels.html", destination: "/mantels/hearths", permanent: true },
      { source: "/rasmussen-log-sets.html", destination: "/fireplaces/gas-inserts", permanent: true },
      { source: "/blogs/:id", destination: "/insights", permanent: true },
      { source: "/accessories/fire-glass/detail/:slug", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/mantels/pre-cast-traditional/detail/:slug", destination: "/mantels/traditional", permanent: true },
      { source: "/fireplaces/outdoor-living/outdoor-kitchens/detail/:slug", destination: "/masonry-new-page", permanent: true },
      { source: "/fireplaces/traditional/detail/heat-glo-6000-series", destination: "/fireplaces/heat-and-glo", permanent: true },
      { source: "/fireplaces/contemporary/detail/heat-glo-primo-see-through", destination: "/fireplaces/heat-and-glo", permanent: true },
      { source: "/fireplaces/gas-inserts/detail/our-locations", destination: "/showrooms", permanent: true },
      // Dealeron colors-finishes product pages (wildcard catches all variants)
      { source: "/colors-finishes/:slug*", destination: "/mantels/colors-finishes", permanent: true },

      // ── GA4 404-report cleanup round 2 (found 2026-07-28, full CSV export) ──
      { source: "/mantels-new", destination: "/mantels", permanent: true },
      { source: "/mantels/colors-finishes/detail/:slug", destination: "/mantels/colors-finishes", permanent: true },
      { source: "/mantels/mantel-shelves-beams/detail/:slug", destination: "/mantels/beams", permanent: true },
      { source: "/mantels/pre-cast-contemporary/detail/:slug", destination: "/mantels/contemporary", permanent: true },
      { source: "/heat-and-glo.html", destination: "/fireplaces/heat-and-glo", permanent: true },
      { source: "/napoleon.html", destination: "/fireplaces/napoleon", permanent: true },
      { source: "/ortal.html", destination: "/fireplaces/ortal", permanent: true },
      { source: "/stellar.html", destination: "/fireplaces/stellar", permanent: true },
      { source: "/aboutus.html", destination: "/about", permanent: true },
      { source: "/our-locations.aspx", destination: "/showrooms", permanent: true },
      { source: "/privacy.aspx", destination: "/sms-privacy-policy", permanent: true },
      { source: "/contactus.aspx", destination: "/contact", permanent: true },
      { source: "/service-support", destination: "/contact", permanent: true },
      { source: "/publications", destination: "/insights", permanent: true },
      { source: "/troubleshooting-faqs/flare-1", destination: "/fireplaces/flare", permanent: true },
      { source: "/troubleshooting-faqs/isokern", destination: "/fireplaces/isokern", permanent: true },
      { source: "/appointments", destination: "/booking", permanent: true },
      { source: "/cart", destination: "/fireplaces/overstock", permanent: true },
      { source: "/accessories", destination: "/fireplaces/accessories", permanent: true },
      { source: "/venting-explained", destination: "/insights", permanent: true },
      { source: "/new-dropdown-1", destination: "/", permanent: true },
      { source: "/projects-mantels", destination: "/projects", permanent: true },
      { source: "/precast-mantel.aspx", destination: "/mantels", permanent: true },
      { source: "/pre-cast-contemporary.html", destination: "/mantels/contemporary", permanent: true },
      { source: "/pre-cast-traditional.html", destination: "/mantels/traditional", permanent: true },
      { source: "/search-products.aspx", destination: "/mantels", permanent: true },
      { source: "/html/gallerypage10.html", destination: "/projects", permanent: true },
      { source: "/html/:slug*", destination: "/", permanent: true },
      { source: "/labor-day-sale-1", destination: "/fireplaces/overstock", permanent: true },
      { source: "/application/:path*", destination: "/", permanent: true },
      // Old brand/type detail pages (mixed brands per folder — route to the closest live section)
      { source: "/fireplaces/contemporary/detail/:slug", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/electric/detail/:slug", destination: "/fireplaces/electric", permanent: true },
      { source: "/fireplaces/traditional/detail/:slug", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/outdoor-living/:section/detail/:slug", destination: "/fireplaces/outdoor", permanent: true },

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
      // GSC redirect audit (2026-09-17): flagged /blog/Blog Post Title
      // One-35jy2 — a stray Squarespace demo/placeholder post (literal
      // space in the slug) that never had real content and isn't linked
      // from anywhere in this codebase. It 308s cleanly to /insights via
      // the /blog/:slug* wildcard below; called out explicitly so it
      // isn't mistaken for a live bug during future audits.
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

      // GSC redirect audit (2026-09-17): these items dropped out of the
      // overstock section but are still sold as regular-priced mantels
      // under the same slug, so send them to their live product page
      // instead of the generic /overstock-sale listing.
      { source: "/overstock-sale-1/p/belmont", destination: "/mantels/p/belmont", permanent: true },
      { source: "/overstock-sale-1/p/darlinghurst", destination: "/mantels/p/darlinghurst", permanent: true },
      { source: "/overstock-sale-1/p/eudunda", destination: "/mantels/p/eudunda", permanent: true },
      { source: "/overstock-sale-1/p/dominique", destination: "/mantels/p/dominique", permanent: true },
      { source: "/overstock-sale-1/p/kensington", destination: "/mantels/p/kensington", permanent: true },
      { source: "/overstock-sale-1/p/torrens", destination: "/mantels/p/torrens", permanent: true },
      { source: "/overstock-sale-1/p/australian", destination: "/mantels/p/australian", permanent: true },
      { source: "/overstock-sale-1/p/gosford", destination: "/mantels/p/gosford", permanent: true },
      { source: "/overstock-sale-1/p/brighton", destination: "/mantels/p/brighton", permanent: true },
      // Typo/rename fixes (same pattern as the /labor-day-sale-1 rules above)
      { source: "/overstock-sale-1/p/reynalla", destination: "/mantels/p/reynella", permanent: true },
      { source: "/overstock-sale-1/p/rockhamptonqueensland", destination: "/mantels/p/rockhampton", permanent: true },
      // Hearths were never their own overstock line item — route to the
      // hearths category instead of the generic overstock listing.
      { source: "/overstock-sale-1/p/raised-hearth", destination: "/mantels/hearths", permanent: true },

      // Anything else under the old overstock section with no live match
      // falls back to the current listing page.
      { source: "/overstock-sale-1/p/:slug*", destination: "/overstock-sale", permanent: true },

      // ── rank-1019 404 cleanup (2026-10-19) ──────────────────────────────────
      // 196 historical URLs (ASP.NET + DealerOn eras) were still 404ing on the
      // current Next.js site, costing crawled link equity across three past
      // rebuilds. ~68 were junk (jQuery UI / mCustomScrollbar plugin asset
      // files crawled as if they were pages — ui-icons_*.html,
      // glyphicons-*.html, mCSB_buttons.html — skipped, no real content) plus
      // /cgi-sys/suspendedpage.cgi (hosting-provider artifact) and
      // /sitemap.aspx (legacy ASP.NET sitemap stub, superseded by
      // /sitemap.xml). The remaining 126 are mapped below to the closest live
      // equivalent, verified against the current route tree (see PR for the
      // full old→new table). Checked the Jul 2025 DealerOn-era Wayback
      // capture for additional .html/.aspx city/service pages per the task —
      // none beyond what's already covered here or above ever existed for
      // this domain (confirmed via CDX API; the example
      // /fireplace-installation-repair-sacramento-anaheim-dublin-ca/ URL has
      // no capture history).

      // Accessories — old fire-glass/fire-pit-glass/fire-rocks catalog
      // (bare category + pagination + per-item detail pages). Existing
      // /accessories/fire-glass/detail/:slug rule above already covers that
      // one detail subtree; these cover the rest, all to the live outdoor
      // accessories section.
      { source: "/accessories/fire-glass", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/accessories/fire-glass/1", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/accessories/fire-glass/2", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/accessories/fire-glass/3", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/accessories/fire-pit-glass", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/accessories/fire-pit-glass/detail/:slug", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/accessories/fire-rocks", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/accessories/fire-rocks/2", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/accessories/fire-rocks/3", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/accessories/fire-rocks/4", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/accessories/fire-rocks/detail/:slug", destination: "/fireplaces/outdoor", permanent: true },

      // Mantels — old /mantels/wood/detail/<name> product pages. All 8 have
      // a live, identically-named product under /mantels/p/ except "the
      // nelson", which dropped the "the-" prefix.
      { source: "/mantels/wood/detail/benedict", destination: "/mantels/p/benedict", permanent: true },
      { source: "/mantels/wood/detail/brisbane", destination: "/mantels/p/brisbane", permanent: true },
      { source: "/mantels/wood/detail/fremantle", destination: "/mantels/p/fremantle", permanent: true },
      { source: "/mantels/wood/detail/hobart", destination: "/mantels/p/hobart", permanent: true },
      { source: "/mantels/wood/detail/kendall", destination: "/mantels/p/kendall", permanent: true },
      { source: "/mantels/wood/detail/perth", destination: "/mantels/p/perth", permanent: true },
      { source: "/mantels/wood/detail/peterborough", destination: "/mantels/p/peterborough", permanent: true },
      { source: "/mantels/wood/detail/the-nelson", destination: "/mantels/p/nelson", permanent: true },

      // Mantels — precast category index pages (the /detail/:slug product
      // pages under these are already redirected above).
      { source: "/mantels/pre-cast-contemporary", destination: "/mantels/contemporary", permanent: true },
      { source: "/mantels/pre-cast-traditional", destination: "/mantels/traditional", permanent: true },
      { source: "/mantels/mantel-shelves-beams", destination: "/mantels/beams", permanent: true },
      // The combined old "hearths & overmantels" category → the closer-named
      // live category (hearths), matching /hearths-overmantels.html above;
      // its one product (a custom overmantel) goes to the more specific
      // live overmantels category instead.
      { source: "/mantels/hearths-overmantels", destination: "/mantels/hearths", permanent: true },
      { source: "/mantels/hearths-overmantels/detail/custom-overmantel", destination: "/mantels/overmantels", permanent: true },

      // Fireplaces — gas insert detail pages. All 4 Heat & Glo models have a
      // live model page under the current slug naming.
      { source: "/fireplaces/gas-inserts/detail/heat-glo-cosmo", destination: "/fireplaces/gas-inserts/cosmo", permanent: true },
      { source: "/fireplaces/gas-inserts/detail/heat-glo-escape", destination: "/fireplaces/gas-inserts/escape", permanent: true },
      { source: "/fireplaces/gas-inserts/detail/heat-glo-provident", destination: "/fireplaces/gas-inserts/provident", permanent: true },
      { source: "/fireplaces/gas-inserts/detail/heat-glo-supreme", destination: "/fireplaces/gas-inserts/supreme", permanent: true },

      // Fireplaces — old style-browsing categories (contemporary / modern /
      // traditional) have no equivalent style pages on the current site
      // (fireplaces are organized by type/brand instead), so the category
      // index + pagination fall back to the general hub. Named-residence
      // "detail" pages under these were project case studies, not products,
      // so they go to the project gallery instead; the one real product
      // (Heat & Glo Foundation Series) goes to its brand page.
      { source: "/fireplaces/contemporary", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/contemporary/2", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/contemporary/3", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/contemporary/4", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/contemporary/5", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/traditional", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/traditional/1", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/traditional/2", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/modern", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces/modern/detail/acosta-residence", destination: "/projects", permanent: true },
      { source: "/fireplaces/modern/detail/oakcrest", destination: "/projects", permanent: true },
      { source: "/fireplaces/modern/detail/tenaya-lodge", destination: "/projects", permanent: true },
      { source: "/fireplaces/modern/detail/heat-glo-foundation-series", destination: "/fireplaces/heat-and-glo", permanent: true },
      // Old wood-burning category — its one product (Heatilator Birmingham)
      // and the category itself go to the Heatilator brand page, which
      // still lists a wood-burning fireplace product.
      { source: "/fireplaces/woodburning", destination: "/fireplaces/heatilator", permanent: true },
      { source: "/fireplaces/woodburning/detail/heatilator-birmingham", destination: "/fireplaces/heatilator", permanent: true },

      { source: "/fireplaces/electric/1", destination: "/fireplaces/electric", permanent: true },
      { source: "/fireplaces/electric/2", destination: "/fireplaces/electric", permanent: true },

      { source: "/fireplaces/our-locations", destination: "/showrooms", permanent: true },

      // Fireplaces — outdoor living / outdoor fireplace subtree. Bare
      // category + pagination pages (the /detail/:slug product pages are
      // already covered by the broader wildcards above). Outdoor kitchens
      // specifically route to the masonry section, matching the existing
      // /fireplaces/outdoor-living/outdoor-kitchens/detail/:slug rule above.
      { source: "/fireplaces/fire-bowls", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/fire-pits", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/fire-tables", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/torches", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-fireplaces", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-fireplaces/detail/superior-vre4342-outdoor-vent-free-fireplace", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-kitchens", destination: "/masonry-new-page", permanent: true },
      { source: "/fireplaces/outdoor-living", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/fire-bowls", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/fire-bowls/1", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/fire-bowls/2", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/fire-pits", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/fire-pits/1", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/fire-pits/2", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/fire-tables", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/gas-fireplaces", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/outdoor-fireplaces", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/outdoor-fireplaces/1", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/outdoor-fireplaces/2", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/outdoor-fireplaces/3", destination: "/fireplaces/outdoor", permanent: true },
      { source: "/fireplaces/outdoor-living/outdoor-kitchens", destination: "/masonry-new-page", permanent: true },
      { source: "/fireplaces/outdoor-living/torches", destination: "/fireplaces/outdoor", permanent: true },

      // Old Squarespace-era "-new" sections (mirrors the /mantels-new
      // pattern already redirected above, which only covered the bare path —
      // these cover its subpaths). Category index pages fall back to the
      // closest live section; named-residence/project pages go to the
      // project gallery since they were case studies, not products.
      { source: "/fireplaces-new", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces-new/electric-1", destination: "/fireplaces/electric", permanent: true },
      { source: "/fireplaces-new/electric-1/custom-electric-cabinet-1", destination: "/projects", permanent: true },
      { source: "/fireplaces-new/modern", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces-new/modern/acosta-residence", destination: "/projects", permanent: true },
      { source: "/fireplaces-new/modern/oakcrest", destination: "/projects", permanent: true },
      { source: "/fireplaces-new/modern/tenaya-lodge", destination: "/projects", permanent: true },
      { source: "/fireplaces-new/traditional-1", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces-new/traditional-1/bristol", destination: "/projects", permanent: true },
      { source: "/fireplaces-new/traditional-1/canyon-view", destination: "/projects", permanent: true },
      { source: "/fireplaces-new/traditional-1/delta-coves", destination: "/projects", permanent: true },
      // Ambiguous: a page literally named "fireplaces-traditional" nested
      // under /traditional-1 — not a named project, likely a stray nav/
      // thumbnail link from the old theme. No specific equivalent; falls
      // back to the fireplaces hub.
      { source: "/fireplaces-new/traditional-1/fireplaces-traditional", destination: "/fireplaces", permanent: true },
      { source: "/fireplaces-new/traditional-1/patel-residence", destination: "/projects", permanent: true },
      { source: "/fireplaces-new/traditional-1/silvercrest", destination: "/projects", permanent: true },
      { source: "/mantels-new/traditional-2", destination: "/mantels", permanent: true },
      { source: "/mantels-new/traditional-2/hendricks-residence", destination: "/projects", permanent: true },
      { source: "/mantels-new/traditional-2/the-showcase-by-design", destination: "/projects", permanent: true },
      { source: "/mantels-new/traditional-2/villa-lago-at-promentory", destination: "/projects", permanent: true },
      { source: "/mantels-new/electric-2/custom-electric-cabinet", destination: "/projects", permanent: true },
      { source: "/mantels-new/modern-2/delta-coves-1", destination: "/projects", permanent: true },

      // Project / inspiration galleries (no individual project pages exist
      // on the current site — just the gallery).
      { source: "/before-after", destination: "/projects", permanent: true },
      { source: "/before-after/howle-residence-remodel", destination: "/projects", permanent: true },
      { source: "/project-photos", destination: "/projects", permanent: true },
      { source: "/inspiration/project-photos", destination: "/projects", permanent: true },
      { source: "/inspiration/idea-gallery", destination: "/projects", permanent: true },
      // A specific named masonry project page → the masonry project gallery
      // (not /masonry-new-page, which is the masonry services page).
      { source: "/masonry/rolling-hills-country-club", destination: "/masonry-gallery", permanent: true },
      { source: "/masonary", destination: "/masonry-new-page", permanent: true },

      // Use-care videos / troubleshooting FAQs — brand-specific pages route
      // to the matching brand page (matching the existing
      // /troubleshooting-faqs/flare-1 and /troubleshooting-faqs/isokern
      // rules above); the rest fall back to Insights.
      { source: "/troubleshooting--faqs.html", destination: "/insights", permanent: true },
      { source: "/troubleshooting-faqs", destination: "/insights", permanent: true },
      { source: "/troubleshooting-faqs/heat-glo", destination: "/fireplaces/heat-and-glo", permanent: true },
      { source: "/troubleshooting-faqs/napoleon-1", destination: "/fireplaces/napoleon", permanent: true },
      { source: "/use-care-videos", destination: "/insights", permanent: true },
      { source: "/use-care-videos/flare", destination: "/fireplaces/flare", permanent: true },
      { source: "/use-care-videos/heat-amp-glo", destination: "/fireplaces/heat-and-glo", permanent: true },
      { source: "/use-care-videos/napoleon", destination: "/fireplaces/napoleon", permanent: true },
      { source: "/fireplace-safety", destination: "/insights", permanent: true },

      // Misc single pages
      { source: "/careers.html", destination: "/careers", permanent: true },
      { source: "/current-specials", destination: "/overstock-sale", permanent: true },
      { source: "/gas-insert-remodel", destination: "/fireplaces/gas-inserts", permanent: true },
      { source: "/request-a-quote", destination: "/contact", permanent: true },
      { source: "/service_support", destination: "/contact", permanent: true },
      // General privacy policy, consolidated the same way /privacy.aspx
      // already is above.
      { source: "/privacy-policy", destination: "/sms-privacy-policy", permanent: true },
      // Ambiguous: a 2020-era pandemic announcement page with no current
      // equivalent content; routes to About as the closest general company
      // info page rather than the homepage.
      { source: "/covid-19", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
