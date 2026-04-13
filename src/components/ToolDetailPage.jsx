import React from 'react';
import { Gift, ArrowLeft, BookOpen, Search, MessageCircle } from 'lucide-react';

const ToolDetailPage = ({ tool, onBack }) => {
  if (!tool) return null;

  const { title, whatItIs, useFor, prompt, quote, image, icon: Icon } = tool;

  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 p-8 lg:p-24 flex flex-col justify-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-brand-primary transition-colors mb-12 font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>

          <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-12 tracking-tight">
            {title}
          </h1>

          <div className="space-y-12 max-w-2xl">
            {/* What It Is */}
            <section>
              <div className="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center mb-6 border border-slate-100">
                <Icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">What It Is</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                {whatItIs}
              </p>
            </section>

            {/* Divider Icon */}
            <div className="flex items-center gap-4 py-4">
              <div className="h-[1px] bg-slate-100 flex-grow"></div>
              <div className="w-6 h-6 border-2 border-brand-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
              </div>
              <div className="h-[1px] bg-slate-100 flex-grow"></div>
            </div>

            {/* What Educators Use It For */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-6">What Educators Use It For</h2>
              <ul className="space-y-4">
                {useFor.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                    <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Prompt Section */}
            <section className="bg-slate-50 p-8 rounded-sm border-l-4 border-brand-primary">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Prompt</h2>
              <p className="text-slate-600 bg-white p-6 rounded border border-slate-100 italic leading-relaxed font-medium mb-6">
                "{prompt}"
              </p>
              <div className="flex items-center gap-3 text-brand-primary font-bold text-sm italic">
                <span>{quote}</span>
              </div>
            </section>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="hidden lg:block w-2/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ToolDetailPage;
