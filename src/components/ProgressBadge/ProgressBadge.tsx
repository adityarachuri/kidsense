import { useLocale } from '../../hooks/useLocale';
import styles from './ProgressBadge.module.css';

interface ProgressBadgeProps {
  readonly authored: number;
  readonly planned: number;
}

export function ProgressBadge({ authored, planned }: ProgressBadgeProps) {
  const { t } = useLocale();
  const variant =
    authored === 0 ? styles.badgeEmpty : authored < planned ? styles.badgePartial : '';
  const label =
    authored === 0
      ? t((d) => d.progressBadge.comingSoon)
      : authored < planned
        ? t((d) => d.progressBadge.partial, { authored, planned })
        : t((d) => d.progressBadge.complete, { authored });

  return <span className={`${styles.badge} ${variant}`}>{label}</span>;
}
