import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const nextConfig = fs.readFileSync(path.join(root, "next.config.ts"), "utf8");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return entry.name === "page.tsx" ? [fullPath] : [];
  });
}

function routeFromPage(filePath) {
  const route = filePath
    .replaceAll("\\", "/")
    .replace(/^src\/app/, "")
    .replace(/\/page\.tsx$/, "")
    .replace(/\/\([^/]+\)/g, "")
    .replace(/\/\[[^/]+\]/g, "/:param");

  return route || "/";
}

const routes = new Set(walk(path.join(root, "src/app")).map((filePath) => {
  const relative = path.relative(root, filePath);
  return routeFromPage(relative);
}));

const redirects = [...nextConfig.matchAll(/\{\s*source:\s*"([^"]+)",\s*destination:\s*"([^"]+)"/g)]
  .map((match) => ({ source: match[1], destination: match[2] }));

function routeExists(destination) {
  if (!destination.startsWith("/")) return true;

  const cleanDestination = destination
    .split("?")[0]
    .replace(/\/:[^/]+\*/g, "/:param")
    .replace(/\/:[^/]+/g, "/:param");

  if (routes.has(cleanDestination)) return true;

  return [...routes].some((route) => {
    const pattern = `^${route.replace(/:[^/]+/g, "[^/]+")}$`;
    return new RegExp(pattern).test(cleanDestination);
  });
}

const missing = redirects.filter((redirect) => !routeExists(redirect.destination));

if (missing.length === 0) {
  console.log(`Redirect audit passed: ${redirects.length} redirects checked.`);
  process.exit(0);
}

console.error("Redirect audit found destinations that do not match known routes:");
for (const redirect of missing) {
  console.error(`- ${redirect.source} -> ${redirect.destination}`);
}
process.exit(1);
