import { AgeBrowser } from '../../components/AgeBrowser/AgeBrowser';
import { SectionCard } from '../../components/SectionCard/SectionCard';
import { sections } from '../../content/sections';
import { usePageMeta } from '../../hooks/usePageMeta';
import styles from './HomePage.module.css';

export function HomePage() {
  usePageMeta(undefined);

  return (
    <div>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Kidsense</p>
        <h1 className={styles.title}>Why kids do what they do</h1>
        <p className={styles.subtitle}>
          An evidence-informed, illustrated reference for everyday child behavior — organized by the
          moments that come up again and again, from morning routines to big emotions.
        </p>
      </div>
      <AgeBrowser />
      <div className={styles.grid}>
        {sections.map((section) => (
          <SectionCard key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
