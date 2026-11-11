# PROGRESS

Branch: migrate/next-tsx (not created yet) Next version: (unknown) Hosting: GitHub Pages custom domain → **https://www.abhijitguragain.com.np/** (apex https://abhijitguragain.com.np/ 301s to www; no basePath needed; decided 2026-11-11)

## Phases

- [ ] 0 Audit
- [ ] 1 Scaffold
- [ ] 2 Types/content
- [ ] 3 Components
- [ ] 4 Pages
- [ ] 5 Design
- [ ] 6 SEO
- [ ] 7 Perf/a11y
- [ ] 8 Case studies
- [ ] 9 Cleanup

## Files to convert (filled by Phase 0, leaf components first)

- [ ] (path) (kind) (notes)

## Decisions

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

- `deploy.yml`: change artifact path `./dist` → `./out` when static export lands? (Needed for Pages deploys to work after migration merges to main.)
- LISDR (Government of Nepal) content — needs owner confirmation before it appears anywhere (AGENTS.md §5).
- Apex vs www: apex currently redirects to www — confirm www is the canonical we put in metadata/sitemap/canonical URLs.

## Last report

Setup complete (no phase started yet):
- git tree clean except untracked `agents.md`, `phase.md`, `PROGRESS.md`, `docs/.gitkeep`
- `src/sections/Skills.jsx` stashed
- AGENTS.md §2 updated for Tailwind v4 + DaisyUI v5
- Hosting + canonical domain identified via live probe
