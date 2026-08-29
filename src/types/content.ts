/**
 * Core content model for Kidsense.
 *
 * Every section (Morning Routine, Homework, Eating, ...) is an array of
 * `Topic` objects. Adding a new section is purely a data change: create a
 * `src/content/sectionN-*.ts` file exporting `Topic[]`, then register it in
 * `src/content/sections.ts`. No component or routing code needs to change.
 *
 * A `Topic` is age-agnostic by default — it applies wherever its `ageRanges`
 * say it does. Where a topic's guidance genuinely differs by developmental
 * stage (see `docs/architecture-decision-records/0001-age-band-content-model.md`),
 * author separate `Topic` objects that share an `id` but declare different,
 * non-overlapping `ageBandIds` — each becomes a distinct "variant" of the
 * same topic family, selectable via the age-band tabs on its page.
 */

/** Stable identifier for one of the five developmental age bands. See `src/content/ageBands.ts`. */
export type AgeBandId = 'early-childhood' | 'middle-childhood' | 'tween' | 'teen' | 'older-teen';

export interface AgeBand {
  readonly id: AgeBandId;
  readonly label: string;
  readonly minAge: number;
  readonly maxAge: number;
  /** The milestone age(s) from the product vision that this band represents. */
  readonly milestoneAges: readonly number[];
}

/** Short, audience-specific callouts shown alongside the core parent-facing article. */
export interface Perspectives {
  readonly teacher?: string;
  readonly clinician?: string;
  readonly teen?: string;
}

/** One entry in a topic's "Around the World" cultural-lens panel. */
export interface CulturalLensNote {
  readonly region: string;
  readonly note: string;
}

/** One entry in a topic's optional "how this can look different" ability-lens panel. */
export interface AbilityLensNote {
  /** Broad functional description of the difference, never a diagnostic label — e.g. "Sensory processing differences". */
  readonly context: string;
  readonly note: string;
}

export interface ReasonCard {
  /** Emoji or short glyph shown above the title. */
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface RoutineStep {
  readonly icon: string;
  readonly label: string;
}

export interface Topic {
  /** Stable, URL-safe identifier, unique within its section (e.g. "wake-up"). */
  readonly id: string;
  /** 1-based position within the section, used for display and ordering. */
  readonly topicNumber: number;
  /** Full document title, used for <title> and search indexing. */
  readonly title: string;
  /** Three-line decorative heading, rendered in three different accent colors. */
  readonly heading: {
    readonly lead: string;
    readonly emphasis: string;
    readonly trailing: string;
  };
  /** Short first-person quote shown in a speech bubble near the illustration. */
  readonly quote: string;
  /** Age ranges this topic applies to, e.g. ["3–5 years", "5–8 years"]. */
  readonly ageRanges: readonly string[];
  /** Id of the illustration component registered in the illustration registry. */
  readonly illustrationId: string;
  /** One-line reassurance shown in the banner directly under the header. */
  readonly reassurance: string;
  /** Longer explanatory sentence shown in the dashed callout box. */
  readonly explanation: string;
  /** Exactly 8 cards explaining common developmental reasons for the behavior. */
  readonly reasons: readonly ReasonCard[];
  /** Bullet points describing when the behavior may warrant closer attention. */
  readonly concerns: readonly string[];
  /** Single sentence recommending professional consultation when warranted. */
  readonly professionalGuidance: string;
  /** Bullet points describing evidence-informed strategies that help. */
  readonly strategies: readonly string[];
  /** Exactly 4 steps forming a simple, repeatable routine. */
  readonly routine: readonly RoutineStep[];
  /** Closing insight connecting this behavior to broader developmental patterns. */
  readonly insight: string;
  /** Keywords beyond the title that should surface this topic in search. */
  readonly keywords?: readonly string[];
  /**
   * Explicit age band(s) this variant targets. Optional — when omitted, the
   * applicable bands are inferred from `ageRanges` (see `src/content/ageBands.ts`).
   * Only set this explicitly when a topic family has more than one authored
   * variant and each needs to claim a distinct, non-overlapping set of bands.
   */
  readonly ageBandIds?: readonly AgeBandId[];
  /** Short callouts for teachers, clinicians, and teens. Only populate where it adds a genuinely distinct angle. */
  readonly perspectives?: Perspectives;
  /** ~5-6 notes on how different global/cultural contexts tend to view this behavior. */
  readonly culturalLens?: readonly CulturalLensNote[];
  /** ~3-5 notes on how this behavior can present differently for a child with a physical, sensory, cognitive, or behavioral difference — "different, not wrong," never diagnostic. */
  readonly abilityLens?: readonly AbilityLensNote[];
  /** Named authoritative organizations whose publicly available guidance informed this variant. */
  readonly sources?: readonly string[];
  /**
   * Set by the localization layer (`src/content/localize.ts`) when the active locale's
   * translation for this topic is machine-drafted and still pending human review. Never set on
   * the English source data itself.
   */
  readonly needsReview?: boolean;
}

export interface Section {
  readonly id: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly description: string;
  readonly icon: string;
  readonly topics: readonly Topic[];
  /** Total topics planned for this section, even if not all are authored yet. */
  readonly plannedTopicCount: number;
  /** Set by the localization layer when this section's translated title/shortTitle/description is machine-drafted and pending human review. */
  readonly needsReview?: boolean;
}
