import { useMemo } from 'react';
import { useLocale } from '../hooks/useLocale';
import type { Locale } from '../i18n/locale';
import type { Section, Topic } from '../types/content';
import { contentTranslations } from './translations/registry';
import {
  getTopicVariantKey,
  type SectionContentTranslations,
  type SectionTranslation,
  type TopicTranslation,
} from './translations/types';

function pick<T>(translated: T | undefined, fallback: T): T {
  return translated ?? fallback;
}

function localizeTopic(topic: Topic, translation: TopicTranslation | undefined): Topic {
  if (!translation) return topic;
  return {
    ...topic,
    title: pick(translation.title, topic.title),
    heading: {
      lead: pick(translation.heading?.lead, topic.heading.lead),
      emphasis: pick(translation.heading?.emphasis, topic.heading.emphasis),
      trailing: pick(translation.heading?.trailing, topic.heading.trailing),
    },
    quote: pick(translation.quote, topic.quote),
    ageRanges: translation.ageRanges
      ? topic.ageRanges.map((range, index) => pick(translation.ageRanges?.[index], range))
      : topic.ageRanges,
    reassurance: pick(translation.reassurance, topic.reassurance),
    explanation: pick(translation.explanation, topic.explanation),
    reasons: translation.reasons
      ? topic.reasons.map((reason, index) => ({
          ...reason,
          title: pick(translation.reasons?.[index]?.title, reason.title),
          description: pick(translation.reasons?.[index]?.description, reason.description),
        }))
      : topic.reasons,
    concerns: translation.concerns
      ? topic.concerns.map((concern, index) => pick(translation.concerns?.[index], concern))
      : topic.concerns,
    professionalGuidance: pick(translation.professionalGuidance, topic.professionalGuidance),
    strategies: translation.strategies
      ? topic.strategies.map((strategy, index) => pick(translation.strategies?.[index], strategy))
      : topic.strategies,
    routine: translation.routine
      ? topic.routine.map((step, index) => ({
          ...step,
          label: pick(translation.routine?.[index]?.label, step.label),
        }))
      : topic.routine,
    insight: pick(translation.insight, topic.insight),
    perspectives: topic.perspectives
      ? {
          teacher: pick(translation.perspectives?.teacher, topic.perspectives.teacher),
          clinician: pick(translation.perspectives?.clinician, topic.perspectives.clinician),
          teen: pick(translation.perspectives?.teen, topic.perspectives.teen),
        }
      : topic.perspectives,
    culturalLens: translation.culturalLens
      ? topic.culturalLens?.map((entry, index) => ({
          region: pick(translation.culturalLens?.[index]?.region, entry.region),
          note: pick(translation.culturalLens?.[index]?.note, entry.note),
        }))
      : topic.culturalLens,
    needsReview: translation.needsReview,
  };
}

function localizeSectionMeta(
  section: Section,
  translation: SectionTranslation | undefined,
): Pick<Section, 'title' | 'shortTitle' | 'description' | 'needsReview'> {
  return {
    title: pick(translation?.title, section.title),
    shortTitle: pick(translation?.shortTitle, section.shortTitle),
    description: pick(translation?.description, section.description),
    needsReview: translation?.needsReview,
  };
}

/**
 * Returns `sections` with every translatable field swapped for its `locale` translation where
 * one has been authored, falling back field-by-field (and topic-by-topic, section-by-section)
 * to the English original — so a partially-translated topic, or a whole section with no
 * translations yet, still renders in full rather than leaving gaps.
 */
export function localizeSections(sections: readonly Section[], locale: Locale): Section[] {
  if (locale === 'en') return sections as Section[];

  const localeTranslations = contentTranslations[locale];
  return sections.map((section) => {
    const sectionTranslation = localeTranslations.sections[section.id];
    const topicTranslations: SectionContentTranslations =
      localeTranslations.topicsBySection[section.id] ?? {};
    return {
      ...section,
      ...localizeSectionMeta(section, sectionTranslation),
      topics: section.topics.map((topic) =>
        localizeTopic(topic, topicTranslations[getTopicVariantKey(topic)]),
      ),
    };
  });
}

/** Localizes `sections` for the current locale, memoized so it's only recomputed when the locale (or the source data) changes. */
export function useLocalizedSections(sections: readonly Section[]): Section[] {
  const { locale } = useLocale();
  return useMemo(() => localizeSections(sections, locale), [sections, locale]);
}
