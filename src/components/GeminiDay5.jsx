import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  BookOpen,
  FileText,
  Layers,
  MessageSquare,
  Globe,
  Settings,
  Target,
  Trophy,
  ChevronRight
} from 'lucide-react';

const GeminiDay5 = ({ onNext }) => {
  const [isWhyOpen, setIsWhyOpen] = useState(false);
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-800 to-indigo-700 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-blue-300" />
              Day 5 • Video Content Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Google Gemini Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Create Engaging Video Lessons & Personalized Content with AI
            </p>
          </div>
        </div>

        {/* What is Google Gemini */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is Google Gemini?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Google Gemini is an AI-powered assistant that helps educators research, generate, and structure lesson content quickly. It can turn text prompts into scripts, suggest visuals, and even provide ideas for video lessons or interactive activities, making it ideal for engaging classrooms.
            </p>

            <button 
              onClick={() => setIsWhyOpen(!isWhyOpen)}
              className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 border border-blue-100 group"
            >
              Why Educators Need It
              <ChevronRight size={18} className={`transition-transform duration-300 ${isWhyOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>

            <div className={`mt-6 transition-all duration-500 ease-in-out overflow-hidden ${isWhyOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="space-y-4 pb-2">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Engaging Lessons Fast</strong>
                    <span className="text-slate-600 text-sm">Turn concepts into scripts, slides, or storyboards for interactive videos.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Significant Time Savings</strong>
                    <span className="text-slate-600 text-sm">Automates lesson ideation, discussion prompts, and complex content research.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Accessible Learning</strong>
                    <span className="text-slate-600 text-sm">Supports multilingual explanations and creates student-friendly summaries.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Critical Thinking</strong>
                    <span className="text-slate-600 text-sm">Generates diverse discussion questions and interactive exercises.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl h-80 border border-blue-100 flex items-center justify-center p-8 overflow-hidden relative">
            <div className="w-48 h-48 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 rounded-full blur-xl opacity-60 absolute"></div>
            <Sparkles size={120} strokeWidth={1} className="text-blue-700 relative z-10 animate-pulse" />
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-300 bg-white overflow-hidden shadow-sm -mt-8">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-blue-50 border-b border-slate-100">
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Feature</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-2/4">How to Use</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Benefit for Teachers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <MessageSquare size={16} className="text-blue-500 flex-shrink-0" />
                    <span>Multimodal Interaction</span>
                  </div>
                </td>
                <td className="px-6 py-5">Upload images, text, or code → Ask Gemini to analyze or explain</td>
                <td className="px-6 py-5 text-sm">Analyze student work or complex visuals instantly</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-blue-500 flex-shrink-0" />
                    <span>Lesson Ideation</span>
                  </div>
                </td>
                <td className="px-6 py-5">Prompt: "Generate 5 creative ways to teach [Topic]"</td>
                <td className="px-6 py-5 text-sm">Fresh, engaging ideas for any subject area</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-blue-500 flex-shrink-0" />
                    <span>Content Structuring</span>
                  </div>
                </td>
                <td className="px-6 py-5">Input raw notes → "Turn this into a structured lesson plan"</td>
                <td className="px-6 py-5 text-sm">Saves hours on manual document organization</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-blue-500 flex-shrink-0" />
                    <span>Real-time Translation</span>
                  </div>
                </td>
                <td className="px-6 py-5">Paste text → "Translate this into [Language] for parents"</td>
                <td className="px-6 py-5 text-sm">Seamless communication with multilingual families</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Target size={16} className="text-blue-500 flex-shrink-0" />
                    <span>Quiz Generation</span>
                  </div>
                </td>
                <td className="px-6 py-5">Input content → "Create a 10-question MCQ quiz on this"</td>
                <td className="px-6 py-5 text-sm">Immediate assessment creation for any lesson</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <Settings size={16} className="text-blue-500 flex-shrink-0" />
                    <span>Adaptive Feedback</span>
                  </div>
                </td>
                <td className="px-6 py-5">Input student answer → "Provide constructive feedback"</td>
                <td className="px-6 py-5 text-sm">Personalized support for every student at scale</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Create your first interactive lesson using Gemini's structured approach.
            </p>
          </div>

          <div className="md:col-span-5 -mt-6">
            <div className="bg-slate-50 rounded-2xl aspect-square relative overflow-hidden flex items-center justify-center p-4">
              <img src="/Completed steps-pana 1.png" alt="Workspace" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 relative -mt-6">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-200 z-0 hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Access Gemini</h3>
                <p className="text-sm text-slate-600">Go to <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">gemini.google.com</a> → Sign in with your Google Workspace for Education account.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Research Lesson Content</h3>
                <p className="text-sm text-slate-600 mb-2">Type a query: <em><span className="text-blue-600">"Explain the water cycle to 4th graders."</span></em></p>
                <p className="text-sm text-slate-600 mb-2">Review the simplified explanation and key points.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Generate Video Script</h3>
                <p className="text-sm text-slate-600 mb-2">Prompt Gemini: <em><span className="text-blue-600">"Create a 3-minute video script with narration for the water cycle."</span></em> Screenshot or copy the generated script for your video tool (e.g., Lovart AI, Lumen5).</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Suggest Visuals & Interactive Elements</h3>
                <p className="text-sm text-slate-600 mb-2">Ask: <em><span className="text-blue-600">"Suggest images or animations for each step."</span></em></p>
                <p className="text-sm text-slate-600 mb-2">Note discussion questions or quiz ideas for the video.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Share & Collaborate</h3>
                <p className="text-sm text-slate-600 mb-2">Use the "Share" button to send the script or prompts to colleagues or LMS.</p>
                <p className="text-sm text-slate-600 mb-2">Optionally, combine Gemini output with a video editor to create a final lesson video.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-sky-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex items-center gap-2 text-sky-400 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE: TASK
          </div>

          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Create a 2-3 minute video-<br className="hidden md:block" />ready lesson script using<br className="hidden md:block" /> Google Gemini."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-sky-400/50 group-hover:border-sky-300 group-hover:text-sky-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Prepare Lesson Topic</h4>
                <p className="text-blue-100 text-sm">Choose a subject (e.g., "Photosynthesis for Grade 5"). Ask Gemini to create a script suitable for a short video lesson.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-sky-400/50 group-hover:border-sky-300 group-hover:text-sky-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Add Visual & Interactive Prompts</h4>
                <p className="text-blue-100 text-sm">Ask Gemini: "Suggest 3 visuals and 2 quiz questions for the video." Screenshot the script and suggested media ideas.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-sky-400/50 group-hover:border-sky-300 group-hover:text-sky-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Review & Edit Script</h4>
                <p className="text-blue-100 text-sm">Refine narration style, examples, and timing for clarity. Ensure visuals match content and are age-appropriate.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-blue-500/30 border border-blue-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-sky-400/50 group-hover:border-sky-300 group-hover:text-sky-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Share & Reflect</h4>
                <p className="text-blue-100 text-sm">Post screenshots or snippets of the final script with #AIVideoLesson. Note 1 tip: e.g., "Adding visual prompts helped students understand photosynthesis faster."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-sky-50 border border-sky-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><FileText size={20} /></div>
              <h3 className="font-bold text-slate-900">Sample Video Script</h3>
            </div>
            <img src="/Video tutorial-bro 1.png" alt="workspace" className="w-full h-full object-cover"/>
            <div className="bg-white rounded-lg p-3 border border-sky-100 text-xs text-sky-800">
            <p className="text-blue-800 text-sm font-bold">Opening (0:00-0:15)</p>
            <p className="text-sm text-slate-800 leading-relaxed max-w-xs mb-4 font-inter italic">
              "Today we're exploring photosynthesis - the amazing process plants use to make their own food!"
            </p>
              💡 Visual: Animated plant with sunlight rays
          </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
             <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Layers size={20} /></div>
              <h3 className="font-bold text-slate-900">Interactive Elements</h3>
            </div>
            <img src="/Image (Script writing).png" alt="workspace" className="w-full h-full object-cover"/>
            <p className="text-sm text-slate-600 leading-relaxed max-w-xs mb-4">
              Using markdown allows for easy formatting and pacing for engaging video lessons.
            </p>
             <div className="bg-white rounded-lg p-3 border border-blue-100 text-xs text-blue-800 font-medium italic">
              Use bold text for emphasis and section headers for clear organization.
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
              <p className="text-sm text-slate-700"><strong>🎯 Prompt Specifically:</strong> Include grade, topic, and format for best results.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>🎬 Combine With Video Tools:</strong> Use scripts in Lovart AI or Lumen5 for fully animated lessons.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
              <p className="text-sm text-slate-700"><strong>👥 Student Engagement: </strong>nclude discussion questions or polls directly in scripts for interactivity.</p>
            </li>
          </ul>

          <div className="bg-white p-4 rounded-xl text-center border border-yellow-200">
            <p className="text-xs text-yellow-800 font-medium italic">
              "Google Gemini turns lesson planning into a creative, fast, and engaging process. Share your scripts with #AIVideoLesson!"
            </p>
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={onNext}
          className="w-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 transition-colors"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">Day 5: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Evaluate Your Complete Understanding of Day 5</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-blue-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default GeminiDay5;
