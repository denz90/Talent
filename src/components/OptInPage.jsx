import React, { useState, useRef } from 'react';
import {
  ArrowLeft,
  Mail,
  Building,
  User,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Clock,
  BookOpen,
  Zap,
  Loader2,
  FileText,
  ShieldCheck,
  Send
} from 'lucide-react';
import { API_BASE_URL, CLOUDFLARE_SITE_KEY } from '../config';
import TurnstileWidget from './TurnstileWidget';

export default function OptInPage({ onBack, onNavigateHome, onNavigateCourses }) {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    experience_level: 'BEGINNER', // Must be "BEGINNER" or "ADVANCED"
  });

  // Turnstile token & verification state
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileRef = useRef(null);

  // Submission & Response State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [successResponse, setSuccessResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleLevelSelect = (level) => {
    setFormData((prev) => ({ ...prev, experience_level: level }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsRateLimited(false);

    // Frontend validations
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.organization.trim()) {
      setErrorMessage('Please enter your organization or school name.');
      return;
    }
    if (formData.experience_level !== 'BEGINNER' && formData.experience_level !== 'ADVANCED') {
      setErrorMessage('Experience level must be BEGINNER or ADVANCED.');
      return;
    }

    // Check Cloudflare Turnstile token
    // Grab either from state or query DOM for hidden input cf-turnstile-response injected by widget
    const formEl = e.target;
    const tokenFromInput =
      formEl.querySelector('[name="cf-turnstile-response"]')?.value ||
      formEl.querySelector('input[type="hidden"]')?.value ||
      turnstileRef.current?.getResponse();

    const activeToken = turnstileToken || tokenFromInput;

    if (!activeToken) {
      setErrorMessage('Please complete the Cloudflare security verification before submitting.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      organization: formData.organization.trim(),
      experience_level: formData.experience_level,
      cf_turnstile_response: activeToken,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/opt-in`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Handle 429 Too Many Requests (5 requests per minute per IP rate limit)
      if (response.status === 429) {
        setIsRateLimited(true);
        const rateLimitMsg = 'Too many attempts. Please wait a minute and try again.';
        setErrorMessage(rateLimitMsg);
        turnstileRef.current?.reset();
        setTurnstileToken('');
        return;
      }

      const data = await response.json().catch(() => ({}));

      // Handle 201 Created (Success)
      if (response.status === 201 || response.ok) {
        setSuccessResponse({
          message:
            data.message ||
            `Successfully opted in! Your ${
              data.lead_magnet ||
              (formData.experience_level === 'BEGINNER'
                ? 'Education_Starter_Pack'
                : 'Education_Deeper_Pack')
            } is on its way to your email.`,
          lead_magnet:
            data.lead_magnet ||
            (formData.experience_level === 'BEGINNER'
              ? 'Education_Starter_Pack'
              : 'Education_Deeper_Pack'),
          delivery_id: data.delivery_id || 1,
          status: data.status || 'PENDING',
          email: formData.email.trim(),
        });
        return;
      }

      // Handle 400 Bad Request or other errors
      let detailMessage = 'Failed to submit opt-in. Please try again.';
      if (typeof data.detail === 'string') {
        detailMessage = data.detail;
      } else if (Array.isArray(data.detail)) {
        detailMessage = data.detail.map((err) => err?.msg || JSON.stringify(err)).join(', ');
      }

      setErrorMessage(detailMessage);
      // Reset Turnstile on verification error so user can re-verify
      turnstileRef.current?.reset();
      setTurnstileToken('');
    } catch (err) {
      console.error('Opt-in request error:', err);
      setErrorMessage(err.message || 'An unexpected network error occurred. Please try again.');
      turnstileRef.current?.reset();
      setTurnstileToken('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSuccessResponse(null);
    setErrorMessage('');
    setIsRateLimited(false);
    setTurnstileToken('');
    turnstileRef.current?.reset();
    setFormData({
      name: '',
      email: '',
      organization: '',
      experience_level: 'BEGINNER',
    });
  };

  return (
    <div className="min-h-screen bg-site-bg text-site-text transition-colors duration-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Top Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => (onBack ? onBack() : onNavigateHome ? onNavigateHome() : null)}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-site-text/80 hover:text-site-text bg-site-bg border border-site-accent hover:border-site-primary transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-site-primary bg-site-primary/10 border border-site-primary/30 px-3 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant PDF Pack Delivery</span>
          </div>
        </div>

        {/* SUCCESS VIEW */}
        {successResponse ? (
          <div className="bg-site-bg border border-site-accent rounded-3xl p-6 sm:p-10 shadow-2xl animate-in fade-in zoom-in-95 duration-300 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/10 border-2 border-emerald-500/30 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-site-text tracking-tight mb-3">
              Check Your Inbox!
            </h1>

            <p className="text-base sm:text-lg font-medium text-site-text/80 max-w-xl mx-auto mb-8 leading-relaxed">
              {successResponse.message}
            </p>

            {/* Delivery Info Card */}
            <div className="max-w-md mx-auto bg-site-primary/5 border border-site-accent/70 rounded-2xl p-5 mb-8 text-left space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-site-accent/60">
                <span className="text-xs font-semibold text-site-text/60">Lead Magnet</span>
                <span className="text-xs font-extrabold text-site-primary flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  {successResponse.lead_magnet.replace(/_/g, ' ')}
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-site-accent/60">
                <span className="text-xs font-semibold text-site-text/60">Recipient</span>
                <span className="text-xs font-bold text-site-text truncate max-w-[200px]">
                  {successResponse.email}
                </span>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-site-accent/60">
                <span className="text-xs font-semibold text-site-text/60">Delivery ID</span>
                <span className="text-xs font-mono font-bold text-site-text/80">
                  #{successResponse.delivery_id}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-site-text/60">Status</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                  <Clock className="w-3 h-3 animate-pulse" />
                  {successResponse.status}
                </span>
              </div>
            </div>

            <p className="text-xs text-site-text/60 max-w-md mx-auto mb-8">
              Tip: If you do not see the email within 2 minutes, check your spam or promotions folder.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => (onNavigateCourses ? onNavigateCourses() : onNavigateHome ? onNavigateHome() : null)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm bg-site-primary text-site-bg hover:opacity-90 active:scale-98 transition-all cursor-pointer shadow-md"
              >
                Explore Interactive Courses
              </button>
              <button
                onClick={handleResetForm}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-site-bg border border-site-accent text-site-text/80 hover:text-site-text hover:bg-site-accent/20 transition-all cursor-pointer"
              >
                Send Another Pack
              </button>
            </div>
          </div>
        ) : (
          /* FORM VIEW */
          <div className="bg-site-bg border border-site-accent rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-site-text mb-3">
                Get Your Free AI Educational Pack
              </h1>
              <p className="text-sm sm:text-base font-medium text-site-text/70 leading-relaxed">
                Whether you are starting from zero or orchestrating advanced automated workflows,
                we will email you the tailored PDF guide based on your experience level.
              </p>
            </div>

            {/* Error / Rate Limit Alert */}
            {errorMessage && (
              <div
                role="alert"
                className={`mb-6 p-4 rounded-2xl border text-sm font-semibold flex items-start gap-3 animate-in fade-in duration-200 ${
                  isRateLimited
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-500'
                    : 'bg-rose-500/10 border-rose-500/30 text-rose-500'
                }`}
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-bold">{isRateLimited ? 'Rate Limit Exceeded' : 'Submission Error'}</p>
                  <p className="text-xs font-normal mt-0.5">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="lead-name" className="block text-xs font-bold uppercase tracking-wider text-site-text/80 mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-site-text/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="lead-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ama Mensah"
                      className="w-full pl-10 pr-4 py-3 bg-site-bg border border-site-accent rounded-xl text-sm text-site-text placeholder:text-site-text/30 focus:outline-none focus:border-site-primary focus:ring-2 focus:ring-site-primary/20 transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lead-email" className="block text-xs font-bold uppercase tracking-wider text-site-text/80 mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-site-text/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ama@organization.com"
                      className="w-full pl-10 pr-4 py-3 bg-site-bg border border-site-accent rounded-xl text-sm text-site-text placeholder:text-site-text/30 focus:outline-none focus:border-site-primary focus:ring-2 focus:ring-site-primary/20 transition-all font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Organization */}
              <div>
                <label htmlFor="lead-org" className="block text-xs font-bold uppercase tracking-wider text-site-text/80 mb-2">
                  Organization / School / Company <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-site-text/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="lead-org"
                    name="organization"
                    type="text"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="TechCorp Ltd or Talent Academy"
                    className="w-full pl-10 pr-4 py-3 bg-site-bg border border-site-accent rounded-xl text-sm text-site-text placeholder:text-site-text/30 focus:outline-none focus:border-site-primary focus:ring-2 focus:ring-site-primary/20 transition-all font-medium"
                  />
                </div>
              </div>

              {/* Row 3: Experience Level Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-site-text/80 mb-2.5">
                  Select Your Experience Level <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* BEGINNER OPTION */}
                  <div
                    onClick={() => handleLevelSelect('BEGINNER')}
                    className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.experience_level === 'BEGINNER'
                        ? 'border-site-primary bg-site-primary/10 shadow-md'
                        : 'border-site-accent bg-site-bg hover:border-site-accent/90 hover:bg-site-accent/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-site-primary" />
                        <span className="font-extrabold text-sm sm:text-base text-site-text">Beginner</span>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-site-primary/20 text-site-primary">
                        Starter Pack
                      </span>
                    </div>
                    <p className="text-xs text-site-text/70 leading-relaxed">
                      Designed for newcomers. Includes the CRAFT prompting blueprint, essential AI tools, and 20-minute daily exercises.
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-site-primary">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Deliver: Education_Starter_Pack</span>
                    </div>
                  </div>

                  {/* ADVANCED OPTION */}
                  <div
                    onClick={() => handleLevelSelect('ADVANCED')}
                    className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.experience_level === 'ADVANCED'
                        ? 'border-site-primary bg-site-primary/10 shadow-md'
                        : 'border-site-accent bg-site-bg hover:border-site-accent/90 hover:bg-site-accent/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-site-primary" />
                        <span className="font-extrabold text-sm sm:text-base text-site-text">Advanced</span>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-site-primary/20 text-site-primary">
                        Deeper Pack
                      </span>
                    </div>
                    <p className="text-xs text-site-text/70 leading-relaxed">
                      For professionals building systems. Includes chained multi-step reasoning, tool chaining, and automated pipelines.
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-site-primary">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Deliver: Education_Deeper_Pack</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bot Protection (Cloudflare Turnstile) */}
              <div className="pt-2">
                <div className="flex items-center justify-between mb-1.5 px-1">
                  <span className="text-[11px] font-semibold text-site-text/70 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-site-primary" />
                    Security Verification (Cloudflare Turnstile)
                  </span>
                  {turnstileToken ? (
                    <span className="text-[11px] font-bold text-emerald-500 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  ) : (
                    <span className="text-[11px] text-site-text/50">Required to enable submit</span>
                  )}
                </div>

                <TurnstileWidget
                  ref={turnstileRef}
                  siteKey={CLOUDFLARE_SITE_KEY}
                  onVerify={(token) => {
                    setTurnstileToken(token);
                    if (errorMessage) setErrorMessage('');
                  }}
                  onExpire={() => {
                    setTurnstileToken('');
                  }}
                  onError={(err) => {
                    setTurnstileToken('');
                    console.warn('Turnstile challenge failed:', err);
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!turnstileToken || isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg ${
                    !turnstileToken || isSubmitting
                      ? 'bg-site-accent/70 text-site-text/40 cursor-not-allowed shadow-none'
                      : 'bg-site-primary text-site-bg hover:opacity-90 active:scale-98 shadow-site-primary/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending Educational Pack...</span>
                    </>
                  ) : !turnstileToken ? (
                    <>
                      <ShieldCheck className="w-5 h-5" />
                      <span>Verify Security Challenge to Continue</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>
                        Email Me the {formData.experience_level === 'BEGINNER' ? 'Starter' : 'Deeper'} Pack
                      </span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-site-text/50 pt-1">
                We respect your privacy. No spam — only the requested educational guide and course updates.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

