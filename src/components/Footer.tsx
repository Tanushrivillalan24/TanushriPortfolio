import React from 'react';
import { Mail, Linkedin, Github, Phone, ArrowUp, Heart, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0d1b3e] text-white border-t border-slate-800 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-700/60">
          {/* Name & Title */}
          <div className="text-center md:text-left space-y-1">
            <span className="text-xl font-extrabold tracking-wider text-white uppercase block">
              {personalInfo.formalName}
            </span>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Information Science & Engineering Undergraduate • Aspiring Software Development & AI-ML Engineer
            </p>
          </div>

          {/* Center / Right Links */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs sm:text-sm font-semibold transition-colors cursor-pointer text-sky-300"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
              title="Email Tanushri"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors ml-2"
              title="Scroll to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-mono">Puducherry, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
