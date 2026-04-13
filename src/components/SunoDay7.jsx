import React from 'react';
import {
  Sparkles,
  Play,
  Music,
  Mic2,
  ListMusic,
  Headphones,
  Target,
  ChevronRight,
  Trophy,
  Volume2,
  Settings
} from 'lucide-react';

const SunoDay7 = ({ onNext }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">

        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#800020] via-[#bc1044] to-[#e6195e] text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          {/* Top Layer Graphic - Headphone concept */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-30 pointer-events-none hidden md:block">
             <Headphones size={200} className="text-white rotate-12" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-rose-200" />
              Day 7 • Creative Arts & Multimedia
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
              Suno Challenge
            </h1>
            <p className="text-lg text-white/90 max-w-xl font-medium">
              Compose original lesson soundtracks and educational songs in seconds.
            </p>
          </div>
        </div>

        {/* What is Suno? */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">What is Suno?</h2>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg">
              Suno is an AI-powered music generation tool that creates original, royalty-free music and songs for your classroom. Whether you need a catchy rhyme to help students memorize facts or a lo-fi background track for study sessions, Suno turns your prompts into professional-grade audio.
            </p>

            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-xl">
               Why Educators Need It:
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Play size={12} className="text-rose-600 fill-rose-600" />
                </div>
                <p className="text-slate-600 leading-snug">
                   <strong>Engages Students:</strong> Music enhances retention and makes complex lessons more dynamic.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Play size={12} className="text-rose-600 fill-rose-600" />
                </div>
                <p className="text-slate-600 leading-snug">
                   <strong>Saves Time & Money:</strong> No more searching for expensive royalty-free tracks for your presentations.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Play size={12} className="text-rose-600 fill-rose-600" />
                </div>
                <p className="text-slate-600 leading-snug">
                   <strong>Unlimited Customization:</strong> Tailor music exactly to your lesson mood, from upbeat to calming.
                </p>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Play size={12} className="text-rose-600 fill-rose-600" />
                </div>
                <p className="text-slate-600 leading-snug">
                   <strong>Podcast Support:</strong> Effortlessly create transitions and intro music for student podcast projects.
                </p>
              </li>
            </ul>
          </div>

          <div className="relative h-[400px] flex items-center justify-center">
             <div className="absolute inset-x-0 bottom-0 top-12 bg-rose-50 rounded-3xl -z-10 rotate-3 translate-y-4 opacity-50"></div>
             <img src="/Music-bro 1.png" alt="Suno Illustration" className="w-full h-auto object-contain z-10 drop-shadow-2xl" />
          </div>
        </div>

        {/* Features Table */}
        <div className="rounded-2xl border-2 border-dashed border-blue-200 p-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Key Features & How to Use Them</h2>
            <p className="text-slate-500 pb-4 border-b-2 border-dashed border-blue-200">Create custom, royalty-free music tailored to your educational content.</p>
          </div>

          <div className="rounded-xl border-2 border-dashed border-blue-200 bg-white overflow-hidden">
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
                      <Music size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Genre Selection</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Choose from ambient, cinematic, pop, etc.</td>
                  <td className="px-6 py-5 text-sm">Matches music to lesson tone (e.g., suspense for storytelling).</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Settings size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Mood Adjuster</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Slide to adjust energy (calm → energetic)</td>
                  <td className="px-6 py-5 text-sm">Sets the right classroom atmosphere.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Volume2 size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Length Control</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Set track duration (10 sec to 5 min)</td>
                  <td className="px-6 py-5 text-sm">Fits music to video/activity length.</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <Mic2 size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>BPM Customizer</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Modify beats per minute (slow/fast)</td>
                  <td className="px-6 py-5 text-sm">Aligns with pacing (e.g., slow for reflection).</td>
                </tr>
                <tr>
                  <td className="px-6 py-5 font-bold text-slate-900">
                    <div className="flex items-start gap-2">
                      <ListMusic size={16} className="text-[#bc1044] mt-0.5 flex-shrink-0" />
                      <span>Download Options</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">Export as MP3/WAV (no watermark)</td>
                  <td className="px-6 py-5 text-sm">Safe for student projects and presentations.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Getting Started Guide */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
             <div className="relative mb-8">
               <div className="absolute -inset-4 bg-rose-50 rounded-full blur-3xl opacity-50 -z-10"></div>
               <img src="/Compose music-bro 1.png" alt="Workspace" className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl" />
             </div>
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">Step-by-Step Getting Started Guide</h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  Compose your first classroom soundtrack in just 4 simple steps.
                </p>
             </div>
          </div>

          <div className="md:col-span-8 space-y-6 relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-slate-100 z-0 hidden md:block"></div>

            {/* Step 1 */}
            <div className="flex gap-6 relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 rounded-2xl bg-[#800020] text-white font-bold flex items-center justify-center flex-shrink-0 text-lg shadow-lg">1</div>
               <div>
                 <h3 className="font-bold text-slate-900 mb-1 text-lg">Access Suno</h3>
                 <p className="text-slate-600">Head to Suno.com and sign in with Google or Discord to starting composing.</p>
               </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 rounded-2xl bg-[#800020] text-white font-bold flex items-center justify-center flex-shrink-0 text-lg shadow-lg">2</div>
               <div>
                 <h3 className="font-bold text-slate-900 mb-1 text-lg">Generate Your First Track</h3>
                 <p className="text-slate-600 mb-2">Click "Create" and input a simple prompt like: <span className="text-rose-600 font-medium">"An upbeat pop song about the water cycle."</span></p>
               </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 rounded-2xl bg-[#800020] text-white font-bold flex items-center justify-center flex-shrink-0 text-lg shadow-lg">3</div>
               <div>
                 <h3 className="font-bold text-slate-900 mb-1 text-lg">Customize with "Custom Mode"</h3>
                 <p className="text-slate-600">Paste your specific lesson lyrics into the "Lyrics" box to create highly targeted educational content.</p>
               </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 relative z-10 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
               <div className="w-12 h-12 rounded-2xl bg-[#800020] text-white font-bold flex items-center justify-center flex-shrink-0 text-lg shadow-lg">4</div>
               <div>
                 <h3 className="font-bold text-slate-900 mb-1 text-lg">Download & Use</h3>
                 <p className="text-slate-600">Hit the "More" button → "Download" → Audio (WAV or MP3). Perfect for classroom play!</p>
               </div>
            </div>
          </div>
        </div>

        {/* Practical Challenge */}
        <div className="bg-[#800020] rounded-3xl p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

          <div className="flex items-center gap-2 text-rose-300/80 mb-6 text-xs font-bold uppercase tracking-[0.2em] relative z-10">
            <Target size={14} /> PRACTICAL CHALLENGE: TASK
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-12 leading-tight relative z-10 max-w-2xl">
            "Create a 1-minute background track for a student podcast or video lesson."
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold">1</div>
                 <h4 className="font-bold text-lg">Choose a Theme</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">Select a topic (e.g., medieval history, ocean waves) or paste your own script.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold">2</div>
                 <h4 className="font-bold text-lg">Track Style</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">Enter relevant style keywords (e.g., "Lo-fi beats, mysterious, atmospheric, piano").</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold">3</div>
                 <h4 className="font-bold text-lg">Generate & Edit</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">Analyze the energy of the track. If not perfect, refine the description or style keywords.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold">4</div>
                 <h4 className="font-bold text-lg">Share</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">Share your generation link or audio file on social with #SunoEDChallenge.</p>
            </div>
          </div>
        </div>

        {/* Examples Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
           <div className="bg-rose-50/50 border border-rose-100 rounded-3xl p-8 flex flex-col justify-between group hover:bg-rose-50 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Music size={24} className="text-rose-600" />
                  <h3 className="text-xl font-bold text-slate-900">Music Examples</h3>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 group-hover:border-rose-200 transition-colors">
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-400">Atmospheric</span>
                        <Volume2 size={12} className="text-rose-400" />
                     </div>
                     <p className="text-sm font-bold text-slate-800">Lo-fi Study Beats</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 group-hover:border-rose-200 transition-colors">
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-400">Cinematic</span>
                        <Volume2 size={12} className="text-rose-400" />
                     </div>
                     <p className="text-sm font-bold text-slate-800">Podcast Intro Music</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 group-hover:border-rose-200 transition-colors">
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-slate-400">Acoustic</span>
                        <Volume2 size={12} className="text-rose-400" />
                     </div>
                     <p className="text-sm font-bold text-slate-800">Reading Time Ambient</p>
                  </div>
                </div>
              </div>
              <div className="h-48 rounded-2xl overflow-hidden shadow-md">
                 <img src="/gamma_ai_classroom_image.png" alt="Recording Studio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
           </div>

           <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between group hover:bg-slate-100 transition-colors">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Mic2 size={24} className="text-slate-600" />
                  <h3 className="text-xl font-bold text-slate-900">Useful Tools</h3>
                </div>
                <div className="space-y-4 mb-8 text-slate-600 text-sm">
                   <p className="flex items-center gap-3"><ChevronRight size={14} className="text-rose-500" /> Ensure lyrics are age-appropriate.</p>
                   <p className="flex items-center gap-3"><ChevronRight size={14} className="text-rose-500" /> Use "Instrumental" mode for podcasts.</p>
                   <p className="flex items-center gap-3"><ChevronRight size={14} className="text-rose-500" /> Mix vocals low for background use.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6 group-hover:border-rose-200 transition-colors">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                         <Headphones size={24} />
                      </div>
                      <div>
                         <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mastery Tip</p>
                         <p className="text-sm font-bold text-slate-800 italic">"Combine Suno with Canva!"</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="h-48 rounded-2xl overflow-hidden shadow-md">
                 <img src="/Robot face-pana 1.png" alt="Microphone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
           </div>
        </div>

        {/* Pro Tips & Assessment */}
        <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-amber-600 font-bold mb-6 text-lg">
            <Trophy size={18} /> Pro Tips for Mastery
          </div>

          <ul className="space-y-5 mb-8">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 flex-shrink-0"></div>
              <p className="text-slate-700"><strong>Target Music for Focus:</strong> Use Lo-fi or classical styles for student independent working sessions to focus energy without distracting lyrics.</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 flex-shrink-0"></div>
              <p className="text-slate-700"><strong>Check With Students:</strong> Let students prompt the AI to create a study track for the upcoming unit—engagement will soar!</p>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-amber-500 mt-2.5 flex-shrink-0"></div>
              <p className="text-slate-700"><strong>Manage Templates:</strong> Keep unit soundtracks in project folders to build your musical curriculum legacy.</p>
            </li>
          </ul>

          <div className="bg-white/80 p-5 rounded-2xl text-center border border-amber-200 shadow-sm">
            <p className="text-sm text-amber-900 font-medium italic">
              "Compose your lessons with the melody of innovation. Master Suno to orchestrate a truly modern classroom! 🎵"
            </p>
          </div>
        </div>

        {/* Final Button */}
        <button 
          onClick={() => alert("Congratulations on completing the 7 Day AI EdChallenge!")}
          className="w-full bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all rounded-2xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-rose-50/0 group-hover:bg-rose-50/50 transition-colors"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors mb-2 tracking-tight">Day 7: TEST YOUR KNOWLEDGE</h3>
            <p className="text-slate-500">Dive into your complete evaluation of Day 7</p>
            <div className="mt-6 w-14 h-14 rounded-full bg-rose-50 group-hover:bg-rose-600 group-hover:text-white text-rose-600 border border-rose-100 flex items-center justify-center transition-all shadow-sm">
              <ChevronRight size={24} />
            </div>
          </div>
        </button>

      </div>
    </div>
  );
};

export default SunoDay7;
