import React, { useState } from 'react';
import { UserCheck, Sparkles, Shield, Scan, Code, Globe, Award } from 'lucide-react';
import { sound } from '../../utils/audio';

export default function AboutSection() {
  const [avatarMode, setAvatarMode] = useState('cyber'); // 'cyber' or 'authentic'

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Holographic Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Outer Glowing Cyber Border */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-purple-500/20 to-transparent shadow-[0_0_50px_rgba(0,240,255,0.2)]">
                <div className="relative rounded-[22px] overflow-hidden glass-panel bg-[#050510]">
                  {/* Photo Container */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden group">
                    <img
                      src={avatarMode === 'cyber' ? '/images/eppe_tarun_cyber.jpg' : '/images/eppe_tarun.jpg'}
                      alt="Eppe Tarun - Creative Technologist"
                      className="w-full h-full object-cover object-top transition-all duration-700 filter brightness-95 group-hover:scale-105 group-hover:brightness-105"
                    />

                    {/* Scanline & HUD Overlay */}
                    <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-transparent opacity-80" />

                    {/* HUD Telemetry Badges */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-500/30 text-[11px] font-mono-tech text-cyan-300">
                      <Scan className="w-3.5 h-3.5 animate-pulse" />
                      <span>BIOMETRIC SCAN: MATCH 100%</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="p-3 rounded-2xl glass-panel border border-white/10 backdrop-blur-xl flex items-center justify-between">
                        <div>
                          <div className="text-[10px] font-mono-tech text-gray-400">IDENTITY SPEC</div>
                          <div className="font-heading font-bold text-white text-base">EPPE TARUN</div>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono-tech uppercase">
                          {avatarMode === 'cyber' ? 'CYBER AVATAR' : 'AUTHENTIC PHOTO'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mode Switcher Buttons */}
              <div className="mt-4 flex items-center justify-center gap-2 p-1.5 rounded-full glass-panel border border-white/10 w-fit mx-auto">
                <button
                  onClick={() => {
                    sound.playClick();
                    setAvatarMode('cyber');
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono-tech transition-all ${
                    avatarMode === 'cyber'
                      ? 'bg-cyan-400 text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  ⚡ Cinematic 3D Avatar
                </button>

                <button
                  onClick={() => {
                    sound.playClick();
                    setAvatarMode('authentic');
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono-tech transition-all ${
                    avatarMode === 'authentic'
                      ? 'bg-cyan-400 text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  👤 Real Identity
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Manifesto */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-tech text-cyan-400">
              <UserCheck className="w-3.5 h-3.5" />
              <span>THE ENGINEER & CREATOR BEHIND TARUN MEDIA</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              MEET <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent glow-cyan">EPPE TARUN</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              I am a <strong>Computer Science Engineer & Full-Stack AI Developer</strong> pursuing my B.Tech at <strong>JNTUH</strong> (DRK Institute of Science and Technology, Hyderabad). Through <strong>Tarun Media</strong>, I bridge the divide between cutting-edge computational intelligence—such as biometric face recognition and vector RAG architectures—and production-grade, highly engaging digital applications.
            </p>

            {/* Philosophy Callout Quote */}
            <div className="p-6 rounded-2xl glass-panel-glow border-l-4 border-cyan-400 space-y-2">
              <div className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Engineering Philosophy
              </div>
              <blockquote className="text-sm sm:text-base text-gray-200 italic font-sans leading-relaxed">
                "Real engineering isn't just about writing code; it is about deploying intelligent, verified systems that solve tangible problems—from AI facial matching to resilient campus platforms—with speed, precision, and elegance."
              </blockquote>
            </div>

            {/* Core Competency Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">Full-Stack Engineering</h4>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Robust PHP 8, Python (FastAPI/Flask), MySQL, and modern JavaScript/React web systems.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <Globe className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">AI & Computer Vision</h4>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Biometric face embeddings with face-api.js, TensorFlow.js CNNs, and Google Gemini RAG.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">B.Tech CSE @ JNTUH</h4>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Strong academic grounding in Data Structures, OS, Database Systems, and Network Architecture.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">Tarun Media Production</h4>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Professional video editing in Premiere Pro & DaVinci Resolve, visual design, and platform strategy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
