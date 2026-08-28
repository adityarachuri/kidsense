import { useLocale } from '../../hooks/useLocale';
import { isLocale, locales } from '../../i18n/locale';
import styles from './LanguageToggle.module.css';

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <select
      className={styles.select}
      value={locale}
      aria-label={t((d) => d.languageToggle.ariaLabel)}
      onChange={(event) => {
        const value = event.target.value;
        if (isLocale(value)) {
          setLocale(value);
        }
      }}
    >
      {locales.map((entry) => (
        <option key={entry.id} value={entry.id}>
          {entry.nativeName}
        </option>
      ))}
    </select>
  );
}
