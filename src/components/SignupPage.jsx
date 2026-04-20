import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

// Added onRequireOTP prop so the parent component knows to switch to the OTP screen
const SignupPage = ({ onBack, onLoginClick, onRequireOTP }) => {
  // 1. Setup state for form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  // 2. Setup state for UI feedback
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. The actual API Request function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Frontend validation
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    setIsLoading(true);

    try {
      // Point this to your FastAPI backend URL (adjust if hosted elsewhere)
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.fullName, // Mapping Full Name to your backend's expected 'username'
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle FastAPI HTTPExceptions (e.g., "Email already registered")
        throw new Error(data.detail || 'Failed to register');
      }

      // Success! Backend returned {"message": "...", "email": "..."}
      // Pass the email to the parent to render the OTP verification screen
      if (onRequireOTP) {
        onRequireOTP(data.email); 
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Create Your Account</h1>
          <p className="text-slate-500 font-medium text-sm">Start your AI learning journey today</p>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
            <input 
              type="text" 
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-primary/30 focus:ring-4 focus:ring-brand-primary/5 transition-all font-medium text-slate-900 placeholder:text-slate-300"
            />
          </div>

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
            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Password</label>
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

          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-700 uppercase tracking-wide">Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword"
              value={formData.confirmPassword}
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
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-slate-500 font-medium text-sm">
            Already have an account? {' '}
            <button 
              onClick={onLoginClick}
              className="text-brand-primary font-bold hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;