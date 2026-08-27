import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import styles from '../legalPage.module.css';

export function PrivacyPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.crumbWrap}>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Privacy' }]} />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: 2026</p>

        <p className={styles.lede}>
          The short version: this site does not collect, store, or transmit any personal data, from
          anyone, of any age.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>No data collection</h2>
          <p className={styles.body}>
            This is a static site with no backend server and no database. There are no user
            accounts, no sign-ups, no forms that submit data anywhere, no comments sections, and no
            way to enter personal information into the site at all.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>No tracking, no analytics, no ads</h2>
          <p className={styles.body}>
            The site loads no third-party analytics scripts, advertising networks, or tracking
            pixels. Its Content Security Policy restricts scripts to the site&rsquo;s own origin (
            <code>script-src &apos;self&apos;</code>), so no third-party script can run even
            accidentally. There are no cookies set by this site.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Fonts and assets are self-hosted</h2>
          <p className={styles.body}>
            Typefaces and illustrations are bundled with the site and served from the same origin,
            rather than fetched from a third-party font or asset CDN at runtime &mdash; so simply
            reading this site does not send a request to any third party.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Browser-local storage</h2>
          <p className={styles.body}>
            If a future version of this site uses your browser&rsquo;s local storage for a
            convenience feature (such as remembering a preferred theme), that data stays on your
            device, is never transmitted anywhere, and is never visible to the site&rsquo;s authors.
            This policy will be updated to describe any such feature before it ships.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Children&rsquo;s privacy</h2>
          <p className={styles.body}>
            Because Kidsense is also written for teen readers, we want to be explicit: this site
            collects no personal information from visitors of any age, including children and
            teenagers. There is nothing to opt out of, because nothing is collected in the first
            place.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Hosting</h2>
          <p className={styles.body}>
            This site is hosted as a static web app on Microsoft Azure. Azure&rsquo;s hosting
            infrastructure may log standard, aggregate web server information (such as request
            counts) for operating the service, independent of and not controlled by this
            project&rsquo;s own code.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Questions or corrections</h2>
          <p className={styles.body}>
            If you have a question about this policy, please open an issue in this project&rsquo;s
            source repository.
          </p>
        </section>
      </div>
    </div>
  );
}
