import React, { useState, useEffect } from 'react';
import { Sparkles, LayoutDashboard, LogOut } from 'lucide-react';

const Navbar = ({ onSignup, onLogin, onLogout, onLogoClick, onNavClick, currentUser, onDashboard }) => {
  // 1. Initialize theme state from localStorage, defaulting to 'timeless'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('site-theme') || 'timeless';
    }
    return 'timeless';
  });

  // 2. Automatically sync the state change directly to the html tag and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
  }, [theme]);

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
              className="text-[13px] font-medium text-site-text/80 hover:text-site-text transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Theme Picker Dropdown Menu */}
        <div className="relative group">
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
            {/* Defult color = white */}
            {/*
            <button
              onClick={() => setTheme('default')}
              className={`w-5 h-5 rounded-full bg-white border-2 cursor-pointer transition-transform hover:scale-125 ${
                theme === 'default' ? 'border-slate-900 scale-110' : 'border-transparent'
              }`}
              title="Default"
            />*/}
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

        {/* Right Actions */}
        <div className="flex items-center gap-8">
          {currentUser ? (
            // User IS logged in: Show their name and a Sign Out button
            <div className="flex items-center gap-5">
              {/* User profile (e.g. A Adam) */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-site-primary flex items-center justify-center text-site-text text-[13px] font-bold shadow-sm select-none">
                  {currentUser.username ? currentUser.username.charAt(0).toUpperCase() : 'U'}
                </div>
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
        
      </div>
    </nav>
  );
};

export default Navbar;