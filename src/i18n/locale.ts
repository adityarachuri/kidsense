export type Locale = 'en' | 'hi' | 'te';

export interface LocaleMeta {
  readonly id: Locale;
  /** The language's own name, in its own script — shown in the language switcher. */
  readonly nativeName: string;
}

export const locales: readonly LocaleMeta[] = [
  { id: 'en', nativeName: 'English' },
  { id: 'hi', nativeName: 'हिन्दी' },
  { id: 'te', nativeName: 'తెలుగు' },
];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string | null | undefined): value is Locale {
  return value === 'en' || value === 'hi' || value === 'te';
}
