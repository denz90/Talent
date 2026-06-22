import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Layers,
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Zap
} from 'lucide-react';

const FetchyDay23 = ({ onNext }) => {
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
          
          <div className="absolute top-10 right-10 animate-pulse text-site-text">
            <Layers size={64} strokeWidth={1} />
          </div>

          <div className="text-center space-y-6 pt-8">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
              Day 23: Fetchy Challenge
            </h1>
            <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90 text-center">
              Streamline Teaching Tasks with AI-Powered Productivity
            </p>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <span className="flex items-center gap-2 text-site-text">
                <Clock size={16} /> Saves 5+ Hours/Week
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <CheckCircle2 size={16} /> Standards-Aligned
              </span>
              <span className="flex items-center gap-2 text-site-text">
                <MessageSquare size={16} /> AI Communication
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
                <h2 className="text-3xl text-site-text font-bold mb-6">What is Fetchy Challenge?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  Fetchy is an AI-driven platform designed specifically for educators to automate administrative tasks, generate teaching resources, and enhance classroom productivity. It acts as a virtual assistant for teachers, handling everything from lesson planning to parent communication.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  { [
                      { icon: Clock, title: 'Saves 5+ Hours/Week', desc: 'By automating repetitive tasks' },
                      { icon: CheckCircle2, title: 'Standards-Aligned', desc: 'Generates lesson plans in minutes' },
                      { icon: MessageSquare, title: 'AI Communication', desc: 'Simplifies parent-teacher emails with AI drafts' },
                      { icon: TrendingUp, title: 'Data-Driven Insights', desc: 'Personalize instruction with granular feedback' }
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
                    title: 'Lesson Plan Generator',
                    icon: FileText,
                    color: 'purple',
                    howTo: 'Select grade/subject → Input topic → Adjust length → Generate',
                    benefit: 'Creates ready-to-use plans with objectives and activities'
                  },
                  {
                    title: 'Email Draft Assistant',
                    icon: MessageSquare,
                    color: 'blue',
                    howTo: 'Choose template (e.g., "Parent Update") → Add details → AI refines tone',
                    benefit: 'Sends polished, empathetic messages in seconds'
                  },
                  {
                    title: 'Worksheet Creator',
                    icon: Layers,
                    color: 'emerald',
                    howTo: 'Pick template (e.g., "Math Drills") → Customize → Export as PDF',
                    benefit: 'Generates differentiated practice sheets'
                  },
                  {
                    title: 'Meeting Agenda Builder',
                    icon: Layers,
                    color: 'orange',
                    howTo: 'Input goals (e.g., "PLC Meeting") → Auto-generate discussion points',
                    benefit: 'Keeps team meetings focused and efficient'
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
                  { step: 1, title: 'Sign Up', desc: 'Go to Fetchy.io → Click "Try Free" → Sign up with Google/email' },
                  { step: 2, title: 'Generate Your First Lesson Plan', desc: 'Click "Lesson Plans" → Select Grade 5 Science → Enter topic "Ecosystems" → Choose "30-minute activity" → Toggle "Include NGSS Standards" → Click "Generate" → Edit the AI output' },
                  { step: 3, title: 'Draft a Parent Email', desc: 'Navigate to "Communications" → Select "Progress Update" → Fill in student name, strengths, and areas for growth → Click "Generate Draft" → Polish the tone' },
                  { step: 4, title: 'Create a Worksheet', desc: 'Open "Resources" → Choose "Vocabulary Matching" → Enter 10 science terms + definitions → Click "Download PDF" → Save to Google Drive' }
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
                    "Automate 1 week of lesson prep and parent communication using Fetchy."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { 
                        title: 'Planning: Lesson Planning Sprint', 
                        desc: 'Generate 3 lesson plans for your next unit (15, 30, and 45 mins). Screenshot standards alignment. Download with assessments.',
                        icon: FileText,
                        step: 'Step 1'
                      },
                      { 
                        title: 'Communication: Parent Outreach', 
                        desc: 'Draft behavioral update and newsletter emails. Show before-and-after AI refinement. Note tone/clarity adjustments.',
                        icon: MessageSquare,
                        step: 'Step 2'
                      },
                      { 
                        title: 'Resources: Resource Creation', 
                        desc: 'Match a custom worksheet to your unit. Customize questions and difficulty level. Export as PDF.',
                        icon: Layers,
                        step: 'Step 3'
                      },
                      { 
                        title: 'Collaboration: Share Your Work', 
                        desc: 'Compile resources in Fetchy Library. Share with colleagues. Post with #FetchyChallenge.',
                        icon: Layers,
                        step: 'Step 4'
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

              {/* Weekly Time Savings Breakdown */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">Weekly Time Savings Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Lesson Planning', traditional: '3-4 hours', fetchy: '20 mins', saved: '85%' },
                    { label: 'Parent Emails', traditional: '1-2 hours', fetchy: '10 mins', saved: '90%' },
                    { label: 'Worksheet Creation', traditional: '2-3 hours', fetchy: '15 mins', saved: '80%' }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-site-bg border border-site-accent shadow-sm text-center space-y-4">
                      <h4 className="font-bold text-site-text/80 text-xs uppercase tracking-widest">{item.label}</h4>
                      <div className="flex justify-center items-end gap-1">
                        <span className="text-3xl font-black text-indigo-600">{item.saved}</span>
                        <span className="text-sm font-bold text-slate-400 pb-1">Time Saved</span>
                      </div>
                      <div className="text-xs text-site-text/80 space-y-1">
                        <p>Traditional: {item.traditional}</p>
                        <p className="font-bold text-indigo-600">Fetchy: {item.fetchy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Batch Tasks', icon: Layers, desc: 'Use Fetchy every Monday to prep the entire week\'s materials. Create all plans and emails in one session.' },
                  { title: 'Tweak Templates', icon: FileText, desc: 'Save custom email templates for recurring needs. Modify AI drafts only when necessary for consistency.' },
                  { title: 'LMS Integration', icon: Zap, desc: 'Copy-paste AI-generated content directly into Google Classroom or Canvas. Blend Fetchy into your existing workflow.' }
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

              {/* What Fetchy Can Do */}
              <div className="bg-site-primary rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight text-center">What Fetchy Can Do</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { title: 'Lesson Plans', icon: FileText, desc: 'Standards aligned' },
                    { title: 'Parent Emails', icon: MessageSquare, desc: 'Empathetic tone' },
                    { title: 'Worksheets', icon: Layers, desc: 'Differentiated' },
                    { title: 'Meeting Agendas', icon: Layers, desc: 'Focused' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center space-y-3 group">
                      <div className="w-12 h-12 rounded-2xl bg-site-bg/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email Assistant Tools */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-site-text tracking-tight">Email Draft Assistant Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { tool: 'Progress Updates', desc: 'Share academic strengths and areas for growth with parents.' },
                    { tool: 'Behavioral Notes', desc: 'Professional drafts for classroom behavior or participation updates.' },
                    { tool: 'Curriculum Reviews', desc: 'Explain upcoming units or project goals to parents/guardians.' },
                    { tool: 'Meeting Requests', desc: 'Schedule and coordinate parent-teacher conferences efficiently.' }
                  ].map((tool, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-site-bg border border-site-accent shadow-sm hover:border-indigo-100 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs flex-shrink-0">
                        <MessageSquare size={16} />
                      </div>
                      <div>
                        <h4 className="font-bold text-site-text text-sm">{tool.tool}</h4>
                        <p className="text-xs text-site-text/80">{tool.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workflow Integration */}
              <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 space-y-6">
                <h3 className="text-xl font-bold text-indigo-900 flex items-center gap-2">
                  <Zap size={24} /> Seamless Workflow Integration
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Google Classroom', icon: Layers},
                    { label: 'Canvas LMS', icon: Target},
                    { label: 'Google Drive', icon: FileText},
                    { label: 'Email Clients', icon: MessageSquare}
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 p-4 bg-site-bg rounded-2xl shadow-sm">
                      <item.icon size={20} className="text-indigo-600" />
                      <span className="text-xs font-bold text-slate-700">{item.label}</span>
                    </div>
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
              "Fetchy turns administrative chaos into focused teaching time."
            </h2>
            <p className="text-site-text font-medium">Share your results with #FetchyChallenge!</p>
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

export default FetchyDay23;
