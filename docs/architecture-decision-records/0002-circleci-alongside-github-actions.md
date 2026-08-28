# ADR-0002: CircleCI as primary deploy pipeline, GitHub Actions retained for PR checks

## Status

Accepted

## Context

The project currently deploys to Azure Static Web Apps via two GitHub Actions workflows
(`ci.yml` for quality gates, `azure-static-web-apps.yml` for deployment). The revised
requirements specify CircleCI as the CI/CD system of record. Two
options were considered:

1. **Full replacement** — author `.circleci/config.yml` and delete both GitHub Actions
   workflows.
2. **CircleCI as primary, GitHub Actions retained for PR-time checks only** — author
   `.circleci/config.yml` as the pipeline that actually deploys; keep `ci.yml` running as a
   GitHub-native status check on pull requests (useful for branch protection and inline PR
   feedback); disable the `deploy` job inside `azure-static-web-apps.yml` (gate it to manual
   `workflow_dispatch`) so it can no longer auto-deploy and race with CircleCI.

## Decision

Adopt option 2, per explicit product direction. `ci.yml` continues to run its full quality gate
(audit, typecheck, lint, format check, test with coverage, build) on every push and pull
request, giving GitHub-native PR status checks independent of CircleCI. The `deploy` job in
`azure-static-web-apps.yml` is gated to `workflow_dispatch` only, so `main` is deployed
exclusively through the new CircleCI `deploy` job. The separate, Azure-Portal-generated
`azure-static-web-apps-lemon-rock-042da4500.yml` workflow — which auto-deployed on every push
via its own `close_pull_request_job`/PR trigger and predates this decision — was brought in
line the same way: gated to `workflow_dispatch`, its PR-preview job removed since no PR-preview
environment is configured for this project, and its quality gate aligned with
`azure-static-web-apps.yml`'s.

## Consequences

- **Positive**: CircleCI becomes the authoritative deploy path (matching the product
  requirement) without losing GitHub's built-in PR status-check UX, which some reviewers rely
  on.
- **Negative**: multiple CI configurations now exist and must be kept in sync when the
  quality-gate steps change (e.g. a new lint rule or test script) — a change to `package.json`
  scripts should be mirrored across `ci.yml`, `.circleci/config.yml`, and the two Azure Static
  Web Apps deploy workflows' `quality-gate` jobs.
- **Manual step required**: connecting this repository to a CircleCI project and setting the
  Azure Static Web Apps deploy token as a CircleCI environment variable/context must be done by
  a human with access to both accounts — see `docs/deployment-runbook.md`.
