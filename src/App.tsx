import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Layout } from './components/Layout/Layout';
import { DisclaimerPage } from './pages/DisclaimerPage/DisclaimerPage';
import { HomePage } from './pages/HomePage/HomePage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { PrivacyPage } from './pages/PrivacyPage/PrivacyPage';
import { SectionPage } from './pages/SectionPage/SectionPage';
import { SourcesPage } from './pages/SourcesPage/SourcesPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage/TermsOfUsePage';
import { TopicPage } from './pages/TopicPage/TopicPage';

export function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/section/:sectionId" element={<SectionPage />} />
            <Route path="/section/:sectionId/:topicId" element={<TopicPage />} />
            <Route path="/section/:sectionId/:topicId/:ageBandId" element={<TopicPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/sources" element={<SourcesPage />} />
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}
