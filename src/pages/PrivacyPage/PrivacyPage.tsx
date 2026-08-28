import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { useLocale } from '../../hooks/useLocale';
import styles from '../legalPage.module.css';

export function PrivacyPage() {
  const { t } = useLocale();
  return (
    <div className={styles.wrapper}>
      <div className={styles.crumbWrap}>
        <Breadcrumbs
          items={[
            { label: t((d) => d.common.home), to: '/' },
            { label: t((d) => d.footer.privacy) },
          ]}
        />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>{t((d) => d.privacyPage.title)}</h1>
        <p className={styles.updated}>{t((d) => d.common.lastUpdated, { year: '2026' })}</p>

        <p className={styles.lede}>{t((d) => d.privacyPage.lede)}</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.privacyPage.noDataCollection.heading)}
          </h2>
          <p className={styles.body}>{t((d) => d.privacyPage.noDataCollection.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.privacyPage.noTracking.heading)}</h2>
          <p className={styles.body}>
            {t((d) => d.privacyPage.noTracking.bodyPart1)}
            <code>script-src &apos;self&apos;</code>
            {t((d) => d.privacyPage.noTracking.bodyPart2)}
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.privacyPage.selfHostedAssets.heading)}
          </h2>
          <p className={styles.body}>{t((d) => d.privacyPage.selfHostedAssets.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.privacyPage.localStorage.heading)}</h2>
          <p className={styles.body}>{t((d) => d.privacyPage.localStorage.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            {t((d) => d.privacyPage.childrensPrivacy.heading)}
          </h2>
          <p className={styles.body}>{t((d) => d.privacyPage.childrensPrivacy.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.privacyPage.hosting.heading)}</h2>
          <p className={styles.body}>{t((d) => d.privacyPage.hosting.body)}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t((d) => d.privacyPage.questions.heading)}</h2>
          <p className={styles.body}>{t((d) => d.privacyPage.questions.body)}</p>
        </section>
      </div>
    </div>
  );
}
