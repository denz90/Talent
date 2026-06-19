import React from 'react';
import { 
  Brain, 
  ArrowLeft, 
  Pencil, 
  Palette, 
  Code2, 
  Video, 
  ArrowRight 
} from 'lucide-react';

const ProfessionCard = ({ title, description, icon: Icon, color, onClick }) => {
  return (
    <div className="bg-site-bg rounded-xl border border-site-accent/60 shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
      {/* Icon Container */}
      <div 
        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 text-white shadow-sm"
        style={{ backgroundColor: color }}
      >
        <Icon size={40} strokeWidth={1.5} />
      </div>
      
      {/* Text Content */}
      <h3 className="text-xl font-bold text-site-text mb-3">{title}</h3>
      <p className="text-site-text/80 leading-relaxed mb-8 flex-grow">
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

const PathSelectionPage = ({ onBack, onSelectPath, level }) => {
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
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-16 pb-20 px-6 max-w-7xl mx-auto w-full">
        {/* Back Button */}
        <div className="w-full max-w-[900px] flex justify-start mb-8">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-site-text/80 hover:text-brand-primary transition-colors font-medium w-fit text-sm"
          >
            <div className="p-2 rounded-full hover:bg-site-accent transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </div>
            Back to Home
          </button>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-[32px] md:text-[40px] font-bold text-site-text mb-4 tracking-tight">
            Choose Your {level} Learning Path
          </h1>
          <p className="text-lg text-site-text/80">
            Select a course tailored to your profession and start learning AI
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] w-full">
          {paths.map((path, index) => (
            <ProfessionCard 
              key={index} 
              {...path} 
              onClick={() => onSelectPath({ ...path, level })} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PathSelectionPage;
