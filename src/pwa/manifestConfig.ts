import type { ManifestOptions } from 'vite-plugin-pwa';

/**
 * Single source of truth for the generated web manifest, shared between the VitePWA plugin
 * config (vite.config.ts) and manifestConfig.test.ts's sanity checks.
 */
export const manifestConfig: Partial<ManifestOptions> = {
  name: 'Kidsense',
  short_name: 'Kidsense',
  description:
    'Kidsense — an evidence-informed, illustrated reference explaining everyday child behavior and what helps.',
  start_url: '/',
  scope: '/',
  display: 'standalone',
  theme_color: '#8266C9',
  background_color: '#ffffff',
  icons: [
    {
      src: '/icons/icon-192.png',
      sizes: '192x192',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/icons/icon-512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'any',
    },
    {
      src: '/icons/icon-512-maskable.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable',
    },
  ],
};
