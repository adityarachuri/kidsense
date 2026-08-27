import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        <span className={styles.brandIcon} aria-hidden="true">
          📖
        </span>
        <span className={styles.brandText}>Kidsense</span>
      </Link>
      <SearchBar />
    </header>
  );
}
