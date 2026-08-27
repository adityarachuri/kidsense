import { Fragment } from 'react';
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
  return (
    <div className={styles.columns}>
      <section className={styles.card} aria-labelledby="concerns-heading">
        <h2 id="concerns-heading" className={`${styles.head} ${styles.headRed}`}>
          When Should Parents Be Concerned?
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
          What Usually Works Better?
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
          <div className={styles.routineStrip} aria-label="Suggested routine, in order">
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
