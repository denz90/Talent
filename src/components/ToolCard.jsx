import React from 'react';

const ToolCard = ({ icon: Icon, title, description, lessons, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="border border-slate-100 p-8 rounded-sm bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-6 h-full text-left w-full cursor-pointer group"
    >
      <div className="w-12 h-12 bg-zinc-800 rounded-sm flex items-center justify-center text-white shadow-sm overflow-hidden group-hover:bg-brand-primary transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">{description}</p>
        <span className="text-[13px] font-bold text-brand-primary uppercase tracking-tight">{lessons || 'Tutorial'}</span>
      </div>
    </button>
  );
};

export default ToolCard;
