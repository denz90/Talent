import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Info,
  Star,
  Zap,
  Target,
  User,
  Layout,
  MessageSquare,
  Search,
  RefreshCw,
  FileText,
  AlertTriangle,
  Lock,
  Eye,
  Menu,
  X,
  PenTool
} from 'lucide-react';
import BeginnerSidebar from './BeginnerSidebar';

// Course Data Model
const COURSE_SECTIONS = [
  {
    id: 'intro',
    title: '1. What is a Prompt?',
    subtitle: 'Your guide to mastering AI communication',
    type: 'intro'
  },
  {
    id: 'basics',
    title: '2. Prompting Basics',
    subtitle: 'Good vs Bad Prompts',
    type: 'comparison'
  },
  {
    id: 'craft',
    title: '3. The CRAFT Formula',
    subtitle: 'Your secret weapon for perfect prompts',
    type: 'formula'
  },
  {
    id: 'skills',
    title: '4. Practical Prompting Skills',
    subtitle: 'The 6 Prompt Types You Must Master',
    type: 'skills-list'
  },
  {
    id: 'iteration',
    title: '5. Iteration Prompting',
    subtitle: 'Refining and Improving Your Results',
    type: 'iteration'
  },
  {
    id: 'advanced',
    title: '6. Advanced Techniques',
    subtitle: 'Take your prompting to the next level',
    type: 'advanced'
  },
  {
    id: 'work',
    title: '7. Prompting for Work',
    subtitle: 'Common Use Cases in your Department',
    type: 'grid'
  },
  {
    id: 'ethics',
    title: '8. Ethical Limitations & Mistakes',
    subtitle: 'Essential considerations for AI users',
    type: 'ethics'
  }
];

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8 md:mb-12">
    <h2 className="text-2xl md:text-3xl font-bold text-site-text mb-2 md:mb-3 tracking-tight">{title}</h2>
    <p className="text-site-text/80 font-medium text-sm md:text-base">{subtitle}</p>
  </div>
);

const ContentCard = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-site-bg rounded-3xl border border-site-accent p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow ${className}`}
  >
    {children}
  </motion.div>
);

const BeginnerPage = ({ onBack, onLogoClick, onNavClick }) => {
  const [activeSection, setActiveSection] = useState('intro');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Intersection Observer for sidebar sync
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    COURSE_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-site-bg">

      {/* Mobile sticky back bar – always visible on small screens */}
      <div className="lg:hidden sticky top-[57px] z-40 bg-site-bg/95 backdrop-blur-md border-b border-site-accent px-4 py-3 flex items-center justify-between shadow-sm">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-site-text/80 hover:text-site-primary transition-colors font-semibold text-sm"
        >
          <div className="p-1.5 rounded-full hover:bg-site-accent transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Back
        </button>
        <span className="text-xs font-bold text-site-text/60 uppercase tracking-widest">Beginner Course</span>
        {/* Mobile sidebar toggle (hamburger) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-xl bg-site-accent text-site-text hover:opacity-80 active:scale-95 transition-all"
          aria-label="Toggle course navigation"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div key="mobile-menu-container" className="fixed inset-0 z-40 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-site-bg/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 left-0 w-[85vw] max-w-sm bg-site-bg p-6 md:p-8 shadow-2xl flex flex-col border-r border-site-accent"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-bold text-site-text">Course Navigation</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 -mr-2 text-site-text/60 hover:text-site-text">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto flex-1">
                <BeginnerSidebar activeSection={activeSection} className="flex flex-col gap-6 w-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-20">
        <div className="flex gap-12 relative items-start">

          {/* Desktop Sidebar (Hidden securely on mobile) */}
          <div className="hidden lg:flex lg:flex-col w-64 shrink-0 sticky top-32 gap-3">
            {/* Back button sits on top of the sidebar */}
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-site-text/80 hover:text-site-primary transition-colors font-semibold text-sm w-fit"
            >
              <div className="p-1.5 rounded-full group-hover:bg-site-accent transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Back to Learning Paths
            </button>
            <BeginnerSidebar activeSection={activeSection} />
          </div>

          {/* Main Content Area - Added min-w-0 to prevent flex blowout */}
          <main className="flex-1 min-w-0 space-y-12 md:space-y-16">

            {/* Hero / Back Button – back button hidden on desktop (lives in sidebar column) */}
            <div className="flex flex-col gap-4 md:gap-6">
              <button
                onClick={onBack}
                className="lg:hidden group flex items-center gap-2 text-site-text/80 hover:text-site-text transition-colors font-medium w-fit text-sm md:text-base"
              >
                <div className="p-2 rounded-full group-hover:bg-site-accent transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                Back to Learning Paths
              </button>
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-site-text mb-3 md:mb-4 tracking-tight">
                  Prompt Engineering <br className="md:hidden" /> for Beginners
                </h1>
                <p className="text-base md:text-lg text-site-text/80 max-w-2xl leading-relaxed"> </p> 
                <p className="text-base md:text-lg text-site-text/80 max-w-2xl leading-relaxed">
                  The ultimate guide to communicating with AI. Learn how to transform your ideas into perfect results.
                </p>
              </div>
            </div>

            {/* Sections */}
            {COURSE_SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 lg:scroll-mt-32">
                <SectionHeader title={section.title} subtitle={section.subtitle} />

                {section.type === 'intro' && (
                  <>
                    <ContentCard className="bg-gradient-to-br from-site-primary to-site-accent text-site-text border-none p-6 md:p-12 overflow-hidden relative">
                      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-site-bg/10 rounded-full blur-3xl hidden md:block"></div>
                      <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        <div>
                          <p className="text-lg md:text-2xl font-medium mb-6 md:mb-8 leading-relaxed">
                            A prompt is your <span className="font-bold underline decoration-white/30">instruction to AI</span>, it tells the AI:
                          </p>
                          <div className="space-y-3 md:space-y-4">
                            {[{ icon: Target, text: "What you want" }, { icon: Zap, text: "How you want it" }, { icon: User, text: "Who it's for" }].map((item, i) => (
                              <div key={i} className="flex items-center gap-4 bg-site-bg/10 p-3 md:p-4 rounded-xl md:rounded-2xl backdrop-blur-sm border border-white/10">
                                <div className="p-2 bg-site-bg/20 rounded-lg">
                                  <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                                </div>
                                <span className="font-bold text-sm md:text-base">{item.text}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bg-site-bg/10 p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-md border border-white/20">
                          <h4 className="text-lg md:text-xl font-bold mb-3 md:mb-4 flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-300 fill-yellow-300 shrink-0" /> 
                            Think of AI like a smart intern.
                          </h4>
                          <p className="text-xs md:text-sm text-site-text/80 mb-4 font-medium italic">It is capable, but:</p>
                          <ul className="space-y-3 md:space-y-4">
                            {[
                              "It does not know your context",
                              "It needs clear instructions",
                              "It improves with feedback"
                            ].map((text, i) => (
                              <li key={i} className="flex gap-3 text-xs md:text-sm items-start">
                                <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-site-text/60 mt-0.5" />
                                <span>{text}</span>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-site-accent/50 text-xs md:text-sm font-bold">
                            If you guide it well, it will produce excellent work.
                          </p>
                        </div>
                      </div>
                    </ContentCard>

                    <div className="mt-6 md:mt-8 bg-site-bg/10 border border-site-primary/30 p-5 md:p-8 rounded-2xl md:rounded-3xl flex flex-col md:flex-row items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-site-primary to-site-accent text-site-text rounded-2xl shadow-lg shadow-site-primary/20 shrink-0">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-site-primary mb-1 md:mb-2 text-sm md:text-base">Activity:</h4>
                        <p className="text-site-text/80 leading-relaxed font-medium text-sm md:text-base">
                          Think about a task you do at work. Now imagine explaining it to someone who's never done it before. That's prompting.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {section.type === 'comparison' && (
                  <div className="space-y-8 md:space-y-12">
                    <p className="text-site-text/80 font-medium text-base md:text-lg italic border-l-4 border-site-accent pl-4 md:pl-6">
                      "The quality of your prompt determines the quality of your result."
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4 md:space-y-6">
                        <h4 className="flex items-center gap-2 text-site-text font-bold text-base md:text-lg">
                          <XCircle className="w-5 h-5 text-rose-500" /> Ineffective prompts are usually:
                        </h4>
                        <ul className="space-y-2 md:space-y-3 pl-7 list-disc text-site-text font-medium text-sm md:text-base">
                          <li>Too vague</li>
                          <li>Missing context</li>
                          <li>Not specific</li>
                        </ul>
                      </div>
                      <div className="space-y-4 md:space-y-6">
                        <h4 className="flex items-center gap-2 text-site-text font-bold text-base md:text-lg">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500" /> Effective prompts are:
                        </h4>
                        <ul className="space-y-2 md:space-y-3 pl-7 list-disc text-site-text font-medium text-sm md:text-base">
                          <li>Clear</li>
                          <li>Specific</li>
                          <li>Structured</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      {/* Theme-safe Bad Prompt Card */}
                      <ContentCard className="border-rose-500/20 bg-rose-500/5">
                        <div className="flex items-center gap-3 text-rose-500 font-bold mb-4 md:mb-6">
                          <XCircle className="w-5 h-5 md:w-6 md:h-6" />
                          <span>Ineffective Prompt:</span>
                        </div>
                        <div className="bg-site-bg border border-rose-500/20 p-5 md:p-8 rounded-2xl italic font-serif text-site-text/60 mb-4 text-base md:text-lg">
                          "Write about marketing"
                        </div>
                        <p className="text-sm text-site-text font-bold opacity-80">Problem: Too vague</p>
                      </ContentCard>

                      {/* Theme-safe Good Prompt Card */}
                      <ContentCard className="border-site-primary/30 bg-site-primary/5">
                        <div className="flex items-center gap-3 text-site-primary font-bold mb-4 md:mb-6">
                          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" />
                          <span>Effective Prompt:</span>
                        </div>
                        <div className="bg-site-bg border border-site-primary/20 p-5 md:p-8 rounded-2xl text-site-text font-medium mb-4 text-base md:text-lg leading-relaxed">
                          "Write a <span className="text-site-primary font-bold">300-word article</span> explaining <span className="text-site-primary font-bold">digital marketing</span> to <span className="text-site-primary font-bold">small business owners in Ghana</span>. Use simple language and local examples."
                        </div>
                        <p className="text-xs md:text-sm text-site-text font-medium opacity-80 leading-relaxed">
                          Why it works: Clear task • Defined audience • Specific length • Context provided
                        </p>
                      </ContentCard>
                    </div>

                    <ContentCard className="bg-gradient-to-r from-site-primary to-site-accent text-site-text text-center py-8 md:py-10 border-none">
                      <p className="text-lg md:text-xl font-bold">The more specific your instruction, the better the result.</p>
                    </ContentCard>

                    <div className="bg-site-bg border border-site-accent p-6 md:p-10 rounded-2xl md:rounded-3xl">
                      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <div className="p-2 md:p-3 bg-gradient-to-br from-site-primary to-site-accent text-site-text rounded-xl md:rounded-2xl shadow-lg">
                          <Layout className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <h4 className="font-bold text-lg md:text-xl text-site-text">Activity:</h4>
                      </div>
                      <p className="text-site-text font-medium mb-6 md:mb-8 text-base md:text-lg">Turn these bad prompts into good ones:</p>
                      <div className="space-y-4 md:space-y-6">
                        {[
                          '1. "Tell me about climate change"',
                          '2. "Write an email"',
                          '3. "Help with my presentation"'
                        ].map((item, i) => (
                          <div key={i} className="bg-site-bg p-4 md:p-5 rounded-xl md:rounded-2xl shadow-sm border border-site-accent font-bold text-site-text text-sm md:text-base">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {section.type === 'formula' && (
                  <div className="space-y-8 md:space-y-12">
                    <ContentCard className="p-0 overflow-hidden border-site-accent bg-site-bg">
                      <div className="bg-gradient-to-r from-site-primary to-site-accent text-site-text p-8 md:p-10 text-center">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">The CRAFT Formula</h3>
                        
                        {/* Fixed flex-wrap for mobile screens */}
                        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                          {['C', 'R', 'A', 'F', 'T'].map((l, i) => (
                            <div key={i} className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-site-bg/10 flex items-center justify-center font-bold text-xl md:text-3xl border border-site-bg/20 backdrop-blur-md shadow-lg">
                              {l}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 md:p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {[
                          { l: 'C', t: 'Context', s: "What's the situation?" },
                          { l: 'R', t: 'Role', s: "Who should the AI be?" },
                          { l: 'A', t: 'Action', s: "What do you want done?" },
                          { l: 'F', t: 'Format', s: "How should it look?" },
                          { l: 'T', t: 'Tone', s: "What's the mood/style?" }
                        ].map((item, i) => (
                          <div key={i} className="flex gap-4 items-center bg-site-bg p-4 md:p-5 rounded-xl md:rounded-2xl border border-site-accent shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-site-primary to-site-accent text-site-text flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">{item.l}</div>
                            <div className="min-w-0">
                              <div className="font-bold text-site-text text-sm md:text-base truncate">{item.t}</div>
                              <div className="text-xs text-site-text/80 font-medium truncate">{item.s}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ContentCard>

                    <ContentCard>
                      <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                        <Star className="w-5 h-5 text-site-text fill-yellow-400 shrink-0" />
                        Example Using CRAFT
                      </h4>
                      <div className="space-y-4 md:space-y-6">
                        {[
                          { l: 'Context', v: "I'm preparing a report for my supervisor about this month's activities" },
                          { l: 'Role', v: "Act as a professional report writer" },
                          { l: 'Action', v: "Create an executive summary" },
                          { l: 'Format', v: "250 words, 3 main sections" },
                          { l: 'Tone', v: "Professional but easy to understand" }
                        ].map((ex, i) => (
                          <div key={i} className="flex flex-col sm:flex-row sm:gap-4 sm:items-start pb-4 border-b border-site-accent/50 last:border-0 last:pb-0">
                            <span className="font-bold text-site-text sm:min-w-[80px] mb-1 sm:mb-0 text-sm md:text-base">{ex.l}:</span>
                            <span className="text-site-text/80 font-medium text-sm md:text-base">{ex.v}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 md:mt-10 bg-site-bg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-site-accent shadow-inner">
                        <p className="text-[10px] md:text-[11px] font-bold text-site-text/50 uppercase tracking-widest mb-3 md:mb-4">Full Prompt:</p>
                        <p className="text-site-text/90 font-medium italic leading-relaxed text-base md:text-lg">
                          "Act as a professional report writer. I need to create an executive summary of this month's activities for my supervisor. Write a 250-word summary with 3 main sections: achievements, challenges, and next steps. Use professional but clear language."
                        </p>
                      </div>
                    </ContentCard>

                    <ContentCard>
                      <h4 className="font-bold text-lg md:text-xl text-site-text mb-4 md:mb-6">Activity:</h4>
                      <p className="text-site-text font-medium mb-4 md:mb-6 text-sm md:text-base">Use CRAFT to write prompts for:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 font-bold text-site-primary text-xs md:text-sm uppercase tracking-tight">
                        {['A social media post', 'A meeting agenda', 'A thank you letter'].map((item, i) => (
                          <li key={i} className="bg-site-bg p-3 md:p-4 rounded-xl border border-site-accent text-center shadow-sm">• {item}</li>
                        ))}
                      </ul>
                    </ContentCard>
                  </div>
                )}

                {section.type === 'skills-list' && (
                  <div className="space-y-6 md:space-y-8">
                    {[
                      {
                        t: "Information Prompts (Learning)",
                        p: "Understand new topics",
                        e: "Explain [topic] to me like I'm hearing about it for the first time. Use simple language and real-world examples from Ghana.",
                        icon: Info
                      },
                      {
                        t: "Creative Prompts (Content)",
                        p: "Generate original content",
                        e: "Write 5 creative Instagram captions for [product/event]. Make them engaging and include relevant hashtags.",
                        icon: PenTool
                      },
                      {
                        t: "Instructional Prompts",
                        p: "Learn how to do something",
                        e: "Give me a step-by-step guide to [task]. Include common mistakes to avoid.",
                        icon: MessageSquare
                      },
                      {
                        t: "Analytical Prompts",
                        p: "Compare options or analyze",
                        e: "Compare [option A] and [option B] for [purpose]. List pros and cons of each.",
                        icon: Search
                      },
                      {
                        t: "Rewrite Prompts",
                        p: "Improve existing content",
                        e: "Rewrite this [email/paragraph] to sound more [professional/friendly/clear]. Keep the main message but improve the tone.",
                        icon: RefreshCw
                      },
                      {
                        t: "Summarization Prompts",
                        p: "Extract key information",
                        e: "Summarize this document in 5 bullet points. Focus on actionable insights.",
                        icon: FileText
                      }
                    ].map((skill, i) => (
                      <ContentCard key={i}>
                        {/* Changed from flex gap-8 items-start to be responsive */}
                        <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-start">
                          <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-site-bg shadow-md flex items-center justify-center font-bold text-site-text shrink-0 border border-site-accent">
                            <skill.icon className="w-6 h-6 md:w-8 md:h-8" />
                          </div>
                          <div className="flex-1 space-y-3 md:space-y-4 w-full">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <span className="w-fit text-[10px] font-bold text-site-primary uppercase tracking-widest bg-site-bg px-3 py-1 rounded-full border border-site-accent shrink-0">Type {i + 1}</span>
                              <h4 className="text-lg md:text-xl font-bold text-site-text">{skill.t}</h4>
                            </div>
                            <p className="text-xs md:text-sm font-bold text-site-text/80 italic flex items-center gap-2">
                              <Search className="w-3.5 h-3.5 shrink-0" /> Purpose: {skill.p}
                            </p>
                            <div className="bg-site-bg p-4 md:p-6 rounded-xl md:rounded-2xl border-l-[4px] md:border-l-[6px] border-site-primary text-site-text/90 font-medium italic shadow-sm text-sm md:text-lg leading-relaxed">
                              "{skill.e}"
                            </div>
                          </div>
                        </div>
                      </ContentCard>
                    ))}
                  </div>
                )}

                {section.type === 'iteration' && (
                  <div className="space-y-6 md:space-y-8">
                    <ContentCard className="bg-gradient-to-r from-site-primary to-site-accent text-site-text border-none p-8 md:p-12 overflow-hidden relative">
                      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-site-bg/10 rounded-full blur-3xl hidden md:block"></div>
                      <p className="text-lg md:text-2xl font-medium leading-relaxed max-w-2xl relative z-10 italic">
                        "You rarely get the perfect result on the first try. Iterating is the process of refining your prompt."
                      </p>
                    </ContentCard>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                      {[
                        { t: "Ask for Variations", d: "Ask the AI to provide multiple options so you can pick the best one." },
                        { t: "Refine Instructions", d: "If the output was too long or too short, adjust the prompt rules." },
                        { t: "Add Missing Context", d: "Give the AI more background info it missed the first time." },
                        { t: "Change the Format", d: "Switch from a paragraph to bullets, or from formal to friendly." }
                      ].map((tech, i) => (
                        <div key={i} className="bg-site-bg p-6 md:p-8 rounded-2xl md:rounded-3xl border border-site-accent shadow-sm flex flex-col md:flex-row gap-4 md:gap-6 items-start hover:shadow-md transition-shadow">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-site-primary text-site-text flex items-center justify-center font-bold text-lg md:text-xl shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <h4 className="font-bold text-site-text mb-1 md:mb-2 text-base md:text-lg">{tech.t}</h4>
                            <p className="text-site-text/80 text-xs md:text-sm font-medium">{tech.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.type === 'advanced' && (
                  <div className="space-y-6">
                    {[
                      { t: "Chain-of-Thought", d: 'Adding "Think step by step" to your prompt helps the AI reason through complex tasks.', e: "Explain why X happens. Think step by step." },
                      { t: "Few-Shot Prompting", d: "Providing 1-3 examples of how the AI should respond dramatically improves accuracy.", e: "User: Hello -> AI: Hi! [Example 1]..." },
                      { t: "Multimodal Prompting", d: "Modern AI can process images, PDFs, and data files along with text.", e: "[Upload File] + Summarize this report." },
                      { t: "System Commands", d: "Set permanent rules for the entire conversation using system prompts.", e: "Always respond in a concise, bulleted format." }
                    ].map((tech, i) => (
                      <ContentCard key={i} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                        <div className="md:w-1/3">
                          <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-site-text">{tech.t}</h4>
                          <p className="text-xs md:text-sm text-site-text/80 font-medium leading-relaxed">{tech.d}</p>
                        </div>
                        <div className="flex-1 w-full bg-site-bg text-site-text p-5 md:p-8 rounded-2xl md:rounded-3xl font-mono text-xs md:text-sm border-l-4 md:border-l-8 border-site-primary shadow-md relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-3 md:p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Zap className="w-6 h-6 md:w-8 md:h-8" />
                          </div>
                          <p className="font-bold mb-1 md:mb-2 text-site-text/60 uppercase tracking-widest text-[9px] md:text-[10px]">Example Command:</p>
                          <span className="italic text-sm md:text-lg text-site-text leading-relaxed">"{tech.e}"</span>
                        </div>
                      </ContentCard>
                    ))}
                  </div>
                )}

                {section.type === 'grid' && (
                  <div className="space-y-8 md:space-y-12">
                    <p className="text-site-text/80 font-medium text-base md:text-lg leading-relaxed">
                      Prompting is not just for chatting. Use it to automate core business tasks:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                      {[
                        { t: "Emails & Comms", icon: MessageSquare },
                        { t: "Reports & Summaries", icon: FileText },
                        { t: "Data Extraction", icon: Search },
                        { t: "Brainstorming", icon: Zap }
                      ].map((skill, i) => (
                        <ContentCard key={i} className="hover:-translate-y-1 md:hover:-translate-y-2 transition-transform h-full flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-0 p-5 md:p-6">
                          <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-site-bg text-site-text flex items-center justify-center sm:mb-6 shadow-sm border border-site-accent shrink-0">
                            <skill.icon className="w-5 h-5 md:w-7 md:h-7" />
                          </div>
                          <h4 className="text-base md:text-lg font-bold text-site-text leading-snug">{skill.t}</h4>
                        </ContentCard>
                      ))}
                    </div>
                    <div className="p-6 md:p-10 bg-site-primary/10 border border-site-primary/30 text-site-text rounded-[2rem] md:rounded-[40px] text-center italic relative overflow-hidden text-sm md:text-base font-medium">
                      "The goal of prompting for work is to save time, not add work."
                    </div>
                  </div>
                )}

                {section.type === 'ethics' && (
                  <div className="space-y-8 md:space-y-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                      {[
                        { t: "Hallucination", icon: AlertTriangle, c: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20", d: "AI can confidently state false facts." },
                        { t: "Bias", icon: Target, c: "text-purple-500", bg: "bg-purple-500/10", border: "border-purple-500/20", d: "AI reflects the biases of its training data." },
                        { t: "Privacy", icon: Lock, c: "text-site-primary", bg: "bg-site-primary/10", border: "border-site-primary/20", d: "Never share sensitive company or personal data." },
                        { t: "Human Check", icon: Eye, c: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", d: "Always review AI output for accuracy." }
                      ].map((item, i) => (
                        <div key={i} className={`${item.bg} ${item.border} p-6 md:p-8 rounded-3xl md:rounded-[40px] border shadow-sm hover:shadow-md transition-all flex flex-col items-center sm:items-start text-center sm:text-left`}>
                          <item.icon className={`w-8 h-8 md:w-10 md:h-10 ${item.c} mb-4 md:mb-6`} />
                          <h4 className="font-bold text-site-text mb-2 md:mb-4 text-lg md:text-xl">{item.t}</h4>
                          <p className="text-xs text-site-text/80 font-medium leading-relaxed">{item.d}</p>
                        </div>
                      ))}
                    </div>
                    <ContentCard className="border-site-accent/50 p-6 md:p-10">
                      <h4 className="text-site-text font-bold mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base">
                        <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-rose-500" /> Important Reminder:
                      </h4>
                      <p className="text-site-text/80 font-medium leading-relaxed text-sm md:text-base">
                        AI is a tool to assist you, not replace your judgment. You are responsible for the final output.
                      </p>
                    </ContentCard>
                  </div>
                )}
              </section>
            ))}

          </main>
        </div>
      </div>
    </div>
  );
};

export default BeginnerPage;