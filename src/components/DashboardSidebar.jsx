import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Brain, 
  Trophy,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
      active 
        ? 'bg-brand-primary text-white shadow-md' 
        : 'text-site-text/70 hover:bg-site-accent/20 hover:text-site-text'
    }`}
  >
    <Icon className="w-4 h-4" />
    {label}
  </button>
);

const DashboardSidebar = ({ 
  active, 
  setActive, 
  collapsed, 
  setCollapsed, 
  onLogout, 
  onProfileSettings 
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'tools', label: 'AI Tools', icon: Brain },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
  ];

  return (
    <aside 
      className={`flex flex-col h-full transition-all duration-300 ${
        collapsed ? 'w-[68px]' : 'w-[240px]'
      }`}
      style={{ 
        background: 'var(--color-bg)',
        borderRight: '1px solid var(--color-accent)'
      }}
    >
      {/* Collapse toggle */}
      <div className="flex justify-end p-4" style={{ borderBottom: '1px solid var(--color-accent)' }}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg transition-all hover:opacity-70"
          style={{ background: 'var(--color-accent)', color: 'var(--color-text)' }}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={active === item.id}
            onClick={() => setActive(item.id)}
          />
        ))}
      </nav>

      {/* Bottom actions */}
      <div className="p-4 space-y-1" style={{ borderTop: '1px solid var(--color-accent)' }}>
        <button
          onClick={onProfileSettings}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium text-site-text/70 hover:bg-site-accent/20 hover:text-site-text ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <Settings className="w-4 h-4" />
          {!collapsed && 'Settings'}
        </button>
        <button
          onClick={onLogout}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium text-red-500 hover:bg-red-50/50 ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <LogOut className="w-4 h-4" />
          {!collapsed && 'Logout'}
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;