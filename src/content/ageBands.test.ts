import { describe, expect, it } from 'vitest';
import type { Topic } from '../types/content';
import {
  ageBands,
  getAgeBandById,
  getAgeBandForMilestoneAge,
  getApplicableAgeBandIds,
} from './ageBands';

function makeTopic(overrides: Partial<Topic>): Topic {
  return {
    id: 'test-topic',
    topicNumber: 1,
    title: 'Test Topic',
    heading: { lead: 'Why do', emphasis: 'test topics', trailing: 'exist?' },
    quote: 'Because tests matter.',
    ageRanges: [],
    illustrationId: 'wake-up',
    reassurance: "It's common.",
    explanation: 'For testing.',
    reasons: [],
    concerns: [],
    professionalGuidance: 'Ask a professional.',
    strategies: [],
    routine: [],
    insight: 'Testing insight.',
    ...overrides,
  };
}

describe('ageBands', () => {
  it('defines exactly five bands covering all six milestone ages', () => {
    expect(ageBands).toHaveLength(5);
    const allMilestones = ageBands.flatMap((band) => band.milestoneAges);
    expect(allMilestones.sort((a, b) => a - b)).toEqual([5, 8, 10, 12, 15, 18]);
  });

  it('getAgeBandById resolves every declared band id', () => {
    for (const band of ageBands) {
      expect(getAgeBandById(band.id)?.id).toBe(band.id);
    }
  });

  it('getAgeBandForMilestoneAge finds the band containing a milestone age', () => {
    expect(getAgeBandForMilestoneAge(5)?.id).toBe('early-childhood');
    expect(getAgeBandForMilestoneAge(10)?.id).toBe('tween');
    expect(getAgeBandForMilestoneAge(12)?.id).toBe('tween');
    expect(getAgeBandForMilestoneAge(18)?.id).toBe('older-teen');
  });

  it('getAgeBandForMilestoneAge returns undefined for an age with no matching band', () => {
    expect(getAgeBandForMilestoneAge(99)).toBeUndefined();
  });
});

describe('getApplicableAgeBandIds', () => {
  it('returns explicit ageBandIds verbatim when declared', () => {
    const topic = makeTopic({ ageRanges: ['3–5 years'], ageBandIds: ['teen', 'older-teen'] });
    expect(getApplicableAgeBandIds(topic)).toEqual(['teen', 'older-teen']);
  });

  it('infers a single band from a single age range', () => {
    const topic = makeTopic({ ageRanges: ['3–5 years'] });
    expect(getApplicableAgeBandIds(topic)).toEqual(['early-childhood']);
  });

  it('infers and dedupes multiple bands from multiple overlapping age ranges', () => {
    const topic = makeTopic({ ageRanges: ['3–5 years', '5–8 years', '8–12 years'] });
    expect(getApplicableAgeBandIds(topic)).toEqual([
      'early-childhood',
      'middle-childhood',
      'tween',
    ]);
  });

  it('handles a single-number range like "5+ years"', () => {
    const topic = makeTopic({ ageRanges: ['5+ years'] });
    expect(getApplicableAgeBandIds(topic)).toEqual(['early-childhood']);
  });

  it('skips an unparseable range instead of guessing', () => {
    const topic = makeTopic({ ageRanges: ['all ages'] });
    expect(getApplicableAgeBandIds(topic)).toEqual([]);
  });
});
