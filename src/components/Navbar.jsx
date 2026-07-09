import React, { useState, useEffect } from 'react';
import { Sparkles, LayoutDashboard, LogOut, Menu, X, ChevronDown } from 'lucide-react';

// 1. Centralize Themes so you never hardcode a swatch block in JSX again
const THEME_OPTIONS = [
  { id: 'timeless', label: 'Timeless Retro', swatch: '#2075A7' },
  { id: 'coastal', label: 'Coastal Retro', swatch: '#74A8A4' },
  { id: 'tranquil', label: 'Tranquil Sky', swatch: '#B7C9E6' },
  { id: 'gray', label: 'gray', swatch: '#2F3E46' },
  { id: 'beige', label: 'beige', swatch: '#876434' }
];

const Navbar = ({ onSignup, onLogin, onLogout, onLogoClick, onNavClick, currentUser, onDashboard }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('site-theme') || 'timeless';
    }
    return 'timeless';
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close user dropdown on outside click
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleClose = (e) => {
      if (!e.target.closest('.user-dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClose);
    return () => document.removeEventListener('mousedown', handleClose);
  }, [isDropdownOpen]);

  // Sync Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
  }, [theme]);

  // Handle Desktop Resize force-close
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. Prevent background page scrolling when Mobile Menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Safe SSR Avatar check
  const getSavedAvatar = () => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('hawkman_profile_image');
  };

  const navItems = [
    { id: 'tools', label: 'Tools' },
    { id: 'courses', label: 'Courses' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'community', label: 'Community' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-site-bg/80 backdrop-blur-md border-b border-site-accent transition-colors duration-300">
      {/* MAIN BAR */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => {
            if (onLogoClick) {
              e.preventDefault();
              onLogoClick();
            }
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-site-primary rounded flex items-center justify-center">
            <Sparkles className="text-site-text w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-site-text tracking-tight">
            Talent Oasis
          </span>
        </a>

        {/* Center Navigation - Desktop */}
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
              className="text-[13px] font-medium text-site-text/80 hover:text-site-text transition-colors uppercase tracking-wider cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Theme Picker Dropdown - Desktop */}
        {!currentUser && (
          <div className="relative group hidden md:block">
            <button className="text-[13px] font-medium text-site-text/80 hover:text-site-text transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer">
              🎨 Theme
            </button>

            <div className="absolute left-0 top-full mt-2 flex gap-3 bg-site-bg border border-site-accent shadow-xl rounded-full px-4 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {THEME_OPTIONS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  style={{ backgroundColor: t.swatch }}
                  className={`w-5 h-5 rounded-full border-2 cursor-pointer transition-transform hover:scale-125 ${
                    theme === t.id ? 'border-site-text scale-110 shadow-sm' : 'border-transparent'
                  }`}
                  title={t.label}
                />
              ))}
            </div>
          </div>
        )}

        {/* Right Actions - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {currentUser ? (
            <div className="relative user-dropdown-container">
              {/* Dropdown Trigger Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-site-bg hover:bg-site-accent/40 border border-site-accent/60 transition-all cursor-pointer select-none"
              >
                {(() => {
                  const savedImg = getSavedAvatar();
                  return savedImg ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-site-accent flex-shrink-0 shadow-xs">
                      <img src={savedImg} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-site-primary flex items-center justify-center text-site-text text-[13px] font-bold shadow-xs">
                      {currentUser.username ? currentUser.username.charAt(0).toUpperCase() : 'U'}
                    </div>
                  );
                })()}
                <span className="text-[13px] font-bold text-site-text truncate max-w-[120px]">
                  {currentUser.username}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-site-text/60 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu Overlay */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-site-bg/95 backdrop-blur-md border border-site-accent shadow-2xl rounded-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {/* Signed in details */}
                  <div className="px-2 pb-3 mb-2 border-b border-site-accent/60">
                    <p className="text-[10px] font-bold text-site-text/40 uppercase tracking-widest">Signed in as</p>
                    <p className="text-[14px] font-extrabold text-site-text truncate">{currentUser.username}</p>
                    {currentUser.email && (
                      <p className="text-[11px] text-site-text/50 truncate mt-0.5">{currentUser.email}</p>
                    )}
                  </div>

                  {/* Themes choice list */}
                  <div className="px-2 py-2 mb-2">
                    <p className="text-[10px] font-bold text-site-text/40 uppercase tracking-widest mb-2 flex items-center gap-1.5">🎨 Theme Selection</p>
                    <div className="flex gap-2.5">
                      {THEME_OPTIONS.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setTheme(t.id)}
                          style={{ backgroundColor: t.swatch }}
                          className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-all hover:scale-115 ${
                            theme === t.id ? 'border-site-text scale-110 shadow-sm' : 'border-transparent'
                          }`}
                          title={t.label}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="h-px bg-site-accent/60 my-2" />

                  {/* Nav Actions */}
                  <div className="space-y-1">
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        onDashboard();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-bold text-site-text hover:bg-site-accent transition-all cursor-pointer text-left"
                    >
                      <LayoutDashboard className="w-4 h-4 text-site-text/70" />
                      <span>Dashboard</span>
                    </button>

                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-bold text-rose-500 hover:bg-rose-500/10 transition-all cursor-pointer text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <>
              <button onClick={onLogin} className="text-[13px] font-bold text-site-text/80 hover:text-site-text transition-colors cursor-pointer">
                Sign In
              </button>
              <button onClick={onSignup} className="bg-site-primary text-site-text px-6 py-2.5 rounded-sm text-[13px] font-bold hover:bg-site-primary/80 transition-all uppercase tracking-tight cursor-pointer">
                Get Started
              </button>
            </>
          )}
        </div>

        {/* Hamburger Toggle - Mobile */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-site-text/80 hover:text-site-text transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER BACKDROP (Clicks outside close the menu) */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 top-full bg-black/40 backdrop-blur-xs z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* MOBILE DRAWER PANEL */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-site-bg border-b border-site-accent p-6 z-50 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto flex flex-col justify-between">
          
          <div>
            {/* Links */}
            <div className="flex flex-col gap-5 mb-6">
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
                  className="text-lg font-bold text-site-text/80 hover:text-site-text transition-colors uppercase tracking-wider block py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Theme Picker */}
            <div className="py-4 border-t border-site-accent/60">
              <p className="text-[11px] font-bold text-site-text/50 uppercase tracking-widest mb-3">🎨 Change Theme</p>
              <div className="flex gap-4">
                {THEME_OPTIONS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    style={{ backgroundColor: t.swatch }}
                    className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-transform hover:scale-110 ${
                      theme === t.id ? 'border-site-text scale-110 shadow-md' : 'border-transparent'
                    }`}
                    title={t.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Footer Actions */}
          <div className="border-t border-site-accent/60 pt-6 flex flex-col gap-3 mt-4">
            {currentUser ? (
              <>
                <div className="flex items-center gap-3 mb-1">
                  {(() => {
                    const savedImg = getSavedAvatar();
                    return savedImg ? (
                      <div className="w-9 h-9 rounded-full overflow-hidden border border-site-accent flex-shrink-0">
                        <img src={savedImg} alt="avatar" className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <div className="w-9 h-9 rounded-full bg-site-primary flex items-center justify-center text-site-text font-bold">
                        {currentUser.username ? currentUser.username.charAt(0).toUpperCase() : 'U'}
                      </div>
                    );
                  })()}
                  <span className="text-base font-bold text-site-text">{currentUser.username}</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onDashboard();
                    }}
                    className="bg-site-bg border border-site-accent py-3 rounded-xl text-xs font-bold text-site-text hover:bg-site-accent/20 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </button>

                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onLogout();
                    }}
                    className="bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 py-3 rounded-xl text-xs font-bold text-rose-500 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onLogin();
                  }}
                  className="border border-site-accent py-3 rounded-xl text-xs font-bold text-site-text hover:bg-site-accent/20 transition-colors cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onSignup();
                  }}
                  className="bg-site-primary py-3 rounded-xl text-xs font-bold text-site-text hover:bg-site-primary/80 transition-all text-center cursor-pointer shadow-sm"
                >
                  Get Started
                </button>
              </div>
            )}
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;