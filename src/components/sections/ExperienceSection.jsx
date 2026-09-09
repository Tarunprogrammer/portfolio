import React from 'react';
import { Milestone, Compass, Award } from 'lucide-react';
import { TIMELINE } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export default function ExperienceSection() {
  return (
    <section id="timeline" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-tech text-cyan-400 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>TRAJECTORY & IMPACT</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            CAREER CHRONOLOGY
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans mt-3">
            Milestones of creative leadership, high-scale software engineering, and technical artistry.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-40" />

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Central Holographic Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full glass-panel border border-cyan-400/50 flex items-center justify-center z-10 group-hover:scale-125 group-hover:border-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 group-hover:border-cyan-500/30 group-hover:glass-panel-glow transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono-tech text-cyan-400 font-bold tracking-wider">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-mono-tech text-purple-300 bg-purple-950/40 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                          {item.company}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-2">
                        {item.role}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
