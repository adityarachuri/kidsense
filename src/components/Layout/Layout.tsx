import { Outlet } from 'react-router-dom';
import { useLocale } from '../../hooks/useLocale';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export function Layout() {
  const { t } = useLocale();
  return (
    <>
      <a href="#main-content" className="skip-link">
        {t((d) => d.common.skipToMainContent)}
      </a>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
