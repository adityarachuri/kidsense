# Changelog

All notable changes to this project are documented in this file. The format is based on
[Keep a Changelog](https://keepachangelog.com/), and this project intends to follow
[Semantic Versioning](https://semver.org/) once its first release is tagged.

## [Unreleased]

### Added

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

- Authoring per-age-band content variants, perspectives, cultural-lens notes, and source
  attribution for the existing 75 topics (Phase 2 pilot section, then full rollout).
- UI/UX modernization: dark mode, expanded accessibility auditing, SEO metadata, and a
  performance budget.
- Dependency and secret scanning automated in CI; the one-time CircleCI dashboard connection
  and Azure deploy token setup (see `docs/deployment-runbook.md`).

---

Entries above describe the state of the project as of this changelog's introduction, not a
dated release history — no version has been tagged yet.
