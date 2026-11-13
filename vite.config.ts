import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// Node's native Web Storage global (default-on as of Node 26) shadows jsdom's own
// window.localStorage/sessionStorage with an unconfigured, non-functional stub. Disable it for
// the test run (and any spawned workers, which inherit NODE_OPTIONS) so jsdom's polyfill wins;
// harmless on older Node versions where the experimental flag is already off by default.
process.env.NODE_OPTIONS = `${process.env.NODE_OPTIONS ?? ''} --no-experimental-webstorage`.trim();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
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
