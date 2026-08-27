import styles from './InsightFooter.module.css';

interface InsightFooterProps {
  readonly insight: string;
}

export function InsightFooter({ insight }: InsightFooterProps) {
  return (
    <aside className={styles.footer}>
      <span className={styles.bulb} aria-hidden="true">
        💡
      </span>
      <p className={styles.text}>{insight}</p>
    </aside>
  );
}
