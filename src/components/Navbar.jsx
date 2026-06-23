import React, { useState, useEffect } from 'react';
import { Sparkles, LayoutDashboard, LogOut, Menu, X } from 'lucide-react';

const Navbar = ({ onSignup, onLogin, onLogout, onLogoClick, onNavClick, currentUser, onDashboard }) => {
  // 1. Initialize theme state from localStorage, defaulting to 'timeless'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('site-theme') || 'timeless';
    }
    return 'timeless';
  });

  // Mobile menu open state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Automatically sync the state change directly to the html tag and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
  }, [theme]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { id: 'tools', label: 'Tools' },
    { id: 'courses', label: 'Courses' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-site-bg/80 backdrop-blur-md border-b border-site-accent py-4 transition-colors duration-300">
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
          <div className="w-8 h-8 bg-site-primary rounded flex items-center justify-center">
            <Sparkles className="text-site-text w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-site-text tracking-tight">
            Talent Oasis
          </span>
        </a>

        {/* Center Navigation - Hidden on Mobile */}
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
              className="text-[13px] font-medium text-site-text/80 hover:text-site-text transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Theme Picker Dropdown Menu - Hidden on Mobile */}
        <div className="relative group hidden md:block">
          <button className="text-[13px] font-medium text-site-text/80 hover:text-site-text transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer">
            🎨 Theme
          </button>

          <div
            className="
              absolute left-0 top-full mt-2
              flex gap-3
              bg-site-bg border border-site-accent shadow-xl rounded-full
              px-4 py-2 z-50
              opacity-0 invisible
              group-hover:opacity-100
              group-hover:visible
              transition-all duration-200
            "
          >
            {/* Button 1: Timeless Retro */}
            <button 
              onClick={() => setTheme('timeless')}
              className={`w-5 h-5 rounded-full bg-[#2075A7] border-2 cursor-pointer transition-transform hover:scale-125 ${
                theme === 'timeless' ? 'border-slate-900 scale-110' : 'border-transparent'
              }`}
              title="Timeless Retro"
            />
            {/* Button 2: Coastal Retro */}
            <button 
              onClick={() => setTheme('coastal')}
              className={`w-5 h-5 rounded-full bg-[#74A8A4] border-2 cursor-pointer transition-transform hover:scale-125 ${
                theme === 'coastal' ? 'border-slate-900 scale-110' : 'border-transparent'
              }`}
              title="Coastal Retro"
            />
            {/* Button 3: Tranquil Sky */}
            <button 
              onClick={() => setTheme('tranquil')}
              className={`w-5 h-5 rounded-full bg-[#B7C9E6] border-2 cursor-pointer transition-transform hover:scale-125 ${
                theme === 'tranquil' ? 'border-slate-900 scale-110' : 'border-transparent'
              }`}
              title="Tranquil Sky"
            />
          </div>
        </div>

        {/* Right Actions - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8">
          {currentUser ? (
            // User IS logged in: Show their name and a Sign Out button
            <div className="flex items-center gap-5">
              {/* User profile (e.g. A Adam) */}
              <div className="flex items-center gap-2">
                {/* Avatar: show uploaded photo if saved, else show initial */}
                {(() => {
                  const savedImg = localStorage.getItem('hawkman_profile_image');
                  return savedImg ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-site-accent flex-shrink-0 shadow-sm">
                      <img src={savedImg} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-site-primary flex items-center justify-center text-site-text text-[13px] font-bold shadow-sm select-none">
                      {currentUser.username ? currentUser.username.charAt(0).toUpperCase() : 'U'}
                    </div>
                  );
                })()}
                <span className="text-[14px] font-bold text-site-text tracking-tight">
                  {currentUser.username}
                </span>
              </div>

              {/* Dashboard Button */}
              <button
                onClick={onDashboard}
                className="bg-site-bg hover:bg-site-bg border border-site-accent/80 px-4 py-2 rounded-xl text-[13px] font-bold text-site-text hover:text-site-text flex items-center gap-2 transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <LayoutDashboard className="w-4 h-4 text-site-text/80" />
                <span>Dashboard</span>
              </button>

              {/* Red Sign Out Button */}
              <button
                onClick={onLogout}
                className="p-2 text-rose-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all active:scale-95 cursor-pointer"
                title="Sign Out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            // User is NOT logged in: Show the original Sign In / Get Started buttons
            <>
              <button
                onClick={onLogin}
                className="text-[13px] font-bold text-site-text/80 hover:text-site-text transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={onSignup}
                className="bg-site-primary text-site-text px-6 py-2.5 rounded-sm text-[13px] font-bold hover:bg-site-primary/80 transition-all uppercase tracking-tight">
                Get Started
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-site-text/80 hover:text-site-text transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 bottom-0 top-[73px] z-50 bg-site-bg border-t border-site-accent flex flex-col p-6 animate-fade-in overflow-y-auto">
          {/* Navigation Links */}
          <div className="flex flex-col gap-6 mb-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (onNavClick) {
                    e.preventDefault();
                    onNavClick(item.id);
                  }
                }}
                className="text-lg font-bold text-site-text/80 hover:text-site-text transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Theme Selector */}
          <div className="mb-8 border-t border-site-accent/50 pt-6">
            <p className="text-[11px] font-bold text-site-text/50 uppercase tracking-widest mb-4">🎨 Change Theme</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setTheme('timeless')}
                className={`w-8 h-8 rounded-full bg-[#2075A7] border-2 cursor-pointer transition-transform hover:scale-110 ${
                  theme === 'timeless' ? 'border-site-text scale-110' : 'border-transparent'
                }`}
                title="Timeless Retro"
              />
              <button 
                onClick={() => setTheme('coastal')}
                className={`w-8 h-8 rounded-full bg-[#74A8A4] border-2 cursor-pointer transition-transform hover:scale-110 ${
                  theme === 'coastal' ? 'border-site-text scale-110' : 'border-transparent'
                }`}
                title="Coastal Retro"
              />
              <button 
                onClick={() => setTheme('tranquil')}
                className={`w-8 h-8 rounded-full bg-[#B7C9E6] border-2 cursor-pointer transition-transform hover:scale-110 ${
                  theme === 'tranquil' ? 'border-site-text scale-110' : 'border-transparent'
                }`}
                title="Tranquil Sky"
              />
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="border-t border-site-accent/50 pt-6 flex flex-col gap-4 mt-auto">
            {currentUser ? (
              <>
                <div className="flex items-center gap-3 mb-2">
                  {(() => {
                    const savedImg = localStorage.getItem('hawkman_profile_image');
                    return savedImg ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-site-accent flex-shrink-0">
                        <img src={savedImg} alt="avatar" className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-site-primary flex items-center justify-center text-site-text font-bold">
                        {currentUser.username ? currentUser.username.charAt(0).toUpperCase() : 'U'}
                      </div>
                    );
                  })()}
                  <span className="text-base font-bold text-site-text">{currentUser.username}</span>
                </div>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onDashboard();
                  }}
                  className="w-full bg-site-bg border border-site-accent py-3.5 rounded-xl text-sm font-bold text-site-text hover:bg-site-accent/20 transition-all flex items-center justify-center gap-2"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="w-full bg-rose-500 hover:bg-rose-655 py-3.5 rounded-xl text-sm font-bold text-white transition-all flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLogin();
                  }}
                  className="w-full border border-site-accent py-3.5 rounded-xl text-sm font-bold text-site-text hover:bg-site-accent/20 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onSignup();
                  }}
                  className="w-full bg-site-primary py-3.5 rounded-xl text-sm font-bold text-site-text hover:bg-site-primary/80 transition-all text-center"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;