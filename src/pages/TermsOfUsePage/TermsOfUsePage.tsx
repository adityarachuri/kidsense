import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { useLocale } from '../../hooks/useLocale';
import styles from '../legalPage.module.css';

export function TermsOfUsePage() {
  const { t } = useLocale();
  return (
    <div className={styles.wrapper}>
      <div className={styles.crumbWrap}>
        <Breadcrumbs
          items={[
            { label: t((d) => d.common.home), to: '/' },
            { label: t((d) => d.footer.termsOfUse) },
          ]}
        />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>{t((d) => d.termsPage.title)}</h1>
        <p className={styles.updated}>{t((d) => d.common.lastUpdated, { year: '2026' })}</p>

        <p className={styles.lede}>{t((d) => d.termsPage.lede)}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.termsPage.whatThisSiteIs.heading)}</h2>
          <p className={styles.body}>{t((d) => d.termsPage.whatThisSiteIs.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.termsPage.noWarranty.heading)}</h2>
          <p className={styles.body}>
            {t((d) => d.termsPage.noWarranty.bodyPart1)}{' '}
            <Link to="/disclaimer">{t((d) => d.footer.disclaimer)}</Link>{' '}
            {t((d) => d.termsPage.noWarranty.bodyPart2)}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.termsPage.limitationOfLiability.heading)}
          </h2>
          <p className={styles.body}>{t((d) => d.termsPage.limitationOfLiability.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.termsPage.intellectualProperty.heading)}
          </h2>
          <p className={styles.body}>
            {t((d) => d.termsPage.intellectualProperty.bodyPart1)} <code>LICENSE</code>{' '}
            {t((d) => d.termsPage.intellectualProperty.bodyPart2)}{' '}
            <Link to="/sources">{t((d) => d.footer.sourcesAndMethodology)}</Link>{' '}
            {t((d) => d.termsPage.intellectualProperty.bodyPart3)} <code>CONTENT_LICENSE.md</code>{' '}
            {t((d) => d.termsPage.intellectualProperty.bodyPart4)}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.termsPage.acceptableUse.heading)}</h2>
          <ul className={styles.list}>
            <li>{t((d) => d.termsPage.acceptableUse.item1)}</li>
            <li>{t((d) => d.termsPage.acceptableUse.item2)}</li>
            <li>{t((d) => d.termsPage.acceptableUse.item3)}</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.termsPage.changesToTerms.heading)}</h2>
          <p className={styles.body}>{t((d) => d.termsPage.changesToTerms.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.termsPage.legalFormality.heading)}</h2>
          <p className={styles.body}>{t((d) => d.termsPage.legalFormality.body)}</p>
        </section>
      </div>
    </div>
  );
}
