/**
 * Shape of the app-chrome translation dictionary (navigation, buttons, labels,
 * aria text — not the topic content itself, which is translated separately;
 * see `src/content/translations/`).
 *
 * `en.ts` is the source of truth for this shape; `hi.ts` and `te.ts` must
 * implement it in full. Strings may contain `{param}` placeholders, filled
 * in via `interpolate()` — see each key's usage for which params it expects.
 */
export interface Dictionary {
  readonly common: {
    readonly skipToMainContent: string;
    readonly home: string;
    readonly backToHome: string;
    readonly printThisPage: string;
    /** Params: `{year}`. */
    readonly lastUpdated: string;
  };
  readonly header: {
    readonly searchLabel: string;
    readonly searchPlaceholder: string;
    readonly clearSearch: string;
    /** Followed by the query itself, wrapped in curly quotes by the caller. */
    readonly noResultsFor: string;
  };
  readonly themeToggle: {
    readonly switchToLight: string;
    readonly switchToDark: string;
  };
  readonly languageToggle: {
    readonly ariaLabel: string;
  };
  readonly footer: {
    /** Params: `{authored}`, `{planned}`. Preceded by the literal brand name "Kidsense — ". */
    readonly progress: string;
    readonly disclaimer: string;
    readonly termsOfUse: string;
    readonly privacy: string;
    readonly sourcesAndMethodology: string;
    readonly legalNavLabel: string;
  };
  readonly breadcrumb: {
    readonly ariaLabel: string;
  };
  readonly errorBoundary: {
    readonly title: string;
    readonly message: string;
  };
  readonly notFound: {
    readonly title: string;
    readonly message: string;
  };
  readonly home: {
    readonly title: string;
    readonly subtitle: string;
  };
  readonly ageBrowser: {
    readonly heading: string;
    readonly filterAriaLabel: string;
    /** Params: `{age}`. */
    readonly ageButton: string;
    /** Params: `{age}`. */
    readonly emptyState: string;
  };
  readonly progressBadge: {
    readonly comingSoon: string;
    /** Params: `{authored}`, `{planned}`. */
    readonly partial: string;
    /** Params: `{authored}`. */
    readonly complete: string;
  };
  readonly sectionPage: {
    readonly emptyState: string;
  };
  readonly topicPage: {
    /** Params: `{title}`. */
    readonly ageSwitcherAriaLabel: string;
    readonly generalVariant: string;
    readonly nextUp: string;
    /** Params: `{title}`. */
    readonly nextTopicAriaLabel: string;
  };
  readonly reasonGrid: {
    readonly heading: string;
  };
  readonly concernsWorksSplit: {
    readonly concernsHeading: string;
    readonly worksHeading: string;
    readonly routineAriaLabel: string;
  };
  readonly perspectivesPanel: {
    readonly heading: string;
    readonly teacher: string;
    readonly clinician: string;
    readonly teen: string;
  };
  readonly culturalLensPanel: {
    readonly heading: string;
    readonly intro: string;
  };
  readonly sourcesPanel: {
    /** Params: `{sources}`. Followed by the "Sources & Methodology" link and `suffix`. */
    readonly informedByPrefix: string;
    readonly suffix: string;
  };
  readonly meta: {
    readonly defaultDescription: string;
  };
  readonly translationNotice: {
    /** Shown on a topic/section whose active-locale translation is machine-drafted and pending human review. */
    readonly badge: string;
  };
  readonly disclaimerPage: {
    readonly title: string;
    readonly lede: string;
    readonly noRelationship: { readonly heading: string; readonly body: string };
    readonly everyChildDifferent: { readonly heading: string; readonly body: string };
    readonly consultProfessional: { readonly heading: string; readonly body: string };
    readonly crisis: { readonly heading: string; readonly body: string };
    readonly accuracy: {
      readonly heading: string;
      /** Text before the "Sources & Methodology" link. */
      readonly bodyPart1: string;
      /** Text between the "Sources & Methodology" link and the "Terms of Use" link. */
      readonly bodyPart2: string;
      /** Text after the "Terms of Use" link. */
      readonly bodyPart3: string;
    };
  };
  readonly termsPage: {
    readonly title: string;
    readonly lede: string;
    readonly whatThisSiteIs: { readonly heading: string; readonly body: string };
    readonly noWarranty: {
      readonly heading: string;
      /** Text before the "Disclaimer" link. */
      readonly bodyPart1: string;
      /** Text after the "Disclaimer" link. */
      readonly bodyPart2: string;
    };
    readonly limitationOfLiability: { readonly heading: string; readonly body: string };
    readonly intellectualProperty: {
      readonly heading: string;
      /** Text before the `LICENSE` filename. */
      readonly bodyPart1: string;
      /** Text between the `LICENSE` filename and the "Sources & Methodology" link. */
      readonly bodyPart2: string;
      /** Text between the "Sources & Methodology" link and the `CONTENT_LICENSE.md` filename. */
      readonly bodyPart3: string;
      /** Text after the `CONTENT_LICENSE.md` filename. */
      readonly bodyPart4: string;
    };
    readonly acceptableUse: {
      readonly heading: string;
      readonly item1: string;
      readonly item2: string;
      readonly item3: string;
    };
    readonly changesToTerms: { readonly heading: string; readonly body: string };
    readonly legalFormality: { readonly heading: string; readonly body: string };
  };
  readonly privacyPage: {
    readonly title: string;
    readonly lede: string;
    readonly noDataCollection: { readonly heading: string; readonly body: string };
    readonly noTracking: {
      readonly heading: string;
      /** Text before the `script-src 'self'` code snippet. */
      readonly bodyPart1: string;
      /** Text after the `script-src 'self'` code snippet. */
      readonly bodyPart2: string;
    };
    readonly selfHostedAssets: { readonly heading: string; readonly body: string };
    readonly localStorage: { readonly heading: string; readonly body: string };
    readonly childrensPrivacy: { readonly heading: string; readonly body: string };
    readonly hosting: { readonly heading: string; readonly body: string };
    readonly questions: { readonly heading: string; readonly body: string };
  };
  readonly sourcesPage: {
    readonly title: string;
    readonly lede: string;
    readonly evidenceInformed: { readonly heading: string; readonly body: string };
    readonly kindsOfSources: {
      readonly heading: string;
      readonly intro: string;
      readonly aap: string;
      readonly cdc: string;
      readonly who: string;
      readonly nhs: string;
      readonly apa: string;
      readonly zeroToThree: string;
      readonly unicef: string;
      readonly commonSenseMedia: string;
      readonly outro: string;
    };
    readonly culturalPerspectives: { readonly heading: string; readonly body: string };
    readonly originalWording: { readonly heading: string; readonly body: string };
    readonly seeAlso: {
      readonly heading: string;
      /** Link label for the disclaimer link in this section — fuller than `footer.disclaimer`. */
      readonly disclaimerLinkLabel: string;
    };
  };
}
