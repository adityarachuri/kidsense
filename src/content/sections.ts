import type { AgeBandId, Section, Topic } from '../types/content';
import { behaviourTopics } from './section4-behaviour';
import { digitalEraTopics } from './section6-digital-era';
import { eatingTopics } from './section3-eating';
import { emotionsTopics } from './section5-emotions';
import { homeworkTopics } from './section2-homework';
import { morningRoutineTopics } from './section1-morning-routine';

/**
 * The full list of handbook sections, in display order.
 *
 * To add a new section once its content is authored:
 *   1. Create `src/content/sectionN-name.ts` exporting a `Topic[]`.
 *   2. Import it here and add a `Section` entry below.
 * No other code changes are required — routing, search, and navigation
 * are all derived from this list.
 */
export const sections: Section[] = [
  {
    id: 'morning-routine',
    title: 'Section 1: Morning Routine',
    shortTitle: 'Morning Routine',
    description:
      'Ten everyday morning behaviors, explained — with the psychology behind them and what actually helps.',
    icon: '☀️',
    topics: morningRoutineTopics,
    plannedTopicCount: 10,
  },
  {
    id: 'homework',
    title: 'Section 2: Homework',
    shortTitle: 'Homework',
    description:
      'Ten everyday homework struggles, explained — with the psychology behind them and what actually helps.',
    icon: '📚',
    topics: homeworkTopics,
    plannedTopicCount: 10,
  },
  {
    id: 'eating',
    title: 'Section 3: Eating',
    shortTitle: 'Eating',
    description:
      'Ten everyday mealtime struggles, explained — with the psychology behind them and what actually helps.',
    icon: '🍽️',
    topics: eatingTopics,
    plannedTopicCount: 10,
  },
  {
    id: 'behaviour',
    title: 'Section 4: Behaviour',
    shortTitle: 'Behaviour',
    description:
      'Fifteen everyday behavioral moments, explained — with the psychology behind them and what actually helps.',
    icon: '🧩',
    topics: behaviourTopics,
    plannedTopicCount: 15,
  },
  {
    id: 'emotions',
    title: 'Section 5: Emotions',
    shortTitle: 'Emotions',
    description:
      'Fifteen everyday emotional moments, explained — with the psychology behind them and what actually helps.',
    icon: '❤️',
    topics: emotionsTopics,
    plannedTopicCount: 15,
  },
  {
    id: 'digital-era',
    title: 'Section 6: Digital Era',
    shortTitle: 'Digital Era',
    description:
      'Fifteen everyday screen-time moments, explained — with the psychology behind them and what actually helps.',
    icon: '📱',
    topics: digitalEraTopics,
    plannedTopicCount: 15,
  },
];

/** Accepts an explicit `sourceSections` (e.g. localized ones from `useLocalizedSections`) instead of the English default. */
export function getSectionById(
  sectionId: string,
  sourceSections: readonly Section[] = sections,
): Section | undefined {
  return sourceSections.find((section) => section.id === sectionId);
}

export function getTopicById(sectionId: string, topicId: string) {
  const section = getSectionById(sectionId);
  return section?.topics.find((topic) => topic.id === topicId);
}

/**
 * All authored variants of one topic family (entries sharing the same `id` within a section) —
 * the family's default "general" article plus any age-band-specific rewrites, in authored order.
 * Takes an already-resolved `Section` rather than an id, since every caller already has one.
 */
export function getTopicVariants(section: Section | undefined, topicId: string): readonly Topic[] {
  return section?.topics.filter((topic) => topic.id === topicId) ?? [];
}

/**
 * Picks which variant of a topic family to render. With no `ageBandId`, or when no variant
 * claims that band, falls back to the family's general variant (the one with no explicit
 * `ageBandIds`) — or, failing that, the first authored variant, so a family with only
 * band-specific variants still resolves to something rather than a blank page.
 */
export function selectTopicVariant(
  variants: readonly Topic[],
  ageBandId: AgeBandId | undefined,
): Topic | undefined {
  const generalVariant = variants.find(
    (topic) => !topic.ageBandIds || topic.ageBandIds.length === 0,
  );
  if (ageBandId) {
    const bandVariant = variants.find((topic) => topic.ageBandIds?.includes(ageBandId));
    if (bandVariant) return bandVariant;
  }
  return generalVariant ?? variants[0];
}

/**
 * One card-worthy `Topic` per family in a section — the family's general variant — in
 * authored order. Used anywhere a section's topics are listed (e.g. `SectionPage`), so a
 * family with age-band variants still shows exactly one entry, not one per variant.
 */
export function getDisplayTopics(section: Section): readonly Topic[] {
  const seen = new Set<string>();
  const display: Topic[] = [];
  for (const topic of section.topics) {
    if (seen.has(topic.id)) continue;
    seen.add(topic.id);
    const variant = selectTopicVariant(getTopicVariants(section, topic.id), undefined);
    if (variant) display.push(variant);
  }
  return display;
}

/** Accepts an explicit `sourceSections` (e.g. localized ones from `useLocalizedSections`) instead of the English default. */
export function getAllTopicsFlat(sourceSections: readonly Section[] = sections) {
  return sourceSections.flatMap((section) => section.topics.map((topic) => ({ section, topic })));
}

/**
 * Number of distinct topic families authored in a section — counts each family once
 * regardless of how many age-band variants it has, so "10 of 10" doesn't inflate as
 * variants are added.
 */
export function getAuthoredTopicCount(section: Section): number {
  return new Set(section.topics.map((topic) => topic.id)).size;
}

export function getTotalAuthoredTopicCount(): number {
  return sections.reduce((sum, section) => sum + getAuthoredTopicCount(section), 0);
}

export function getTotalPlannedTopicCount(): number {
  return sections.reduce((sum, section) => sum + section.plannedTopicCount, 0);
}
