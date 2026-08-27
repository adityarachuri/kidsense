import { Link } from 'react-router-dom';
import type { Topic } from '../../types/content';
import styles from './TopicCard.module.css';

interface TopicCardProps {
  readonly sectionId: string;
  readonly topic: Topic;
}

export function TopicCard({ sectionId, topic }: TopicCardProps) {
  return (
    <Link to={`/section/${sectionId}/${topic.id}`} className={styles.card}>
      <span className={styles.number}>{String(topic.topicNumber).padStart(2, '0')}</span>
      <span className={styles.title}>{topic.title}</span>
      <span className={styles.arrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}
