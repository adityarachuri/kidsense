# Security Threat Model (STRIDE)

## Scope and architecture

This is a static, client-only React SPA with **no backend, no database, no authentication, and
no user data collection**. It is built by CI, deployed as pre-built static assets to Azure
Static Web Apps, and served over HTTPS with no server-side execution. The realistic attack
surface is therefore concentrated in three places: the **build/deploy supply chain**, the
**client-side content itself**, and **third-party trust** — not a traditional web-app backend.

STRIDE is applied below to each relevant part of the system. Categories with no meaningful
attack surface for this architecture are marked **N/A by design**, not silently skipped.

## Spoofing

| Asset                             | Analysis                                                                                        | Mitigation                                                                                                                              |
| --------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| End-user identity                 | N/A by design — no accounts, no sessions, no authentication exists to spoof.                    | —                                                                                                                                       |
| Site origin (phishing/clone risk) | An attacker could clone this open-source, publicly licensed static site to a look-alike domain. | `Strict-Transport-Security` with `preload` reduces protocol-downgrade tricks; content itself carries no secrets or login flow to phish. |
| CI/CD identity                    | A compromised GitHub or CircleCI account could push malicious code or deploy tokens.            | Deploy tokens scoped to Azure Static Web Apps only (not full Azure subscription access); see `docs/deployment-runbook.md`.              |

## Tampering

| Asset                                   | Analysis                                                                           | Mitigation                                                                                                                                                                                                                                              |
| --------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Client-side content injection (XSS)     | The only realistic tampering vector, since there's no server state to tamper with. | No `dangerouslySetInnerHTML` anywhere, enforced by a custom ESLint rule (`no-restricted-syntax`); strict CSP (`script-src 'self'`, no `unsafe-inline`/`eval` for scripts); all illustrations are real JSX, not raw HTML strings.                        |
| npm dependency tampering (supply chain) | A compromised transitive dependency could inject malicious code at build time.     | `npm audit --audit-level=high` in CI on every push/PR; `package-lock.json` committed and used for reproducible installs (`npm ci`); automated dependency-update PRs via `.github/dependabot.yml`; `gitleaks` secret-scanning runs in both CI pipelines. |
| Build artifact tampering in transit     | CI build output could theoretically be altered between build and deploy.           | Deploy step is part of the same CI job/workflow that builds — no separate untrusted artifact hand-off; Azure Static Web Apps deploy action uploads directly from the CI runner.                                                                         |

## Repudiation

| Asset           | Analysis                                                                      | Mitigation                                                                                                                                         |
| --------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Content changes | Since content and code are the same repository, all changes are attributable. | Git history + required PR review (recommended in `docs/deployment-runbook.md`) provide an audit trail; `CHANGELOG.md` records substantive changes. |
| Deployments     | Need to know what was deployed and when.                                      | CI/CD pipeline logs (GitHub Actions + CircleCI) retain build/deploy history; Azure Static Web Apps also retains deployment history in the portal.  |

## Information Disclosure

| Asset                              | Analysis                                                                    | Mitigation                                                                                                                                                                      |
| ---------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User personal data                 | N/A by design — none is collected, stored, or transmitted (see `/privacy`). | —                                                                                                                                                                               |
| Deploy secrets (Azure token, etc.) | If leaked, could allow unauthorized deployment.                             | Stored only as CI provider secrets (GitHub Actions secrets, CircleCI environment variables/contexts), never committed to the repository; `.gitignore` excludes local env files. |
| Source code                        | Public by design (open-source repository) — not a disclosure risk.          | —                                                                                                                                                                               |

## Denial of Service

| Asset             | Analysis                                                                                                                         | Mitigation                                                                                                                              |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Site availability | A static site behind Azure's CDN is inherently resilient to most application-layer DoS (no server-side computation per request). | Azure Static Web Apps / CDN handles traffic scaling; no server-side rate limiting is needed because there is no server-side processing. |
| CI/CD pipeline    | A malicious or runaway PR could theoretically try to exhaust CI minutes.                                                         | Standard GitHub Actions/CircleCI resource limits apply; not a project-specific concern at current scale.                                |

## Elevation of Privilege

| Asset                      | Analysis                                                                         | Mitigation                                                                                    |
| -------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Client-side privilege      | N/A by design — there are no privilege levels in a static, unauthenticated site. | —                                                                                             |
| CI/CD pipeline permissions | A compromised workflow could be used to escalate access to the Azure resource.   | Deploy token is scoped to the Static Web App resource only, not broader Azure account access. |

## Residual risk and roadmap

The most significant realistic risks are **supply-chain** (a malicious npm dependency) and
**CI/CD credential leakage**. Secret scanning and automated dependency-update PRs are now in
place (see `docs/security/owasp-checklist.md`); periodic manual review of third-party
dependencies before major version bumps remains a planned process step.
