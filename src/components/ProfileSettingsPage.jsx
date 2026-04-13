import React, { useState, useRef } from 'react';
import { ArrowLeft, Camera, Shield, User, Mail, Lock, CheckCircle2, X, Sun, Moon, Monitor } from 'lucide-react';

const ProfileSettingsPage = ({ onBack, theme, onThemeChange, userData = { name: 'Alex Rivera', email: 'alex@example.com' } }) => {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [isSaved, setIsSaved] = useState(false);
  const [profileImage, setProfileImage] = useState("https://api.dicebear.com/7.x/avataaars/svg?seed=Alex");
  const fileInputRef = useRef(null);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const removeImage = () => {
    setProfileImage("https://api.dicebear.com/7.x/avataaars/svg?seed=Alex");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="h-20 bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700 flex items-center px-10 justify-between sticky top-0 z-10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-brand-primary transition-colors font-bold text-[13px] uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-brand-primary" />
          <span className="font-bold text-slate-900 dark:text-white">Account Settings</span>
        </div>
        <div className="w-32"></div> {/* Spacer for symmetry */}
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full py-12 px-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">Profile Settings</h1>

        <div className="space-y-8">
          {/* Appearance Section */}
          <section className="bg-white dark:bg-slate-800 p-8 rounded-sm shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-widest mb-6">Appearance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => onThemeChange('light')}
                className={`flex items-center justify-between p-4 rounded-sm border transition-all ${
                  theme === 'light' 
                    ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary' 
                    : 'border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-sm ${theme === 'light' ? 'bg-brand-primary text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}>
                    <Sun className="w-4 h-4" />
                  </div>
                  <span className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Light Mode</span>
                </div>
                {theme === 'light' && <CheckCircle2 className="w-4 h-4 text-brand-primary" />}
              </button>

              <button 
                onClick={() => onThemeChange('dark')}
                className={`flex items-center justify-between p-4 rounded-sm border transition-all ${
                  theme === 'dark' 
                    ? 'border-brand-primary bg-brand-primary/5 ring-1 ring-brand-primary' 
                    : 'border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-sm ${theme === 'dark' ? 'bg-brand-primary text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-400'}`}>
                    <Moon className="w-4 h-4" />
                  </div>
                  <span className={`text-sm font-bold ${theme === 'dark' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Dark Mode</span>
                </div>
                {theme === 'dark' && <CheckCircle2 className="w-4 h-4 text-brand-primary" />}
              </button>
            </div>
          </section>

          {/* Profile Picture Section */}
          <section className="bg-white dark:bg-slate-800 p-8 rounded-sm shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-widest mb-6">Profile Picture</h3>
            <div className="flex items-center gap-8">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-700 border-4 border-slate-50 dark:border-slate-800 overflow-hidden flex items-center justify-center">
                  <img src={profileImage} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <button 
                  onClick={triggerFileInput}
                  className="absolute bottom-0 right-0 w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-brand-accent transition-all"
                >
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <div>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden" 
                  accept="image/*"
                />
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-1">Update your photo</p>
                <p className="text-xs text-slate-400 font-medium mb-4">Allowed JPG, GIF or PNG. Max size of 2MB</p>
                <div className="flex gap-3">
                  <button 
                    onClick={triggerFileInput}
                    className="bg-slate-900 dark:bg-slate-700 text-white px-5 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-600 transition-all font-sans"
                  >
                    Upload New
                  </button>
                  <button 
                    onClick={removeImage}
                    className="text-red-500 px-5 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-red-50 dark:hover:bg-red-900/20 transition-all border border-red-100 dark:border-red-900/30 font-sans"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Information */}
          <section className="bg-white dark:bg-slate-800 p-8 rounded-sm shadow-sm border border-slate-100 dark:border-slate-700">
            <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-widest mb-6">Personal Information</h3>
            <form className="space-y-6" onSubmit={handleSave}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                    <User className="w-3 h-3" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-sm focus:outline-none focus:border-brand-primary/30 focus:ring-4 focus:ring-brand-primary/5 transition-all font-medium text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                    <Mail className="w-3 h-3" /> Email Address
                  </label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-sm focus:outline-none focus:border-brand-primary/30 focus:ring-4 focus:ring-brand-primary/5 transition-all font-medium text-slate-900 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <button type="submit" className="bg-brand-primary text-white px-8 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20 flex items-center gap-2">
                  {isSaved ? <><CheckCircle2 className="w-4 h-4" /> Changes Saved</> : 'Save Changes'}
                </button>
              </div>
            </form>
          </section>

          {/* Change Password */}
          <section className="bg-white p-8 rounded-sm shadow-sm border border-slate-100">
            <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-widest mb-6">Security & Password</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide flex items-center gap-1.5">
                    <Lock className="w-3 h-3" /> Current Password
                  </label>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-primary/30 transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-primary/30 transition-all font-medium text-slate-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">Confirm New Password</label>
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-sm focus:outline-none focus:border-brand-primary/30 transition-all font-medium text-slate-900"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <button className="bg-slate-900 text-white px-8 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">Update Password</button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ProfileSettingsPage;
