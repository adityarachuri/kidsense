import styles from './ReassuranceBanner.module.css';

interface ReassuranceBannerProps {
  readonly reassurance: string;
  readonly explanation: string;
}

export function ReassuranceBanner({ reassurance, explanation }: ReassuranceBannerProps) {
  return (
    <div>
      <p className={styles.banner}>{reassurance}</p>
      <p className={styles.explanation}>{explanation}</p>
    </div>
  );
}
