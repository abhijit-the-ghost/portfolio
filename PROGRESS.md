# PROGRESS

Branch: migrate/next-tsx (created, local only) Next version: **16.4.6** (Turbopack) Hosting: GitHub Pages custom domain → **https://www.abhijitguragain.com.np/** (apex https://abhijitguragain.com.np/ 301s to www; no basePath needed; decided 2026-11-11)

## Phases

- [x] 0 Audit
- [x] 1 Scaffold
- [ ] 2 Types/content
- [ ] 3 Components
- [ ] 4 Pages
- [ ] 5 Design
- [ ] 6 SEO
- [ ] 7 Perf/a11y
- [ ] 8 Case studies
- [ ] 9 Cleanup

## Files to convert (filled by Phase 0, leaf components first)

### Phase 2 — utils / data → TS (max 5 files per batch)

- [ ] `src/lib/site.js` → `src/lib/site.ts` — leaf data (siteConfig + navLinks); FIRST reconcile with src/data/site.js (dup)
- [ ] `src/data/site.js` → merge into site.ts, drop duplicate (owner Q3)
- [ ] `src/data/projects.js` → `src/content/projects.ts` — 2 projects + unused featuredProject (owner Q6)
- [ ] `src/data/skills.js` → `src/content/skills.ts` — levels → tiered Core/Working model (owner Q4)
- [ ] `src/data/experience.js` → `src/content/experience.ts` — 1 entry (Insight Workshop, Mar 2023–Present)
- [ ] SKIP `src/data/terminal.js` (dead code — delete, don't convert)
- [ ] SKIP `src/theme/ThemeProvider.jsx` (owner Q1: drop with light/dark theme system)

### Phase 3 — components → TSX (leaf first, ~5 per batch)

Batch A (small leaf components):
- [ ] `src/components/ui/Button.jsx` (kind: leaf; UNUSED — owner Q2: convert or delete)
- [ ] `src/components/Button/Button.jsx` (kind: leaf; UNUSED — owner Q2)
- [ ] `src/components/ui/Card.jsx` (kind: leaf; UNUSED, framer-motion; owner Q2)
- [ ] `src/components/Footer/Footer.jsx` (kind: leaf; needs 'use client': window.scrollTo; new Date().getFullYear() → build-time)
- [ ] `src/components/Navbar/Navbar.jsx` (kind: client; useState/useEffect, window scroll, framer-motion AnimatePresence; dead `scrolled` state)

Batch B (sections, leaf):
- [ ] `src/sections/Skills.jsx` (kind: leaf; internal SkillGroup; stash@{0} holds uncommitted WIP)
- [ ] `src/sections/Projects.jsx` (kind: leaf; internal ProjectCard; external links)
- [ ] `src/sections/About.jsx` (kind: leaf; unused motion import)
- [ ] `src/sections/Experience.jsx` (kind: leaf)
- [ ] `src/sections/Contact.jsx` (kind: leaf; inline CodePen SVG; codepen placeholder link — owner Q8)

Batch C:
- [ ] `src/sections/Hero.jsx` (kind: leaf; meImage.jpg → next/image; framer-motion entrance; imports lib/site)
- [ ] `src/App.jsx` (layout/root — consumed by Phase 4 layout/page, not converted as a component)
- [ ] `index.html` (entry — replaced by src/app/layout.tsx in Phase 4; pre-paint theme script dropped per dark-only spec)

Empty `src/components/SectionHeading/` — delete or ignore.
NOT imported anywhere (delete candidates, don't convert): `src/App.css`, `src/assets/react.svg`, `public/vite.svg`.

## Decisions

- **Phase 1 done (2026-11-11):** Next.js **16.4.6** scaffolded (Turbopack, cacheComponents + partialPrefetching enabled by scaffold defaults — revisit at Phase 6 with static-export question). React bumped 19.2.0 → 19.3.0 by scaffold. Tailwind **4.3.3** (@tailwindcss/turbopack, CSS-first) + **daisyui 5.7.50** (devDep). `legacy/` holds the old Vite app (git mv, public/ stays at root). `package-lock.json` removed as approved. **bun was not installed on this machine** — owner approved `npm install -g bun` (bun 1.4.4). bun.lock committed; CI `--frozen-lockfile` will work.
- `_scaffold` in phase.md/agents.md fails create-next-app (npm naming: no leading underscore) → scaffold was done in `scaffold-tmp` (owner-approved). phase.md should be updated.
- layout.tsx uses `ReactNode` children typing instead of Next 16's generated `LayoutProps<"/">` global (needs `.next/types` from a build; fails fresh-clone `tsc`).
- `dist/` (old Vite build output on disk) added to ESLint globalIgnores — it sourced all 1155 lint problems. Not deleted (ask first).
- tsconfig: `strict: true` (scaffold default) + exclude `legacy`; eslint ignores `legacy/**`.
- `next-env.d.ts` committed (scaffold gitignores it; committing keeps `bunx tsc --noEmit` green on fresh clones).
- Hosting: GitHub Pages via `.github/workflows/deploy.yml` (push to `main` → bun install → bun run build → upload `./dist` → deploy-pages). Custom domain serves at root; Vite `base: '/'` was correct.
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

From Phase 0 audit (see docs/MIGRATION_AUDIT.md §8 for full list):

- Q1. Drop the light/dark theme system entirely (dark-only target)? (ThemeProvider.jsx, pre-paint script, .dark CSS vars)
- Q2. Dead code: delete or convert? (ui/Button, ui/Card, Button/Button, App.css, terminal.js, react.svg, vite.svg, empty SectionHeading/)
- Q3. lib/site.js vs data/site.js — merge into one siteConfig? (Footer imports data/site, everyone else lib/site)
- Q4. Skills model: levels → Core/Working tiers; does Next.js go in Core on day one? Is TanStack Table (AGENTS §5 Core) left out until used?
- Q5. About copy uses "high-performance"/"meticulous" — keep verbatim in Phase 2?
- Q6. featuredProject ("Modular UI Component Library", links '#') — include on / with TODO(owner) links, or hold until finished?
- Q7. aninfo project's github link points to lofi-digital-clock repo — correct URL?
- Q8. CodePen link "your-profile" — real handle or drop the CodePen icon?
- Q9. og-image.png referenced in meta but missing — supply one or drop og:image?
- Q10. Canonical = www.abhijitguragain.com.np (apex redirects there) — confirm for Phase 6?
- Q11. GitHub Pages is static → Phase 6: output: 'export' + images.unoptimized: true?
- Q12. "Based in Kathmandu" (hero) vs "Bhanimandal-04 Lalitpur" (experience) — keep both?
- Q13. LISDR (Government of Nepal) — anything to publish, or leave out?
- deploy.yml: change artifact path ./dist → ./out when static export lands? (Needed for Pages deploys post-merge.)

## Last report

Phase 1 (scaffold) done 2026-11-11: Next 16.4.6 + Tailwind v4 + DaisyUI v5 wired, old app in legacy/, gates green (tsc, eslint, build, dev+curl "Migration in progress" ×2). NOT pushed.

Correction needed in workflow: `.github/workflows/deploy.yml` still uploads `./dist` (Vite) → Next builds to `out/` only with `output: 'export'`; decide at Phase 6 (needs owner approval).

Setup (before Phase 0):
- Setup files committed as `b0f0763` on `migrate/next-tsx` (local only)
- `src/sections/Skills.jsx` stashed (`stash@{0}`)
- AGENTS.md §2 updated for Tailwind v4 + DaisyUI v5
