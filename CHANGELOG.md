# Changelog

All notable changes to this project are documented in this file. The format is based on
[Keep a Changelog](https://keepachangelog.com/), and this project intends to follow
[Semantic Versioning](https://semver.org/) once its first release is tagged.

## [Unreleased]

### Added

- Further CSP and Permissions-Policy tightening, chasing a security-scanner A+: dropped `data:`
  from `img-src` (the codebase uses zero `data:` URIs — all illustrations are real JSX, not
  images), and added explicit `frame-src 'none'`, `worker-src 'none'`, `manifest-src 'none'`,
  `media-src 'none'` (the app uses none of iframes, web workers, a web manifest, or audio/video,
  so these were previously only implicitly covered by the `default-src` fallback). Expanded
  `Permissions-Policy` from 6 to 29 disabled browser features/APIs the app doesn't use. Verified
  locally: `npm run verify` green, no behavior depends on any of the newly-blocked capabilities.

- Follow-up header hardening after re-scanning the deployed site: a scanner penalized
  `X-XSS-Protection` for being present at all, regardless of value — `X-XSS-Protection: 0` still
  scored a penalty, so it's now suppressed entirely (empty override removes Azure's default).
  Also added a standalone `Upgrade-Insecure-Requests: 1` response header; this is redundant with
  the `upgrade-insecure-requests` CSP directive already present (that's what browsers actually
  honor), but harmless to send alongside it.
- Hardened security headers after a live scan flagged gaps: dropped `'unsafe-inline'` from
  `style-src` in the CSP (the only inline style in the app, `ReasonGrid`'s per-card accent
  color, now cycles through CSS classes driven by a `--reason-color` custom property instead of
  a `style` attribute); added `Cross-Origin-Embedder-Policy: require-corp` to complete the
  cross-origin isolation triad alongside the existing COOP/CORP; and explicitly set
  `X-XSS-Protection: 0` to override Azure's default `1; mode=block`, since the legacy XSS
  auditor is deprecated and has itself been a source of vulnerabilities in older browsers — CSP
  is the actual defense. Verified locally that `ReasonGrid`'s tests and visuals are unaffected.
- Fixed the deployed site loading a blank page (`Failed to load module script ... MIME type of
"application/octet-stream"`). The `Azure/static-web-apps-deploy@v1` step was configured with
  `app_location: '/'` + `output_location: 'dist'`; with `skip_app_build: true` that combination
  doesn't resolve to the workspace's `dist` folder, so it deployed the raw, unbuilt repo root
  instead — production was serving `index.html`'s `<script type="module" src="/src/main.tsx">`
  directly, and browsers correctly refuse to execute a `.tsx` file as a module. Fixed by pointing
  `app_location` directly at the pre-built `dist` folder (the standard pattern for pre-built
  deploys), and moved `staticwebapp.config.json` into `public/` so Vite copies it into `dist/` on
  every build (it's no longer picked up from the repo root once `app_location` is `dist`).
  Confirmed locally: `dist/staticwebapp.config.json` exists after `npm run build`, and
  `dist/index.html` references the built `/assets/*.js` bundle, not `/src/main.tsx`.
- Fixed a live CI failure: `gitleaks-action` writes a `results.sarif` report into the workspace
  root, and since it ran before `npm run format:check` in `ci.yml`, Prettier flagged that
  unformatted report file and failed the whole `quality-gate` job — the ESLint step itself was
  passing. Added `*.sarif` to `.gitignore` and `.prettierignore`; confirmed locally by
  reproducing the artifact and re-running `format:check`.
- Local git hooks via Husky + lint-staged, installed automatically by `npm install`: a
  `pre-commit` hook runs `lint-staged` (ESLint `--fix` + Prettier on staged files only, fast
  enough for every commit), and a `pre-push` hook runs the full `npm run verify` — the same
  gate CI runs — so a failing quality gate is caught locally before it costs a CI run, not
  after. See `.husky/`, the `lint-staged` key in `package.json`, and `CONTRIBUTING.md`.
- Refreshed the light theme: the page background moved from a heavily saturated tan
  (`#e8d9b8`) to a much lighter warm-ivory base (`#faf6ef`) with a subtle lavender-to-peach
  radial wash, so the white cards and candy-colored accent badges read cleanly instead of
  competing with a dense backdrop. Dark mode is untouched. Also fixed the header search input
  truncating placeholder/typed text mid-word with no ellipsis (`overflow: hidden`,
  `text-overflow: ellipsis`, `min-width: 0` so it actually shrinks inside the flex row).
- CI/CD hardening: `gitleaks` secret-scanning in both `ci.yml` and `.circleci/config.yml`,
  `.github/dependabot.yml` for automated npm/GitHub Actions dependency updates, and
  `public/.well-known/security.txt` for responsible disclosure. Closes the dependency/secret
  scanning gap tracked in `docs/security/threat-model.md` and `owasp-checklist.md` (NFR-9).
- SEO basics: Open Graph/Twitter Card meta tags and a JSON-LD `WebSite` block in `index.html`;
  a `usePageMeta` hook setting per-route document title and description across `HomePage`,
  `SectionPage`, and `TopicPage`; `public/robots.txt`; and a build-time `sitemap.xml` generator
  (`scripts/generate-sitemap.ts`, run via `tsx` as part of `npm run build`) that reads the
  existing section/topic registry so new content is picked up automatically. Closes NFR-10.
- Dark mode: a full dark palette in `src/styles/global.css` (follows `prefers-color-scheme` by
  default, overridable via a `ThemeToggle` in the header that persists the choice to
  `localStorage`), applied before first paint in `main.tsx` to avoid a flash for returning
  visitors. All card-surface backgrounds across components now use the shared `--card` token
  instead of hardcoded white.
- Automated accessibility smoke testing: `jest-axe` wired into Vitest (via local ambient type
  declarations, since neither the package nor `@types/jest-axe` target Vitest's `expect`), with
  a zero-violations assertion added to `Layout`, `Header`, `HomePage`, `SectionPage`, and
  `TopicPage`. All passed with no violations found. Closes the automated half of NFR-7; a real
  screen-reader pass and full WCAG 2.1 AA sign-off remain manual.
- Age-band variant routing and selection (see
  [ADR-0001](docs/architecture-decision-records/0001-age-band-content-model.md) for the updated
  decision record): a `/section/:sectionId/:topicId/:ageBandId` route, `getTopicVariants`/
  `selectTopicVariant` in `src/content/sections.ts`, an age-band switcher on `TopicPage` shown
  only when a family has more than one variant, `AgeBrowser`/`TopicCard` deep-linking to the
  right variant, and both `search.ts` and `SectionPage` (via a new `getDisplayTopics` helper)
  deduping to one card per family instead of one per variant. Content-integrity tests
  guard that a family's variants don't claim overlapping bands and stay consistent on
  `topicNumber`/`illustrationId`. Two topics now use this infrastructure with real authored
  variants — see the content-authoring entry below.
- **All 75 topic families across all 6 sections are now fully authored** with `perspectives`,
  `culturalLens`, and `sources`, per `docs/content-style-guide.md` and
  `docs/editorial-and-sourcing-policy.md` — closing FR-6/7/8. Every section was researched via
  `WebSearch` against named authoritative organizations before writing (no fabricated
  citations, quotes, or URLs):
  - **Morning Routine** (10/10) — AAP, Zero to Three, American Occupational Therapy
    Association. "Why Do Some Kids Refuse to Get Dressed" also got a tween-specific
    (`ageBandIds: ['tween']`) variant — dressing resistance shifts from a sensory/fine-motor
    issue in early childhood to an identity/peer-pressure issue by the tween years.
  - **Homework** (10/10) — AAP, APA, International Dyslexia Association.
  - **Eating** (10/10) — AAP, Ellyn Satter Institute, Academy of Nutrition and Dietetics, CDC,
    grounded in the AAP-endorsed Satter Division of Responsibility feeding framework.
  - **Behaviour** (15/15) — CDC, AAP, APA, Zero to Three, grounded in CDC's Essentials for
    Parenting framework and developmental research on impulse control and executive function.
  - **Emotions** (15/15) — AAP, APA, CDC, CASEL, Zero to Three, Sleep Foundation, grounded in
    AAP anxiety guidance and the CASEL social-emotional-learning framework.
  - **Digital Era** (15/15) — AAP, Common Sense Media, APA, Sleep Foundation, grounded in the
    updated AAP screen-time guidelines, Common Sense Media's age guidance, and the APA's 2023
    health advisory on adolescent social media use. "Why Does Social Media Feel So Important to
    Tweens?" also got a teen-specific (`ageBandIds: ['teen']`) variant — including the first
    authored `perspectives.teen` entry on the site — since the pull shifts from peer belonging
    in the tween years to identity, status, and mental-health stakes by the teen years.

  Two genuine age-band variants (tween and teen) exercise the Phase 5 routing/switcher
  infrastructure with real content, closing FR-5; the other four sections' mechanisms hold
  continuously across their age range and didn't warrant a fork, per ADR-0001's "not every
  family needs a variant for every band." `getAuthoredTopicCount`/`SectionCard`/`Footer` now
  count distinct topic families rather than raw array length, so the "X of Y topics" display
  doesn't inflate as variants are added. The `TopicPage` "omits panels" test was switched to a
  self-contained mocked fixture instead of a real topic, so it stays valid as content changes.

- Fully brought the legacy Azure-Portal-generated workflow
  (`azure-static-web-apps-lemon-rock-042da4500.yml`) in line with its documented sibling
  `azure-static-web-apps.yml`. It originally auto-deployed on every push with a mismatched
  `output_location` ("build" instead of Vite's "dist"), had no quality gate at all before
  deploying (a manual trigger could ship code that skipped lint/typecheck/test/audit), built via
  Azure's own Oryx toolchain instead of the `npm run build` output CI validated, ran on outdated
  `actions/checkout@v3`, had no `permissions`/`concurrency` hardening, and auto-ran a
  `close_pull_request_job` for a PR-preview environment this project doesn't have configured. It
  now mirrors `azure-static-web-apps.yml` exactly: `workflow_dispatch`-only, a `quality-gate` job
  gated before deploy, `checkout@v4`, least-privilege `permissions`, a `concurrency` group, and
  the redundant PR-preview job removed. `docs/deployment-runbook.md` and
  [ADR-0002](docs/architecture-decision-records/0002-circleci-alongside-github-actions.md) were
  corrected to match — both had inaccurately described a "PR preview" capability that lived only
  in this file, never in `azure-static-web-apps.yml` as claimed, and isn't an active feature.

- Full content set: 75 topics across 6 sections (Morning Routine, Homework, Eating, Behaviour,
  Emotions, Digital Era), each with a hand-authored illustration.
- Core reading experience: home page, section pages, topic pages, search, print support,
  breadcrumb navigation, an error boundary, and a 404 page.
- Quality gate: strict TypeScript, ESLint (with a custom rule banning
  `dangerouslySetInnerHTML`), Prettier, and a Vitest suite with enforced coverage thresholds.
- Security hardening for a static site: a strict Content Security Policy, standard hardening
  headers, self-hosted fonts, and zero third-party runtime requests.
- CI/CD: GitHub Actions quality gate and Azure Static Web Apps deployment workflow, plus a
  CircleCI pipeline (`.circleci/config.yml`) as the pipeline of record for deployment — see
  [ADR-0002](docs/architecture-decision-records/0002-circleci-alongside-github-actions.md).
  GitHub Actions' `azure-static-web-apps.yml` deploy job is now a manual-only fallback.
- Governance and transparency: `LICENSE`, `CONTENT_LICENSE.md`, `CONTRIBUTING.md`,
  `CODE_OF_CONDUCT.md`, `SECURITY.md`, and in-app Disclaimer, Terms of Use, Privacy, and
  Sources & Methodology pages.
- SDLC documentation set under `docs/` (vision & scope, requirements, architecture decision
  records, content style guide, editorial & sourcing policy, test plan, deployment runbook,
  security threat model, OWASP-informed checklist).
- Age-band data model: `AgeBand`/`AgeBandId` types, five defined bands covering milestone ages
  5, 8, 10, 12, 15, 18 — see
  [ADR-0001](docs/architecture-decision-records/0001-age-band-content-model.md) — plus a
  "Browse by Age" entry point on the home page.
- `PerspectivesPanel`, `CulturalLensPanel`, and `SourcesPanel` components, wired into every
  topic page (each renders nothing until its content is authored for that topic).

### Planned (see `docs/architecture-decision-records/` and the project roadmap)

- Further age-band variants beyond the two shipped, where a future editorial review judges a
  topic's guidance has diverged enough by age to warrant one.
- A manual screen-reader pass, full WCAG 2.1 AA sign-off, and a performance budget.
- The one-time CircleCI dashboard connection and Azure deploy token setup (see
  `docs/deployment-runbook.md`) — requires manual action in the CircleCI/Azure dashboards.

---

Entries above describe the state of the project as of this changelog's introduction, not a
dated release history — no version has been tagged yet.
