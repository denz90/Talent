import React from 'react';
import { Icon } from '@iconify/react';

const Footer = ({ onNavigate }) => {
  return (
  <footer className="px-5 sm:px-10 lg:px-24 py-10 lg:py-16 bg-site-primary text-site-text">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16 text-left">
          
          {/* Column 1: Branding & Intro (Takes up more space) */}
          <div className="lg:col-span-2">
            {/* Replace with an actual <img /> logo in production */}
            <h3 className="text-2xl font-bold text-site-text mb-4 tracking-tight">
              HawkmanLabs.
            </h3>
            <p className="text-[14px] text-site-text mb-6 max-w-xs leading-relaxed">
              Empowering global learners with cutting-edge courses, interactive tools, and industry-leading resources.
            </p>

            {/* Mock Social Icons */}
            <div className="flex gap-4 mt-12">
            <a href="https://www.facebook.com/profile.php?id=61580819033887" className="text-site-text hover:text-white/70 transition-colors">
              <Icon icon="mdi:facebook" width="24" height="24" />
            </a>
            <a href="https://x.com/talentoasis_?s=20" className="text-site-text hover:text-white/70 transition-colors">
              <Icon icon="mdi:twitter" width="24" height="24" />
            </a>
            <a href="https://www.instagram.com/talentoasis_official/?hl=en" className="text-site-text hover:text-white/70 transition-colors">
              <Icon icon="mdi:instagram" width="24" height="24" />
            </a>
            <a href="https://www.linkedin.com/company/talentoasisofficial/posts/?feedView=all" className="text-site-text hover:text-white/70 transition-colors">
              <Icon icon="mdi:linkedin" width="24" height="24" />
            </a>
            <a href="https://www.tiktok.com/@talentoasis_official?_r=1&_t=ZS-95ssDuHSG9g" className='text-site-text hover:text-white/70 transition-colors'>
              <Icon icon="ri:tiktok-fill" width="24" height="24"/>
            </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="font-bold text-site-text mb-6 uppercase tracking-widest text-[15px]">Platform</h4>
            <ul className="space-y-4 text-[14px] font-medium text-site-text">
              <li><a href="#" className="hover:text-site-text transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-site-text transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-site-text transition-colors">For Educators</a></li>
              <li><a href="#" className="hover:text-site-text transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Column 3: Learning */}
          <div>
            <h4 className="font-bold text-site-text mb-6 uppercase tracking-widest text-[15px]">Learning</h4>
            <ul className="space-y-4 text-[14px] font-medium text-site-text">
              <li><a href="#" className="hover:text-site-text transition-colors">Course Catalog</a></li>
              <li><a href="#" className="hover:text-site-text transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-site-text transition-colors">Student Stories</a></li>
              <li><a href="#" className="hover:text-site-text transition-colors">Community Forum</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-bold text-site-text mb-6 uppercase tracking-widest text-[15px]">Resources</h4>
            <ul className="space-y-4 text-[14px] font-medium text-site-text">
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('help_center'); }} className="hover:text-white transition-colors">Help Center</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('api_docs'); }} className="hover:text-white transition-colors">API Documentation</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('system_status'); }} className="hover:text-white transition-colors">System Status</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('blog'); }} className="hover:text-white transition-colors">Blog</button></li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h4 className="font-bold text-site-text mb-6 uppercase tracking-widest text-[15px]">Company</h4>
            <ul className="space-y-4 text-[14px] font-medium text-site-text">
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about_us'); }} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('careers'); }} className="hover:text-white transition-colors">Careers</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); }} className="hover:text-white transition-colors">Contact</button></li>
              <li><button onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('partners'); }} className="hover:text-white transition-colors">Partners</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 border-t border-site-text/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-site-text">
          <p>&copy; {new Date().getFullYear()} HawkmanLabs Inc. All rights reserved.</p>
          <div className="flex space-x-6 font-medium">
            <a href="#" className="hover:text-site-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-site-text transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-site-text transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;