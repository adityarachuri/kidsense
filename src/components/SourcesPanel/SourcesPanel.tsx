import { Link } from 'react-router-dom';
import styles from './SourcesPanel.module.css';

interface SourcesPanelProps {
  readonly sources: readonly string[] | undefined;
}

/** Renders nothing when this topic hasn't had its sources attributed yet. */
export function SourcesPanel({ sources }: SourcesPanelProps) {
  if (!sources || sources.length === 0) {
    return null;
  }

  return (
    <p className={styles.note}>
      Informed by publicly available guidance from: {sources.join(', ')}. See{' '}
      <Link to="/sources">Sources &amp; Methodology</Link> for how Kidsense is compiled.
    </p>
  );
}
