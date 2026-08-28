import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { LocaleProvider } from './i18n/LocaleProvider';
import './styles/global.css';
import { applyTheme, getStoredTheme } from './utils/theme';
import { applyLocale, getInitialLocale } from './utils/locale';

// Applied before the first render so a returning visitor's explicit theme/language choice doesn't flash.
applyTheme(getStoredTheme());
applyLocale(getInitialLocale());

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element #root was not found in index.html.');
}

createRoot(container).render(
  <StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </StrictMode>,
);
