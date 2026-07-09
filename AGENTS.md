<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project handoff notes (for Codex / any other coding agent working here)

This repo is actively worked on by multiple agents (Claude, and now Codex). Read this
before making changes so we don't collide or contradict each other's work.

## Stack & deploy
- Next.js (App Router) + TypeScript + Tailwind. Build: `npx next build --webpack`
  (webpack, not the default Turbopack — this project pins webpack intentionally).
- Deploys via **Vercel, auto-triggered on push to `main`** on GitHub
  (`necasey88-svg/calmantel-website`). There is no separate deploy step — merging
  to `main` **is** the deploy. Treat every push to `main` as production.
- **Known local build quirk (Windows ARM64):** `next build` sometimes crashes with
  `Next.js build worker exited with code: 3221226505` on the first attempt (native
  `@next/swc-win32-arm64-msvc` binary issue, falls back to WASM). This is not a
  real failure — just re-run the build and it succeeds. If `.next/` is stale/corrupt,
  `rm -rf .next` before rebuilding.
- Always run `npx tsc --noEmit` and a full `next build` before committing — this
  repo has no CI gate, so a broken build only gets caught by whoever builds locally.

## Current design direction (in progress, do not regress)
The homepage is mid-way through a **premium/luxury repositioning** (moving away from
a "construction supplier" look toward RH/Arhaus-style: warm ivory backgrounds, large
photography, elegant serif type, minimal borders, restrained copy). Reference
components: `src/app/page.tsx`, `src/components/BestSellersShowcase.tsx`,
`src/components/Testimonials.tsx`, `src/components/WhyCMF.tsx`,
`src/components/ServingCalifornia.tsx`, `src/components/ClosingStatement.tsx`,
`src/components/InstallationsCarousel.tsx`.

Palette tokens live in `src/app/globals.css`: `--ink` (warm charcoal text),
`--accent`/`--accent-dark` (muted brass), `--sand`/`--sand-deep` (warm beige),
plus the ivory surface `#F9F7F3` used inline on several sections. Prefer these
tokens over the older `amber-*`/`stone-*` Tailwind classes when touching premium
sections; the older classes still exist on not-yet-restyled pages/sections.

**Homepage section order matters** — it was iterated with the client (Hero →
capabilities bar → Why-CMF → What We Offer → Collection showcase → Search →
Process/FAQ → lifestyle break → Installations carousel → Reviews → Brands →
Instant-Estimate CTA → Our Story → Serving California → Closing statement).
Don't reorder without asking.

## Data conventions (`src/lib/mantel-products-data.ts`)
- Every product has a `slug`. Product photo convention: `image: "/mantels/<slug>.png"`
  with the file placed in `public/mantels/`. CAD drawing convention:
  `cadPdf: "/cad/<slug>.pdf"` in `public/cad/`.
- `images?: string[]` (optional) enables a click-through gallery on the product page
  (see `Benedict` for an example, rendered via `src/components/ProductGallery.tsx`).
  **Per explicit client direction: one photo per product by default** — don't add a
  second "lit fireplace" gallery image unless asked; several were added then removed.
- Physical dimensions live in `src/lib/mantel-dimensions.ts`, keyed by slug — needed
  for the `/mantels` Fit Finder and the homepage's dimension-aware search
  (`src/components/MantelSearch.tsx`, which calls `findFittingMantels()` in
  `src/lib/mantel-fit.ts` when the query contains a number).
- Best-seller list for the homepage showcase: `bestSellerSlugs` array in
  `src/lib/mantel-fit.ts` — edit that array to change what's featured.

## Sourcing product photos/PDFs
Real product photography and CAD line drawings live in the client's SharePoint
(`Calmantel Sales Team` site, `Documents/Mantels/<Category>/<Product>/`), not in
this repo's history. If asked to fill in a missing product image or CAD, don't
invent one — ask the user, or if you have SharePoint/browser access, pull the real
asset from there and drop it in `public/mantels/` or `public/cad/` matching the
slug-naming convention above.

## Outstanding, asset-blocked work (do not fabricate these)
Several homepage sections are intentionally deferred pending real photography from
the client — do not fill these with stock/AI images without asking:
- 4 "Process" photo cards (showroom, designer+client, craftsman/manufacturing, finished room)
- Manufacturing/factory process section (Sacramento shop)
- "Meet the Team" designer headshots
- Dedicated lifestyle image for the "Designed Around the Moments That Matter" break
  (currently reusing the hero image as a placeholder, marked with a TODO comment)
- Signature "studio + lifestyle" image pairing per mantel (a client-favorite idea,
  logged in more detail in Claude's memory file `launch-todo.md` — ask the user if
  you need that context and don't have access to it)

## Git identity
Commits in this repo have been auto-attributing to `ncasey@calmantel.com` based on
machine hostname (not deliberately configured). If you're a different agent/user,
consider setting your own local `user.name`/`user.email` so commit authorship is
accurate, rather than inheriting whatever the previous tool left configured.

## Working directory caution
This repo lives inside a **OneDrive-synced folder**
(`.../OneDrive - California Mantel and Fireplace/Desktop/Calmantel.com Rebuild/calmantel`).
If multiple agents/processes write to it concurrently, OneDrive sync can cause file
locks or conflicted copies. Prefer sequential work (finish and commit before the
next agent starts) over truly parallel edits in this same folder.

