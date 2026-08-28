import { Link } from 'react-router-dom';
import { useLocale } from '../../hooks/useLocale';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  const { t } = useLocale();
  return (
    <div className={styles.wrapper}>
      <div className={styles.emoji} aria-hidden="true">
        🔍
      </div>
      <h1 className={styles.title}>{t((d) => d.notFound.title)}</h1>
      <p className={styles.message}>{t((d) => d.notFound.message)}</p>
      <Link to="/" className={styles.link}>
        {t((d) => d.common.backToHome)}
      </Link>
    </div>
  );
}
