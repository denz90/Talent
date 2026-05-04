import React, { useState } from 'react';
import { 
  Sparkles, 
  Users, 
  Clock, 
  FileText, 
  Layers, 
  CheckSquare, 
  Lightbulb,
  ArrowRight,
  Trophy,
  Target,
  ChevronRight,
  Award,
  BookOpen,
  Shield,
  MessageSquare
} from 'lucide-react';

const quizData = [
  {
    id: 1,
    question: "What is the primary benefit of the MagicSchool AI 'Choice Board Generator'?",
    options: [
      "It creates ready-to-edit lesson plans instantly.",
      "It writes professional emails to parents in seconds.",
      "It empowers student agency and choice.",
      "It creates transparent grading tools in under a minute."
    ],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "According to the Getting Started Guide, what should you click to add an extension activity for Gifted Students?",
    options: [
      "Generate Base Lesson",
      "Adapt for diversity",
      "Share Library",
      "IEP Suggestion Tool"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "How much time does the platform claim it can save teachers on a weekly basis?",
    options: [
      "5+ hours",
      "10+ hours",
      "15+ hours",
      "20+ hours"
    ],
    correctAnswer: 1
  }
];

const MagicSchoolDay1 = ({ onNext }) => {
  const [isWhyOpen, setIsWhyOpen] = useState(false);

  // NEW STATE VARIABLES
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  // NEW HANDLER FUNCTION
  const handleSelectAnswer = (questionId, optionIndex) => {
    if (!isSubmitted) {
      setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
    }
  };

  const handleSubmitQuiz = () => {
    setIsSubmitted(true);
    const score = quizData.reduce((acc, q) => {
      return acc + (answers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);

    if (score === quizData.length) {
      setHasPassed(true);
      // delay 1s so they can see their success before firing the unlock
      setTimeout(() => {
        onNext();
      }, 1500);
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-800 text-white p-12 shadow-xl">
          {/*Background Image*/}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/Gemini_Generated_Image_q76fulq76fulq76f 1.svg')" }}
          ></div>
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-300" />
              Day 1 • Teacher Tools Module
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              MagicSchool <br /> AI Challenge
            </h1>
            <p className="text-lg text-white/80 max-w-xl font-medium">
              Revolutionize Lesson Planning with AI-Powered Pedagogy
            </p>
          </div>
        </div>

        {/* What is MagicSchool AI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">What is MagicSchool AI?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              MagicSchool AI is an advanced AI platform designed specifically for educators. It automates lesson planning, generates differentiated instructional materials, and creates assessments aligned to standards—all while saving teachers <strong><span className="font-bold text-indigo-700">10+ hours weekly</span></strong>.
            </p>
            <p>
              Click the button below to learn more about why educators need MagicSchool AI.
            </p>
            <button 
              onClick={() => setIsWhyOpen(!isWhyOpen)}
              className="inline-flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 border border-indigo-100 group"
            >
              Why Educators Need It
              <ChevronRight size={18} className={`transition-transform duration-300 ${isWhyOpen ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
            </button>

            <div className={`mt-6 transition-all duration-500 ease-in-out overflow-hidden ${isWhyOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className="space-y-4 pb-2">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Personalized Learning</strong>
                    <span className="text-slate-600 text-sm">Generates leveled content for diverse student needs.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Time-Saver</strong>
                    <span className="text-slate-600 text-sm">Cuts lesson planning time by 75% with targeted AI workflows.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Standards-Aligned</strong>
                    <span className="text-slate-600 text-sm">Supports CCSS, NGSS, and TEKS with 1-click adaptations.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Layers className="text-emerald-600" size={18} />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Multimodal Outputs</strong>
                    <span className="text-slate-600 text-sm">Creates worksheets, slides, rubrics, and exit tickets.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className=" flex items-center justify-center p-8 overflow-hidden relative">
             <img src="/Magic trick-amico 1.svg" alt="Educator Working"/>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="space-y-10 -mt-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Key Features & How to Use Them</h2>
            <p className="text-slate-600 text-lg">Discover the tools that will transform your classroom workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lesson Plan Generator */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 underline decoration-indigo-500/30 underline-offset-8">Lesson Plan Generator</h3>
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Select grade/subject → Input topic → Choose standards → Generate draft.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-indigo-600 font-medium text-sm">Instantly creates ready-to-edit lesson plans.</p>
                </div>
              </div>
            </div>

            {/* Rubric Builder */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 underline decoration-indigo-500/30 underline-offset-8">Rubric Builder</h3>
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Choose assessment type → Customize criteria → Download.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-indigo-600 font-medium text-sm">Creates transparent grading tools in &lt;1 minute.</p>
                </div>
              </div>
            </div>

            {/* IEP Suggestion Tool */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 underline decoration-indigo-500/30 underline-offset-8">IEP Suggestion Tool</h3>
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Input student strengths/needs → Generate draft goals.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-indigo-600 font-medium text-sm">Supports specialized instruction planning.</p>
                </div>
              </div>
            </div>

            {/* Choice Board Generator */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 underline decoration-indigo-500/30 underline-offset-8">Choice Board Generator</h3>
              
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Input topic → Select format → Generate activity grid.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-indigo-600 font-medium text-sm">Empowers student agency and choice.</p>
                </div>
              </div>
            </div>

            {/* Differentiation Tool */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 mx-auto">
                <CheckSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Differentiation Tool</h3>
              <div className="space-y-6 text-left">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Paste text → Select grade levels → Generate versions.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-indigo-600 font-medium text-sm">Makes complex texts accessible to all.</p>
                </div>
              </div>
            </div>

            {/* Email Responder */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 mx-auto">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Email Responder</h3>
              <div className="space-y-6 text-left">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">HOW TO USE</span>
                  <p className="text-slate-600 leading-relaxed text-sm">Paste parent email → Set tone → Generate response.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">BENEFIT</span>
                  <p className="text-indigo-600 font-medium text-sm">Professional communication in seconds.</p>
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
              Follow these simple steps to generate your first lesson and differentiate content for your class.
            </p>
            <div className=" relative overflow-hidden">
               <img src="/Sign up-amico 1.png" alt="Workspace" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="md:col-span-7 space-y-8 ">
            
            {/* Step 1 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-indigo-200">1</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Sign Up</h3>
                <p className="text-sm text-slate-600">Go to MagicSchool.ai → Click <strong className="text-indigo-600">"Sign Free"</strong> (no credit card required).</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-indigo-200">2</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Create Your First Lesson</h3>
                <p className="text-sm text-slate-600 mb-2">Click "Lesson Plan Generator".</p>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 space-y-1">
                  <p><strong>Grade Level:</strong> e.g., 5th grade</p>
                  <p><strong>Subject:</strong> e.g., Science</p>
                  <p><strong>Topic:</strong> e.g., "Water Cycle"</p>
                  <p><strong>Standard:</strong> e.g., NGSS-5-ESS2-1 → Click "Generate"</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-indigo-200">3</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Differentiate Content</h3>
                <p className="text-sm text-slate-600 mb-2">Open the generated lesson → Click "Adapt for diversity" → Select:</p>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-sm text-slate-600 space-y-1">
                  <p><strong>English Learners:</strong> "Add visual vocabulary words."</p>
                  <p><strong>Gifted Students:</strong> "Extension activity" → Click "Apply changes".</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-4 relative z-10">
              <div className="w-8 h-8 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-indigo-200">4</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Export & Share</h3>
                <p className="text-sm text-slate-600">Click "Export" → Choose format (Google Docs, PDF) → Share with your PLC via link.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          
          <div className="flex items-center gap-2 text-indigo-300 mb-4 text-xs font-bold uppercase tracking-widest relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE: TASK
          </div>
          
          <h2 className="text-3xl font-bold mb-10 leading-tight relative z-10">
            "Design a differentiated <br className="hidden md:block"/> science lesson with AI-<br className="hidden md:block"/>generated supports."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-500/30 group-hover:border-green-400/30 group-hover:text-green-300">1</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Generate Base Lesson</h4>
                <p className="text-indigo-200 text-sm">Use the "Lesson Plan Generator" to outline a 45-minute lesson covering Next Generation Science Standards (NGSS) objectives and agenda.</p>
              </div>
            </div>
            
            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-500/30 group-hover:border-green-400/30 group-hover:text-green-300">2</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Create an Exit Ticket</h4>
                <p className="text-indigo-200 text-sm">Use the "Quiz Generator" to make a 3-question formative assessment.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-500/30 group-hover:border-green-400/30 group-hover:text-green-300">3</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Add Differentiation</h4>
                <p className="text-indigo-200 text-sm">Use the "Differentiation Tool" to create a simplified reading passage for struggling readers and an extension prompt for advanced learners.</p>
              </div>
            </div>

            <div className="flex gap-4 group cursor-pointer">
              <div className="w-6 h-6 rounded-full bg-indigo-500/30 border border-indigo-400/30 flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors group-hover:bg-green-500/30 group-hover:border-green-400/30 group-hover:text-green-300">4</div>
              <div className="group-hover:opacity-90 transition-opacity">
                <h4 className="font-bold mb-1">Share Your Output</h4>
                <p className="text-indigo-200 text-sm mb-3">Export the final doc to a PDF and submit it link.</p>
                <span className="bg-indigo-950 px-3 py-1 rounded text-xs font-bold text-indigo-300">#AIEdChallenge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips & Assessment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
           <div className="flex items-center justify-center">
              <img src="/Notebook-bro-2 1.svg" alt="Notebook"/>
           </div>

           <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
             <div className="flex items-center gap-2 text-amber-600 font-bold mb-6">
               <Trophy size={18} /> Pro Tips for Mastery
             </div>
             
             <ul className="space-y-4 mb-8">
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                 <p className="text-sm text-slate-700"><strong>Prompt Engineering:</strong> Add details like <em>"include hands-on activity"</em> or <em>"use real-world examples"</em> for better outputs.</p>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                 <p className="text-sm text-slate-700"><strong>Save Templates:</strong> Save generated and proven templates for future units.</p>
               </li>
               <li className="flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div>
                 <p className="text-sm text-slate-700"><strong>Collaboration:</strong> Use the "Share Library" to trade materials with department peers.</p>
               </li>
             </ul>

             <div className="bg-white/60 p-4 rounded-xl text-center border border-amber-200">
               <p className="text-xs text-amber-800 font-medium italic">
                 "Magic School AI turns planning delays into pedagogical power. Claim your lesson weekends back using #AISchoolManager"
               </p>
             </div>
           </div>
        </div>

{/* Knowledge Check Quiz */}
        <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Day 1: TEST YOUR KNOWLEDGE</h3>
            <p className="text-slate-500">Pass this quick check to unlock the next module.</p>
          </div>

          <div className="space-y-8">
            {quizData.map((q, index) => (
              <div key={q.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <p className="font-bold text-slate-800 mb-4">
                  {index + 1}. {q.question}
                </p>
                <div className="space-y-3">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = answers[q.id] === optIdx;
                    const isCorrect = q.correctAnswer === optIdx;
                    
                    // Determine styling based on submission state
                    let buttonClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 ";
                    
                    if (!isSubmitted) {
                      buttonClass += isSelected 
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 font-medium" 
                        : "bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-600";
                    } else {
                      if (isCorrect) {
                        buttonClass += "bg-emerald-50 border-emerald-500 text-emerald-700 font-bold";
                      } else if (isSelected && !isCorrect) {
                        buttonClass += "bg-red-50 border-red-500 text-red-700 line-through opacity-70";
                      } else {
                        buttonClass += "bg-white border-slate-200 text-slate-400 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isSubmitted}
                        onClick={() => handleSelectAnswer(q.id, optIdx)}
                        className={buttonClass}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center">
            {!isSubmitted ? (
              <button
                onClick={handleSubmitQuiz}
                disabled={Object.keys(answers).length !== quizData.length}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold py-4 px-10 rounded-full transition-colors w-full md:w-auto shadow-md"
              >
                Submit Answers
              </button>
            ) : hasPassed ? (
              <div className="flex flex-col items-center animate-bounce mt-4">
                <div className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full font-bold flex items-center gap-2 mb-4">
                  <CheckSquare size={20} /> Module Passed! Unlocking next day...
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center w-full">
                <div className="bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold mb-4 border border-red-100 w-full text-center">
                  You didn't quite get them all. Review the material and try again.
                </div>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setAnswers({});
                  }}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Retry Quiz
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MagicSchoolDay1;


