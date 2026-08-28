import { useState } from 'react';
import { ageBands, getApplicableAgeBandIds } from '../../content/ageBands';
import { getAllTopicsFlat } from '../../content/sections';
import { TopicCard } from '../TopicCard/TopicCard';
import styles from './AgeBrowser.module.css';

const MILESTONE_AGES = [5, 8, 10, 12, 15, 18] as const;

/**
 * Lets a reader pick one of the six milestone ages from the product vision
 * and see every topic (across every section) whose age band matches it.
 */
export function AgeBrowser() {
  const [selectedAge, setSelectedAge] = useState<number | null>(null);

  const band =
    selectedAge === null ? undefined : ageBands.find((b) => b.milestoneAges.includes(selectedAge));
  const matches =
    band === undefined
      ? []
      : getAllTopicsFlat().filter(({ topic }) => getApplicableAgeBandIds(topic).includes(band.id));

  return (
    <section className={styles.wrapper} aria-labelledby="browse-by-age-heading">
      <h2 id="browse-by-age-heading" className={styles.heading}>
        Browse by Age
      </h2>
      <div className={styles.ageButtons} role="group" aria-label="Filter topics by age">
        {MILESTONE_AGES.map((age) => (
          <button
            key={age}
            type="button"
            className={`${styles.ageButton} ${selectedAge === age ? styles.ageButtonActive : ''}`}
            aria-pressed={selectedAge === age}
            onClick={() => setSelectedAge((current) => (current === age ? null : age))}
          >
            Age {age}
          </button>
        ))}
      </div>
      {selectedAge !== null &&
        (matches.length > 0 ? (
          <div className={styles.results}>
            {matches.map(({ section, topic }) => (
              <TopicCard
                key={`${section.id}-${topic.id}-${topic.ageBandIds?.join(',') ?? 'general'}`}
                sectionId={section.id}
                topic={topic}
                ageBandId={topic.ageBandIds && topic.ageBandIds.length > 0 ? band?.id : undefined}
              />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>
            No topics are tagged for age {selectedAge} yet — this age band is still being authored.
          </p>
        ))}
    </section>
  );
}
