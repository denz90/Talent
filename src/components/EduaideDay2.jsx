import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  FileDown,
  Puzzle,
  Award,
  MessageSquare,
  Globe,
  Target,
  Trophy,
  ChevronRight
} from 'lucide-react';

const EduaideDay2 = ({ onNext }) => {
  const [isWhyOpen, setIsWhyOpen] = useState(false);

  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          {/* Background Image Setup */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/CourseContentDay2.png')" }}
          ></div>
          {/* Overlay to ensure text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/90 via-emerald-900/80 to-teal-900/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-emerald-300" />
              Day 2 • Teacher Tools Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Eduaide.AI <br /> Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              AI-Powered Lesson Planning & Resource Generation
            </p>
          </div>
        </div>


        {/* What is Eduaide.AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is Eduaide.AI?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Eduaide.AI is a versatile AI platform that helps educators create lesson plans, assessments, assignments, and interactive activities. It provides an all-in-one workspace that reduces administrative burden while maintaining pedagogical quality.
            </p>

            <button 
              onClick={() => setIsWhyOpen(!isWhyOpen)}
              className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 border border-emerald-100 group"
            >
              Why Educators Need It
              <ChevronRight size={18} className={`transition-transform duration-300 ${isWhyOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>

            <div className={`mt-6 transition-all duration-500 ease-in-out overflow-hidden ${isWhyOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="space-y-4 pb-2">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Massive Time-Saver</strong>
                    <span className="text-slate-600 text-sm">Saves 10+ hours a week on lesson planning and resource creation.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Differentiation at Scale</strong>
                    <span className="text-slate-600 text-sm">Generates differentiated materials for diverse learners instantly.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Extensive Library</strong>
                    <span className="text-slate-600 text-sm">Offers 100+ templates for rubrics, letters, and curriculum materials.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Seamless Workflow</strong>
                    <span className="text-slate-600 text-sm">Easy to use and integrates directly into your existing classroom routines.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl h-80 border border-slate-100 flex items-center justify-center p-8 overflow-hidden relative">
            <img src="/Container.png" alt="Classroom" className="w-full h-full object-cover rounded-xl shadow-lg relative z-10 opacity-100" />
          </div>
        </div>
        
        {/* Key Features Section */}
        <div className="space-y-12 -mt-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Key Features & How to Use Them</h2>
            <p className="text-slate-600 text-lg">Explore the core tools for rapid resource generation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lesson Plan Generator */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <FileDown size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 underline decoration-emerald-500/30 underline-offset-8">Lesson Plan Generator</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Input topic/standard → Select grade level → Generate draft.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-emerald-600 font-medium text-sm">Creates standards-aligned plans in &lt;1 minute.</p>
                </div>
              </div>
            </div>

            {/* Worksheet Builder */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Puzzle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Worksheet Builder</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Choose template → Customize content → Download PDF.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-emerald-600 font-medium text-sm">Instantly printable student activities.</p>
                </div>
              </div>
            </div>

            {/* Assessment Creator */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Assessment Creator</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Set question types → AI generates with answer key.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-emerald-600 font-medium text-sm">Auto-gradable quizzes with Bloom's taxonomy.</p>
                </div>
              </div>
            </div>

            {/* Feedback Bot */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Feedback Bot</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Paste student work → Get rubric-aligned suggestions.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-emerald-600 font-medium text-sm">Provides personalized, actionable feedback.</p>
                </div>
              </div>
            </div>

            {/* Translation Tool */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Translation Tool</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Upload resource → Select target language → Convert.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-emerald-600 font-medium text-sm">Supports ESL/ELL learners effortlessly.</p>
                </div>
              </div>
            </div>

            {/* Curricular Alignment */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Curricular Alignment</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Map existing units to new standards or state requirements.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-emerald-600 font-medium text-sm">Ensures full coverage of required learning goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Getting Started Guide</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Follow these steps to generate your first lesson plan, worksheet, and assessment.
            </p>
            <div className="bg-slate-100 rounded-2xl aspect-[4/3] relative overflow-hidden">
              <img src="/Sign up-rafiki 1.png" alt="Workspace" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 relative">
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-200 z-0 hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-emerald-200">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Sign Up</h3>
                <p className="text-sm text-slate-600">Go to Eduaide.ai → Click <strong className="text-emerald-600">"Get Started Free"</strong>.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-emerald-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Generate Your First Lesson Plan</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Lesson Planner".</p>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 space-y-1">
                  <p><strong>Topic:</strong> e.g., "Photosynthesis"</p>
                  <p><strong>Grade Level:</strong> e.g., 7th Grade</p>
                  <p><strong>Standards:</strong> e.g., NGSS MS-LS1-6</p>
                  <p>Click "Generate" → Edit using the "Enhance" tools.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-emerald-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Generate a Worksheet</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Resource Generator" → Choose "Worksheet":</p>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 space-y-1">
                  <p>Add text/topic (e.g., "Photosynthesis") → Click "Generate" → Export/Download.</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-emerald-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Build an Assessment</h3>
                <p className="text-sm text-slate-600">Click "Assessment Generator" → Set Question Types, Difficulty → Generate & Export.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex items-center gap-2 text-emerald-300 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE: TASK
          </div>

          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Design a differentiated <br className="hidden md:block" /> lesson with 3 supporting <br className="hidden md:block" />resources."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-400/50 group-hover:border-green-300 group-hover:text-green-100">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Generate a Base Lesson Plan</h4>
                <p className="text-emerald-100 text-sm">Use the "Lesson Plan Generator" to outline a 45-min lesson (e.g., Science, American Revolution).</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-400/50 group-hover:border-green-300 group-hover:text-green-100">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Add an Exit Ticket</h4>
                <p className="text-emerald-100 text-sm">Use the "Assessment Generator" to create a short 3-question formative assessment.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-400/50 group-hover:border-green-300 group-hover:text-green-100">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Create Tiered Worksheets</h4>
                <p className="text-emerald-100 text-sm">Use the "Differentiate Maker" or "Task Generator" to create worksheets for varying levels (e.g., below, on, above level).</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-emerald-500/30 border border-emerald-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-400/50 group-hover:border-green-300 group-hover:text-green-100">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Bonus</h4>
                <p className="text-emerald-100 text-sm mb-3">Translate one resource into another language using the Translation tool.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips & Assessment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="flex items-center justify-center bg-emerald-50 rounded-2xl p-8">
            <img src="/Notebook-bro 1.png" alt="Notebook" className="w-full max-w-[250px] mix-blend-multiply opacity-80" />
          </div>

          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
            <div className="flex items-center gap-2 text-amber-600 font-bold mb-6">
              <Trophy size={18} /> Pro Tips for Mastery
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                <p className="text-sm text-slate-700"><strong>Feedback Bot:</strong> Feed the AI actual student writing to generate actionable comments.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                <p className="text-sm text-slate-700"><strong>Save Templates:</strong> Save generated templates to your workspace for reuse.</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                <p className="text-sm text-slate-700"><strong>Knowledge Base:</strong> Use Eduaide's Help Library if you ever get stuck.</p>
              </li>
            </ul>

            <div className="bg-white/60 p-4 rounded-xl text-center border border-amber-200">
              <p className="text-xs text-amber-800 font-medium italic">
                "Eduaide.AI turns chaotic prep into streamlined simplicity. Scale your time using #AIResourcer"
              </p>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button 
          onClick={onNext}
          className="w-full bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-emerald-50/0 group-hover:bg-emerald-50/50 transition-colors"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-1">Day 2: TEST YOUR KNOWLEDGE</h3>
            <p className="text-sm text-slate-500">Evaluate Your Complete Understanding of Day 2</p>
            <div className="mt-4 w-10 h-10 rounded-full bg-slate-50 group-hover:bg-white text-slate-400 group-hover:text-emerald-600 border border-slate-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={20} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default EduaideDay2;
