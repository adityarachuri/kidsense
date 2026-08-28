import type { Dictionary } from './types';

export const en: Dictionary = {
  common: {
    skipToMainContent: 'Skip to main content',
    home: 'Home',
    backToHome: 'Back to home',
    printThisPage: 'Print this page',
    lastUpdated: 'Last updated: {year}',
  },
  header: {
    searchLabel: 'Search topics',
    searchPlaceholder: 'Search topics (e.g. bedtime, homework)',
    clearSearch: 'Clear search',
    noResultsFor: 'No topics found for',
  },
  themeToggle: {
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
  },
  languageToggle: {
    ariaLabel: 'Choose language',
  },
  footer: {
    progress:
      '{authored} of {planned} topics published. Evidence-informed, not a substitute for professional advice.',
    disclaimer: 'Disclaimer',
    termsOfUse: 'Terms of Use',
    privacy: 'Privacy',
    sourcesAndMethodology: 'Sources & Methodology',
    legalNavLabel: 'Legal',
  },
  breadcrumb: {
    ariaLabel: 'Breadcrumb',
  },
  errorBoundary: {
    title: 'Something went wrong',
    message: 'This page hit an unexpected error. Your data is safe — try heading back home.',
  },
  notFound: {
    title: 'Page not found',
    message: "We couldn't find that page. It may have been renamed or isn't published yet.",
  },
  home: {
    title: 'Why kids do what they do',
    subtitle:
      'An evidence-informed, illustrated reference for everyday child behavior — organized by the moments that come up again and again, from morning routines to big emotions.',
  },
  ageBrowser: {
    heading: 'Browse by Age',
    filterAriaLabel: 'Filter topics by age',
    ageButton: 'Age {age}',
    emptyState: 'No topics are tagged for age {age} yet — this age band is still being authored.',
  },
  progressBadge: {
    comingSoon: 'Coming soon',
    partial: '{authored} of {planned} topics',
    complete: '{authored} topics',
  },
  sectionPage: {
    emptyState: 'This section is planned but not yet published. Check back soon.',
  },
  topicPage: {
    ageSwitcherAriaLabel: 'View "{title}" for a specific age',
    generalVariant: 'General',
    nextUp: 'Next up',
    nextTopicAriaLabel: 'Go to next topic: {title}',
  },
  reasonGrid: {
    heading: 'Common Reasons',
  },
  concernsWorksSplit: {
    concernsHeading: 'When Should Parents Be Concerned?',
    worksHeading: 'What Usually Works Better?',
    routineAriaLabel: 'Suggested routine, in order',
  },
  perspectivesPanel: {
    heading: 'Perspectives',
    teacher: 'For Teachers',
    clinician: 'For Clinicians',
    teen: 'For Teens',
  },
  culturalLensPanel: {
    heading: 'Around the World',
    intro: 'Different, not wrong — how these behaviors are often viewed varies across cultures.',
  },
  sourcesPanel: {
    informedByPrefix: 'Informed by publicly available guidance from: {sources}. See',
    suffix: 'for how Kidsense is compiled.',
  },
  meta: {
    defaultDescription:
      'Kidsense — an evidence-informed, illustrated reference explaining everyday child behavior and what helps.',
  },
  translationNotice: {
    badge: 'Machine-translated draft — not yet reviewed by a human',
  },
  disclaimerPage: {
    title: 'Medical & Psychological Disclaimer',
    lede: 'Kidsense is an educational reference. It is not medical, psychological, or psychiatric advice, and it does not replace consultation with a qualified professional who knows your child.',
    noRelationship: {
      heading: 'No professional relationship',
      body: 'Reading this site does not create a doctor–patient, therapist–client, or teacher–student relationship between you and the authors of Kidsense. The content is general in nature and is not tailored to your child’s specific history, temperament, culture, or circumstances.',
    },
    everyChildDifferent: {
      heading: 'Every child is different',
      body: 'Child development varies widely between individuals, and what is typical at one age or in one context may not apply to your child. Each topic in Kidsense includes a “When should parents be concerned?” section precisely because ordinary developmental variation and a genuine concern can look similar from the outside. When in doubt, a qualified professional—not this site—is best placed to tell the difference.',
    },
    consultProfessional: {
      heading: 'Consult a qualified professional',
      body: 'If you have any concern about a child’s development, behavior, emotional wellbeing, or safety, consult a pediatrician, psychologist, psychiatrist, licensed therapist, school counselor, or other qualified professional. Do not delay seeking professional care because of something you read here.',
    },
    crisis: {
      heading: 'In a crisis, act immediately',
      body: 'If a child is in immediate danger, is expressing thoughts of self-harm or suicide, or you believe there is any risk to their safety or the safety of others, contact your local emergency services number immediately, or a crisis helpline in your country. Availability, names, and numbers of crisis services vary by country and region — Kidsense does not list them because it is not a substitute for locally appropriate emergency guidance.',
    },
    accuracy: {
      heading: 'Accuracy and currency',
      bodyPart1: 'Kidsense is compiled and maintained on a best-effort basis (see',
      bodyPart2:
        '). Developmental science evolves, and an individual article may not reflect the most current research at the time you read it. See the',
      bodyPart3: 'for the full limitation of liability.',
    },
  },
  termsPage: {
    title: 'Terms of Use',
    lede: 'This is a free, non-commercial educational reference. By using this site, you agree to the terms below.',
    whatThisSiteIs: {
      heading: 'What this site is',
      body: 'Kidsense is a static, publicly accessible reference site explaining common child and adolescent development topics for parents, teachers, psychologists, pediatricians, and teens. It has no user accounts, no backend service, and does not process payments or personal data submissions of any kind.',
    },
    noWarranty: {
      heading: 'No warranty',
      bodyPart1:
        'Content is provided “as is” and “as available,” without warranty of any kind, express or implied, including without limitation warranties of accuracy, completeness, fitness for a particular purpose, or non-infringement. See the',
      bodyPart2: 'for the specific medical and psychological limitations of this content.',
    },
    limitationOfLiability: {
      heading: 'Limitation of liability',
      body: 'To the fullest extent permitted by applicable law, the authors and contributors of Kidsense are not liable for any direct, indirect, incidental, or consequential damages arising from your use of, or reliance on, this site’s content.',
    },
    intellectualProperty: {
      heading: 'Intellectual property',
      bodyPart1:
        'The site’s software (source code, components, build tooling) is licensed under the terms in its',
      bodyPart2:
        'file. The written content and illustrations are an original compilation described in',
      bodyPart3: 'and licensed under the terms in',
      bodyPart4:
        'in the project repository. Both licenses permit free personal, educational, and non-commercial reuse with attribution; see those files for exact terms.',
    },
    acceptableUse: {
      heading: 'Acceptable use',
      item1: 'Do not misrepresent this content as individualized professional advice.',
      item2:
        'Do not remove attribution when republishing or adapting content under the content license.',
      item3:
        'Do not use automated means to disrupt, overload, or scrape this site at a rate that degrades it for other users.',
    },
    changesToTerms: {
      heading: 'Changes to these terms',
      body: 'These terms may be updated as the site evolves. Continued use of the site after a change constitutes acceptance of the revised terms. Material changes will be reflected in the project’s changelog.',
    },
    legalFormality: {
      heading: 'A note on legal formality',
      body: 'This is an independent educational project, not a registered legal entity. These terms are written in good faith to be clear and fair, but they have not been drafted or reviewed by a lawyer. If this site is ever used commercially or at scale, these terms should be reviewed by qualified legal counsel before that happens.',
    },
  },
  privacyPage: {
    title: 'Privacy Policy',
    lede: 'The short version: this site does not collect, store, or transmit any personal data, from anyone, of any age.',
    noDataCollection: {
      heading: 'No data collection',
      body: 'This is a static site with no backend server and no database. There are no user accounts, no sign-ups, no forms that submit data anywhere, no comments sections, and no way to enter personal information into the site at all.',
    },
    noTracking: {
      heading: 'No tracking, no analytics, no ads',
      bodyPart1:
        'The site loads no third-party analytics scripts, advertising networks, or tracking pixels. Its Content Security Policy restricts scripts to the site’s own origin (',
      bodyPart2:
        '), so no third-party script can run even accidentally. There are no cookies set by this site.',
    },
    selfHostedAssets: {
      heading: 'Fonts and assets are self-hosted',
      body: 'Typefaces and illustrations are bundled with the site and served from the same origin, rather than fetched from a third-party font or asset CDN at runtime — so simply reading this site does not send a request to any third party.',
    },
    localStorage: {
      heading: 'Browser-local storage',
      body: 'If a future version of this site uses your browser’s local storage for a convenience feature (such as remembering a preferred theme), that data stays on your device, is never transmitted anywhere, and is never visible to the site’s authors. This policy will be updated to describe any such feature before it ships.',
    },
    childrensPrivacy: {
      heading: 'Children’s privacy',
      body: 'Because Kidsense is also written for teen readers, we want to be explicit: this site collects no personal information from visitors of any age, including children and teenagers. There is nothing to opt out of, because nothing is collected in the first place.',
    },
    hosting: {
      heading: 'Hosting',
      body: 'This site is hosted as a static web app on Microsoft Azure. Azure’s hosting infrastructure may log standard, aggregate web server information (such as request counts) for operating the service, independent of and not controlled by this project’s own code.',
    },
    questions: {
      heading: 'Questions or corrections',
      body: 'If you have a question about this policy, please open an issue in this project’s source repository.',
    },
  },
  sourcesPage: {
    title: 'Sources & Methodology',
    lede: 'Every article on this site is an original compilation, written in our own words, that draws on publicly available, mainstream developmental-psychology and pediatric guidance. Nothing here is copied verbatim from any source.',
    evidenceInformed: {
      heading: 'What “evidence-informed” means here',
      body: 'Kidsense is a compilation, not a systematic literature review or a peer-reviewed publication. Each topic reflects general, widely published professional consensus about typical child and adolescent development — the kind of explanation you would commonly hear from a pediatrician, school counselor, or child psychologist. Where the field genuinely disagrees or evidence is limited, that uncertainty is not hidden; the “when should parents be concerned” sections exist specifically to route judgment calls to a qualified professional rather than settle them here.',
    },
    kindsOfSources: {
      heading: 'The kinds of sources Kidsense draws on',
      intro:
        'Content is informed by the type of publicly available guidance published by organizations such as:',
      aap: 'The American Academy of Pediatrics (AAP)',
      cdc: 'The U.S. Centers for Disease Control and Prevention (CDC), including its “Learn the Signs. Act Early.” developmental milestones program',
      who: 'The World Health Organization (WHO)',
      nhs: 'The UK National Health Service (NHS)',
      apa: 'The American Psychological Association (APA)',
      zeroToThree: 'Zero to Three',
      unicef: 'UNICEF',
      commonSenseMedia: 'Common Sense Media (for digital-era and media-related topics)',
      outro:
        'As per-article source attribution is rolled out (see the project roadmap), individual articles will list the specific organizations most relevant to that topic. Until an article shows its own source list, treat it as reflecting this general body of publicly available guidance rather than a specific citation.',
    },
    culturalPerspectives: {
      heading: 'Cultural perspectives',
      body: 'Most published child-development guidance originates from a relatively narrow set of countries and cultural contexts. Where a topic includes an “Around the World” panel, it is intended to broaden that lens — noting that other cultural contexts often view the same behavior differently, and framed as “different, not wrong.” These notes are necessarily general; no single paragraph can represent the full diversity within any culture or region.',
    },
    originalWording: {
      heading: 'Original wording, not reproduction',
      body: 'All article text and illustrations on this site were written and drawn specifically for Kidsense. If you believe any part of this site too closely reproduces copyrighted material, please open an issue in the project’s repository describing the concern, and it will be reviewed and corrected promptly.',
    },
    seeAlso: {
      heading: 'See also',
      disclaimerLinkLabel: 'Medical & Psychological Disclaimer',
    },
  },
};
