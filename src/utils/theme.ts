export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'kidsense-theme';

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark';
}

/** The user's last explicitly-chosen theme, or null if they've never overridden the system preference. */
export function getStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isTheme(value) ? value : null;
  } catch {
    return null;
  }
}

export function storeTheme(theme: Theme | null): void {
  try {
    if (theme) {
      localStorage.setItem(STORAGE_KEY, theme);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // localStorage unavailable (private browsing, disabled storage) — falls back to system preference each visit.
  }
}

/** Reflects an explicit theme choice onto the document, or clears the override to follow the system preference. */
export function applyTheme(theme: Theme | null): void {
  if (theme) {
    document.documentElement.setAttribute('data-theme', theme);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
