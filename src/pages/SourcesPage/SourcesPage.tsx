import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import styles from '../legalPage.module.css';

export function SourcesPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.crumbWrap}>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Sources & Methodology' }]} />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Sources &amp; Methodology</h1>
        <p className={styles.updated}>Last updated: 2026</p>

        <p className={styles.lede}>
          Every article on this site is an original compilation, written in our own words, that
          draws on publicly available, mainstream developmental-psychology and pediatric guidance.
          Nothing here is copied verbatim from any source.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What &ldquo;evidence-informed&rdquo; means here</h2>
          <p className={styles.body}>
            Kidsense is a compilation, not a systematic literature review or a peer-reviewed
            publication. Each topic reflects general, widely published professional consensus about
            typical child and adolescent development &mdash; the kind of explanation you would
            commonly hear from a pediatrician, school counselor, or child psychologist. Where the
            field genuinely disagrees or evidence is limited, that uncertainty is not hidden; the
            &ldquo;when should parents be concerned&rdquo; sections exist specifically to route
            judgment calls to a qualified professional rather than settle them here.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The kinds of sources Kidsense draws on</h2>
          <p className={styles.body}>
            Content is informed by the type of publicly available guidance published by
            organizations such as:
          </p>
          <ul className={styles.list}>
            <li>The American Academy of Pediatrics (AAP)</li>
            <li>
              The U.S. Centers for Disease Control and Prevention (CDC), including its &ldquo;Learn
              the Signs. Act Early.&rdquo; developmental milestones program
            </li>
            <li>The World Health Organization (WHO)</li>
            <li>The UK National Health Service (NHS)</li>
            <li>The American Psychological Association (APA)</li>
            <li>Zero to Three</li>
            <li>UNICEF</li>
            <li>Common Sense Media (for digital-era and media-related topics)</li>
          </ul>
          <p className={styles.body}>
            As per-article source attribution is rolled out (see the project roadmap), individual
            articles will list the specific organizations most relevant to that topic. Until an
            article shows its own source list, treat it as reflecting this general body of publicly
            available guidance rather than a specific citation.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cultural perspectives</h2>
          <p className={styles.body}>
            Most published child-development guidance originates from a relatively narrow set of
            countries and cultural contexts. Where a topic includes an &ldquo;Around the
            World&rdquo; panel, it is intended to broaden that lens &mdash; noting that other
            cultural contexts often view the same behavior differently, and framed as
            &ldquo;different, not wrong.&rdquo; These notes are necessarily general; no single
            paragraph can represent the full diversity within any culture or region.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Original wording, not reproduction</h2>
          <p className={styles.body}>
            All article text and illustrations on this site were written and drawn specifically for
            Kidsense. If you believe any part of this site too closely reproduces copyrighted
            material, please open an issue in the project&rsquo;s repository describing the concern,
            and it will be reviewed and corrected promptly.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>See also</h2>
          <p className={styles.body}>
            <Link to="/disclaimer">Medical &amp; Psychological Disclaimer</Link> &middot;{' '}
            <Link to="/terms-of-use">Terms of Use</Link> &middot;{' '}
            <Link to="/privacy">Privacy Policy</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
