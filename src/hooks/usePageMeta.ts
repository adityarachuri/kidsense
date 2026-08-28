import { useEffect } from 'react';
import { useLocale } from './useLocale';

const DEFAULT_TITLE = 'Kidsense';

/** Sets the document title and meta description for the lifetime of the calling page, resetting to the site defaults on unmount. */
export function usePageMeta(title: string | undefined, description?: string) {
  const { t } = useLocale();
  const defaultDescription = t((d) => d.meta.defaultDescription);
  const resolvedDescription = description ?? defaultDescription;

  useEffect(() => {
    document.title = title ? `${title} | Kidsense` : DEFAULT_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', resolvedDescription);

    return () => {
      document.title = DEFAULT_TITLE;
      meta?.setAttribute('content', defaultDescription);
    };
  }, [title, resolvedDescription, defaultDescription]);
}
