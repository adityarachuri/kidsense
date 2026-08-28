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
import { TranslationNotice } from '../../components/TranslationNotice/TranslationNotice';
import { ageBands } from '../../content/ageBands';
import { useLocalizedSections } from '../../content/localize';
import {
  getSectionById,
  getTopicVariants,
  selectTopicVariant,
  sections,
} from '../../content/sections';
import { useLocale } from '../../hooks/useLocale';
import { usePageMeta } from '../../hooks/usePageMeta';
import type { AgeBandId } from '../../types/content';
import styles from './TopicPage.module.css';

function toAgeBandId(value: string | undefined): AgeBandId | undefined {
  return ageBands.some((band) => band.id === value) ? (value as AgeBandId) : undefined;
}

export function TopicPage() {
  const { t } = useLocale();
  const localizedSections = useLocalizedSections(sections);
  const { sectionId, topicId, ageBandId } = useParams<{
    sectionId: string;
    topicId: string;
    ageBandId?: string;
  }>();
  const section = sectionId ? getSectionById(sectionId, localizedSections) : undefined;
  const variants = topicId ? getTopicVariants(section, topicId) : [];
  const activeAgeBandId = toAgeBandId(ageBandId);
  const topic = selectTopicVariant(variants, activeAgeBandId);

  const uniqueFamilyIds = section ? Array.from(new Set(section.topics.map((t) => t.id))) : [];
  const familyIndex = topic ? uniqueFamilyIds.indexOf(topic.id) : -1;
  const nextTopicId =
    familyIndex >= 0 ? uniqueFamilyIds[(familyIndex + 1) % uniqueFamilyIds.length] : undefined;
  const nextTopic = nextTopicId
    ? selectTopicVariant(getTopicVariants(section, nextTopicId), undefined)
    : undefined;

  usePageMeta(topic?.title, topic ? `${topic.reassurance} ${topic.explanation}` : undefined);

  if (!section || !topic) {
    return <Navigate to="/not-found" replace />;
  }

  const bandVariants = variants.filter((v) => v.ageBandIds && v.ageBandIds.length > 0);
  const hasGeneralVariant = variants.some((v) => !v.ageBandIds || v.ageBandIds.length === 0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <Breadcrumbs
          items={[
            { label: t((d) => d.common.home), to: '/' },
            { label: section.shortTitle, to: `/section/${section.id}` },
            { label: topic.title },
          ]}
        />
        <PrintButton />
      </div>

      <div className={styles.pageBody}>
        {bandVariants.length > 0 && (
          <div
            className={styles.ageSwitcher}
            role="group"
            aria-label={t((d) => d.topicPage.ageSwitcherAriaLabel, { title: topic.title })}
          >
            {hasGeneralVariant && (
              <Link
                to={`/section/${section.id}/${topic.id}`}
                className={
                  !activeAgeBandId
                    ? `${styles.ageSwitcherLink} ${styles.ageSwitcherLinkActive}`
                    : styles.ageSwitcherLink
                }
                aria-current={!activeAgeBandId ? 'page' : undefined}
              >
                {t((d) => d.topicPage.generalVariant)}
              </Link>
            )}
            {bandVariants.map((variant) =>
              (variant.ageBandIds ?? []).map((bandId) => {
                const band = ageBands.find((b) => b.id === bandId);
                if (!band) return null;
                const isActive = activeAgeBandId === bandId;
                return (
                  <Link
                    key={bandId}
                    to={`/section/${section.id}/${topic.id}/${bandId}`}
                    className={
                      isActive
                        ? `${styles.ageSwitcherLink} ${styles.ageSwitcherLinkActive}`
                        : styles.ageSwitcherLink
                    }
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {band.label}
                  </Link>
                );
              }),
            )}
          </div>
        )}
        <TranslationNotice needsReview={topic.needsReview} />
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
            <p className={styles.nextUpLabel}>{t((d) => d.topicPage.nextUp)}</p>
            <p className={styles.nextUpTitle}>{nextTopic.title}</p>
          </div>
          <Link
            to={`/section/${section.id}/${nextTopic.id}`}
            className={styles.nextUpLink}
            aria-label={t((d) => d.topicPage.nextTopicAriaLabel, { title: nextTopic.title })}
          >
            →
          </Link>
        </div>
      )}
    </div>
  );
}
