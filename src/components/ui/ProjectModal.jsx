import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const hasDistinctDemo = project.liveUrl && !project.liveUrl.includes('github.com');

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 bg-slate-900 border border-slate-800 text-left shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-3 py-1 rounded-lg text-xs font-mono-tech text-blue-400 bg-blue-500/10 border border-blue-500/20">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-lg text-xs font-mono-tech text-slate-400 bg-slate-800 border border-slate-700/60">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-1">
          {project.title}
        </h2>
        <p className="text-sm font-mono-tech text-blue-400 mb-6">
          {project.subtitle}
        </p>

        {/* Image / Thumbnail */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-800 bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Narrative & Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-400" />
              <span>System & Architectural Overview</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Key Capabilities & Implementations</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-xs text-slate-300 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-xs font-mono-tech text-slate-400 uppercase tracking-wider mb-2">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono-tech text-slate-300 bg-slate-800 border border-slate-700/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-slate-800">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>

            {hasDistinctDemo && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Deployment</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
