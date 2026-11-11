# MIGRATION_AUDIT — React/Vite (JSX) → Next.js App Router (TSX)

Date: 2026-11-11 · Branch: `migrate/next-tsx` · Auditor: agent (read-only, no code changed)

---

## 1. Git state (at start of audit)

- Branch: `migrate/next-tsx` (created from `main` @ `bb222c5`; `main` left untouched, never pushed).
- Working tree before commit `b0f0763`: only untracked setup files. After commit: **clean tree**.
- Setup commit `b0f0763` added: `agents.md`, `phase.md`, `PROGRESS.md`, `docs/.gitkeep` (+ AGENTS.md update for Tailwind v4 / DaisyUI v5).
- Stashed WIP: `stash@{0}` — `src/sections/Skills.jsx` ("wip: Skills.jsx before migration start"). Pop in Phase 3 when Skills is converted.
- `package-lock.json` still present (owner approved its removal once bun lockfile exists — do in Phase 1).

## 2. Repo tree (excluding node_modules/, .git/, dist/)

```
.claude/launch.json, .claude/settings.local.json   (agent tooling, not app code)
.github/workflows/deploy.yml                          (GitHub Pages deploy on push to main; artifact ./dist)
.gitignore, eslint.config.js, postcss.config.js, tailwind.config.js
agents.md, phase.md, PROGRESS.md, README.md
index.html                                             (Vite entry HTML, meta/SEO/JSON-LD/theme pre-paint script)
package.json, package-lock.json, vite.config.js
public/favicon.svg, public/vite.svg
src/main.jsx, src/App.jsx, src/index.css, src/App.css
src/assets/meImage.jpg (249 KB), src/assets/react.svg (unused)
src/components/{Button/Button.jsx, ui/Button.jsx, ui/Card.jsx, Navbar/Navbar.jsx, Footer/Footer.jsx}
src/components/SectionHeading/                          (EMPTY directory)
src/data/{site.js, projects.js, skills.js, experience.js, terminal.js}
src/lib/site.js
src/sections/{Hero, About, Skills, Projects, Experience, Contact}.jsx
src/theme/ThemeProvider.jsx
```

## 3. Build tool & stack (from package.json)

- Build tool: **Vite 7.2.4** (`vite.config.js`, `@vitejs/plugin-react` 5.1.1, ESM, `base: '/'`, dev port 5173 or `$PORT`)
- React **19.2.0** / react-dom 19.2.0; `"type": "module"`, `"private": true`
- **Router: none.** Single-page app; all sections rendered on one page via `App.jsx`. No `react-router`.
- Tailwind CSS **3.4.17** + PostCSS 8 + autoprefixer (`tailwind.config.js`: `darkMode: 'class'`, semantic color tokens from CSS vars, system font stack, `maxWidth.feed: 1128px`, content scans `./index.html` + `src/**`).
- UI libraries: **framer-motion 12.23.24**, **lucide-react 0.555.0**. No DaisyUI, no shadcn, no state libs, no router, no helmet.
- Scripts: `dev`, `build` (`vite build`), `lint` (`eslint .`), `preview`. No test runner. No type checking.
- Node types: `@types/react`, `@types/react-dom` present but **no TypeScript**, no tsconfig.

## 4. Routes & what renders them

| Route | File | Notes |
|---|---|---|
| `/` (only) | `index.html` → `src/main.jsx` → `src/App.jsx` | Composes: `<Navbar /> <main>` → Hero → About → Skills → Projects → Experience → Contact `</main> <Footer />` |

No other routes, no 404 route, no dynamic route. `/projects/[slug]` **does not exist** yet — created in Phases 2–4/8.

## 5. File inventory (.jsx/.js), purpose and kind

| File | Kind | One-line purpose |
|---|---|---|
| `src/main.jsx` | **entry** | createRoot + StrictMode; imports `index.css` + `App` |
| `src/App.jsx` | **layout/root** | Wraps everything in `ThemeProvider`; composes Navbar/sections/Footer |
| `src/index.css` | global CSS | `@tailwind` directives; light/dark CSS vars (`--bg` etc.); base styles, scrollbar, reduced-motion |
| `src/App.css` | global CSS (**dead**) | Vite template remnant; **not imported anywhere** |
| `src/main`… | | |
| `src/theme/ThemeProvider.jsx` | **hook/context provider** | light/dark `ThemeContext`; `localStorage('theme')`; pre-paint script twin in `index.html`; `useTheme` never consumed |
| `src/lib/site.js` | **data** | `siteConfig` (name, monogram, headline, email, location, socials object) + `navLinks` |
| `src/data/site.js` | **data** | `navLinks` (dup), `socials` array, `siteConfig` (dup, + `bioShort`) |
| `src/data/projects.js` | **data** | `projects[]` (lofi clock, aninfo) + unused `featuredProject` (open-source UI lib) |
| `src/data/skills.js` | **data** | `skills` grouped frontend/stateData/forms/build with **percentage levels** |
| `src/data/experience.js` | **data** | one experience entry (Insight Workshop, Mar 2023–Present) + bullets |
| `src/data/terminal.js` | **data (dead)** | `terminalCode` lines; **never imported** |
| `src/components/Navbar/Navbar.jsx` | **client composite** | fixed pill nav, desktop + AnimatePresence mobile menu; `window.scrollY`; `scrolled` state **set but never read** |
| `src/components/Footer/Footer.jsx` | **leaf** | footer: monogram, name · role, © `new Date().getFullYear()`, "Back to top" (`window.scrollTo`) |
| `src/components/Button/Button.jsx` | **leaf (unused)** | polymorphic button/anchor, pill variant |
| `src/components/ui/Button.jsx` | **leaf (unused)** | second, older pill-button variant (`as` prop) |
| `src/components/ui/Card.jsx` | **leaf (unused)** | framer-motion `motion.section` card with title/action slot |
| `src/components/SectionHeading/` | — | **EMPTY directory, no files** |
| `src/sections/Hero.jsx` | **leaf section** | LinkedIn-style profile header; banner gradient, `meImage.jpg`, socials icons, framer-motion entrance |
| `src/sections/About.jsx` | **leaf section** | bio + stack lists + 3 stat cards (imports `motion`, **never uses it**) |
| `src/sections/Skills.jsx` | **leaf section** (internal `SkillGroup`) | chip list of skills from `data/skills.js` |
| `src/sections/Projects.jsx` | **leaf section** (internal `ProjectCard`) | project cards; external links |
| `src/sections/Experience.jsx` | **leaf section** | single-employer layout: info card + bullet list |
| `src/sections/Contact.jsx` | **leaf section** | email/location + social links + inline CodePen SVG |

No custom hooks exist. No utilities (`src/lib/` holds data only). No `.ts/.tsx` anywhere.

## 6. Assets, env, browser APIs, SVG-as-component

### Environment variables
- **None.** No `.env*` files; no `import.meta.env` / `process.env` / `VITE_*` / `REACT_APP_*` anywhere in `src/` or `index.html`.

### Fonts
- **No web fonts.** `tailwind.config.js` uses a system stack (-apple-system, … Segoe UI, Roboto). Comments say "LinkedIn's system font stack — no web fonts to load". (Target spec wants Inter + JetBrains Mono via `next/font` — addition in Phase 4/5.)

### Global CSS
- `src/index.css` (imported once in `main.jsx`): Tailwind directives + CSS-variable theming (light `:root` + `.dark`), `scroll-behavior: smooth` (+ reduced-motion override), scroll-margin-top for anchored sections, custom scrollbar.
- `src/App.css` — dead, unreferenced.
- `index.html` inline `<script>` reads `localStorage.theme` / `matchMedia` and sets `<html class="dark">` pre-paint.

### Static assets
- `public/favicon.svg` — referenced by `index.html` (`rel="icon"`).
- `public/vite.svg` — unreferenced (Vite template leftover).
- `src/assets/meImage.jpg` — hero portrait (only image import; imported by `Hero.jsx`).
- `src/assets/react.svg` — unreferenced.
- **`og:image` → `https://abhijitguragain.com.np/og-image.png` — FILE DOES NOT EXIST in `public/`** (template/meta references a 404). Check with owner in Phase 6.

### window / document / localStorage / matchMedia
| File | Usage |
|---|---|
| `index.html` (inline script) | `localStorage.getItem('theme')`, `matchMedia`, `document.documentElement` |
| `src/theme/ThemeProvider.jsx` | `window`, `localStorage`, `document.documentElement`, `matchMedia` (useState initializer) |
| `src/components/Navbar/Navbar.jsx` | `window.scrollY`, `addEventListener`/`removeEventListener` inside `useEffect` (OK pattern) |
| `src/components/Footer/Footer.jsx` | `window.scrollTo` in onClick (needs `'use client'` in Next) |
| `src/main.jsx` | `document.getElementById('root')` (Vite entry — disappears in Next) |

### SVG imported as a component
- **None.** `Contact.jsx` contains one **inline** `<svg>` (CodePen glyph). No `*.svg` is imported as a React component; no SVGR/plugin in use.

### Other findings (important)
1. **Duplicated content sources:** `src/lib/site.js` ↔ `src/data/site.js` both export `siteConfig` (near-identical) and `navLinks` (identical). Navbar/Hero/Contact import from `lib/site.js`; Footer imports from `data/site.js`.
2. **Unused/dead code:** `App.css`, `data/terminal.js`, `ui/Button.jsx`, `ui/Card.jsx`, `Button/Button.jsx`, `featuredProject` (unused export), `react.svg`, `public/vite.svg`, empty `SectionHeading/`, `useTheme()` (ThemeProvider used, hook unused).
3. **`new Date().getFullYear()` in render** (Footer) — hydration-mismatch risk in SSR; compute at build time or accept.
4. **Canonical/OG URLs use apex** (`https://abhijitguragain.com.np/…`) but apex 301s to **www** (`https://www.abhijitguragain.com.np/`) — canonical point at redirect source. Fix in Phase 6.
5. **Placeholder link:** `codepen: 'https://codepen.io/your-profile'` in `lib/site.js` — ships to production today; in Contact.jsx's socials.
6. **Suspected content bug:** `aninfo` project's `github.` points to `…/lofi-digital-clock` (same as the other project) — verify with owner; do not silently fix.
7. **Skills data shape** is `{ name, level: 0–100 }` with custom groups (Frontend/State/Forms/Build) — incompatible with the Phase 2 tiered model `{ tier: 'core'|'working', items: string[] }`. Content must be restructured, not just copied (Phase 2 will need owner input on tiers).
8. **Marketing wording present in copy** (About: "high-performance", "meticulous"; data/site.js bioShort "high-performance…") — AGENTS.md §5 discourages these unless owner-supplied numbers/examples exist. Phase 2 copies verbatim per its rule; flag for owner review.
9. **`ThemeProvider` + `.dark` class strategy + pre-paint script = light/dark toggle** — AGENTS.md §4/§8 target is **dark-only, no toggle**. Entire files will be dropped, not converted (see risks).
10. **Navbar `scrolled` state unused** — harmless but real dead state.
11. README references "Philosophy" section & `TerminalVisual`/`meImage` mentions — README is aspirational/inaccurate vs. actual code (cosmetic; Phase 9 updates README).
12. `tailwind.config.js` + PostCSS are **Tailwind v3 style** — repo is getting Tailwind **v4** per owner decision (CSS-first, `@import "tailwindcss"`). Config files get replaced in Phase 1/5.
13. `deploy.yml` uploads `./dist`; Next static export emits `out/` — workflow path needs owner's OK before any push to main (flagged, untouched).
14. README claims Tailwind "primary" and Vite+npm; AGENTS mandates bun — docs cleanup in Phase 9.

## 7. Conversion order proposal (leaf components first) → checklist in PROGRESS.md

Data/util conversion = Phase 2 (max 5 files/batch). Components = Phase 3 batches of 5.

**Phase 2 (utils/hooks/data → TS):**
1. `src/lib/site.js` → `src/lib/site.ts` (+ `src/data/site.js` must be reconciled FIRST — see risks)
2. `src/data/site.js` → (merge into `lib/site.ts` or drop duplicate — owner decision)
3. `src/data/projects.js` → `src/content/projects.ts`
4. `src/data/skills.js` → `src/content/skills.ts`
5. `src/data/experience.js` → `src/content/experience.ts`
6. `src/data/terminal.js` → **drop** (dead)
7. No custom hooks to convert; `theme/ThemeProvider.jsx` → **drop** (dark-only spec) — owner confirm

**Phase 3 (components, leaf first, ~5/batch):**
- Batch A: `components/ui/Button.jsx`*, `components/Button/Button.jsx`*, `components/ui/Card.jsx`*, `components/Footer/Footer.jsx` (*unused — convert or drop, owner decides)
- Batch B: `components/Navbar/Navbar.jsx`, `sections/Skills.jsx`, `sections/Projects.jsx`, `sections/About.jsx`, `sections/Experience.jsx`
- Batch C: `sections/Contact.jsx`, `sections/Hero.jsx` (+ App.jsx → Phase 4 composition)

(App.jsx and index.html are consumed by Phase 4's layout/page, not converted as components.)

## 8. Risks & questions for owner

**Risks**
- R1. Tailwind v3 → v4 rewrite of the whole styling layer (config → CSS-first). All class names in JSX survive; theme tokens move into `@theme`. Biggest single-file risk: `index.css`.
- R2. `meImage.jpg` (249 KB, portrait) — must become `next/image`; fine.
- R3. Static export (`output: 'export'`) on GitHub Pages → `next/image` needs `images.unoptimized: true` (confirmed consequences at Phase 6).
- R4. `deploy.yml` path `./dist` → `./out` when static export ships; needs your approval (I won't touch it now).
- R5. hydration: `new Date().getFullYear()` in Footer + any `Date`/`Math.random` in render — must move/verify (currently only Footer + none others).
- R6. Dark-only target vs. existing light/dark theme system — everything theme-related gets deleted, not converted.

**Questions**
- Q1. **Theme**: confirm we drop the light/dark toggle entirely (target is dark-only per AGENTS.md §4/§8) — delete `theme/ThemeProvider.jsx`, `.dark` CSS vars, pre-paint script in `index.html`?
- Q2. **Dead code**: delete vs. convert? Specifically `components/ui/Button.jsx`, `components/ui/Card.jsx`, `components/Button/Button.jsx` (two unused Button variants), `App.css`, `data/terminal.js`, `src/assets/react.svg`, `public/vite.svg`, empty `SectionHeading/`. (Recommendation: delete unconverted in Phase 9, or never convert them.)
- Q3. **Duplication**: `lib/site.js` vs `data/site.js` — keep one `siteConfig` (I'll use `lib/site.ts` merged with `data/site.js`'s `bioShort`)? Footer then uses the same import.
- Q4. **Skills model**: old = levels 0–100 + custom group names; target = `Core` vs `Working knowledge` tiers, no levels. Confirm: flatten to names under two tiers, e.g. Core: React, TypeScript, Tailwind, TanStack Query, Zustand, React Hook Form, Zod (+ Next.js once migrated); Working knowledge: JavaScript?, Vite, Bun, Node.js — and does Next.js get listed as Core (per AGENTS §5) even though not yet used professionally? Also TanStack **Table** is listed in AGENTS §5 Core but not used/shown on the old site — confirm whether TanStack Table appears (leave out until owner confirms real experience).
- Q5. **Content wording** (AGENTS §5): About copy uses "high-performance"/"meticulous" etc. Phase 2 copies verbatim — keep as-is knowingly? I will not rewrite silently.
- Q6. **`featuredProject`** ("Modular UI Component Library", link `#`, challenge text) — target AGENTS pages list only projects from content; include as an in-progress project on `/` (it is real per README) with `TODO(owner)` links, or hold entirely until finished?
- Q7. **Aninfo `github:` link** points to `lofi-digital-clock` repo — confirm correct URL (or TODO(owner)).
- Q8. **CodePen link** `https://codepen.io/your-profile` — placeholder in production; real CodePen handle or drop the icon?
- Q9. **`og-image.png`** referenced but missing — supply one (Phase 6) or drop og:image until created?
- Q10. **Canonical host**: existing meta uses apex; live apex redirects to `www.abhijitguragain.com.np`. Confirm canonical = **www** for Phase 6 (sitemap/canonical/OG/JSON-LD).
- Q11. **GitHub Pages = static export**: confirm `output: 'export'` + `images.unoptimized: true` in Phase 6 (tells `next/image` there's no optimization server).
- Q12. **Insight Workshop location** `Bhanimandal-04 Lalitpur` vs. Hero "Based in Kathmandu" — keep both as-is (they're different facts) — confirm.
- Q13. **LISDR (Government of Nepal)** — not mentioned anywhere on the old site; appears in AGENTS §5 as needing confirmation before publishing. Anything to add now, or leave out entirely?
