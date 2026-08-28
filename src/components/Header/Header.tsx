import { Link } from 'react-router-dom';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import { SearchBar } from '../SearchBar/SearchBar';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
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
      <div className={styles.controls}>
        <SearchBar />
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
