import { useContext } from 'react';
import { LocaleContext, type LocaleContextValue } from '../i18n/localeContext';

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}
