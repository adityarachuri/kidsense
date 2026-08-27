import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import styles from '../legalPage.module.css';

export function TermsOfUsePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.crumbWrap}>
        <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Terms of Use' }]} />
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>Terms of Use</h1>
        <p className={styles.updated}>Last updated: 2026</p>

        <p className={styles.lede}>
          This is a free, non-commercial educational reference. By using this site, you agree to the
          terms below.
        </p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What this site is</h2>
          <p className={styles.body}>
            Kidsense is a static, publicly accessible reference site explaining common child and
            adolescent development topics for parents, teachers, psychologists, pediatricians, and
            teens. It has no user accounts, no backend service, and does not process payments or
            personal data submissions of any kind.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>No warranty</h2>
          <p className={styles.body}>
            Content is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranty
            of any kind, express or implied, including without limitation warranties of accuracy,
            completeness, fitness for a particular purpose, or non-infringement. See the{' '}
            <Link to="/disclaimer">Disclaimer</Link> for the specific medical and psychological
            limitations of this content.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Limitation of liability</h2>
          <p className={styles.body}>
            To the fullest extent permitted by applicable law, the authors and contributors of
            Kidsense are not liable for any direct, indirect, incidental, or consequential damages
            arising from your use of, or reliance on, this site&rsquo;s content.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Intellectual property</h2>
          <p className={styles.body}>
            The site&rsquo;s software (source code, components, build tooling) is licensed under the
            terms in its <code>LICENSE</code> file. The written content and illustrations are an
            original compilation described in <Link to="/sources">Sources &amp; Methodology</Link>{' '}
            and licensed under the terms in <code>CONTENT_LICENSE.md</code> in the project
            repository. Both licenses permit free personal, educational, and non-commercial reuse
            with attribution; see those files for exact terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Acceptable use</h2>
          <ul className={styles.list}>
            <li>Do not misrepresent this content as individualized professional advice.</li>
            <li>
              Do not remove attribution when republishing or adapting content under the content
              license.
            </li>
            <li>
              Do not use automated means to disrupt, overload, or scrape this site at a rate that
              degrades it for other users.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to these terms</h2>
          <p className={styles.body}>
            These terms may be updated as the site evolves. Continued use of the site after a change
            constitutes acceptance of the revised terms. Material changes will be reflected in the
            project&rsquo;s changelog.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>A note on legal formality</h2>
          <p className={styles.body}>
            This is an independent educational project, not a registered legal entity. These terms
            are written in good faith to be clear and fair, but they have not been drafted or
            reviewed by a lawyer. If this site is ever used commercially or at scale, these terms
            should be reviewed by qualified legal counsel before that happens.
          </p>
        </section>
      </div>
    </div>
  );
}
