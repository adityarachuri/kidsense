import type { Perspectives } from '../../types/content';
import styles from './PerspectivesPanel.module.css';

interface PerspectivesPanelProps {
  readonly perspectives: Perspectives | undefined;
}

const ENTRIES: readonly { key: keyof Perspectives; icon: string; label: string }[] = [
  { key: 'teacher', icon: '🏫', label: 'For Teachers' },
  { key: 'clinician', icon: '🩺', label: 'For Clinicians' },
  { key: 'teen', icon: '🧑', label: 'For Teens' },
];

/** Renders nothing when no perspective has been authored for this topic yet. */
export function PerspectivesPanel({ perspectives }: PerspectivesPanelProps) {
  const populated = ENTRIES.filter((entry) => perspectives?.[entry.key]);
  if (populated.length === 0) {
    return null;
  }

  return (
    <section className={styles.panel} aria-labelledby="perspectives-heading">
      <h2 id="perspectives-heading" className={styles.head}>
        Perspectives
      </h2>
      <div className={styles.grid}>
        {populated.map((entry) => (
          <div key={entry.key} className={styles.card}>
            <p className={styles.cardLabel}>
              <span aria-hidden="true">{entry.icon}</span> {entry.label}
            </p>
            <p className={styles.cardText}>{perspectives?.[entry.key]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
