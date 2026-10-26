import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import ToolCard from './components/ToolCard';
import LearningPathCard from './components/LearningPathCard';
import TestimonialCard from './components/TestimonialCard';
import Footer from './components/Footer';
import {
  Zap,
  Compass,
  Trophy,
  MessageCircle,
  BookOpen,
  Search,
  Sparkles,
  Play
} from 'lucide-react';

// Lazy load non-home views to code-split and drastically reduce critical path bundle size
const ToolDetailPage = lazy(() => import('./components/ToolDetailPage'));
const SignupPage = lazy(() => import('./components/SignupPage'));
const LoginPage = lazy(() => import('./components/LoginPage'));
const OTPVerificationPage = lazy(() => import('./components/OTPVerificationPage'));
const DashboardPage = lazy(() => import('./components/DashboardPage'));
const ProfileSettingsPage = lazy(() => import('./components/ProfileSettingsPage'));
const BeginnerPage = lazy(() => import('./components/BeginnerPage'));
const PathSelectionPage = lazy(() => import('./components/PathSelectionPage'));
const LearningPage = lazy(() => import('./components/LearningPage'));
const HelpCenterPage = lazy(() => import('./components/HelpCenterPage'));
const ApiDocsPage = lazy(() => import('./components/ApiDocsPage'));
const SystemStatusPage = lazy(() => import('./components/SystemStatusPage'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const CompanyPage = lazy(() => import('./components/CompanyPage'));
const FAQPage = lazy(() => import('./components/FAQPage'));

const PageLoadingFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

import { API_BASE_URL } from './config.js'; 
import overviewVideo from './assets/Introduction video.mp4';
 

const TOOLS_DATA = {
  chatgpt: {
    title: "ChatGPT: Conversational AI & Brainstorming",
    icon: MessageCircle,
    whatItIs: "ChatGPT is a versatile AI assistant that helps educators brainstorm lesson ideas, draft emails, and create interactive learning activities.",
    useFor: ["Lesson planning and brainstorming", "Drafting student feedback", "Generating creative writing prompts"],
    prompt: "Act as a pedagogical expert and help me design a 45-minute lesson plan on renewable energy for 8th graders. Include a hook, a hands-on activity, and an exit ticket.",
    quote: "How could this accelerate your lesson planning process?",
    image: "/Artificial intelligence-cuate.svg"
  },
  claude_ai: {
    title: "Claude: Reading, Summarizing & Refinement",
    icon: BookOpen,
    whatItIs: "Claude is an advanced AI tool designed for deep analysis, summarizing long documents, and refining educational content for clarity and accuracy.",
    useFor: ["Summarizing policies or curriculum documents", "Refining lesson notes for clarity", "Analyzing long research papers for key takeaways"],
    prompt: "You have a long educational document. Act as an education content editor and Summarize the content into 5 key points. Keep it clear and simple for students.",
    quote: "How could this reduce your reading time and workload?",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000"
  },
  gamma_ai: {
    title: "Gamma AI: Presentation & Visual Tool",
    icon: Sparkles,
    whatItIs: "Gamma AI helps educators turn ideas, text, or prompts into clean presentations, lesson slides, and visual content instantly.",
    useFor: ["Instantly creating lesson slides", "Designing training presentations", "Generating visual summaries of complex content"],
    prompt: "You are preparing a short lesson presentation. Act as a presentation assistant and create structured slide content for 5 slides about the Solar System. Simple and professional.",
    quote: "How does this change the way you prepare presentations?",
    image: "/gamma_ai_classroom_image.png"
  },
  perplexity: {
    title: "Perplexity AI: Research & Fact-Checking",
    icon: Search,
    whatItIs: "Perplexity is an AI-powered search engine that provides cited answers, perfect for academic research and verifying information quickly.",
    useFor: ["Fact-checking lesson materials", "Finding cited academic sources", "Quickly answering complex student questions"],
    prompt: "Find the most recent statistics on global forest coverage and provide citations from reputable environmental organizations.",
    quote: "How does citing sources change your research confidence?",
    image: "/perplexityAI.png"
  }
};

const App = () => {
  const [view, setView] = useState('home');
  const [activeCourse, setActiveCourse] = useState(() => {
    try {
      const saved = localStorage.getItem('talent_oasis_active_course');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });
  const [selectedLevel, setSelectedLevel] = useState('Intermediate');
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [companyTab, setCompanyTab] = useState('about_us');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Auto-Login: Check for token when the app loads
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('hawkman_token');
      if (token) {
        try {
          const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (response.ok) {
            const userData = await response.json();
            setCurrentUser(userData);
          } else {
            localStorage.removeItem('hawkman_token'); 
            setCurrentUser(null);
          }
        } catch (err) {
          console.error("Failed to fetch profile on load", err);
        }
      }
    };

    checkAuth();
  }, []);

  const [currentTool, setCurrentTool] = useState(() => {
    return localStorage.getItem('talent_oasis_tool') || null;
  });

  const isFirstMount = useRef(true);

  // Scroll to top on page/view changes (deferred to next frame to prevent forced reflow)
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (window.scrollY > 0) {
      const frameId = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [view, currentTool]);

  // Persist state to localStorage
  useEffect(() => {
    localStorage.setItem('talent_oasis_view', view);
    if (view === 'beginner') {
      localStorage.setItem('talent_oasis_last_type', 'beginner');
    }
  }, [view]);

  useEffect(() => {
    if (currentTool) {
      localStorage.setItem('talent_oasis_tool', currentTool);
      localStorage.setItem('talent_oasis_last_tool', currentTool);
      localStorage.setItem('talent_oasis_last_type', 'tool');
    } else {
      localStorage.removeItem('talent_oasis_tool');
    }
  }, [currentTool]);

  useEffect(() => {
    if (activeCourse) {
      localStorage.setItem('talent_oasis_active_course', JSON.stringify(activeCourse));
      localStorage.setItem('talent_oasis_last_type', 'course');
    } else {
      localStorage.removeItem('talent_oasis_active_course');
    }
  }, [activeCourse]);

  const resumeActiveCourse = async () => {
    if (activeCourse) {
      setView('learning_page');
      return;
    }

    const token = localStorage.getItem('hawkman_token');
    if (token) {
      try {
        const response = await fetch(`${API_BASE_URL}/api/dashboard/stats`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const statsData = await response.json();
          if (statsData.course_progress && statsData.course_progress.length > 0) {
            // Find first course that has progress
            const inProgress = statsData.course_progress.find(cp => cp.progress_percent > 0 && cp.progress_percent < 100);
            const targetProgress = inProgress || statsData.course_progress[0];
            
            // Map course_id to the course details
            const coursesMap = {
              1: { title: 'AI for Educators', color: '#a855f7' },
              2: { title: 'AI for Designers', color: '#ec4899' },
              3: { title: 'AI for Developers', color: '#2563eb' },
              4: { title: 'AI for Content Creators', color: '#16a34a' }
            };

            const matchedCourse = coursesMap[targetProgress?.course_id || 1];
            if (matchedCourse) {
              const resObj = {
                title: matchedCourse.title,
                color: matchedCourse.color,
                level: 'Intermediate' // default level
              };
              setActiveCourse(resObj);
              setView('learning_page');
              return;
            }
          }
        }
      } catch (err) {
        console.error("Failed to fetch dashboard stats to resume:", err);
      }
    }

    // Default fallback: AI for Educators
    const defaultCourse = {
      title: 'AI for Educators',
      color: '#a855f7',
      level: 'Intermediate'
    };
    setActiveCourse(defaultCourse);
    setView('learning_page');
  };

  const resumeLastLearning = async () => {
    const lastType = localStorage.getItem('talent_oasis_last_type');
    const lastTool = localStorage.getItem('talent_oasis_last_tool');

    if (lastType === 'tool' && lastTool) {
      setCurrentTool(lastTool);
      return;
    }

    if (lastType === 'beginner') {
      setView('beginner');
      return;
    }

    await resumeActiveCourse();
  };

  const handleNavClick = (sectionId) => {
    if (sectionId === 'faq') {
      setView('faq');
      return;
    }
    const targetId = sectionId === 'courses' ? 'paths' : (sectionId ? sectionId.toLowerCase() : '');
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(targetId) || document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(targetId) || document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (view === 'dashboard') {
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        <DashboardPage
          currentUser={currentUser}
          onLogout={() => { /* existing logout logic */ }}
          onBack={() => setView('home')}
          onProfileSettings={() => setView('profile_settings')}
          onNavigateTool={(toolId) => setCurrentTool(toolId)}
          onNavigateCourse={(course) => { setActiveCourse(course); setView('learning_page'); }}
          onNavigatePath={(level) => { 
            if (level?.toLowerCase() === 'beginner') { setView('beginner'); } 
            else { setSelectedLevel(level); setView('path_selection'); }
          }}
        />
      </Suspense>
    );
  }

  if (view === 'profile_settings') {
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        <ProfileSettingsPage
          currentUser={currentUser}
          onBack={() => setView('dashboard')}
        />
      </Suspense>
    );
  }

  if (view === 'signup') {
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        <SignupPage 
          onBack={(v) => setView(v === 'dashboard' ? 'dashboard' : 'home')} 
          onLoginClick={() => setView('login')} 
          onRequireOTP={(email) => {          
            setRegisteredEmail(email);        
            setView('otp');                    
          }}
        />
      </Suspense>
    );
  }

  if (view === 'otp') {
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        <OTPVerificationPage 
          email={registeredEmail}
          onBack={() => setView('signup')}
          onSuccess={() => setView('login')}
        />
      </Suspense>
    );
  }

  if (view === 'login') {
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        <LoginPage 
          onBack={() => setView('home')} 
          onSignupClick={() => setView('signup')} 
          onLoginSuccess={(profileData) => {
            setCurrentUser(profileData); 
            setView('home');             
          }}
        />
      </Suspense>
    );
  }

  if (view === 'path_selection' && !currentUser) {
    alert("You need to sign in to view courses!");
    setView('login');
    return null; 
  }


  if (view === 'learning_page' && activeCourse) {
    if (!currentUser) {
      setView('login');
      return null;
    }
    return (
      <Suspense fallback={<PageLoadingFallback />}>
        <LearningPage
          currentUser={currentUser}
          course={activeCourse}
          onBack={() => setView('path_selection')}
          onLogout={() => {
            localStorage.removeItem('hawkman_token');
            setCurrentUser(null);
            setView('login');
          }}
          onProfileSettings={() => setView('profile_settings')}
          onHome={() => setView('home')}
          onDashboard={() => setView('dashboard')}
        />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      <Navbar
        currentUser={currentUser}   
        onLogout={() => {           
          localStorage.removeItem('hawkman_token');
          setCurrentUser(null);
          setView('home');
        }}
        onSignup={() => setView('signup')}
        onLogin={() => setView('login')}
        onLogoClick={() => setView('home')}
        onNavClick={handleNavClick}
        onDashboard={() => setView('dashboard')}
      />

      <main>
        <Suspense fallback={<PageLoadingFallback />}>
          {currentTool ? (
            <ToolDetailPage
              tool={TOOLS_DATA[currentTool]}
              onBack={() => setCurrentTool(null)}
            />
        ) : view === 'path_selection' ? (
          <PathSelectionPage
            level={selectedLevel}
            onBack={() => setView('home')}
            onSelectPath={(course) => {
              setActiveCourse(course);
              setView('learning_page');
            }}
          />
        ) : view === 'beginner' ? (
          <BeginnerPage 
            onBack={() => setView('home')} 
          />
        ) : view === 'help_center' ? (
          <HelpCenterPage onBack={() => setView('home')} />
        ) : view === 'api_docs' ? (
          <ApiDocsPage onBack={() => setView('home')} />
        ) : view === 'system_status' ? (
          <SystemStatusPage onBack={() => setView('home')} />
        ) : view === 'blog' ? (
          <BlogPage onBack={() => setView('home')} />
        ) : view === 'company' ? (
          <CompanyPage onBack={() => setView('home')} initialTab={companyTab} />
        ) : view === 'faq' ? (
          <FAQPage 
            onBack={() => setView('home')} 
            onNavigate={(targetView) => setView(targetView)} 
          />
        ) : (
          <>
            {/* Hero Section */}
            <section className="relative min-h-[520px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/Golden-Hour Classroom Study Session.png"
                  className="w-full h-full object-cover"
                  alt="Hero Background"
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                  width="1672"
                  height="941"
                />
                {/* Dark overlay for mobile text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 md:from-black/30 md:via-black/20 md:to-black/40"></div>
              </div>

              <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] sm:leading-[1.05] mb-4 sm:mb-6 md:mb-8 tracking-tight drop-shadow-lg">
                  {currentUser ? (
                    <>
                      Welcome back, <br /> {currentUser.username}!
                    </>
                  ) : (
                    <>
                      Learn AI Tools That <br /> Power Tomorrow
                    </>
                  )}
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-md">
                  Interactive courses, hands-on projects, and real-world applications. <br className="hidden md:block" />
                  Perplexity AI, Claude AI, ChatGPT, Gamma AI, and 50+ AI tools.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
                  <button 
                    onClick={() => {
                      if (currentUser) {
                        resumeLastLearning();
                      } else {
                        setView('signup');
                      }
                    }}
                    className="text-white font-bold py-3 sm:py-4 px-8 sm:px-12 bg-site-primary hover:bg-site-primary/80 transition-all cursor-pointer rounded-sm shadow-lg active:scale-95 text-sm sm:text-base"
                  >
                    {currentUser ? 'Continue Learning' : 'Start Learning Free'}
                  </button>

                  <button 
                    onClick={() => handleNavClick('paths')}
                    className="text-white font-bold py-3 sm:py-4 px-8 sm:px-12 bg-white/10 hover:bg-white/20 border border-white/30 transition-all cursor-pointer backdrop-blur-sm rounded-sm active:scale-95 text-sm sm:text-base"
                  >
                    Browse Paths
                  </button>
                </div>

              </div>
            </section>

            {/* 📊 Sourced AI Statistics */}
            <section className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-site-primary/30 via-site-bg to-site-bg content-auto">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-14">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 tracking-tight text-site-text">
                    The AI Skills Gap Is Real
                  </h2>
                  <p className="text-sm sm:text-base font-medium text-site-text/70 max-w-2xl mx-auto">
                    The workforce is adopting AI fast — but training hasn't kept up. Here's what the data says.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mb-8 max-w-4xl mx-auto">
                  {/* Stat 1 */}
                  <div className="relative group rounded-2xl border border-site-primary/20 bg-site-primary/5 backdrop-blur-sm p-7 sm:p-9 text-center transition-all duration-300 hover:border-site-primary/40 hover:shadow-lg hover:shadow-site-primary/10 hover:-translate-y-1">
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-site-primary leading-none">86%</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-site-text mt-2 mb-2">
                      of professionals use AI at work
                    </p>
                    <p className="text-xs sm:text-sm text-site-text/50 leading-relaxed">
                      …but only <span className="font-bold text-site-primary">24%</span> feel properly equipped to use it effectively
                    </p>
                  </div>

                  {/* Stat 2 */}
                  <div className="relative group rounded-2xl border border-site-primary/20 bg-site-primary/5 backdrop-blur-sm p-7 sm:p-9 text-center transition-all duration-300 hover:border-site-primary/40 hover:shadow-lg hover:shadow-site-primary/10 hover:-translate-y-1">
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-site-primary leading-none">67%</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-site-text mt-2 mb-2">
                      say 2 hours a week or less
                    </p>
                    <p className="text-xs sm:text-sm text-site-text/50 leading-relaxed">
                      …would meaningfully improve their AI skills and workplace confidence
                    </p>
                  </div>

                </div>
              </div>
            </section>

           {/* 🎥 Video Section - High Performance Click-to-Play (Zero payload until clicked) */}
          <section className="py-10 sm:py-16 md:py-24 bg-site-bg/50 content-auto">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-site-text mb-3">
                  What You'll Learn
                </h2>
                <p className="text-site-text/70 font-medium">
                  Watch this quick overview of our AI learning platform
                </p>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                {/* 16:9 Aspect Ratio Container */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  {isVideoPlaying ? (
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      controls
                      autoPlay
                      playsInline
                    >
                      <source src={overviewVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div 
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute top-0 left-0 w-full h-full cursor-pointer group flex items-center justify-center select-none"
                      role="button"
                      aria-label="Play overview video"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsVideoPlaying(true); }}
                    >
                      <img
                        src="/video-poster.jpg"
                        alt="Overview Video Preview"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex flex-col items-center justify-center gap-3">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-site-primary/90 text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-active:scale-95 transition-all">
                          <Play className="w-8 h-8 fill-white ml-1 text-white" />
                        </div>
                        <span className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
                          Watch Platform Overview (2 min)
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>


            {/* Popular AI Tools */}
            <section id="tools" className="py-12 sm:py-20 md:py-32 content-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <div className="mb-10 sm:mb-16 md:mb-20">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-5 tracking-tight text-site-text">Popular Tools You'll Learn</h2>
                  <p className="font-medium text-site-text/80">Get hands-on experience with industry-leading AI platforms</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  <ToolCard
                    icon={MessageCircle}
                    title="ChatGPT"
                    description="Learn prompt engineering and advanced conversations"
                    onClick={() => setCurrentTool('chatgpt')}
                  />
                  <ToolCard
                    icon={BookOpen}
                    title="Claude AI"
                    description="Create stunning AI-generated artwork and designs"
                    onClick={() => setCurrentTool('claude_ai')}
                  />
                  <ToolCard
                    icon={Sparkles}
                    title="Gamma AI"
                    description="Accelerate coding with AI-powered assistance"
                    onClick={() => setCurrentTool('gamma_ai')}
                  />
                  <ToolCard
                    icon={Search}
                    title="Perplexity AI"
                    description="Advanced reasoning and content generation"
                    onClick={() => setCurrentTool('perplexity')}
                  />
                </div>
              </div>
            </section>

            {/* Learning Paths */}
            <section id="paths" className="py-12 sm:py-20 md:py-32 bg-site-primary/20 content-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <div className="mb-10 sm:mb-16 md:mb-20">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-5 tracking-tight text-site-text">Choose Your Learning Path</h2>
                  <p className="text-sm sm:text-base font-medium text-site-text/80">Structured courses designed for your skill level and goals</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-stretch">
                  <LearningPathCard
                    icon={Compass}
                    title="Beginner"
                    description="Start your AI journey from scratch. No prior experience needed."
                    features={[
                      "Basic Prompting Techniques",
                    ]}
                    onClick={() => setView('beginner')}
                  />
                  <LearningPathCard
                    icon={Zap}
                    title="Intermediate"
                    description="Level up your skills with advanced techniques and workflows."
                    features={[
                      "Advanced Prompting",
                      "Multi-Tool Workflows",
                      "Automation Basics",
                      "Real-World Projects"
                    ]}
                    popular
                    onClick={() => {
                      setSelectedLevel('Intermediate');
                      setView('path_selection');
                    }}
                  />
                  <LearningPathCard
                    icon={Trophy}
                    title="Advanced"
                    description="Learn AI integration and build production-ready solutions."
                    features={[
                      "API Integration",
                      "Custom AI Solutions",
                      "Enterprise Workflows",
                      "AI Strategy"
                    ]}
                    onClick={() => {
                      setSelectedLevel('Advanced');
                      setView('path_selection');
                    }}
                  />
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-12 sm:py-20 md:py-32 content-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <div className="mb-10 sm:mb-16 md:mb-20">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-5 tracking-tight text-site-text">Loved by Learners Worldwide</h2>
                  <p className="text-sm sm:text-base font-medium text-site-text/80">Join thousands who've transformed their careers with AI</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
                  <TestimonialCard
                    quote="This platform completely changed how I approach my design work. The Midjourney course alone saved me hours every week."
                    author="Sarah Chen"
                    role="UI Designer"
                  />
                  <TestimonialCard
                    quote="The hands-on projects are incredible. I went from zero AI knowledge to building automated workflows for my business."
                    author="Marcus Johnson"
                    role="Entrepreneur"
                  />
                  <TestimonialCard
                    quote="Best investment in my career. The GitHub Copilot course doubled my coding productivity within a month."
                    author="Emily Rodriguez"
                    role="Software Engineer"
                  />
                </div>
              </div>
            </section>
          </>
        )}
        </Suspense>
      </main>

      <Footer onNavigate={(targetView) => {
        if (['about_us', 'careers', 'contact', 'partners'].includes(targetView)) {
          setCompanyTab(targetView);
          setView('company');
        } else {
          setView(targetView);
        }
      }} />
    </div>
  );
};

export default App;