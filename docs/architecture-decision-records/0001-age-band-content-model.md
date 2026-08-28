# ADR-0001: Age-band content model

## Status

Accepted

## Context

The original content model has one article (`Topic`) per behavior, tagged with free-form age
ranges (e.g. `"3–5 years"`). The revised vision requires Kidsense to explicitly target six
milestone ages (5, 8, 10, 12, 15, 18) and serve teens directly, not just parents of teens. Two
approaches were considered:

1. **Tag existing topics** against defined age bands without changing the article content
   itself — fast, but guidance for a 5-year-old and a 15-year-old genuinely differs for many
   topics (e.g. anxiety, screen time, social pressure), so a single article stretched across
   that range would be shallow at both ends.
2. **Fork content per age band** — author distinct article variants wherever the behavior or
   guidance genuinely differs across bands, while keeping one stable "topic family" identity
   (URL, illustration, search entry) across its variants.

## Decision

Adopt approach 2, with one deviation from the original proposal below. Introduce in
`src/types/content.ts`:

- `AgeBand` — five fixed bands (Early Childhood ~3–5, Middle Childhood ~6–9, Tween ~10–12, Teen
  ~13–15, Older Teen ~16–18), covering all six milestone ages.

**Deviation from the original `TopicFamily`/`TopicVariant` split**: rather than introducing
nested types, a topic family is simply multiple `Topic` objects sharing an `id` within a
section's flat `topics` array, distinguished by an optional `ageBandIds` field. A family's
"general" variant (applies broadly) omits `ageBandIds`; a band-specific variant lists the one or
more bands its rewritten content targets. `src/content/sections.ts` exposes
`getTopicVariants(section, topicId)` and `selectTopicVariant(variants, ageBandId)` to resolve
which one to render. This keeps every existing consumer (routing, search, `AgeBrowser`, content
files) working against the same flat `Topic[]` shape they already used, so migrating the
existing 75 topics required zero data changes — each is already a valid single-variant family.
The tradeoff: "family" identity (title, illustration, topicNumber) isn't enforced by the type
system the way a dedicated `TopicFamily` wrapper would; it's enforced instead by a content-
integrity test (`sections.test.ts`) asserting `topicNumber`/`illustrationId` match across every
variant sharing an id, and that no two variants in a family claim overlapping bands.

Not every topic family needs a variant for every band — only bands where the guidance genuinely
differs get authored. A topic family's canonical URL (`/section/:sectionId/:topicId`) renders
the general variant directly (not a picker page, to keep the core reading experience as simple
as today) with an age-band switcher shown only when more than one variant exists; visiting
`/section/:sectionId/:topicId/:ageBandId` deep-links to one variant directly, falling back to
the general variant for an unrecognized or unclaimed band rather than 404ing.

## Consequences

- **Positive**: content can be genuinely age-appropriate rather than a compromise across a wide
  range; teens get material written for them, not adapted from parent-facing text; deep links
  are shareable and printable per age.
- **Negative**: content volume increases substantially (an estimated ~2–3× across the existing
  75 topic families) and must be authored incrementally, section by section (see the project
  roadmap's Phase 2/3 split — pilot one section before scaling).
- **Mitigated by**: the existing 75 articles migrate as-is into the new shape as each family's
  first authored variant, so no content is lost or blocked while the rest is authored.
