# Kidsense

An evidence-informed, illustrated single-page app explaining everyday child behavior — why kids
do what they do, and what actually helps. Built as a React SPA, designed to deploy as an **Azure
Static Web App**.

**Status: all 75 planned topics are published** (Morning Routine: 10/10, Homework: 10/10,
Eating: 10/10, Behaviour: 15/15, Emotions: 15/15, Digital Era: 15/15). See
[Adding content](#adding-content) below for how to extend Kidsense with new topics.

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

---

## Architecture

```
src/
  types/content.ts          Topic & Section interfaces — the entire content contract
  content/
    section1-morning-routine.ts
    section2-homework.ts
    section3-eating.ts
    sections.ts              Registers all sections; only file that needs a new entry
  assets/illustrations/
    registry.tsx              All hero illustrations as real JSX components (not raw SVG
                               strings — see "Why no dangerouslySetInnerHTML" below)
  components/                 One folder per component: Component.tsx + .module.css + .test.tsx
  pages/                      HomePage, SectionPage, TopicPage, NotFoundPage
  utils/search.ts             Pure, dependency-free search/ranking function
  styles/global.css           Design tokens (colors, spacing, radii) + self-hosted @font-face
  App.tsx                     Route tree
  main.tsx                    Entry point
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

### Print support

Every topic page includes a **Print this page** button. Print styles are defined per-component
(`@media print` blocks inside each `.module.css`) and are tuned to fit one A4 sheet.

---

## Security

This is a static, client-only app — there is no backend, no API, no user data collected, and no
authentication. Security effort went into hardening what a static site _can_ control:

- **Content Security Policy** (`staticwebapp.config.json`): `script-src 'self'` only — no inline
  scripts, no `eval`, no third-party script origins. `connect-src 'self'` — the app makes zero
  runtime network requests (verified: production bundle contains no external fetch/XHR targets).
- **Self-hosted fonts.** Baloo 2 and Nunito are bundled as static `.woff2` assets under
  `public/fonts/` instead of loaded from Google Fonts at runtime — no third-party request, no
  tracking surface, and the app works offline once cached.
- **No `dangerouslySetInnerHTML` anywhere in the codebase.** All 75 hero illustrations were
  authored as real SVG markup, then mechanically converted to genuine JSX components
  (`src/assets/illustrations/registry.tsx`) rather than injected as raw HTML strings. This is
  enforced by a custom ESLint rule (`no-restricted-syntax` in `eslint.config.js`), not just
  convention.
- **Standard security headers** set globally in `staticwebapp.config.json`:
  `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy:
strict-origin-when-cross-origin`, `Permissions-Policy` (camera/mic/geolocation/etc. all
  disabled), `Strict-Transport-Security` (HSTS with preload), `Cross-Origin-Opener-Policy`, and
  `Cross-Origin-Resource-Policy`.
- **Dependency hygiene.** `npm audit --audit-level=high` runs in CI on every push; the project
  currently sits at 0 known vulnerabilities. Dependencies are pinned to specific patched major
  versions rather than left on old ranges.

---

## Testing & quality gates

- **Framework:** Vitest + React Testing Library + `@testing-library/user-event`, running in
  jsdom.
- **176 tests** across 24 test files, covering every component, every page, routing/navigation,
  keyboard interaction in the search box, error boundary recovery, and content-data integrity.
- **Coverage is an enforced gate, not a report.** `vite.config.ts` sets
  `test.coverage.thresholds` (85% statements/functions/lines, 80% branches) via the v8 provider;
  `npm run test:coverage` exits non-zero if the project falls under these numbers. Current
  coverage sits at 99.6% statements / 98% branches / 100% functions / 100% lines.
- **Linting:** ESLint 9 flat config with `typescript-eslint`, `eslint-plugin-react-hooks`, and
  `eslint-plugin-jsx-a11y` (accessibility rules — every interactive element is checked for
  correct roles/labels). Run with `--max-warnings=0`, so warnings are build failures, not
  suggestions.
- **Type safety:** `strict: true` plus `noUncheckedIndexedAccess`, `noImplicitReturns`,
  `noImplicitOverride`, and related flags in `tsconfig.app.json`.

## CI/CD

**CircleCI is the pipeline of record** (`.circleci/config.yml`) — see
[ADR-0002](docs/architecture-decision-records/0002-circleci-alongside-github-actions.md) for why.
It runs the full quality gate (`npm audit`, typecheck, lint, format check, test with coverage,
build) on every commit, then deploys `main` to Azure Static Web Apps once the gate passes.

GitHub Actions still plays a supporting role:

- **`ci.yml`** — runs the same quality gate on every push and pull request as a GitHub-native
  status check (useful for branch protection and inline PR feedback), independent of CircleCI.
  It does not deploy.
- **`azure-static-web-apps.yml`** — a manual-only fallback deploy path (`workflow_dispatch`), in
  case CircleCI is ever unavailable. It no longer runs automatically on push.

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
   routine, and a closing insight.
2. Add a hero illustration: either reuse an existing `illustrationId` from
   `src/assets/illustrations/registry.tsx`, or add a new JSX component to that file and register
   it in `illustrationRegistry`.
3. Register the section in `src/content/sections.ts` (new sections) or bump `plannedTopicCount`
   (existing sections with more topics added).
4. Run `npm run verify`. No routing, component, or page code needs to change — the home page,
   section pages, topic pages, and search all pick up new content automatically.

The `registry.test.tsx` suite will automatically verify every `illustrationId` referenced by any
topic actually exists in the registry, so a typo'd id fails CI instead of shipping a broken page.

---

## Browser support

Targets evergreen browsers (`es2020` build target). No IE11 support.

## License / attribution

Source code is licensed under [MIT](LICENSE). Written content and illustrations are licensed
separately under [CC BY-NC-SA 4.0](CONTENT_LICENSE.md) — an original, evidence-informed
compilation written for Kidsense, not a substitute for professional medical, psychological, or
educational advice (see the in-app `/disclaimer` page and each topic's "When should parents be
concerned?" section).
