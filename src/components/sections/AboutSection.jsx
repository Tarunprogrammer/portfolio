import React, { useState } from 'react';
import { UserCheck, Sparkles, Shield, Scan, Code, Globe, Terminal, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
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
              <span>THE VISIONARY BEHIND TARUN MEDIA</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              MEET <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent glow-cyan">EPPE TARUN</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              I am a <strong>Creative Technologist & Full-Stack 3D Architect</strong> dedicated to transforming flat digital interfaces into cinematic spatial experiences. Operating at the frontier of WebGL, real-time procedural shaders, and high-performance full-stack engineering, I build digital worlds that engage, inspire, and perform at scale.
            </p>

            {/* Philosophy Callout Quote */}
            <div className="p-6 rounded-2xl glass-panel-glow border-l-4 border-cyan-400 space-y-2">
              <div className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Architectural Philosophy
              </div>
              <blockquote className="text-sm sm:text-base text-gray-200 italic font-sans leading-relaxed">
                "We are leaving the era of static, uninspired flat screens. The future belongs to spatial dimensions where code, cinematic lighting, and human emotion coalesce into seamless real-time reality."
              </blockquote>
            </div>

            {/* Core Competency Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">Full-Stack Precision</h4>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Rock-solid frontend architecture paired with resilient cloud microservices.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <Globe className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">Spatial 3D & WebGL</h4>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Real-time Three.js scenes, custom GLSL shaders, and 60 FPS hardware acceleration.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">Cinematic Media & VFX</h4>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Virtual production, virtual stage lighting, and professional post-production.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white">Tarun Media Directorship</h4>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Delivering world-class commercial interactive experiences for forward-looking brands.
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
