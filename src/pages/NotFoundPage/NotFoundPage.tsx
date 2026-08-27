import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.emoji} aria-hidden="true">
        🔍
      </div>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.message}>
        We couldn&rsquo;t find that page. It may have been renamed or isn&rsquo;t published yet.
      </p>
      <Link to="/" className={styles.link}>
        Back to home
      </Link>
    </div>
  );
}
