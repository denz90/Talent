import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

//importing the API base URL from config
import { API_BASE_URL } from '../config';

// Notice we changed onBack('dashboard') to a new prop: onLoginSuccess
const LoginPage = ({ onBack, onSignupClick, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // 1. Get the Token
      const loginResponse = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const loginData = await loginResponse.json();

      if (!loginResponse.ok) {
        throw new Error(loginData.detail || 'Login failed');
      }

      // Save the VIP pass to the browser
      const token = loginData.access_token;
      localStorage.setItem('hawkman_token', token);

      // 2. Fetch the User Profile so we know who just logged in
      const profileResponse = await fetch(`${API_BASE_URL}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const profileData = await profileResponse.json();

      if (!profileResponse.ok) {
        throw new Error('Failed to fetch user profile');
      }

      // 3. Send the user data back up to App.jsx and change the screen!
      if (onLoginSuccess) {
        onLoginSuccess(profileData); 
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-[440px] w-full bg-white rounded-sm shadow-sm p-10 relative">
        {/* Back Button */}
        <button
          onClick={() => onBack('home')}
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 font-medium text-sm">Sign in to continue your AI journey</p>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-primary/30 focus:ring-4 focus:ring-brand-primary/5 transition-all font-medium text-slate-900 placeholder:text-slate-300"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Password</label>
              <button type="button" className="text-[12px] font-bold text-brand-primary hover:underline">Forgot Password?</button>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-primary/30 focus:ring-4 focus:ring-brand-primary/5 transition-all font-medium text-slate-900 placeholder:text-slate-300 text-lg"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-brand-dark text-white font-bold py-5 rounded-sm transition-all shadow-lg shadow-brand-dark/20 mt-4 
              ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-primary active:scale-[0.98]'}`}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
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