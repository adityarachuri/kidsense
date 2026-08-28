import type { Locale } from '../locale';
import { en } from './en';
import { hi } from './hi';
import { te } from './te';
import type { Dictionary } from './types';

export const translations: Readonly<Record<Locale, Dictionary>> = { en, hi, te };
export type { Dictionary } from './types';
