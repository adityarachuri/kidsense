import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../../hooks/useLocale';
import styles from './Breadcrumbs.module.css';

export interface Crumb {
  readonly label: string;
  /** Omit for the final, current-page crumb. */
  readonly to?: string;
}

interface BreadcrumbsProps {
  readonly items: readonly Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t } = useLocale();
  return (
    <nav className={styles.nav} aria-label={t((d) => d.breadcrumb.ariaLabel)}>
      {items.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 && (
            <span className={styles.separator} aria-hidden="true">
              /
            </span>
          )}
          {item.to ? (
            <Link to={item.to} className={styles.link}>
              {item.label}
            </Link>
          ) : (
            <span className={styles.current} aria-current="page">
              {item.label}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
