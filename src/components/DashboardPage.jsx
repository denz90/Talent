import React, { useState, useEffect, useCallback } from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardSidebar from './DashboardSidebar';
import { API_BASE_URL } from '../config.js';
import {
  Flame, Trophy, Play, Clock, BookOpen, CheckCircle2,
  ChevronRight, Sparkles, Brain, Code2, MessageSquare,
  Zap, Star, Award, GraduationCap, Calendar, LayoutDashboard, 
  Settings, LogOut, ChevronLeft, Activity, ArrowRight, Pencil,
  Palette, Video, Lightbulb, Users, Search, AlertCircle, Compass, Loader2
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   COURSE DEFINITIONS
═══════════════════════════════════════════════ */
const COURSES = [
  {
    id: 1,
    title: 'AI for Educators',
    subtitle: 'Master AI tools for teaching & classroom strategies',
    icon: Pencil,
    color: '#a855f7',
    tag: 'Education',
    lessons: 12,
  },
  {
    id: 2,
    title: 'AI for Designers',
    subtitle: 'Leverage AI to enhance your creative design workflow',
    icon: Palette,
    color: '#ec4899',
    tag: 'Design',
    lessons: 10,
  },
  {
    id: 3,
    title: 'AI for Developers',
    subtitle: 'Build intelligent applications with cutting-edge AI',
    icon: Code2,
    color: '#2563eb',
    tag: 'Development',
    lessons: 15,
  },
  {
    id: 4,
    title: 'AI for Content Creators',
    subtitle: 'Transform content creation with powerful AI assistance',
    icon: Video,
    color: '#16a34a',
    tag: 'Content',
    lessons: 8,
  },
];

/* ═══════════════════════════════════════════════
   API HELPERS
═══════════════════════════════════════════════ */
const authHeader = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('hawkman_token')}`,
});

const fetchDashboardStats = async () => {
  const res = await fetch(`${API_BASE_URL}/api/dashboard/stats`, { headers: authHeader() });
  if (!res.ok) throw new Error('Failed to fetch stats');
  return res.json();
};

/* ═══════════════════════════════════════════════
   UI HELPERS & FORMATTERS
═══════════════════════════════════════════════ */
const formatTime = (mins) => {
  if (!mins || mins === 0) return '0m';
  if (mins < 60) return `${mins}m`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
};

const ProgressBar = ({ pct, color }) => (
  <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'var(--color-accent)' }}>
    <div
      className="h-full rounded-full transition-all duration-700"
      style={{ width: `${pct}%`, background: color || 'var(--color-primary)' }}
    />
  </div>
);

const Tag = ({ children, color }) => (
  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider" style={{ color, background: color + '18' }}>
    {children}
  </span>
);

/* ─── Course card – READ‑ONLY, no API calls ─── */
const CourseCard = ({ course, progress, onNavigateToPath }) => {
  const Icon = course.icon;
  const pct = progress?.progress_percent ?? 0;

  const statusLabel = pct === 0 ? 'Not Started' : pct >= 100 ? 'Completed' : 'In Progress';
  const statusColor = pct === 0 ? '#94a3b8' : pct >= 100 ? '#10B981' : course.color;

  const handleNavigate = (e) => {
    if (e) e.stopPropagation();
    if (onNavigateToPath) {
      onNavigateToPath('Intermediate');
    }
  };

  return (
    <div
      onClick={handleNavigate}
      className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:shadow-md group cursor-pointer bg-white dark:bg-transparent"
      style={{ borderColor: 'var(--color-accent)' }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: course.color + '22' }}>
        <Icon className="w-6 h-6" style={{ color: course.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <p className="font-bold text-sm truncate" style={{ color: 'var(--color-text)' }}>{course.title}</p>
          <Tag color={statusColor}>{statusLabel}</Tag>
        </div>
        <p className="text-[11px] mb-2 truncate" style={{ color: 'var(--color-text)', opacity: 0.5 }}>{course.subtitle}</p>
        <ProgressBar pct={pct} color={course.color} />
      </div>
      <div className="flex-shrink-0 flex flex-col items-end justify-between gap-1">
        <span className="text-xs font-bold" style={{ color: 'var(--color-text)', opacity: 0.4 }}>{Math.round(pct)}%</span>
        <button
          onClick={handleNavigate}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] uppercase tracking-wider font-bold transition-all hover:scale-105"
          style={{ background: course.color, color: 'white' }}
        >
          <Play className="w-3 h-3 fill-white" />
          {pct === 0 ? 'Start' : pct >= 100 ? 'Review' : 'Continue'}
        </button>
      </div>
    </div>
  );
};

/* ─── Badge Card – with tier colors ─── */
const BadgeCard = ({ badge }) => {
  const tierColors = {
    bronze: { bg: '#CD7F32', light: '#CD7F3225', glow: 'rgba(205, 127, 50, 0.3)' },
    silver: { bg: '#C0C0C0', light: '#C0C0C025', glow: 'rgba(192, 192, 192, 0.3)' },
    gold: { bg: '#FFD700', light: '#FFD70025', glow: 'rgba(255, 215, 0, 0.3)' },
    platinum: { bg: '#E5E4E2', light: '#E5E4E225', glow: 'rgba(229, 228, 226, 0.3)' },
    diamond: { bg: '#B9F2FF', light: '#B9F2FF25', glow: 'rgba(185, 242, 255, 0.3)' },
  };

  const tier = tierColors[badge.tier] || tierColors.bronze;

  return (
    <div 
      className="flex flex-col items-center text-center p-3 rounded-2xl border transition-all hover:scale-105"
      style={{ 
        borderColor: tier.bg, 
        background: tier.light,
        boxShadow: `0 0 20px ${tier.glow}`
      }}
    >
      <div 
        className="w-10 h-10 rounded-full flex items-center justify-center mb-2 text-xl"
        style={{ 
          background: tier.light,
          border: `2px solid ${tier.bg}`
        }}
      >
        {badge.icon || '🏆'}
      </div>
      <p className="font-bold text-[10px]" style={{ color: 'var(--color-text)' }}>{badge.name}</p>
      <span 
        className="text-[8px] font-bold uppercase tracking-wider mt-0.5"
        style={{ color: tier.bg }}
      >
        {badge.tier}
      </span>
    </div>
  );
};

/* ─── Greeting helper ─── */
const getGreeting = () => {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
};

/* ─── Weekly chart ─── */
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const WeeklyChart = ({ data }) => {
  const vals = data || [0, 0, 0, 0, 0, 0, 0];
  const max = Math.max(...vals, 1);
  const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  return (
    <div className="flex items-end gap-2 h-32 pt-6">
      {DAYS.map((d, i) => {
        const pct = vals[i] / max;
        const isToday = i === todayIdx;
        return (
          <div key={d} className="flex flex-col items-center gap-1.5 flex-1">
            <div className="relative w-full flex items-end justify-center" style={{ height: 80 }}>
              {vals[i] > 0 && (
                <span className="absolute -top-6 text-[10px] font-bold whitespace-nowrap" style={{ color: 'var(--color-text)', opacity: 0.8 }}>
                  {formatTime(vals[i])}
                </span>
              )}
              <div
                className="w-full rounded-lg transition-all duration-700"
                style={{
                  height: `${Math.max(pct * 100, vals[i] === 0 ? 5 : 8)}%`,
                  background: 'var(--color-primary)',
                  opacity: isToday ? 1 : vals[i] === 0 ? 0.2 : 0.45,
                }}
              />
            </div>
            <span className="text-[10px] font-bold uppercase" style={{ color: isToday ? 'var(--color-primary)' : 'var(--color-text)', opacity: isToday ? 1 : 0.4 }}>
              {d}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/* ═══════════════════════════════════════════════
   MAIN DASHBOARD
═══════════════════════════════════════════════ */
const DashboardPage = ({ 
  currentUser, 
  onLogout, 
  onProfileSettings, 
  onBack,
  onNavigateTool,
  onNavigatePath,
  onNavigateCourse
}) => {
  const displayName = currentUser?.username || currentUser?.name || currentUser?.email?.split('@')[0] || 'Learner';

  const [activeNav, setActiveNav] = useState('overview');
  const [collapsed, setCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  /* Live backend data */
  const [stats, setStats] = useState(null);
  const [statsError, setStatsError] = useState(false);
  const [loadingStats, setLoadingStats] = useState(false);
  
  /* Per-course progress map */
  const [progressMap, setProgressMap] = useState({});

  const loadStats = useCallback(async () => {
    setLoadingStats(true);
    setStatsError(false);
    try {
      const data = await fetchDashboardStats();
      console.log('📊 Dashboard stats loaded:', data);
      setStats(data);

      if (data?.course_progress && Array.isArray(data.course_progress)) {
        const map = {};
        data.course_progress.forEach(cp => {
          map[cp.course_id] = cp;
        });
        setProgressMap(map);
      }
    } catch (e) {
      console.warn('Dashboard stats failed to load.', e);
      setStatsError(true);
    } finally {
      setLoadingStats(false);
    }
  }, []);

  useEffect(() => { loadStats(); }, [loadStats]);

  /* Driven by API response */
  const streak = stats?.streak ?? 0;
  const bestStreak = stats?.best_streak ?? 0;
  const totalXP = stats?.total_xp ?? 0;
  const badgesUnlocked = stats?.badges_unlocked ?? [];

  // Helper to render the main content based on activeNav
  const renderContent = () => {
    switch (activeNav) {
      case 'overview':
        return (
          <>
            {/* HERO */}
            <div
              className="relative rounded-3xl p-7 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary) 55%, var(--gradient-to) 100%)' }}
            >
              <div className="relative z-10">
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-light)', opacity: 0.7 }}>
                  {getGreeting()}, {displayName}!
                </p>
                <h1 className="text-3xl font-extrabold tracking-tight" style={{ color: 'var(--color-light)' }}>
                  Ready to continue your AI journey?
                </h1>
                <div className="flex flex-wrap gap-3 mt-6">
                  <button
                    onClick={onBack}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 shadow-md"
                    style={{ background: 'var(--color-light)', color: 'var(--color-primary)' }}
                  >
                    <Play className="w-4 h-4 fill-current" /> Continue Learning
                  </button>
                  <button
                    onClick={loadStats}
                    disabled={loadingStats}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 disabled:opacity-50"
                    style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-light)', border: '1px solid rgba(255,255,255,0.25)' }}
                  >
                    {loadingStats ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Refresh Stats'}
                  </button>
                </div>
              </div>
              <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.06)' }} />
              <div className="absolute right-10 -bottom-8 w-28 h-28 rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.04)' }} />
            </div>

            {/* STATS GRID */}
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-2xl p-5 border flex flex-col items-center text-center bg-white dark:bg-transparent transition-all hover:shadow-md" style={{ borderColor: 'var(--color-accent)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-orange-500/10">
                  <Flame className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-text)', opacity: 0.6 }}>Current Streak</h3>
                <p className="text-2xl font-black" style={{ color: 'var(--color-text)' }}>{streak} <span className="text-sm font-bold opacity-50">Days</span></p>
              </div>
              <div className="rounded-2xl p-5 border flex flex-col items-center text-center bg-white dark:bg-transparent transition-all hover:shadow-md" style={{ borderColor: 'var(--color-accent)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-amber-500/10">
                  <Trophy className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-text)', opacity: 0.6 }}>Best Streak</h3>
                <p className="text-2xl font-black" style={{ color: 'var(--color-text)' }}>{bestStreak} <span className="text-sm font-bold opacity-50">Days</span></p>
              </div>
              <div className="rounded-2xl p-5 border flex flex-col items-center text-center bg-white dark:bg-transparent transition-all hover:shadow-md" style={{ borderColor: 'var(--color-accent)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 bg-purple-500/10">
                  <Zap className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: 'var(--color-text)', opacity: 0.6 }}>Total XP</h3>
                <p className="text-2xl font-black" style={{ color: 'var(--color-text)' }}>{totalXP.toLocaleString()}</p>
              </div>
            </div>

            {/* MY COURSES */}
            <div className="rounded-3xl border p-6 flex flex-col gap-4 bg-gray-50/50 dark:bg-transparent" style={{ borderColor: 'var(--color-accent)' }}>
              <div className="flex items-center justify-between">
                <h2 className="font-extrabold text-base" style={{ color: 'var(--color-text)' }}>My Courses</h2>
              </div>
              <div className="space-y-3">
                {COURSES.map(course => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    progress={progressMap[course.id]}
                    onNavigateToPath={onNavigatePath}
                  />
                ))}
              </div>
            </div>

            {/* TWO-COLUMN: Tools + Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recommended AI Tools */}
              <div className="rounded-3xl border p-6 flex flex-col bg-white dark:bg-transparent" style={{ borderColor: 'var(--color-accent)' }}>
                <h2 className="font-extrabold text-[11px] uppercase tracking-wider mb-4" style={{ color: 'var(--color-text)' }}>
                  Recommended AI Tools
                </h2>
                <div className="space-y-3">
                  {[
                    { name: 'ChatGPT', id: 'chatgpt', desc: 'ChatGPT chat tools with prompting and practice.', icon: MessageSquare, color: '#10B981' },
                    { name: 'Claude AI', id: 'claude_ai', desc: 'Consistent learning and recommended AI tools.', icon: Brain, color: '#3b82f6' },
                    { name: 'Gamma AI', id: 'gamma_ai', desc: 'Learn more about generating engaging presentations.', icon: Lightbulb, color: '#8b5cf6' },
                    { name: 'Perplexity', id: 'perplexity', desc: 'Learn more about Perplexity AI enabled research.', icon: Search, color: '#6366f1' },
                  ].map(({ name, id, desc, icon: Icon, color }) => (
                    <div
                      key={name}
                      onClick={() => onNavigateTool && onNavigateTool(id)}
                      className="flex items-start gap-4 p-4 rounded-2xl border transition-all hover:shadow-md bg-white dark:bg-transparent cursor-pointer"
                      style={{ borderColor: 'var(--color-accent)' }}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: color + '15' }}>
                        <Icon className="w-5 h-5" style={{ color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-sm truncate" style={{ color: 'var(--color-text)' }}>{name}</p>
                        <p className="text-[10px] mt-1 mb-2 leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.6 }}>{desc}</p>
                        <button className="text-[10px] font-bold uppercase tracking-wider transition-opacity hover:opacity-70" style={{ color }}>
                          TUTORIAL
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements with Tiers */}
              <div className="rounded-3xl border p-6 flex flex-col bg-white dark:bg-transparent" style={{ borderColor: 'var(--color-accent)' }}>
                <h2 className="font-extrabold text-[11px] uppercase tracking-wider mb-4" style={{ color: 'var(--color-text)' }}>
                  Unlocked Achievements
                </h2>
                {badgesUnlocked.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-8 text-center bg-gray-50/40 dark:bg-white/5 rounded-2xl">
                    <p className="text-[11px] font-semibold" style={{ color: 'var(--color-text)' }}>You haven't unlocked any badges yet.</p>
                    <p className="text-[10px] mt-1" style={{ color: 'var(--color-text)', opacity: 0.6 }}>Complete a lesson to earn your first one!</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {badgesUnlocked.map((badge) => (
                      <BadgeCard key={badge.name} badge={badge} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Weekly Chart */}
            <div className="rounded-3xl border p-6 flex flex-col bg-white dark:bg-transparent" style={{ borderColor: 'var(--color-accent)' }}>
              <div className="flex items-center justify-between">
                <h2 className="font-extrabold text-base" style={{ color: 'var(--color-text)' }}>Study Time</h2>
                <span className="text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider" style={{ background: 'var(--color-accent)', color: 'var(--color-text)', opacity: 0.8 }}>This Week</span>
              </div>
              <WeeklyChart data={stats?.weekly_minutes} />
            </div>
          </>
        );

      case 'courses':
        return (
          <div className="rounded-3xl border p-6 flex flex-col gap-4 bg-gray-50/50 dark:bg-transparent" style={{ borderColor: 'var(--color-accent)' }}>
            <div className="flex items-center justify-between">
              <h2 className="font-extrabold text-base" style={{ color: 'var(--color-text)' }}>My Courses</h2>
            </div>
            <div className="space-y-3">
              {COURSES.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  progress={progressMap[course.id]}
                  onNavigateToPath={onNavigatePath}
                />
              ))}
            </div>
          </div>
        );

      case 'tools':
        return (
          <div className="rounded-3xl border p-6 flex flex-col bg-white dark:bg-transparent" style={{ borderColor: 'var(--color-accent)' }}>
            <h2 className="font-extrabold text-[11px] uppercase tracking-wider mb-4" style={{ color: 'var(--color-text)' }}>
              Recommended AI Tools
            </h2>
            <div className="space-y-3">
              {[
                { name: 'ChatGPT', id: 'chatgpt', desc: 'ChatGPT chat tools with prompting and practice.', icon: MessageSquare, color: '#10B981' },
                { name: 'Claude AI', id: 'claude_ai', desc: 'Consistent learning and recommended AI tools.', icon: Brain, color: '#3b82f6' },
                { name: 'Gamma AI', id: 'gamma_ai', desc: 'Learn more about generating engaging presentations.', icon: Lightbulb, color: '#8b5cf6' },
                { name: 'Perplexity', id: 'perplexity', desc: 'Learn more about Perplexity AI enabled research.', icon: Search, color: '#6366f1' },
              ].map(({ name, id, desc, icon: Icon, color }) => (
                <div
                  key={name}
                  onClick={() => onNavigateTool && onNavigateTool(id)}
                  className="flex items-start gap-4 p-4 rounded-2xl border transition-all hover:shadow-md bg-white dark:bg-transparent cursor-pointer"
                  style={{ borderColor: 'var(--color-accent)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: color + '15' }}>
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm truncate" style={{ color: 'var(--color-text)' }}>{name}</p>
                    <p className="text-[10px] mt-1 mb-2 leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.6 }}>{desc}</p>
                    <button className="text-[10px] font-bold uppercase tracking-wider transition-opacity hover:opacity-70" style={{ color }}>
                      TUTORIAL
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'achievements':
        return (
          <div className="rounded-3xl border p-6 flex flex-col bg-white dark:bg-transparent" style={{ borderColor: 'var(--color-accent)' }}>
            <h2 className="font-extrabold text-[11px] uppercase tracking-wider mb-4" style={{ color: 'var(--color-text)' }}>
              Unlocked Achievements
            </h2>
            {badgesUnlocked.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center py-8 text-center bg-gray-50/40 dark:bg-white/5 rounded-2xl">
                <p className="text-[11px] font-semibold" style={{ color: 'var(--color-text)' }}>You haven't unlocked any badges yet.</p>
                <p className="text-[10px] mt-1" style={{ color: 'var(--color-text)', opacity: 0.6 }}>Complete a lesson to earn your first one!</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {badgesUnlocked.map((badge) => (
                  <BadgeCard key={badge.name} badge={badge} />
                ))}
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <DashboardHeader 
        currentUser={currentUser} 
        onLogout={onLogout} 
        onProfileSettings={onProfileSettings} 
        onToggleSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      <div className="flex flex-1 overflow-hidden relative">
        <DashboardSidebar
          active={activeNav}
          setActive={setActiveNav}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          onLogout={onLogout}
          onProfileSettings={onProfileSettings}
        />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-site-text/80 hover:text-site-primary transition-colors font-semibold text-sm w-fit"
            >
              <div className="p-1.5 rounded-full hover:bg-site-accent transition-colors flex items-center justify-center">
                <ChevronLeft className="w-4 h-4" />
              </div>
              Back to Academy Home
            </button>
          )}

          {statsError && (
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border text-sm font-semibold"
              style={{ background: '#F59E0B18', borderColor: '#F59E0B44', color: '#F59E0B' }}>
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              Live stats couldn't load. Please check your connection to the server.
            </div>
          )}

          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardPage; 