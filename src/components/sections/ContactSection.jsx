import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Terminal as TerminalIcon } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from '../ui/SocialIcons';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../utils/audio';

export default function ContactSection({ onOpenTerminal }) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '3D Spatial Web Experience',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    sound.playSuccess();
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playSuccess();
    setFormSubmitted(true);

    // Launch celebratory cyber confetti
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#00f0ff', '#8a2be2', '#ffffff']
    });

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        projectType: '3D Spatial Web Experience',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Radiant atmospheric background glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono-tech text-cyan-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>TRANSMIT FREQUENCY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            INITIATE COLLABORATION
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans mt-3">
            Ready to engineer extraordinary 3D web applications, high-performance architectures, or visual productions?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Credentials & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <span className="text-xs font-mono-tech text-cyan-400 uppercase tracking-widest">
                  DIRECT CHANNEL
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-1">
                  Connect with Eppe Tarun
                </h3>
                <p className="text-sm text-gray-400 font-sans mt-2">
                  Operating under <strong className="text-white">Tarun Media</strong>. Available for elite contract engineering, creative technical direction, and global remote opportunities.
                </p>
              </div>

              {/* One-Click Copy Email Card */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono-tech text-gray-400">OFFICIAL INBOX</div>
                    <div className="text-xs sm:text-sm font-mono-tech text-white truncate font-medium">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sound.playHover()}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono-tech bg-cyan-400 hover:bg-cyan-300 text-black font-semibold transition-all shrink-0 flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-black" /> : <Copy className="w-4 h-4 text-black" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div>
                <div className="text-xs font-mono-tech text-gray-400 uppercase tracking-wider mb-3">
                  DIGITAL HUBS
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="p-3 rounded-xl glass-panel hover:glass-panel-glow border border-white/5 text-gray-300 hover:text-cyan-400 transition-all flex items-center gap-2.5 text-xs font-mono-tech"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="p-3 rounded-xl glass-panel hover:glass-panel-glow border border-white/5 text-gray-300 hover:text-cyan-400 transition-all flex items-center gap-2.5 text-xs font-mono-tech"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="p-3 rounded-xl glass-panel hover:glass-panel-glow border border-white/5 text-gray-300 hover:text-cyan-400 transition-all flex items-center gap-2.5 text-xs font-mono-tech"
                  >
                    <TwitterIcon className="w-4 h-4" />
                    <span>X (Twitter)</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    onClick={() => sound.playClick()}
                    className="p-3 rounded-xl glass-panel hover:glass-panel-glow border border-white/5 text-gray-300 hover:text-cyan-400 transition-all flex items-center gap-2.5 text-xs font-mono-tech"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              {/* Terminal Quick Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    sound.playClick();
                    if (onOpenTerminal) onOpenTerminal();
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full py-3 rounded-2xl glass-panel hover:border-cyan-500/40 text-xs font-mono-tech text-cyan-300 flex items-center justify-center gap-2 transition-all"
                >
                  <TerminalIcon className="w-4 h-4" />
                  <span>Launch Cyber Terminal Command Line</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Transmission Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                Send Direct Transmission
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans mb-6">
                Fill out the project scope below. Inquiries are typically answered within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400 shadow-[0_0_25px_rgba(0,240,255,0.4)]">
                    <Sparkles className="w-7 h-7 animate-spin" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-white">
                    Transmission Dispatched!
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 font-mono-tech max-w-sm">
                    Thank you for reaching out. Eppe Tarun will review your dossier and establish contact shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-mono-tech text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-gray-300 text-xs">YOUR NAME / ENTITY</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan / Studio X"
                        className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder-gray-600 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-gray-300 text-xs">ELECTRONIC MAIL</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@vision.co"
                        className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder-gray-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-gray-300 text-xs">ENGAGEMENT SCOPE</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs bg-[#0a0a14] transition-colors"
                    >
                      <option value="3D Spatial Web Experience">3D Spatial Web Experience / WebGL</option>
                      <option value="Full-Stack Application Development">Full-Stack Application Architecture</option>
                      <option value="AI Dashboard & Automation">AI Dashboard & Telemetry Cockpit</option>
                      <option value="Cinematic Media / Virtual Production">Cinematic Media & Virtual Production</option>
                      <option value="Technical Advisory / Fractional CTO">Technical Advisory / Fractional CTO</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-gray-300 text-xs">TRANSMISSION DOSSIER (MESSAGE)</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your timeline, goals, and technical requirements..."
                      className="w-full px-4 py-3 rounded-xl glass-panel border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs placeholder-gray-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => sound.playHover()}
                    className="w-full py-3.5 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT MESSAGE NOW</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
