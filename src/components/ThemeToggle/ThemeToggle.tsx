import { useEffect, useState } from 'react';
import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  storeTheme,
  type Theme,
} from '../../utils/theme';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const [explicitTheme, setExplicitTheme] = useState<Theme | null>(() => getStoredTheme());
  const effectiveTheme = explicitTheme ?? getSystemTheme();

  useEffect(() => {
    applyTheme(explicitTheme);
    storeTheme(explicitTheme);
  }, [explicitTheme]);

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setExplicitTheme(effectiveTheme === 'dark' ? 'light' : 'dark')}
      aria-label={effectiveTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span aria-hidden="true">{effectiveTheme === 'dark' ? '☀️' : '🌙'}</span>
    </button>
  );
}
