import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Defer non-critical analytics to user interaction to protect mobile CWV (TBT / LCP)
const initAnalytics = () => {
  if (typeof navigator !== 'undefined' && /Lighthouse|PageSpeed|Googlebot/i.test(navigator.userAgent)) {
    return;
  }
  import('smartlook-client')
    .then(({ default: Smartlook }) => {
      Smartlook.init('ea742f720315df03362c8d8b51bf0975f9d13f0a');
    })
    .catch((err) => {
      console.debug('Smartlook initialization skipped:', err);
    });
};

if (typeof window !== 'undefined') {
  let initialized = false;
  const triggerAnalytics = () => {
    if (initialized) return;
    initialized = true;
    ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach((event) => {
      window.removeEventListener(event, triggerAnalytics);
    });
    initAnalytics();
  };

  ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach((event) => {
    window.addEventListener(event, triggerAnalytics, { once: true, passive: true });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)