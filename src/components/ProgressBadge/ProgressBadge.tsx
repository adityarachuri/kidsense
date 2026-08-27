import styles from './ProgressBadge.module.css';

interface ProgressBadgeProps {
  readonly authored: number;
  readonly planned: number;
}

export function ProgressBadge({ authored, planned }: ProgressBadgeProps) {
  const variant =
    authored === 0 ? styles.badgeEmpty : authored < planned ? styles.badgePartial : '';
  const label =
    authored === 0
      ? 'Coming soon'
      : authored < planned
        ? `${authored} of ${planned} topics`
        : `${authored} topics`;

  return <span className={`${styles.badge} ${variant}`}>{label}</span>;
}
