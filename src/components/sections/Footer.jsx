import { ArrowUp, Terminal as TerminalIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export default function Footer({ onOpenTerminal }) {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#020206] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center font-heading font-black text-black text-xs">
                ET
              </div>
              <span className="font-heading font-bold text-lg text-white tracking-wider">
                EPPE TARUN
              </span>
            </div>
            <p className="text-xs text-gray-400 font-sans max-w-sm">
              Pushing the boundaries of spatial 3D web applications, generative systems, and cinematic production for the next era of the internet.
            </p>
          </div>

          {/* Nav Anchors */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-mono-tech text-gray-400">
            <a href="#about" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">Works</a>
            <a href="#skills" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">Arsenal</a>
            <a href="#gallery" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">3D Gallery</a>
            <a href="#timeline" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">Milestones</a>
            <a href="#contact" onClick={() => sound.playClick()} className="hover:text-cyan-400 transition-colors">Contact</a>
            {onOpenTerminal && (
              <button 
                onClick={() => { sound.playClick(); onOpenTerminal(); }} 
                className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-400/80"
              >
                <TerminalIcon className="w-3 h-3" />
                <span>Terminal</span>
              </button>
            )}
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              onMouseEnter={() => sound.playHover()}
              className="p-3 rounded-2xl glass-panel hover:glass-panel-glow text-gray-300 hover:text-cyan-400 transition-all border border-white/10 group"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved. Built under {PERSONAL_INFO.alias}.
          </div>

          <div className="flex items-center gap-2 text-cyan-400/70">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>ALL CORE SYSTEMS OPERATIONAL (100%)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
