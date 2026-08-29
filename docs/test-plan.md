# Test Plan

## Strategy

The project relies on a layered, fully automated test strategy enforced by `npm run verify`
(typecheck → lint → format check → test with coverage → build) in every CI pipeline. There is no
manual QA sign-off gate for routine engineering changes; manual verification is reserved for the
checkpoints below where automated coverage cannot substitute for human judgment.

## Automated coverage

| Layer                     | Tool                                                                                                                       | What it catches                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Type safety               | TypeScript (`strict`, `noUncheckedIndexedAccess`, etc.)                                                                    | Shape mismatches, null/undefined misuse                                                                         |
| Static analysis           | ESLint (`--max-warnings=0`), incl. custom rule banning `dangerouslySetInnerHTML`                                           | Unsafe patterns, accessibility rule violations (`jsx-a11y`), unused code                                        |
| Formatting                | Prettier (`format:check`)                                                                                                  | Style drift                                                                                                     |
| Unit / component tests    | Vitest + React Testing Library                                                                                             | Component behavior, routing, keyboard interaction, error boundary recovery                                      |
| Accessibility (automated) | `jest-axe` smoke assertions on `Layout`, `Header`, `HomePage`, `SectionPage`, `TopicPage`, `SearchBar`, `AbilityLensPanel` | Programmatically-detectable WCAG violations (missing labels, contrast, ARIA misuse) in each page's rendered DOM |
| Content integrity         | `sections.test.ts`, `registry.test.tsx`                                                                                    | Missing illustrations, malformed topic data, inconsistent counts                                                |
| Coverage thresholds       | Vitest v8 provider (85% stmt/func/line, 80% branch)                                                                        | Regressions in test coverage as the codebase grows                                                              |
| Dependency security       | `npm audit --audit-level=high`                                                                                             | Known high/critical vulnerabilities in dependencies                                                             |
| Production build          | `vite build` via `tsc -b && vite build`                                                                                    | Build-breaking errors that only surface in a production bundle                                                  |

## Manual checkpoints

These are not automated and are performed at specific points in the roadmap (see the approved
plan and `docs/requirements.md`):

- **New content sections/age-band variants**: a manual read-through in `npm run dev` for tone,
  age-appropriateness, and layout, per `docs/content-style-guide.md`.
- **UI/UX changes**: responsive check across common breakpoints (mobile, tablet, desktop),
  keyboard-only navigation pass, and a screen-reader spot check (WCAG 2.1 AA target).
  `jest-axe` (see above) catches programmatically-detectable violations automatically, but a
  real screen-reader pass and full WCAG 2.1 AA sign-off remain manual — automated tools cover a
  subset of the standard, not the whole thing. Per ADR-0004, the disability-inclusive-content
  pilot deliberately closed only 3 bounded accessibility gaps (search-result live-region
  announcements, `prefers-contrast: more` support, and `jest-axe` on the two components touched)
  rather than the full remaining NFR-7 scope — this partial-coverage scoping is intentional, not
  an oversight, same as the original 5-page `jest-axe` scoping above.
- **Print stylesheet changes**: verify a topic still prints cleanly to one sheet.
- **`prefers-contrast: more` support** (see `src/styles/global.css`): enable "increase contrast"
  (Windows) or the equivalent OS setting, reload, and confirm text/background contrast visibly
  increases without layout breakage. No automated visual-regression tooling exists in this
  project, so this stays a manual checkpoint.
- **CI/CD pipeline changes**: a config review against the previously verified GitHub Actions
  steps (see `docs/deployment-runbook.md`), since a CircleCI dry run requires an account
  connection this documentation can't perform.
- **Pre-release**: full cross-browser pass, `npm run preview` smoke test of the production
  build, and confirmation that every earlier roadmap phase's checkpoint is still green.

## Regression policy

A change that touches shared content types (`src/types/content.ts`) or shared components must
re-run the full suite, not just tests for the files it directly touches — the content-integrity
tests in particular are designed to catch cross-cutting regressions (e.g. an illustration ID
typo) that unit tests for a single component would miss.
