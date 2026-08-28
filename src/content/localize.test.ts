import { describe, expect, it } from 'vitest';
import type { Section } from '../types/content';
import { localizeSections } from './localize';
import { sections } from './sections';

const fixtureSection: Section = {
  id: 'fixture-section-not-in-registry',
  title: 'Fixture Section',
  shortTitle: 'Fixture',
  description: 'A fixture section for testing the localization merge logic.',
  icon: '🧪',
  plannedTopicCount: 1,
  topics: [
    {
      id: 'fixture-topic',
      topicNumber: 1,
      title: 'Fixture Topic Title',
      heading: { lead: 'Fixture', emphasis: 'Topic', trailing: 'Heading' },
      quote: 'A fixture quote.',
      ageRanges: ['3–5 years'],
      illustrationId: 'fixture',
      reassurance: 'Fixture reassurance.',
      explanation: 'Fixture explanation.',
      reasons: [{ icon: '🧪', title: 'Fixture reason', description: 'Fixture description.' }],
      concerns: ['Fixture concern.'],
      professionalGuidance: 'Fixture guidance.',
      strategies: ['Fixture strategy.'],
      routine: [{ icon: '🧪', label: 'Fixture step' }],
      insight: 'Fixture insight.',
      perspectives: { teacher: 'Fixture teacher perspective.' },
      culturalLens: [{ region: 'Fixture region', note: 'Fixture note.' }],
    },
  ],
};

describe('localizeSections', () => {
  it('returns the exact source sections, unchanged, for the English locale', () => {
    const result = localizeSections(sections, 'en');
    expect(result).toBe(sections);
  });

  it('falls back to the English source field-by-field when no translation entry exists at all', () => {
    const localized = localizeSections([fixtureSection], 'hi')[0]!;
    const topic = localized.topics[0]!;
    const sourceTopic = fixtureSection.topics[0]!;

    expect(localized.title).toBe(fixtureSection.title);
    expect(localized.shortTitle).toBe(fixtureSection.shortTitle);
    expect(localized.description).toBe(fixtureSection.description);
    expect(localized.needsReview).toBeUndefined();

    expect(topic.title).toBe(sourceTopic.title);
    expect(topic.heading).toEqual(sourceTopic.heading);
    expect(topic.reasons).toEqual(sourceTopic.reasons);
    expect(topic.concerns).toEqual(sourceTopic.concerns);
    expect(topic.strategies).toEqual(sourceTopic.strategies);
    expect(topic.routine).toEqual(sourceTopic.routine);
    expect(topic.perspectives).toEqual(sourceTopic.perspectives);
    expect(topic.culturalLens).toEqual(sourceTopic.culturalLens);
    expect(topic.needsReview).toBeUndefined();
  });

  it('never drops a topic or reorders sections when localizing', () => {
    for (const locale of ['en', 'hi', 'te'] as const) {
      const result = localizeSections(sections, locale);
      expect(result.map((s) => s.id)).toEqual(sections.map((s) => s.id));
      for (const [index, section] of result.entries()) {
        expect(section.topics).toHaveLength(sections[index]!.topics.length);
      }
    }
  });

  it('substitutes real authored Hindi and Telugu content and flags it for review', () => {
    for (const locale of ['hi', 'te'] as const) {
      const morningRoutine = localizeSections(sections, locale)[0]!;
      expect(morningRoutine.id).toBe('morning-routine');
      expect(morningRoutine.needsReview).toBe(true);
      expect(morningRoutine.title).not.toBe(
        sections.find((s) => s.id === 'morning-routine')!.title,
      );

      const brushingTeeth = morningRoutine.topics.find((t) => t.id === 'brushing-teeth')!;
      const sourceBrushingTeeth = sections
        .find((s) => s.id === 'morning-routine')!
        .topics.find((t) => t.id === 'brushing-teeth')!;
      expect(brushingTeeth.title).not.toBe(sourceBrushingTeeth.title);
      expect(brushingTeeth.needsReview).toBe(true);
      // Fields untouched by the translation layer (not user-facing text) still round-trip.
      expect(brushingTeeth.illustrationId).toBe(sourceBrushingTeeth.illustrationId);
      expect(brushingTeeth.sources).toEqual(sourceBrushingTeeth.sources);
    }
  });
});
