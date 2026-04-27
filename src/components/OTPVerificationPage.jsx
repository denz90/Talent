import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

//importing the API base URL from config
import { API_BASE_URL } from '../config';

const OTPVerificationPage = ({ email, onSuccess, onBack }) => {
  const [otpCode, setOtpCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email, 
          otp_code: otpCode 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || 'Invalid OTP code');
      }

      // Success! The backend marked is_verified = True
      alert("Email verified! You can now log in.");
      onSuccess(); // Triggers the parent to switch to the Login view

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-[440px] w-full bg-white rounded-sm shadow-sm p-10 relative text-center">
        
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-1.5 text-slate-400 hover:text-brand-primary transition-colors text-[13px] font-bold uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="mb-8 mt-4">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Check Your Email</h1>
          <p className="text-slate-500 text-sm">
            We sent a secure code to <br/>
            <span className="font-bold text-slate-800">{email}</span>
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 text-red-700 text-sm font-medium rounded-sm border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
             <input 
              type="text" 
              maxLength="6"
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))} // Only allow numbers
              placeholder="000000"
              className="w-full text-center tracking-[0.5em] text-3xl px-5 py-4 bg-slate-50 border border-slate-200 rounded-sm focus:outline-none focus:border-brand-primary/50 transition-all text-slate-900"
              required
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading || otpCode.length < 6}
            className={`w-full bg-brand-dark text-white font-bold py-4 rounded-sm transition-all shadow-lg 
              ${(isLoading || otpCode.length < 6) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-slate-800 active:scale-[0.98]'}`}
          >
            {isLoading ? 'Verifying...' : 'Verify Account'}
          </button>
        </form>

        <div className="mt-8 text-sm text-slate-500">
          Didn't get the email? <br/>
          (Check your terminal for the simulated code!)
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationPage;