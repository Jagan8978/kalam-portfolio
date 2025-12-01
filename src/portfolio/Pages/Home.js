import React from 'react';
import Navbar from '../Components/Portfolio/Navbar';
import HeroSection from '../Components/Portfolio/HeroSection';
import AboutSection from '../Components/Portfolio/AboutSection';
import SkillsSection from '../Components/Portfolio/SkillsSection';
import ExperienceSection from '../Components/Portfolio/ExperienceSection';
import ProjectsSection from '../Components/Portfolio/ProjectsSection';
import EducationSection from '../Components/Portfolio/EducationSection';
import CertificationsSection from '../Components/Portfolio/CertificationsSection';
import ContactSection from '../Components/Portfolio/ContactSection';
import Footer from '../Components/Portfolio/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}