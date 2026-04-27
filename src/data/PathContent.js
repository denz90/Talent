import { 
  Pencil, 
  Palette, 
  Code2, 
  Video 
} from 'lucide-react';

export const PATHS_CONTENT = {
  'AI for Educators': {
    icon: Pencil,
    color: '#a855f7',
    modules: [
      {
        id: 1,
        title: 'Module 1: Planning',
        days: [
          { id: 1, title: 'Day 1: MagicSchool AI', duration: '15 min read', color: 'text-brand-primary', bg: 'bg-blue-50/50' },
          { id: 2, title: 'Day 2: Eduaide.AI', duration: '10 min read', color: 'text-emerald-600', bg: 'bg-emerald-50/50' }
        ]
      },
      {
        id: 2,
        title: 'Module 2: Assessment',
        days: [
          { id: 3, title: 'Day 3: NotebookLM', duration: '20 min read', color: 'text-purple-600', bg: 'bg-purple-50/50' },
          { id: 4, title: 'Day 4: Diffit', duration: '25 min read', color: 'text-orange-600', bg: 'bg-orange-50/50' }
        ]
      },
      {
        id: 3,
        title: 'Module 3: Creation',
        days: [
          { id: 5, title: 'Day 5: Google Gemini', duration: '30 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' },
          { id: 6, title: 'Day 6: Grok AI', duration: '20 min read', color: 'text-purple-600', bg: 'bg-purple-50/50' }
        ]
      },
      {
        id: 4,
        title: 'Module 4: Final Mastery',
        days: [
          { id: 7, title: 'Day 7: Suno AI', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' },
          { id: 8, title: 'Day 8: Brisk Teaching AI', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 5,
        title: 'Module 5: Final Mastery',
        days: [
          { id: 9, title: 'Day 9: Snorkl AI', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      }
    ]
  },
  'AI for Developers': {
    icon: Code2,
    color: '#2563eb',
    modules: [
      {
        id: 1,
        title: 'Module 1: AI Coding Assistants',
        days: [
          { id: 1, title: 'Day 1: GitHub Copilot & Cursor', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' },
          { id: 2, title: 'Day 2: Claude Dev & Anthropic', duration: '15 min read', color: 'text-orange-600', bg: 'bg-orange-50/50' }
        ]
      },
      {
        id: 2,
        title: 'Module 2: Rapid Prototyping',
        days: [
          { id: 3, title: 'Day 3: Vercel V0 & UI Generation', duration: '20 min read', color: 'text-slate-900', bg: 'bg-slate-50/50' },
          { id: 4, title: 'Day 4: Replit Agent & Fullstack', duration: '25 min read', color: 'text-red-600', bg: 'bg-red-50/50' }
        ]
      },
      {
        id: 3,
        title: 'Module 3: Backend & Data',
        days: [
          { id: 5, title: 'Day 5: Supabase AI & DB Design', duration: '30 min read', color: 'text-emerald-600', bg: 'bg-emerald-50/50' },
          { id: 6, title: 'Day 6: Pinecone & Vector DBs', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 4,
        title: 'Module 4: Advanced AI Apps',
        days: [
          { id: 7, title: 'Day 7: LangChain & Agents', duration: '25 min read', color: 'text-purple-600', bg: 'bg-purple-50/50' },
          { id: 8, title: 'Day 8: OpenAI Function Calling', duration: '20 min read', color: 'text-green-600', bg: 'bg-green-50/50' }
        ]
      },
      {
        id: 5,
        title: 'Module 5: Deployment',
        days: [
          { id: 9, title: 'Day 9: AI Monitoring & Analytics', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      }
    ]
  },
  'AI for Designers': {
    icon: Palette,
    color: '#ec4899',
    modules: [
      {
        id: 1,
        title: 'Module 1: Visual Generation',
        days: [
          { id: 1, title: 'Day 1: Midjourney Mastery', duration: '20 min read', color: 'text-pink-600', bg: 'bg-pink-50/50' },
          { id: 2, title: 'Day 2: Adobe Firefly & Photoshop', duration: '15 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 2,
        title: 'Module 2: Design Systems',
        days: [
          { id: 3, title: 'Day 3: Canva Magic Studio', duration: '20 min read', color: 'text-purple-600', bg: 'bg-purple-50/50' },
          { id: 4, title: 'Day 4: Figma AI & UI Design', duration: '25 min read', color: 'text-blue-500', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 3,
        title: 'Module 3: Motion & 3D',
        days: [
          { id: 5, title: 'Day 5: Runway & Video Gen', duration: '30 min read', color: 'text-slate-900', bg: 'bg-slate-50/50' },
          { id: 6, title: 'Day 6: Spline AI & 3D Design', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 4,
        title: 'Module 4: Web & Layout',
        days: [
          { id: 7, title: 'Day 7: Framer AI Site Building', duration: '25 min read', color: 'text-indigo-600', bg: 'bg-indigo-50/50' },
          { id: 8, title: 'Day 8: Luma AI & 3D Capture', duration: '20 min read', color: 'text-orange-600', bg: 'bg-orange-50/50' }
        ]
      },
      {
        id: 5,
        title: 'Module 5: Advanced workflows',
        days: [
          { id: 9, title: 'Day 9: Stable Diffusion Control', duration: '20 min read', color: 'text-pink-600', bg: 'bg-pink-50/50' }
        ]
      }
    ]
  },
  'AI for Content Creators': {
    icon: Video,
    color: '#16a34a',
    modules: [
      {
        id: 1,
        title: 'Module 1: Text & Copy',
        days: [
          { id: 1, title: 'Day 1: Jasper & Copywriting', duration: '20 min read', color: 'text-green-600', bg: 'bg-green-50/50' },
          { id: 2, title: 'Day 2: Notion AI & Productivity', duration: '15 min read', color: 'text-slate-900', bg: 'bg-slate-50/50' }
        ]
      },
      {
        id: 2,
        title: 'Module 2: Video Production',
        days: [
          { id: 3, title: 'Day 3: Descript AI Editing', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' },
          { id: 4, title: 'Day 4: HeyGen & AI Avatars', duration: '25 min read', color: 'text-purple-600', bg: 'bg-purple-50/50' }
        ]
      },
      {
        id: 3,
        title: 'Module 3: Audio & Social',
        days: [
          { id: 5, title: 'Day 5: ElevenLabs Voice Clone', duration: '30 min read', color: 'text-orange-600', bg: 'bg-orange-50/50' },
          { id: 6, title: 'Day 6: CapCut AI for Social', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 4,
        title: 'Module 4: Podcasts & Music',
        days: [
          { id: 7, title: 'Day 7: Riverside & Podcast AI', duration: '25 min read', color: 'text-red-600', bg: 'bg-red-50/50' },
          { id: 8, title: 'Day 8: Suno AI & Music Gen', duration: '20 min read', color: 'text-blue-600', bg: 'bg-blue-50/50' }
        ]
      },
      {
        id: 5,
        title: 'Module 5: Automation',
        days: [
          { id: 9, title: 'Day 9: InVideo Automated Video', duration: '20 min read', color: 'text-green-600', bg: 'bg-green-50/50' }
        ]
      }
    ]
  }
};
