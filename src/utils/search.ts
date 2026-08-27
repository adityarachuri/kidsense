import type { Section, Topic } from '../types/content';

export interface SearchResult {
  readonly section: Section;
  readonly topic: Topic;
  /** Lower is more relevant. */
  readonly score: number;
}

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

/**
 * Scores a single topic against a normalized query.
 * Returns `null` when the topic does not match at all.
 *
 * Matching is intentionally simple and dependency-free (no fuzzy-matching
 * library) since the corpus is small and predictability matters more than
 * approximate matching for a reference handbook.
 */
function scoreTopic(topic: Topic, normalizedQuery: string): number | null {
  const title = normalize(topic.title);
  const heading = normalize(
    `${topic.heading.lead} ${topic.heading.emphasis} ${topic.heading.trailing}`,
  );
  const keywords = (topic.keywords ?? []).map(normalize);

  if (title === normalizedQuery) return 0;
  if (title.startsWith(normalizedQuery)) return 1;
  if (title.includes(normalizedQuery)) return 2;
  if (keywords.some((k) => k === normalizedQuery)) return 3;
  if (keywords.some((k) => k.includes(normalizedQuery))) return 4;
  if (heading.includes(normalizedQuery)) return 5;
  return null;
}

/**
 * Searches across every topic in every section, returning matches ordered
 * by relevance (best match first). An empty or whitespace-only query
 * returns an empty result set rather than the entire corpus.
 */
export function searchTopics(sections: readonly Section[], query: string): SearchResult[] {
  const normalizedQuery = normalize(query);
  if (normalizedQuery.length === 0) {
    return [];
  }

  const results: SearchResult[] = [];
  for (const section of sections) {
    for (const topic of section.topics) {
      const score = scoreTopic(topic, normalizedQuery);
      if (score !== null) {
        results.push({ section, topic, score });
      }
    }
  }

  return results.sort((a, b) => a.score - b.score);
}
