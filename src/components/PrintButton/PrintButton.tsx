import { useLocale } from '../../hooks/useLocale';
import styles from './PrintButton.module.css';

export function PrintButton() {
  const { t } = useLocale();
  return (
    <button type="button" className={styles.button} onClick={() => window.print()}>
      <span aria-hidden="true">🖨️</span>
      {t((d) => d.common.printThisPage)}
    </button>
  );
}
