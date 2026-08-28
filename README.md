# Kidsense

An evidence-informed, illustrated single-page app explaining everyday child behavior — why kids
do what they do, and what actually helps. Built as a React SPA, designed to deploy as an **Azure
Static Web App**.

**Status: all 75 planned topics are published**, each with authored perspectives, a cultural-lens
panel, and source attribution (Morning Routine: 10/10, Homework: 10/10, Eating: 10/10,
Behaviour: 15/15, Emotions: 15/15, Digital Era: 15/15). Two topics also ship real age-band
variants (tween and teen) via the age-band switcher. See [Adding content](#adding-content) below
for how to extend Kidsense with new topics.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
```

## Available scripts

| Script                  | What it does                                                              |
| ----------------------- | ------------------------------------------------------------------------- |
| `npm run dev`           | Start the Vite dev server with hot reload                                 |
| `npm run build`         | Type-check, then produce a production build in `dist/`                    |
| `npm run preview`       | Serve the production build locally, for a final sanity check              |
| `npm run typecheck`     | Run the TypeScript compiler in `--noEmit` mode                            |
| `npm run lint`          | Run ESLint (`--max-warnings=0` — warnings fail the build)                 |
| `npm run lint:fix`      | Run ESLint with autofix                                                   |
| `npm run format`        | Format the codebase with Prettier                                         |
| `npm run format:check`  | Check formatting without writing changes (used in CI)                     |
| `npm run test`          | Run the Vitest suite once                                                 |
| `npm run test:watch`    | Run Vitest in watch mode                                                  |
| `npm run test:coverage` | Run tests with coverage; **fails the command if thresholds aren't met**   |
| `npm run verify`        | The full quality gate: typecheck → lint → format check → coverage → build |

Before considering any change finished, run `npm run verify`. This is the same sequence CI runs.

**Git hooks (Husky) run this automatically** — `npm install` wires up a `pre-commit` hook
(`lint-staged`: ESLint `--fix` + Prettier on staged files) and a `pre-push` hook (the full
`npm run verify`), so a failing quality gate is caught locally before it costs a CI run. See
`.husky/` and the `lint-staged` key in `package.json`.

---

## Architecture

```text
src/
  types/content.ts          Topic & Section interfaces — the entire content contract
  content/
    section1-morning-routine.ts … section6-digital-era.ts
    ageBands.ts              Five age-band definitions + inference from `ageRanges` strings
    sections.ts              Registers all sections; only file that needs a new entry
  assets/illustrations/
    registry.tsx              All hero illustrations as real JSX components (not raw SVG
                               strings — see "Why no dangerouslySetInnerHTML" below)
  components/                 One folder per component: Component.tsx + .module.css + .test.tsx
  pages/                      HomePage, SectionPage, TopicPage, NotFoundPage, legal pages
  hooks/usePageMeta.ts        Sets per-route document title/description for SEO
  utils/
    search.ts                Pure, dependency-free search/ranking function
    theme.ts                 Light/dark theme persistence (localStorage + prefers-color-scheme)
  styles/global.css           Design tokens (colors, spacing, radii, light/dark palettes) +
                               self-hosted @font-face
  App.tsx                     Route tree
  main.tsx                    Entry point
scripts/generate-sitemap.ts   Build-time sitemap.xml generator (runs via tsx in `npm run build`)
```

**Content is data, not code.** A `Topic` is a plain TypeScript object (see
`src/types/content.ts`). Routing, search, the home page, section listings, and the topic detail
layout are all _derived_ from `src/content/sections.ts` — no page needs to change to add a topic
or a section.

### Design system

Colors, spacing, radii, and shadows live as CSS custom properties in `src/styles/global.css`
(`--blue`, `--red-bg`, `--radius-lg`, etc.) and are consumed by every component's CSS module.
Every topic page follows the same template: header → reassurance banner → 8 reason cards →
concerns/strategies split → insight footer. This is intentional — Kidsense is meant to feel like
one consistent reference, not 75 one-off pages.

**Dark mode** follows the OS `prefers-color-scheme` by default; the `ThemeToggle` in the header
lets a reader override it explicitly, persisted to `localStorage` and applied before first paint
(in `main.tsx`) to avoid a flash for returning visitors. Every color token has both a light and a
dark value — no component should hardcode a color outside these tokens.

### Age-band content variants

Most topics apply to every age within their `ageRanges`. Where the guidance genuinely differs by
developmental stage, a topic family can have more than one `Topic` object sharing the same `id`
within a section, each with a distinct `ageBandIds` (see `src/types/content.ts` and
`src/content/sections.ts`'s `getTopicVariants`/`selectTopicVariant`). `TopicPage` shows an
age-band switcher automatically whenever a family has more than one variant, and deep-links to
`/section/:sectionId/:topicId/:ageBandId`. Two topics currently ship a real variant this way —
see `src/content/section1-morning-routine.ts`'s `getting-dressed` (tween) and
`src/content/section6-digital-era.ts`'s `social-media-pressure` (teen) for worked examples.

### Print support

Every topic page includes a **Print this page** button. Print styles are defined per-component
(`@media print` blocks inside each `.module.css`) and are tuned to fit one A4 sheet.

---

## Security

This is a static, client-only app — there is no backend, no API, no user data collected, and no
authentication. Security effort went into hardening what a static site _can_ control:

- **Content Security Policy** (`staticwebapp.config.json`): `script-src 'self'` and `style-src
'self'` only — no inline scripts or styles, no `eval`, no third-party origins (the one dynamic
  per-card color in `ReasonGrid` cycles through CSS classes, not an inline `style` attribute).
  `connect-src 'self'` — the app makes zero runtime network requests (verified: production
  bundle contains no external fetch/XHR targets). `img-src 'self'` with no `data:` (the app uses
  zero `data:` URIs), plus explicit `frame-src`, `worker-src`, `manifest-src`, and `media-src`
  all set to `'none'` rather than left to the `default-src` fallback — the app uses none of
  iframes, workers, a web manifest, or audio/video.
- **Self-hosted fonts.** Baloo 2 and Nunito are bundled as static `.woff2` assets under
  `public/fonts/` instead of loaded from Google Fonts at runtime — no third-party request, no
  tracking surface, and the app works offline once cached.
- **No `dangerouslySetInnerHTML` anywhere in the codebase.** All 75 hero illustrations were
  authored as real SVG markup, then mechanically converted to genuine JSX components
  (`src/assets/illustrations/registry.tsx`) rather than injected as raw HTML strings. This is
  enforced by a custom ESLint rule (`no-restricted-syntax` in `eslint.config.js`), not just
  convention.
- **Standard security headers** set globally in `staticwebapp.config.json`:
  `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `X-XSS-Protection` explicitly
  suppressed (an empty override removes Azure's default `1; mode=block` — the legacy browser XSS
  auditor is deprecated and has itself been a source of vulnerabilities in older browsers; CSP is
  the real defense here), `Referrer-Policy: strict-origin-when-cross-origin`, a `Permissions-Policy`
  disabling 29 unused browser features/APIs (camera, mic, geolocation, USB, payment, etc.),
  `Strict-Transport-Security` (HSTS with preload), and the full cross-origin isolation triad —
  `Cross-Origin-Opener-Policy`, `Cross-Origin-Embedder-Policy`, and `Cross-Origin-Resource-Policy`
  (all `same-origin`/`require-corp`, safe since the app loads no cross-origin resources).
  `Upgrade-Insecure-Requests` is also declared as a standalone header for scanners that check for
  it separately, though Azure Static Web Apps' edge silently drops it from the actual response —
  the `upgrade-insecure-requests` CSP directive above is what browsers actually honor and does
  reach production.
- **Dependency hygiene.** `npm audit --audit-level=high` runs in CI on every push; the project
  currently sits at 0 known vulnerabilities. Dependencies are pinned to specific patched major
  versions rather than left on old ranges. `.github/dependabot.yml` opens automated update PRs
  weekly for npm and GitHub Actions.
- **Secret scanning.** `gitleaks` runs in both `ci.yml` and `.circleci/config.yml` on every push.
- **Responsible disclosure.** `public/.well-known/security.txt` (RFC 9116) and
  [`SECURITY.md`](SECURITY.md) point to GitHub's private vulnerability reporting.

---

## Testing & quality gates

- **Framework:** Vitest + React Testing Library + `@testing-library/user-event`, running in
  jsdom.
- **240 tests** across 34 test files, covering every component, every page, routing/navigation,
  keyboard interaction in the search box, error boundary recovery, age-band variant
  selection/switching, and content-data integrity.
- **Coverage is an enforced gate, not a report.** `vite.config.ts` sets
  `test.coverage.thresholds` (85% statements/functions/lines, 80% branches) via the v8 provider;
  `npm run test:coverage` exits non-zero if the project falls under these numbers. Current
  coverage sits at 99.2% statements / 94.8% branches / 100% functions / 99.7% lines.
- **Accessibility:** `jest-axe` runs a zero-violations assertion against `Layout`, `Header`,
  `HomePage`, `SectionPage`, and `TopicPage` in every test run — see
  `src/test/vitest-matchers.d.ts`/`jest-axe-module.d.ts` for how it's wired into Vitest's
  `expect`. This catches programmatically-detectable WCAG issues; a manual screen-reader pass is
  still needed for full WCAG 2.1 AA sign-off (see `docs/test-plan.md`).
- **Linting:** ESLint 9 flat config with `typescript-eslint`, `eslint-plugin-react-hooks`, and
  `eslint-plugin-jsx-a11y` (accessibility rules — every interactive element is checked for
  correct roles/labels). Run with `--max-warnings=0`, so warnings are build failures, not
  suggestions.
- **Type safety:** `strict: true` plus `noUncheckedIndexedAccess`, `noImplicitReturns`,
  `noImplicitOverride`, and related flags in `tsconfig.app.json`.

## CI/CD

**CircleCI is the pipeline of record** (`.circleci/config.yml`) — see
[ADR-0002](docs/architecture-decision-records/0002-circleci-alongside-github-actions.md) for why.
It runs the full quality gate (`npm audit`, `gitleaks` secret scan, typecheck, lint, format
check, test with coverage, build) on every commit, then deploys `main` to Azure Static Web Apps
once the gate passes.

GitHub Actions still plays a supporting role:

- **`ci.yml`** — runs the same quality gate (including `gitleaks`) on every push and pull
  request as a GitHub-native status check (useful for branch protection and inline PR feedback),
  independent of CircleCI. It does not deploy.
- **`azure-static-web-apps.yml`** — a manual-only fallback deploy path (`workflow_dispatch`), in
  case CircleCI is ever unavailable. It no longer runs automatically on push.
- **`azure-static-web-apps-lemon-rock-042da4500.yml`** — a second, redundant manual fallback
  (Azure-Portal-generated, tied to its own deploy token), kept in sync with the same quality
  gate as `azure-static-web-apps.yml`. Prefer the latter; this one exists only as a backstop.

Full setup instructions, including the one-time CircleCI project connection and Azure deploy
token, live in [`docs/deployment-runbook.md`](docs/deployment-runbook.md).

No other secrets are required — this app has no backend, no database, and no API keys.

---

## Adding content

All 75 originally planned topics are now published. The app remains deliberately built so that
adding further topics or entire new sections is a **content task, not an engineering task**:

1. Create `src/content/sectionN-name.ts` (or add to an existing section file), exporting/extending
   a `Topic[]` matching the interface in `src/types/content.ts`. Each topic needs: a three-line
   heading, a quote, age ranges, an `illustrationId`, a reassurance line, an explanation, exactly
   8 reason cards, a list of concerns, professional guidance, a list of strategies, a 4-step
   routine, and a closing insight. Follow `docs/content-style-guide.md` for voice/structure and
   `docs/editorial-and-sourcing-policy.md` for how to research and attribute a topic — research
   guidance via `WebSearch`/`WebFetch` against named authoritative organizations before writing;
   never fabricate a citation, quote, or URL.
2. Optionally add `perspectives` (teacher/clinician/teen — only where it's a genuinely distinct
   angle, not a reworded parent paragraph), `culturalLens` (2–4 notes), and `sources` (2–4 named
   organizations). All three panels render nothing until authored, so it's safe to omit them.
3. Where a topic's guidance genuinely differs by developmental stage, author a second `Topic`
   object with the same `id` and an explicit `ageBandIds` — see "Age-band content variants"
   above. Most topics don't need this; only fork when the mechanism itself changes with age, not
   just its intensity.
4. Add a hero illustration: either reuse an existing `illustrationId` from
   `src/assets/illustrations/registry.tsx`, or add a new JSX component to that file and register
   it in `illustrationRegistry`.
5. Register the section in `src/content/sections.ts` (new sections) or bump `plannedTopicCount`
   (existing sections with more topics added).
6. Run `npm run verify`. No routing, component, or page code needs to change — the home page,
   section pages, topic pages, search, and the build-time sitemap all pick up new content
   automatically.

The `registry.test.tsx` suite will automatically verify every `illustrationId` referenced by any
topic actually exists in the registry, and `sections.test.ts` verifies every topic family's
variants share a consistent `topicNumber`/`illustrationId` and don't claim overlapping age
bands — so a typo'd id or a malformed variant fails CI instead of shipping a broken page.

---

## Browser support

Targets evergreen browsers (`es2020` build target). No IE11 support.

## License / attribution

Source code is licensed under [MIT](LICENSE). Written content and illustrations are licensed
separately under [CC BY-NC-SA 4.0](CONTENT_LICENSE.md) — an original, evidence-informed
compilation written for Kidsense, not a substitute for professional medical, psychological, or
educational advice (see the in-app `/disclaimer` page and each topic's "When should parents be
concerned?" section).
