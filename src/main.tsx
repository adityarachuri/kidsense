import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './styles/global.css';
import { applyTheme, getStoredTheme } from './utils/theme';

// Applied before the first render so a returning visitor's explicit theme choice doesn't flash.
applyTheme(getStoredTheme());

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element #root was not found in index.html.');
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
