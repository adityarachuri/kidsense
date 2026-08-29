import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { useLocale } from '../../hooks/useLocale';
import styles from '../legalPage.module.css';

export function DisclaimerPage() {
  const { t } = useLocale();
  return (
    <div className={styles.wrapper}>
      <div className={styles.crumbWrap}>
        <Breadcrumbs
          items={[
            { label: t((d) => d.common.home), to: '/' },
            { label: t((d) => d.footer.disclaimer) },
          ]}
        />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>{t((d) => d.disclaimerPage.title)}</h1>
        <p className={styles.updated}>{t((d) => d.common.lastUpdated, { year: '2026' })}</p>

        <p className={styles.lede}>{t((d) => d.disclaimerPage.lede)}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.disclaimerPage.noRelationship.heading)}
          </h2>
          <p className={styles.body}>{t((d) => d.disclaimerPage.noRelationship.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.disclaimerPage.everyChildDifferent.heading)}
          </h2>
          <p className={styles.body}>{t((d) => d.disclaimerPage.everyChildDifferent.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.disclaimerPage.consultProfessional.heading)}
          </h2>
          <p className={styles.body}>{t((d) => d.disclaimerPage.consultProfessional.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.disclaimerPage.crisis.heading)}</h2>
          <p className={styles.body}>{t((d) => d.disclaimerPage.crisis.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.disclaimerPage.legalAdjacentContent.heading)}
          </h2>
          <p className={styles.body}>{t((d) => d.disclaimerPage.legalAdjacentContent.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.disclaimerPage.accuracy.heading)}</h2>
          <p className={styles.body}>
            {t((d) => d.disclaimerPage.accuracy.bodyPart1)}{' '}
            <Link to="/sources">{t((d) => d.footer.sourcesAndMethodology)}</Link>
            {t((d) => d.disclaimerPage.accuracy.bodyPart2)}{' '}
            <Link to="/terms-of-use">{t((d) => d.footer.termsOfUse)}</Link>{' '}
            {t((d) => d.disclaimerPage.accuracy.bodyPart3)}
          </p>
        </section>
      </div>
    </div>
  );
}
