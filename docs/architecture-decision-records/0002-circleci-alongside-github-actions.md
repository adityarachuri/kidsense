# ADR-0002: CircleCI as primary deploy pipeline, GitHub Actions retained for PR checks

## Status

Accepted

## Context

The project currently deploys to Azure Static Web Apps via two GitHub Actions workflows
(`ci.yml` for quality gates, `azure-static-web-apps.yml` for deployment and PR preview
environments). The revised requirements specify CircleCI as the CI/CD system of record. Two
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
request, giving GitHub-native PR status checks independent of CircleCI. The `deploy` and
`close_pull_request` jobs in `azure-static-web-apps.yml` are gated to `workflow_dispatch` only,
so `main` is deployed exclusively through the new CircleCI `deploy` job.

## Consequences

- **Positive**: CircleCI becomes the authoritative deploy path (matching the product
  requirement) without losing GitHub's built-in PR status-check UX, which some reviewers rely
  on.
- **Negative**: two CI configurations now exist and must be kept in sync when the quality-gate
  steps change (e.g. a new lint rule or test script) — a change to `package.json` scripts
  should be mirrored in both `ci.yml` and `.circleci/config.yml`.
- **Manual step required**: connecting this repository to a CircleCI project and setting the
  Azure Static Web Apps deploy token as a CircleCI environment variable/context must be done by
  a human with access to both accounts — see `docs/deployment-runbook.md`.
