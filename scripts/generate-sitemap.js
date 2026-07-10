// Run after `next build` to generate public/sitemap-generated.xml from static pages
/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://calmantel.com";
const OUT_FILE = path.join(__dirname, "../public/sitemap-generated.xml");

// Walk .next/server/app to find all statically generated pages
function findPages(dir, prefix = "") {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      results.push(...findPages(path.join(dir, entry.name), `${prefix}/${entry.name}`));
    } else if (entry.name === "page.html") {
      results.push(prefix || "/");
    }
  }
  return results;
}

const appDir = path.join(__dirname, "../.next/server/app");
const pages = findPages(appDir);

const urls = pages
  .filter((p) => !p.includes("/_") && !p.includes("/404") && !p.includes("/500"))
  .map((p) => {
    const loc = `${BASE_URL}${p === "/" ? "" : p}`;
    return `  <url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync(OUT_FILE, xml);
console.log(`Sitemap written to ${OUT_FILE} (${pages.length} pages)`);
