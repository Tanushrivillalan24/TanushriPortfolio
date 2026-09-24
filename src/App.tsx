import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { CertificationsAndLanguages } from './components/CertificationsAndLanguages';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ResumeSheet } from './components/ResumeSheet';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0d1b3e] selection:text-white flex flex-col font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections (Hidden on direct browser print so resume prints cleanly) */}
      <main className="flex-1 no-print">
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* 2. About / Profile */}
        <About />

        {/* 3. Technical Skills */}
        <Skills />

        {/* 4. Education */}
        <Education />

        {/* 5. Internship Experience */}
        <Experience />

        {/* 6. Projects */}
        <Projects />

        {/* 7 & 8. Certifications & Languages */}
        <CertificationsAndLanguages />

        {/* Dedicated Resume Section with Sheet view */}
        <ResumeSection />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Full Resume Pop-up Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* Dedicated Print Only Container for 1-Page PDF Export */}
      <div className="hidden print:block print-only">
        <ResumeSheet isPrintVersion={true} id="print-resume-export" />
      </div>
    </div>
  );
}
