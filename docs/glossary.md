# Glossary

| Term                    | Meaning in this project                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Topic family**        | The stable, cross-age concept for one behavior (e.g. "screen time ends") — has one URL, one illustration, and one or more age-band variants.                       |
| **Topic variant**       | One age-band-scoped article body within a topic family (heading, reasons, strategies, etc.).                                                                       |
| **Age band**            | One of five fixed developmental groupings (Early Childhood, Middle Childhood, Tween, Teen, Older Teen) covering milestone ages 5, 8, 10, 12, 15, 18. See ADR-0001. |
| **Perspectives panel**  | Short, audience-specific callouts (teacher / clinician / teen) attached to a topic variant, distinct from the core parent-facing article.                          |
| **Cultural lens panel** | A compact panel noting how ~5–6 representative global/cultural contexts tend to view a behavior differently.                                                       |
| **Sources**             | Organization-level attribution (e.g. "CDC", "WHO") on a topic variant, per `editorial-and-sourcing-policy.md` — never a specific fabricated citation.              |
| **Quality gate**        | The `npm run verify` sequence (typecheck, lint, format check, test with coverage, build) that every change must pass.                                              |
| **Pipeline of record**  | The CI/CD system that actually performs production deployment — CircleCI, per ADR-0002. GitHub Actions remains active for PR-time checks only.                     |
| **Static Web App**      | The Azure hosting product this site deploys to — serves pre-built static assets with no server-side execution.                                                     |
| **ADR**                 | Architecture Decision Record — a short document capturing a significant, durable technical decision and its rationale (`docs/architecture-decision-records/`).     |
