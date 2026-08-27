import type { Section } from '../types/content';
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

export function getSectionById(sectionId: string): Section | undefined {
  return sections.find((section) => section.id === sectionId);
}

export function getTopicById(sectionId: string, topicId: string) {
  const section = getSectionById(sectionId);
  return section?.topics.find((topic) => topic.id === topicId);
}

export function getAllTopicsFlat() {
  return sections.flatMap((section) => section.topics.map((topic) => ({ section, topic })));
}

export function getTotalAuthoredTopicCount(): number {
  return sections.reduce((sum, section) => sum + section.topics.length, 0);
}

export function getTotalPlannedTopicCount(): number {
  return sections.reduce((sum, section) => sum + section.plannedTopicCount, 0);
}
