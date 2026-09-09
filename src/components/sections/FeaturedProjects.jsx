import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Eye, Layers } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PROJECTS } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export default function FeaturedProjects({ onSelectProject }) {
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', '3D / WEBGL', 'AI / CLOUD', 'MEDIA ENGINE'];

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'ALL') return true;
    if (filter === '3D / WEBGL') return project.tags.includes('Three.js') || project.tags.includes('WebGL');
    if (filter === 'AI / CLOUD') return project.tags.includes('TypeScript') || project.tags.includes('Docker');
    if (filter === 'MEDIA ENGINE') return project.tags.includes('WebGL2') || project.tags.includes('FFmpeg WASM');
    return true;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-tech text-cyan-400 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>FLAGSHIP CREATIONS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
              FEATURED WORKS
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-sans mt-2 max-w-xl">
              Immersive 3D environments, real-time spatial web applications, and mission-critical cloud platforms.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setFilter(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-1.5 rounded-full text-xs font-mono-tech transition-all ${
                  filter === cat
                    ? 'bg-cyan-400 text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'glass-panel text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onMouseEnter={() => sound.playHover()}
              className="group relative glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] flex flex-col"
            >
              {/* Media Thumbnail with Realistic Image */}
              <div 
                className="relative w-full aspect-[16/10] overflow-hidden cursor-pointer bg-black/50"
                onClick={() => {
                  sound.playClick();
                  onSelectProject(project);
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-transparent opacity-80" />

                {/* Quick Inspection Floating Pill */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full glass-panel border border-white/20 text-white text-xs font-mono-tech flex items-center gap-1.5 group-hover:bg-cyan-500 group-hover:text-black group-hover:border-transparent transition-all">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Case</span>
                </div>

                {/* Performance Metric Pill */}
                <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono-tech text-cyan-300">
                  {project.metrics}
                </div>
              </div>

              {/* Project Card Meta Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono-tech text-purple-400 font-semibold tracking-wider">
                      {project.year} • {project.subtitle}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono-tech text-gray-300 bg-white/5 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => {
                        sound.playClick();
                        onSelectProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                    >
                      <span>Deep Dive Study</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.playClick();
                        }}
                        className="p-2 rounded-full glass-panel hover:text-cyan-400 text-gray-400 transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          sound.playClick();
                        }}
                        className="p-2 rounded-full glass-panel hover:text-cyan-400 text-gray-400 transition-colors"
                        title="Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
