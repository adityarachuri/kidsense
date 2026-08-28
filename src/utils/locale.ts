import { defaultLocale, isLocale, type Locale } from '../i18n/locale';

const STORAGE_KEY = 'kidsense-locale';

/** The user's last explicitly-chosen locale, or null if they've never picked one. */
export function getStoredLocale(): Locale | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isLocale(value) ? value : null;
  } catch {
    return null;
  }
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // localStorage unavailable (private browsing, disabled storage) — falls back to the default locale each visit.
  }
}

/** Reflects the active locale onto the document so assistive tech announces the right language and CSS can key script-specific font stacks off it — see `--font-heading`/`--font-body` in global.css. */
export function applyLocale(locale: Locale): void {
  document.documentElement.lang = locale;
  document.documentElement.setAttribute('data-locale', locale);
}

export function getInitialLocale(): Locale {
  return getStoredLocale() ?? defaultLocale;
}
