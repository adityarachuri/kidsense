import { Link } from 'react-router-dom';
import type { AgeBandId, Topic } from '../../types/content';
import styles from './TopicCard.module.css';

interface TopicCardProps {
  readonly sectionId: string;
  readonly topic: Topic;
  /** Deep-links to a specific age-band variant instead of the family's general article. */
  readonly ageBandId?: AgeBandId;
}

export function TopicCard({ sectionId, topic, ageBandId }: TopicCardProps) {
  const to = ageBandId
    ? `/section/${sectionId}/${topic.id}/${ageBandId}`
    : `/section/${sectionId}/${topic.id}`;

  return (
    <Link to={to} className={styles.card}>
      <span className={styles.number}>{String(topic.topicNumber).padStart(2, '0')}</span>
      <span className={styles.title}>{topic.title}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}
