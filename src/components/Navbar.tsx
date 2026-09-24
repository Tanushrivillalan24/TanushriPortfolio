import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'skills',
        'education',
        'experience',
        'projects',
        'certifications',
        'contact',
      ];

      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="navbar-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          id="nav-brand-link"
          href="#home"
          className="flex items-center gap-2.5 group text-left"
        >
          <div className="w-9 h-9 rounded-lg bg-[#0d1b3e] flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:bg-[#182c61] transition-colors">
            TV
          </div>
          <div>
            <span className="font-extrabold tracking-tight text-lg text-[#0d1b3e] block">
              TANUSHRI.V
            </span>
            <span className="text-[11px] font-medium tracking-wider text-slate-500 uppercase block -mt-1">
              Software & AI-ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#0d1b3e] bg-slate-100 font-semibold'
                    : 'text-slate-600 hover:text-[#0d1b3e] hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Resume & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            type="button"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-[#0d1b3e] text-white hover:bg-[#182c61] active:scale-[0.98] shadow-sm transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-sky-300" />
            <span>Resume</span>
          </button>

          <a
            id="nav-github-quick"
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="hidden sm:inline-flex p-2 text-slate-600 hover:text-[#0d1b3e] hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            id="nav-linkedin-quick"
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="hidden sm:inline-flex p-2 text-slate-600 hover:text-[#0d1b3e] hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-1 animate-in slide-in-from-top duration-200"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                id={`mobile-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#0d1b3e] bg-slate-100 font-semibold'
                    : 'text-slate-700 hover:text-[#0d1b3e] hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between">
            <button
              id="mobile-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              type="button"
              className="flex-1 mr-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0d1b3e] text-white text-sm font-semibold"
            >
              <FileText className="w-4 h-4 text-sky-300" />
              <span>View Full Resume</span>
            </button>

            <div className="flex items-center gap-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 text-slate-600 hover:text-[#0d1b3e] rounded-lg hover:bg-slate-100"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-[#0d1b3e] rounded-lg hover:bg-slate-100"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-[#0d1b3e] rounded-lg hover:bg-slate-100"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
