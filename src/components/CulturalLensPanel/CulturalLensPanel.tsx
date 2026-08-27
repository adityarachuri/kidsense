import type { CulturalLensNote } from '../../types/content';
import styles from './CulturalLensPanel.module.css';

interface CulturalLensPanelProps {
  readonly culturalLens: readonly CulturalLensNote[] | undefined;
}

/** Renders nothing when no cultural-lens notes have been authored for this topic yet. */
export function CulturalLensPanel({ culturalLens }: CulturalLensPanelProps) {
  if (!culturalLens || culturalLens.length === 0) {
    return null;
  }

  return (
    <section className={styles.panel} aria-labelledby="cultural-lens-heading">
      <h2 id="cultural-lens-heading" className={styles.head}>
        <span aria-hidden="true">🌍</span> Around the World
      </h2>
      <p className={styles.intro}>
        Different, not wrong — how these behaviors are often viewed varies across cultures.
      </p>
      <ul className={styles.list}>
        {culturalLens.map((entry) => (
          <li key={entry.region} className={styles.item}>
            <span className={styles.region}>{entry.region}</span>
            <span className={styles.note}>{entry.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
