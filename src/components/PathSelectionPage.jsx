import React from 'react';
import { 
  Brain, 
  LogOut, 
  Pencil, 
  Palette, 
  Code2, 
  Video, 
  ArrowRight 
} from 'lucide-react';

const ProfessionCard = ({ title, description, icon: Icon, color, onClick }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/60 shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      {/* Icon Container */}
      <div 
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 text-white shadow-sm"
        style={{ backgroundColor: color }}
      >
        <Icon size={40} strokeWidth={1.5} />
      </div>
      
      {/* Text Content */}
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      {/* Button */}
      <button 
        onClick={onClick}
        className="w-full py-3.5 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-opacity hover:opacity-90"
        style={{ backgroundColor: color }}
      >
        Start Learning <ArrowRight size={18} />
      </button>
    </div>
  );
};

const PathSelectionPage = ({ onLogout, onSelectPath }) => {
  const paths = [
    {
      title: 'AI for Educators',
      description: 'Master AI tools and techniques to revolutionize your teaching and classroom strategies',
      icon: Pencil,
      color: '#a855f7' // Purple
    },
    {
      title: 'AI for Designers',
      description: 'Learn how to leverage AI to enhance your creative design workflow',
      icon: Palette,
      color: '#ec4899' // Pink
    },
    {
      title: 'AI for Developers',
      description: 'Build intelligent applications with cutting-edge AI technologies',
      icon: Code2,
      color: '#2563eb' // Blue
    },
    {
      title: 'AI for Content Creators',
      description: 'Transform your content creation with powerful AI assistance',
      icon: Video,
      color: '#16a34a' // Green
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans flex flex-col">
      {/* Header */}
      <header className="h-20 bg-white border-b border-slate-100 px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#155DFC] rounded-xl flex items-center justify-center text-white shadow-sm">
            <Brain size={24} strokeWidth={2} />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-lg font-bold text-slate-900 leading-tight tracking-tight">AI Academy</span>
          </div>
        </div>
        
        <button 
          onClick={onLogout}
          className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <LogOut size={16} />
          Back
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-16 pb-20 px-6">
        <div className="text-center mb-12">
          <h1 className="text-[32px] md:text-[40px] font-bold text-slate-900 mb-4 tracking-tight">
            Choose Your Learning Path
          </h1>
          <p className="text-lg text-slate-500">
            Select a course tailored to your profession and start learning AI
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] w-full">
          {paths.map((path, index) => (
            <ProfessionCard 
              key={index} 
              {...path} 
              onClick={() => onSelectPath(path)} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PathSelectionPage;
