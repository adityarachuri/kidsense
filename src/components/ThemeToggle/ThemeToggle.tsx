import { useEffect, useState } from 'react';
import { useLocale } from '../../hooks/useLocale';
import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  storeTheme,
  type Theme,
} from '../../utils/theme';
import styles from './ThemeToggle.module.css';

export function ThemeToggle() {
  const { t } = useLocale();
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
      aria-label={
        effectiveTheme === 'dark'
          ? t((d) => d.themeToggle.switchToLight)
          : t((d) => d.themeToggle.switchToDark)
      }
    >
      <span aria-hidden="true">{effectiveTheme === 'dark' ? '☀️' : '🌙'}</span>
    </button>
  );
}
