import React from 'react';
import { GitBranch, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { GITHUB_STATS } from '../../data/portfolioData';

export default function GithubStatsSection() {
  const topRepos = [
    {
      name: "carecircle--ai",
      desc: "AI-powered blood support network for Thalassemia care, donor matching & transfusion prediction.",
      lang: "Python",
      langColor: "bg-blue-500",
      url: "https://github.com/eppetarun/carecircle--ai"
    },
    {
      name: "mypic",
      desc: "Biometric face recognition and event photo distribution platform with 128D vector comparison.",
      lang: "PHP / JS",
      langColor: "bg-purple-500",
      url: "https://github.com/eppetarun/mypic"
    },
    {
      name: "agri-path-samadhan",
      desc: "Intelligent agricultural advisory and crop diagnostic RAG platform built with Next.js & AI.",
      lang: "TypeScript",
      langColor: "bg-indigo-500",
      url: "https://github.com/eppetarun/agri-path-samadhan"
    },
    {
      name: "pushpa-spring",
      desc: "Enterprise backend REST API microservices engineered with Java, Maven & Spring Boot.",
      lang: "Java",
      langColor: "bg-amber-500",
      url: "https://github.com/eppetarun/pushpa-spring"
    },
    {
      name: "enigma-app",
      desc: "Modern cross-platform mobile application built with Flutter, Dart & Firebase cloud sync.",
      lang: "Dart",
      langColor: "bg-teal-500",
      url: "https://github.com/eppetarun/enigma-app"
    },
    {
      name: "college-result",
      desc: "Academic syllabus tracking, departmental grade analysis, and student performance portal.",
      lang: "PHP / SQL",
      langColor: "bg-emerald-500",
      url: "https://github.com/eppetarun/college-result"
    }
  ];

  return (
    <section id="github-stats" className="py-20 relative bg-slate-950/40 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono-tech text-blue-400 mb-3">
              <GitBranch className="w-3.5 h-3.5" />
              <span>OPEN SOURCE & REPOSITORIES</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              GitHub Activity & Repositories
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Consistently engineering and sharing open-source code across AI, full-stack web, and mobile systems.
            </p>
          </div>

          <a
            href={GITHUB_STATS.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-700 hover:border-slate-500 text-white transition-all hover:bg-slate-800 shrink-0 w-fit"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit @{GITHUB_STATS.username} on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* GitHub Top Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left mb-12">
          {topRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="pro-card p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-blue-400 transition-colors font-mono-tech">
                    <Code2 className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    <span>{repo.name}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {repo.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono-tech text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                  <span>{repo.lang}</span>
                </div>
                <span className="text-slate-500">Public Repository</span>
              </div>
            </a>
          ))}
        </div>

        {/* GitHub Metrics Banner */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-lg text-white">
                33+ Public Open-Source Repositories
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Full-stack implementations, mobile apps, AI agents, and microservices available on GitHub.
              </div>
            </div>
          </div>

          <a
            href={GITHUB_STATS.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all shrink-0"
          >
            <span>Explore All 33+ Repos</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
