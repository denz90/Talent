import React from 'react';
import { Check } from 'lucide-react';

const LearningPathCard = ({ icon: Icon, title, description, features, popular, dark, onClick }) => {
  return (
    <div className={`relative p-10 rounded-sm flex flex-col h-full text-left transition-all duration-300 ${dark ? 'bg-brand-dark text-white shadow-2xl scale-105 z-10' : 'bg-white text-slate-900 border border-slate-100 hover:border-slate-200 shadow-sm'}`}>
      {popular && (
        <label className="absolute top-6 right-6 bg-white text-brand-dark text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest shadow-sm">
          Popular
        </label>
      )}
      <div className={`w-12 h-12 rounded-sm flex items-center justify-center mb-8 ${dark ? 'bg-white/10' : 'bg-brand-secondary'}`}>
        <Icon className={`w-6 h-6 ${dark ? 'text-white' : 'text-brand-primary'}`} />
      </div>
      <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
      <p className={`text-sm mb-10 leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-500'}`}>{description}</p>
      
      <ul className="space-y-5 mb-12 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-4 text-[13px] font-bold tracking-tight uppercase">
            <Check className={`w-4 h-4 mt-0.5 ${dark ? 'text-white' : 'text-brand-primary'}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={onClick}
        className={`w-full py-4 rounded-sm font-bold text-sm transition-all border uppercase tracking-wider ${dark ? 'bg-white text-brand-dark hover:bg-slate-100' : 'bg-white border-slate-300 text-slate-900 hover:bg-slate-50'}`}
      >
        Start Path
      </button>
    </div>
  );
};

export default LearningPathCard;
