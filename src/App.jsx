import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ToolCard from './components/ToolCard';
import LearningPathCard from './components/LearningPathCard';
import TestimonialCard from './components/TestimonialCard';
import Footer from './components/Footer';
import ToolDetailPage from './components/ToolDetailPage';
import {
  MessageSquare,
  Image as ImageIcon,
  Code2,
  Cpu,
  Zap,
  Compass,
  Trophy,
  MessageCircle,
  BookOpen,
  Search,
  Sparkles
} from 'lucide-react';

import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import OTPVerificationPage from './components/OTPVerificationPage';
import DashboardPage from './components/DashboardPage';
import ProfileSettingsPage from './components/ProfileSettingsPage';
import BeginnerPage from './components/BeginnerPage';
import PathSelectionPage from './components/PathSelectionPage';
import LearningPage from './components/LearningPage';
import HelpCenterPage from './components/HelpCenterPage';
import ApiDocsPage from './components/ApiDocsPage';
import SystemStatusPage from './components/SystemStatusPage';
import BlogPage from './components/BlogPage';
import { API_BASE_URL } from './config.js'; 

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
  const [activeCourse, setActiveCourse] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('Intermediate');
  const [registeredEmail, setRegisteredEmail] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

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

  // Scroll to top on every page/view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view, currentTool]);

  // Persist state to localStorage
  useEffect(() => {
    localStorage.setItem('talent_oasis_view', view);
  }, [view]);

  useEffect(() => {
    if (currentTool) {
      localStorage.setItem('talent_oasis_tool', currentTool);
    } else {
      localStorage.removeItem('talent_oasis_tool');
    }
  }, [currentTool]);

  const handleNavClick = (sectionId) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

if (view === 'dashboard') {
    return (
      <DashboardPage
        currentUser={currentUser}
        onLogout={() => { /* existing logout logic */ }}
        onBack={() => setView('home')}
        onProfileSettings={() => setView('profile_settings')}
        onNavigateTool={(toolId) => setCurrentTool(toolId)}
        onNavigateCourse={(course) => { setActiveCourse(course); setView('learning_page'); }}
        onNavigatePath={(level) => { 
          if (level === 'beginner') { setView('beginner'); } 
          else { setSelectedLevel(level); setView('path_selection'); }
        }}
      />
    );
  }

  if (view === 'profile_settings') {
    return (
      <ProfileSettingsPage
        currentUser={currentUser}
        onBack={() => setView('dashboard')}
      />
    );
  }

  if (view === 'signup') {
    return (
      <SignupPage 
        onBack={(v) => setView(v === 'dashboard' ? 'dashboard' : 'home')} 
        onLoginClick={() => setView('login')} 
        onRequireOTP={(email) => {          
          setRegisteredEmail(email);        
          setView('otp');                    
        }}
      />
    );
  }

  if (view === 'otp') {
    return (
      <OTPVerificationPage 
        email={registeredEmail}
        onBack={() => setView('signup')}
        onSuccess={() => setView('login')}
      />
    );
  }

  if (view === 'login') {
    return (
      <LoginPage 
        onBack={() => setView('home')} 
        onSignupClick={() => setView('signup')} 
        onLoginSuccess={(profileData) => {
          setCurrentUser(profileData); 
          setView('home');             
        }}
      />
    );
  }

  if (view === 'path_selection' && !currentUser) {
    alert("You need to sign in to view courses!");
    setView('login');
    return null; 
  }

  if (view === 'beginner' && !currentUser) {
    setView('login');
    return null;
  }

  if (view === 'learning_page' && activeCourse) {
    if (!currentUser) {
      setView('login');
      return null;
    }
    return (
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
        ) : (
          <>
            {/* Hero Section */}
            <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/Firefly_GeminiFlash (1).png"
                  className="w-full h-full object-cover"
                  alt="Hero Background"
                />
                <div className="absolute inset-0 bg-site-primary/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-site-bg/60 mix-blend-multiply"></div>
              </div>

              <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-20">
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 tracking-tight">
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
                
                <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                  Interactive courses, hands-on projects, and real-world applications. <br className="hidden md:block" />
                  Perplexity AI, Claude AI, ChatGPT, Gamma AI, and 50+ AI tools.
                </p>
                
                {/* REPLACED BUTTONS START HERE */}
                <div className="flex flex-wrap justify-center gap-6">
                  <button 
                    onClick={() => {
                      if (currentUser) {
                        setView('path_selection'); 
                      } else {
                        setView('signup');
                      }
                    }}
                    className="text-site-text font-bold py-4 px-12 bg-site-primary hover:bg-site-primary/80 transition-all cursor-pointer rounded-sm shadow-lg active:scale-95"
                  >
                    Start Learning Free
                  </button>

                  <button 
                    onClick={() => handleNavClick('courses')}
                    className="text-site-accent font-bold py-4 px-12 bg-site-bg/20 hover:bg-site-bg/40 border border-site-accent/30 transition-all cursor-pointer backdrop-blur-sm rounded-sm active:scale-95"
                  >
                    Browse Courses
                  </button>
                </div>
                {/* REPLACED BUTTONS END HERE */}

              </div>
            </section>

            {/* Popular AI Tools */}
            <section id="tools" className="py-32 ">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-20">
                  <h2 className="text-4xl font-bold mb-5 tracking-tight text-site-text">Popular AI Tools You'll Master</h2>
                  <p className="font-medium text-site-text/80">Get hands-on experience with industry-leading AI platforms</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <ToolCard
                    icon={MessageCircle}
                    title="ChatGPT"
                    description="Master prompt engineering and advanced conversations"
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
            <section id="courses" className="py-32 bg-site-primary/20">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-20">
                  <h2 className="text-4xl font-bold mb-5 tracking-tight text-site-text">Choose Your Learning Path</h2>
                  <p className="font-medium text-site-text/80">Structured courses designed for your skill level and goals</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
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
                    description="Master AI integration and build production-ready solutions."
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
            <section id="testimonials" className="py-32">
              <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="mb-20">
                  <h2 className="text-4xl font-bold mb-5 tracking-tight text-site-text">Loved by Learners Worldwide</h2>
                  <p className="font-medium text-site-text/80">Join thousands who've transformed their careers with AI</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
      </main>

      <Footer onNavigate={setView} />
    </div>
  );
};

export default App;