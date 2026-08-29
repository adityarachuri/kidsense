# ADR-0004: Disability-inclusive content and accessibility hardening (pilot)

## Status

Accepted (pilot)

## Context

Across 6 sections and 77 topic families, Kidsense never mentions disability, IEP, 504, autism,
ADHD, or any related term by name. The closest existing theme is generic "sensory" language
scattered through a handful of reason cards, never tied to a diagnosis. The product vision was
extended to require the site to explicitly address children with physical disabilities, sensory
differences, developmental/cognitive differences, and behavioral/emotional challenges — including
awareness of the US IEP/Section 504 process.

This has to be reconciled with a hard, pre-existing constraint that shapes the entire site:
**Kidsense never diagnoses.** `docs/content-style-guide.md` states plainly: "Don't diagnose.
Every 'concerns' section routes to a professional — it never says 'this means your child has
X.'" `docs/vision-and-scope.md`'s non-goals are explicit: "the site never tells a specific
reader whether their specific child has a specific condition." Any new content in this area has
to satisfy that constraint by construction, not as an afterthought bolted onto diagnostic
framing.

Separately, `docs/requirements.md` NFR-7 (WCAG 2.1 AA) has stood at "In progress" for some time —
automated `jest-axe` coverage exists on only 5 of 31 test files (a deliberate scope, per
`docs/test-plan.md`), with concrete gaps: no `aria-live` regions anywhere in the app, and no
`prefers-contrast` support. Closing part of that gap is directly relevant to this feature, since
it serves users with sensory/physical disabilities using the site itself, not just content about
them.

Three approaches were considered for the content side:

1. **A single new section only** — fast, discoverable, but doesn't let existing topics
   (`meltdowns-change`, `brushing-teeth`, etc.) acknowledge that the same behavior can present
   differently for a child with a physical/sensory/cognitive/behavioral difference.
2. **Retrofit existing topics only** — reaches the widest existing content immediately, but has
   no home for content that doesn't attach to an existing topic (e.g. IEP/504 navigation).
3. **Both** — a new section for situations that don't map onto an existing topic, plus an
   optional field retrofitted onto existing topics where it adds a genuinely distinct angle.

## Decision

Adopt approach 3, piloted at a deliberately small scale before any wider rollout — mirroring how
ADR-0001 piloted the age-band model on one section before scaling.

**Content unit is a situation, not a diagnosis.** Every new topic and lens note describes a
functional situation ("a child who needs more time to filter background sound") rather than
naming or implying a specific diagnostic label. This is the mechanism by which the new content
satisfies the site's non-diagnostic constraint — the constraint isn't a caveat added to the
content, it's the content's organizing principle.

**Two extension points, both reusing the existing schema with zero structural change:**

- **A 7th section**, `id: 'every-child'` / "Understanding Every Child", for topics that don't
  attach to an existing article: `moving-through-the-world` (physical/mobility),
  `sensory-overwhelm` (sensory), `learning-a-different-path` (cognitive/learning),
  `big-reactions-need-more-support` (behavioral/emotional — distinct from the site's existing
  general-audience `meltdowns-change`/`big-feelings` topics, which explain typical reactions),
  and `understanding-iep-504`. Added exactly the way Section 6 was added: one content file, one
  entry in `sections.ts`, illustrations, `hi`/`te` translations — no other code changes, since
  `HomePage`, `AgeBrowser`, `SearchBar`, and `Footer`'s topic-count stat all derive generically
  from the live `sections` array.
- **`abilityLens`**, a new optional field on `Topic` (`src/types/content.ts`), structurally and
  semantically parallel to the existing `culturalLens` field: an array of `{context, note}`
  pairs noting how a behavior can present differently for a child with a physical, sensory,
  cognitive, or behavioral difference. Named `abilityLens`, not `accessibilityLens`, to avoid
  confusion with the site's own separate accessibility-hardening work below. Retrofitted onto 5
  existing topics in this pilot (`brushing-teeth`, `five-more-minutes`,
  `following-instructions`, `meltdowns-change`, `difficulty-calming-down`) as a proof of
  concept.

**The IEP/504 topic reuses the `Topic` schema with reframed field semantics, not a new type** —
the same choice ADR-0001 made for age variants (reuse the flat shape rather than invent a
wrapper type). `reasons` become reasons an IEP/504 might help; `concerns` become signs it may be
worth starting the conversation; `routine`'s 4 steps become the request → evaluate → review →
revisit procedural sequence. Because this content is inherently US-specific and
legal-adjacent — a materially different risk profile than a developmental-psychology
explanation — it carries an explicit "this is general information, not legal advice" clause
inline (in `explanation` and `professionalGuidance`, since body content is plain text with no
rendered links), and the global `/disclaimer` page gains a new subsection covering
legal-adjacent content specifically, since its existing subsections only cover
medical/diagnostic disclaimers.

**Rollout is bounded on purpose**: 5 of a 15 `plannedTopicCount` for the new section, 5 of 77
existing topics retrofitted with `abilityLens`. This lets the pattern — content template,
illustrations, i18n wiring, the new panel component — be reviewed end-to-end on a small,
reviewable slice before scaling either extension point further.

**Accessibility hardening in this same pilot is also bounded to 3 items**, chosen for being both
high-impact and low-risk to ship alongside the content work: an `aria-live="polite"` announcement
of search result counts (`SearchBar`), a `prefers-contrast: more` CSS custom-property variant
(zero component changes needed, since every component already reads color from custom
properties rather than hardcoding one), and `jest-axe` coverage on the two new/touched components
(`SearchBar`, the new `AbilityLensPanel`). No manual high-contrast or text-size toggle is added in
this pilot — contrast preference stays OS-driven only, matching how `prefers-reduced-motion`
already works today with no manual override.

## Consequences

- **Positive**: both extension points reuse existing, already-battle-tested mechanics
  (section registration, `culturalLens`'s panel/translation/localize pattern) — no new content
  infrastructure, no new translation-merge logic beyond one more mirrored field, no new routing.
- **Positive**: the "situation, not diagnosis" framing is enforced by the content template
  itself (same required fields, same never-diagnose editorial rule), not by a separate review
  checklist that could be skipped.
- **Negative — elevated risk**: this content category carries materially higher
  misrepresentation risk than a typical topic — describing how a behavior "can present
  differently" for a disabled or neurodivergent child risks being inaccurate, reductive, or
  unintentionally deficit-framed in a way a typical topic about, say, screen time does not.
  Recommend this pilot's content get a review pass from someone with lived or professional
  experience in the relevant community before wider publication — distinct from, and in addition
  to, the existing `needsReview` flag, which only signals machine-translation quality, not
  clinical or community accuracy.
- **Negative**: the IEP/504 topic is explicitly US-specific, the same tradeoff `culturalLens`
  already makes site-wide ("not exhaustive localization") — international readers get a
  US-only process explanation with no equivalent for their own country's accommodation systems.
- **Deferred, explicitly not dropped**: scaling Section 7 to its full 15 topics; scaling
  `abilityLens` beyond the 5 pilot topics; a full 31-file `jest-axe` rollout; a manual
  high-contrast or text-size toggle; the manual screen-reader AA sign-off. All remain tracked
  under NFR-7 and this ADR's pilot scope, to be revisited once the pilot is reviewed.
