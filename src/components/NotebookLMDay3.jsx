import React, { useState } from 'react';
import {
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  Clock,
  Headphones,
  Lightbulb,
  Link,
  MessageSquare,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
  UploadCloud,
  Zap,
} from 'lucide-react';

const NotebookLMDay3 = ({ onNext }) => {
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
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">NotebookLM Challenge</h1>
          <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90">
            From Documents to Interactive Learning Platforms
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
                <h2 className="text-3xl font-bold mb-6">What is NotebookLM?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  NotebookLM is an experimental, AI-powered ultimate study application designed by Google that helps users summarize, simplify, and learn from uploaded documents. Built around your unique curriculum, it acts as a personalized assistant tutor that grounds its output strictly in the content you upload.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Sparkles size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Knowledge Retrieval:</span>
                      Instantly find specific key ideas across large document sets.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Zap size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Interactive Study Guides:</span>
                      Autogenerate FAQs, glossaries, and outlines from your source text.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <TrendingUp size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Critical Engagement:</span>
                      Create discussion questions tailored to your specific class level.
                    </p>
                  </div>
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Lightbulb size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Audio Summaries:</span>
                      Convert text formats to engaging conversational "podcasts".
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
                    <UploadCloud size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Source Upload</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Drag &amp; drop PDFs, Docs, or text files directly into the UI</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Build a knowledge base grounded only in your curriculum</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-site-primary/40 flex items-center justify-center text-site-text">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">AI Summary</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Automatic generation of a "source guide" upon upload</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Instantly get a bird's-eye view of complex topics</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-600/40 flex items-center justify-center text-site-text">
                    <Link size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Citation Engine</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Hover over AI answers to see direct excerpts from your files</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Teach critical sourcing and avoid plagiarism</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/40 flex items-center justify-center text-site-text">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Notebook Interaction</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Chat with your documents to find specific facts or ideas</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Extract precisely what you need for lesson planning</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/40 flex items-center justify-center text-site-text">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Collaborative Features</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Share entire notebooks with co-teachers or students</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Streamline unit planning across departments</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-rose-600/40 flex items-center justify-center text-site-text">
                    <Headphones size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Voice-to-Note</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Dictate ideas and have AI summarize them into study guides</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Hands-free brainstorming for busy educators</p>
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
                    "title": "Access NotebookLM",
                    "content": "Go to notebooklm.google.com and sign in with Google. Click \"New Notebook\" to start your first \"Study Guide\" project."
          },
          {
                    "step": 2,
                    "title": "Upload Sources",
                    "content": "Click \"Add Source\" and upload syllabus, assignment details, or reading materials (e.g., PDF). You can select up to 50 sources per specific Knowledge Base (e.g., Unit 1)."
          },
          {
                    "step": 3,
                    "title": "Ask AI to Organize Content",
                    "content": "Type: \"Create a pacing guide for these materials based on a 4-week period.\" Click \"Pin\" to save the summary to your notes section. Type: \"Create a pacing guide for these materials based on a 4-week period.\""
          },
          {
                    "step": 4,
                    "title": "Generate Study Materials",
                    "content": "Type: \"Act as an expert teacher. Write 5 discussion questions based on this document.\" Edit and save to a separate Google Doc. Type: \"Act as an expert teacher. Write 5 discussion questions based on this document.\""
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
                    <p className="text-site-text/70">"Transform a textbook chapter into an interactive study guide."</p>
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
                    <h3 className="text-xl font-bold">Upload a Source</h3>
                  </div>
                  <p className="text-sm text-site-text">Find a reading passage or PDF specific to your subject content. Upload it into NotebookLM.</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 2</div>
                    <h3 className="text-xl font-bold">Generate a Quiz</h3>
                  </div>
                  <p className="text-sm text-site-text">Use the "Notebook guide" button to generate a 3-question quiz (mix true/false + short answer).</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 3</div>
                    <h3 className="text-xl font-bold">Ask a Question</h3>
                  </div>
                  <p className="text-sm text-site-text">Ask the AI a specific question about the material to test its constraints. See if it references an outside topic.</p>
                </div>
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 4</div>
                    <h3 className="text-xl font-bold">Auto-Generate Audio</h3>
                  </div>
                  <p className="text-sm text-site-text">Click on the Deep Dive Audio generation button to create a 3-min "podcast" to introduce the reading to your specific class.</p>
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
                      <span className="font-bold text-site-primary block mb-1">Tag Sources:</span>
                      Label uploads by topic (e.g., Biology – Cell Structure) for easy retrieval.
                    </p>
                  </div>
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-site-primary-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <Zap size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">Collaboration:</span>
                      Share notebooks with co-teachers to co-create study aids.
                    </p>
                  </div>
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-yellow-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <TrendingUp size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">Podcast Limitations:</span>
                      The audio overview may occasionally invent slight banter but sticks closely to facts.
                    </p>
                  </div>
                </div>
              </div>
              
                <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-6 text-center">
                  <p className="text-site-text font-medium italic">"NotebookLM turns static chapters into dynamic study tools. Empower your students at home!"</p>
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
              NotebookLM Challenge
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
          Next Up: Day 4 – Continue your AI education journey
        </p>

      </div>
    </div>
  );
};

export default NotebookLMDay3;
