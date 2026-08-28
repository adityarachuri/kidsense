import { describe, expect, it } from 'vitest';
import type { AgeBandId } from '../types/content';
import {
  getAllTopicsFlat,
  getAuthoredTopicCount,
  getDisplayTopics,
  getSectionById,
  getTopicById,
  getTopicVariants,
  getTotalAuthoredTopicCount,
  getTotalPlannedTopicCount,
  selectTopicVariant,
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

  it('getAuthoredTopicCount counts each topic family once, regardless of variant count', () => {
    const morningRoutine = getSectionById('morning-routine')!;
    const expectedFamilies = new Set(morningRoutine.topics.map((t) => t.id)).size;
    expect(getAuthoredTopicCount(morningRoutine)).toBe(expectedFamilies);
    expect(getAuthoredTopicCount(morningRoutine)).toBeLessThanOrEqual(morningRoutine.topics.length);
  });

  it('getTotalAuthoredTopicCount matches the sum of each section family count', () => {
    const expected = sections.reduce((sum, s) => sum + getAuthoredTopicCount(s), 0);
    expect(getTotalAuthoredTopicCount()).toBe(expected);
  });

  it('getTotalPlannedTopicCount matches the sum of each section plannedTopicCount', () => {
    const expected = sections.reduce((sum, s) => sum + s.plannedTopicCount, 0);
    expect(getTotalPlannedTopicCount()).toBe(expected);
  });

  it('planned count is always at least the authored family count for every section', () => {
    for (const section of sections) {
      expect(section.plannedTopicCount).toBeGreaterThanOrEqual(getAuthoredTopicCount(section));
    }
  });

  describe('topic family variants', () => {
    it('getTopicVariants returns every entry sharing an id within a section', () => {
      const variants = getTopicVariants(getSectionById('morning-routine'), 'wake-up');
      expect(variants.length).toBeGreaterThan(0);
      expect(variants.every((v) => v.id === 'wake-up')).toBe(true);
    });

    it('getTopicVariants returns an empty array for an unknown section or topic', () => {
      expect(getTopicVariants(getSectionById('does-not-exist'), 'wake-up')).toEqual([]);
      expect(getTopicVariants(getSectionById('morning-routine'), 'does-not-exist')).toEqual([]);
    });

    it('selectTopicVariant falls back to the general variant when no ageBandId is given', () => {
      const variants = getTopicVariants(getSectionById('morning-routine'), 'wake-up');
      expect(selectTopicVariant(variants, undefined)).toBe(
        variants.find((v) => !v.ageBandIds || v.ageBandIds.length === 0),
      );
    });

    it('selectTopicVariant falls back to the general variant for a band no variant claims', () => {
      const variants = getTopicVariants(getSectionById('morning-routine'), 'wake-up');
      expect(selectTopicVariant(variants, 'teen')).toBe(
        variants.find((v) => !v.ageBandIds || v.ageBandIds.length === 0),
      );
    });

    it('selectTopicVariant returns undefined for an empty variant list', () => {
      expect(selectTopicVariant([], undefined)).toBeUndefined();
    });

    it('every family has at most one general (no explicit ageBandIds) variant', () => {
      for (const section of sections) {
        const seenIds = new Set(section.topics.map((t) => t.id));
        for (const id of seenIds) {
          const variants = section.topics.filter((t) => t.id === id);
          const generalCount = variants.filter(
            (v) => !v.ageBandIds || v.ageBandIds.length === 0,
          ).length;
          expect(generalCount).toBeLessThanOrEqual(1);
        }
      }
    });

    it('no two variants in the same family claim overlapping age bands', () => {
      for (const section of sections) {
        const seenIds = new Set(section.topics.map((t) => t.id));
        for (const id of seenIds) {
          const variants = section.topics.filter((t) => t.id === id);
          const claimed = new Set<AgeBandId>();
          for (const variant of variants) {
            for (const bandId of variant.ageBandIds ?? []) {
              expect(claimed.has(bandId)).toBe(false);
              claimed.add(bandId);
            }
          }
        }
      }
    });

    it('topicNumber and illustrationId are consistent across every variant in a family', () => {
      for (const section of sections) {
        const seenIds = new Set(section.topics.map((t) => t.id));
        for (const id of seenIds) {
          const variants = section.topics.filter((t) => t.id === id);
          const [first, ...rest] = variants;
          if (!first) continue;
          for (const variant of rest) {
            expect(variant.topicNumber).toBe(first.topicNumber);
            expect(variant.illustrationId).toBe(first.illustrationId);
          }
        }
      }
    });

    it('getDisplayTopics returns exactly one entry per family, not one per variant', () => {
      for (const section of sections) {
        const display = getDisplayTopics(section);
        const uniqueFamilyIds = new Set(section.topics.map((t) => t.id));
        expect(display).toHaveLength(uniqueFamilyIds.size);
        expect(new Set(display.map((t) => t.id)).size).toBe(display.length);
      }
    });

    it('getDisplayTopics picks the general variant for a family that has one', () => {
      const morningRoutine = getSectionById('morning-routine')!;
      const display = getDisplayTopics(morningRoutine);
      const gettingDressed = display.find((t) => t.id === 'getting-dressed');
      expect(gettingDressed?.ageBandIds).toBeUndefined();
    });
  });
});
