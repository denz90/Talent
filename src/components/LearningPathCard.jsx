import React from 'react';
import { Check } from 'lucide-react';

const LearningPathCard = ({ icon: Icon, title, description, features, popular, dark, onClick }) => {
  return (
    <div className={`relative p-10 rounded-sm flex flex-col h-full text-left transition-all duration-300 ${dark ? 'bg-site-primary text-site-text shadow-2xl scale-105 z-10' : 'bg-site-bg text-site-text border border-site-accent hover:border-site-accent shadow-sm'}`}>
      {popular && (
        <label className="absolute top-6 right-6 bg-site-bg text-site-primary text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest shadow-sm">
          Popular
        </label>
      )}
      <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-8 ${dark ? 'bg-site-bg/10' : 'bg-site-secondary'}`}>
        <Icon className={`w-6 h-6 ${dark ? 'text-site-text' : 'text-site-text'}`} />
      </div>
      <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className={`text-sm mb-10 leading-relaxed ${dark ? 'text-site-300' : 'text-site-text/80'}`}>{description}</p>
      
      <ul className="space-y-5 mb-12 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-4 text-[13px] font-bold tracking-tight uppercase">
            <Check className={`w-4 h-4 mt-0.5 ${dark ? 'text-site-text' : 'text-site-text'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={onClick}
        className={`w-full py-4 rounded-sm font-bold text-sm transition-all border uppercase tracking-wider ${dark ? 'bg-site-bg text-site-text hover:bg-site-primary/80' : 'bg-site-primary border-slate-300 text-site-text hover:bg-site-primary/80'}`}
      >
        Start Path
      </button>
    </div>
  );
};

export default LearningPathCard;
