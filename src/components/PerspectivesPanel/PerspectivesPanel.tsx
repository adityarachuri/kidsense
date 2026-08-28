import { useLocale } from '../../hooks/useLocale';
import type { Dictionary } from '../../i18n/translations';
import type { Perspectives } from '../../types/content';
import styles from './PerspectivesPanel.module.css';

interface PerspectivesPanelProps {
  readonly perspectives: Perspectives | undefined;
}

const ENTRIES: readonly {
  key: keyof Perspectives;
  icon: string;
  labelKey: keyof Dictionary['perspectivesPanel'];
}[] = [
  { key: 'teacher', icon: '🏫', labelKey: 'teacher' },
  { key: 'clinician', icon: '🩺', labelKey: 'clinician' },
  { key: 'teen', icon: '🧑', labelKey: 'teen' },
];

/** Renders nothing when no perspective has been authored for this topic yet. */
export function PerspectivesPanel({ perspectives }: PerspectivesPanelProps) {
  const { t } = useLocale();
  const populated = ENTRIES.filter((entry) => perspectives?.[entry.key]);
  if (populated.length === 0) {
    return null;
  }

  return (
    <section className={styles.panel} aria-labelledby="perspectives-heading">
      <h2 id="perspectives-heading" className={styles.head}>
        {t((d) => d.perspectivesPanel.heading)}
      </h2>
      <div className={styles.grid}>
        {populated.map((entry) => (
          <div key={entry.key} className={styles.card}>
            <p className={styles.cardLabel}>
              <span aria-hidden="true">{entry.icon}</span>{' '}
              {t((d) => d.perspectivesPanel[entry.labelKey])}
            </p>
            <p className={styles.cardText}>{perspectives?.[entry.key]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
