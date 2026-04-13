import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  Lightbulb,
  PenTool,
  Zap,
  Settings,
  ShieldAlert,
  ChevronRight,
  ChevronDown,
  RefreshCw,
  FileText
} from 'lucide-react';

// eslint-disable-next-line no-unused-vars
const SidebarItem = ({ icon: Icon, label, href, active = false }) => (
  <a
    href={href}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium group ${active
      ? 'bg-gradient-to-r from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/20'
      : 'text-slate-500 hover:bg-white hover:text-brand-primary hover:shadow-sm'
      }`}
  >
    <div className={`p-2 rounded-lg transition-colors ${active ? 'bg-white/20' : 'bg-slate-50 group-hover:bg-brand-secondary'}`}>
      <Icon className="w-4 h-4" />
    </div>
    <span className="flex-1">{label}</span>
    {active && <ChevronRight className="w-3 h-3 opacity-50" />}
  </a>
);

const BeginnerSidebar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(true);

  const topics = [
    { id: 'intro', label: 'What is a Prompt?', icon: HelpCircle },
    { id: 'basics', label: 'Prompting Basics', icon: Lightbulb },
    { id: 'craft', label: 'The CRAFT Formula', icon: PenTool },
    { id: 'skills', label: 'Practical Skills', icon: Zap },
    { id: 'iteration', label: 'Iteration Prompting', icon: RefreshCw },
    { id: 'advanced', label: 'Advanced Techniques', icon: Settings },
    { id: 'work', label: 'Prompting for Work', icon: FileText },
    { id: 'ethics', label: 'Ethics & Limitations', icon: ShieldAlert },
  ];

  return (
    <aside className="w-72 hidden lg:flex flex-col gap-6 sticky top-28 pr-4 custom-scrollbar">
      <div className="bg-white rounded-[24px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between p-5 transition-colors group ${isOpen ? 'bg-slate-50/50' : 'hover:bg-slate-50'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl transition-colors ${isOpen ? 'bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-lg shadow-brand-primary/20' : 'bg-brand-secondary text-brand-primary'}`}>
              <PenTool className="w-4 h-4" />
            </div>
            <span className="font-bold text-slate-900 tracking-tight">Prompt Engineering</span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-brand-primary' : 'text-slate-400 opacity-50'}`} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <nav className="p-3 pt-0 space-y-1.5 pb-5">
                <div className="h-px bg-slate-100 mx-2 mb-4 opacity-50" />
                {topics.map((topic) => (
                  <SidebarItem
                    key={topic.id}
                    id={topic.id}
                    label={topic.label}
                    icon={topic.icon}
                    href={`#${topic.id}`}
                    active={activeSection === topic.id}
                  />
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-auto p-6 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        <h4 className="font-bold mb-2 relative z-10">Need Help?</h4>
        <p className="text-xs text-white/80 mb-4 relative z-10 leading-relaxed">
          Stuck on a module? Ask our AI Tutor for instant clarification.
        </p>
        <button className="w-full py-2 bg-white text-brand-primary rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors relative z-10">
          Open AI Tutor
        </button>
      </div>
    </aside>
  );
};

export default BeginnerSidebar;
