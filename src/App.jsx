import React, { useState } from 'react';
import Navbar from './components/ui/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import FeaturedProjects from './components/sections/FeaturedProjects';
import SkillsSection from './components/sections/SkillsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import GithubStatsSection from './components/sections/GithubStatsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import ProjectModal from './components/ui/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 overflow-x-hidden selection:bg-blue-600/30 selection:text-blue-200">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <FeaturedProjects onSelectProject={(p) => setSelectedProject(p)} />
        <SkillsSection />
        <ExperienceSection />
        <GithubStatsSection />
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
