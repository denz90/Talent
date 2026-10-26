import React from 'react';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
    <path d="M16 8.245V15.5a6.5 6.5 0 1 1-5-6.326v3.163a3.5 3.5 0 1 0 2 3.163V2h3a5 5 0 0 0 5 5v3a7.97 7.97 0 0 1-5-1.755" />
  </svg>
);

const Footer = ({ onNavigate }) => {
  return (
  <footer className="px-4 sm:px-8 lg:px-24 py-8 sm:py-10 lg:py-16 bg-site-primary text-site-text2 content-auto">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16 text-left">
          
          {/* Column 1: Branding & Intro (Takes up more space) */}
          <div className="col-span-2">
            {/* Replace with an actual <img /> logo in production */}
            <h3 className="text-2xl font-bold text-site-text2 mb-4 tracking-tight">
              Talent Oasis.
            </h3>
            <p className="text-[14px] text-site-text2 mb-6 max-w-xs leading-relaxed">
              Empowering global learners with cutting-edge courses, interactive tools, and industry-leading resources.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 mt-6 sm:mt-10">
            <a href="https://www.facebook.com/profile.php?id=61580819033887" aria-label="Facebook" className="text-site-text2 hover:opacity-70 transition-opacity">
              <FacebookIcon />
            </a>
            <a href="https://x.com/talentoasis_?s=20" aria-label="X (Twitter)" className="text-site-text2 hover:opacity-70 transition-opacity">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/talentoasis_official/?hl=en" aria-label="Instagram" className="text-site-text2 hover:opacity-70 transition-opacity">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/talentoasisofficial/posts/?feedView=all" aria-label="LinkedIn" className="text-site-text2 hover:opacity-70 transition-opacity">
              <LinkedInIcon />
            </a>
            <a href="https://www.tiktok.com/@talentoasis_official?_r=1&_t=ZS-95ssDuHSG9g" aria-label="TikTok" className="text-site-text2 hover:opacity-70 transition-opacity">
              <TikTokIcon />
            </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="font-bold text-site-text2 mb-6 uppercase tracking-widest text-[15px]">Platform</h4>
            <ul className="space-y-4 text-[14px] font-medium text-site-text2">
              <li><a href="#" className="hover:opacity-75 transition-opacity">Features</a></li>
              <li><a href="#" className="hover:opacity-75 transition-opacity">Pricing</a></li>
              <li><a href="#" className="hover:opacity-75 transition-opacity">For Educators</a></li>
              <li><a href="#" className="hover:opacity-75 transition-opacity">Enterprise</a></li>
            </ul>
          </div>

          {/* Column 3: Learning */}
          <div>
            <h4 className="font-bold text-site-text2 mb-6 uppercase tracking-widest text-[15px]">Learning</h4>
            <ul className="space-y-4 text-[14px] font-medium text-site-text2">
              <li><a href="#" className="hover:opacity-75 transition-opacity">Course Catalog</a></li>
              <li><a href="#" className="hover:opacity-75 transition-opacity">Certifications</a></li>
              <li><a href="#" className="hover:opacity-75 transition-opacity">Student Stories</a></li>
              <li><a href="#" className="hover:opacity-75 transition-opacity">Community Forum</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-bold text-site-text2 mb-6 uppercase tracking-widest text-[15px]">Resources</h4>
            <ul className="space-y-4 text-[14px] font-medium text-site-text2">
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('faq'); }} className="hover:opacity-75 transition-opacity">FAQ</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('help_center'); }} className="hover:opacity-75 transition-opacity">Help Center</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('api_docs'); }} className="hover:opacity-75 transition-opacity">API Documentation</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('system_status'); }} className="hover:text-white transition-colors">System Status</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('blog'); }} className="hover:opacity-75 transition-opacity">Blog</button></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h4 className="font-bold text-site-text2 mb-6 uppercase tracking-widest text-[15px]">Company</h4>
            <ul className="space-y-4 text-[14px] font-medium text-site-text2">
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about_us'); }} className="hover:opacity-75 transition-opacity">About Us</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('careers'); }} className="hover:opacity-75 transition-opacity">Careers</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); }} className="hover:opacity-75 transition-opacity">Contact</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('partners'); }} className="hover:opacity-75 transition-opacity">Partners</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 border-t border-site-text2/20 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-site-text2">
          <p>&copy; {new Date().getFullYear()} HawkmanLabs Inc. All rights reserved.</p>
          <div className="flex space-x-6 font-medium">
            <a href="#" className="hover:opacity-75 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-75 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-75 transition-opacity">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;