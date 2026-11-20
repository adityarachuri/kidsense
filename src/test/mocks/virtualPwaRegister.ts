import type { RegisterSWOptions } from 'vite-plugin-pwa/types';
import { vi } from 'vitest';

/**
 * Test-only stand-in for the `virtual:pwa-register` module, aliased in via vite.config.ts's
 * `test.alias` so usePwa/PwaStatus tests can drive the update/offline-ready/error callbacks
 * without a real service worker. Never imported by app code.
 */

let lastOptions: RegisterSWOptions | undefined;

export const registerSW = vi.fn((options?: RegisterSWOptions) => {
  lastOptions = options;
  return vi.fn(async (_reloadPage?: boolean) => {});
});

export function __getLastRegisterSWOptions(): RegisterSWOptions | undefined {
  return lastOptions;
}

export function __resetVirtualPwaRegisterMock(): void {
  registerSW.mockClear();
  lastOptions = undefined;
}
