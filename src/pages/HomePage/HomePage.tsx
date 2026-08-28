import { AgeBrowser } from '../../components/AgeBrowser/AgeBrowser';
import { SectionCard } from '../../components/SectionCard/SectionCard';
import { useLocalizedSections } from '../../content/localize';
import { sections } from '../../content/sections';
import { useLocale } from '../../hooks/useLocale';
import { usePageMeta } from '../../hooks/usePageMeta';
import styles from './HomePage.module.css';

export function HomePage() {
  const { t } = useLocale();
  const localizedSections = useLocalizedSections(sections);
  usePageMeta(undefined);

  return (
    <div>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Kidsense</p>
        <h1 className={styles.title}>{t((d) => d.home.title)}</h1>
        <p className={styles.subtitle}>{t((d) => d.home.subtitle)}</p>
      </div>
      <AgeBrowser />
      <div className={styles.grid}>
        {localizedSections.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
