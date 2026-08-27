# Requirements

This document tracks functional and non-functional requirements. Status reflects the current
build; see `docs/architecture-decision-records/` for the reasoning behind each and the project
roadmap (`../README.md`, `CHANGELOG.md`) for sequencing.

## Functional requirements

| ID    | Requirement                                                                                                                                            | Status                                                                                                                |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| FR-1  | Present topics grouped into sections, each with a consistent article template                                                                          | Done                                                                                                                  |
| FR-2  | Full-text search across topic titles, headings, and keywords                                                                                           | Done                                                                                                                  |
| FR-3  | Print a single topic as a clean, one-page document                                                                                                     | Done                                                                                                                  |
| FR-4  | Every topic states when a behavior may warrant professional concern                                                                                    | Done                                                                                                                  |
| FR-5  | Segment content by developmental age band (Early Childhood, Middle Childhood, Tween, Teen, Older Teen), addressing milestone ages 5, 8, 10, 12, 15, 18 | In progress — data model, inference, and browse-by-age shipped; per-band content forking not yet authored (Phase 2/3) |
| FR-6  | Provide audience-specific perspectives (teacher, clinician, teen) alongside the core article                                                           | In progress — `PerspectivesPanel` component shipped; no topic has authored content yet                                |
| FR-7  | Provide a compact cultural-lens panel noting global variation in how a behavior is viewed                                                              | In progress — `CulturalLensPanel` component shipped; no topic has authored content yet                                |
| FR-8  | Attribute the authoritative organizations whose guidance informed each topic                                                                           | In progress — `SourcesPanel` component and `sources` field shipped; no topic has authored content yet                 |
| FR-9  | Publish legal/transparency pages: disclaimer, terms of use, privacy policy, sources & methodology                                                      | Done                                                                                                                  |
| FR-10 | Provide a "browse by age" entry point across all sections                                                                                              | Done                                                                                                                  |

## Non-functional requirements

| ID     | Requirement                                                                                   | Status                                                                                                                                                                               |
| ------ | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| NFR-1  | Static site, zero backend/database, zero runtime third-party requests                         | Done                                                                                                                                                                                 |
| NFR-2  | Strict TypeScript, `--max-warnings=0` ESLint, Prettier-enforced formatting                    | Done                                                                                                                                                                                 |
| NFR-3  | Automated test coverage thresholds enforced in CI (85% stmt/func/line, 80% branch)            | Done                                                                                                                                                                                 |
| NFR-4  | Content-integrity tests catch missing illustrations, malformed data, and broken links         | Done                                                                                                                                                                                 |
| NFR-5  | Security headers and CSP hardened per `docs/security/threat-model.md`                         | In progress                                                                                                                                                                          |
| NFR-6  | Responsive, mobile-first layout across all pages and new panels                               | In progress                                                                                                                                                                          |
| NFR-7  | WCAG 2.1 AA accessibility target, verified with automated + manual checks                     | Planned                                                                                                                                                                              |
| NFR-8  | CircleCI as the pipeline of record for deployment; GitHub Actions retained for PR-time checks | In progress — `.circleci/config.yml` authored and GitHub Actions deploy gated to manual dispatch; awaiting one-time CircleCI dashboard connection (see `docs/deployment-runbook.md`) |
| NFR-9  | Dependency and secret scanning run automatically in CI                                        | Planned                                                                                                                                                                              |
| NFR-10 | SEO metadata (Open Graph, structured data, sitemap) present on all content pages              | Planned                                                                                                                                                                              |

## Traceability

Each "Planned" row above corresponds to a phase in the project roadmap tracked in the approved
plan and, where an architectural choice was made, an ADR in
`docs/architecture-decision-records/`.
