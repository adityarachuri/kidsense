import { Link } from 'react-router-dom';
import { getAuthoredTopicCount } from '../../content/sections';
import type { Section } from '../../types/content';
import { ProgressBadge } from '../ProgressBadge/ProgressBadge';
import styles from './SectionCard.module.css';

interface SectionCardProps {
  readonly section: Section;
}

export function SectionCard({ section }: SectionCardProps) {
  const hasTopics = section.topics.length > 0;
  const authoredCount = getAuthoredTopicCount(section);

  if (!hasTopics) {
    return (
      <div className={`${styles.card} ${styles.cardDisabled}`} aria-disabled="true">
        <div className={styles.top}>
          <span className={styles.icon} aria-hidden="true">
            {section.icon}
          </span>
          <ProgressBadge authored={authoredCount} planned={section.plannedTopicCount} />
        </div>
        <p className={styles.title}>{section.shortTitle}</p>
        <p className={styles.description}>{section.description}</p>
      </div>
    );
  }

  return (
    <Link to={`/section/${section.id}`} className={styles.card}>
      <div className={styles.top}>
        <span className={styles.icon} aria-hidden="true">
          {section.icon}
        </span>
        <ProgressBadge authored={authoredCount} planned={section.plannedTopicCount} />
      </div>
      <p className={styles.title}>{section.shortTitle}</p>
      <p className={styles.description}>{section.description}</p>
    </Link>
  );
}
