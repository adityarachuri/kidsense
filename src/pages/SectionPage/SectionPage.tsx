import { Navigate, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { TopicCard } from '../../components/TopicCard/TopicCard';
import { getSectionById } from '../../content/sections';
import styles from './SectionPage.module.css';

export function SectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = sectionId ? getSectionById(sectionId) : undefined;

  if (!section) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.crumbWrap}>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: section.shortTitle }]} />
      </div>
      <div className={styles.head}>
        <h1 className={styles.title}>
          <span aria-hidden="true">{section.icon}</span>
          {section.title}
        </h1>
        <p className={styles.description}>{section.description}</p>
      </div>

      {section.topics.length === 0 ? (
        <p className={styles.emptyState}>
          This section is planned but not yet published. Check back soon.
        </p>
      ) : (
        <div className={styles.list}>
          {section.topics.map((topic) => (
            <TopicCard key={topic.id} sectionId={section.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
}
