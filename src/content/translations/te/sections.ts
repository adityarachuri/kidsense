import type { SectionTranslation } from '../types';

/**
 * AI-drafted Telugu translations of section metadata (title, shortTitle,
 * description) for all six sections. `needsReview: true` marks these as
 * machine-drafted and pending a native-speaker/content-owner pass — the app
 * renders a small notice on any section carrying this flag. A section or
 * field left out falls back to the English original.
 */
export const sections_te: Readonly<Record<string, SectionTranslation>> = {
  'morning-routine': {
    title: 'విభాగం 1: ఉదయపు దినచర్య',
    shortTitle: 'ఉదయపు దినచర్య',
    description:
      'పది నిత్యజీవిత ఉదయపు ప్రవర్తనలు, వివరించబడ్డాయి — వాటి వెనుక ఉన్న మనస్తత్వశాస్త్రం మరియు నిజంగా ఏది సహాయపడుతుందో దానితో పాటు.',
    needsReview: true,
  },
  homework: {
    title: 'విభాగం 2: హోంవర్క్',
    shortTitle: 'హోంవర్క్',
    description:
      'పది నిత్యజీవిత హోంవర్క్ సవాళ్లు, వివరించబడ్డాయి — వాటి వెనుక ఉన్న మనస్తత్వశాస్త్రం మరియు నిజంగా ఏది సహాయపడుతుందో దానితో పాటు.',
    needsReview: true,
  },
  eating: {
    title: 'విభాగం 3: భోజనం',
    shortTitle: 'భోజనం',
    description:
      'పది నిత్యజీవిత భోజన సవాళ్లు, వివరించబడ్డాయి — వాటి వెనుక ఉన్న మనస్తత్వశాస్త్రం మరియు నిజంగా ఏది సహాయపడుతుందో దానితో పాటు.',
    needsReview: true,
  },
  behaviour: {
    title: 'విభాగం 4: ప్రవర్తన',
    shortTitle: 'ప్రవర్తన',
    description:
      'పదిహేను నిత్యజీవిత ప్రవర్తనా క్షణాలు, వివరించబడ్డాయి — వాటి వెనుక ఉన్న మనస్తత్వశాస్త్రం మరియు నిజంగా ఏది సహాయపడుతుందో దానితో పాటు.',
    needsReview: true,
  },
  emotions: {
    title: 'విభాగం 5: భావోద్వేగాలు',
    shortTitle: 'భావోద్వేగాలు',
    description:
      'పదిహేను నిత్యజీవిత భావోద్వేగ క్షణాలు, వివరించబడ్డాయి — వాటి వెనుక ఉన్న మనస్తత్వశాస్త్రం మరియు నిజంగా ఏది సహాయపడుతుందో దానితో పాటు.',
    needsReview: true,
  },
  'digital-era': {
    title: 'విభాగం 6: డిజిటల్ యుగం',
    shortTitle: 'డిజిటల్ యుగం',
    description:
      'పదిహేను నిత్యజీవిత స్క్రీన్-టైమ్ క్షణాలు, వివరించబడ్డాయి — వాటి వెనుక ఉన్న మనస్తత్వశాస్త్రం మరియు నిజంగా ఏది సహాయపడుతుందో దానితో పాటు.',
    needsReview: true,
  },
  'every-child': {
    title: 'విభాగం 7: ప్రతి పిల్లవాడిని అర్థం చేసుకోవడం',
    shortTitle: 'ప్రతి పిల్లవాడు',
    description:
      'ప్రపంచాన్ని భిన్నంగా కదిలే, గ్రహించే, నేర్చుకునే, లేదా అనుభూతి చెందే పిల్లలపై ఐదు అంశాలు — మరియు వారికి ఎలా మద్దతు ఇవ్వాలో, ఇక్కడి ప్రతి ఇతర అంశం లాంటి నిర్ధారణ-రహిత శ్రద్ధతోనే.',
    needsReview: true,
  },
};
