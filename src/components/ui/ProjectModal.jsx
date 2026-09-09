import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Activity, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { sound } from '../../utils/audio';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        sound.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel-glow rounded-3xl p-6 sm:p-8 border border-cyan-500/30 text-left shadow-[0_0_50px_rgba(0,240,255,0.15)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono-tech text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
            {project.year} PRODUCTION
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono-tech text-purple-300 bg-purple-950/60 border border-purple-500/30 flex items-center gap-1">
            <Activity className="w-3.5 h-3.5" />
            {project.metrics}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-wide mb-2">
          {project.title}
        </h2>
        <p className="text-sm sm:text-base font-mono-tech text-cyan-400/90 mb-6">
          {project.subtitle}
        </p>

        {/* Cinematic Media Showcase */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        {/* Architectural Narrative */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-mono-tech text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Architectural Overview
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-xs font-mono-tech text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-400" />
              Core Capabilities & Innovations
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Arsenal Tags */}
          <div>
            <h3 className="text-xs font-mono-tech text-gray-400 uppercase tracking-widest mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono-tech text-gray-200 bg-white/5 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Links */}
          <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-mono-tech text-xs sm:text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              <span>Launch Live System</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-mono-tech text-xs sm:text-sm font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
