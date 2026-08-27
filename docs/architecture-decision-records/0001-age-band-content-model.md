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

Adopt approach 2. Introduce three types in `src/types/content.ts`:

- `AgeBand` — five fixed bands (Early Childhood ~3–5, Middle Childhood ~6–9, Tween ~10–12, Teen
  ~13–15, Older Teen ~16–18), covering all six milestone ages.
- `TopicFamily` — the stable, cross-age concept (id, title, illustration, keywords).
- `TopicVariant` — the age-band-scoped article body (heading, quote, reasons, concerns,
  strategies, routine, insight, plus `perspectives`, `culturalLens`, and `sources`).

Not every topic family needs a variant for every band — only bands where the guidance genuinely
differs get authored. A topic family's canonical URL (`/section/:sectionId/:topicId`) shows an
age-band picker; visiting `/section/:sectionId/:topicId/:ageBandId` deep-links to one variant
directly.

## Consequences

- **Positive**: content can be genuinely age-appropriate rather than a compromise across a wide
  range; teens get material written for them, not adapted from parent-facing text; deep links
  are shareable and printable per age.
- **Negative**: content volume increases substantially (an estimated ~2–3× across the existing
  75 topic families) and must be authored incrementally, section by section (see the project
  roadmap's Phase 2/3 split — pilot one section before scaling).
- **Mitigated by**: the existing 75 articles migrate as-is into the new shape as each family's
  first authored variant, so no content is lost or blocked while the rest is authored.
