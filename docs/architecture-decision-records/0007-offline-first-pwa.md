# ADR-0007: Offline-first PWA (installable, offline, accessible)

## Status

Accepted

## Context

Kidsense is a static SPA with no backend — every build bundles all content directly into its JS,
so there is no runtime data-fetching step that offline support would need to special-case. The
only thing standing between "works online only" and "fully installable and offline" was precaching
the build output itself. `docs/pwa-offline-first-plan.md` had already scoped this: use
`vite-plugin-pwa` (Workbox's `generateSW` strategy), since no custom runtime caching or IndexedDB
is needed when content never changes between page loads of the same deployed build.

Two things blocked this before any code could be written:

1. `public/_headers`' CSP set `worker-src 'none'; manifest-src 'none'`, added deliberately (per
   CHANGELOG) on the premise that the app used "none of iframes, web workers, a web manifest, or
   audio/video." That premise has to change for this feature, and only those two directives.
2. No icon assets beyond `favicon.svg` existed — a manifest needs raster PNGs (192/512/maskable/
   apple-touch-icon), which nothing in the toolchain generated.

Scope was deliberately bounded by three decisions made up front:

- Coverage stays at the existing project-wide thresholds (85/80/85/85 in `vite.config.ts`) rather
  than chasing 100% globally — new PWA code is tested thoroughly enough not to regress them, same
  bar as every other feature here.
- Installability is browser-native only. No custom `beforeinstallprompt` capture or "Install App"
  button — a valid manifest plus an active service worker already satisfies the standard
  installability criteria in every major browser.
- A pre-existing, unrelated local test-runner crash (every Vitest suite failing under Git Bash on
  this Windows machine) was investigated as a prerequisite. It turned out to be a Git Bash
  `/c/...` path-mounting artifact — not a real Vitest/Node/jsdom bug — so no dependency or code
  change was needed; running the suite from PowerShell (or any native shell, and CI's Ubuntu
  runner) was unaffected the whole time.

## Decision

Adopt `vite-plugin-pwa` with Workbox's `generateSW` mode, `registerType: 'prompt'`, and no
third-party install-prompt UI.

- **Manifest** (`src/pwa/manifestConfig.ts`, single source of truth shared by the plugin config
  and its own sanity test): name/short_name "Kidsense", `start_url`/`scope` `/`, `display:
standalone`, theme/background colors matching the existing brand purple, and 192/512/maskable
  icons plus an apple-touch-icon, generated once via a new `scripts/generate-pwa-icons.ts` (`sharp`,
  dev-only) from `favicon.svg` and committed under `public/icons/` — not regenerated at build time,
  for reproducibility.
- **Service worker**: precaches every build asset (`**/*.{js,css,html,svg,woff2,png,ico}`) with
  `navigateFallback: /index.html` (denylisting `/sitemap.xml`, `/robots.txt`, `/.well-known/*` so
  those keep their own semantics offline). `injectRegister: null` and `devOptions.enabled: false`
  — registration is done by hand (`src/hooks/usePwa.ts`, via `virtual:pwa-register`) only in a
  built/previewed app, never under `vite dev`.
- **UI**: a single `PwaStatus` component (`role="status"`, this app's first live-region pattern)
  covers all three states — update available (with a Reload action), offline-ready, and currently
  offline (via `useOnlineStatus`) — mounted once in `Layout`, i18n'd into en/hi/te.
- **CSP**: `worker-src`/`manifest-src` flip from `'none'` to `'self'`. Nothing else in the policy
  changes — no new origins, no `unsafe-inline`. `public/_headers` also gains `no-cache` on
  `/sw.js`, `/manifest.webmanifest`, and `/index.html` (so update checks revalidate promptly) and
  a one-week — not `immutable` — cache on `/icons/*` (filenames aren't content-hashed).

Two environment-specific fixes were required to get a correct precache manifest, both scoped
narrowly rather than worked around:

- **Windows path bug**: `workbox-build` resolves an unset/relative `globDirectory` via
  `process.cwd()`, which returns backslash-separated paths on Windows. The `glob` package it uses
  internally silently returns zero matches against a backslash `cwd` instead of erroring — the
  build "succeeded" with an empty precache and no diagnostic. Fixed by passing `globDirectory` as
  an explicit absolute, forward-slash path in `vite.config.ts`.
- **Dependency version skew**: this repo's existing `minimatch` override (`^11.0.9`, added to fix
  a ReDoS advisory — see below) silently breaks `glob@11.1.0` (the version `workbox-build` would
  otherwise resolve), because that `glob` version was built against `minimatch@^10.1.1`'s API, not
  v11's — the mismatch doesn't error, it just makes every glob scan return zero matches. Resolved
  by scoping a second override so `workbox-build`'s `glob` dependency resolves to `glob@^14.0.6`
  instead, which itself depends on `minimatch@^11.0.5` — compatible with the existing override,
  `npm audit --audit-level=high` clean on both sides.
- **Precache size limit**: the app's single main JS chunk (~2.1 MB, all content bundled, unsplit)
  exceeds Workbox's 2 MiB default precache limit; raised `maximumFileSizeToCacheInBytes` to 3 MiB
  rather than precache the app partially.

## Consequences

- **Positive**: offline support required zero runtime-caching logic or IndexedDB, exactly as
  anticipated — the app's "everything is bundled JS" architecture makes `generateSW` sufficient.
- **Positive**: the CSP change is minimal and auditable — one commit, two directives, no new
  origins — keeping it easy to review in isolation from the rest of the feature.
- **Negative — residual moderate audit finding**: `workbox-build`'s own `glob` dependency (even at
  the pinned `^14.0.6`) pulls a transitively vulnerable `glob`/`minimatch` chain in some
  resolutions; this is a build-time-only devDependency (never shipped to users, and all glob
  patterns here are static/developer-authored, not attacker-influenced), and does not affect the
  `npm audit --audit-level=high` CI gate, which remains clean. Revisit if `vite-plugin-pwa`/
  `workbox-build` ship a release with an updated `glob` range.
- **Deferred, explicitly not dropped**: a custom install-prompt UI; runtime caching for any future
  API/data layer, if one is ever added; a CI-level headless-browser offline smoke test (manual
  verification was used instead — see the deployment runbook's updated sign-off checklist).
