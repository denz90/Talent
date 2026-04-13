import React from 'react';
import { 
  Library, 
  Cpu, 
  MessageSquare, 
  Image as ImageIcon, 
  Brain, 
  Code2, 
  Database,
  Eye
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <button className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm transition-all text-sm font-medium ${
    active 
      ? 'bg-brand-primary text-white shadow-md' 
      : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
  }`}>
    <Icon className="w-4 h-4" />
    {label}
  </button>
);

const DashboardSidebar = () => {
  return (
    <div className="w-64 border-r border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 min-h-screen flex flex-col p-6 gap-8 transition-colors duration-300">
      {/* Learning Paths */}
      <div>
        <h3 className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4 px-4 font-sans text-left">Learning Paths</h3>
        <div className="space-y-1">
          <SidebarItem icon={Brain} label="AI Fundamentals" active />
          <SidebarItem icon={Code2} label="Machine Learning" />
          <SidebarItem icon={MessageSquare} label="Natural Language" />
          <SidebarItem icon={Eye} label="Computer Vision" />
        </div>
      </div>

      {/* Popular Tools */}
      <div>
        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-4 font-sans">Popular Tools</h3>
        <div className="space-y-3">
          {['UX Pilot', 'Midjourney', 'UX Pilot'].map((tool, idx) => (
            <button key={idx} className="w-full flex items-center gap-3 px-4 py-3 border border-slate-100 rounded-sm hover:border-slate-200 hover:shadow-sm transition-all">
              <div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-slate-300 rounded-sm"></div>
              </div>
              <span className="text-sm font-bold text-slate-700">{tool}</span>
              <div className="ml-auto w-1 h-1 bg-brand-primary rounded-full"></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
