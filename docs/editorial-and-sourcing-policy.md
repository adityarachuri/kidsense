# Editorial & Sourcing Policy

This policy governs how content is researched, attributed, and corrected. It's the basis for
the in-app `/sources` page and the `sources` field on `TopicVariant`.

## What "evidence-informed" means in this project

Kidsense is a **compilation**, not a systematic literature review or a peer-reviewed
publication. Content reflects general, widely published professional consensus about typical
child and adolescent development — the kind of explanation commonly given by a pediatrician,
school counselor, or child psychologist. It is not:

- A substitute for reading primary research.
- A claim that every sentence traces to a specific study.
- A clinical or diagnostic resource (see `/disclaimer`).

## Research method

When authoring or revising a topic:

1. Identify 2–4 authoritative organizations most relevant to the topic (see the list on
   `/sources` — AAP, CDC, WHO, NHS, APA, Zero to Three, UNICEF, Common Sense Media for
   digital-era topics, and similar bodies).
2. Use `WebSearch`/`WebFetch` to review their current, publicly available guidance on the
   behavior before writing — grounding the article in what these organizations actually say,
   not assumption.
3. Write the article in **original wording** that synthesizes this guidance for the site's
   voice (see `content-style-guide.md`). Never copy sentences verbatim from a source, and never
   fabricate a specific citation, quote, or URL that wasn't actually reviewed.
4. Record the organization names (not URLs or specific page citations) in the `sources` field
   on the `TopicVariant`.

## Handling disagreement or limited evidence

Where authoritative sources disagree or evidence is genuinely limited, say so honestly rather
than picking one view and presenting it as settled. The "when should parents be concerned"
section exists specifically to route ambiguous judgment calls to a qualified professional
rather than resolve them in the article.

## Cultural sourcing

Cultural-lens content should reflect genuinely observed variation in parenting norms and
professional guidance across regions, not personal assumption. Where possible, ground a cultural
note in cross-cultural developmental-psychology literature (e.g. research contrasting
collectivist and individualist parenting norms) rather than a single anecdote.

## Ability-lens sourcing

`abilityLens` entries and Section 7 topics (see ADR-0004) follow the same research method as
cultural sourcing: ground notes in occupational-therapy, special-education, and developmental
literature rather than an uncited generalization, and identify organizations genuinely,
currently relevant to the specific topic rather than defaulting to the same handful every time —
confirm relevance via `WebSearch` before writing, same as any other topic.

For the IEP/504 topic specifically, research U.S.-specific sourcing targets: the U.S. Department
of Education (including its Office for Civil Rights Section 504 guidance), the Center for Parent
Information and Resources, and Understood.org. Combine the two registers these sources
naturally split into — precise regulatory language (what IDEA/Section 504 require) from
government sources, and accessible step-by-step process guidance from parent-facing
organizations — rather than writing the whole topic in either register alone.

A note on language: person-first ("child with autism") versus identity-first ("autistic child")
phrasing is genuinely, currently contested among advocacy and clinical organizations, with no
single consensus. Default to functional, non-diagnostic language throughout (see
`content-style-guide.md`'s "Writing the ability lens"), which mostly sidesteps the question; where
a specific community's own stated preference is directly relevant, defer to that community's
own language rather than picking a side.

## Corrections process

Anyone can flag a factual, sourcing, or attribution concern by opening an issue in the
repository describing:

- The topic and (if applicable) age-band variant affected.
- What seems inaccurate, outdated, or insufficiently attributed.
- A suggested correction or source, if available.

Corrections are reviewed and, where warranted, applied promptly; `CHANGELOG.md` records
substantive content corrections.

## Relationship to licensing

Because content is licensed under `CONTENT_LICENSE.md` (CC BY-NC-SA 4.0), this policy also
protects downstream reusers: they can trust that what they're adapting is an original synthesis,
not a redistribution of someone else's copyrighted material.
