import React from 'react';
import { Sparkles } from 'lucide-react';

// Notice we added currentUser and onLogout to the props here
const Navbar = ({ onSignup, onLogin, onLogout, onLogoClick, onNavClick, currentUser }) => {
  const navItems = [
    { id: 'tools', label: 'Tools' },
    { id: 'courses', label: 'Courses' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (onLogoClick) {
              e.preventDefault();
              onLogoClick();
            }
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <Sparkles className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-black tracking-tight">
            Talent Oasis
          </span>
        </a>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                if (onNavClick) {
                  e.preventDefault();
                  onNavClick(item.id);
                }
              }}
              className="text-[13px] font-medium text-slate-500 hover:text-black transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Actions (This is the part that changed!) */}
        <div className="flex items-center gap-8">
          {currentUser ? (
            // User IS logged in: Show their name and a Sign Out button
            <div className="flex items-center gap-6">
              <span className="text-[13px] font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full tracking-wide">
                {currentUser.username}
              </span>
              <button
                onClick={onLogout}
                className="text-[13px] font-bold text-slate-500 hover:text-black transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            // User is NOT logged in: Show the original Sign In / Get Started buttons
            <>
              <button
                onClick={onLogin}
                className="text-[13px] font-bold text-slate-600 hover:text-black transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={onSignup}
                className="bg-black text-white px-6 py-2.5 rounded-sm text-[13px] font-bold hover:bg-zinc-800 transition-all uppercase tracking-tight">
                Get Started
              </button>
            </>
          )}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;