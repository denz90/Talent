import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  BookOpen,
  MessageSquare,
  Smile,
  Search,
  PenTool,
  Lightbulb,
  Zap,
  Layers,
  Target,
  Trophy,
  ChevronRight,
  Globe,
  ClipboardList
} from 'lucide-react';

const GrokDay6 = ({ onNext }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-900 to-purple-800 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
            {/*Overlay to ensure text remains readable*/}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-purple-300" />
              Day 6 • Interactive Learning
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Grok AI Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Turn your static lessons into interactive, real-time learning journeys.
            </p>
          </div>
        </div>

        {/* What is Grok AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is Grok AI?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
Grok AI is an AI-driven video enhancement platform designed for educators. It allows teachers to take existing lesson videos (from Lovart AI or other sources) and add interactive elements, quizzes, prompts, and adaptive narration to make lessons more engaging and personalized.
            </p>

            <h3 className="font-bold text-slate-900 mb-4">Why Educators Need It:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Zap className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Transform Passive Videos into Active Lessons:</strong> Embed questions, polls, and prompts.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Save Time on Editing:</strong> AI suggests improvements, transitions, and interactive overlays.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Smile className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Track Student Engagement:</strong> Monitor who answered questions, paused, or rewatched sections.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Accessible Learning:</strong>Supports captions, translations, and audio customization for ESL learners.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white-100 rounded-2xl h-80 border border-purple-100">
            <img src="/Robot face-pana 1.png" alt="Classroom" className="w-full h-full object-cover rounded-xl shadow-lg relative z-10 opacity-100" /> 
          </div>
        </div>

        {/* Features Table */}
        <div className="rounded-2xl p-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Key Features & How to Use Them</h2>
            <p className="text-slate-500 pb-4">Turn static videos into interactive learning experiences with powerful AI tools.</p>
          </div>

          <div className="rounded-xl bg-white overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-rose-50 border-b border-slate-100">
                  <th className="px-6 py-4 font-bold text-[#bc1044] w-1/4">Feature</th>
                  <th className="px-6 py-4 font-bold text-[#bc1044] w-2/4">How to Use</th>
                  <th className="px-6 py-4 font-bold text-[#bc1044] w-1/4">Benefit for Educators</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Globe size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Interactive Quiz Overlay</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Upload video → Click "Add Quiz" → Set MCQs, T/F, or open-ended prompts</td>
                  <td className="px-6 py-5 text-sm">Assess comprehension without leaving the video.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <MessageSquare size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Polls & Reflection Prompts</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Insert discussion questions at key timestamps</td>
                  <td className="px-6 py-5 text-sm">Promote active participation during lessons.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Smile size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>AI Voiceover & Narration</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Auto-generate or record narration → Adjust tone/speed</td>
                  <td className="px-6 py-5 text-sm">Support diverse learning styles & multilingual classes.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Search size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Video Enhancement Suggestions</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Grok AI recommends visual edits, transitions, and scene pacing</td>
                  <td className="px-6 py-5 text-sm">Makes videos more engaging and professional-looking.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <PenTool size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Analytics Dashboard</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">View participation, quiz results, and rewatch trends</td>
                  <td className="px-6 py-5 text-sm">Identify struggling students instantly.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Lightbulb size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Collaboration</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Share videos with colleagues for co-editing or peer review</td>
                  <td className="px-6 py-5 text-sm">Streamlines teamwork on lesson creation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Transform your videos into interactive learning experiences in five simple steps.
            </p>
          </div>

          <div className="md:col-span-5 -mt-6">
            <div className="bg-slate-100 rounded-2xl aspect-square relative overflow-hidden flex items-center justify-center p-4">
              <img src="/Artificial intelligence-cuate 1.png" alt="Workspace" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 relative -mt-6">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-200 z-0 hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-purple-200">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Sign Up</h3>
                <p className="text-sm text-slate-600">Go to <strong className="text-purple-600">GrokAI.com</strong> → Click "Educator Sign Up" → Verify email.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-purple-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Upload Videos</h3>
                <p className="text-sm text-slate-600 mb-2">Import a video from Lovart AI, YouTube, or your device.</p>
                <p className="text-sm text-slate-600 mb-2">Review AI-suggested storyboard improvements.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-purple-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Add Interactivity</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Add Quiz" → Insert multiple-choice, T/F, or open-ended questions at key timestamps.</p>
                <p className="text-sm text-slate-600 mb-2">Add polls or reflection prompts to spark discussion.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-purple-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Customize Narration</h3>
                <p className="text-sm text-slate-600 mb-2">Record your own voice or let AI generate narration.</p>
                <p className="text-sm text-slate-600 mb-2">Adjust pace, tone, or language for ESL or differentiated instruction.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-purple-200">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Monitor & Share</h3>
                <p className="text-sm text-slate-600 mb-2">Use the Analytics tab to track student engagement and quiz performance.</p>
                <p className="text-sm text-slate-600 mb-2">Export as interactive MP4 or share via LMS link.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-purple-900 via-fuchsia-900 to-indigo-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex items-center gap-2 text-fuchsia-400 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE: TASK
          </div>

          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Enhance a Lovert AI Lesson<br className="hidden md:block" /> Video with Interactivity and<br className="hidden md:block" />analytics using Grok AI."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-fuchsia-400/50 group-hover:border-fuchsia-300 group-hover:text-fuchsia-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Upload Base Video</h4>
                <p className="text-purple-100 text-sm">Take your Day 5 Lovart AI video (e.g., "Water Cycle for Grade 5") → Upload to Grok AI. Screenshot AI enhancement suggestions.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-fuchsia-400/50 group-hover:border-fuchsia-300 group-hover:text-fuchsia-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Add Interactivity</h4>
                <p className="text-purple-100 text-sm">Embed 3–5 quiz questions at critical points in the video. Add 1–2 reflection prompts or polls to encourage participation.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-fuchsia-400/50 group-hover:border-fuchsia-300 group-hover:text-fuchsia-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Personalize Narration & Visuals</h4>
                <p className="text-purple-100 text-sm">Record voiceover for at least 1 concept explanation. Adjust visuals or transitions to highlight key ideas.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-fuchsia-400/50 group-hover:border-fuchsia-300 group-hover:text-fuchsia-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Analyze Engagement</h4>
                <p className="text-purple-100 text-sm">Share the video with 2–3 students/colleagues → Screenshot Analytics dashboard. Note insights such as "Most students paused at 2:15 – explain photosynthesis diagram again."</p>
              </div>
            </div>
            
            <div className="flex gap-4 group cursor-pointer md:col-span-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/30 border border-purple-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-fuchsia-400/50 group-hover:border-fuchsia-300 group-hover:text-fuchsia-100">5</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Share & Reflect</h4>
                <p className="text-purple-100 text-sm">Post screenshots, key observations, and 1 tip for using Grok AI with #AIInteractiveVideos.</p>
              </div>
            </div>
          </div>
        </div>

         {/* Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          <div className="bg-[#f8f5ff] border-2 border-[#eee6ff] rounded-2xl p-8 flex flex-col justify-start relative overflow-hidden shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardList size={22} className="text-[#9810FA] bg-white p-1 rounded-md border border-[#9810FA] shadow-sm box-content" />
              <h3 className="font-bold text-slate-900">Quiz Overlay Example</h3>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-start">
              <img src="/Online test-rafiki 1.png" alt="Classroom" className="w-full max-w-[150px] h-32 object-contain mb-5 mix-blend-multiply opacity-90" />
              
              <div className="bg-white rounded-xl p-5 w-full shadow-sm border border-transparent text-left">
                <h4 className="text-purple-900 font-bold text-sm mb-2">
                  Question at 2:15
                </h4>
                <p className="text-slate-700 italic text-sm leading-snug mb-3">
                  "What are the three main stages of the water cycle?"
                </p>
                <div className="space-y-1.5 text-slate-500 text-xs">
                  <p>• A) Evaporation, Condensation,<br/> Precipitation <span className="text-slate-400 text-[10px] ml-1">✓</span></p>
                  <p>• B) Freezing, Melting, Boiling</p>
                  <p>• C) Sunrise, Sunset, Midnight</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-fuchsia-50 border-2 border-fuchsia-100 rounded-2xl p-8 flex flex-col justify-start relative overflow-hidden shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Target size={22} className="text-fuchsia-600 bg-white p-1 rounded-md border border-fuchsia-400 shadow-sm box-content" />
              <h3 className="font-bold text-slate-900">Analytics Dashboard</h3>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-start">
              <img src="/Online test-rafiki 1.png" alt="Classroom" className="w-full max-w-[150px] h-32 object-contain mb-5 mix-blend-multiply opacity-90" />
              
              <div className="bg-white rounded-xl p-5 w-full shadow-sm border border-transparent text-left mt-auto">
                <h4 className="text-fuchsia-900 font-bold text-sm mb-2">
                  Measure Engagement
                </h4>
                <p className="text-slate-700 text-sm leading-snug mb-3">
                  Design a rubric to measure engagement with these new interactive components reliably.
                </p>
                <div className="space-y-1.5 text-fuchsia-800 text-xs italic font-medium">
                  <p>"Build a 5-point rubric to grade a classroom debate on..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips & Assessment */}
        <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-100 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-yellow-600 font-bold mb-6">
            <Trophy size={18} /> Pro Tips for Mastery
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>Time Quizzes Strategically:</strong> Place questions right after complex topics to maximize retention.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>Mix Formats:</strong> Alternate multiple-choice with short reflection prompts to maintain attention.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>Peer Collaboration:</strong> Share enhanced videos with colleagues for co-created lessons.</p>
            </li>
          </ul>

          <div className="bg-white/60 p-4 rounded-xl text-center border border-yellow-200">
            <p className="text-xs text-yellow-800 font-medium italic">
              "Grok AI turns static videos into interactive learning journeys. Share your student engagement insights with #AIInteractiveVideos!"
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={onNext}
          className="w-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-purple-50/0 group-hover:bg-purple-50/50 transition-colors"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-1">Day 6: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Evaluate Your Complete Understanding of Day 7</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-purple-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default GrokDay6;
