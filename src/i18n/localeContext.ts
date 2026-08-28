import { createContext } from 'react';
import { interpolate, type TranslateParams } from './interpolate';
import type { Locale } from './locale';
import { translations, type Dictionary } from './translations';

export interface LocaleContextValue {
  readonly locale: Locale;
  readonly setLocale: (locale: Locale) => void;
  readonly dict: Dictionary;
  /** Selects a string out of the dictionary and fills in any `{param}` placeholders. */
  readonly t: (selector: (dict: Dictionary) => string, params?: TranslateParams) => string;
}

const defaultDict = translations.en;

/**
 * Defaults to English with a no-op `setLocale` so a component using `useLocale()` still renders
 * correctly in isolation (e.g. a component test rendered without wrapping providers) — the real
 * app always mounts `LocaleProvider` (see main.tsx), which overrides this default.
 */
export const LocaleContext = createContext<LocaleContextValue>({
  locale: 'en',
  setLocale: () => {},
  dict: defaultDict,
  t: (selector, params) => interpolate(selector(defaultDict), params),
});
