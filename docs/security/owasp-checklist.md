# OWASP-Informed Security Checklist

This checklist adapts the spirit of the OWASP Top 10 / ASVS to a **static, backend-less SPA**.
Most traditional web-app categories (injection, broken authentication, etc.) are marked N/A by
architecture — that is itself a security property worth stating explicitly, not an omission.

| #   | Category (OWASP Top 10 style)            | Applicability                                                                                              | Status                                                                                                                                                                                                                                   |
| --- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Broken Access Control                    | N/A — no authentication, no privileged routes, no server-side resources to control access to.              | —                                                                                                                                                                                                                                        |
| 2   | Cryptographic Failures                   | N/A — no data at rest or in transit belonging to users; HTTPS enforced via HSTS for the site itself.       | ✅ HSTS with `preload` set                                                                                                                                                                                                               |
| 3   | Injection (SQL/command/etc.)             | N/A — no database, no server-side command execution.                                                       | —                                                                                                                                                                                                                                        |
| 3a  | Injection (client-side / XSS)            | Applicable — the one real injection surface for a client-rendered SPA.                                     | ✅ No `dangerouslySetInnerHTML` (ESLint-enforced), strict CSP, all illustrations are real JSX                                                                                                                                            |
| 4   | Insecure Design                          | Applicable to the build/deploy pipeline design.                                                            | ✅ Quality gate required before deploy (typecheck/lint/test/build); deploy gated behind CI success                                                                                                                                       |
| 5   | Security Misconfiguration                | Applicable to HTTP headers and CSP.                                                                        | ✅ `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy` (camera/mic/geolocation/etc. disabled), `Cross-Origin-Opener-Policy`, `Cross-Origin-Resource-Policy` all set in `staticwebapp.config.json` |
| 6   | Vulnerable & Outdated Components         | Applicable — the real ongoing risk for this project.                                                       | ✅ `npm audit --audit-level=high` in CI · 🔲 Planned: automated dependency-update PRs (Dependabot/Renovate)                                                                                                                              |
| 7   | Identification & Authentication Failures | N/A — no accounts or sessions exist.                                                                       | —                                                                                                                                                                                                                                        |
| 8   | Software & Data Integrity Failures       | Applicable to the CI/CD supply chain.                                                                      | ✅ `package-lock.json` committed, `npm ci` used for reproducible installs · 🔲 Planned: CI secret-scanning job                                                                                                                           |
| 9   | Security Logging & Monitoring Failures   | Partially applicable — no user-facing security events exist to log, but deploy events should be traceable. | ✅ CI/CD pipeline logs + Azure deployment history serve as the audit trail (see `docs/security/threat-model.md`)                                                                                                                         |
| 10  | Server-Side Request Forgery (SSRF)       | N/A — no server-side code makes outbound requests.                                                         | —                                                                                                                                                                                                                                        |

## Additional static-site-specific checks

| Check                                                       | Status                                                                                          |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Zero third-party runtime requests (fonts, analytics, ads)   | ✅ Self-hosted fonts and assets; CSP's `connect-src 'self'` blocks unexpected outbound requests |
| Content Security Policy disallows inline scripts and `eval` | ✅ `script-src 'self'` only                                                                     |
| Clickjacking protection                                     | ✅ `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'`                                     |
| `object-src`/plugin restriction                             | ✅ `object-src 'none'`                                                                          |
| Dependency license/security review before major upgrades    | 🔲 Planned — track as part of routine dependency-update review                                  |
| `security.txt` for responsible disclosure                   | 🔲 Planned                                                                                      |

## Legend

✅ Implemented and verified · 🔲 Planned (tracked in the project roadmap) · — Not applicable by
architecture (documented, not skipped silently)
