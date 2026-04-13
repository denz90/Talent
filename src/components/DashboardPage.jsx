import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import {
  BarChart3,
  Flame,
  Trophy,
  Play,
  Clock,
  User as UserIcon,
  ChevronRight,
  ChevronLeft,
  Sparkles
} from 'lucide-react';

const StatCard = ({ title, icon: Icon, children }) => (
  <div className="bg-white dark:bg-slate-800 p-8 rounded-sm shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col h-full transition-colors duration-300">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">{title}</h3>
      <Icon className="w-4 h-4 text-slate-400" />
    </div>
    {children}
  </div>
);

const ProgressItem = ({ label, percentage }) => (
  <div className="mb-4 last:mb-0">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <span className="text-[11px] font-bold text-brand-primary">{percentage}%</span>
    </div>
    <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
      <div
        className="h-full bg-slate-900 rounded-full transition-all duration-1000"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

const DashboardPage = ({ onLogout, onProfileSettings }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col transition-colors duration-300">
      <DashboardHeader onLogout={onLogout} onProfileSettings={onProfileSettings} />

      <div className="flex flex-1">
        <DashboardSidebar />

        <main className="flex-1 p-10 overflow-y-auto max-w-7xl mx-auto">
          {/* Welcome Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome back, Alex!</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Continue your AI learning journey</p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            <StatCard title="Learning Progress" icon={BarChart3}>
              <ProgressItem label="AI Fundamentals" percentage={75} />
              <ProgressItem label="Machine Learning" percentage={45} />
            </StatCard>

            <StatCard title="Daily Streak" icon={Flame}>
              <div className="flex flex-col items-center justify-center flex-1 py-4">
                <span className="text-5xl font-bold text-slate-900 mb-2 tracking-tight">14</span>
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Days in a row</span>
                <button className="bg-brand-primary text-white px-8 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20">Keep Going</button>
              </div>
            </StatCard>

            <StatCard title="Achievements" icon={Trophy}>
              <div className="space-y-4">
                {[
                  { label: 'First Course Complete', active: true },
                  { label: 'Week Warrior', active: true },
                  { label: 'Tool Explorer', active: true }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                    </div>
                    <span className="text-sm font-bold text-slate-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </StatCard>
          </div>

          {/* Activity Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Continue Learning */}
            <div className="bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Continue Learning</h3>
              </div>
              <div className="p-8 space-y-8 flex-1">
                {[
                  { title: 'Introduction to Neural Networks', subtitle: 'Chapter 3: Backpropagation', progress: 50, action: 'Continue' },
                  { title: 'Prompt Engineering Mastery', subtitle: 'Lesson 5: Advanced Techniques', progress: 25, action: 'Start' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-20 h-20 bg-slate-100 rounded-sm flex-shrink-0"></div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-slate-900 group-hover:text-brand-primary transition-colors cursor-pointer">{item.title}</h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 mt-1.5">{item.subtitle}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex-grow h-1.5 bg-slate-100 rounded-full overflow-hidden"> 
                          <div className="h-full bg-slate-900 rounded-full" style={{ width: `${item.progress}%` }}></div>
                        </div>
                        <span className="text-[11px] font-bold text-slate-400">{item.progress}% complete</span>
                      </div>
                    </div>
                    <button className={`px-6 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all ${item.action === 'Continue' ? 'bg-brand-primary text-white hover:bg-brand-primary/90' : 'bg-slate-50 text-slate-400 border border-slate-100 hover:bg-slate-100'}`}>
                      {item.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended */}
            <div className="bg-white rounded-sm shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Recommended for You</h3>
              </div>
              <div className="p-8 space-y-8">
                {[
                  { title: 'Computer Vision Basics', subtitle: 'Learn image processing with AI', tag: 'Beginner', time: '4 hours' },
                  { title: 'GPT-4 API Integration', subtitle: 'Build apps with UX Pilot AI API', tag: 'Intermediate', time: '6 hours' },
                  { title: 'AI Ethics & Bias', subtitle: 'Responsible AI development', tag: 'All Levels', time: '3 hours' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-16 h-16 bg-slate-100 rounded-sm flex-shrink-0"></div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-slate-900 group-hover:text-brand-primary transition-colors">{item.title}</h4>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 mb-2.5">{item.subtitle}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                          <UserIcon className="w-3 h-3" /> {item.tag}
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-l border-slate-100 pl-4">
                          <Clock className="w-3 h-3" /> {item.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tool Playground */}
          <div className="bg-white rounded-sm shadow-sm border border-slate-100 p-10">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Tool Playground</h3>
              <button className="text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:text-brand-primary transition-colors">View All</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['UX Pilot Sandbox', 'Image Generator', 'Code Assistant', 'Data Analyzer'].map((tool, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="w-full aspect-video bg-slate-100 rounded-sm mb-4 overflow-hidden border border-slate-50 relative">
                    <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <Play className="w-8 h-8 text-brand-primary fill-brand-primary" />
                    </div>
                  </div>
                  <h4 className="font-bold text-slate-900 group-hover:text-brand-primary transition-colors text-sm">{tool}</h4>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="h-20 bg-white border-t border-slate-100 px-10 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-[12px] font-bold text-slate-400">© 2025 Talent Oasis. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-8">
          {['Help Center', 'Privacy Policy', 'Terms of Service'].map(link => (
            <a key={link} href="#" className="text-[11px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-all">{link}</a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
