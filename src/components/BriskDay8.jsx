import React from 'react';
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
  ChevronRight,
  GraduationCap
} from 'lucide-react';

const BriskDay8 = ({ onNext }) => {
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
              Day 8 • Video Content Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Brisk AI Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Create Engaging Video Lessons & Personalized Content with AI
            </p>
          </div>
        </div>

        {/* What is Google Gemini */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is Brisk Teaching?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
             Brisk Teaching is a free AI-powered Chrome extension designed for educators to streamline grading, generate personalized feedback, and create differentiated lesson materials in seconds. It integrates directly with Google Docs, Classroom, and Canvas.
            </p>

            <h3 className="font-bold text-slate-900 mb-4">Why Educators Need It:</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <img src="Icon copy 5.png" className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Saves 5+ hours/week:</strong> on grading and feedback</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <img src="Icon-2 copy.png" className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Generates leveled resources:</strong> (simplify or enrich text)</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <img src="Icon-3 copy.png" className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Detects AI-written student work:</strong> with 92% accuracy</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <img src="Icon-4.png" className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <div>
                  <span className="text-slate-600"><strong>Creates standards-aligned quizzes:</strong> in 1 click</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl h-100 border border-white flex items-center justify-center p-8 overflow-hidden relative">
            <img src="/Teacher student-rafiki-2 1.png" alt="workspace" className="w-full h-full object-cover"/>
          </div>
        </div>

        {/* Key Features */}
        <div className="rounded-2xl border border-slate-200 border-l-4 border-l-teal-300 bg-white overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gradient-to-r from-[#CBFBF1] to-[#F0FDFA] border-b border-slate-100">
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Feature</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-2/4">How to Use</th>
                <th className="px-6 py-4 font-bold text-slate-900 w-1/4">Benefit for Teachers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <img src="Icon-2 copy 2.png" size={18} className="text-blue-500 flex-shrink-0" />
                    <span>AI Feedback Generator</span>
                  </div>
                </td>
                <td className="px-6 py-5">Highlight student work → Click "Generate Feedback" → Choose tone (Encouraging/Constructive)</td>
                <td className="px-6 py-5 text-sm">Gives actionable feedback in 10 seconds</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <img src="Icon copy 6.png" size={18} className="text-blue-500 flex-shrink-0" />
                    <span>Differentiation Tool</span>
                  </div>
                </td>
                <td className="px-6 py-5">Paste text → Click "Simplify" or "Enrich" → Adjust reading grade level</td>
                <td className="px-6 py-5 text-sm">Creates inclusive materials for diverse learners</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <img src="Icon-4.png" size={18} className="text-blue-500 flex-shrink-0" />
                    <span>AI Quiz Builder</span>
                  </div>
                </td>
                <td className="px-6 py-5">Open any article → Click "Generate Quiz" → Select question types (MCQ/Short Answer)</td>
                <td className="px-6 py-5 text-sm">Auto-makes standards-aligned assessments</td>
              </tr>
              <tr>
                <td className="px-6 py-5 font-bold text-slate-900">
                  <div className="flex items-center gap-2">
                    <img src="Icon-3 copy.png" size={18} className="text-blue-500 flex-shrink-0" />
                    <span>AI Detection</span>
                  </div>
                </td>
                <td className="px-6 py-5">Upload doc → Click "Check for AI" → Get % likelihood of AI generation</td>
                <td className="px-6 py-5 text-sm">Maintains academic integrity effortlessly</td>
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
              <img src="/Teacher student-cuate.svg" alt="Workspace" className="w-full h-full object-contain mix-blend-multiply opacity-90" />
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 relative -mt-6">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-200 z-0 hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Install</h3>
                <p className="text-sm text-slate-600">Go to the <a href="https://chrome.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">Chrome Web Store</a>. Search "Brisk Teaching" → Click <span className="font-bold">"Add to Chrome"</span></p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Integrate with Google Docs</h3>
                <p className="text-sm text-slate-600 mb-2">Open a student's Google Doc</p>
                <p className="text-sm text-slate-600 mb-2">Click the <span className="font-bold">Brisk icon</span> (top-right) → Sign in with Google</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Generate Feedback</h3>
                <p className="text-sm text-slate-600 mb-2">Highlight a paragraph of student writing</p>
                <p className="text-sm text-slate-600 mb-2">Click <span className="font-bold">"Feedback"</span> → Choose "Constructive" or "Praise"</p>
                <p className="text-sm text-slate-600 mb-2">Edit the AI-generated comment → Click <span className="font-bold">"Insert"</span></p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Create a Quiz</h3>
                <p className="text-sm text-slate-600 mb-2">Open a news article (e.g., NASA.gov)</p>
                <p className="text-sm text-slate-600 mb-2">Click Brisk icon → <span className="font-bold">"Generate Quiz"</span></p>
                <p className="text-sm text-slate-600 mb-2">Select 3 multiple-choice + 2 short-answer questions → Export to Google Forms</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-blue-200">5</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Detect AI Writing</h3>
                <p className="text-sm text-slate-600 mb-2">Upload a student essay (PDF/Doc)</p>
                <p className="text-sm text-slate-600 mb-2">Click <span className="font-bold">"AI Detection"</span> → Review highlighted potential AI sections</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-950 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex items-center gap-2 text-emerald-400 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE TASK
          </div>

          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Use Brisk to grade 3 <br className="hidden md:block" />student essays and create<br className="hidden md:block" /> a leveled reading<br className="hidden md:block" /> assignment."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10 mb-8">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Give AI Feedback</h4>
                <p className="text-emerald-100 text-sm">Upload an essay to Google Docs → Highlight 2 sections → Generate "Constructive" feedback. Screenshot your edited feedback comments.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Detect AI Usage</h4>
                <p className="text-emerald-100 text-sm">Run Brisk's AI detector on a sample essay → Note the % likelihood. Share how you'd address a student with 80%+ AI detection.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Differentiate Content</h4>
                <p className="text-emerald-100 text-sm">Paste a science article into Brisk → Click "Simplify" to Grade 6 level. Compare original vs. simplified versions in a 2-column table.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-emerald-400/50 group-hover:border-emerald-300 group-hover:text-emerald-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Build a Quiz</h4>
                <p className="text-emerald-100 text-sm">Generate a 5-question quiz from the simplified article → Export to Google Classroom. Share the quiz link with #BriskChallenge.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><GraduationCap size={20} /></div>
              <h3 className="font-bold text-slate-900">Diifination in Action</h3>
            </div>
            <img src="/Image (Differentiated classroom materials).svg" alt="workspace" className="w-full h-full object-cover"/>
            <div className="bg-white rounded-lg p-3 border border-sky-100 text-xs text-sky-800">
            <p className="text-blue-800 text-sm font-bold">Opening (0:00-0:15)</p>
            <p className="text-sm text-slate-800 leading-relaxed max-w-xs mb-4 font-inter italic">
              "Today we're exploring photosynthesis - the amazing process plants use to make their own food!"
            </p>
              💡 Visual: Animated plant with sunlight rays
          </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 flex flex-col justify-center shadow-sm relative overflow-hidden">
             <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Layers size={20} /></div>
              <h3 className="font-bold text-slate-900">Interactive Elements</h3>
            </div>
            <img src="/Image (AI technology in education).svg" alt="workspace" className="w-full h-full object-cover"/>
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
            <p className="text-sm text-slate-500">Evaluate Your Complete Understanding of Day 6</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-blue-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default BriskDay8;
