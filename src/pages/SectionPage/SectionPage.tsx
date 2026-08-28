import { Navigate, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { TopicCard } from '../../components/TopicCard/TopicCard';
import { TranslationNotice } from '../../components/TranslationNotice/TranslationNotice';
import { useLocalizedSections } from '../../content/localize';
import { getDisplayTopics, getSectionById, sections } from '../../content/sections';
import { useLocale } from '../../hooks/useLocale';
import { usePageMeta } from '../../hooks/usePageMeta';
import styles from './SectionPage.module.css';

export function SectionPage() {
  const { t } = useLocale();
  const localizedSections = useLocalizedSections(sections);
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = sectionId ? getSectionById(sectionId, localizedSections) : undefined;
  usePageMeta(section?.title, section?.description);

  if (!section) {
    return <Navigate to="/not-found" replace />;
  }

  const displayTopics = getDisplayTopics(section);

  return (
    <div className={styles.wrapper}>
      <div className={styles.crumbWrap}>
        <Breadcrumbs
          items={[{ label: t((d) => d.common.home), to: '/' }, { label: section.shortTitle }]}
        />
      </div>
      <div className={styles.head}>
        <h1 className={styles.title}>
          <span aria-hidden="true">{section.icon}</span>
          {section.title}
        </h1>
        <p className={styles.description}>{section.description}</p>
        <TranslationNotice needsReview={section.needsReview} />
      </div>

      {displayTopics.length === 0 ? (
        <p className={styles.emptyState}>{t((d) => d.sectionPage.emptyState)}</p>
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
