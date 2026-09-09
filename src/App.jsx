import React, { useState } from 'react';
import Navbar from './components/ui/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturedProjects from './components/sections/FeaturedProjects';
import SkillsSection from './components/sections/SkillsSection';
import VisualGallery from './components/sections/VisualGallery';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import ProjectModal from './components/ui/ProjectModal';
import Terminal from './components/ui/Terminal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#030308] text-gray-100 overflow-x-hidden cyber-grid selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Subtle Scanline / Film Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none scanline z-40 opacity-40" />

      {/* Floating Navigation Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenTerminal={() => setTerminalOpen(true)} />
        <AboutSection />
        <FeaturedProjects onSelectProject={(p) => setSelectedProject(p)} />
        <SkillsSection />
        <VisualGallery />
        <ExperienceSection />
        <ContactSection onOpenTerminal={() => setTerminalOpen(true)} />
      </main>

      {/* Global Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Interactive Cyber Terminal Modal */}
      <Terminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Project Case Study Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
