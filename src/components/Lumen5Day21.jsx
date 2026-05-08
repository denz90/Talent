import React, { useState } from 'react';
import { 
  Video, 
  Sparkles, 
  Clock, 
  Globe, 
  Users, 
  Layers, 
  ArrowRight,
  Zap,
  FileText,
  Trophy,
  CheckCircle2,
  ChevronRight,
  Target,
  Image,
  Type,
  Mic,
  Share2,
  Palette,
  BarChart3
} from 'lucide-react';

const Lumen5Day21 = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Video },
    { id: 'features', label: 'Features', icon: Layers },
    { id: 'guide', label: 'Guide', icon: Target },
    { id: 'challenge', label: 'Challenge', icon: Trophy }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-white/50">
      <div className="max-w-4xl mx-auto px-8 py-10 space-y-16 pb-32">
        
        {/* Header Hero */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white p-12 shadow-xl min-h-[300px] flex flex-col justify-end">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="absolute top-10 right-10 animate-pulse text-indigo-300">
            <Video size={64} strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <Sparkles size={14} className="text-yellow-400" />
              Day 21 • Video Creation
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
              Day 21: Lumen5 Challenge
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Transform Lessons into Engaging Video Content
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Video size={16} /> Boosts Engagement
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Clock size={16} /> Saves Time
              </span>
              <span className="flex items-center gap-2 text-sm bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <Globe size={16} /> Multilingual
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex p-1.5 bg-slate-100 rounded-2xl w-full max-w-md mx-auto sticky top-4 z-40 shadow-sm backdrop-blur-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-white text-indigo-600 shadow-sm scale-100' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/50 scale-95'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === 'overview' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">What is Lumen5?</h2>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    Lumen5 is an AI-powered video creation platform that turns text (lesson plans, articles, scripts) into engaging educational videos. It automates scene generation, adds animations, and syncs multimedia to simplify video production.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: Video, title: 'Boosts Engagement', desc: 'Converts static lessons into dynamic videos' },
                      { icon: Clock, title: 'Saves Time', desc: 'Creates videos in minutes (vs. hours)' },
                      { icon: Globe, title: 'Supports Accessibility', desc: 'Auto-captions and multilingual options' },
                      { icon: Layers, title: 'Multi-Platform Use', desc: 'Ideal for flipped classrooms and LMS' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100/50">
                        <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                          <p className="text-[11px] text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-indigo-100 rounded-3xl blur-2xl opacity-50 -z-10"></div>
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden group">
                    <img src="/Video calling-pana 1.png" alt="Lumen5 Illustration" className="w-full h-auto relative z-10" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Key Features & How to Use Them</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'AI Script-to-Video',
                    icon: Type,
                    color: 'purple',
                    howTo: 'Paste text (e.g., lecture notes) → AI suggests visuals/scenes',
                    benefit: 'Turns textbooks into interactive video lessons'
                  },
                  {
                    title: 'Media Library',
                    icon: Image,
                    color: 'blue',
                    howTo: 'Search 10M+ free images/videos or upload custom files',
                    benefit: 'No copyright issues; personalize content'
                  },
                  {
                    title: 'Brand Kit',
                    icon: Palette,
                    color: 'emerald',
                    howTo: 'Set school colors/fonts → apply to all videos automatically',
                    benefit: 'Consistent branding for institutional content'
                  },
                  {
                    title: 'Voiceover & Captions',
                    icon: Mic,
                    color: 'orange',
                    howTo: 'Record narration or auto-generate captions (20+ languages)',
                    benefit: 'ADA-compliant and ESL-friendly'
                  },
                  {
                    title: 'Collaboration',
                    icon: Users,
                    color: 'indigo',
                    howTo: 'Invite colleagues to edit videos (great for team projects)',
                    benefit: 'Streamline team-based content creation'
                  }
                ].map((feature, i) => (
                  <div key={i} className="group p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                    <div className={`w-10 h-10 rounded-xl mb-6 flex items-center justify-center bg-${feature.color}-50 text-${feature.color}-600 group-hover:scale-110 transition-transform`}>
                      <feature.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <div className="space-y-4">
                      <div className="p-3 bg-slate-50 rounded-xl">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">How to Use</p>
                        <p className="text-xs text-slate-700">{feature.howTo}</p>
                      </div>
                      <div className={`p-3 bg-${feature.color}-50/50 rounded-xl border border-${feature.color}-100/50`}>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Benefit</p>
                        <p className="text-xs text-slate-900 font-semibold">{feature.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">Step-by-Step Getting Started Guide</h2>
              <div className="max-w-2xl mx-auto space-y-4">
                {[
                  { step: 1, title: 'Sign Up', desc: 'Go to Lumen5.com → Click "Get Started Free" → Select "Education" as your use case' },
                  { step: 2, title: 'Input Your Content', desc: 'Click "Create Video" → Choose "Start from Text" → Paste lesson summary or upload PPT/PDF' },
                  { step: 3, title: 'Customize with AI', desc: 'Let Lumen5 auto-generate storyboard → Edit scenes, swap media, adjust text highlights' },
                  { step: 4, title: 'Enhance Accessibility', desc: 'Click "Captions" → Toggle "Auto-Generate" → Select language for bilingual classes' },
                  { step: 5, title: 'Publish & Share', desc: 'Click "Export" → Choose resolution → Download or share to Google Classroom/Canvas' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenge' && (
            <div className="space-y-12 animate-in fade-in duration-500">
              <div className="bg-indigo-900 rounded-3xl p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 space-y-8">
                  <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-[0.2em]">
                    <Target size={16} /> Practical Challenge Task
                  </div>
                  <h2 className="text-3xl font-bold leading-tight">
                    "Create a 2-minute explainer video for an upcoming lesson topic."
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Input: Extract Key Content', desc: 'Draft 5-10 bullet points from your lesson plan (e.g., "Factors of Photosynthesis"). Review for accuracy.', icon: FileText },
                      { title: 'Customize: Personalize Media', desc: 'Replace 2 stock images. Add a 10-second voiceover. Adjust text highlights for key terms.', icon: Image },
                      { title: 'Enhance: Accessibility', desc: 'Enable auto-captions. Translate into another language. Ensure ADA color contrast.', icon: Globe },
                      { title: 'Publish: Share Your Output', desc: 'Export the video. Upload to LMS or share directly in Google Classroom/Canvas.', icon: Share2 }
                    ].map((step, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl space-y-3">
                        <step.icon size={16} className="text-indigo-300" />
                        <h4 className="font-bold text-sm">{step.title}</h4>
                        <p className="text-xs text-indigo-100/70 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Video Creation Flow */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">AI-Powered Video Creation Flow</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { step: 1, title: 'Paste Text', desc: 'Lesson plans or script', icon: Type },
                    { step: 2, title: 'AI Generates', desc: 'Scenes and images', icon: Sparkles },
                    { step: 3, title: 'Customize', desc: 'Edit and add media', icon: Palette },
                    { step: 4, title: 'Export', desc: 'Share or download', icon: Share2 }
                  ].map((flow, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm text-center flex flex-col items-center gap-3 group hover:border-indigo-200 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
                        {flow.step}
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm">{flow.title}</h4>
                      <p className="text-[10px] text-slate-500">{flow.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tips Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Template Hack', icon: Layers, desc: 'Use "Education Explainer" templates for faster formatting. Pre-designed layouts save 10+ minutes.' },
                  { title: 'Student Projects', icon: Users, desc: 'Have students create videos as assignments. Lumen5 is student-friendly and builds digital literacy.' },
                  { title: 'Analytics', icon: BarChart3, desc: 'Track engagement via Lumen5\'s social integrations. Monitor views and completion rates.' }
                ].map((tip, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm">
                    <div className="p-3 bg-white rounded-2xl shadow-sm w-fit text-indigo-600">
                      <tip.icon size={24} />
                    </div>
                    <h4 className="font-bold text-slate-900">{tip.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{tip.desc}</p>
                  </div>
                ))}
              </div>

              {/* Media Library Grid */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">10M+ Free Media Library</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: 'Stock Images & Videos', desc: 'Access millions of royalty-free files from Unsplash, Pexels, and more.', icon: Image },
                    { title: 'Custom Uploads', desc: 'Add your own images, videos, and graphics for personalization.', icon: Share2 },
                    { title: 'Brand Kit', desc: 'Set school colors and fonts to auto-apply across all videos.', icon: Palette },
                    { title: 'Music Library', desc: 'Access free royalty-free background music or upload your own.', icon: Mic }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Perfect For Grid */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white space-y-8 shadow-xl">
                <h3 className="text-2xl font-bold tracking-tight">Perfect For</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: 'Flipped Classrooms', desc: 'Create pre-lesson video content for students to watch before class.' },
                    { title: 'LMS Integration', icon: Zap, desc: 'Embed directly into Canvas, Schoology, or Google Classroom.' },
                    { title: 'Social Media Learning', desc: 'Share bitesized educational content on YouTube or Instagram.' },
                    { title: 'Parent Communication', desc: 'Visual lesson summaries for parents to support learning at home.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="p-2 bg-white/10 rounded-lg text-indigo-400">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Quote */}
        <div className="bg-indigo-600 p-10 rounded-[2.5rem] text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
          <div className="relative z-10 space-y-6">
            <Trophy size={48} className="mx-auto text-white/50" />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              "Lumen5 turns passive content into active learning experiences."
            </h2>
            <p className="text-indigo-100 font-medium">Share your video with #AIVideoChallenge!</p>
            <button 
              onClick={onNext}
              className="mt-4 bg-white text-indigo-600 px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 mx-auto group"
            >
              Start Your Challenge <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Tomorrow's Preview */}
        <div className="text-center pb-20">
          <p className="text-slate-400 text-sm font-medium">
            Tomorrow's Preview: Day 22: TeacherMatic – Automate lesson planning, quizzes, and rubrics with AI
          </p>
        </div>

      </div>
    </div>
  );
};

export default Lumen5Day21;
