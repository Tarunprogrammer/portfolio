import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import SkillsConstellation from '../canvas/SkillsConstellation';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);

  const currentCategory = SKILL_CATEGORIES.find(c => c.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono-tech text-purple-300 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>ARSENAL & COMPETENCIES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            ENGINEERED WITH PRECISION
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans mt-3">
            Harnessing cutting-edge 3D graphics hardware, modern compiler toolchains, and scalable cloud architectures.
          </p>
        </div>

        {/* 2-Column Grid: 3D Constellation + Interactive Skill Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Interactive Constellation Scene */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <SkillsConstellation />
          </div>

          {/* Right Column: Tabbed Capabilities & Meters */}
          <div className="lg:col-span-6 space-y-6">
            {/* Category Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveTab(cat.id);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`p-3 rounded-2xl text-xs font-mono-tech transition-all flex flex-col items-center text-center gap-1 border ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-b from-cyan-500/20 to-purple-500/20 border-cyan-500/50 text-white shadow-[0_0_20px_rgba(0,240,255,0.2)]'
                      : 'glass-panel border-white/5 text-gray-400 hover:text-gray-200 hover:border-white/10'
                  }`}
                >
                  <span className="font-bold">{cat.title.split(' ')[0]}</span>
                  <span className="text-[10px] text-gray-500">{cat.title.split(' ').slice(1).join(' ')}</span>
                </button>
              ))}
            </div>

            {/* Active Category Details Panel */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <h3 className="font-heading text-xl font-bold text-white mb-1">
                  {currentCategory.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-sans">
                  {currentCategory.description}
                </p>
              </div>

              {/* Skills Progress Meters */}
              <div className="space-y-4">
                {currentCategory.skills.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs font-mono-tech">
                      <span className="text-gray-200 font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {skill.name}
                      </span>
                      <span className="text-cyan-400">{skill.level} ({skill.pct}%)</span>
                    </div>

                    {/* Glowing Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden p-[1px] border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(0,240,255,0.4)] transition-all duration-700"
                        style={{ width: `${skill.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
