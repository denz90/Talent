import React, { useState } from 'react';
import {
  Sparkles,
  Clock,
  Gamepad2,
  Globe,
  FileText,
  Link,
  BookOpen,
  Presentation,
  Image,
  ChevronRight,
  Trophy,
  Zap,
  Target,
  BarChart,
  UserCheck,
  CheckCircle2,
  TrendingUp,
  Lightbulb,
  MousePointer2,
  Search,
  Users,
  PenTool,
  Download,
  ShieldCheck,
  Palette
} from 'lucide-react';

const ScribbleDiffusionDay16 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'guide', label: 'Guide' },
    { id: 'challenge', label: 'Challenge' }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-[#0F172B] via-[#59168B] to-[#0F172B] text-white">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-12 pb-32">
        
        {/* Header Hero */}
        <div className="bg-gradient-to-r from-[#9810FA33]/80 to-[#E6007633]/100 rounded-3xl p-10 border border-purple-400/20">
          <div className="text-center space-y-6 pt-8">
            <div className="flex justify-center">
              <div className="bg-yellow-400 p-3 rounded-2xl transform rotate-12 animate-pulse">
                <Sparkles className="text-[#2e0052]" size={32} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight">Day 16: Scribble Diffusion AI</h1>
            <p className="text-xl text-purple-100 font-medium max-w-2xl mx-auto opacity-90">
              Turn Rough Sketches into Refined AI Art for Visual Learning
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <div className="flex items-center gap-2 text-purple-200">
                <Image size={18} />
                <span className="text-sm font-bold uppercase tracking-widest">Visualizes Concepts</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <Clock size={18} />
                <span className="text-sm font-bold uppercase tracking-widest">Saves Time</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <Users size={18} />
                <span className="text-sm font-bold uppercase tracking-widest">Engages Students</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#4b2475]/50 backdrop-blur-md p-1.5 rounded-2xl flex gap-2 border border-purple-400/20 max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.id 
                ? 'bg-white text-[#2e0052] shadow-lg scale-[1.02]' 
                : 'text-purple-200 hover:bg-white/10'
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
              <div className="bg-[#4b2475]/40 rounded-3xl p-10 border border-purple-400/20">
                <h2 className="text-3xl font-bold mb-6">What is Scribble Diffusion AI?</h2>
                <p className="text-purple-50 text-lg leading-relaxed opacity-90">
                  Scribble Diffusion is a web-based AI tool that transforms simple hand-drawn sketches into high-quality, detailed AI art. Using generative models, it interprets rough drawings and text prompts to create polished illustrations, making it a perfect tool for teachers to create custom visual aids or for students to visualize abstract concepts without needing professional drawing skills.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/30 flex items-center justify-center text-purple-300">
                      <Image size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">Visualizes Concepts:</span>
                      Instantly turns rough ideas into clear illustrations for slides or worksheets.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/30 flex items-center justify-center text-blue-300">
                      <Clock size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">Saves Time:</span>
                      Create custom visual assets in seconds rather than searching for stock images.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-green-600/30 flex items-center justify-center text-green-300">
                      <Users size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">Engages Students:</span>
                      Gamifies the process of visual learning and artistic expression in the classroom.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-8 rounded-2xl border border-purple-400/20 flex flex-col gap-4 group hover:bg-[#5b2b8c] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-pink-600/30 flex items-center justify-center text-pink-300">
                      <Zap size={24} />
                    </div>
                    <p className="text-purple-100 font-medium">
                      <span className="font-bold text-white block mb-1">No Login Required:</span>
                      Instant accessibility for both teachers and students without account setup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Key Features & How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature 1 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-pink-600/40 flex items-center justify-center text-pink-200">
                    <Image size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Sketch to Art</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Draw anything → Click "Go" → AI refines it into a detailed illustration</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Instantly creates visuals for worksheets/slides</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/40 flex items-center justify-center text-blue-200">
                    <Sparkles size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Style Retention</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Use clear outlines + minimal scribbles to guide the AI's composition</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Preserves original intent while enhancing quality</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-600/40 flex items-center justify-center text-green-200">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">No Login Needed</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Open website → Start drawing immediately without an account</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Zero setup for classroom use and privacy-friendly</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/40 flex items-center justify-center text-orange-200">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Download PNG</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-purple-100">Click "Download" → Save image to your local device</p>
                      </div>
                      <div className="bg-purple-900/40 p-3 rounded-xl border border-purple-400/10">
                        <p className="text-purple-300 uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Ready-to-use assets for lessons/projects</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Step-by-Step Getting Started Guide</h2>
              <div className="space-y-6">
                {[
                  { step: 1, title: 'Access the Tool', content: 'Go to Scribble Diffusion (no signup required)' },
                  { step: 2, title: 'Sketch Your Idea', content: 'Click the drawing canvas and use your mouse/touchscreen to draw (e.g., plant cell, historical figure)' },
                  { step: 3, title: 'Generate AI Art', content: 'Click "Go" button → Wait 5-10 seconds for AI to process your sketch into a clean illustration' },
                  { step: 4, title: 'Refine & Save', content: 'Redraw messy lines and retry if needed → Click "Download" to save PNG file' }
                ].map((step) => (
                  <div key={step.step} className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 flex items-center gap-8 group hover:translate-x-2 transition-all">
                    <div className="w-14 h-14 rounded-full bg-[#e61e7d] text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-pink-500/20">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-purple-100/80">{step.content}</p>
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
                    <h2 className="text-3xl font-bold text-yellow-400">Practical Challenge Task</h2>
                    <p className="text-yellow-100/70">Create an AI-generated diagram of a plant cell using Scribble Diffusion.</p>
                  </div>
                </div>
                <div className="bg-yellow-400/20 px-4 py-2 rounded-lg inline-flex items-center gap-2 text-yellow-400 text-sm font-bold">
                  <Clock size={16} />
                  Time Goal: Under 5 minutes
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/40 flex items-center justify-center text-blue-200 text-xs font-bold">Part 1</div>
                    <h3 className="text-xl font-bold">Sketch the Outline</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-purple-100/80">
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" size={18} /> <span>Draw a large rough circle for the cell wall</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" size={18} /> <span>Add a smaller circle inside for the nucleus</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" size={18} /> <span>Add a few bean shapes for mitochondria</span></li>
                  </ul>
                </div>

                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/40 flex items-center justify-center text-pink-200 text-xs font-bold">Part 2</div>
                    <h3 className="text-xl font-bold">Describe & Generate</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-purple-100/80">
                    <li className="flex gap-3"><CheckCircle2 className="text-pink-400 shrink-0" size={18} /> <span>Type the prompt: "Detailed diagram of a plant cell with chloroplasts"</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-pink-400 shrink-0" size={18} /> <span>Click "Go" and watch the AI refine your sketch</span></li>
                  </ul>
                </div>

                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-600/40 flex items-center justify-center text-green-200 text-xs font-bold">Part 3</div>
                    <h3 className="text-xl font-bold">Refine the Visual</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-purple-100/80">
                    <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>If the result is messy, redraw the outlines more clearly</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>Adjust the prompt to be more specific (e.g. "Oil painting style cell")</span></li>
                  </ul>
                </div>

                <div className="bg-[#4b2475] rounded-3xl p-8 border border-purple-400/20 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/40 flex items-center justify-center text-orange-200 text-xs font-bold">Part 4</div>
                    <h3 className="text-xl font-bold">Download & Share</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-purple-100/80">
                    <li className="flex gap-3"><CheckCircle2 className="text-orange-400 shrink-0" size={18} /> <span>Click "Download" to save your cell diagram</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-orange-400 shrink-0" size={18} /> <span>Post your result with #EdTechMagic</span></li>
                  </ul>
                </div>
              </div>

              <div className="pt-10 space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" size={32} /> Pro Tips for Mastery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#4b2475] p-6 rounded-3xl border border-purple-400/20 relative overflow-hidden group hover:border-pink-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/30 flex items-center justify-center text-pink-300 mb-4">
                      <Palette size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-purple-100/90">
                      <span className="font-bold text-white block mb-1">Composition is Key:</span>
                      The AI uses your sketch as a structural map. Keep your shapes distinct to get better results.
                    </p>
                  </div>
                  
                  <div className="bg-[#4b2475] p-6 rounded-3xl border border-purple-400/20 relative overflow-hidden group hover:border-blue-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/30 flex items-center justify-center text-blue-300 mb-4">
                      <PenTool size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-purple-100/90">
                      <span className="font-bold text-white block mb-1">Iterate Quickly:</span>
                      Don't aim for perfection in the first sketch. Redraw and regenerate until you find the right balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom CTA Card */}
        <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-r from-[#e61e7d] to-[#ff4b2b] p-12 text-center space-y-8 shadow-2xl shadow-pink-500/20">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="flex justify-center relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
              <Trophy size={32} />
            </div>
          </div>
          
          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl font-black max-w-2xl mx-auto leading-tight">
              "Scribble Diffusion turns 'I can't draw' into 'Look what I created!'"
            </h2>
            <p className="text-pink-100 font-medium">Share your lesson visuals with #EdTechMagic!</p>
          </div>
          
          <div className="relative z-10">
            <button 
              onClick={onNext}
              className="bg-white text-[#e61e7d] px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/20 flex items-center gap-3 mx-auto group"
            >
              Start Your Challenge
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <p className="text-center text-purple-300/60 text-sm pb-10">
          Tomorrow's Preview: Day 17: Parlay – Spark 300% more class discussions with AI-powered debate prompts
        </p>

      </div>
    </div>
  );
};

export default ScribbleDiffusionDay16;
