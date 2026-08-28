import type { Locale } from '../../i18n/locale';
import { behaviourTopics_hi } from './hi/section4-behaviour';
import { morningRoutineTopics_hi } from './hi/section1-morning-routine';
import { homeworkTopics_hi } from './hi/section2-homework';
import { eatingTopics_hi } from './hi/section3-eating';
import { emotionsTopics_hi } from './hi/section5-emotions';
import { digitalEraTopics_hi } from './hi/section6-digital-era';
import { sections_hi } from './hi/sections';
import { behaviourTopics_te } from './te/section4-behaviour';
import { morningRoutineTopics_te } from './te/section1-morning-routine';
import { homeworkTopics_te } from './te/section2-homework';
import { eatingTopics_te } from './te/section3-eating';
import { emotionsTopics_te } from './te/section5-emotions';
import { digitalEraTopics_te } from './te/section6-digital-era';
import { sections_te } from './te/sections';
import type { LocaleContentTranslations } from './types';

/**
 * Content translations for every non-English locale, by section id. Adding a
 * newly-translated section is purely a data change here plus a new
 * `hi|te/sectionN-*.ts` file — no other code changes are required.
 */
export const contentTranslations: Readonly<
  Record<Exclude<Locale, 'en'>, LocaleContentTranslations>
> = {
  hi: {
    sections: sections_hi,
    topicsBySection: {
      'morning-routine': morningRoutineTopics_hi,
      homework: homeworkTopics_hi,
      eating: eatingTopics_hi,
      behaviour: behaviourTopics_hi,
      emotions: emotionsTopics_hi,
      'digital-era': digitalEraTopics_hi,
    },
  },
  te: {
    sections: sections_te,
    topicsBySection: {
      'morning-routine': morningRoutineTopics_te,
      homework: homeworkTopics_te,
      eating: eatingTopics_te,
      behaviour: behaviourTopics_te,
      emotions: emotionsTopics_te,
      'digital-era': digitalEraTopics_te,
    },
  },
};
