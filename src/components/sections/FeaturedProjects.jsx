import React, { useState } from 'react';
import { ExternalLink, Eye, Layers, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PROJECTS } from '../../data/portfolioData';

export default function FeaturedProjects({ onSelectProject }) {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'AI & MACHINE LEARNING', 'FULL-STACK WEB', 'MOBILE & CLOUD', 'ENTERPRISE SYSTEMS'];

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'ALL') return true;
    if (filter === 'AI & MACHINE LEARNING') return project.category.includes('AI') || project.category.includes('Vision');
    if (filter === 'FULL-STACK WEB') return project.category.includes('Full-Stack') || project.category.includes('Web');
    if (filter === 'MOBILE & CLOUD') return project.category.includes('Mobile') || project.tags.includes('Flutter') || project.tags.includes('Firebase');
    if (filter === 'ENTERPRISE SYSTEMS') return project.category.includes('Enterprise') || project.tags.includes('Spring Boot');
    return true;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono-tech text-blue-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>GITHUB CODEBASES & ARCHITECTURES</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Real-world systems with open-source repositories on GitHub, featuring live demonstrations, 
              scalable architectures, and measurable engineering impact.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {filteredProjects.map((project) => {
            const hasDistinctDemo = project.liveUrl && !project.liveUrl.includes('github.com');

            return (
              <div
                key={project.id}
                className="pro-card rounded-2xl overflow-hidden bg-slate-900/60 border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  {/* Media Thumbnail */}
                  <div 
                    className="relative w-full aspect-[16/9] overflow-hidden cursor-pointer bg-slate-950"
                    onClick={() => onSelectProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />

                    {/* Category pill */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[11px] font-mono-tech text-blue-300">
                      {project.category}
                    </div>

                    {/* Quick Inspect Pill */}
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 text-[11px] font-mono-tech flex items-center gap-1.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </div>

                    {/* Metrics pill */}
                    <div className="absolute bottom-3 left-4 right-4 z-10 text-[11px] font-mono-tech text-slate-300 truncate">
                      ⚡ {project.metrics}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="font-heading font-bold text-xl text-white hover:text-blue-400 transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{project.title}</span>
                      <span className="text-xs font-mono-tech text-slate-500 font-normal">{project.year}</span>
                    </h3>

                    <div className="text-xs font-mono-tech text-blue-400 mt-1">
                      {project.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/50 text-[11px] font-mono-tech text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub Code</span>
                    </a>

                    {hasDistinctDemo && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-blue-600/20 text-blue-300 hover:bg-blue-600 hover:text-white border border-blue-500/30 transition-all"
                        title="Open Live Deployment"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
