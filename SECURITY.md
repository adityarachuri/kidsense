# Security Policy

## Scope

Kidsense is a static, client-only single-page application with **no
backend, no database, no authentication, and no user data collection** (see the in-app
`/privacy` page). The realistic attack surface is therefore narrow and mostly concentrated in:

- The build and deployment supply chain (npm dependencies, CI/CD credentials, hosting
  configuration).
- Client-side content integrity (e.g. any future change that introduced unsafe HTML rendering).
- Third-party trust (currently zero third-party runtime requests — see
  `docs/security/threat-model.md` for the full STRIDE analysis).

## Supported versions

This project does not maintain multiple release branches. Security fixes are applied to the
`main` branch and deployed via the CI/CD pipeline described in `docs/deployment-runbook.md`.

## Reporting a vulnerability

**Please do not open a public GitHub issue for a security vulnerability.**

Instead, report it privately using GitHub's private vulnerability reporting feature on this
repository (Security tab → "Report a vulnerability"), if enabled, or by contacting the
maintainer directly through a private channel. Please include:

- A description of the vulnerability and its potential impact.
- Steps to reproduce it, if applicable.
- Any suggested remediation, if you have one.

You can expect an acknowledgment within a reasonable timeframe and to be kept informed as the
issue is investigated and resolved. Given the project's scope (a static content site with no
user data), most findings will likely relate to dependency vulnerabilities, CSP/header
configuration, or the CI/CD pipeline rather than data exposure.

## What this project already does

- `npm audit --audit-level=high` runs in CI on every push and pull request.
- Strict Content Security Policy (`script-src 'self'`, no inline scripts, no `eval`) set via
  `staticwebapp.config.json`.
- No `dangerouslySetInnerHTML` anywhere in the codebase, enforced by a custom ESLint rule.
- Self-hosted fonts and assets — no third-party runtime requests.
- Standard hardening headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy`, `Strict-Transport-Security`, `Cross-Origin-Opener-Policy`,
  `Cross-Origin-Resource-Policy`.

See `docs/security/threat-model.md` and `docs/security/owasp-checklist.md` for the full
analysis and roadmap.
