import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { useLocale } from '../../hooks/useLocale';
import styles from '../legalPage.module.css';

export function SourcesPage() {
  const { t } = useLocale();
  return (
    <div className={styles.wrapper}>
      <div className={styles.crumbWrap}>
        <Breadcrumbs
          items={[
            { label: t((d) => d.common.home), to: '/' },
            { label: t((d) => d.footer.sourcesAndMethodology) },
          ]}
        />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>{t((d) => d.sourcesPage.title)}</h1>
        <p className={styles.updated}>{t((d) => d.common.lastUpdated, { year: '2026' })}</p>

        <p className={styles.lede}>{t((d) => d.sourcesPage.lede)}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.sourcesPage.evidenceInformed.heading)}
          </h2>
          <p className={styles.body}>{t((d) => d.sourcesPage.evidenceInformed.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.sourcesPage.kindsOfSources.heading)}</h2>
          <p className={styles.body}>{t((d) => d.sourcesPage.kindsOfSources.intro)}</p>
          <ul className={styles.list}>
            <li>{t((d) => d.sourcesPage.kindsOfSources.aap)}</li>
            <li>{t((d) => d.sourcesPage.kindsOfSources.cdc)}</li>
            <li>{t((d) => d.sourcesPage.kindsOfSources.who)}</li>
            <li>{t((d) => d.sourcesPage.kindsOfSources.nhs)}</li>
            <li>{t((d) => d.sourcesPage.kindsOfSources.apa)}</li>
            <li>{t((d) => d.sourcesPage.kindsOfSources.zeroToThree)}</li>
            <li>{t((d) => d.sourcesPage.kindsOfSources.unicef)}</li>
            <li>{t((d) => d.sourcesPage.kindsOfSources.commonSenseMedia)}</li>
          </ul>
          <p className={styles.body}>{t((d) => d.sourcesPage.kindsOfSources.outro)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.sourcesPage.culturalPerspectives.heading)}
          </h2>
          <p className={styles.body}>{t((d) => d.sourcesPage.culturalPerspectives.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.sourcesPage.originalWording.heading)}</h2>
          <p className={styles.body}>{t((d) => d.sourcesPage.originalWording.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.sourcesPage.seeAlso.heading)}</h2>
          <p className={styles.body}>
            <Link to="/disclaimer">{t((d) => d.sourcesPage.seeAlso.disclaimerLinkLabel)}</Link>{' '}
            &middot; <Link to="/terms-of-use">{t((d) => d.footer.termsOfUse)}</Link> &middot;{' '}
            <Link to="/privacy">{t((d) => d.privacyPage.title)}</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
