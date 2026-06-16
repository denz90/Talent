import React from 'react';
import { Search, Book, User, CreditCard, Wrench, ArrowLeft, ChevronRight } from 'lucide-react';

const HelpCenterPage = ({ onBack }) => {
  const categories = [
    { icon: Book, title: "Getting Started", description: "Learn the basics of using HawkmanLabs.", articles: 12 },
    { icon: User, title: "Account & Profile", description: "Manage your settings and preferences.", articles: 8 },
    { icon: CreditCard, title: "Billing & Plans", description: "Understand your subscription and invoices.", articles: 5 },
    { icon: Wrench, title: "Troubleshooting", description: "Fix common issues and errors.", articles: 15 },
  ];

  const popularArticles = [
    "How to connect my first AI model?",
    "Resetting your password",
    "Understanding usage limits",
    "Upgrading your subscription plan"
  ];

  return (
    <div className="min-h-screen bg-site-bg font-sans text-site-text pb-20">
      {/* Header */}
      <div className="bg-brand-dark pt-20 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/90"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <button 
            onClick={onBack}
            className="flex items-center text-white/70 hover:text-white transition-colors mb-8 mx-auto text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">How can we help?</h1>
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for articles, tutorials, or topics..." 
              className="w-full pl-12 pr-4 py-4 rounded-xl border-none outline-none focus:ring-2 focus:ring-brand-primary bg-site-bg text-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-site-bg p-6 rounded-2xl shadow-sm border border-site-accent hover:shadow-md transition-shadow cursor-pointer group">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                <cat.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-bold text-site-text mb-2">{cat.title}</h3>
              <p className="text-site-text/80 text-sm mb-4 leading-relaxed">{cat.description}</p>
              <div className="flex items-center text-brand-primary text-sm font-semibold">
                {cat.articles} Articles <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-site-bg rounded-3xl p-8 md:p-12 shadow-sm border border-site-accent flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6 text-brand-dark">Popular Articles</h2>
            <ul className="space-y-4">
              {popularArticles.map((article, idx) => (
                <li key={idx}>
                  <a href="#" className="text-site-text/80 hover:text-brand-primary font-medium flex items-center group">
                    <Book className="w-4 h-4 mr-3 text-slate-300 group-hover:text-brand-primary transition-colors" />
                    {article}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 bg-site-bg rounded-2xl p-8 text-center flex flex-col justify-center items-center">
            <h3 className="text-xl font-bold mb-3 text-brand-dark">Still need help?</h3>
            <p className="text-site-text/80 mb-6 text-sm">Our support team is available 24/7 to assist you with any issues.</p>
            <button className="bg-brand-dark hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-full transition-colors w-full">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
