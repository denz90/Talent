import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
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
import Navbar from './Navbar';

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
  <div className="mb-12">
    <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">{title}</h2>
    <p className="text-slate-500 font-medium">{subtitle}</p>
  </div>
);

const ContentCard = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-md transition-shadow ${className}`}
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onSignup={() => { }}
        onLogin={() => { }}
        onLogoClick={onLogoClick}
        onNavClick={onNavClick}
      />

      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-14 h-14 bg-brand-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div key="mobile-menu-container" className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-y-0 left-0 w-80 bg-white p-8 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-brand-primary">Course Navigation</span>
                <button onClick={() => setIsMobileMenuOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
              </div>
              <div className="overflow-y-auto flex-1">
                <BeginnerSidebar activeSection={activeSection} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex gap-12 relative items-start">

          {/* Desktop Sidebar */}
          <BeginnerSidebar activeSection={activeSection} />

          {/* Main Content Area */}
          <main className="flex-1 space-y-16">

            {/* Hero / Back Button */}
            <div className="flex flex-col gap-6">
              <button
                onClick={onBack}
                className="group flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors font-medium w-fit"
              >
                <div className="p-2 rounded-full group-hover:bg-brand-secondary transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                Back to Learning Paths
              </button>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                  Prompt Engineering for Beginners
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
                  The ultimate guide to communicating with AI. Learn how to transform your ideas into perfect results.
                </p>
              </div>
            </div>

            {/* Sections */}
            {COURSE_SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32">
                <SectionHeader title={section.title} subtitle={section.subtitle} />

                {section.type === 'intro' && (
                  <ContentCard className="bg-gradient-to-br from-brand-primary to-brand-accent text-white border-none p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                          A prompt is your <span className="font-bold underline decoration-white/30">instruction to AI</span>, it tells the AI:
                        </p>
                        <div className="space-y-4">
                          {[{ icon: Target, text: "What you want" }, { icon: Zap, text: "How you want it" }, { icon: User, text: "Who it's for" }].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                              <div className="p-2 bg-white/20 rounded-lg">
                                <item.icon className="w-5 h-5" />
                              </div>
                              <span className="font-bold">{item.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-md border border-white/20">
                        <h4 className="text-xl font-bold mb-4 flex items-center gap-2"><Star className="w-5 h-5 text-yellow-300 fill-yellow-300" /> Think of AI like a very smart intern on their first day.</h4>
                        <p className="text-sm text-white/90 mb-4 font-medium italic">It is capable, but:</p>
                        <ul className="space-y-4">
                          <li className="flex gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 shrink-0 text-white/60" />
                            <span>It does not know your context</span>
                          </li>
                          <li className="flex gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 shrink-0 text-white/60" />
                            <span>It needs clear instructions</span>
                          </li>
                          <li className="flex gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 shrink-0 text-white/60" />
                            <span>It improves with feedback</span>
                          </li>
                        </ul>
                        <p className="mt-6 pt-6 border-t border-white/10 text-sm font-bold">
                          If you guide it well, it will produce excellent work.
                        </p>
                      </div>
                    </div>
                  </ContentCard>
                )}

                {section.type === 'intro' && (
                  <div className="mt-8 bg-brand-secondary/50 border border-brand-primary/10 p-8 rounded-3xl flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-brand-primary to-brand-accent text-white rounded-2xl shadow-lg shadow-brand-primary/20">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-primary mb-2">Activity:</h4>
                      <p className="text-brand-dark leading-relaxed font-medium">
                        Think about a task you do at work. Now imagine explaining it to someone who's never done it before. That's prompting.
                      </p>
                    </div>
                  </div>
                )}

                {section.type === 'comparison' && (
                  <div className="space-y-12">
                    <p className="text-slate-500 font-medium text-lg italic border-l-4 border-slate-100 pl-6">
                      "The quality of your prompt determines the quality of your result."
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h4 className="flex items-center gap-2 text-red-600 font-bold text-lg">
                          <XCircle className="w-5 h-5" /> Bad prompts are usually:
                        </h4>
                        <ul className="space-y-3 pl-7 list-disc text-slate-600 font-medium">
                          <li>Too vague</li>
                          <li>Missing context</li>
                          <li>Not specific</li>
                        </ul>
                      </div>
                      <div className="space-y-6">
                        <h4 className="flex items-center gap-2 text-emerald-600 font-bold text-lg">
                          <CheckCircle2 className="w-5 h-5" /> Good prompts are:
                        </h4>
                        <ul className="space-y-3 pl-7 list-disc text-slate-600 font-medium">
                          <li>Clear</li>
                          <li>Specific</li>
                          <li>Structured</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <ContentCard className="border-red-100 bg-red-50/10 p-10">
                        <div className="flex items-center gap-3 text-red-600 font-bold mb-6">
                          <XCircle className="w-6 h-6" />
                          <span>Bad Prompt:</span>
                        </div>
                        <div className="bg-white border border-red-100 p-8 rounded-2xl italic font-serif text-slate-400 mb-4 text-lg">
                          "Write about marketing"
                        </div>
                        <p className="text-sm text-red-500 font-bold">Problem: Too vague</p>
                      </ContentCard>

                      <ContentCard className="border-emerald-100 bg-emerald-50/10 p-10">
                        <div className="flex items-center gap-3 text-emerald-600 font-bold mb-6">
                          <CheckCircle2 className="w-6 h-6" />
                          <span>Good Prompt:</span>
                        </div>
                        <div className="bg-white border border-emerald-100 p-8 rounded-2xl text-slate-700 font-medium mb-4 text-lg leading-relaxed">
                          "Write a <span className="text-emerald-600 font-bold">300-word article</span> explaining <span className="text-emerald-600 font-bold">digital marketing</span> to <span className="text-emerald-600 font-bold">small business owners in Ghana</span>. Use simple language and local examples."
                        </div>
                        <p className="text-xs text-emerald-600 font-medium opacity-80 leading-relaxed">
                          Why it works: Clear task • Defined audience • Specific length • Context provided
                        </p>
                      </ContentCard>
                    </div>

                    <ContentCard className="bg-gradient-to-r from-brand-primary to-brand-accent text-white text-center py-10 border-none">
                      <p className="text-xl font-bold">The more specific your instruction, the better the result.</p>
                    </ContentCard>

                    <div className="bg-brand-secondary/50 border border-brand-primary/10 p-10 rounded-3xl">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-gradient-to-br from-brand-primary to-brand-accent text-white rounded-2xl shadow-lg">
                          <Layout className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-xl text-brand-dark">Activity:</h4>
                      </div>
                      <p className="text-brand-dark font-medium mb-8 text-lg">Turn these bad prompts into good ones:</p>
                      <div className="space-y-6">
                        {[
                          '1. "Tell me about climate change"',
                          '2. "Write an email"',
                          '3. "Help with my presentation"'
                        ].map((item, i) => (
                          <div key={i} className="bg-white/80 p-5 rounded-2xl shadow-sm border border-brand-primary/5 font-bold text-brand-dark">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {section.type === 'formula' && (
                  <div className="space-y-12">
                    <ContentCard className="p-0 overflow-hidden border-brand-primary/20 bg-brand-secondary/30">
                      <div className="bg-gradient-to-r from-brand-primary to-brand-accent text-white p-10 text-center">
                        <h3 className="text-2xl font-bold mb-8">The CRAFT Formula</h3>
                        <div className="flex justify-center gap-4 md:gap-6">
                          {['C', 'R', 'A', 'F', 'T'].map((l, i) => (
                            <div key={i} className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-2xl md:text-3xl border border-white/20 backdrop-blur-md shadow-2xl">
                              {l}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                          { l: 'C', t: 'Context', s: "What's the situation?" },
                          { l: 'R', t: 'Role', s: "Who should the AI be?" },
                          { l: 'A', t: 'Action', s: "What do you want done?" },
                          { l: 'F', t: 'Format', s: "How should it look?" },
                          { l: 'T', t: 'Tone', s: "What's the mood/style?" }
                        ].map((item, i) => (
                          <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-brand-primary/5 shadow-sm">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-lg shadow-brand-primary/20">{item.l}</div>
                            <div>
                              <div className="font-bold text-brand-dark">{item.t}</div>
                              <div className="text-xs text-slate-400 font-medium">{item.s}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ContentCard>

                    <ContentCard className="p-10">
                      <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                        <Star className="w-5 h-5 text-brand-primary fill-brand-primary" />
                        Example Using CRAFT
                      </h4>
                      <div className="space-y-6">
                        {[
                          { l: 'Context', v: "I'm preparing a report for my supervisor about this month's activities" },
                          { l: 'Role', v: "Act as a professional report writer" },
                          { l: 'Action', v: "Create an executive summary" },
                          { l: 'Format', v: "250 words, 3 main sections" },
                          { l: 'Tone', v: "Professional but easy to understand" }
                        ].map((ex, i) => (
                          <div key={i} className="flex gap-4 items-start pb-4 border-b border-slate-50 last:border-0">
                            <span className="font-bold text-brand-primary min-w-[80px]">{ex.l}:</span>
                            <span className="text-slate-600 font-medium">{ex.v}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-10 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-inner">
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Full Prompt:</p>
                        <p className="text-slate-700 font-medium italic leading-relaxed text-lg">
                          "Act as a professional report writer. I need to create an executive summary of this month's activities for my supervisor. Write a 250-word summary with 3 main sections: achievements, challenges, and next steps. Use professional but clear language."
                        </p>
                      </div>
                    </ContentCard>

                    <div className="bg-brand-secondary/50 border border-brand-primary/10 p-10 rounded-3xl">
                      <h4 className="font-bold text-xl text-brand-dark mb-6">Activity:</h4>
                      <p className="text-brand-dark font-medium mb-6">Use CRAFT to write prompts for:</p>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 font-bold text-brand-primary uppercase tracking-tight">
                        {['A social media post', 'A meeting agenda', 'A thank you letter'].map((item, i) => (
                          <li key={i} className="bg-white p-4 rounded-xl border border-brand-primary/10 text-center shadow-sm">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {section.type === 'skills-list' && (
                  <div className="space-y-8">
                    {[
                      {
                        t: "Information Prompts (Learning)",
                        p: "Understand new topics",
                        e: "Explain [topic] to me like I'm hearing about it for the first time. Use simple language and real-world examples from Ghana.",
                        icon: Info,
                        bg: "bg-blue-50/50"
                      },
                      {
                        t: "Creative Prompts (Content Generation)",
                        p: "Generate original content",
                        e: "Write 5 creative Instagram captions for [product/event]. Make them engaging and include relevant hashtags.",
                        icon: PenTool,
                        bg: "bg-purple-50/50"
                      },
                      {
                        t: "Instructional Prompts (Step-by-Step)",
                        p: "Learn how to do something",
                        e: "Give me a step-by-step guide to [task]. Include common mistakes to avoid.",
                        icon: MessageSquare,
                        bg: "bg-orange-50/50"
                      },
                      {
                        t: "Analytical Prompts (Comparison/Evaluation)",
                        p: "Compare options or analyze information",
                        e: "Compare [option A] and [option B] for [purpose]. List pros and cons of each.",
                        icon: Search,
                        bg: "bg-emerald-50/50"
                      },
                      {
                        t: "Rewrite Prompts (Improvement)",
                        p: "Improve existing content",
                        e: "Rewrite this [email/paragraph] to sound more [professional/friendly/clear]. Keep the main message but improve the tone.",
                        icon: RefreshCw,
                        bg: "bg-indigo-50/50"
                      },
                      {
                        t: "Summarization Prompts (Condensing)",
                        p: "Extract key information",
                        e: "Summarize this document in 5 bullet points. Focus on actionable insights.",
                        icon: FileText,
                        bg: "bg-rose-50/50"
                      }
                    ].map((skill, i) => (
                      <ContentCard key={i} className={`border-slate-100 ${skill.bg} p-10`}>
                        <div className="flex gap-8 items-start">
                          <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center font-bold text-brand-primary shrink-0 border border-slate-50">
                            <skill.icon className="w-8 h-8" />
                          </div>
                          <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-4">
                              <span className="text-[10px] font-bold text-brand-primary uppercase tracking-widest bg-brand-secondary px-3 py-1 rounded-full border border-brand-primary/10">Type {i + 1}</span>
                              <h4 className="text-xl font-bold text-slate-900">{skill.t}</h4>
                            </div>
                            <p className="text-sm font-bold text-slate-500 italic flex items-center gap-2">
                              <Search className="w-3.5 h-3.5" /> Purpose: {skill.p}
                            </p>
                            <div className="bg-white/80 p-6 rounded-2xl border-l-[6px] border-brand-primary text-slate-700 font-medium italic shadow-inner text-lg leading-relaxed">
                              "{skill.e}"
                            </div>
                          </div>
                        </div>
                      </ContentCard>
                    ))}

                    <div className="bg-brand-secondary/50 border border-brand-primary/10 p-6 md:p-10 rounded-3xl mt-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="space-y-1 text-center sm:text-left">
                        <span className="text-brand-dark font-bold text-lg block">Practice a tool.</span>
                        <p className="text-slate-500 text-sm font-medium">Test these prompt types in our playground.</p>
                      </div>
                      <button className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 hover:shadow-brand-primary/30 transition-all active:scale-95 border-none whitespace-nowrap">
                        Open Tool
                      </button>
                    </div>
                  </div>
                )}

                {section.type === 'iteration' && (
                  <div className="space-y-8">
                    <ContentCard className="bg-gradient-to-r from-brand-primary to-brand-accent text-white border-none p-12 overflow-hidden relative">
                      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                      <p className="text-2xl font-medium leading-relaxed max-w-2xl relative z-10 italic">
                        "You rarely get the perfect result on the first try. Iterating is the process of refining your prompt."
                      </p>
                    </ContentCard>

                    <div className="grid md:grid-cols-2 gap-8">
                      {[
                        { t: "Ask for Variations", d: "Ask the AI to provide multiple options so you can pick the best one." },
                        { t: "Refine the Instructions", d: "If the output was too long or too short, adjust the prompt rules." },
                        { t: "Add Missing Context", d: "Give the AI more background info it missed the first time." },
                        { t: "Change the Format or Tone", d: "Switch from a paragraph to bullets, or from formal to friendly." }
                      ].map((tech, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow">
                          <div className="w-12 h-12 rounded-2xl bg-brand-secondary text-brand-primary flex items-center justify-center font-bold text-xl shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 mb-2">{tech.t}</h4>
                            <p className="text-slate-500 text-sm font-medium">{tech.d}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {section.type === 'advanced' && (
                  <div className="space-y-6">
                    {[
                      { t: "Step-by-Step Reasoning (Chain-of-Thought)", d: 'Adding "Think step by step" to your prompt helps the AI reason through complex tasks.', e: "Explain why X happens. Think step by step." },
                      { t: "Few-Shot Prompting", d: "Providing 1-3 examples of how the AI should respond dramatically improves accuracy.", e: "User: Hello -> AI: Hi! [Example 1]..." },
                      { t: "Multimodal Prompting", d: "Modern AI can process images, PDFs, and data files along with text.", e: "[Upload File] + Summarize this report." },
                      { t: "System-level Commands", d: "Set permanent rules for the entire conversation using system prompts.", e: "Always respond in a concise, bulleted format." }
                    ].map((tech, i) => (
                      <ContentCard key={i} className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="md:w-1/3">
                          <h4 className="text-xl font-bold mb-3 text-slate-900">{tech.t}</h4>
                          <p className="text-sm text-slate-500 font-medium leading-relaxed">{tech.d}</p>
                        </div>
                        <div className="flex-1 w-full bg-slate-900 text-brand-primary p-8 rounded-3xl font-mono text-sm border-l-8 border-brand-primary shadow-2xl relative overflow-hidden group">
                          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                            <Zap className="w-8 h-8" />
                          </div>
                          <p className="font-bold mb-2 text-white/40 uppercase tracking-widest text-[10px]">Example Command:</p>
                          <span className="italic text-lg text-brand-secondary">"{tech.e}"</span>
                        </div>
                      </ContentCard>
                    ))}
                  </div>
                )}

                {section.type === 'grid' && (
                  <div className="space-y-12">
                    <p className="text-slate-500 font-medium text-lg leading-relaxed">
                      Prompting is not just for chatting. Use it to automate core business tasks:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { t: "Emails & Internal Comms", icon: MessageSquare, bg: "bg-blue-50/50" },
                        { t: "Reports & Summaries", icon: FileText, bg: "bg-purple-50/50" },
                        { t: "Data Extraction", icon: Search, bg: "bg-emerald-50/50" },
                        { t: "Brainstorming & Ideation", icon: Zap, bg: "bg-orange-50/50" }
                      ].map((skill, i) => (
                        <ContentCard key={i} className={`hover:-translate-y-2 transition-transform h-full ${skill.bg}`}>
                          <div className="w-14 h-14 rounded-2xl bg-white text-brand-primary flex items-center justify-center mb-8 shadow-sm border border-slate-50">
                            <skill.icon className="w-7 h-7" />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 leading-snug">{skill.t}</h4>
                        </ContentCard>
                      ))}
                    </div>
                    <div className="p-10 bg-slate-900 text-white rounded-[40px] text-center italic relative overflow-hidden">
                      "The goal of prompting for work is to save time, not add work."
                    </div>
                  </div>
                )}

                {section.type === 'ethics' && (
                  <div className="space-y-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { t: "Hallucination", icon: AlertTriangle, c: "text-orange-600", bg: "bg-orange-50", d: "AI can confidently state false facts." },
                        { t: "Bias", icon: Target, c: "text-purple-600", bg: "bg-purple-50", d: "AI reflects the biases of its training data." },
                        { t: "Privacy", icon: Lock, c: "text-blue-600", bg: "bg-blue-50", d: "Never share sensitive company or personal data." },
                        { t: "Human Check", icon: Eye, c: "text-emerald-600", bg: "bg-emerald-50", d: "Always review AI output for accuracy." }
                      ].map((item, i) => (
                        <div key={i} className={`${item.bg} p-10 rounded-[40px] border border-transparent shadow-sm hover:shadow-lg transition-all`}>
                          <item.icon className={`w-10 h-10 ${item.c} mb-8`} />
                          <h4 className="font-bold text-slate-900 mb-4 text-xl">{item.t}</h4>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.d}</p>
                        </div>
                      ))}
                    </div>
                    <ContentCard className="bg-red-50 border-red-100/50 p-10">
                      <h4 className="text-red-600 font-bold mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" /> Important Reminder:
                      </h4>
                      <p className="text-red-900/80 font-medium leading-relaxed">
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
