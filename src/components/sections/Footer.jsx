import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070a12] pt-12 pb-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-heading font-bold text-white text-xs">
                TE
              </div>
              <span className="font-heading font-bold text-base text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono-tech text-slate-500">
                @{PERSONAL_INFO.handle}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-md leading-relaxed">
              Undergraduate Computer Science Engineer @ JNTU Hyderabad. Designing and deploying production web systems, AI architectures, and open-source software.
            </p>
          </div>

          {/* Navigation Anchors */}
          <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#github-stats" className="hover:text-white transition-colors">GitHub Activity</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} (@{PERSONAL_INFO.handle}). Built with React, Vite & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={PERSONAL_INFO.socials.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/{PERSONAL_INFO.handle}</span>
            </a>
            <span>•</span>
            <a 
              href={PERSONAL_INFO.socials.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
