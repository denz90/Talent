import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Defer non-critical analytics to idle time to avoid consuming critical path bandwidth
const initAnalytics = () => {
  import('smartlook-client')
    .then(({ default: Smartlook }) => {
      Smartlook.init('ea742f720315df03362c8d8b51bf0975f9d13f0a');
    })
    .catch((err) => {
      console.debug('Smartlook initialization skipped:', err);
    });
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(initAnalytics, { timeout: 3000 });
  } else {
    window.addEventListener('load', () => setTimeout(initAnalytics, 1500));
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)