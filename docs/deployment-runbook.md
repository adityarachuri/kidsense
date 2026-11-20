# Deployment Runbook

## Architecture

Static React SPA (Vite build) deployed to **Cloudflare Workers** (static assets) via **GitHub
Actions**. No backend, no database. See
[ADR-0006](architecture-decision-records/0006-github-actions-cloudflare-workers-migration.md) for
why this replaced the earlier GitLab CI setup.

`.github/workflows/ci.yml` defines two jobs:

- **`quality-gate`** — `npm audit`, `gitleaks` secret scan, typecheck, lint, format check, test
  with coverage, build. Runs on every push and pull request.
- **`deploy`** — `needs` the quality gate, runs only on pushes to `main`, and deploys `dist/` to
  Cloudflare Workers via `npx wrangler deploy`.

Cloudflare-specific config: `wrangler.toml` (Worker name, static-assets directory, SPA fallback
via `not_found_handling`) and `public/_headers` (security headers and cache rules, copied into
`dist/` by Vite).

### Service worker updates (PWA, ADR-0007)

The app is an installable, offline-capable PWA (`vite-plugin-pwa`, `registerType: 'prompt'`).
`/sw.js`, `/manifest.webmanifest`, and `/index.html` are served `Cache-Control: no-cache` in
`public/_headers` so every load revalidates against the latest deploy; `/icons/*` gets a
one-week (not `immutable`) cache since icon filenames aren't content-hashed. Because the update
type is `'prompt'`, a user with the app already open sees a "Reload" prompt (`PwaStatus`) rather
than an instant forced refresh — a deploy is "live" for new visits immediately, but existing open
tabs pick it up only once the user reloads or the browser's own periodic update check fires.
`wrangler rollback` (below) reverts `dist/` immediately for new visits; an already-installed
service worker on a returning visitor's device only picks up a rollback on its next update check,
the same caveat that applies to any service-worker-based site, not something specific to
Cloudflare.

## One-time manual setup (must be done by a human, not by this documentation)

1. **GitHub Actions secrets**: in the GitHub repo → Settings → Secrets and variables → Actions,
   add as repository secrets:
   - `CLOUDFLARE_API_TOKEN` — a token scoped to `Account | Workers Scripts | Edit` for the target
     Cloudflare account. Create it at
     [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens).
   - `CLOUDFLARE_ACCOUNT_ID` — from `wrangler whoami` or the Cloudflare dashboard.
     Both are also referenced by the `deploy` job's `environment: production`, so create that
     environment (Settings → Environments) if you want deploy approvals/protection rules.
2. **Protected branch**: Settings → Branches: protect `main` (no force-push, require a pull
   request before merging, require the `quality-gate` status check to pass before merging).
3. **Renovate**: install/enable the [Renovate GitHub App](https://github.com/apps/renovate) on
   this repository so `renovate.json` takes effect (weekly npm and GitHub Actions dependency
   update PRs).
4. **Custom domain** (once ready to go live on the production domain instead of the
   `*.workers.dev` subdomain): Cloudflare dashboard → Workers & Pages → the `kidsense` Worker →
   Settings → Domains & Routes → Add Custom Domain. Requires the domain's DNS zone to be on
   Cloudflare.

## Routine deployment

Deployment is automatic: pushing to `main` triggers the GitHub Actions workflow, which runs the
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
- [ ] GitHub Actions `quality-gate` job green for the commit being released.
- [ ] `docs/test-plan.md` manual checkpoints relevant to this change completed.
- [ ] `CHANGELOG.md` updated.
- [ ] No open high/critical `npm audit` findings.
- [ ] Production build smoke-tested via `npm run preview`.
- [ ] `dist/manifest.webmanifest` and `dist/sw.js` present after `npm run build`; manifest icons
      resolve to real files under `dist/icons/`.
- [ ] A deep link (not just `/`) still loads while the browser is offline, after one prior online
      visit (manual check — see ADR-0007 for why this wasn't automated in CI).
- [ ] `PwaStatus` accessibility assertions green (`src/components/PwaStatus/PwaStatus.test.tsx`).
