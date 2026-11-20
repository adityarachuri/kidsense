import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vitest/config';
import { manifestConfig } from './src/pwa/manifestConfig.ts';

// Node's native Web Storage global (default-on as of Node 26) shadows jsdom's own
// window.localStorage/sessionStorage with an unconfigured, non-functional stub. Disable it for
// the test run (and any spawned workers, which inherit NODE_OPTIONS) so jsdom's polyfill wins;
// harmless on older Node versions where the experimental flag is already off by default.
process.env.NODE_OPTIONS = `${process.env.NODE_OPTIONS ?? ''} --no-experimental-webstorage`.trim();

const outDir = 'dist';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      // usePwa calls registerSW itself (see src/hooks/usePwa.ts) — injecting the plugin's own
      // registration script too would register the service worker twice.
      injectRegister: null,
      filename: 'sw.js',
      manifest: manifestConfig,
      workbox: {
        // workbox-build resolves a relative/unset globDirectory via process.cwd(), which returns
        // backslash-separated paths on Windows; glob (its underlying matcher) silently matches
        // nothing against a backslash cwd, so every file is dropped from precache with no error.
        // Passing an explicit forward-slash absolute path sidesteps the bug on every OS.
        globDirectory: resolve(import.meta.dirname, outDir)
          .split('\\')
          .join('/'),
        globPatterns: ['**/*.{js,css,html,svg,woff2,png,ico}'],
        // The main bundle is a single ~2MB chunk (all content is bundled, unsplit) — just over
        // Workbox's 2 MiB default precache limit. Raise it rather than precaching partially.
        maximumFileSizeToCacheInBytes: 3 * 1024 * 1024,
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/sitemap\.xml$/, /^\/robots\.txt$/, /^\/\.well-known\//],
        cleanupOutdatedCaches: true,
      },
      // Never register a service worker under `vite dev` — only in built/previewed output.
      devOptions: { enabled: false },
    }),
  ],
  build: {
    outDir,
    target: 'es2020',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Split vendor code so browsers can cache it independently of app code.
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          return undefined;
        },
      },
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    restoreMocks: true,
    // Resolves `virtual:pwa-register` to a test-only mock under Vitest only — vite build/dev
    // still resolve it through the real vite-plugin-pwa virtual module.
    alias: {
      'virtual:pwa-register': resolve(import.meta.dirname, 'src/test/mocks/virtualPwaRegister.ts'),
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov', 'json-summary'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/main.tsx',
        'src/vite-env.d.ts',
        'src/test/**',
        'src/**/*.d.ts',
        'src/**/index.ts',
        'src/types/**',
      ],
      thresholds: {
        statements: 85,
        branches: 80,
        functions: 85,
        lines: 85,
      },
    },
  },
});
