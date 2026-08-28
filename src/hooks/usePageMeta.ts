import { useEffect } from 'react';

const DEFAULT_TITLE = 'Kidsense';
const DEFAULT_DESCRIPTION =
  'Kidsense — an evidence-informed, illustrated reference explaining everyday child behavior and what helps.';

/** Sets the document title and meta description for the lifetime of the calling page, resetting to the site defaults on unmount. */
export function usePageMeta(title: string | undefined, description: string = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    document.title = title ? `${title} | Kidsense` : DEFAULT_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', description);

    return () => {
      document.title = DEFAULT_TITLE;
      meta?.setAttribute('content', DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
