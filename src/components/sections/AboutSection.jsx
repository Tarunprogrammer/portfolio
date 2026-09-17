import React from 'react';
import { Terminal, Cpu, Database, BookOpen, Code2, Server } from 'lucide-react';

export default function AboutSection() {
  const engineeringFocus = [
    {
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      title: "Data Structures & Algorithmic Problem Solving",
      desc: "Strong foundational grasp of computational complexity, tree and graph traversal, dynamic programming, and memory-efficient data structures in C++, Python, and Java."
    },
    {
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      title: "Distributed Microservices & RESTful APIs",
      desc: "Architecting modular backend services with FastAPI, Spring Boot, and PHP 8, adhering to clean architecture, database indexing, and connection pooling."
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "Production AI & Vector RAG Systems",
      desc: "Building practical AI systems including LangChain LCEL RAG pipelines with Pinecone vector databases, Google Gemini 2.0 Flash integrations, and browser-side CNN computer vision."
    },
    {
      icon: <Database className="w-5 h-5 text-purple-400" />,
      title: "Relational & Real-Time Cloud Databases",
      desc: "Designing resilient schema structures, ACID transactions, and real-time synchronizations across MySQL, PostgreSQL, Supabase, and Firebase."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-slate-950/40 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono-tech text-blue-400 mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>ENGINEERING PROFILE & BACKGROUND</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me & Technical Focus
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            I build software with a focus on clean code, strong architectural foundations, and measurable user impact.
          </p>
        </div>

        {/* Two-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative Summary */}
          <div className="lg:col-span-6 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed text-left">
            <p>
              I am an undergraduate in <strong className="text-white">Computer Science and Engineering</strong> at 
              <strong className="text-white"> JNTU Hyderabad</strong> (DRK Institute of Science and Technology, 2023–2027). 
              Over the last three years, I have engineered and open-sourced over <strong className="text-white">33 repositories</strong> on GitHub, 
              ranging from AI healthcare platforms and facial recognition engines to full-stack university portals.
            </p>

            <p>
              My engineering philosophy revolves around solving practical business and community problems. Rather than building purely theoretical toy projects, 
              I design complete software products: from schema modeling and API authentication to real-time client state management and deployment.
            </p>

            <p>
              I am actively preparing for software engineering and AI systems roles at leading technology organizations like <strong className="text-white">Google, Amazon, Microsoft, and Meta</strong>, 
              where I can apply my skills in system design, algorithmic optimization, and high-performance full-stack architectures.
            </p>

            {/* Quick Education Callout Box */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2 text-left">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-blue-400 font-semibold">
                <BookOpen className="w-4 h-4" />
                <span>ACADEMIC INSTITUTION</span>
              </div>
              <div className="text-white font-semibold text-base">
                Bachelor of Technology (B.Tech), Computer Science & Engineering
              </div>
              <div className="text-xs text-slate-400">
                DRK Institute of Science and Technology • Jawaharlal Nehru Technological University Hyderabad (JNTUH)
              </div>
              <div className="text-xs text-emerald-400 font-mono-tech pt-1">
                Expected Graduation: 2027 • Hyderabad, Telangana, India
              </div>
            </div>
          </div>

          {/* Right Column: 4 Technical Focus Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {engineeringFocus.map((pillar, idx) => (
              <div
                key={idx}
                className="pro-card p-5 rounded-2xl bg-slate-900/60 border border-slate-800 text-left space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-base text-white">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-1">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
