import type { AgeBand, AgeBandId, Topic } from '../types/content';

/**
 * The five developmental age bands used to organize content, covering the
 * six milestone ages from the product vision (5, 8, 10, 12, 15, 18).
 * See docs/architecture-decision-records/0001-age-band-content-model.md.
 */
export const ageBands: readonly AgeBand[] = [
  { id: 'early-childhood', label: 'Early Childhood', minAge: 3, maxAge: 5, milestoneAges: [5] },
  { id: 'middle-childhood', label: 'Middle Childhood', minAge: 6, maxAge: 9, milestoneAges: [8] },
  { id: 'tween', label: 'Tween', minAge: 10, maxAge: 12, milestoneAges: [10, 12] },
  { id: 'teen', label: 'Teen', minAge: 13, maxAge: 15, milestoneAges: [15] },
  { id: 'older-teen', label: 'Older Teen', minAge: 16, maxAge: 18, milestoneAges: [18] },
];

export function getAgeBandById(id: AgeBandId): AgeBand | undefined {
  return ageBands.find((band) => band.id === id);
}

export function getAgeBandForMilestoneAge(age: number): AgeBand | undefined {
  return ageBands.find((band) => band.milestoneAges.includes(age));
}

/**
 * Parses strings like "3–5 years", "8-12 years", or "5+ years" into a
 * [min, max] tuple. Returns `null` for anything unparseable rather than
 * guessing, so callers can skip a range instead of silently mis-bucketing it.
 */
function parseAgeRange(range: string): readonly [number, number] | null {
  const numbers = range.match(/\d+/g);
  if (!numbers || numbers.length === 0) return null;
  const min = Number(numbers[0]);
  const max = numbers.length > 1 ? Number(numbers[1]) : min;
  return [min, max];
}

/**
 * Determines which age bands a topic applies to. Uses `ageBandIds` when the
 * content explicitly declares it (required once a topic family has more than
 * one authored variant); otherwise infers overlapping bands from the
 * free-form `ageRanges` display strings already on every topic.
 */
export function getApplicableAgeBandIds(topic: Topic): readonly AgeBandId[] {
  if (topic.ageBandIds && topic.ageBandIds.length > 0) {
    return topic.ageBandIds;
  }

  const matched = new Set<AgeBandId>();
  for (const rangeText of topic.ageRanges) {
    const parsed = parseAgeRange(rangeText);
    if (!parsed) continue;
    const [min, max] = parsed;
    for (const band of ageBands) {
      if (min <= band.maxAge && max >= band.minAge) {
        matched.add(band.id);
      }
    }
  }
  return Array.from(matched);
}
