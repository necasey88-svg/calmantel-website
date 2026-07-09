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

## Multi-agent sync protocol (Codex ↔ Claude)
Codex's sandbox (`C:\Users\NatalieCasey\Documents\Codex\<date>\...\calmantel-codex`) cannot
reach `github.com:443` — it can commit locally but **cannot push**. Claude's checkout
(`.../OneDrive - California Mantel and Fireplace/Desktop/Calmantel.com Rebuild/calmantel`)
has working GitHub push access and is treated as the merge/publish point.

Codex's repo has a pre-configured remote for exactly this:
```
claude-local  ->  .../OneDrive .../calmantel   (fetch-only; push is disabled)
```

**Before starting new work, Codex (or whoever is driving it) should sync first** to avoid
forking from a stale base:
```
git fetch claude-local
git reset --hard claude-local/main    # safe ONLY if Codex's working tree is clean —
                                       # git status -s first; if dirty, stash or commit before resetting
```
This keeps Codex's local `main` identical to whatever was last pushed to production, so its
next commit's parent is current instead of days-old.

**When Codex finishes work and can't push:** tell Claude "Codex has done some work, N commits
ahead, ready to pick up." Claude's handoff flow (already exercised successfully):
1. `git remote add codex-tmp "<path to Codex's folder>"` in the Claude checkout, `git fetch codex-tmp`.
2. Diff/review the new commit(s) — `git show --stat`, then read the actual diffs, especially
   any file with real logic (not just className changes) before merging blind.
3. `git cherry-pick <sha>` for each new Codex commit, oldest first. If Codex's branch has
   diverged (check `git merge-base HEAD codex-tmp/main` vs `git log codex-tmp/main` — if the
   merge-base is behind Claude's recent commits, only cherry-pick the commits Claude doesn't
   already have, not the whole branch) — cherry-pick can auto-merge non-overlapping file
   changes fine (this has worked cleanly even when both sides touched
   `src/app/mantels/[slug]/page.tsx` — Claude reordering beam categories, Codex restyling
   the hero — resolve any real conflicts by hand and re-verify the merged file, don't just
   accept one side).
4. `git remote remove codex-tmp` when done.
5. `npx tsc --noEmit` then a full `npx next build --webpack` — do NOT push on typecheck alone,
   since Codex's sandbox can only get that far (no working `next build` there either) and a
   change that typechecks can still fail to build.
6. `git push origin main`.
7. **Sync Codex back** (see the fetch/reset block above) so its next round starts from the
   commit that's actually live, not from before the merge.

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

