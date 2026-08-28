import type { ReasonCard } from '../../types/content';
import styles from './ReasonGrid.module.css';

const COLOR_CYCLE = [
  styles.color0,
  styles.color1,
  styles.color2,
  styles.color3,
  styles.color4,
  styles.color5,
  styles.color0,
  styles.color4,
] as const;

interface ReasonGridProps {
  readonly reasons: readonly ReasonCard[];
}

export function ReasonGrid({ reasons }: ReasonGridProps) {
  return (
    <section aria-labelledby="common-reasons-heading">
      <h2 id="common-reasons-heading" className={styles.bar}>
        Common Reasons
      </h2>
      <div className={styles.grid}>
        {reasons.map((reason, index) => {
          const colorClass = COLOR_CYCLE[index % COLOR_CYCLE.length];
          const isAlt = index % 2 === 1;
          return (
            <article
              key={reason.title}
              className={isAlt ? `${styles.card} ${styles.cardAlt}` : styles.card}
            >
              <div className={styles.cardHead}>
                <span className={`${styles.number} ${colorClass}`}>{index + 1}</span>
                <span className={`${styles.title} ${colorClass}`}>{reason.title}</span>
              </div>
              <div className={styles.icon} aria-hidden="true">
                {reason.icon}
              </div>
              <p className={styles.description}>{reason.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
