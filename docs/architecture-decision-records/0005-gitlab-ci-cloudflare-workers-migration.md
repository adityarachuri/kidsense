# ADR-0005: Migrate from GitHub Actions/CircleCI/Azure Static Web Apps to GitLab CI/Cloudflare Workers

## Status

Accepted

## Context

Since ADR-0002, the project ran a deliberately redundant pipeline: GitHub hosted the repo;
GitHub Actions (`ci.yml`) ran the quality gate as a PR status check; CircleCI was the pipeline of
record that re-ran the gate and deployed `main` to Azure Static Web Apps; two more GitHub Actions
workflows existed as manual (`workflow_dispatch`) deploy fallbacks to the same Azure resource.

The revised requirement is to consolidate source control, CI, and hosting onto GitLab.com and
Cloudflare, and to retire GitHub, CircleCI, and Azure entirely rather than keep them as
fallbacks.

## Decision

- **GitLab.com** replaces GitHub as the source of truth. The project was imported via GitLab's
  built-in GitHub importer; the GitHub repository has since been deleted.
- **GitLab CI** (`.gitlab-ci.yml`) replaces both `ci.yml` and `.circleci/config.yml` with a
  single pipeline: a `quality-gate` stage (audit, `gitleaks`, typecheck, lint, format check, test
  with coverage, build) on every push/merge-request pipeline, and a `deploy` stage gated to
  `main` that `needs` the quality gate. The dual-CI/dual-fallback redundancy from ADR-0002 is
  dropped — the main downside of that design (multiple CI configs to keep in sync) no longer
  applies once one platform hosts both source control and CI/CD, and there's no longer a second
  platform to fail over to independently.
- **Cloudflare Workers** (static assets, via Wrangler) replace Azure Static Web Apps.
  `wrangler.toml` configures the assets directory and SPA fallback
  (`not_found_handling = "single-page-application"`); `public/_headers` ports every security
  header from the old `staticwebapp.config.json` verbatim (CSP, HSTS, Permissions-Policy,
  COOP/COEP/CORP, per-path cache rules), intentionally dropping `X-XSS-Protection` and the
  standalone `Upgrade-Insecure-Requests` header exactly as they were already intentionally
  suppressed for Azure.
- **Renovate** (`renovate.json`) replaces `.github/dependabot.yml` for automated npm dependency
  updates; GitLab has no first-party Dependabot equivalent.

## Consequences

- **Positive**: one CI configuration instead of three; one hosting provider instead of one
  primary plus two fallbacks; no more cross-config drift risk when quality-gate steps change.
- **Positive**: Cloudflare Workers' `_headers`/SPA-fallback support is close enough to Azure
  Static Web Apps' `staticwebapp.config.json` that the security posture carried over without
  regression (verified via a parallel-run header/route/cache parity check before cutover).
- **Negative**: losing the redundancy ADR-0002 valued — if GitLab.com or Cloudflare has an
  outage, there's no longer a second CI system or hosting provider to fail over to. Accepted as
  the intended trade-off of consolidation.
- **Manual steps required**: Cloudflare API token and account ID as GitLab CI/CD variables,
  protected-branch settings, and the Renovate GitLab app — see `docs/deployment-runbook.md`.
