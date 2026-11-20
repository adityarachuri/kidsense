import { useCallback, useEffect, useRef, useState } from 'react';
import { registerSW } from 'virtual:pwa-register';

export interface UsePwaResult {
  readonly needRefresh: boolean;
  readonly offlineReady: boolean;
  readonly updateServiceWorker: () => Promise<void>;
  readonly dismiss: () => void;
}

/** Registers the build's service worker and exposes its update/offline-ready state. */
export function usePwa(): UsePwaResult {
  const [needRefresh, setNeedRefresh] = useState(false);
  const [offlineReady, setOfflineReady] = useState(false);
  const updateSWRef = useRef<(reloadPage?: boolean) => Promise<void>>(undefined);

  useEffect(() => {
    updateSWRef.current = registerSW({
      immediate: true,
      onNeedRefresh: () => setNeedRefresh(true),
      onOfflineReady: () => setOfflineReady(true),
      onRegisterError: (error: unknown) =>
        console.error('Service worker registration failed', error),
    });
  }, []);

  const updateServiceWorker = useCallback(async () => {
    await updateSWRef.current?.(true);
  }, []);

  const dismiss = useCallback(() => {
    setNeedRefresh(false);
    setOfflineReady(false);
  }, []);

  return { needRefresh, offlineReady, updateServiceWorker, dismiss };
}
