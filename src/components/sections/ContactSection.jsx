import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Phone, MessageCircle, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineering Opportunity',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'Software Engineering Opportunity',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono-tech text-blue-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>COMMUNICATION CHANNELS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            Interested in discussing full-time software engineering roles, internships, or collaborative AI development? 
            Feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="pro-card p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] font-mono-tech text-slate-400">PRIMARY EMAIL</div>
                  <a 
                    href={PERSONAL_INFO.socials.email}
                    className="text-sm font-mono-tech text-white hover:text-blue-400 transition-colors font-medium truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all shrink-0 flex items-center gap-1.5"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="pro-card p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] font-mono-tech text-slate-400">PHONE & WHATSAPP</div>
                  <div className="text-sm font-mono-tech text-white font-medium">
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-xl text-xs font-medium bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600 hover:text-white border border-emerald-500/30 transition-all shrink-0 flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat</span>
              </a>
            </div>

            {/* Location & Academic Status Card */}
            <div className="pro-card p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Undergraduate in Computer Science & Engineering at DRK Institute of Science and Technology (JNTUH). 
                Available for on-site or remote engineering roles globally.
              </p>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl pro-card bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 transition-all flex items-center justify-between text-xs font-medium"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl pro-card bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500/40 transition-all flex items-center justify-between text-xs font-medium"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="pro-card p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800">
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Direct transmission reaches my personal inbox at <span className="text-slate-300">{PERSONAL_INFO.email}</span>.
              </p>

              {formSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading text-xl font-bold text-white">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-xs text-slate-400 max-w-sm font-mono-tech">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech text-slate-400 mb-1.5">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sundar Pichai"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech text-slate-400 mb-1.5">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sundar@google.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-slate-400 mb-1.5">
                      SUBJECT / OPPORTUNITY TYPE
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineer Role / Internship"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-slate-400 mb-1.5">
                      MESSAGE CONTENT
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Tarun, we reviewed your GitHub repositories (CareCircle AI & MyPic) and would like to discuss an opportunity..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
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
