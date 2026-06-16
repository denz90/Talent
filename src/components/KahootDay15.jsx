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
  Users
} from 'lucide-react';

const KahootDay15 = ({ onNext }) => {
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
          <div className="flex justify-center">-
            <div className="bg-yellow-400 p-3 rounded-2xl transform rotate-12 animate-pulse">
              <Sparkles className="text-[#2e0052]" size={32} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tight">Day 15: Kahoot! AI</h1>
          <p className="text-xl text-site-text font-medium max-w-2xl mx-auto opacity-90">
            Transform Any Content into Engaging Learning Games in Seconds
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-site-text">
              <Clock size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Saves Hours</span>
            </div>
            <div className="flex items-center gap-2 text-site-text">
              <Gamepad2 size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Boosts Engagement</span>
            </div>
            <div className="flex items-center gap-2 text-site-text">
              <Globe size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">58 Languages</span>
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
                <h2 className="text-3xl font-bold mb-6">What is Kahoot! AI?</h2>
                <p className="text-site-text text-lg leading-relaxed opacity-90">
                  Kahoot! AI is an AI-powered question generator integrated into the Kahoot! platform that instantly converts any topic, document, or web content into interactive quizzes and learning games. It uses OpenAI's GPT-4 model to analyze content and generate engaging questions complete with answer options.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Clock size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Saves Hours of Planning:</span>
                      Turns lesson prep into seconds, not hours
                    </p>
                  </div>
                  
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text">
                      <Gamepad2 size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Boosts Engagement Instantly:</span>
                      Gamified learning students want to participate in
                    </p>
                  </div>
                  
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <FileText size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Works With What You Have:</span>
                      Converts existing PDFs, slides, or URLs into games
                    </p>
                  </div>
                  
                  <div className="bg-site-bg p-8 rounded-2xl border border-site-primary flex flex-col gap-4 group hover:bg-site-bg transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-site-text flex items-center justify-center hover:bg-site-primary transition-colors text-site-accent">
                      <Globe size={24} />
                    </div>
                    <p className="text-site-text font-medium">
                      <span className="font-bold text-site-primary block mb-1">Supports 58 Languages:</span>
                      Perfect for multilingual classrooms
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-center">Key Features & How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-pink-600/40 flex items-center justify-center text-site-text">
                    <Gamepad2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Topic-to-Quiz</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Type any subject (e.g., "Photosynthesis") → AI generates complete quiz</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Instant lesson hooks or exit tickets</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-site-primary/40 flex items-center justify-center text-site-text">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">PDF Upload</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Upload lecture notes, textbook chapters, or worksheets → AI extracts/creates questions</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Turns existing materials into games without retyping</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-green-600/40 flex items-center justify-center text-site-text">
                    <Link size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">URL to Kahoot</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Paste any article or webpage link → AI analyzes content and generates questions</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Perfect for current events or reading comprehension</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-orange-600/40 flex items-center justify-center text-site-text">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Wikipedia Integration</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Enter Wikipedia article title → AI pulls key facts</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Reliable source material for research-based games</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-600/40 flex items-center justify-center text-site-text">
                    <Presentation size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Google Slides Sync</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Import from Google Slides → Click "Generate"</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Transform existing presentations instantly</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Feature 6 */}
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent flex flex-col gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-pink-600/40 flex items-center justify-center text-site-text">
                    <Image size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">AI Image Generation</h3>
                    <div className="space-y-4">
                      <div className="text-sm">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1">How to Use:</p>
                        <p className="text-site-text">Describe an image → AI creates custom visuals</p>
                      </div>
                      <div className="bg-site-primary/40 p-3 rounded-xl border border-site-accent/10">
                        <p className="text-site-text uppercase font-bold text-[10px] tracking-widest mb-1 text-green-400">Benefit:</p>
                        <p className="text-xs font-bold text-green-100">Makes every question visually unique</p>
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
                  { step: 1, title: 'Access Kahoot! AI', content: 'Go to kahoot.com → Log in → Click Create button → Select Kahoot! Generator' },
                  { step: 2, title: 'Choose Your Input Method', content: 'Select from Topic, PDF Upload, URL, or Wikipedia article' },
                  { step: 3, title: 'Customize Generation Settings', content: 'Adjust Skill Level (Beginner/Intermediate/Advanced), Game Length, and Format' },
                  { step: 4, title: 'Generate and Review', content: 'Click Generate → Review questions → Add All or select specific questions' },
                  { step: 5, title: 'Enhance and Save', content: 'Edit questions, add AI-generated images, adjust time limits, and save' }
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
                    <p className="text-site-text/70">Create a differentiated quiz from a single lesson topic in under 5 minutes.</p>
                  </div>
                </div>
                <div className="bg-yellow-400/20 px-4 py-2 rounded-lg inline-flex items-center gap-2 text-site-text text-sm font-bold">
                  <Clock size={16} />
                  Time Goal: Under 5 minutes
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text text-xs font-bold">Part 1</div>
                    <h3 className="text-xl font-bold">Generate Your Base Quiz</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-site-text">
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" size={18} /> <span>Choose a lesson topic you're teaching next week (e.g., "Cellular Respiration")</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" size={18} /> <span>Go to Kahoot! Creator → Select Kahoot! Generator</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" size={18} /> <span>Enter your topic → Set Skill Level: Intermediate</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-blue-400 shrink-0" size={18} /> <span>Generate a 10-question quiz</span></li>
                  </ul>
                </div>

                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 2</div>
                    <h3 className="text-xl font-bold">Create Differentiated Versions</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-site-text">
                    <li className="flex gap-3"><CheckCircle2 className="text-pink-400 shrink-0" size={18} /> <span>Use the same topic but change Skill Level to Beginner</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-pink-400 shrink-0" size={18} /> <span>Generate a 5-question version for struggling learners</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-pink-400 shrink-0" size={18} /> <span>Change Skill Level to Advanced</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-pink-400 shrink-0" size={18} /> <span>Generate a 15-question version for enrichment</span></li>
                  </ul>
                </div>

                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 3</div>
                    <h3 className="text-xl font-bold">Add Visual Engagement</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-site-text">
                    <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>Select 3 questions from your quiz</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>For each, click "Add Image" → Select "Generate with AI"</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>Describe a relevant image (e.g., "diagram of mitochondria")</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-green-400 shrink-0" size={18} /> <span>Add the generated images to your questions</span></li>
                  </ul>
                </div>

                <div className="bg-site-bg rounded-3xl p-8 border border-site-accent space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-600/40 flex items-center justify-center text-site-text text-xs font-bold">Part 4</div>
                    <h3 className="text-xl font-bold">Export and Share</h3>
                  </div>
                  <ul className="space-y-4 text-sm text-site-text">
                    <li className="flex gap-3"><CheckCircle2 className="text-orange-400 shrink-0" size={18} /> <span>Save your completed kahoot</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-orange-400 shrink-0" size={18} /> <span>Share the join link with colleagues</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-orange-400 shrink-0" size={18} /> <span>Create a practice link for students</span></li>
                    <li className="flex gap-3"><CheckCircle2 className="text-orange-400 shrink-0" size={18} /> <span>Post your kahoot link with #AIGameBasedLearning</span></li>
                  </ul>
                </div>
              </div>

              <div className="pt-10 space-y-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Lightbulb className="text-yellow-400" size={32} /> Pro Tips for Mastery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-pink-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <BookOpen size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">Perfect for Flipped Classrooms:</span>
                      Generate pre-lesson quizzes from textbook PDFs to check prior knowledge
                    </p>
                  </div>
                  
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-site-primary-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <Zap size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">Real-Time Current Events:</span>
                      Use Perplexity integration to create games on breaking news within minutes
                    </p>
                  </div>
                  
                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-yellow-500/50 transition-all">
                    <div className="absolute top-4 right-4 bg-yellow-400 text-[#2e0052] text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Important!</div>
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <BarChart size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">Review Before Trusting:</span>
                      Always double-check AI-generated questions for accuracy
                    </p>
                  </div>

                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-green-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <Users size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">Accessibility First:</span>
                      Use screen reader support and adjust Accessibility Settings for inclusive play
                    </p>
                  </div>

                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-indigo-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <MousePointer2 size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">Confidence Mode:</span>
                      Enable this to have students rate how sure they are, revealing misconceptions
                    </p>
                  </div>

                  <div className="bg-site-bg p-6 rounded-3xl border border-site-accent relative overflow-hidden group hover:border-rose-500/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-site-primary/40 flex items-center justify-center text-site-text mb-4">
                      <TrendingUp size={20} />
                    </div>
                    <p className="text-sm leading-relaxed text-site-text">
                      <span className="font-bold text-site-primary block mb-1">Accuracy Mode:</span>
                      Turn off speed scoring to reward thoughtful analysis over quick reactions
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Reference Table */}
              <div className="space-y-6 pt-6">
                <h2 className="text-2xl font-bold">Customization Settings Quick Reference</h2>
                <div className="bg-site-bg rounded-3xl border border-site-accent overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="bg-site-primary/40 text-site-text font-bold border-b border-site-accent/10">
                        <th className="px-8 py-4">Skill Level</th>
                        <th className="px-8 py-4">Game Length</th>
                        <th className="px-8 py-4">Format</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-400/10 text-site-text">
                      <tr>
                        <td className="px-8 py-6">Beginner / Intermediate / Advanced</td>
                        <td className="px-8 py-6">Short (5-10) / Medium (10-15) / Long (15-20)</td>
                        <td className="px-8 py-6">Quiz / Presentation / Workshop</td>
                      </tr>
                    </tbody>
                  </table>
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
              "Kahoot! AI turns your teaching materials into interactive games instantly."
            </h2>
            <p className="text-site-text font-medium">Share your differentiated quiz with #AIGameBasedLearning!</p>
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
          Next Up: Day 16 – Continue your AI education journey with more innovative tools
        </p>

      </div>
    </div>
  );
};

export default KahootDay15;
