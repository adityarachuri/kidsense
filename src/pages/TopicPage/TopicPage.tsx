import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ConcernsWorksSplit } from '../../components/ConcernsWorksSplit/ConcernsWorksSplit';
import { CulturalLensPanel } from '../../components/CulturalLensPanel/CulturalLensPanel';
import { InsightFooter } from '../../components/InsightFooter/InsightFooter';
import { PerspectivesPanel } from '../../components/PerspectivesPanel/PerspectivesPanel';
import { PrintButton } from '../../components/PrintButton/PrintButton';
import { ReassuranceBanner } from '../../components/ReassuranceBanner/ReassuranceBanner';
import { ReasonGrid } from '../../components/ReasonGrid/ReasonGrid';
import { SourcesPanel } from '../../components/SourcesPanel/SourcesPanel';
import { TopicHeader } from '../../components/TopicHeader/TopicHeader';
import { getSectionById } from '../../content/sections';
import styles from './TopicPage.module.css';

export function TopicPage() {
  const { sectionId, topicId } = useParams<{ sectionId: string; topicId: string }>();
  const section = sectionId ? getSectionById(sectionId) : undefined;
  const topicIndex = section?.topics.findIndex((t) => t.id === topicId) ?? -1;
  const topic = topicIndex >= 0 ? section?.topics[topicIndex] : undefined;
  const nextTopic =
    section && topicIndex >= 0
      ? section.topics[(topicIndex + 1) % section.topics.length]
      : undefined;

  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} | Kidsense`;
    }
    return () => {
      document.title = 'Kidsense';
    };
  }, [topic]);

  if (!section || !topic) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <Breadcrumbs
          items={[
            { label: 'Home', to: '/' },
            { label: section.shortTitle, to: `/section/${section.id}` },
            { label: topic.title },
          ]}
        />
        <PrintButton />
      </div>

      <div className={styles.pageBody}>
        <TopicHeader topic={topic} sectionShortTitle={section.shortTitle} />
        <ReassuranceBanner reassurance={topic.reassurance} explanation={topic.explanation} />
        <ReasonGrid reasons={topic.reasons} />
        <ConcernsWorksSplit
          concerns={topic.concerns}
          professionalGuidance={topic.professionalGuidance}
          strategies={topic.strategies}
          routine={topic.routine}
        />
        <PerspectivesPanel perspectives={topic.perspectives} />
        <CulturalLensPanel culturalLens={topic.culturalLens} />
        <InsightFooter insight={topic.insight} />
        <SourcesPanel sources={topic.sources} />
      </div>

      {nextTopic && nextTopic.id !== topic.id && (
        <div className={styles.nextUp}>
          <div>
            <p className={styles.nextUpLabel}>Next up</p>
            <p className={styles.nextUpTitle}>{nextTopic.title}</p>
          </div>
          <Link
            to={`/section/${section.id}/${nextTopic.id}`}
            className={styles.nextUpLink}
            aria-label={`Go to next topic: ${nextTopic.title}`}
          >
            →
          </Link>
        </div>
      )}
    </div>
  );
}
