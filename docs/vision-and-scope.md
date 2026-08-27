# Vision & Scope

## Vision

Kidsense is a free, static, illustrated reference that explains _why_
children and teenagers behave the way they do at different ages, and _what actually helps_ —
written for parents, teachers, psychologists, pediatricians, and teens themselves, grounded in
publicly available developmental-psychology and pediatric guidance, and mindful that "normal"
looks different across cultures.

## Problem statement

Parenting and child-development information online is fragmented: forums lack authority,
clinical resources are often too dense or narrow for a lay parent, and almost nothing is written
to be equally useful to a parent, a classroom teacher, a clinician doing a quick refresher, and
a teenager trying to understand their own reaction. Very little of it acknowledges that
guidance developed in one cultural context doesn't automatically transfer to another.

## Target audiences

| Audience                      | Primary need                                                      |
| ----------------------------- | ----------------------------------------------------------------- |
| Parents / caregivers          | Understand a behavior, know when it's normal, know what helps     |
| Teachers                      | Classroom-relevant framing of the same behavior                   |
| Psychologists / pediatricians | A quick, well-organized refresher and referral-criteria cues      |
| Teens                         | A version that speaks to them directly about their own experience |

## Non-goals

- **Not a diagnostic tool.** The site never tells a specific reader whether their specific child
  has a specific condition — see `/disclaimer`.
- **Not a data platform.** No accounts, no data collection, no backend, no database (see
  `/privacy`). Every deployment is a static site.
- **Not a systematic literature review.** Content is a compilation of mainstream, publicly
  available guidance (see `/sources`), not original research or a clinical publication.
- **Not exhaustively localized.** Cultural perspective panels broaden the lens with a handful of
  representative viewpoints; they are not a substitute for locally specific guidance.

## Success criteria

- A reader in any of the four target audiences can find a relevant topic, understand it in under
  two minutes, and know what to do next (including when to seek professional help).
- The site is fully usable on a phone, is accessible to screen-reader and keyboard users, and
  works without JavaScript-dependent tracking of any kind.
- Every quality gate (`npm run verify`) passes before any change reaches production; every
  deployment is auditable through the CI/CD pipeline.

## Guiding constraints

- **Static only.** No server-rendered logic, no database, no runtime data access — see
  `docs/architecture-decision-records/` for the decisions that follow from this.
- **Simple to use.** New capabilities (age bands, perspectives, cultural lens) must not make the
  core reading experience more complicated than it is today.
- **Transparent.** Sourcing, licensing, and limitations are stated plainly, not buried in
  boilerplate.
