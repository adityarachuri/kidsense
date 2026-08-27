import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import styles from '../legalPage.module.css';

export function DisclaimerPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.crumbWrap}>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Disclaimer' }]} />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Medical &amp; Psychological Disclaimer</h1>
        <p className={styles.updated}>Last updated: 2026</p>

        <p className={styles.lede}>
          Kidsense is an educational reference. It is not medical, psychological, or psychiatric
          advice, and it does not replace consultation with a qualified professional who knows your
          child.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>No professional relationship</h2>
          <p className={styles.body}>
            Reading this site does not create a doctor&ndash;patient, therapist&ndash;client, or
            teacher&ndash;student relationship between you and the authors of Kidsense. The content
            is general in nature and is not tailored to your child&rsquo;s specific history,
            temperament, culture, or circumstances.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Every child is different</h2>
          <p className={styles.body}>
            Child development varies widely between individuals, and what is typical at one age or
            in one context may not apply to your child. Each topic in Kidsense includes a
            &ldquo;When should parents be concerned?&rdquo; section precisely because ordinary
            developmental variation and a genuine concern can look similar from the outside. When in
            doubt, a qualified professional&mdash;not this site&mdash;is best placed to tell the
            difference.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Consult a qualified professional</h2>
          <p className={styles.body}>
            If you have any concern about a child&rsquo;s development, behavior, emotional
            wellbeing, or safety, consult a pediatrician, psychologist, psychiatrist, licensed
            therapist, school counselor, or other qualified professional. Do not delay seeking
            professional care because of something you read here.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>In a crisis, act immediately</h2>
          <p className={styles.body}>
            If a child is in immediate danger, is expressing thoughts of self-harm or suicide, or
            you believe there is any risk to their safety or the safety of others, contact your
            local emergency services number immediately, or a crisis helpline in your country.
            Availability, names, and numbers of crisis services vary by country and region &mdash;
            Kidsense does not list them because it is not a substitute for locally appropriate
            emergency guidance.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Accuracy and currency</h2>
          <p className={styles.body}>
            Kidsense is compiled and maintained on a best-effort basis (see{' '}
            <Link to="/sources">Sources &amp; Methodology</Link>). Developmental science evolves,
            and an individual article may not reflect the most current research at the time you read
            it. See the <Link to="/terms-of-use">Terms of Use</Link> for the full limitation of
            liability.
          </p>
        </section>
      </div>
    </div>
  );
}
