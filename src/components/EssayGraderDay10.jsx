import React, { useState } from 'react';
import {
  AlignLeft,
  BarChart2,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock,
  Lightbulb,
  MessageSquare,
  PenLine,
  RefreshCcw,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from 'lucide-react';

const EssayGraderDay10 = ({ onNext }) => {
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
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">What is EssayGrader.ai?</h1>
          <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90">
            A tool to instantly Grade and provide Instant AI-Powered Feedback
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
                <h2 className="text-3xl font-bold mb-6">What is What is EssayGrader.ai??</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  EssayGrader.ai is an AI-powered platform that allows teachers to grade and provide detailed feedback on student essays in seconds. It analyzes writing structure, grammar, argument quality, and more — reducing grading time dramatically while improving feedback consistency.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Sparkles size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Saves Hours of Grading:</span>
                      Teachers can grade up to 30 essays in minutes instead of hours, freeing time for instruction.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Zap size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Consistent Feedback:</span>
                      AI applies the same rubric criteria to every submission, eliminating grading bias and fatigue.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <TrendingUp size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Instant Student Feedback:</span>
                      Students receive actionable feedback immediately, allowing them to revise and improve faster.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Lightbulb size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Custom Rubric Support:</span>
                      Upload your own rubric so the AI grades exactly according to your course standards and expectations.
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
                    <AlignLeft size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Essay Upload</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Paste or upload student essays directly into the platform</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Handles any format — typed or copy-pasted text</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-site-primary/40 flex items-center justify-center text-site-text">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">AI Grading Engine</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">AI evaluates structure, clarity, grammar, and argument quality automatically</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Instant scores with detailed explanations per criterion</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-600/40 flex items-center justify-center text-site-text">
                    <PenLine size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Custom Rubric</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Create and upload your own rubric for the AI to grade against</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Aligns grading directly to your course learning objectives</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/40 flex items-center justify-center text-site-text">
                    <BarChart2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Batch Grading</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Upload multiple essays at once for simultaneous AI evaluation</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Grade an entire class in minutes, not hours</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/40 flex items-center justify-center text-site-text">
                    <RefreshCcw size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Revision Feedback</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Students can resubmit revised essays and get updated feedback instantly</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Encourages a growth mindset and iterative writing improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-rose-600/40 flex items-center justify-center text-site-text">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Inline Comments</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">AI highlights specific sentences and adds targeted improvement suggestions</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Gives students precise, actionable feedback on their actual writing</p>
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
                    "content": "Go to the EssayGrader.ai website. Click \"Get Started Free\" (educator plan available)."
          },
          {
                    "step": 2,
                    "title": "Set Up Your Rubric",
                    "content": "Click \"New Assignment\" \u2192 Name it (e.g., \"Argumentative Essay \u2013 Week 5\"). Choose from a preset rubric or upload your own criteria (e.g., Thesis, Evidence, Clarity, Grammar). Set point values for each criterion to match your grading scale."
          },
          {
                    "step": 3,
                    "title": "Submit Essays",
                    "content": "Paste student essay text or upload documents directly. Click \"Grade\" \u2192 The AI processes and scores the essay in seconds."
          },
          {
                    "step": 4,
                    "title": "Review AI Feedback",
                    "content": "Open the graded essay \u2192 View the rubric breakdown and overall score. Read inline comments highlighting specific strengths and areas to improve. Edit or add your own notes before sharing feedback with students."
          },
          {
                    "step": 5,
                    "title": "Share Results",
                    "content": "Export graded essays as PDF reports or share individual feedback links directly with students."
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
                    <p className="text-site-text/70">"Grade and provide feedback on 3 student essays using AI, then refine one submission manually."</p>
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
                    <h3 className="text-xl font-bold">Prepare Essays</h3>
                  </div>
                  <p className="text-sm text-site-text">Collect 3 student essays on the same topic. Create a custom rubric with criteria: "Thesis Clarity," "Use of Evidence," "Grammar &amp; Style."</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 2</div>
                    <h3 className="text-xl font-bold">AI Efficiency</h3>
                  </div>
                  <p className="text-sm text-site-text">Upload all 3 essays at once using batch grading. Note the time it takes the AI to complete all three.</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 3</div>
                    <h3 className="text-xl font-bold">Select &amp; Refine</h3>
                  </div>
                  <p className="text-sm text-site-text">Choose one essay and manually add 2–3 personalized comments on top of the AI feedback. Compare the AI's score with your own assessment.</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 4</div>
                    <h3 className="text-xl font-bold">Share Results</h3>
                  </div>
                  <p className="text-sm text-site-text">Export the feedback as PDF. Share your experience using #EssayGraderChallenge on social media!</p>
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
                      <span className="font-bold text-site-primary block mb-1">📝 Rubric First:</span>
                      Always create or upload your rubric before grading — it dramatically improves AI feedback quality.
                    </p>
                  </div>
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-site-primary-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <Zap size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">🔄 Revision Loop:</span>
                      Encourage students to revise and resubmit — EssayGrader.ai gives fresh feedback each time, reinforcing improvement.
                    </p>
                  </div>
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-yellow-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <TrendingUp size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">🤝 Human Touch:</span>
                      Use AI as a first pass, then add 1–2 personal comments to show students you engaged with their work.
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
              What is EssayGrader.ai?
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
          Next Up: Day 11 – Continue your AI education journey
        </p>

      </div>
    </div>
  );
};

export default EssayGraderDay10;
