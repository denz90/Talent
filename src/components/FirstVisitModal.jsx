import React, { useState, useEffect, useRef } from 'react';
import { Loader2, CheckCircle2, AlertCircle, X, ShieldCheck, FileText } from 'lucide-react';
import { API_BASE_URL, CLOUDFLARE_SITE_KEY } from '../config';
import TurnstileWidget from './TurnstileWidget';

export const POPUP_STORAGE_KEY = 'site_popup_choice_v1';

export default function FirstVisitModal({ currentUser, onChoiceConfirmed }) {
  const [isOpen, setIsOpen] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('BEGINNER'); // "BEGINNER" or "ADVANCED"

  // Turnstile State
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null);

  // UI State
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const confirmBtnRef = useRef(null);

  // Whenever you visit the site:
  // - If you are logged in (your data is captured and authenticated) -> hide modal.
  // - If you have previously submitted the opt-in modal -> hide modal.
  // - Otherwise -> pop up!
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isLoggedIn = Boolean(currentUser || localStorage.getItem('hawkman_token'));
    const isAlreadyOptedIn = Boolean(localStorage.getItem(POPUP_STORAGE_KEY));
    setIsOpen(!isLoggedIn && !isAlreadyOptedIn);
  }, [currentUser]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Form Validations
    if (!name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!organization.trim()) {
      setErrorMessage('Please enter your organization or school.');
      return;
    }

    if (experienceLevel !== 'BEGINNER' && experienceLevel !== 'ADVANCED') {
      setErrorMessage('Please select a valid experience level.');
      return;
    }

    // Turnstile token validation
    const formEl = e.target;
    const tokenFromInput =
      formEl.querySelector('[name="cf-turnstile-response"]')?.value ||
      turnstileRef.current?.getResponse();

    const activeToken = turnstileToken || tokenFromInput;

    if (!activeToken) {
      setErrorMessage('Please complete the security verification before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // POST to /api/opt-in with exact expected payload
      const response = await fetch(`${API_BASE_URL}/api/opt-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          organization: organization.trim(),
          experience_level: experienceLevel,
          cf_turnstile_response: activeToken,
        }),
      });

      // Handle 429 Too Many Requests
      if (response.status === 429) {
        setErrorMessage('Too many attempts. Please wait a minute and try again.');
        turnstileRef.current?.reset();
        setTurnstileToken('');
        return;
      }

      const data = await response.json().catch(() => ({}));

      // Handle 201 Created (or 200 OK)
      if (response.status === 201 || response.ok) {
        const msg =
          data.message ||
          `Successfully opted in! Your ${
            data.lead_magnet ||
            (experienceLevel === 'BEGINNER' ? 'Education_Starter_Pack' : 'Education_Deeper_Pack')
          } is on its way to your email.`;

        setSuccessMessage(msg);
        setIsSuccess(true);

        const payload = {
          name: name.trim(),
          email: email.trim(),
          organization: organization.trim(),
          experience_level: experienceLevel,
          level: experienceLevel === 'BEGINNER' ? 'Beginner' : 'Advanced',
          lead_magnet: data.lead_magnet,
          delivery_id: data.delivery_id,
          confirmedAt: new Date().toISOString(),
          version: 2,
        };

        // Cache in localStorage so next visit knows user already opted in
        localStorage.setItem(POPUP_STORAGE_KEY, JSON.stringify(payload));

        if (onChoiceConfirmed) {
          onChoiceConfirmed(payload);
        }

        // Close modal after user sees success confirmation
        setTimeout(() => {
          setIsOpen(false);
        }, 2200);
        return;
      }

      // Handle 400 Bad Request or validation errors
      let detailStr = 'Bot verification failed. Please try again.';
      if (typeof data.detail === 'string') {
        detailStr = data.detail;
      } else if (Array.isArray(data.detail)) {
        detailStr = data.detail.map((d) => d?.msg || '').filter(Boolean).join('; ');
      }

      throw new Error(detailStr);
    } catch (err) {
      setErrorMessage(err.message || 'An error occurred. Please try again.');
      setIsSuccess(false);
      turnstileRef.current?.reset();
      setTurnstileToken('');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="opt-in-popup-title"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] w-[calc(100%-2rem)] max-w-[420px] animate-in slide-in-from-bottom-8 fade-in duration-300"
    >
      <div className="relative bg-site-bg text-site-text border border-site-accent rounded-2xl shadow-2xl p-5 sm:p-6 backdrop-blur-md bg-opacity-95">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close form"
          className="absolute top-3.5 right-3.5 p-1 rounded-lg text-site-text/50 hover:text-site-text hover:bg-site-accent/30 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="pr-7 mb-3">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-site-primary/10 text-site-primary text-[10px] font-bold uppercase tracking-wider mb-1.5">
            <FileText size={12} />
            <span>Free Educational Pack</span>
          </div>
          <h2 id="opt-in-popup-title" className="text-sm sm:text-base font-bold text-site-text tracking-tight">
            Get Your Free AI Guide
          </h2>
          <p className="text-xs text-site-text/70 mt-0.5 leading-relaxed">
            Personalized starter or deeper pack delivered straight to your email.
          </p>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div
            role="alert"
            className="mb-2.5 p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-1.5 font-medium animate-in fade-in duration-150"
          >
            <AlertCircle size={14} className="shrink-0" />
            <span className="leading-snug">{errorMessage}</span>
          </div>
        )}

        {/* Success message */}
        {isSuccess && (
          <div
            role="status"
            className="mb-2.5 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs flex flex-col items-center justify-center gap-1 font-semibold animate-in fade-in duration-150 text-center"
          >
            <div className="flex items-center gap-1.5 font-bold">
              <CheckCircle2 size={16} />
              <span>Pack Sent!</span>
            </div>
            <p className="text-[11px] font-normal text-emerald-600 dark:text-emerald-400">
              {successMessage || 'Your educational pack is on its way to your email.'}
            </p>
          </div>
        )}

        {/* Simple Opt-In Form */}
        {!isSuccess && (
          <form onSubmit={handleSubmit} className="space-y-2.5 text-left">
            {/* Full Name */}
            <div>
              <label htmlFor="user-name" className="block text-[11px] font-semibold text-site-text/80 mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="user-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder="e.g. Ama Mensah"
                className="w-full px-3 py-2 bg-site-bg border border-site-accent rounded-lg text-xs text-site-text placeholder-site-text/40 focus:outline-none focus:border-site-primary transition-colors"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="user-email" className="block text-[11px] font-semibold text-site-text/80 mb-1">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="user-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder="e.g. ama@organization.com"
                className="w-full px-3 py-2 bg-site-bg border border-site-accent rounded-lg text-xs text-site-text placeholder-site-text/40 focus:outline-none focus:border-site-primary transition-colors"
              />
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="user-org" className="block text-[11px] font-semibold text-site-text/80 mb-1">
                Organization / School <span className="text-rose-500">*</span>
              </label>
              <input
                id="user-org"
                type="text"
                value={organization}
                onChange={(e) => {
                  setOrganization(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder="e.g. TechCorp Ltd or University"
                className="w-full px-3 py-2 bg-site-bg border border-site-accent rounded-lg text-xs text-site-text placeholder-site-text/40 focus:outline-none focus:border-site-primary transition-colors"
              />
            </div>

            {/* Experience Level Selection */}
            <div>
              <label className="block text-[11px] font-semibold text-site-text/80 mb-1">
                Experience Level <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setExperienceLevel('BEGINNER')}
                  className={`px-2.5 py-2 rounded-lg border text-xs font-bold text-left transition-all cursor-pointer ${
                    experienceLevel === 'BEGINNER'
                      ? 'border-site-primary bg-site-primary/10 text-site-primary'
                      : 'border-site-accent bg-site-bg text-site-text/70 hover:bg-site-accent/20'
                  }`}
                >
                  <div>Beginner</div>
                  <div className="text-[10px] font-normal opacity-70">Starter Pack</div>
                </button>

                <button
                  type="button"
                  onClick={() => setExperienceLevel('ADVANCED')}
                  className={`px-2.5 py-2 rounded-lg border text-xs font-bold text-left transition-all cursor-pointer ${
                    experienceLevel === 'ADVANCED'
                      ? 'border-site-primary bg-site-primary/10 text-site-primary'
                      : 'border-site-accent bg-site-bg text-site-text/70 hover:bg-site-accent/20'
                  }`}
                >
                  <div>Advanced</div>
                  <div className="text-[10px] font-normal opacity-70">Deeper Pack</div>
                </button>
              </div>
            </div>

            {/* Cloudflare Turnstile Widget */}
            <div className="pt-1">
              <TurnstileWidget
                ref={turnstileRef}
                siteKey={CLOUDFLARE_SITE_KEY}
                onVerify={(token) => {
                  setTurnstileToken(token);
                  if (errorMessage) setErrorMessage('');
                }}
                onExpire={() => setTurnstileToken('')}
                onError={() => setTurnstileToken('')}
              />
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                ref={confirmBtnRef}
                type="submit"
                disabled={isSubmitting || !turnstileToken}
                className={`w-full py-2.5 px-3 rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
                  isSubmitting || !turnstileToken
                    ? 'bg-site-accent text-site-text/40 cursor-not-allowed'
                    : 'bg-site-primary text-site-bg hover:opacity-90 active:scale-98'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    <span>Sending Pack...</span>
                  </>
                ) : !turnstileToken ? (
                  <>
                    <ShieldCheck size={14} />
                    <span>Verify Security Challenge</span>
                  </>
                ) : (
                  <span>Send Free {experienceLevel === 'BEGINNER' ? 'Starter' : 'Deeper'} Pack</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </aside>
  );
}
