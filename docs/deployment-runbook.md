# Deployment Runbook

## Architecture

Static React SPA (Vite build) deployed to **Cloudflare Workers** (static assets) via **GitLab
CI**. No backend, no database. See
[ADR-0005](architecture-decision-records/0005-gitlab-ci-cloudflare-workers-migration.md) for why
this replaced the earlier GitHub Actions/CircleCI/Azure Static Web Apps setup.

`.gitlab-ci.yml` defines two stages:

- **`quality-gate`** — `npm audit`, `gitleaks` secret scan, typecheck, lint, format check, test
  with coverage, build. Runs on every push and merge request pipeline.
- **`deploy`** — `needs` the quality gate, runs only on `main`, and deploys `dist/` to Cloudflare
  Workers via `npx wrangler deploy`.

Cloudflare-specific config: `wrangler.toml` (Worker name, static-assets directory, SPA fallback
via `not_found_handling`) and `public/_headers` (security headers and cache rules, copied into
`dist/` by Vite).

## One-time manual setup (must be done by a human, not by this documentation)

1. **GitLab CI/CD variables**: in the GitLab project → Settings → CI/CD → Variables, add
   (masked, protected):
   - `CLOUDFLARE_API_TOKEN` — a token scoped to `Account | Workers Scripts | Edit` for the target
     Cloudflare account. Create it at
     [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens).
   - `CLOUDFLARE_ACCOUNT_ID` — from `wrangler whoami` or the Cloudflare dashboard.
2. **Protected branch**: Settings → Repository → Protected branches: protect `main`
   (no force-push, maintainers-only merge). Settings → Merge requests: require the pipeline to
   succeed before merge.
3. **Renovate**: enable the Renovate GitLab app/bot on the project so `renovate.json` takes
   effect (weekly npm dependency update MRs).
4. **Custom domain** (once ready to go live on the production domain instead of the
   `*.workers.dev` subdomain): Cloudflare dashboard → Workers & Pages → the `kidsense` Worker →
   Settings → Domains & Routes → Add Custom Domain. Requires the domain's DNS zone to be on
   Cloudflare.

## Routine deployment

Deployment is automatic: pushing to `main` triggers the GitLab CI pipeline, which runs the
quality gate and, if it passes, deploys to Cloudflare Workers. No manual deployment step is
required for routine changes.

## Manual/emergency deployment

From a machine with `CLOUDFLARE_API_TOKEN`/`CLOUDFLARE_ACCOUNT_ID` set (or logged in via
`wrangler login`):

```bash
npm ci
npm run build
npx wrangler deploy
```

## Rollback

Cloudflare Workers keeps every previous deployed version. To roll back:

1. `npx wrangler deployments list` to find the last known-good version ID.
2. `npx wrangler rollback [version-id]` to redeploy it immediately, or revert the problematic
   commit(s) with a new commit (`git revert`) and push to `main` to go through the normal
   pipeline instead.

## Sign-off checklist (pre-release / major milestone)

- [ ] `npm run verify` green on `main`.
- [ ] GitLab CI pipeline green for the commit being released.
- [ ] `docs/test-plan.md` manual checkpoints relevant to this change completed.
- [ ] `CHANGELOG.md` updated.
- [ ] No open high/critical `npm audit` findings.
- [ ] Production build smoke-tested via `npm run preview`.
