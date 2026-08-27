import styles from './PrintButton.module.css';

export function PrintButton() {
  return (
    <button type="button" className={styles.button} onClick={() => window.print()}>
      <span aria-hidden="true">🖨️</span>
      Print this page
    </button>
  );
}
