import React, { useState } from 'react';
import { Bell, User, Search, Sparkles, Settings, LogOut } from 'lucide-react';

const DashboardHeader = ({ onLogout, onProfileSettings }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="h-20 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-10 relative z-10 transition-colors duration-300">
      {/* Logo Area */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-black dark:bg-white rounded flex items-center justify-center text-white dark:text-black shadow-lg">
          <Sparkles className="w-5 h-5" />
        </div>
        <span className="text-xl font-bold text-brand-dark dark:text-white tracking-tight">Talent Oasis</span>
      </div>

      {/* Search Bar */}
      <div className="flex-grow max-w-md mx-10 hidden lg:block">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
          <input 
            type="text" 
            placeholder="Search courses, tools, or resources..."
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-sm py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:bg-white dark:focus:bg-slate-700 focus:border-brand-primary/30 focus:ring-4 focus:ring-brand-primary/5 transition-all dark:text-white"
          />
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-brand-primary rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <div 
          className="flex items-center gap-3 pl-4 border-l border-slate-100 dark:border-slate-800 cursor-pointer group relative"
        >
          <div 
            className="flex items-center gap-3"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="text-right flex flex-col justify-center">
              <span className="text-sm font-bold text-slate-900 dark:text-white leading-none group-hover:text-brand-primary transition-colors">Alex Rivera</span>
              <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">Free Plan</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-50 dark:border-slate-700 overflow-hidden flex items-center justify-center">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Profile Dropdown Modal */}
          {isProfileOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-sm shadow-xl border border-slate-100 dark:border-slate-700 py-2 animate-fade-in z-50">
              <div className="px-4 py-2 border-b border-slate-50 dark:border-slate-700 mb-1">
                <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Account</p>
              </div>
              <button 
                onClick={() => {
                  setIsProfileOpen(false);
                  onProfileSettings && onProfileSettings();
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-brand-primary transition-all text-left"
              >
                <Settings className="w-4 h-4" />
                Profile Settings
              </button>
              <button 
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all border-t border-slate-50 dark:border-slate-700 mt-1"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
