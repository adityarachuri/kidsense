# Content Style Guide

This guide keeps 75+ topics (and growing) feeling like one consistent reference rather than a
patchwork of one-off pages. It applies to every `TopicVariant` authored under
`src/content/`.

## Voice and tone

- **Reassuring first, informative second.** Every topic opens by normalizing the behavior
  before explaining it — parents and teachers arrive worried; the first job of the page is to
  lower that temperature honestly, not falsely.
- **Plain language.** Write for a reader with no psychology background. Avoid jargon; where a
  clinical term is necessary, explain it in the same sentence.
- **Specific, not generic.** "Kids test limits to see if they're consistent" beats "children
  exhibit boundary-testing behavior." Every `reasons` entry should name a real mechanism, not a
  restatement of the topic title.
- **Never alarmist.** Concerns sections describe genuine warning signs plainly, without
  catastrophizing normal variation.

## Required structure (per `TopicVariant`)

| Field                  | Rule                                                                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heading`              | Three parts (lead / emphasis / trailing) forming one natural sentence when read together                                                                                              |
| `quote`                | A short, first-person line a child in this age band might plausibly say                                                                                                               |
| `reassurance`          | One sentence, starts with "It's common —"                                                                                                                                             |
| `explanation`          | One sentence connecting the behavior to its real underlying cause                                                                                                                     |
| `reasons`              | Exactly 8 cards, each a distinct mechanism (developmental, temperamental, situational, environmental) — never 8 rewordings of the same idea                                           |
| `concerns`             | 4–6 concrete, observable warning signs — not vague ("seems off")                                                                                                                      |
| `professionalGuidance` | One sentence, names which kind of professional and under what condition                                                                                                               |
| `strategies`           | 3–5 concrete, actionable strategies a reader can try today                                                                                                                            |
| `routine`              | Exactly 4 steps, each a short icon + label pair                                                                                                                                       |
| `insight`              | Connects this topic to a broader pattern, helping a reader generalize                                                                                                                 |
| `perspectives`         | Optional per audience (teacher / clinician / teen); only populate where it adds a genuinely distinct angle, not a reworded parent paragraph                                           |
| `culturalLens`         | 5–6 entries max, framed as "different, not wrong," never a stereotype of an entire culture                                                                                            |
| `abilityLens`          | 3–5 entries max, optional — how the behavior can present differently for a child with a physical, sensory, cognitive, or behavioral difference. See "Writing the ability lens" below. |
| `sources`              | Organization names only (see `editorial-and-sourcing-policy.md`) — never a fabricated URL or direct quote                                                                             |

## Writing the "Around the World" cultural lens

- Frame differences as _variation in norms_, not a ranking of better/worse parenting.
- Attribute a pattern to a broad cultural orientation (e.g. "collectivist family structures") rather
  than a specific country, unless the guidance is genuinely country-specific.
- Never imply an entire culture is monolithic — use "often" and "tends to," not "always."

## Writing the ability lens

- Describe the behavior, never a diagnosis. Use functional language ("a child who needs more
  time to filter background sound"), never a diagnostic label ("a child with autism").
- Frame it as how the same behavior can present differently, not as an explanation of why a
  disability or difference itself exists — the field is about the behavior in front of the
  reader, not about justifying or explaining the underlying difference.
- Same non-diagnostic rule as everywhere else applies: this never tells a reader their specific
  child has a specific condition.

## Writing situational and procedural topics (Section 7)

Section 7 topics describe a **situation**, never a diagnosis — see ADR-0004. Two field-semantic
adjustments apply there, and nowhere else:

- For a topic about a physical, sensory, or cognitive difference, `reasons` describes why the
  day-to-day _experience_ looks different (equipment, environment, pacing), not why the
  underlying difference exists — the latter risks deficit framing and isn't this site's job.
- For the IEP/504 topic specifically, `reasons` describes reasons the process might help and
  `concerns` describes signs it may be worth starting the conversation — a deliberate reframing
  for procedural content, carrying an explicit "general information, not legal advice" clause in
  `explanation` and `professionalGuidance` per `docs/editorial-and-sourcing-policy.md`.

## Illustrations

- Every topic needs an `illustrationId` resolving in `src/assets/illustrations/registry.tsx`.
- Reuse an existing illustration across age-band variants of the same topic family unless the
  visual difference between ages is itself meaningful (e.g. a much younger vs. older child).
- Follow the existing visual grammar: `viewBox="0 0 400 230"`, the shared color palette in
  `src/styles/global.css`, and the face/hair/body construction used throughout
  `registry.tsx`.

## What not to do

- Don't diagnose. Every "concerns" section routes to a professional — it never says "this means
  your child has X."
- Don't fabricate a citation, quote, or URL. See `editorial-and-sourcing-policy.md`.
- Don't pad `reasons` or `strategies` to hit a count with filler — quality over exact symmetry
  beyond the required 8 reasons / 4 routine steps.
