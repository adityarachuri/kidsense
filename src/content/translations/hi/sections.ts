import type { SectionTranslation } from '../types';

/**
 * AI-drafted Hindi translations of section metadata (title, shortTitle,
 * description) for all six sections. `needsReview: true` marks these as
 * machine-drafted and pending a native-speaker/content-owner pass — the app
 * renders a small notice on any section carrying this flag. A section or
 * field left out falls back to the English original.
 */
export const sections_hi: Readonly<Record<string, SectionTranslation>> = {
  'morning-routine': {
    title: 'सेक्शन 1: सुबह की दिनचर्या',
    shortTitle: 'सुबह की दिनचर्या',
    description:
      'दस रोज़मर्रा के सुबह के व्यवहार, समझाए गए — उनके पीछे की मनोविज्ञान और वास्तव में क्या मदद करता है, इसके साथ।',
    needsReview: true,
  },
  homework: {
    title: 'सेक्शन 2: होमवर्क',
    shortTitle: 'होमवर्क',
    description:
      'दस रोज़मर्रा की होमवर्क चुनौतियाँ, समझाई गई — उनके पीछे की मनोविज्ञान और वास्तव में क्या मदद करता है, इसके साथ।',
    needsReview: true,
  },
  eating: {
    title: 'सेक्शन 3: खाना',
    shortTitle: 'खाना',
    description:
      'दस रोज़मर्रा की भोजन संबंधी चुनौतियाँ, समझाई गई — उनके पीछे की मनोविज्ञान और वास्तव में क्या मदद करता है, इसके साथ।',
    needsReview: true,
  },
  behaviour: {
    title: 'सेक्शन 4: व्यवहार',
    shortTitle: 'व्यवहार',
    description:
      'पंद्रह रोज़मर्रा के व्यवहार संबंधी पल, समझाए गए — उनके पीछे की मनोविज्ञान और वास्तव में क्या मदद करता है, इसके साथ।',
    needsReview: true,
  },
  emotions: {
    title: 'सेक्शन 5: भावनाएँ',
    shortTitle: 'भावनाएँ',
    description:
      'पंद्रह रोज़मर्रा के भावनात्मक पल, समझाए गए — उनके पीछे की मनोविज्ञान और वास्तव में क्या मदद करता है, इसके साथ।',
    needsReview: true,
  },
  'digital-era': {
    title: 'सेक्शन 6: डिजिटल युग',
    shortTitle: 'डिजिटल युग',
    description:
      'पंद्रह रोज़मर्रा के स्क्रीन-टाइम पल, समझाए गए — उनके पीछे की मनोविज्ञान और वास्तव में क्या मदद करता है, इसके साथ।',
    needsReview: true,
  },
  'every-child': {
    title: 'सेक्शन 7: हर बच्चे को समझना',
    shortTitle: 'हर बच्चा',
    description:
      'पाँच विषय उन बच्चों पर, जो दुनिया को अलग तरीके से महसूस करते, सीखते या अनुभव करते हैं — और उन्हें कैसे सहारा दें, हर दूसरे विषय जैसी ही गैर-निदान संबंधी देखभाल के साथ।',
    needsReview: true,
  },
};
