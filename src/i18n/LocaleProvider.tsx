import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { applyLocale, getInitialLocale, storeLocale } from '../utils/locale';
import { interpolate } from './interpolate';
import { LocaleContext, type LocaleContextValue } from './localeContext';
import type { Locale } from './locale';
import { translations } from './translations';

export function LocaleProvider({ children }: { readonly children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale());

  useEffect(() => {
    applyLocale(locale);
    storeLocale(locale);
  }, [locale]);

  const value = useMemo<LocaleContextValue>(() => {
    const dict = translations[locale];
    return {
      locale,
      setLocale,
      dict,
      t: (selector, params) => interpolate(selector(dict), params),
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}
