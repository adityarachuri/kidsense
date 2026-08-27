# Test Plan

## Strategy

The project relies on a layered, fully automated test strategy enforced by `npm run verify`
(typecheck → lint → format check → test with coverage → build) in every CI pipeline. There is no
manual QA sign-off gate for routine engineering changes; manual verification is reserved for the
checkpoints below where automated coverage cannot substitute for human judgment.

## Automated coverage

| Layer                  | Tool                                                                             | What it catches                                                            |
| ---------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Type safety            | TypeScript (`strict`, `noUncheckedIndexedAccess`, etc.)                          | Shape mismatches, null/undefined misuse                                    |
| Static analysis        | ESLint (`--max-warnings=0`), incl. custom rule banning `dangerouslySetInnerHTML` | Unsafe patterns, accessibility rule violations (`jsx-a11y`), unused code   |
| Formatting             | Prettier (`format:check`)                                                        | Style drift                                                                |
| Unit / component tests | Vitest + React Testing Library                                                   | Component behavior, routing, keyboard interaction, error boundary recovery |
| Content integrity      | `sections.test.ts`, `registry.test.tsx`                                          | Missing illustrations, malformed topic data, inconsistent counts           |
| Coverage thresholds    | Vitest v8 provider (85% stmt/func/line, 80% branch)                              | Regressions in test coverage as the codebase grows                         |
| Dependency security    | `npm audit --audit-level=high`                                                   | Known high/critical vulnerabilities in dependencies                        |
| Production build       | `vite build` via `tsc -b && vite build`                                          | Build-breaking errors that only surface in a production bundle             |

## Manual checkpoints

These are not automated and are performed at specific points in the roadmap (see the approved
plan and `docs/requirements.md`):

- **New content sections/age-band variants**: a manual read-through in `npm run dev` for tone,
  age-appropriateness, and layout, per `docs/content-style-guide.md`.
- **UI/UX changes**: responsive check across common breakpoints (mobile, tablet, desktop),
  keyboard-only navigation pass, and a screen-reader spot check (WCAG 2.1 AA target).
- **Print stylesheet changes**: verify a topic still prints cleanly to one sheet.
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
