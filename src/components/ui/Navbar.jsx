import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'GitHub Activity', href: '#github-stats' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-heading font-bold text-white text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              TE
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono-tech text-slate-400">
                @{PERSONAL_INFO.handle}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: GitHub Profile & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white transition-all hover:bg-slate-800"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <span className="px-1.5 py-0.5 rounded-md bg-blue-500/20 text-blue-300 text-[10px] font-mono-tech">
                33 Repos
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all hover:scale-102"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl backdrop-blur-xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-slate-800 text-white"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Visit GitHub Profile (33 Repositories)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 text-white"
              >
                <span>Contact for SWE Opportunities</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
