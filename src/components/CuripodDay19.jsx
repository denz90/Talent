import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronRight,
  FileText,
  Layers,
  Lightbulb,
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Zap
} from 'lucide-react';

const CuripodDay19 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview'},
    { id: 'features', label: 'Features'},
    { id: 'guide', label: 'Guide'},
    { id: 'challenge', label: 'Challenge'}
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-site-primary text-site-text">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-12 pb-32">
        
        {/* Header Hero */}
        <div className="bg-site-primary-400 rounded-3xl p-10">
          <div className="flex justify-center">
            <div className="bg-yellow-400 p-3 rounded-2xl transform rotate-12 animate-pulse">
              <Sparkles className="text-[#2e0052]" size={32} />
            </div>
          </div>

          <div className="text-center space-y-6 pt-8">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 19: Curipod Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Spark Student Discussions with AI-Powered Conversations
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <span className="flex items-center gap-2 text-site-text">
                <MessageSquare size={16} /> Boosts Engagement
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <Sparkles size={16} /> AI Prompts
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <Layers size={16} /> Global Connections
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-site-button backdrop-blur-md p-1.5 rounded-2xl flex gap-2 border border-site-accent max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.id 
                  ? 'bg-site-bg text-site-text shadow-lg scale-[1.02]' 
                  : 'text-site-text/80 hover:bg-site-bg'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          {activeTab === 'overview' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-site-bg rounded-3xl p-10 border border-site-accent">
                <h2 className="text-3xl text-site-text font-bold mb-6">What is Curipod?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  Curipod is an interactive discussion platform that uses AI to generate thought-provoking questions, polls, and activities tailored to your lesson content. It transforms passive learning into dynamic student-led conversations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  { [
                      { icon: MessageSquare, title: 'Boosts Engagement', desc: 'Turns quiet classrooms into vibrant discussions' },
                      { icon: Sparkles, title: 'AI-Powered Prompts', desc: 'Generates debate questions, exit tickets, and reflections in seconds' },
                      { icon: TrendingUp, title: 'Real-Time Analytics', desc: 'Tracks student participation and understanding' },
                      { icon: Layers, title: 'Global Connections', desc: 'Lets classrooms collaborate with peers worldwide' }
                    ].map((item, i) => (
                    <div key={i} className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                        <item.icon size={24} />
                      </div>
                      <p className="text-site-text font-medium">
                        <span className="font-bold text-site-primary block mb-1">{item.title}:</span>
                        {item.desc}
                      </p>
                    </div>
                  )) }
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Key Features &amp; How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                { [
                  {
                    title: 'AI Discussion Generator',
                    icon: Sparkles,
                    color: 'purple',
                    howTo: 'Paste your lesson topic → Get leveled questions (Bloom\'s Taxonomy)',
                    benefit: 'Saves hours creating discussion prompts'
                  },
                  {
                    title: 'Live Word Clouds',
                    icon: Layers,
                    color: 'blue',
                    howTo: 'Students submit responses → AI visualizes trends in real time',
                    benefit: 'Instantly gauges class consensus'
                  },
                  {
                    title: 'Parlay Integration',
                    icon: Layers,
                    color: 'emerald',
                    howTo: 'Sync with Parlay to structure Socratic seminars or peer feedback',
                    benefit: 'Deepens critical thinking skills'
                  },
                  {
                    title: 'Reflection Journals',
                    icon: FileText,
                    color: 'orange',
                    howTo: 'Assign AI-generated exit tickets (e.g., "What surprised you today?")',
                    benefit: 'Measures learning outcomes effortlessly'
                  }
                ].map((feature, i) => (
                  <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-site-primary/40 flex items-center justify-center text-site-text">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                      <div className="space-y-4">
                        <div className="text-sm">
                          <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                          <p className="text-site-text">{feature.howTo}</p>
                        </div>
                        <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                          <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                          <p className="text-xs font-bold text-green-100">{feature.benefit}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )) }
              </div>
            </div>
          )}{activeTab === 'guide' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Getting Started Guide</h2>
              
              <div className="space-y-6">
                { [
                  { step: 1, title: 'Sign Up', desc: 'Go to Curipod.com → Click "Educator Sign Up" (free for teachers)' },
                  { step: 2, title: 'Create Your First Discussion', desc: 'Click "New Discussion" → Enter your topic (e.g., "Climate Change") → Choose format: Debate, Q&A, or Reflection' },
                  { step: 3, title: 'Customize AI Prompts', desc: 'Edit generated questions and add multimedia (images/videos) for context' },
                  { step: 4, title: 'Launch Live Session', desc: 'Share join code/link → Students respond via devices → Use Word Cloud to highlight common answers' },
                  { step: 5, title: 'Analyze & Export Data', desc: 'View participation reports under "Activity Insights" → Export responses as CSV for grading' }
                ].map((step, i) => (
                  <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent flex items-center gap-8 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-full bg-site-primary text-site-text flex items-center justify-center text-2xl font-black shadow-lg shadow-pink-500/20">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-site-text">{step.desc}</p>
                    </div>
                  </div>
                )) }
              </div>
            </div>
          )}{activeTab === 'challenge' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-10">
                <div className="hidden"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-2 text-site-text text-xs font-bold uppercase tracking-[0.2em]">
                    <Target size={16} /> Practical Challenge Task
                  </div>
                  <h2 className="text-3xl font-bold leading-tight">
                    "Host a student-led debate using Curipod's AI-generated prompts."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Generate Questions', 
                        desc: 'Input your subject (e.g., "Ethics of AI in education"). Review AI-generated debate questions. Screenshot 3 debate questions Curipod suggests.',
                        icon: Layers,
                        step: 'Prepare'
                      },
                      { 
                        title: 'Run a Live Session', 
                        desc: 'Invite students via join link. Monitor real-time responses. Save a screenshot of the Word Cloud. Encourage students to build on each other\'s ideas.',
                        icon: Zap,
                        step: 'Execution'
                      },
                      { 
                        title: 'Assign Reflections', 
                        desc: 'Use the "Exit Ticket" feature. Ask: "What\'s one counter-argument you heard today?" Collect anonymous student responses.',
                        icon: MessageSquare,
                        step: 'Reflection'
                      },
                      { 
                        title: 'Bonus: Global Exchange', 
                        desc: 'Connect with another classroom via Curipod. Compare debate outcomes. Analyze different perspectives.',
                        icon: Layers,
                        step: 'Extension'
                      }
                    ].map((step, i) => (
                      <div key={i} className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-site-text uppercase tracking-widest">{step.step}</span>
                          <step.icon size={16} className="text-site-text" />
                        </div>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                        <p className="text-sm text-sm text-site-text">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sample Questions Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">Sample AI-Generated Debate Questions</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { level: 'Remember', tier: 'Level 1', text: 'What are the basic functions of AI in educational settings?' },
                    { level: 'Analyze', tier: 'Level 4', text: 'How does AI grading compare to human assessment in terms of bias and fairness?' },
                    { level: 'Evaluate', tier: 'Level 5', text: 'Should schools implement AI grading systems? Defend your position.' }
                  ].map((q, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-site-bg border border-site-accent shadow-sm flex items-center gap-6">
                      <div className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold whitespace-nowrap">
                        {q.level} • {q.tier}
                      </div>
                      <p className="text-slate-800 font-medium">"{q.text}"</p>
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-slate-400 italic flex items-center justify-center gap-2">
                  <Sparkles size={14} className="text-yellow-500" /> Bloom's Taxonomy Integration: Curipod automatically generates questions at different cognitive levels
                </p>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Spark Controversy', icon: Zap, desc: 'Use "Devil\'s Advocate" mode to challenge consensus and push students to defend their reasoning with evidence.' },
                  { title: 'Low-Tech Option', icon: CheckCircle2, desc: 'Print QR codes for students without devices. They can scan and join from their phones or shared devices.' },
                  { title: 'Role Play', icon: Layers, desc: 'Assign students AI-generated personas (e.g., "Debate as a scientist vs. politician") for perspective-taking.' }
                ].map((tip, i) => (
                  <div key={i} className="bg-site-bg p-6 rounded-3xl border border-site-accent space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/30 flex items-center justify-center text-site-text mb-4">
                      <tip.icon size={24} />
                    </div>
                    <h4 className="font-bold text-site-text">{tip.title}</h4>
                    <p className="text-sm text-site-text/80 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>

              {/* Engagement Tools Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">Real-Time Engagement Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Live Word Clouds', icon: Layers, desc: 'Visualize student perspectives in real-time - see trending opinions change.'},
                    { title: 'Participation Tracking', icon: TrendingUp, desc: 'Monitor which students are contributing and who needs encouragement.'},
                    { title: 'Anonymous Responses', icon: MessageSquare, desc: 'Enable shy students to share ideas without fear of judgment.'},
                    { title: 'Global Connections', icon: Sparkles, desc: 'Connect your classroom with peers worldwide for diverse perspectives.'}
                  ].map((tool, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-site-bg border border-site-accent shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                        <tool.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-site-text text-sm">{tool.title}</h4>
                        <p className="text-xs text-site-text/80">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parlay Integration */}
              <div className="bg-gradient-to-r from-emerald-900 to-teal-900 p-8 rounded-3xl text-white shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <Layers size={24} className="text-emerald-400" />
                  <h3 className="text-xl font-bold">Parlay Integration</h3>
                </div>
                <p className="text-site-text/80 leading-relaxed">
                  Sync with Parlay to structure Socratic seminars or peer feedback sessions. Combine Curipod's AI question generation with Parlay's discussion framework for deeper critical thinking.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Socratic Seminars', 'Peer Feedback', 'Online Tracking', 'Structured Debates'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-site-bg/10 text-xs font-semibold border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Quote */}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-site-grad-from to-site-grad-to p-12 text-center space-y-8 shadow-2xl shadow-site-accent-600/20">
          <div className="absolute top-0 right-0 w-40 h-40 bg-site-bg/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <Trophy size={48} className="mx-auto text-white" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              "Curipod turns whispers into 'WHAT?!' moments."
            </h2>
            <p className="text-site-text font-medium">Share your debate Word Cloud with #AICuripodChallenge!</p>
            <button 
              onClick={onNext}
              className="mt-4 bg-site-bg text-site-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-3 mx-auto group"
            >
              Start Your Challenge <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        </div>
    </div>
  );
};

export default CuripodDay19;
