import React from 'react';
import { ArrowUpRight, MapPin, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Recruiting Status Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Seeking Software Engineering & AI Roles • 2026/2027</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">{PERSONAL_INFO.name}</span>.
              <br />
              <span className="text-3xl sm:text-5xl font-semibold text-slate-300">
                Software Engineer & AI Systems Builder.
              </span>
            </h1>

            {/* Sub-headline / Elevator Pitch */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              B.Tech Computer Science and Engineering student at <strong>JNTU Hyderabad</strong> (2023–2027). 
              Creator of <strong>33+ open-source GitHub repositories</strong> spanning scalable full-stack web platforms, 
              biometric computer vision, vector RAG knowledge engines, and enterprise Spring Boot microservices.
            </p>

            {/* Key Engineering Focus Pillars */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono-tech text-slate-300">
              <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">Python & FastAPI</span>
              <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">React & Next.js</span>
              <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">Java & Spring Boot</span>
              <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">Vector RAG & Pinecone</span>
              <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">Flutter Mobile</span>
              <span className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60">MySQL & PostgreSQL</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-all hover:scale-102"
              >
                <span>View Production Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile (@{PERSONAL_INFO.handle})</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white transition-colors"
              >
                <span>Contact Details</span>
              </a>
            </div>

            {/* Quick Metadata Info */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>B.Tech CSE @ JNTUH (2023–2027)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open for Summer & Full-Time SWE Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: GitHub Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Card */}
              <div className="pro-card rounded-3xl p-6 bg-slate-900/80 border border-slate-800 shadow-2xl relative">
                
                {/* Official GitHub Avatar */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-slate-800 group">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={`${PERSONAL_INFO.name} - GitHub Profile Picture`}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                  />
                  
                  {/* Verified GitHub Chip */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[11px] font-mono-tech text-blue-300 flex items-center gap-1.5">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>github.com/{PERSONAL_INFO.handle}</span>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 text-[11px] font-mono-tech text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Active Developer</span>
                  </div>
                </div>

                {/* Developer Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white">
                        {PERSONAL_INFO.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono-tech">
                        @{PERSONAL_INFO.handle} • JNTU Hyderabad
                      </p>
                    </div>

                    <a
                      href={PERSONAL_INFO.socials.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
                      title="Open GitHub"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Quick Stat Badges */}
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="text-lg font-bold text-white font-mono-tech">33+</div>
                      <div className="text-[11px] text-slate-400">Public Repositories</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="text-lg font-bold text-white font-mono-tech">8+</div>
                      <div className="text-[11px] text-slate-400">Deployed Platforms</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] text-slate-400 uppercase font-mono-tech tracking-wider mb-1.5">
                      Primary Specializations
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Full-Stack Web Architecture, Distributed REST APIs, Applied AI & Vector RAG, and Computer Vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
