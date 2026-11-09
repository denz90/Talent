// Backend API Base URL
export const API_BASE_URL =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE_URL) ||
  "https://educational-platform-backend-86py.onrender.com";
// Local alternative: "http://localhost:8003";

// Cloudflare Turnstile Site Key:
// Standard Cloudflare test site key "1x00000000000000000000AA" always passes verification.
// In production, set VITE_CLOUDFLARE_SITE_KEY in your environment or update below.
export const CLOUDFLARE_SITE_KEY =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_CLOUDFLARE_SITE_KEY) ||
  "1x00000000000000000000AA";
