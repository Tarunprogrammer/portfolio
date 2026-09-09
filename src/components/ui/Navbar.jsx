import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal as TerminalIcon, Sparkles, Menu, X } from 'lucide-react';
import { sound } from '../../utils/audio';

export default function Navbar({ onOpenTerminal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      sound.playSuccess();
    }
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#projects' },
    { label: 'Capabilities', href: '#skills' },
    { label: '3D Gallery', href: '#gallery' },
    { label: 'Milestones', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-3' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="glass-panel px-4 sm:px-6 py-2.5 rounded-full flex items-center justify-between border border-white/10 shadow-2xl backdrop-blur-xl">
          {/* Brand Identity */}
          <a
            href="#"
            onClick={() => sound.playClick()}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-fuchsia-500 p-[1px] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#05050f] rounded-[11px] flex items-center justify-center font-heading font-black text-cyan-400 text-sm tracking-tighter">
                ET
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm sm:text-base tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                EPPE TARUN
              </span>
              <span className="text-[10px] font-mono-tech text-cyan-400/80 tracking-widest uppercase">
                TARUN MEDIA
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-mono-tech text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Hub */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle Button */}
            <button
              onClick={handleAudioToggle}
              onMouseEnter={() => sound.playHover()}
              title={isMuted ? "Activate Cinematic Audio" : "Mute Soundscape"}
              className={`p-2 rounded-full text-xs transition-all duration-300 border flex items-center gap-1.5 ${
                isMuted
                  ? 'border-gray-700 text-gray-400 hover:text-gray-200 hover:border-gray-500 bg-white/5'
                  : 'border-cyan-500/50 text-cyan-300 bg-cyan-500/10 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
              <span className="hidden lg:inline text-[10px] font-mono-tech uppercase">
                {isMuted ? "Audio Off" : "Audio On"}
              </span>
            </button>

            {/* Quick Terminal Trigger */}
            <button
              onClick={() => {
                sound.playClick();
                if (onOpenTerminal) onOpenTerminal();
              }}
              onMouseEnter={() => sound.playHover()}
              className="p-2 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all text-xs flex items-center gap-1.5"
              title="Open Cyber Terminal"
            >
              <TerminalIcon className="w-4 h-4" />
              <span className="hidden xl:inline text-[10px] font-mono-tech">CLI</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-mono-tech font-medium text-black bg-cyan-400 hover:bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              <span>Let's Build</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mt-2 p-4 glass-panel-glow rounded-2xl flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 rounded-lg text-sm font-mono-tech text-gray-200 hover:bg-white/10 hover:text-cyan-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
