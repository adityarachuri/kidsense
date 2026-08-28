# Deployment Runbook

## Architecture

Static React SPA (Vite build) deployed to **Azure Static Web Apps**. No backend, no database.
Two CI/CD paths exist by design (see ADR-0002):

- **GitHub Actions** (`.github/workflows/ci.yml`) — runs the full quality gate on every push
  and pull request as a GitHub-native status check. Does not deploy.
- **GitHub Actions** (`.github/workflows/azure-static-web-apps.yml`) — deploy job is gated to
  manual `workflow_dispatch` only; it no longer runs automatically. No PR-preview environment is
  configured for this project.
- **CircleCI** (`.circleci/config.yml`) — the pipeline of record for deployment. Runs the
  quality gate, then deploys `main` to Azure Static Web Apps.

## One-time manual setup (must be done by a human, not by this documentation)

1. **Connect the repository to CircleCI**: sign in to CircleCI with the GitHub account that owns
   this repository, and set up the project from the CircleCI dashboard.
2. **Add the Azure Static Web Apps deploy token to CircleCI**: in the Azure Portal, open the
   Static Web App resource → _Manage deployment token_ → copy it. In CircleCI, add it as an
   environment variable (e.g. `AZURE_STATIC_WEB_APPS_API_TOKEN`) on the project, or in a
   CircleCI context if multiple projects will share it.
3. **(Optional) Branch protection**: in GitHub repository settings, require the `ci.yml`
   quality-gate check (and, once connected, the CircleCI check) to pass before merging to
   `main`.

## Routine deployment

Deployment is automatic: pushing to `main` triggers the CircleCI workflow, which runs the
quality gate and, if it passes, deploys to Azure Static Web Apps. No manual deployment step is
required for routine changes.

## Manual/emergency deployment

If CircleCI is unavailable, the disabled GitHub Actions deploy workflow can be triggered
manually from the GitHub Actions tab (`workflow_dispatch` on `azure-static-web-apps.yml`) as a
fallback — it runs the same quality gate before deploying. A second, redundant fallback
(`azure-static-web-apps-lemon-rock-042da4500.yml`, Azure-Portal-generated, tied to its own
deployment token) exists for the same purpose and runs the identical quality gate; use
`azure-static-web-apps.yml` first.

## Rollback

Azure Static Web Apps keeps the previous production deployment until a new one succeeds. To roll
back:

1. Identify the last known-good commit on `main`.
2. Revert the problematic commit(s) with a new commit (`git revert`), rather than force-pushing
   history, and push to `main` — this re-triggers the normal deploy pipeline with the reverted
   code.

## Sign-off checklist (pre-release / major milestone)

- [ ] `npm run verify` green on `main`.
- [ ] CircleCI pipeline green for the commit being released.
- [ ] `docs/test-plan.md` manual checkpoints relevant to this change completed.
- [ ] `CHANGELOG.md` updated.
- [ ] No open high/critical `npm audit` findings.
- [ ] Production build smoke-tested via `npm run preview`.
