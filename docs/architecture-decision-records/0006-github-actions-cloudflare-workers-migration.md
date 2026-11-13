# ADR-0006: Migrate from GitLab/GitLab CI back to GitHub/GitHub Actions (Cloudflare Workers unchanged)

## Status

Accepted

## Context

ADR-0005 consolidated source control, CI, and hosting onto GitLab.com and Cloudflare, and the
GitHub repository that existed before it was deleted. That consolidation still holds for hosting
— Cloudflare Workers remains the deploy target — but the project is now moving source control and
CI/CD from GitLab back to GitHub, and making the repository public.

## Decision

- **GitHub** replaces GitLab.com as the source of truth. The full commit history is pushed as-is
  (no squashing) into a new, public `adityarachuri/kidsense` repository.
- **GitHub Actions** replaces `.gitlab-ci.yml` with the equivalent pipeline: a quality-gate job
  (`npm audit`, `gitleaks/gitleaks-action`, typecheck, lint, format check, test with coverage,
  build) on every push and pull request targeting `main`, and a deploy job that `needs` the
  quality gate, runs only on pushes to `main`, and deploys via `npx wrangler deploy`.
- **Cloudflare Workers** is unchanged — same `wrangler.toml`, same `public/_headers`, same
  deploy command. Only the CI platform driving it changes.
- **Renovate** (`renovate.json`, `config:recommended`) is kept as-is; it already covers both the
  `npm` and `github-actions` package ecosystems, so no separate `.github/dependabot.yml` is
  added. The Renovate bot/app must be (re-)enabled for the GitHub repository specifically — the
  GitLab app enablement from ADR-0005 does not carry over.
- The GitLab project is not deleted as part of this change; it's simply no longer used for CI or
  deploy. It can be removed later as a separate, explicit decision.

## Consequences

- **Positive**: public visibility and GitHub-native collaboration features (issues, PRs, GitHub's
  private vulnerability reporting) for a project whose content license (CC BY-NC-SA 4.0) already
  anticipates public reuse.
- **Positive**: no secrets exist anywhere in the project's git history (verified before this
  migration via a full-history pickaxe search), so publishing the full history publicly carries
  no credential-exposure risk.
- **Negative**: re-introduces exactly the GitHub dependency ADR-0005 removed. Accepted because the
  goal this time is public distribution, not CI consolidation — there's no return to the old
  dual-CI/dual-fallback redundancy from ADR-0002, just a single pipeline on a different platform.
- **Manual steps required**: re-creating `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as
  GitHub Actions repository secrets, protected-branch settings for `main`, and enabling the
  Renovate GitHub App — see `docs/deployment-runbook.md`.
