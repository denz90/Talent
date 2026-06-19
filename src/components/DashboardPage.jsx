import React, { useState, useEffect, useCallback } from 'react';
import DashboardHeader from './DashboardHeader';
import { API_BASE_URL } from '../config.js';
import {
  BarChart3, Flame, Trophy, Play, Clock, BookOpen, CheckCircle2,
  ChevronRight, Sparkles, Brain, Code2, MessageSquare, Eye,
  Target, TrendingUp, Zap, Star, Circle, Lock, Award,
  GraduationCap, Calendar, LayoutDashboard, Settings, LogOut,
  ChevronLeft, Activity, ArrowUpRight, ArrowRight, Pencil,
  Palette, Video, Lightbulb, Users, Search, AlertCircle, Loader2
} from 'lucide-react';

/* ═══════════════════════════════════════════════
   COURSE DEFINITIONS  (matches PathSelectionPage)
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

const postProgress = async (userId, courseId, progressPercent) => {
  const res = await fetch(`${API_BASE_URL}/api/progress/update`, {
    method: 'POST',
    headers: authHeader(),
    body: JSON.stringify({
      user_id: userId,
      course_id: courseId,
      progress_percent: progressPercent,
    }),
  });
  if (!res.ok) throw new Error('Progress update failed');
  return res.json();
};

/* ═══════════════════════════════════════════════
   UI HELPERS
═══════════════════════════════════════════════ */
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

const StatCard = ({ icon: Icon, label, value, accent, trend, sub, loading }) => (
  <div className="rounded-2xl p-5 border relative overflow-hidden" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}>
    <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: accent + '22' }}>
      <Icon className="w-4 h-4" style={{ color: accent }} />
    </div>
    {loading ? (
      <div className="h-8 w-16 rounded-lg animate-pulse" style={{ background: 'var(--color-accent)' }} />
    ) : (
      <p className="text-2xl font-extrabold tracking-tight" style={{ color: 'var(--color-text)' }}>{value ?? '—'}</p>
    )}
    <p className="text-xs font-semibold mt-0.5" style={{ color: 'var(--color-text)', opacity: 0.5 }}>{label}</p>
    {trend && !loading && (
      <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 mt-1">
        <ArrowUpRight className="w-3 h-3" />{trend}
      </div>
    )}
    {sub && !loading && (
      <p className="text-[11px] mt-1" style={{ color: 'var(--color-text)', opacity: 0.4 }}>{sub}</p>
    )}
    <div className="absolute -right-3 -bottom-3 w-16 h-16 rounded-full pointer-events-none" style={{ background: accent + '15' }} />
  </div>
);

/* ─── Sidebar ─── */
const NAV = [
  { icon: LayoutDashboard, label: 'Overview',     id: 'overview'      },
  { icon: BookOpen,         label: 'My Courses',   id: 'courses'       },
  { icon: Brain,            label: 'AI Tools',     id: 'tools'         },
  { icon: Trophy,           label: 'Achievements', id: 'achievements'  },
  { icon: Activity,         label: 'Activity',     id: 'activity'      },
  { icon: Calendar,         label: 'Schedule',     id: 'schedule'      },
];

const Sidebar = ({ active, setActive, collapsed, setCollapsed, onLogout, onProfileSettings }) => (
  <aside
    className="flex flex-col border-r transition-all duration-300 flex-shrink-0"
    style={{ width: collapsed ? 68 : 224, borderColor: 'var(--color-accent)', background: 'var(--color-bg)' }}
  >
    <div className="flex items-center justify-end p-3">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="p-1.5 rounded-lg transition-all hover:opacity-70"
        style={{ background: 'var(--color-accent)', color: 'var(--color-text)' }}
      >
        {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
      </button>
    </div>
    <nav className="flex-1 px-2 space-y-0.5">
      {NAV.map(({ icon: Icon, label, id }) => {
        const on = active === id;
        return (
          <button
            key={id}
            onClick={() => setActive(id)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-semibold"
            style={{
              background: on ? 'var(--color-primary)' : 'transparent',
              color: on ? 'var(--color-light)' : 'var(--color-text)',
              opacity: on ? 1 : 0.65,
            }}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span className="truncate">{label}</span>}
          </button>
        );
      })}
    </nav>
    {!collapsed && (
      <div className="p-3 space-y-0.5 border-t mt-2" style={{ borderColor: 'var(--color-accent)' }}>
        <button onClick={onProfileSettings} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:opacity-70 text-sm font-semibold" style={{ color: 'var(--color-text)', opacity: 0.6 }}>
          <Settings className="w-4 h-4" /><span>Settings</span>
        </button>
        <button onClick={onLogout} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all hover:bg-red-400/10 text-sm font-semibold text-red-400">
          <LogOut className="w-4 h-4" /><span>Logout</span>
        </button>
      </div>
    )}
  </aside>
);

/* ─── Course card ─── */
const CourseCard = ({ course, progress, onContinue, onUpdateProgress, userId }) => {
  const Icon = course.icon;
  const pct = progress?.progress_percent ?? 0;
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState('');

  const handleContinue = async () => {
    if (!userId) return;
    setSaving(true);
    try {
      const newPct = Math.min(100, pct + 10);
      const result = await postProgress(userId, course.id, newPct);
      onUpdateProgress(course.id, newPct);
      if (result.badges_unlocked?.length > 0) {
        setToast(`🏆 Badge unlocked: ${result.badges_unlocked.join(', ')}`);
        setTimeout(() => setToast(''), 4000);
      }
    } catch (e) {
      console.error(e);
    }
    setSaving(false);
    if (onContinue) onContinue(course);
  };

  const statusLabel = pct === 0 ? 'Not Started' : pct >= 100 ? 'Completed' : 'In Progress';
  const statusColor = pct === 0 ? '#94a3b8' : pct >= 100 ? '#10B981' : course.color;

  return (
    <div
      className="flex items-center gap-4 p-4 rounded-2xl border transition-all hover:shadow-md group cursor-pointer"
      style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: course.color + '22' }}>
        <Icon className="w-6 h-6" style={{ color: course.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <p className="font-bold text-sm truncate" style={{ color: 'var(--color-text)' }}>{course.title}</p>
          <Tag color={statusColor}>{statusLabel}</Tag>
        </div>
        <p className="text-xs mb-2 truncate" style={{ color: 'var(--color-text)', opacity: 0.45 }}>{course.subtitle}</p>
        <ProgressBar pct={pct} color={course.color} />
      </div>
      <div className="flex-shrink-0 flex items-center gap-2">
        <span className="text-xs font-bold" style={{ color: 'var(--color-text)', opacity: 0.4 }}>{Math.round(pct)}%</span>
        <button
          onClick={handleContinue}
          disabled={saving}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold transition-all hover:scale-105 disabled:opacity-50"
          style={{ background: course.color, color: 'white' }}
        >
          {saving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3 fill-white" />}
          {pct === 0 ? 'Start' : pct >= 100 ? 'Review' : 'Continue'}
        </button>
      </div>
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl text-sm font-bold text-white shadow-xl" style={{ background: 'var(--color-primary)' }}>
          {toast}
        </div>
      )}
    </div>
  );
};

/* ─── Weekly chart ─── */
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const WeeklyChart = ({ data }) => {
  const vals = data || [45, 90, 30, 120, 75, 0, 60];
  const max = Math.max(...vals, 1);
  const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
  return (
    <div className="flex items-end gap-2 h-24">
      {DAYS.map((d, i) => {
        const pct = vals[i] / max;
        const isToday = i === todayIdx;
        return (
          <div key={d} className="flex flex-col items-center gap-1.5 flex-1">
            <div className="relative w-full flex items-end justify-center" style={{ height: 68 }}>
              {vals[i] > 0 && (
                <span className="absolute -top-5 text-[9px] font-bold" style={{ color: 'var(--color-text)', opacity: isToday ? 1 : 0.4 }}>
                  {vals[i]}m
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
            <span className="text-[9px] font-bold uppercase" style={{ color: isToday ? 'var(--color-primary)' : 'var(--color-text)', opacity: isToday ? 1 : 0.4 }}>
              {d}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/* ─── Streak dots ─── */
const StreakDots = ({ streak }) => (
  <div className="flex gap-1.5 flex-wrap">
    {Array.from({ length: 14 }).map((_, i) => (
      <div
        key={i}
        className="w-4 h-4 rounded-sm"
        style={{ background: i < streak ? 'var(--color-primary)' : 'var(--color-accent)', opacity: i < streak ? (i >= streak - 3 ? 1 : 0.55) : 0.35 }}
      />
    ))}
  </div>
);

/* ═══════════════════════════════════════════════
   MAIN DASHBOARD
═══════════════════════════════════════════════ */
const DashboardPage = ({ currentUser, onLogout, onProfileSettings }) => {
  const displayName = currentUser?.username || currentUser?.name || currentUser?.email?.split('@')[0] || 'Learner';
  const avatarSeed  = currentUser?.username || 'default';

  const [activeNav,  setActiveNav]  = useState('overview');
  const [collapsed,  setCollapsed]  = useState(false);

  /* Live backend data */
  const [stats,     setStats]     = useState(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError,   setStatsError]   = useState(false);

  /* Per-course progress keyed by course.id */
  const [progressMap, setProgressMap] = useState({});

  /* Load dashboard stats + seed progress from stats */
  const loadStats = useCallback(async () => {
    setStatsLoading(true);
    setStatsError(false);
    try {
      const data = await fetchDashboardStats();
      setStats(data);

      /* If backend returns per-course progress, seed the map */
      if (data?.course_progress && Array.isArray(data.course_progress)) {
        const map = {};
        data.course_progress.forEach(cp => {
          map[cp.course_id] = cp;
        });
        setProgressMap(map);
      }
    } catch (e) {
      console.warn('Dashboard stats not available, using local state', e);
      setStatsError(true);
    }
    setStatsLoading(false);
  }, []);

  useEffect(() => { loadStats(); }, [loadStats]);

  /* Called after a successful progress update */
  const handleProgressUpdate = (courseId, newPct) => {
    setProgressMap(prev => ({
      ...prev,
      [courseId]: { ...(prev[courseId] || {}), progress_percent: newPct },
    }));
    /* Refresh stats so streak / totals update */
    loadStats();
  };

  /* Derived stat values — prefer backend, fall back to local calculation */
  const streak       = stats?.streak           ?? stats?.current_streak  ?? 0;
  const totalHours   = stats?.total_hours       ?? stats?.hours_learned   ?? '—';
  const totalXP      = stats?.total_xp          ?? stats?.xp_total        ?? '—';
  const hoursThisWeek = stats?.hours_this_week  ?? '—';
  const coursesEnrolled = stats?.courses_enrolled ?? COURSES.length;
  const lessonsCompleted = stats?.lessons_completed ?? '—';

  const completedCourses = Object.values(progressMap).filter(p => p.progress_percent >= 100).length;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--color-bg)' }}>
      <DashboardHeader currentUser={currentUser} onLogout={onLogout} onProfileSettings={onProfileSettings} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          active={activeNav}
          setActive={setActiveNav}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          onLogout={onLogout}
          onProfileSettings={onProfileSettings}
        />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">

          {/* ── ERROR BANNER ── */}
          {statsError && (
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border text-sm font-semibold"
              style={{ background: '#F59E0B18', borderColor: '#F59E0B44', color: '#F59E0B' }}>
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              Live stats couldn't load — showing local progress. Your data will sync when you're back online.
            </div>
          )}

          {/* ── HERO BANNER ── */}
          <div
            className="relative rounded-3xl p-7 overflow-hidden flex items-center justify-between"
            style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary) 55%, var(--gradient-to) 100%)' }}
          >
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-light)', opacity: 0.7 }}>
                Good morning 👋
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight" style={{ color: 'var(--color-light)' }}>
                Welcome back, {displayName}!
              </h1>
              <p className="mt-1.5 text-sm" style={{ color: 'var(--color-light)', opacity: 0.65 }}>
                {streak > 0
                  ? <>You're on a <strong style={{ opacity: 1 }}>{streak}-day streak</strong> 🔥 — keep it going!</>
                  : 'Start a lesson today to begin your streak! 🚀'}
              </p>
              <div className="flex gap-3 mt-5">
                <button
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
                  style={{ background: 'var(--color-light)', color: 'var(--color-primary)' }}
                >
                  <Play className="w-4 h-4 fill-current" /> Continue Learning
                </button>
                <button
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105"
                  style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--color-light)', border: '1px solid rgba(255,255,255,0.25)' }}
                  onClick={loadStats}
                >
                  Refresh Stats
                </button>
              </div>
            </div>
            {/* decorative orbs */}
            {streak > 0 && (
              <div className="hidden lg:flex items-center gap-3 pr-2">
                <div className="w-24 h-24 rounded-full flex flex-col items-center justify-center" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)' }}>
                  <Flame className="w-6 h-6 mb-0.5" style={{ color: '#FF9500' }} />
                  <span className="text-3xl font-black" style={{ color: 'var(--color-light)' }}>{streak}</span>
                  <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: 'var(--color-light)', opacity: 0.7 }}>days</span>
                </div>
              </div>
            )}
            <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <div className="absolute right-10 -bottom-8 w-28 h-28 rounded-full pointer-events-none" style={{ background: 'rgba(255,255,255,0.04)' }} />
          </div>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon={GraduationCap} label="Courses"           value={coursesEnrolled}                    accent="#155DFC" loading={statsLoading} />
            <StatCard icon={CheckCircle2}  label="Completed"         value={completedCourses}                   accent="#10B981" sub={`of ${COURSES.length} courses`} loading={statsLoading} />
            <StatCard icon={Clock}         label="Hours Learned"     value={totalHours !== '—' ? `${totalHours}h` : '—'} accent="#F59E0B" sub={hoursThisWeek !== '—' ? `${hoursThisWeek}h this week` : ''} loading={statsLoading} />
            <StatCard icon={Zap}           label="Total XP"          value={totalXP !== '—' ? totalXP.toLocaleString?.() ?? totalXP : '—'} accent="#9810FA" loading={statsLoading} />
          </div>

          {/* ── COURSES + ACTIVITY ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* COURSES — 2 cols */}
            <div className="lg:col-span-2 rounded-3xl border p-6 flex flex-col gap-4" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}>
              <div className="flex items-center justify-between">
                <h2 className="font-extrabold text-base" style={{ color: 'var(--color-text)' }}>My Courses</h2>
                <button className="flex items-center gap-1 text-xs font-bold" style={{ color: 'var(--color-primary)' }}>
                  View All <ArrowRight className="w-3 h-3" />
                </button>
              </div>
              <div className="space-y-3">
                {COURSES.map(course => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    progress={progressMap[course.id]}
                    userId={currentUser?.id}
                    onUpdateProgress={handleProgressUpdate}
                  />
                ))}
              </div>
            </div>

            {/* ACTIVITY FEED — 1 col */}
            <div className="rounded-3xl border p-6 flex flex-col gap-4" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}>
              <h2 className="font-extrabold text-base" style={{ color: 'var(--color-text)' }}>Recent Activity</h2>
              {stats?.recent_activity?.length > 0 ? (
                <div className="space-y-4">
                  {stats.recent_activity.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-primary)' + '22' }}>
                        <CheckCircle2 className="w-3.5 h-3.5" style={{ color: 'var(--color-primary)' }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{item.title || item.description}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-text)', opacity: 0.4 }}>{item.time || item.created_at}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Fallback static activity */
                <div className="space-y-4">
                  {[
                    { icon: Play,         title: 'Started AI for Educators',      meta: 'Just now',      color: '#a855f7' },
                    { icon: CheckCircle2, title: 'Completed intro quiz',           meta: '2 hours ago',   color: '#10B981' },
                    { icon: Trophy,       title: 'Badge: First Steps 🏆',          meta: 'Today',         color: '#F59E0B' },
                    { icon: Flame,        title: `Streak: ${streak || 0} days 🔥`, meta: 'Keep it up!',   color: '#FF9500' },
                    { icon: BookOpen,     title: 'Enrolled in 4 courses',          meta: 'This week',     color: '#155DFC' },
                  ].map(({ icon: Icon, title, meta, color }, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: color + '22' }}>
                        <Icon className="w-3.5 h-3.5" style={{ color }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>{title}</p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-text)', opacity: 0.4 }}>{meta}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── WEEKLY CHART + STREAK + XP ── */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Weekly chart */}
            <div className="rounded-3xl border p-6 flex flex-col gap-4" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}>
              <div className="flex items-center justify-between">
                <h2 className="font-extrabold text-base" style={{ color: 'var(--color-text)' }}>Weekly Study Time</h2>
                <span className="text-xs font-bold px-2 py-1 rounded-lg" style={{ background: 'var(--color-accent)', color: 'var(--color-text)', opacity: 0.8 }}>This Week</span>
              </div>
              <WeeklyChart data={stats?.weekly_minutes} />
              <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: 'var(--color-accent)' }}>
                <span className="text-xs font-semibold" style={{ color: 'var(--color-text)', opacity: 0.5 }}>Total this week</span>
                <span className="text-sm font-extrabold" style={{ color: 'var(--color-primary)' }}>
                  {hoursThisWeek !== '—' ? `${hoursThisWeek}h` : '—'}
                </span>
              </div>
            </div>

            {/* Streak */}
            <div className="rounded-3xl border p-6 flex flex-col gap-4" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#FF950022' }}>
                  <Flame className="w-5 h-5" style={{ color: '#FF9500' }} />
                </div>
                <div>
                  <h2 className="font-extrabold text-base leading-none" style={{ color: 'var(--color-text)' }}>Daily Streak</h2>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text)', opacity: 0.45 }}>Keep showing up!</p>
                </div>
              </div>
              {statsLoading ? (
                <div className="h-14 rounded-xl animate-pulse" style={{ background: 'var(--color-accent)' }} />
              ) : (
                <div className="flex items-end gap-3">
                  <span className="text-5xl font-black tracking-tight" style={{ color: '#FF9500' }}>{streak}</span>
                  <div className="mb-1">
                    <p className="text-sm font-bold" style={{ color: 'var(--color-text)' }}>days</p>
                    <p className="text-xs" style={{ color: 'var(--color-text)', opacity: 0.4 }}>in a row</p>
                  </div>
                </div>
              )}
              <StreakDots streak={streak} />
              <div className="flex items-center justify-between rounded-xl p-3" style={{ background: 'var(--color-accent)' }}>
                <span className="text-xs font-semibold" style={{ color: 'var(--color-text)', opacity: 0.6 }}>Best streak</span>
                <span className="text-sm font-extrabold" style={{ color: 'var(--color-primary)' }}>
                  {stats?.best_streak ?? stats?.max_streak ?? streak} days 🏆
                </span>
              </div>
            </div>

            {/* XP ring */}
            <div className="rounded-3xl border p-6 flex flex-col gap-4" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#9810FA22' }}>
                  <Zap className="w-5 h-5" style={{ color: '#9810FA' }} />
                </div>
                <div>
                  <h2 className="font-extrabold text-base leading-none" style={{ color: 'var(--color-text)' }}>Level Progress</h2>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--color-text)', opacity: 0.45 }}>
                    {stats?.level_label ?? 'Level 5 → Level 6'}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center py-1">
                <div className="relative">
                  <svg width="110" height="110" viewBox="0 0 110 110" className="-rotate-90">
                    <circle cx="55" cy="55" r="46" fill="none" stroke="var(--color-accent)" strokeWidth="9" />
                    <circle
                      cx="55" cy="55" r="46" fill="none"
                      stroke="#9810FA" strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 46}`}
                      strokeDashoffset={`${2 * Math.PI * 46 * (1 - (stats?.level_pct ?? 0.5))}`}
                      style={{ transition: 'stroke-dashoffset 1s ease' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-black" style={{ color: 'var(--color-text)' }}>
                      {stats?.level_pct != null ? `${Math.round(stats.level_pct * 100)}%` : '50%'}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: 'var(--color-text)', opacity: 0.4 }}>to next lvl</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-center" style={{ color: 'var(--color-text)', opacity: 0.4 }}>
                {totalXP !== '—' ? `${totalXP.toLocaleString?.() ?? totalXP} XP earned` : 'Complete lessons to earn XP'}
              </p>
            </div>
          </div>

          {/* ── ACHIEVEMENTS ── */}
          <div className="rounded-3xl border p-6" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-extrabold text-base" style={{ color: 'var(--color-text)' }}>Achievements</h2>
              <span className="text-xs font-bold px-2 py-1 rounded-lg" style={{ background: 'var(--color-accent)', color: 'var(--color-text)' }}>
                {stats?.badges_unlocked?.length ?? 0} / 8 Earned
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {[
                { icon: Star,          title: 'First Steps',      color: '#F59E0B', earnedAfter: 1  },
                { icon: Flame,         title: 'Week Warrior',     color: '#FF9500', earnedAfter: 7  },
                { icon: Trophy,        title: 'Finisher',         color: '#155DFC', earnedAfter: 10 },
                { icon: Zap,           title: 'Speed Learner',    color: '#9810FA', earnedAfter: 5  },
                { icon: Users,         title: 'Community',        color: '#10B981', earnedAfter: 3  },
                { icon: GraduationCap, title: 'AI Expert',        color: '#06B6D4', earnedAfter: 30 },
                { icon: Brain,         title: 'Deep Thinker',     color: '#EC4899', earnedAfter: 20 },
                { icon: Award,         title: 'Course Master',    color: '#84CC16', earnedAfter: 15 },
              ].map(({ icon: Icon, title, color, earnedAfter }, i) => {
                const unlockedNames = stats?.badges_unlocked ?? [];
                const earned = unlockedNames.length > i || streak >= earnedAfter;
                return (
                  <div
                    key={title}
                    className="flex flex-col items-center text-center p-3 rounded-2xl border transition-all"
                    style={{
                      borderColor: earned ? color : 'var(--color-accent)',
                      background: 'var(--color-bg)',
                      opacity: earned ? 1 : 0.4,
                    }}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2" style={{ background: color + '22' }}>
                      <Icon className="w-5 h-5" style={{ color: earned ? color : 'var(--color-text)' }} />
                    </div>
                    <p className="font-bold text-[11px]" style={{ color: 'var(--color-text)' }}>{title}</p>
                    {earned && <div className="mt-1 text-[9px] font-bold text-emerald-400 flex items-center gap-0.5"><CheckCircle2 className="w-2.5 h-2.5" /> Earned</div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── AI TOOLS ── */}
          <div className="rounded-3xl border p-6" style={{ background: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}>
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-extrabold text-base" style={{ color: 'var(--color-text)' }}>AI Tools Used in Your Courses</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: 'ChatGPT',    desc: 'Conversational AI',        icon: MessageSquare, color: '#10B981' },
                { name: 'Gamma AI',   desc: 'Slides & Presentations',   icon: Lightbulb,     color: '#F59E0B' },
                { name: 'Claude',     desc: 'Research & Analysis',      icon: Brain,         color: '#9810FA' },
                { name: 'Perplexity', desc: 'Fact-Checking & Research', icon: Search,        color: '#155DFC' },
              ].map(({ name, desc, icon: Icon, color }) => (
                <div
                  key={name}
                  className="group flex flex-col items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5"
                  style={{ borderColor: 'var(--color-accent)', background: 'var(--color-accent)' }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: color + '22' }}>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: 'var(--color-text)' }}>{name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'var(--color-text)', opacity: 0.5 }}>{desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold" style={{ color }}>
                    Open <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-4" />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
