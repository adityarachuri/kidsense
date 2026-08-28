import { Link } from 'react-router-dom';
import { useLocale } from '../../hooks/useLocale';
import styles from './SourcesPanel.module.css';

interface SourcesPanelProps {
  readonly sources: readonly string[] | undefined;
}

/** Renders nothing when this topic hasn't had its sources attributed yet. */
export function SourcesPanel({ sources }: SourcesPanelProps) {
  const { t } = useLocale();
  if (!sources || sources.length === 0) {
    return null;
  }

  return (
    <p className={styles.note}>
      {t((d) => d.sourcesPanel.informedByPrefix, { sources: sources.join(', ') })}{' '}
      <Link to="/sources">{t((d) => d.footer.sourcesAndMethodology)}</Link>{' '}
      {t((d) => d.sourcesPanel.suffix)}
    </p>
  );
}
