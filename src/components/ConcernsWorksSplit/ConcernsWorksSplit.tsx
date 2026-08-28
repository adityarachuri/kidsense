import { Fragment } from 'react';
import { useLocale } from '../../hooks/useLocale';
import type { RoutineStep } from '../../types/content';
import styles from './ConcernsWorksSplit.module.css';

interface ConcernsWorksSplitProps {
  readonly concerns: readonly string[];
  readonly professionalGuidance: string;
  readonly strategies: readonly string[];
  readonly routine: readonly RoutineStep[];
}

export function ConcernsWorksSplit({
  concerns,
  professionalGuidance,
  strategies,
  routine,
}: ConcernsWorksSplitProps) {
  const { t } = useLocale();
  return (
    <div className={styles.columns}>
      <section className={styles.card} aria-labelledby="concerns-heading">
        <h2 id="concerns-heading" className={`${styles.head} ${styles.headRed}`}>
          {t((d) => d.concernsWorksSplit.concernsHeading)}
        </h2>
        <div className={styles.body}>
          <ul className={styles.list}>
            {concerns.map((concern) => (
              <li key={concern} className={styles.item}>
                <span className={styles.dot} aria-hidden="true">
                  ●
                </span>
                <span>{concern}</span>
              </li>
            ))}
          </ul>
          <p className={styles.warnBox}>
            <span aria-hidden="true">⚠️</span>
            <span>{professionalGuidance}</span>
          </p>
        </div>
      </section>

      <section className={styles.card} aria-labelledby="works-heading">
        <h2 id="works-heading" className={`${styles.head} ${styles.headGreen}`}>
          {t((d) => d.concernsWorksSplit.worksHeading)}
        </h2>
        <div className={styles.body}>
          <ul className={styles.list}>
            {strategies.map((strategy) => (
              <li key={strategy} className={styles.item}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span>{strategy}</span>
              </li>
            ))}
          </ul>
          <div
            className={styles.routineStrip}
            aria-label={t((d) => d.concernsWorksSplit.routineAriaLabel)}
          >
            {routine.map((step, index) => (
              <Fragment key={step.label}>
                <div className={styles.routineStep}>
                  <div className={styles.routineIcon} aria-hidden="true">
                    {step.icon}
                  </div>
                  <div className={styles.routineLabel}>{step.label}</div>
                </div>
                {index < routine.length - 1 && (
                  <span className={styles.routineArrow} aria-hidden="true">
                    →
                  </span>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
