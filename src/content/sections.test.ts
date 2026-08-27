import { describe, expect, it } from 'vitest';
import {
  getAllTopicsFlat,
  getSectionById,
  getTopicById,
  getTotalAuthoredTopicCount,
  getTotalPlannedTopicCount,
  sections,
} from './sections';

describe('sections registry', () => {
  it('getSectionById finds an existing section', () => {
    expect(getSectionById('morning-routine')?.id).toBe('morning-routine');
  });

  it('getSectionById returns undefined for an unknown id', () => {
    expect(getSectionById('does-not-exist')).toBeUndefined();
  });

  it('getTopicById finds a topic nested inside its section', () => {
    const topic = getTopicById('morning-routine', 'wake-up');
    expect(topic?.id).toBe('wake-up');
  });

  it('getTopicById returns undefined when the section does not exist', () => {
    expect(getTopicById('does-not-exist', 'wake-up')).toBeUndefined();
  });

  it('getTopicById returns undefined when the topic does not exist in a real section', () => {
    expect(getTopicById('morning-routine', 'does-not-exist')).toBeUndefined();
  });

  it('getAllTopicsFlat returns one entry per topic across every section', () => {
    const flat = getAllTopicsFlat();
    const expectedCount = sections.reduce((sum, s) => sum + s.topics.length, 0);
    expect(flat).toHaveLength(expectedCount);
    expect(flat.every((entry) => entry.section.topics.includes(entry.topic))).toBe(true);
  });

  it('getTotalAuthoredTopicCount matches the sum of each section topics length', () => {
    const expected = sections.reduce((sum, s) => sum + s.topics.length, 0);
    expect(getTotalAuthoredTopicCount()).toBe(expected);
  });

  it('getTotalPlannedTopicCount matches the sum of each section plannedTopicCount', () => {
    const expected = sections.reduce((sum, s) => sum + s.plannedTopicCount, 0);
    expect(getTotalPlannedTopicCount()).toBe(expected);
  });

  it('planned count is always at least the authored count for every section', () => {
    for (const section of sections) {
      expect(section.plannedTopicCount).toBeGreaterThanOrEqual(section.topics.length);
    }
  });
});
