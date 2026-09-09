import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Terminal as TerminalIcon, ShieldCheck, Clock, MapPin, Sparkles, Download } from 'lucide-react';
import HeroScene from '../canvas/HeroScene';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export default function HeroSection({ onOpenTerminal }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [time, setTime] = useState('');

  // Role rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Real-time clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background Cyber Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Telemetry HUD Status Bar */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 text-xs font-mono-tech">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/30 text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-gray-400">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>SYS_TIME: {time || '12:00:00'} IST</span>
          </div>

          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CORE_LATENCY: 12ms</span>
          </div>
        </div>

        {/* Hero Main Grid: Text + 3D Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono-tech text-gray-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>THE DIGITAL FRONTIER OF TARUN MEDIA</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]">
              CRAFTING <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-200 to-purple-400 bg-clip-text text-transparent glow-cyan">
                SPATIAL 3D
              </span> <br />
              DIMENSIONS.
            </h1>

            {/* Dynamic Role Rotator */}
            <div className="h-10 flex items-center font-mono-tech text-base sm:text-xl text-gray-300">
              <span className="text-cyan-400 mr-2 font-bold">&gt;</span>
              <span>I am a</span>
              <span className="ml-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-400">
                {PERSONAL_INFO.roles[roleIndex]}
              </span>
              <span className="animate-pulse ml-1 text-cyan-400">_</span>
            </div>

            <p className="text-sm sm:text-base text-gray-400 max-w-xl leading-relaxed font-sans">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-mono-tech text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all hover:scale-105"
              >
                <span>EXPLORE WORKS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  sound.playClick();
                  if (onOpenTerminal) onOpenTerminal();
                }}
                onMouseEnter={() => sound.playHover()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-tech text-xs sm:text-sm font-medium text-gray-200 glass-panel hover:glass-panel-glow transition-all hover:scale-105"
              >
                <TerminalIcon className="w-4 h-4 text-cyan-400" />
                <span>TERMINAL CLI</span>
              </button>

              <a
                href="#contact"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full font-mono-tech text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                <span>DIRECT INQUIRY</span>
              </a>
            </div>

            {/* Live Stats Row */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-white">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono-tech text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Holographic Cyber-Core Canvas */}
          <div className="lg:col-span-5 relative w-full h-[400px] sm:h-[500px] lg:h-[620px]">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
