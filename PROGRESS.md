# PROGRESS

Branch: migrate/next-tsx (created, local only) Next version: **16.4.6** (Turbopack) Hosting: GitHub Pages custom domain → **https://www.abhijitguragain.com.np/** (apex https://abhijitguragain.com.np/ 301s to www; no basePath needed; decided 2026-11-11)

## Phases

- [x] 0 Audit
- [x] 1 Scaffold
- [x] 2 Types/content
- [x] 3 Components
- [x] 4 Pages
- [x] 5 Design
- [x] 6 SEO
- [x] 7 Perf/a11y
- [x] 8 Case studies
- [x] 9 Cleanup

## Files to convert (filled by Phase 0, leaf components first)

### Phase 2 — utils / data → TS (max 5 files per batch) — DONE 2026-11-11

- [x] `src/lib/site.js` → `src/lib/site.ts` — NavLink type, navLinks + monogram (merged the two legacy duplicates)
- [x] `src/data/site.js` — merged into profile.ts / site.ts (dropped duplicate; bioShort kept in profile.ts)
- [x] `src/data/projects.js` → `src/content/projects.ts` — 2 live + 1 in-progress (featuredProject), TODOs inside
- [x] `src/data/skills.js` → `src/content/skills.ts` — Core: React, TS, Next.js, Tailwind, TanStack Query, Zustand, RHF, Zod; Working: JavaScript, Vite, Bun, Node.js (owner-confirmed)
- [x] `src/data/experience.js` → `src/content/experience.ts` — 1 entry; single bucket pending owner split (TODO)
- [ ] SKIP `src/data/terminal.js` (dead code — delete, don't convert)
- [ ] SKIP `src/theme/ThemeProvider.jsx` (owner Q1: drop with light/dark theme system)

New files: `src/content/{types.ts, profile.ts, projects.ts, skills.ts, experience.ts}` — `bioShort` exported from profile.ts (not in Profile type; note in report).

### Phase 3 — components → TSX (leaf first, ~5 per batch)

Batch A — DONE 2026-11-11 (Footer, Navbar, Skills, Projects, About):
- [x] `src/components/Footer.tsx` (kind: leaf client; window.scrollTo handler; YEAR as build-time module const)
- [x] `src/components/Navbar.tsx` (kind: client; useState/useEffect, Motion; DEAD `scrolled` state + scroll effect REMOVED)
- [x] `src/components/Skills.tsx` (kind: leaf; tiered Core/Working render; owner WIP `px-6` removal applied — stash@{0} still kept)
- [x] `src/components/Projects.tsx` (kind: leaf; in-progress card renders as non-anchor + "In progress" chip; no invented URLs; role not rendered)
- [x] `src/components/About.tsx` (kind: leaf; verbatim copy; dead `motion`/`siteConfig` imports dropped)
- UNUSED primitives NOT converted (owner chose): `components/ui/Button.jsx`, `components/Button/Button.jsx`, `components/ui/Card.jsx` — pending Q2 (delete candidate in Phase 9)

Batch B — DONE 2026-11-11 (Experience, Contact, Hero):
- [x] `src/components/Experience.tsx` (kind: leaf; array model; bullets flattened; `type: Full-time` + tenure string dropped — no slots)
- [x] `src/components/Contact.tsx` (kind: leaf; mailto + location + socials from content; CodePen filtered out — TODO(owner)/Q8)
- [x] `src/components/Hero.tsx` (kind: leaf client; framer-motion entrance kept; `next/image` fill + object-top, priority; meImage.jpg copied to src/assets/)
- NEW `src/lib/socials.ts` — shared label→icon map + `socialLinks` (filters TODO(owner) hrefs)
- NEW `src/assets/meImage.jpg` — copied from legacy (original kept in legacy/)

Batch C — nothing left to convert (all section components done in A+B):
- [ ] Phase 4 consumes everything above (App.jsx / index.html equivalents: `src/app/layout.tsx`, `src/app/page.tsx`)

Note: temp render check page removed (`src/app/dev/`); `src/app/_dev` is a private folder in App Router and NOT routable — the 5-component smoke test was done at `/dev`. `.next/dev` cache must be cleared if a route is deleted (stale validator.ts).

Empty `src/components/SectionHeading/` — delete or ignore.
NOT imported anywhere (delete candidates, don't convert): `src/App.css`, `src/assets/react.svg`, `public/vite.svg`.

## Decisions

- **dsa-visualization added to the portfolio** (owner-posted DSA README, 2026-11-11): project entry `slug: 'dsa-visualization'`, status `'live'` (repo 200, site 200, verified), stack from owner's README (React, TypeScript, Vite, Tailwind CSS, DaisyUI), summary verbatim from README, live + code links (both owner-supplied), role TODO(owner). Case-study JSON added (`src/content/case-studies/dsa-visualization.json`) with only README-sourced decisions (immutable frames/pure algos, Tailwind 4 + DaisyUI v5 themes, React Compiler); everything else TODO(owner). If owner prefers `in-progress` over `live`, flip one word in src/content/projects.ts.
- **Phase 1 done (2026-11-11):** Next.js **16.4.6** scaffolded (Turbopack, cacheComponents + partialPrefetching enabled by scaffold defaults — revisit at Phase 6 with static-export question). React bumped 19.2.0 → 19.3.0 by scaffold. Tailwind **4.3.3** (@tailwindcss/turbopack, CSS-first) + **daisyui 5.7.50** (devDep). `legacy/` holds the old Vite app (git mv, public/ stays at root). `package-lock.json` removed as approved. **bun was not installed on this machine** — owner approved `npm install -g bun` (bun 1.4.4). bun.lock committed; CI `--frozen-lockfile` will work.
- `_scaffold` in phase.md/agents.md fails create-next-app (npm naming: no leading underscore) → scaffold was done in `scaffold-tmp` (owner-approved). phase.md should be updated.
- layout.tsx uses `ReactNode` children typing instead of Next 16's generated `LayoutProps<"/">` global (needs `.next/types` from a build; fails fresh-clone `tsc`).
- `dist/` (old Vite build output on disk) added to ESLint globalIgnores — it sourced all 1155 lint problems. Not deleted (ask first).
- tsconfig: `strict: true` (scaffold default) + exclude `legacy`; eslint ignores `legacy/**`.
- `next-env.d.ts` committed (scaffold gitignores it; committing keeps `bunx tsc --noEmit` green on fresh clones).
- Hosting: GitHub Pages via `.github/workflows/deploy.yml` (push to `main` → bun install → bun run build → upload `./dist` → deploy-pages). Custom domain serves at root; Vite `base: '/'` was correct.
- **Phase 4 done:** `/projects/[slug]` awaits params in the render shell + `export const instant = false` (Next 16 + cacheComponents rejects `dynamicParams`; Suspense-streamed notFound() can only inject noindex — docs `loading.md#status-codes` — so shell-side notFound() gives a real 404). If cacheComponents is disabled at Phase 6 for static export, revisit the config.
- Canonical host for Phase 6 metadata: `https://www.abhijitguragain.com.np/` (apex redirects there). `output: 'export'` almost certain (Pages is static) — owner confirmation + `next/image` consequences to be handled at Phase 6 before changing anything.
- `deploy.yml` uploads `./dist`; Next static export writes `out/`. The workflow path must change when static export is enabled — needs owner approval (do not touch until confirmed).
- CI uses `bun install --frozen-lockfile` → `bun.lock(b)` must be committed.
- Package manager: **bun only**. Owner approved removing `package-lock.json`.
- **framer-motion** (already installed, v12) is the Motion library. Not switching to the `motion` package.
- **Tailwind CSS v4 + DaisyUI v5** (owner decision 2026-11-11, overriding previous "use version already in repo" rule). AGENTS.md §2 updated to record it. DaisyUI is installed + configured but components stay hand-styled per the design spec; DaisyUI only for primitives where it fits. No heavy rewrite of the design spec in section 4.
- `src/sections/Skills.jsx` WIP stashed: `git stash push -m "wip: Skills.jsx before migration start"`. Pop when Skills.jsx is converted (Phase 3).
- `agents.md` / `phase.md` left untracked in repo root.
- Migration involves `/projects/[slug]` route — current site is a VITE SPA with **no react-router**; route does not exist yet (will be created in Phases 2–4/8).

## Open questions for owner

Answered 2026-11-11 (owner):
- Q1. Theme: owner APPROVED the new dark theme tokens for Phase 5 — "Update the css theme to new one, if i dont like that i will tell you to update that." Proceed; owner will veto after seeing it.
- Q2. Unused primitives (ui/Button, Button/Button, ui/Card): "wait for its designated phase" → keep unconverted; decide in Phase 9 cleanup.
- Q3. Experience buckets: project names must stay generic — **Digital Registry / Learning Management System / School Management System** (names cannot be disclosed publicly). Bullets apply across all three; listed once on purpose. Bucket name set in src/content/experience.ts (not rendered yet).
- Q4. Skills: Core = React, TypeScript, Next.js, Tailwind, TanStack Query, Zustand, React Hook Form, Zod; Working = JavaScript, Vite, Bun, Node.js (applied). TanStack Table: STILL NOT CONFIRMED — do not add yet.
- Q5. Wording: "minimal and subtle and simple" — applied this pass (bioShort, headline "Scalable"→"Maintainable", About 3 paragraphs trimmed, experience bullets 1 & 4 trimmed).
- Q8. CodePen REAL: https://codepen.io/Abhijit-Guragain-the-lessful — added (icon: lucide `Codepen`, deprecated-brand; revisit when lucide v1 ships).
- Q6 (featuredProject links), Q7 (Aninfo repo link), Q9 (og-image.png), Q10 (canonical www), Q11 (output: 'export'), Q12 (Kathmandu vs Lalitpur — keep both, silent), Q13 (LISDR) — still OPEN.

## Last report

Phase 9 done 2026-11-11 (cleanup) **plus the owner's modular→DSA-visualization reversal and §4 padding fix**:
- legacy/ DELETED (zero runtime refs — only docs/comments mentioned it); tsconfig/eslint/.gitignore stale exclusions removed; package.json inert trustedDependencies/ignoreScripts dropped; README rewritten (stack, bun install, bun dev, build, folder layout; ⚠️ documents that deploy.yml still uploads ./dist and that output:'export' awaits owner go-ahead).
- §4 layout spec → uniform 64px section padding (owner feedback after reviewing 1440px screenshot); all five sections + case-study page updated.
- **Owner-requested reversal:** Modular UI Component Library REMOVED from projects (+ case-studies JSON + loader entries); About "What I'm building" + stat tile now point to DSA Visualization (owner README phrasing). DSA viz = current project.
- **Owner's uncommitted edits left untouched and untouched by the commit:** src/app/page.tsx (About reordered above Projects) and src/content/skills.ts (TanStack Table → Core; Working knowledge expanded: Python, Django, PostgreSQL, Git, GitHub Actions, NGINX).
- Rescue note: a PowerShell Set-Content pipeline double-encoded UTF-8 into 5 component files; recovered by git-restoring those 5 files to HEAD and re-applying the two intended edits with the edit tool. No other files affected; mojibake scan clean (no matches repo-wide).
- Gates: tsc ✓ · build ✓ · eslint ✓. NOT pushed.

PENDING: output: 'export' + deploy.yml ./dist → ./out (owner go-ahead). Owner WIP: page.tsx, skills.ts (uncommitted).

PENDING OWNER DECISION (blocks deploy): output: 'export' + images.unoptimized for GitHub Pages (host: static-only — confirmed). See report for the next/image consequences. deploy.yml ./dist → ./out ready to flip on approval.

Correction needed in workflow: `.github/workflows/deploy.yml` still uploads `./dist` (Vite) → Next builds to `out/` only with `output: 'export'`; decide at Phase 6 (needs owner approval).

Setup (before Phase 0):
- Setup files committed as `b0f0763` on `migrate/next-tsx` (local only)
- `src/sections/Skills.jsx` stashed (`stash@{0}`)
- AGENTS.md §2 updated for Tailwind v4 + DaisyUI v5
