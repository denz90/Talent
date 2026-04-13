import React from 'react';
import { ArrowLeft } from 'lucide-react';

const LoginPage = ({ onBack, onSignupClick }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-[440px] w-full bg-white rounded-sm shadow-sm p-10 relative">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-6 right-6 flex items-center gap-1.5 text-slate-400 hover:text-brand-primary transition-colors text-[13px] font-bold uppercase tracking-wider bg-slate-50 px-3 py-1.5 rounded-sm border border-slate-100"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-white shadow-lg">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
              <path d="M12,2C6.47,2,2,6.47,2,12s4.47,10,10,10,10-4.47,10-10S17.53,2,12,2ZM12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8,8,3.59,8,8-3.59,8-8,8ZM13,7h-2v2h2v-2ZM13,11h-2v6h2v-6Z" />
            </svg>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 font-medium text-sm">Sign in to continue your AI journey</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onBack && onBack('dashboard'); }}>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-primary/30 focus:ring-4 focus:ring-brand-primary/5 transition-all font-medium text-slate-900 placeholder:text-slate-300"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Password</label>
              <button className="text-[12px] font-bold text-brand-primary hover:underline">Forgot Password?</button>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-primary/30 focus:ring-4 focus:ring-brand-primary/5 transition-all font-medium text-slate-900 placeholder:text-slate-300 text-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-brand-dark text-white font-bold py-5 rounded-sm hover:bg-brand-primary transition-all shadow-lg shadow-brand-dark/20 mt-4 active:scale-[0.98]">
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-slate-500 font-medium text-sm">
            Don't have an account? {' '}
            <button
              onClick={onSignupClick}
              className="text-brand-primary font-bold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
