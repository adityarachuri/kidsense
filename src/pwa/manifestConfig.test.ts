import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { manifestConfig } from './manifestConfig';

describe('manifestConfig', () => {
  it('declares the required manifest fields as non-empty strings', () => {
    expect(manifestConfig.name).toBeTruthy();
    expect(manifestConfig.short_name).toBeTruthy();
    expect(manifestConfig.start_url).toBeTruthy();
    expect(manifestConfig.scope).toBeTruthy();
    expect(manifestConfig.display).toBeTruthy();
    expect(manifestConfig.theme_color).toBeTruthy();
    expect(manifestConfig.background_color).toBeTruthy();
  });

  it('declares at least one icon', () => {
    expect(manifestConfig.icons?.length).toBeGreaterThan(0);
  });

  it('references icon files that actually exist under public/', () => {
    for (const icon of manifestConfig.icons ?? []) {
      const relativePath = icon.src.replace(/^\//, '');
      expect(existsSync(`public/${relativePath}`)).toBe(true);
    }
  });

  it('serializes to JSON without throwing', () => {
    expect(() => JSON.stringify(manifestConfig)).not.toThrow();
  });
});
