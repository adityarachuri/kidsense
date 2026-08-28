import { Navigate, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { TopicCard } from '../../components/TopicCard/TopicCard';
import { getDisplayTopics, getSectionById } from '../../content/sections';
import { usePageMeta } from '../../hooks/usePageMeta';
import styles from './SectionPage.module.css';

export function SectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = sectionId ? getSectionById(sectionId) : undefined;
  usePageMeta(section?.title, section?.description);

  if (!section) {
    return <Navigate to="/not-found" replace />;
  }

  const displayTopics = getDisplayTopics(section);

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

      {displayTopics.length === 0 ? (
        <p className={styles.emptyState}>
          This section is planned but not yet published. Check back soon.
        </p>
      ) : (
        <div className={styles.list}>
          {displayTopics.map((topic) => (
            <TopicCard key={topic.id} sectionId={section.id} topic={topic} />
          ))}
        </div>
      )}
    </div>
  );
}
