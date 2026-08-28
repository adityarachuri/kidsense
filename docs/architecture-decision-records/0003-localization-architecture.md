# ADR-0003: Localization architecture

## Status

Accepted

## Context

Kidsense is being extended to serve Indian-language readers, starting with Hindi and Telugu. Two
distinct kinds of text need translating, and they have very different risk profiles:

1. **App chrome** — navigation, buttons, labels, aria text. Short, generic, low-risk strings
   where an AI-drafted translation reviewed later is an acceptable starting point.
2. **Topic content** — the ~8,000 lines of evidence-informed developmental guidance across
   `src/content/section*.ts`. This is clinically-adjacent content; mistranslation risk is real,
   so translations must come from the content owner or a professional translator, not be
   auto-drafted.

The rollout covers full chrome translation plus AI-drafted content translation for all six
sections, every topic flagged `needsReview: true` pending a native-speaker/content-owner pass
before the flag is cleared. No library (react-i18next, next-intl) is used — the existing codebase already hand-rolls comparably-
scoped concerns (`src/utils/theme.ts`) rather than pulling in a framework, and the translation
surface here (one flat UI dictionary, one content-merge function) doesn't need a library's
pluralization/ICU machinery.

Locale selection is in-session only (a header dropdown, persisted to `localStorage`), not
reflected in the URL — no `/hi/...` path prefix. This means individual pages aren't
independently indexable per language; that's an explicit, revisitable tradeoff for the pilot in
exchange for not touching every route.

## Decision

**Two independent translation layers**, matching the two content types above:

- `src/i18n/` — the app-chrome layer. `translations/en.ts` defines the `Dictionary` shape (the
  source of truth); `hi.ts` and `te.ts` implement it in full. `LocaleProvider` (mounted in
  `main.tsx`, outside `<App>`) holds the active `Locale` in state, persists it via
  `src/utils/locale.ts` (mirroring `theme.ts`'s `localStorage` pattern), and reflects it onto
  `<html lang>` / `<html data-locale>`. Components read it via `useLocale()` → `t(selector,
params)`, where `selector` is a `(dict: Dictionary) => string` closure (not a string key) so a
  typo or a missing translation is a compile error, not a silent fallback.
- `src/content/translations/` — the topic-content layer. `TopicTranslation` /
  `SectionTranslation` are deeply-optional mirrors of the translatable fields on `Topic` /
  `Section`; every field, array entry, or whole topic left blank falls back to the English
  original field-by-field (`src/content/localize.ts`'s `localizeSections`), so a partial
  translation always renders a complete page rather than leaving gaps. A topic family with more
  than one age-band variant (e.g. `getting-dressed` / `getting-dressed@tween` in
  `section1-morning-routine.ts`) is keyed by `getTopicVariantKey()` (`id`, or `id@ageBandIds`
  when more than one variant shares an id) so each variant translates independently.

**Context default, not a required provider.** `LocaleContext`'s default value is a full English
`LocaleContextValue` (not `null`), so `useLocale()` never throws and every component renders
correctly in isolation — this matters because the existing test suite renders components
directly with React Testing Library, with no provider-wrapping convention to fit into. The real
app always mounts `LocaleProvider`; the default only matters for tests and Storybook-style
isolated rendering.

**Fonts.** Neither of the app's two self-hosted display faces (Baloo 2, Nunito — both Latin-only
subsets) has Devanagari or Telugu glyphs. Rather than rely on per-glyph fallback to whatever the
OS provides, `global.css` gained `--font-heading` / `--font-body` custom properties (replacing
~20 hardcoded `font-family` declarations across component CSS modules), overridden under
`:root[data-locale='hi']` / `[data-locale='te']` to self-hosted Noto Sans Devanagari / Noto Sans
Telugu (pulled from the `@fontsource` packages' `files/`, matching the project's "no third-party
font CDN requests at runtime" convention) — one face per script, used for both headings and body
text, since there's no decorative Indic equivalent to Baloo 2 in scope for this pilot.

## Consequences

- **Positive**: adding a third non-English language is a data change (`translations/<locale>.ts`
  - one dictionary), not a structural one. A partially-translated section or topic degrades
    gracefully to English per-field rather than blocking on 100% coverage.
- **Positive**: the chrome/content split lets AI-drafted UI strings ship immediately while
  clinical content translation stays gated on human review, without one blocking the other.
- **Negative**: search (`src/utils/search.ts`) matches against whatever locale's `title` /
  `keywords` are active; `keywords` itself is never translated (`TopicTranslation` has no
  `keywords` field), so a query typed in Hindi/Telugu only matches a translated `title` or the
  original English keywords.
- **Negative**: no per-locale URL means no per-language SEO indexing and no shareable
  language-specific links; revisit (likely a `/hi/...` path prefix) once content coverage
  justifies the routing/sitemap work.
- **Deferred**: every topic across all six sections carries an AI-drafted, `needsReview: true`
  translation in both `hi` and `te` — none has had a native-speaker/content-owner review pass yet.
  Clearing the flag is a per-topic edit to its `translations/{hi,te}/sectionN-*.ts` entry, not a
  structural change.
