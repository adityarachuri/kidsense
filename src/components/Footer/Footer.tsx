import { Link } from 'react-router-dom';
import { getTotalAuthoredTopicCount, getTotalPlannedTopicCount } from '../../content/sections';
import styles from './Footer.module.css';

export function Footer() {
  const authored = getTotalAuthoredTopicCount();
  const planned = getTotalPlannedTopicCount();

  return (
    <footer className={styles.footer}>
      <p>
        Kidsense — {authored} of {planned} topics published. Evidence-informed, not a substitute for
        professional advice.
      </p>
      <nav className={styles.legalNav} aria-label="Legal">
        <Link to="/disclaimer">Disclaimer</Link>
        <span aria-hidden="true">·</span>
        <Link to="/terms-of-use">Terms of Use</Link>
        <span aria-hidden="true">·</span>
        <Link to="/privacy">Privacy</Link>
        <span aria-hidden="true">·</span>
        <Link to="/sources">Sources &amp; Methodology</Link>
      </nav>
    </footer>
  );
}
