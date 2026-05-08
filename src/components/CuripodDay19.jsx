import React, { useState } from 'react';
import { 
  MessageSquare, 
  Sparkles, 
  BarChart3, 
  Globe, 
  Users, 
  Lightbulb, 
  ArrowRight,
  Zap,
  Cloud,
  FileText,
  Trophy,
  CheckCircle2,
  ChevronRight,
  Target,
  Layers,
  Search,
  MessageCircle
} from 'lucide-react';

const CuripodDay19 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Search },
    { id: 'features', label: 'Features', icon: Layers },
    { id: 'guide', label: 'Guide', icon: Target },
    { id: 'challenge', label: 'Challenge', icon: Trophy }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="absolute top-10 right-10 animate-pulse text-yellow-400">
            <Sparkles size={48} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Zap size={14} className="text-yellow-400" />
              Day 19 • Student Engagement
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Day 19: Curipod Challenge
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Spark Student Discussions with AI-Powered Conversations
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <MessageSquare size={16} /> Boosts Engagement
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Sparkles size={16} /> AI Prompts
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Globe size={16} /> Global Connections
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex p-1.5 bg-slate-100 rounded-2xl w-full max-w-md mx-auto sticky top-4 z-40 shadow-sm backdrop-blur-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-indigo-600 shadow-sm scale-100' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/50 scale-95'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === 'overview' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What is Curipod?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Curipod is an interactive discussion platform that uses AI to generate thought-provoking questions, polls, and activities tailored to your lesson content. It transforms passive learning into dynamic student-led conversations.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: MessageCircle, title: 'Boosts Engagement', desc: 'Turns quiet classrooms into vibrant discussions' },
                      { icon: Sparkles, title: 'AI-Powered Prompts', desc: 'Generates debate questions, exit tickets, and reflections in seconds' },
                      { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Tracks student participation and understanding' },
                      { icon: Globe, title: 'Global Connections', desc: 'Lets classrooms collaborate with peers worldwide' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100/50">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{item.title}</h4>
                          <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-indigo-100 rounded-3xl blur-2xl opacity-50 -z-10"></div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                    <img src="/Social strategy-pana 1.png" alt="Curipod Interface" className="w-full h-auto relative z-10" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Key Features & How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'AI Discussion Generator',
                    icon: Sparkles,
                    color: 'purple',
                    howTo: 'Paste your lesson topic → Get leveled questions (Bloom\'s Taxonomy)',
                    benefit: 'Saves hours creating discussion prompts'
                  },
                  {
                    title: 'Live Word Clouds',
                    icon: Cloud,
                    color: 'blue',
                    howTo: 'Students submit responses → AI visualizes trends in real time',
                    benefit: 'Instantly gauges class consensus'
                  },
                  {
                    title: 'Parlay Integration',
                    icon: Users,
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
                  <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-${feature.color}-50 text-${feature.color}-600 group-hover:scale-110 transition-transform`}>
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-xl">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">How to Use</p>
                        <p className="text-sm text-slate-700">{feature.howTo}</p>
                      </div>
                      <div className={`p-4 bg-${feature.color}-50/50 rounded-xl border border-${feature.color}-100/50`}>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Benefit</p>
                        <p className="text-sm text-slate-900 font-semibold">{feature.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">Step-by-Step Getting Started Guide</h2>
              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { step: 1, title: 'Sign Up', desc: 'Go to Curipod.com → Click "Educator Sign Up" (free for teachers)' },
                  { step: 2, title: 'Create Your First Discussion', desc: 'Click "New Discussion" → Enter your topic (e.g., "Climate Change") → Choose format: Debate, Q&A, or Reflection' },
                  { step: 3, title: 'Customize AI Prompts', desc: 'Edit generated questions and add multimedia (images/videos) for context' },
                  { step: 4, title: 'Launch Live Session', desc: 'Share join code/link → Students respond via devices → Use Word Cloud to highlight common answers' },
                  { step: 5, title: 'Analyze & Export Data', desc: 'View participation reports under "Activity Insights" → Export responses as CSV for grading' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenge' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="bg-indigo-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-[0.2em]">
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
                        icon: Search,
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
                        icon: MessageCircle,
                        step: 'Reflection'
                      },
                      { 
                        title: 'Bonus: Global Exchange', 
                        desc: 'Connect with another classroom via Curipod. Compare debate outcomes. Analyze different perspectives.',
                        icon: Globe,
                        step: 'Extension'
                      }
                    ].map((step, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">{step.step}</span>
                          <step.icon size={16} className="text-indigo-300" />
                        </div>
                        <h4 className="font-bold text-lg">{step.title}</h4>
                        <p className="text-sm text-indigo-100/70 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sample Questions Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Sample AI-Generated Debate Questions</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { level: 'Remember', tier: 'Level 1', text: 'What are the basic functions of AI in educational settings?' },
                    { level: 'Analyze', tier: 'Level 4', text: 'How does AI grading compare to human assessment in terms of bias and fairness?' },
                    { level: 'Evaluate', tier: 'Level 5', text: 'Should schools implement AI grading systems? Defend your position.' }
                  ].map((q, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-6">
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
                  { title: 'Role Play', icon: Users, desc: 'Assign students AI-generated personas (e.g., "Debate as a scientist vs. politician") for perspective-taking.' }
                ].map((tip, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4">
                    <div className="p-3 bg-white rounded-2xl shadow-sm w-fit text-indigo-600">
                      <tip.icon size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900">{tip.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>

              {/* Engagement Tools Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Real-Time Engagement Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Live Word Clouds', desc: 'Visualize student perspectives in real-time - see trending opinions change.', icon: Cloud },
                    { title: 'Participation Tracking', desc: 'Monitor which students are contributing and who needs encouragement.', icon: BarChart3 },
                    { title: 'Anonymous Responses', desc: 'Enable shy students to share ideas without fear of judgment.', icon: MessageCircle },
                    { title: 'Global Connections', desc: 'Connect your classroom with peers worldwide for diverse perspectives.', icon: Globe }
                  ].map((tool, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                        <tool.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{tool.title}</h4>
                        <p className="text-xs text-slate-500">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parlay Integration */}
              <div className="bg-gradient-to-r from-emerald-900 to-teal-900 p-8 rounded-3xl text-white shadow-lg space-y-4">
                <div className="flex items-center gap-3">
                  <Users size={24} className="text-emerald-400" />
                  <h3 className="text-xl font-bold">Parlay Integration</h3>
                </div>
                <p className="text-emerald-100/80 leading-relaxed">
                  Sync with Parlay to structure Socratic seminars or peer feedback sessions. Combine Curipod's AI question generation with Parlay's discussion framework for deeper critical thinking.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Socratic Seminars', 'Peer Feedback', 'Online Tracking', 'Structured Debates'].map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Quote */}
        <div className="bg-fuchsia-600 p-10 rounded-[2.5rem] text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <Trophy size={48} className="mx-auto text-white/50" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              "Curipod turns whispers into 'WHAT?!' moments."
            </h2>
            <p className="text-fuchsia-100 font-medium">Share your debate Word Cloud with #AICuripodChallenge!</p>
            <button 
              onClick={onNext}
              className="mt-4 bg-white text-fuchsia-600 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto group"
            >
              Start Your Challenge <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Tomorrow's Preview */}
        <div className="text-center pb-20">
          <p className="text-slate-400 text-sm font-medium">
            Tomorrow's Preview: Day 20: Labster VR Labs – Immerse students in virtual science experiments with AI-guided lab simulations
          </p>
        </div>

      </div>
    </div>
  );
};

export default CuripodDay19;
