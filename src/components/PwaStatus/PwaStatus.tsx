import { useLocale } from '../../hooks/useLocale';
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import { usePwa } from '../../hooks/usePwa';
import styles from './PwaStatus.module.css';

/**
 * Single status banner covering all three PWA states: a new version waiting to activate, the
 * app just became available offline, and the app is currently offline. `role="status"` gives an
 * implicit polite live region, so screen readers announce it on mount without moving focus.
 */
export function PwaStatus() {
  const { t } = useLocale();
  const { needRefresh, offlineReady, updateServiceWorker, dismiss } = usePwa();
  const isOnline = useOnlineStatus();

  if (!needRefresh && !offlineReady && isOnline) return null;

  const message = needRefresh
    ? t((d) => d.pwa.updateAvailable)
    : offlineReady
      ? t((d) => d.pwa.offlineReady)
      : t((d) => d.pwa.offlineIndicator);

  return (
    <div className={styles.banner} role="status">
      <p className={styles.message}>{message}</p>
      <div className={styles.actions}>
        {needRefresh && (
          <button
            type="button"
            className={styles.reload}
            onClick={() => void updateServiceWorker()}
          >
            {t((d) => d.pwa.reload)}
          </button>
        )}
        {(needRefresh || offlineReady) && (
          <button
            type="button"
            className={styles.dismiss}
            onClick={dismiss}
            aria-label={t((d) => d.pwa.dismiss)}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
