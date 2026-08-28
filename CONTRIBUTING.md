# Contributing

Thanks for your interest in Kidsense. This is a content-heavy static site,
so most contributions fall into one of two categories: **engineering** (components, tooling,
CI/CD, accessibility, performance) or **content** (new topics, age-band variants, corrections,
sourcing).

## Before you start

Read `README.md` for the architecture overview and `docs/vision-and-scope.md` /
`docs/requirements.md` for what this project is trying to be. If you're proposing a
content change, also read `docs/content-style-guide.md` and
`docs/editorial-and-sourcing-policy.md`.

## Engineering contributions

1. `npm install`, then `npm run dev` to confirm your environment works.
2. Follow existing patterns: one folder per component (`Component.tsx` + `.module.css` +
   `.test.tsx`), design tokens from `src/styles/global.css`, strict TypeScript, no
   `dangerouslySetInnerHTML` (enforced by ESLint).
3. Before opening a pull request, run `npm run verify` — this is the same quality gate CI runs
   (typecheck, lint, format check, test with coverage thresholds, build). It must pass locally.
   `npm install` sets this up for you automatically via Husky: a `pre-commit` hook runs
   `lint-staged` (ESLint `--fix` + Prettier on the files you're committing), and a `pre-push`
   hook runs the full `npm run verify` — so a failing quality gate is caught before it ever
   reaches CI, not after. Don't bypass these with `--no-verify`; if a hook is wrong, fix the
   hook.
4. Keep pull requests focused. Large refactors or architectural changes should be discussed in
   an issue first, referencing the relevant ADR in `docs/architecture-decision-records/` if one
   exists, or proposing a new one.

## Content contributions

1. Every topic follows the `Topic`/`TopicVariant` interface in `src/types/content.ts`: a
   three-line heading, a quote, age band(s), an illustration, a reassurance line, an
   explanation, exactly 8 reason cards, a list of concerns, professional guidance, a list of
   strategies, a 4-step routine, a closing insight, and (where populated) perspectives, a
   cultural lens panel, and named sources.
2. Content must be **original wording** — a synthesis of publicly available, mainstream
   guidance, never copied verbatim from another source. See
   `docs/editorial-and-sourcing-policy.md` for what "evidence-informed" means in this project
   and how to attribute the organizations whose guidance informed a topic.
3. New topics need a matching illustration registered in
   `src/assets/illustrations/registry.tsx` — reuse an existing one where visually appropriate,
   or author a new one following the existing SVG style (see the README's "Design system"
   section).
4. Run `npm run verify` before submitting — the content-integrity tests
   (`sections.test.ts`, `registry.test.tsx`) will catch a missing illustration, an inconsistent
   count, or a broken reference.

## Reporting issues

- **Content accuracy or sourcing concerns**: open an issue describing the topic and what seems
  inaccurate, outdated, or insufficiently attributed.
- **Security vulnerabilities**: do not open a public issue — see `SECURITY.md`.
- **Everything else** (bugs, accessibility issues, feature requests): open an issue with steps
  to reproduce or a clear description of the desired change.

## Code of conduct

Participation in this project is governed by `CODE_OF_CONDUCT.md`.
