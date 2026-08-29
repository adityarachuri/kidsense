import type { Topic } from '../../types/content';

export interface PerspectivesTranslation {
  readonly teacher?: string;
  readonly clinician?: string;
  readonly teen?: string;
}

/** Loosely-typed positional overlay: index `i` translates `reasons[i]`, `routine[i]`, etc. of the English source. */
export interface TopicTranslation {
  readonly title?: string;
  readonly heading?: {
    readonly lead?: string;
    readonly emphasis?: string;
    readonly trailing?: string;
  };
  readonly quote?: string;
  /** Same length and order as the English `ageRanges` array when provided (e.g. "3–5 years" → "3–5 वर्ष"). */
  readonly ageRanges?: readonly string[];
  readonly reassurance?: string;
  readonly explanation?: string;
  /** Same length and order as the English `reasons` array when provided. */
  readonly reasons?: readonly { readonly title?: string; readonly description?: string }[];
  /** Same length and order as the English `concerns` array when provided. */
  readonly concerns?: readonly string[];
  readonly professionalGuidance?: string;
  /** Same length and order as the English `strategies` array when provided. */
  readonly strategies?: readonly string[];
  /** Same length and order as the English `routine` array when provided. */
  readonly routine?: readonly { readonly label?: string }[];
  readonly insight?: string;
  readonly perspectives?: PerspectivesTranslation;
  /** Same length and order as the English `culturalLens` array when provided. */
  readonly culturalLens?: readonly { readonly region?: string; readonly note?: string }[];
  /** Same length and order as the English `abilityLens` array when provided. */
  readonly abilityLens?: readonly { readonly context?: string; readonly note?: string }[];
  /** Set true for a machine-drafted translation pending human review; renders a small in-app notice. */
  readonly needsReview?: boolean;
}

export interface SectionTranslation {
  readonly title?: string;
  readonly shortTitle?: string;
  readonly description?: string;
  /** Set true for a machine-drafted translation pending human review; renders a small in-app notice. */
  readonly needsReview?: boolean;
}

/** Keyed by `getTopicVariantKey()` — a topic's `id`, or `id@ageBandIds` for a family with more than one age-band variant. */
export type SectionContentTranslations = Readonly<Record<string, TopicTranslation>>;

export interface LocaleContentTranslations {
  /** Keyed by section id. Only sections with authored translations need an entry. */
  readonly sections: Readonly<Record<string, SectionTranslation>>;
  /** Keyed by section id. Only sections with authored translations need an entry. */
  readonly topicsBySection: Readonly<Record<string, SectionContentTranslations>>;
}

/**
 * The key a topic's translation is stored under. Most topic families have a single, general
 * variant and are keyed by `id` alone; a family with age-band-specific variants (e.g. the two
 * "getting-dressed" articles in section1-morning-routine.ts) needs one translation entry per
 * variant, so those are keyed by `id@ageBandIds` instead.
 */
export function getTopicVariantKey(topic: Topic): string {
  return topic.ageBandIds && topic.ageBandIds.length > 0
    ? `${topic.id}@${topic.ageBandIds.join(',')}`
    : topic.id;
}
