import { useLocale } from '../../hooks/useLocale';
import styles from './TranslationNotice.module.css';

interface TranslationNoticeProps {
  readonly needsReview: boolean | undefined;
}

/** Small badge shown on a topic/section whose active-locale translation is machine-drafted and pending human review. */
export function TranslationNotice({ needsReview }: TranslationNoticeProps) {
  const { t, locale } = useLocale();
  if (!needsReview || locale === 'en') return null;

  return <span className={styles.badge}>{t((d) => d.translationNotice.badge)}</span>;
}
