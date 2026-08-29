import { useLocale } from '../../hooks/useLocale';
import type { AbilityLensNote } from '../../types/content';
import styles from './AbilityLensPanel.module.css';

interface AbilityLensPanelProps {
  readonly abilityLens: readonly AbilityLensNote[] | undefined;
}

/** Renders nothing when no ability-lens notes have been authored for this topic yet. */
export function AbilityLensPanel({ abilityLens }: AbilityLensPanelProps) {
  const { t } = useLocale();
  if (!abilityLens || abilityLens.length === 0) {
    return null;
  }

  return (
    <section className={styles.panel} aria-labelledby="ability-lens-heading">
      <h2 id="ability-lens-heading" className={styles.head}>
        <span aria-hidden="true">🧭</span> {t((d) => d.abilityLensPanel.heading)}
      </h2>
      <p className={styles.intro}>{t((d) => d.abilityLensPanel.intro)}</p>
      <ul className={styles.list}>
        {abilityLens.map((entry) => (
          <li key={entry.context} className={styles.item}>
            <span className={styles.context}>{entry.context}</span>
            <span className={styles.note}>{entry.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
