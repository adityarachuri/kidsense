import { describe, expect, it } from 'vitest';
import type { Section, Topic } from '../types/content';
import { searchTopics } from './search';

function makeTopic(overrides: Partial<Topic> & Pick<Topic, 'id' | 'title'>): Topic {
  return {
    topicNumber: 1,
    heading: { lead: 'Why Do Some Kids', emphasis: overrides.title, trailing: 'Sometimes?' },
    quote: 'Quote',
    ageRanges: ['3–5 years'],
    illustrationId: 'placeholder',
    reassurance: 'Reassurance',
    explanation: 'Explanation',
    reasons: [],
    concerns: [],
    professionalGuidance: 'Guidance',
    strategies: [],
    routine: [],
    insight: 'Insight',
    keywords: [],
    ...overrides,
  };
}

function makeSection(id: string, topics: Topic[]): Section {
  return {
    id,
    title: `Section: ${id}`,
    shortTitle: id,
    description: 'desc',
    icon: '📘',
    topics,
    plannedTopicCount: topics.length,
  };
}

describe('searchTopics', () => {
  const wakeUp = makeTopic({
    id: 'wake-up',
    title: "Why Don't Kids Want to Wake Up?",
    keywords: ['sleep', 'alarm', 'grogginess'],
  });
  const bath = makeTopic({
    id: 'bath',
    title: 'Why Kids Hate Taking a Bath',
    keywords: ['bathing', 'water', 'sensory'],
  });
  const homework = makeTopic({
    id: 'postpone-homework',
    title: 'Why Kids Postpone Homework',
    keywords: ['procrastination'],
  });
  const sections = [
    makeSection('morning-routine', [wakeUp, bath]),
    makeSection('homework', [homework]),
  ];

  it('returns an empty array for an empty query', () => {
    expect(searchTopics(sections, '')).toEqual([]);
  });

  it('returns an empty array for a whitespace-only query', () => {
    expect(searchTopics(sections, '   ')).toEqual([]);
  });

  it('finds a topic by an exact title match first', () => {
    const results = searchTopics(sections, "Why Don't Kids Want to Wake Up?");
    expect(results[0]?.topic.id).toBe('wake-up');
    expect(results[0]?.score).toBe(0);
  });

  it('finds topics by a partial title match', () => {
    const results = searchTopics(sections, 'bath');
    expect(results.some((r) => r.topic.id === 'bath')).toBe(true);
  });

  it('finds topics by keyword even when the word is absent from the title', () => {
    const results = searchTopics(sections, 'procrastination');
    expect(results).toHaveLength(1);
    expect(results[0]?.topic.id).toBe('postpone-homework');
  });

  it('is case-insensitive', () => {
    const results = searchTopics(sections, 'WAKE up');
    expect(results.some((r) => r.topic.id === 'wake-up')).toBe(true);
  });

  it('matches by a title prefix even when it is not an exact match', () => {
    const results = searchTopics(sections, "Why Don't Kids Want to Wake");
    expect(results[0]?.topic.id).toBe('wake-up');
    expect(results[0]?.score).toBe(1);
  });

  it('still matches topics that have no keywords array at all', () => {
    const noKeywordsTopic = makeTopic({
      id: 'no-keywords',
      title: 'A Topic With No Keywords',
      keywords: undefined,
    });
    const localSections = [makeSection('misc', [noKeywordsTopic])];
    const results = searchTopics(localSections, 'no keywords');
    expect(results.some((r) => r.topic.id === 'no-keywords')).toBe(true);
  });

  it('is whitespace-tolerant around the query', () => {
    const results = searchTopics(sections, '  bath  ');
    expect(results.some((r) => r.topic.id === 'bath')).toBe(true);
  });

  it('returns no results when nothing matches', () => {
    expect(searchTopics(sections, 'xyz-nonexistent-query')).toEqual([]);
  });

  it('ranks a title match above a keyword-only match', () => {
    const results = searchTopics(sections, 'water');
    // "water" is a keyword on "bath" and would also appear if a title contained it.
    expect(results[0]?.topic.id).toBe('bath');
  });

  it('includes the originating section alongside each matched topic', () => {
    const results = searchTopics(sections, 'homework');
    expect(results[0]?.section.id).toBe('homework');
  });

  it('searches across every section, not just the first', () => {
    const results = searchTopics(sections, 'homework');
    expect(results.some((r) => r.topic.id === 'postpone-homework')).toBe(true);
  });
});
