# PWA / offline-first plan

## Problem
Kidsense is a static React SPA (Vite, Cloudflare Workers assets, SPA fallback). All content is bundled in JS, so full offline works by precaching the build output. Currently CSP blocks it (`worker-src 'none'`, `manifest-src 'none'`), and there is no manifest, service worker, or PNG icons.

## Approach
Use `vite-plugin-pwa` (Workbox, `generateSW`), no extra runtime deps.
- Precache all build assets (js, css, html, woff2, svg, png) + `navigateFallback: /index.html` (denylist `/sitemap.xml`, `/robots.txt`, `/.well-known`) so deep links work offline.
- `registerType: 'prompt'`: a small update banner ("New version available — Reload") rather than silent skew; plus an "offline ready" status message. Both in the i18n dictionaries (en/hi/te) and announced via `role="status"`.
- Manifest: name, short_name, `start_url /`, `scope /`, `display standalone`, theme `#8266C9`, background color, icons.
- Icons: generate 192/512 PNG + maskable 512 + apple-touch-icon from favicon.svg (one-off script, committed output in `public/icons`).
- index.html: `<link rel="manifest">`, apple-touch-icon, apple-mobile-web-app meta.
- `public/_headers`: `worker-src 'self'`, `manifest-src 'self'`; `Cache-Control: no-cache` for `/sw.js`, `/manifest.webmanifest`, `/index.html`.
- Dev: SW disabled in dev; registration only in prod (`import.meta.env.PROD`).
- Hook `usePwa` (wraps `virtual:pwa-register`), `PwaStatus` component rendered in Layout; `useOnlineStatus` optional offline indicator.
- Types: `vite-plugin-pwa/client` in `vite-env.d.ts`; vitest alias/mock for the virtual module; coverage exclusions as needed.
- Tests: PwaStatus (update/offline-ready/dismiss, axe), manifest sanity test; keep coverage thresholds.
- Docs: ADR 0006 (offline/PWA), update threat-model/owasp checklist (SW + CSP change), deployment-runbook (cache headers, SW update flow), README, CHANGELOG.
- Verify: `npm run verify`, `vite preview`, then check dist has sw.js + manifest and precache includes all routes' assets; manual offline check via Playwright (offline context, deep link loads).

## Todos
1. deps-config: add vite-plugin-pwa, configure vite.config.ts
2. icons-manifest: icons + index.html tags
3. headers-csp: update _headers
4. pwa-ui: usePwa hook, PwaStatus component, i18n strings, Layout, main wiring
5. tests: unit/a11y tests and vitest mock
6. docs: ADR, threat model, runbook, README, CHANGELOG
7. verify: npm run verify + offline browser check

## Notes
- Content is not fetched at runtime, so no runtime caching/IndexedDB needed.
- COEP `require-corp` is fine (all same-origin).
- Install/offline prompts are out of scope beyond the update/offline-ready banner.
