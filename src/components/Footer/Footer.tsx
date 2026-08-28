import { Link } from 'react-router-dom';
import { getTotalAuthoredTopicCount, getTotalPlannedTopicCount } from '../../content/sections';
import { useLocale } from '../../hooks/useLocale';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLocale();
  const authored = getTotalAuthoredTopicCount();
  const planned = getTotalPlannedTopicCount();

  return (
    <footer className={styles.footer}>
      <p>Kidsense — {t((d) => d.footer.progress, { authored, planned })}</p>
      <nav className={styles.legalNav} aria-label={t((d) => d.footer.legalNavLabel)}>
        <Link to="/disclaimer">{t((d) => d.footer.disclaimer)}</Link>
        <span aria-hidden="true">·</span>
        <Link to="/terms-of-use">{t((d) => d.footer.termsOfUse)}</Link>
        <span aria-hidden="true">·</span>
        <Link to="/privacy">{t((d) => d.footer.privacy)}</Link>
        <span aria-hidden="true">·</span>
        <Link to="/sources">{t((d) => d.footer.sourcesAndMethodology)}</Link>
      </nav>
    </footer>
  );
}
