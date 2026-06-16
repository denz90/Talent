import React, { useState } from 'react';
import {
  BarChart2,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from 'lucide-react';

const FlintDay13 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'guide', label: 'Guide' },
    { id: 'challenge', label: 'Challenge' }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-site-primary text-site-text">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-12 pb-32">
        
        {/* Header Hero */}
        <div className="bg-site-primary-400 rounded-3xl p-10 ">
        <div className="text-center space-y-6 pt-8">
          <div className="flex justify-center">
            <div className="bg-yellow-400 p-3 rounded-2xl transform rotate-12 animate-pulse">
              <Sparkles className="text-[#2e0052]" size={32} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Flint Challenge</h1>
          <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90">
            AI-powered Lesson Planning &amp; Personalized Student Support
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-site-text">
              <Clock size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Saves Hours</span>
            </div>
            <div className="flex items-center gap-2 text-site-text">
              <Sparkles size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 text-site-text">
              <TrendingUp size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Boosts Results</span>
            </div>
          </div>
        </div>
        </div>

        {/* Tab Navigation */}
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

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'overview' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-site-bg rounded-3xl p-10 border border-site-accent">
                <h2 className="text-3xl font-bold mb-6">What is Flint?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  Flint is an AI teaching assistant designed to help teachers personalize lesson plans, generate high-quality assignments, and provide students with real-time feedback. It allows educators to automate the heavy lifting of lesson prep while ensuring each student receives the individual attention they need.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Sparkles size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Personalized Learning:</span>
                      Tailor content to meet the diverse needs of every student in your classroom.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Zap size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Instant Feedback:</span>
                      Provide students with immediate suggestions as they work through their assignments.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <TrendingUp size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">AI Co-Planner:</span>
                      Generate comprehensive lesson plans and curriculum maps in seconds.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Lightbulb size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Actionable Data:</span>
                      Identify trends and student performance at a glance with the progress dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Key Features &amp; How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-pink-600/40 flex items-center justify-center text-site-text">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">AI Lesson Planner</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Input your objectives and topic → AI co-creates a multi-phase lesson plan including hooks and wrap-ups</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Ensures every lesson is structured and engaging</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-site-primary/40 flex items-center justify-center text-site-text">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Assignment Generator</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Select grade level and subject → AI generates customized assignments that align with your lesson goals</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Creates differentiated work for mixed-ability classes</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-600/40 flex items-center justify-center text-site-text">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Real-time Feedback</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Enable live AI assistance on assignments → Students get immediate hints and corrections as they type</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Reduces student frustration and accelerates learning</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/40 flex items-center justify-center text-site-text">
                    <BarChart2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Progress Dashboard</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Open the "Class View" → Track student completion rates and common stumbling points in real-time</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Enables data-driven remediation and support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Getting Started Guide</h2>
              
              <div className="space-y-6">
                {[
          {
                    "step": 1,
                    "title": "Sign Up",
                    "content": "Go to the Flint website. Click \"Get Started\" and select your teacher profile."
          },
          {
                    "step": 2,
                    "title": "Set Up Your Classroom",
                    "content": "Import your students from Google Classroom or enter them manually. Select your grade level and preferred teaching standards."
          },
          {
                    "step": 3,
                    "title": "Generate Your First AI Lesson",
                    "content": "Click \"New Lesson Plan\" \u2192 Enter your topic and standards. Review and edit the AI-generated outline until it fits your needs."
          },
          {
                    "step": 4,
                    "title": "Create an Assignment",
                    "content": "Click \"Generate Assignment\" \u2192 Select the lesson plan you just created. Choose your preferred output (e.g. Worksheet, Quiz, or Project Brief)."
          },
          {
                    "step": 5,
                    "title": "Review Student Work",
                    "content": "Open the \"Student Submissions\" tab \u2192 View student work alongside AI-generated insights and feedback logs."
          }
].map((step) => (
                  <div key={step.step} className="bg-site-bg rounded-3xl p-8 border border-site-accent flex items-center gap-8 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-full bg-site-primary text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-pink-500/20">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-site-text">{step.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenge' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-3xl p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-[#2e0052]">
                    <Target size={24} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-site-text">Practical Challenge Task</h2>
                    <p className="text-site-text/70">"Design a personalized lesson and assignment for a mixed-ability classroom."</p>
                  </div>
                </div>
                <div className="bg-yellow-400/20 px-4 py-2 rounded-lg inline-flex items-center gap-2 text-site-text text-sm font-bold">
                  <Clock size={16} />
                  Time Goal: Under 15 minutes
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-site-primary flex items-center justify-center text-site-text text-xs font-bold">Part 1</div>
                    <h3 className="text-xl font-bold">Generate a Lesson Plan</h3>
                  </div>
                  <p className="text-sm text-site-text">Select a challenging topic and ask Flint to generate a multi-phase lesson plan including differentiated activities.</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 2</div>
                    <h3 className="text-xl font-bold">Create Differentiated Work</h3>
                  </div>
                  <p className="text-sm text-site-text">Generate two versions of an assignment (e.g. Standard and Advanced) using the AI generator based on your lesson plan.</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 3</div>
                    <h3 className="text-xl font-bold">Analyze AI Feedback</h3>
                  </div>
                  <p className="text-sm text-site-text">Review the AI's real-time feedback on a sample student response to see how it handles student errors and misconceptions.</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 4</div>
                    <h3 className="text-xl font-bold">Share Your Progress</h3>
                  </div>
                  <p className="text-sm text-site-text">Export your lesson plan and share your experience with colleagues using #FlintChallenge.</p>
                </div>
              </div>

              <div className="pt-10 space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" size={32} /> Pro Tips for Mastery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-pink-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <Lightbulb size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">🎯 Differentiated Assignments:</span>
                      Use Flint's AI to generate multiple versions of an assignment to cater to different skill levels.
                    </p>
                  </div>
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-site-primary-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <Zap size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">🔄 Adaptive Feedback:</span>
                      Enable the "Scaffold Mode" for students who struggle to provide them with more granular support.
                    </p>
                  </div>
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-yellow-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <TrendingUp size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">🤝 Collaborative Planning:</span>
                      Share your AI-generated lesson plans with colleagues to streamline curriculum development.
                    </p>
                  </div>
                </div>
              </div>
              
            </div>
          )}
        </div>

        {/* Bottom CTA Card */}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-site-grad-from to-site-grad-to p-12 text-center space-y-8 shadow-2xl shadow-site-accent-600/20">
          <div className="absolute opacity-20"></div>
          
          <div className="flex justify-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-site-bg/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
              <Trophy size={32} />
            </div>
          </div>
          
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl font-black max-w-2xl mx-auto leading-tight">
              Flint Challenge
            </h2>
            <p className="text-site-text font-medium">Complete the challenge and advance your AI skills!</p>
          </div>
          
          <div className="relative z-10">
            <button 
              onClick={onNext}
              className="bg-site-bg text-site-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-3 mx-auto group"
            >
              Start Your Challenge
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <p className="text-center text-site-text/60 text-sm pb-10">
          Next Up: Day 14 – Continue your AI education journey
        </p>

      </div>
    </div>
  );
};

export default FlintDay13;
