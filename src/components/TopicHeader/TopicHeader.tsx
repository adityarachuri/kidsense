import type { Topic } from '../../types/content';
import { Illustration } from '../Illustration/Illustration';
import styles from './TopicHeader.module.css';

interface TopicHeaderProps {
  readonly topic: Topic;
  readonly sectionShortTitle: string;
}

export function TopicHeader({ topic, sectionShortTitle }: TopicHeaderProps) {
  return (
    <header className={styles.header}>
      <div>
        <p className="visually-hidden">{sectionShortTitle}</p>
        <h1 className={styles.titleMulti}>
          <span className={`${styles.line} ${styles.lineLead}`}>{topic.heading.lead}</span>
          <span className={`${styles.line} ${styles.lineEmphasis}`}>{topic.heading.emphasis}</span>
          <span className={`${styles.line} ${styles.lineTrailing}`}>{topic.heading.trailing}</span>
        </h1>
        <p className={styles.speechBubble}>&ldquo;{topic.quote}&rdquo;</p>
        <div className={styles.ageBadges}>
          {topic.ageRanges.map((range) => (
            <span key={range} className={styles.ageBadge}>
              {range}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.visual}>
        <Illustration illustrationId={topic.illustrationId} className={styles.illustration} />
      </div>
    </header>
  );
}
