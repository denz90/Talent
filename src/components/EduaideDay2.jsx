import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileDown,
  Globe,
  Lightbulb,
  MessageSquare,
  Puzzle,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from 'lucide-react';

const EduaideDay2 = ({ onNext }) => {
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
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Eduaide.AI Challenge</h1>
          <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90">
            AI-Powered Lesson Planning &amp; Resource Generation
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
                <h2 className="text-3xl font-bold mb-6">What is Eduaide.?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  Eduaide.AI is a versatile AI platform that helps educators create lesson plans, assessments, assignments, and interactive activities. It provides an all-in-one workspace that reduces administrative burden while maintaining pedagogical quality.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Sparkles size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Massive Time-Saver:</span>
                      Saves 10+ hours a week on lesson planning and resource creation.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Zap size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Differentiation at Scale:</span>
                      Generates differentiated materials for diverse learners instantly.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <TrendingUp size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Extensive Library:</span>
                      Offers 100+ templates for rubrics, letters, and curriculum materials.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Lightbulb size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Seamless Workflow:</span>
                      Easy to use and integrates directly into your existing classroom routines.
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
                    <FileDown size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Lesson Plan Generator</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Input topic/standard → Select grade level → Generate draft.</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Creates standards-aligned plans in 1 minute.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-site-primary/40 flex items-center justify-center text-site-text">
                    <Puzzle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Worksheet Builder</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Choose template → Customize content → Download PDF.</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Instantly printable student activities.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-600/40 flex items-center justify-center text-site-text">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Assessment Creator</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Set question types → AI generates with answer key.</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Auto-gradable quizzes with Bloom's taxonomy (e.g., Medium = Apply/Analyze).</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/40 flex items-center justify-center text-site-text">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Feedback Bot</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Paste student work → Get rubric-aligned suggestions.</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Provides personalized, actionable feedback.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/40 flex items-center justify-center text-site-text">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Translation Tool</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Upload resource → Select target language → Convert.</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Supports ESL/ELL learners effortlessly.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-rose-600/40 flex items-center justify-center text-site-text">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Curricular Alignment</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Map existing units to new standards or state requirements.</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Ensures full coverage of required learning goals.</p>
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
                    "content": "Go to Eduaide.ai \u2192 Click \"Get Started Free\"."
          },
          {
                    "step": 2,
                    "title": "Generate Your First Lesson Plan",
                    "content": "Click \"Lesson Planner\". Topic: e.g., \"Photosynthesis\" Grade Level: e.g., 7th Grade Standards: e.g., NGSS MS-LS1-6 Click \"Generate\" \u2192 Edit using the \"Enhance\" tools."
          },
          {
                    "step": 3,
                    "title": "Generate a Worksheet",
                    "content": "Click \"Resource Generator\" \u2192 Choose \"Worksheet\": Add text/topic (e.g., \"Photosynthesis\") \u2192 Click \"Generate\" \u2192 Export/Download."
          },
          {
                    "step": 4,
                    "title": "Build an Assessment",
                    "content": "Click \"Assessment Generator\" \u2192 Set Question Types, Difficulty \u2192 Generate & Export."
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
                    <p className="text-site-text/70">"Design a differentiated lesson with 3 supporting resources."</p>
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
                    <div className="w-10 h-10 rounded-xl bg-site-primary flex items-center justify-center text-site-text text-xs font-bold">1</div>
                    <h3 className="text-xl font-bold">Generate a Base Lesson Plan</h3>
                  </div>
                  <p className="text-sm text-site-text">Use the "Lesson Plan Generator" to outline a 45-min lesson (e.g., Science, American Revolution).</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/40 flex items-center justify-center text-site-text text-xs font-bold">2</div>
                    <h3 className="text-xl font-bold">Add an Exit Ticket</h3>
                  </div>
                  <p className="text-sm text-site-text">Use the "Assessment Generator" to create a short 3-question formative assessment.</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-600/40 flex items-center justify-center text-site-text text-xs font-bold">3</div>
                    <h3 className="text-xl font-bold">Create Tiered Worksheets</h3>
                  </div>
                  <p className="text-sm text-site-text">Use the "Differentiate Maker" or "Task Generator" to create worksheets for varying levels (e.g., below, on, above level).</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/40 flex items-center justify-center text-site-text text-xs font-bold">4</div>
                    <h3 className="text-xl font-bold">Bonus</h3>
                  </div>
                  <p className="text-sm text-site-text">Translate one resource into another language using the Translation tool.</p>
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
                      <span className="font-bold text-site-primary block mb-1">Feedback Bot:</span>
                      Feed the AI actual student writing to generate actionable comments.
                    </p>
                  </div>
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-site-primary-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <Zap size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">Add to My Library:</span>
                      Click "Add to My Library" to save and reuse optimized materials as templates.
                    </p>
                  </div>
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-yellow-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <TrendingUp size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">Knowledge Base:</span>
                      Use Eduaide's Help Library if you ever get stuck.
                    </p>
                  </div>
                </div>
              </div>
              
                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-6 text-center">
                  <p className="text-site-text font-medium italic">"Eduaide.AI turns chaotic prep into streamlined simplicity. Scale your time using #AIResourcer"</p>
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
              Eduaide.AI Challenge
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
          Next Up: Day 3 – Continue your AI education journey
        </p>

      </div>
    </div>
  );
};

export default EduaideDay2;
