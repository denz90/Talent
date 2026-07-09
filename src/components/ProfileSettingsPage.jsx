import React, { useState, useRef, useEffect } from 'react';
import {
  ArrowLeft, Camera, Shield, User, Mail, Lock,
  CheckCircle2, X, Sun, Moon, Bell, Palette,
  Eye, EyeOff, Zap, Globe, Trash2, AlertTriangle,
  Save, ChevronRight, Sparkles
} from 'lucide-react';

/* ─── Field wrapper ─── */
const Field = ({ label, icon: Icon, children }) => (
  <div className="space-y-2">
    <label className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest"
      style={{ color: 'var(--color-text)', opacity: 0.5 }}>
      {Icon && <Icon className="w-3 h-3" />}
      {label}
    </label>
    {children}
  </div>
);

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: 12,
  border: '1px solid var(--color-accent)',
  background: 'var(--color-accent)',
  color: 'var(--color-text)',
  fontSize: 14,
  fontWeight: 500,
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const StyledInput = (props) => {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{
        ...inputStyle,
        borderColor: focused ? 'var(--color-primary)' : 'var(--color-accent)',
        boxShadow: focused ? '0 0 0 3px color-mix(in srgb, var(--color-primary) 15%, transparent)' : 'none',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

/* ─── Section card ─── */
const Card = ({ title, icon: Icon, iconColor = 'var(--color-primary)', children }) => (
  <section
    className="rounded-2xl border p-6 space-y-5"
    style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}
  >
    <div className="flex items-center gap-3 pb-4 border-b" style={{ borderColor: 'var(--color-accent)' }}>
      <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: iconColor + '22' }}>
        <Icon className="w-4 h-4" style={{ color: iconColor }} />
      </div>
      <h2 className="font-extrabold text-sm" style={{ color: 'var(--color-text)' }}>{title}</h2>
    </div>
    {children}
  </section>
);

/* ─── Theme option ─── */
const THEMES = [
  { id: 'timeless', label: 'Timeless', preview: ['#E8F1F7', '#2075A7', '#E8DFC4'] },
  { id: 'coastal',  label: 'Coastal',  preview: ['#ccdde1', '#74A8A4', '#B6D9E0'] },
  { id: 'tranquil', label: 'Tranquil', preview: ['#F5F7FF', '#A6B1D8', '#E2E4F8'] },
  { id: 'beige', label: 'beige', preview: ['#FBF7F2', '#D9C8A9', '#EBDCD0'] },
  { id: 'gray', label: 'gray', preview: ['#D9D9D9', '#333333', '#BFBFBF']}
];

const ThemeCard = ({ theme, active, onClick }) => (
  <button
    onClick={onClick}
    className="relative flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all hover:scale-105"
    style={{
      borderColor: active ? 'var(--color-primary)' : 'var(--color-accent)',
      background: active ? 'color-mix(in srgb, var(--color-primary) 8%, transparent)' : 'var(--color-accent)',
      boxShadow: active ? '0 0 0 2px var(--color-primary)' : 'none',
    }}
  >
    {/* Mini preview swatch */}
    <div className="w-full h-10 rounded-xl overflow-hidden flex">
      {theme.preview.map((c, i) => (
        <div key={i} className="flex-1" style={{ background: c }} />
      ))}
    </div>
    <span className="text-xs font-bold" style={{ color: 'var(--color-text)', opacity: active ? 1 : 0.6 }}>
      {theme.label}
    </span>
    {active && (
      <div
        className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
        style={{ background: 'var(--color-primary)' }}
      >
        <CheckCircle2 className="w-3 h-3 text-white" />
      </div>
    )}
  </button>
);

/* ─── Toggle switch ─── */
const Toggle = ({ checked, onChange }) => (
  <button
    role="switch"
    aria-checked={checked}
    onClick={() => onChange(!checked)}
    className="relative w-11 h-6 rounded-full transition-all flex-shrink-0"
    style={{ background: checked ? 'var(--color-primary)' : 'var(--color-accent)' }}
  >
    <span
      className="absolute top-1 w-4 h-4 rounded-full transition-all"
      style={{
        background: 'white',
        left: checked ? 'calc(100% - 20px)' : 4,
      }}
    />
  </button>
);

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════ */
const ProfileSettingsPage = ({ currentUser, onBack, theme, onThemeChange }) => {
  const displayName  = currentUser?.username || currentUser?.name  || '';
  const displayEmail = currentUser?.email    || '';
  const avatarSeed   = currentUser?.username || 'default';
  const planLabel    = currentUser?.plan     || 'Free Plan';

  /* form state */
  const [username,    setUsername]    = useState(displayName);
  const [email,       setEmail]       = useState(displayEmail);
  /* Load image from localStorage on mount, fall back to generated avatar */
  const defaultAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`;
  const [profileImg,  setProfileImg]  = useState(
    () => localStorage.getItem('hawkman_profile_image') || defaultAvatar
  );
  const [currentPw,   setCurrentPw]   = useState('');
  const [newPw,       setNewPw]       = useState('');
  const [confirmPw,   setConfirmPw]   = useState('');
  const [showNewPw,   setShowNewPw]   = useState(false);
  const [isSaved,     setIsSaved]     = useState(false);
  const [imgSaved,    setImgSaved]    = useState(false);
  const [pwSaved,     setPwSaved]     = useState(false);
  const [pwError,     setPwError]     = useState('');
  const [activeTheme, setActiveTheme] = useState(() => {
    const currentTheme = theme || localStorage.getItem('site-theme') || 'timeless';
    return currentTheme === 'default' ? 'timeless' : currentTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem('site-theme', activeTheme);
  }, [activeTheme]);

  /* notification prefs */
  const [notifs, setNotifs] = useState({
    streak:       true,
    newCourse:    true,
    achievements: true,
    weeklyReport: false,
    marketing:    false,
  });

  const fileRef = useRef(null);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    setPwError('');
    if (!currentPw) { setPwError('Enter your current password.'); return; }
    if (newPw.length < 8) { setPwError('New password must be at least 8 characters.'); return; }
    if (newPw !== confirmPw) { setPwError('Passwords do not match.'); return; }
    setPwSaved(true);
    setCurrentPw(''); setNewPw(''); setConfirmPw('');
    setTimeout(() => setPwSaved(false), 3000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    // Warn if file is over 2 MB
    if (file.size > 2 * 1024 * 1024) {
      alert('Image must be under 2 MB. Please choose a smaller file.');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const dataUrl = reader.result;
      setProfileImg(dataUrl);
      localStorage.setItem('hawkman_profile_image', dataUrl); // ✅ persist
      setImgSaved(true);
      setTimeout(() => setImgSaved(false), 3000);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    localStorage.removeItem('hawkman_profile_image');
    setProfileImg(defaultAvatar);
  };

  const handleThemeSelect = (id) => {
    setActiveTheme(id);
    if (onThemeChange) onThemeChange(id);
  };

  const toggleNotif = (key) => setNotifs(n => ({ ...n, [key]: !n[key] }));

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-bg)' }}>

      {/* ── HEADER ── */}
      <header
        className="h-16 sticky top-0 z-20 flex items-center justify-between px-8 border-b"
        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)', backdropFilter: 'blur(12px)' }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold transition-all hover:opacity-70"
          style={{ color: 'var(--color-text)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>

        {/* Branding */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--color-primary)' }}>
            <Sparkles className="w-4 h-4" style={{ color: 'var(--color-light)' }} />
          </div>
          <span className="font-extrabold text-sm" style={{ color: 'var(--color-text)' }}>Account Settings</span>
        </div>

        {/* Save indicator */}
        <div className="w-40 flex justify-end">
          {isSaved && (
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> Saved!
            </div>
          )}
        </div>
      </header>

      {/* ── CONTENT ── */}
      <main className="flex-1 max-w-3xl mx-auto w-full py-10 px-6 space-y-6">

        {/* ── PROFILE HERO ── */}
        <div
          className="rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center text-center sm:text-left gap-6"
          style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--gradient-to))' }}
        >
          {/* Avatar */}
          <div className="relative flex-shrink-0 flex flex-col items-center gap-2">
            <div
              className="w-20 h-20 rounded-2xl overflow-hidden border-4"
              style={{ borderColor: 'rgba(255,255,255,0.25)' }}
            >
              <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button
              onClick={() => fileRef.current.click()}
              className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              style={{ background: 'var(--color-light)', color: 'var(--color-primary)' }}
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            {/* Remove button */}
            <button
              onClick={handleRemoveImage}
              className="text-[11px] font-bold px-3 py-1 rounded-full transition-all hover:opacity-70"
              style={{ background: 'rgba(255,255,255,0.18)', color: 'var(--color-light)', marginTop: 28 }}
            >
              Remove photo
            </button>
            {/* Saved toast */}
            {imgSaved && (
              <span className="text-[11px] font-bold text-emerald-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Photo saved!
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 w-full sm:w-auto">
            <h1 className="text-2xl font-extrabold" style={{ color: 'var(--color-light)' }}>
              {username || 'Your Profile'}
            </h1>
            <p className="text-sm mt-0.5" style={{ color: 'var(--color-light)', opacity: 0.7 }}>{displayEmail}</p>
            <div className="flex items-center justify-center sm:justify-start gap-2 mt-3">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: 'rgba(255,255,255,0.18)', color: 'var(--color-light)' }}
              >
                <Zap className="w-3 h-3" /> {planLabel}
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: 'rgba(255,255,255,0.18)', color: 'var(--color-light)' }}
              >
                <Globe className="w-3 h-3" /> Active
              </span>
            </div>
          </div>
        </div>

        {/* ── PERSONAL INFO ── */}
        <Card title="Personal Information" icon={User} iconColor="#155DFC">
          <form onSubmit={handleSaveProfile} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Username" icon={User}>
                <StyledInput
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Your username"
                />
              </Field>
              <Field label="Email Address" icon={Mail}>
                <StyledInput
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                />
              </Field>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: 'var(--color-primary)', color: 'var(--color-light)' }}
              >
                {isSaved
                  ? <><CheckCircle2 className="w-4 h-4" /> Saved!</>
                  : <><Save className="w-4 h-4" /> Save Changes</>
                }
              </button>
            </div>
          </form>
        </Card>

        {/* ── THEME ── */}
        <Card title="Appearance & Theme" icon={Palette} iconColor="#9810FA">
          <p className="text-sm" style={{ color: 'var(--color-text)', opacity: 0.5 }}>
            Choose a theme that matches your style. Changes apply instantly.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {THEMES.map(t => (
              <ThemeCard
                key={t.id}
                theme={t}
                active={activeTheme === t.id}
                onClick={() => handleThemeSelect(t.id)}
              />
            ))}
          </div>
        </Card>

        {/* ── NOTIFICATIONS ── */}
        <Card title="Notification Preferences" icon={Bell} iconColor="#F59E0B">
          <div className="space-y-4">
            {[
              { key: 'streak',       label: 'Streak reminders',      desc: 'Get reminded to keep your daily streak' },
              { key: 'newCourse',    label: 'New course alerts',      desc: 'Be notified when new courses launch' },
              { key: 'achievements', label: 'Achievement unlocks',    desc: 'Celebrate when you earn a new badge' },
              { key: 'weeklyReport', label: 'Weekly progress report', desc: 'A summary of your learning each week' },
              { key: 'marketing',    label: 'Tips & promotions',      desc: 'Occasional tips and special offers' },
            ].map(({ key, label, desc }) => (
              <div
                key={key}
                className="flex items-center justify-between p-4 rounded-2xl"
                style={{ background: 'var(--color-accent)' }}
              >
                <div>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>{label}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text)', opacity: 0.45 }}>{desc}</p>
                </div>
                <Toggle checked={notifs[key]} onChange={() => toggleNotif(key)} />
              </div>
            ))}
          </div>
        </Card>

        {/* ── CHANGE PASSWORD ── */}
        <Card title="Security & Password" icon={Lock} iconColor="#10B981">
          <form onSubmit={handleSavePassword} className="space-y-5">
            <Field label="Current Password" icon={Lock}>
              <StyledInput
                type="password"
                value={currentPw}
                onChange={e => setCurrentPw(e.target.value)}
                placeholder="••••••••"
              />
            </Field>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="New Password">
                <div className="relative">
                  <StyledInput
                    type={showNewPw ? 'text' : 'password'}
                    value={newPw}
                    onChange={e => setNewPw(e.target.value)}
                    placeholder="Min. 8 characters"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPw(!showNewPw)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-70"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {showNewPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </Field>
              <Field label="Confirm New Password">
                <StyledInput
                  type="password"
                  value={confirmPw}
                  onChange={e => setConfirmPw(e.target.value)}
                  placeholder="••••••••"
                />
              </Field>
            </div>

            {/* Password strength */}
            {newPw.length > 0 && (
              <div className="space-y-1">
                <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'var(--color-accent)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (newPw.length / 12) * 100)}%`,
                      background: newPw.length < 6 ? '#EF4444' : newPw.length < 10 ? '#F59E0B' : '#10B981',
                    }}
                  />
                </div>
                <p className="text-[11px] font-semibold" style={{ color: 'var(--color-text)', opacity: 0.45 }}>
                  {newPw.length < 6 ? 'Weak' : newPw.length < 10 ? 'Fair' : 'Strong'} password
                </p>
              </div>
            )}

            {pwError && (
              <div className="flex items-center gap-2 text-red-400 text-sm font-semibold p-3 rounded-xl bg-red-400/10">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                {pwError}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:shadow-lg"
                style={{ background: '#10B981', color: 'white' }}
              >
                {pwSaved
                  ? <><CheckCircle2 className="w-4 h-4" /> Password Updated!</>
                  : <><Shield className="w-4 h-4" /> Update Password</>
                }
              </button>
            </div>
          </form>
        </Card>

        {/* ── DANGER ZONE ── */}
        <Card title="Danger Zone" icon={AlertTriangle} iconColor="#EF4444">
          <div
            className="flex items-center justify-between p-4 rounded-2xl border"
            style={{ borderColor: '#EF444430', background: '#EF444408' }}
          >
            <div>
              <p className="text-sm font-bold text-red-400">Delete Account</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-text)', opacity: 0.45 }}>
                Permanently delete your account and all your data.
              </p>
            </div>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-red-400 border border-red-400/30 transition-all hover:bg-red-400/10"
            >
              <Trash2 className="w-3.5 h-3.5" /> Delete
            </button>
          </div>
        </Card>

        {/* Bottom spacing */}
        <div className="h-6" />
      </main>
    </div>
  );
};

export default ProfileSettingsPage;
