import React from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { TIMELINE } from '../../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono-tech text-blue-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & ACADEMIC PATH</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Academic milestones, technical specialization, and open-source software engineering history.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto text-left">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-slate-800" />

          <div className="space-y-8">
            {TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isEducation = item.role.includes('B.Tech') || item.role.includes('Secondary');

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center z-10 shadow-md shadow-blue-500/20">
                    {isEducation ? (
                      <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                    ) : (
                      <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="pro-card p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono-tech text-blue-400 font-semibold flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{item.year}</span>
                        </span>
                        <span className="text-[11px] font-medium text-slate-300 bg-slate-800 px-2.5 py-0.5 rounded-md border border-slate-700/60 truncate">
                          {item.company}
                        </span>
                      </div>

                      <h3 className="font-heading font-semibold text-base sm:text-lg text-white mb-2">
                        {item.role}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
