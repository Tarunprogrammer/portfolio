import React, { useState } from 'react';
import { Cpu, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].id);

  const currentCategory = SKILL_CATEGORIES.find(c => c.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/40 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono-tech text-blue-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCIES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Categorized across programming languages, full-stack frameworks, production AI/RAG architectures, 
            cloud systems, and core computer science fundamentals.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800/80 pb-4">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === cat.id
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="mb-6 text-left">
          <h3 className="font-heading font-semibold text-lg text-white">
            {currentCategory.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {currentCategory.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
          {currentCategory.skills.map((skill, idx) => (
            <div
              key={idx}
              className="pro-card p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-semibold text-base text-white">
                    {skill.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-mono-tech">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mt-1">
                  {skill.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] font-mono-tech text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Production & GitHub Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
