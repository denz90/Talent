import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  MessageCircleQuestion, 
  ArrowRight 
} from 'lucide-react';

export const FAQ_DATA = [
  {
    category: 'General',
    question: 'What is Talent Oasis AI?',
    answer: 'A platform that gives you a straight path through AI, a quiz that finds your starting point, a prompt pack built for your industry, and a 28-day challenge that turns confusion into a real, usable skill. 20 minutes a day, no fluff.'
  },
  {
    category: 'Getting Started',
    question: 'Do I need any tech background to start?',
    answer: 'No. Nobody is too non-technical for this. Day 1 meets you exactly at zero, whether that’s “never opened ChatGPT” or “I use it sometimes but not well.”'
  },
  {
    category: 'Commitment',
    question: 'How much time does this actually take?',
    answer: '20 minutes a day. That’s the whole design — not a two-hour lesson you need a free Saturday for.'
  },
  {
    category: 'Commitment',
    question: 'What if I don’t finish?',
    answer: 'Most online courses have a 5–15% completion rate. That’s a format problem, not a you problem, which is exactly why this isn’t built like a course. One small task a day means missing one day doesn’t mean starting over.'
  },
  {
    category: 'Curriculum',
    question: 'What industries do you cover?',
    answer: 'Graphic Design, Software Engineering, Education, Finance, Social Media, and more. The quiz routes you to the tools and prompts built for your actual field — not a generic list.'
  },
  {
    category: 'Curriculum',
    question: 'What’s the difference between the Starter Pack and the Deeper Pack?',
    answer: 'Starter Pack is single-step prompts for total beginners. Deeper Pack is chained, multi-step prompts for people already comfortable who want more leverage. The quiz decides which one fits you — you don’t have to guess.'
  },
  {
    category: 'Tools',
    question: 'How do you choose which tools to include?',
    answer: 'Every tool is tried, tested, and grouped by industry before it ever reaches you. You’re not gambling on the latest trending tool — you’re getting what’s already been vetted.'
  },
  {
    category: 'Tools',
    question: 'Do I need to already know which AI tool to use?',
    answer: 'No. You don’t have to decide. We already did.'
  },
  {
    category: 'Outcomes',
    question: 'What happens after Day 28?',
    answer: 'You walk away with a real, usable skill, not just “AI awareness.” You’ll know how to prompt properly, which tools fit your work, and how to keep building from there on your own.'
  },
  {
    category: 'Pricing',
    question: 'Is this free?',
    answer: 'Our starter quiz and initial prompt packs are completely free to get started. You can begin exploring and learning today at zero cost.'
  },
  {
    category: 'Curriculum',
    question: 'I already know the basics. Is this still for me?',
    answer: 'The quiz routes you straight to the Deeper Pack and a more advanced track — no re-explaining what a prompt is. If a chained prompt still teaches you something, you’re in the right place.'
  }
];

const FAQSection = ({ onContactSupport }) => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = useMemo(() => {
    const cats = ['All'];
    FAQ_DATA.forEach(item => {
      if (!cats.includes(item.category)) {
        cats.push(item.category);
      }
    });
    return cats;
  }, []);

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32 bg-site-bg border-t border-site-accent/40 relative content-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-site-primary/10 border border-site-primary/20 text-site-text font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-site-primary" />
            <span>Got Questions?</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-site-text tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-site-text/80 max-w-2xl mx-auto font-medium">
            Everything you need to know about Talent Oasis AI, our curated tools, and how the 28-day challenge works.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="mb-10 sm:mb-12 space-y-4">
          {/* Search Input */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-site-text/40 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or topics..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-site-bg border border-site-accent focus:border-site-primary focus:ring-2 focus:ring-site-primary/20 outline-none text-site-text text-sm sm:text-base transition-all placeholder:text-site-text/40 shadow-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-site-text/50 hover:text-site-text px-1.5 py-0.5 rounded bg-site-accent/60 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-site-primary text-white shadow-xs scale-105'
                    : 'bg-site-bg border border-site-accent text-site-text/70 hover:text-site-text hover:bg-site-accent/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 max-w-3xl mx-auto">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-site-primary/5 border-site-primary/40 shadow-sm' 
                      : 'bg-site-bg border-site-accent hover:border-site-accent/80'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer select-none group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-site-primary text-white' : 'bg-site-accent/60 text-site-text/60 group-hover:bg-site-accent'
                      }`}>
                        <HelpCircle size={15} />
                      </div>
                      <span className={`text-base sm:text-lg font-bold transition-colors ${
                        isOpen ? 'text-site-text' : 'text-site-text/90 group-hover:text-site-text'
                      }`}>
                        {item.question}
                      </span>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen 
                        ? 'rotate-180 bg-site-primary/10 text-site-primary' 
                        : 'bg-site-accent/40 text-site-text/60 group-hover:bg-site-accent'
                    }`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-site-text/85 font-medium leading-relaxed border-t border-site-accent/40 animate-in fade-in duration-200">
                      <div className="pl-9.5">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-site-bg rounded-2xl border border-site-accent p-8">
              <MessageCircleQuestion className="w-12 h-12 text-site-text/30 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-site-text mb-1">No matching questions found</h3>
              <p className="text-sm text-site-text/70 mb-4">Try searching with different keywords or view all categories.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="text-xs font-bold text-site-primary hover:underline cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Bottom Help Banner */}
        <div className="mt-14 sm:mt-16 bg-gradient-to-r from-site-primary to-site-accent p-8 sm:p-10 rounded-3xl text-site-text shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">Have more questions?</h3>
            <p className="text-site-text/90 text-sm sm:text-base font-medium max-w-xl">
              Can't find the answer you're looking for? Reach out to our community team or visit our Help Center.
            </p>
          </div>
          
          <div className="shrink-0">
            <button
              onClick={() => {
                if (onContactSupport) {
                  onContactSupport('help_center');
                }
              }}
              className="bg-site-bg text-site-text font-bold px-6 py-3.5 rounded-xl shadow-md hover:opacity-90 active:scale-95 transition-all flex items-center gap-2 cursor-pointer text-sm sm:text-base"
            >
              Visit Help Center <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
