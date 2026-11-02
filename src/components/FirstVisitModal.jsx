import React, { useState, useEffect, useRef } from 'react';
import { Loader2, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { API_BASE_URL } from '../config';

export const POPUP_STORAGE_KEY = 'site_popup_choice_v1';

export default function FirstVisitModal({ onChoiceConfirmed }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckingDb, setIsCheckingDb] = useState(true);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [track, setTrack] = useState('');
  const [level, setLevel] = useState('');

  // UI State
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const confirmBtnRef = useRef(null);

  // Check if user data is already captured in the backend database.
  // If the stored email is already registered (or user is logged in), hide the modal.
  // Otherwise, always show it.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // If user is already logged in, their data is definitely in the DB
    if (localStorage.getItem('hawkman_token')) {
      setIsOpen(false);
      setIsCheckingDb(false);
      return;
    }

    const checkDatabase = async () => {
      try {
        const stored = localStorage.getItem(POPUP_STORAGE_KEY);
        if (!stored) {
          setIsOpen(true);
          setIsCheckingDb(false);
          return;
        }

        const parsed = JSON.parse(stored);
        const storedEmail = parsed?.email;

        if (!storedEmail) {
          setIsOpen(true);
          setIsCheckingDb(false);
          return;
        }

        // Verify the email exists in the DB by attempting registration.
        // A non-200 with "already" confirms data is captured.
        const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: parsed.name || 'Visitor',
            email: storedEmail,
            password: 'VerifyPassword123!#',
          }),
        });

        const data = await res.json().catch(() => ({}));
        const detailStr = typeof data.detail === 'string'
          ? data.detail
          : Array.isArray(data.detail)
            ? data.detail.map((d) => d?.msg || '').join(' ')
            : '';

        if (!res.ok && detailStr.toLowerCase().includes('already')) {
          // Email is already registered → data IS captured → hide modal
          setIsOpen(false);
        } else {
          // Email was NOT in DB or unrecognized error → show modal
          localStorage.removeItem(POPUP_STORAGE_KEY);
          setIsOpen(true);
        }
      } catch {
        // Network error → show modal to be safe
        setIsOpen(true);
      } finally {
        setIsCheckingDb(false);
      }
    };

    checkDatabase();
  }, []);

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

    if (!track) {
      setErrorMessage('Please select a learning track.');
      return;
    }

    if (!level) {
      setErrorMessage('Please select your experience level.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Register user in the backend database.
      // Backend requires password with: >=8 chars, 1 uppercase, 1 number, 1 special char.
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: name.trim(),
          email: email.trim(),
          password: 'TalentUser2026!#',
        }),
      });

      const data = await response.json().catch(() => ({}));

      // Safely extract detail whether it's a string, an array of validation errors, or missing
      const detailStr = typeof data.detail === 'string'
        ? data.detail
        : Array.isArray(data.detail)
          ? data.detail.map((d) => d?.msg || '').join('; ')
          : '';

      // Treat "already registered" as success (data IS already captured in the database)
      const alreadyRegistered =
        !response.ok &&
        detailStr.toLowerCase().includes('already');

      if (!response.ok && !alreadyRegistered) {
        throw new Error(detailStr || 'Registration failed. Please try again.');
      }

      const payload = {
        name: name.trim(),
        email: email.trim(),
        track,
        level,
        confirmedAt: new Date().toISOString(),
        version: 1,
      };

      // Cache in localStorage so next visit can verify quickly
      localStorage.setItem(POPUP_STORAGE_KEY, JSON.stringify(payload));

      setIsSuccess(true);

      if (onChoiceConfirmed) {
        onChoiceConfirmed(payload);
      }

      // Close modal smoothly
      setTimeout(() => {
        setIsOpen(false);
      }, 700);
    } catch (err) {
      setErrorMessage(err.message || 'An error occurred. Please try again.');
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCheckingDb || !isOpen) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-modal="false"
      aria-labelledby="small-popup-title"
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
        <div className="pr-7 mb-4">
          <h2 id="small-popup-title" className="text-sm sm:text-base font-bold text-site-text tracking-tight">
            Welcome to Talent Oasis
          </h2>
          <p className="text-xs text-site-text/70 mt-1">
            Quick setup for your learning preferences.
          </p>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div
            role="alert"
            className="mb-2.5 p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-1.5 font-medium animate-in fade-in duration-150"
          >
            <AlertCircle size={14} className="shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Success message */}
        {isSuccess && (
          <div
            role="status"
            className="mb-2.5 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs flex items-center justify-center gap-1.5 font-semibold animate-in fade-in duration-150"
          >
            <CheckCircle2 size={14} />
            <span>Preferences saved!</span>
          </div>
        )}

        {/* Compact Simple Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
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
              className="w-full px-3 py-2.5 bg-site-bg border border-site-accent rounded-lg text-xs text-site-text placeholder-site-text/40 focus:outline-none focus:border-site-primary transition-colors"
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
              className="w-full px-3 py-2.5 bg-site-bg border border-site-accent rounded-lg text-xs text-site-text placeholder-site-text/40 focus:outline-none focus:border-site-primary transition-colors"
            />
          </div>

          {/* Track & Level (2 columns) */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="user-track" className="block text-[11px] font-semibold text-site-text/80 mb-1">
                Track <span className="text-rose-500">*</span>
              </label>
              <select
                id="user-track"
                value={track}
                onChange={(e) => {
                  setTrack(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                className="w-full px-2 py-2.5 bg-site-bg border border-site-accent rounded-lg text-xs text-site-text focus:outline-none focus:border-site-primary transition-colors cursor-pointer truncate"
              >
                <option value="" className="bg-site-bg text-site-text">Track...</option>
                <option value="AI for Educators" className="bg-site-bg text-site-text">Educators</option>
                <option value="AI for Designers" className="bg-site-bg text-site-text">Designers</option>
                <option value="AI for Developers" className="bg-site-bg text-site-text">Developers</option>
                <option value="AI for Content Creators" className="bg-site-bg text-site-text">Content</option>
              </select>
            </div>

            <div>
              <label htmlFor="user-level" className="block text-[11px] font-semibold text-site-text/80 mb-1">
                Level <span className="text-rose-500">*</span>
              </label>
              <select
                id="user-level"
                value={level}
                onChange={(e) => {
                  setLevel(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                className="w-full px-2 py-2.5 bg-site-bg border border-site-accent rounded-lg text-xs text-site-text focus:outline-none focus:border-site-primary transition-colors cursor-pointer truncate"
              >
                <option value="" className="bg-site-bg text-site-text">Level...</option>
                <option value="Beginner" className="bg-site-bg text-site-text">Beginner</option>
                <option value="Intermediate" className="bg-site-bg text-site-text">Intermediate</option>
                <option value="Advanced" className="bg-site-bg text-site-text">Advanced</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              ref={confirmBtnRef}
              type="submit"
              disabled={isSubmitting || isSuccess}
              className={`w-full py-3 px-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm ${
                isSubmitting || isSuccess
                  ? 'bg-site-accent text-site-text/50 cursor-not-allowed'
                  : 'bg-site-primary text-site-bg hover:opacity-90 active:scale-98'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>Saving...</span>
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 size={14} />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Continue</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
}
