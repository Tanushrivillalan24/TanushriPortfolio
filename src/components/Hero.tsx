import React from 'react';
import {
  FileText,
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  Sparkles,
  Award,
  BookOpen,
  Briefcase,
  Download,
  Copy,
  Check,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white"
    >
      {/* Background geometric accents reminiscent of engineering layout */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#0d1b3e]" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-[#182c61]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Resume Card Banner */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
          {/* Top Navy Accent Bar */}
          <div className="h-3 bg-[#0d1b3e] w-full" />

          <div className="p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Details Column */}
              <div className="lg:col-span-8 space-y-5">
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-[#0d1b3e]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Final-Year ISE • 2027 Graduate • Seeking SDE / AI-ML Roles</span>
                </div>

                {/* Main Name & Title */}
                <div>
                  <h1
                    id="hero-name"
                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d1b3e] tracking-tight"
                  >
                    {personalInfo.name}
                  </h1>
                  <p
                    id="hero-full-title"
                    className="mt-2 text-base sm:text-lg font-medium text-slate-700 leading-snug"
                  >
                    {personalInfo.fullTitle}
                  </p>
                </div>

                {/* Tagline */}
                <p
                  id="hero-tagline"
                  className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl"
                >
                  "{personalInfo.tagline}"
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    id="hero-view-projects-btn"
                    href="#projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0d1b3e] text-white text-sm font-semibold hover:bg-[#182c61] active:scale-[0.98] transition-all shadow-sm group"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    id="hero-contact-btn"
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-800 text-sm font-semibold hover:bg-slate-50 hover:border-slate-400 active:scale-[0.98] transition-all"
                  >
                    <span>Contact Me</span>
                  </a>

                  <button
                    id="hero-resume-btn"
                    onClick={onOpenResume}
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-50 border border-sky-200 text-[#0d1b3e] text-sm font-semibold hover:bg-sky-100 active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-sky-700" />
                    <span>Open Tech Resume</span>
                  </button>
                </div>

                {/* Clickable Social & Contact Links */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  {/* Email */}
                  <a
                    id="hero-email-link"
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-1.5 hover:text-[#0d1b3e] transition-colors"
                  >
                    <div className="p-1.5 rounded-md bg-slate-100 text-slate-700">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{personalInfo.email}</span>
                  </a>

                  {/* Copy Email Helper */}
                  <button
                    onClick={copyEmail}
                    type="button"
                    title="Copy email to clipboard"
                    className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <span className="text-slate-300">•</span>

                  {/* LinkedIn */}
                  <a
                    id="hero-linkedin-link"
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#0d1b3e] transition-colors"
                  >
                    <div className="p-1.5 rounded-md bg-slate-100 text-[#0d1b3e]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <span className="font-medium">LinkedIn</span>
                  </a>

                  <span className="text-slate-300">•</span>

                  {/* GitHub */}
                  <a
                    id="hero-github-link"
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#0d1b3e] transition-colors"
                  >
                    <div className="p-1.5 rounded-md bg-slate-100 text-slate-800">
                      <Github className="w-4 h-4" />
                    </div>
                    <span className="font-medium">GitHub</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Fast Highlight Cards (Engineering Portfolio Vibe) */}
              <div className="lg:col-span-4 bg-slate-50/90 rounded-xl p-5 border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Candidate Snapshot
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                    Verified Credentials
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
                    <div className="p-2 rounded bg-[#0d1b3e]/5 text-[#0d1b3e]">
                      <Award className="w-4 h-4 text-[#0d1b3e]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">Academics</span>
                      <p className="text-sm font-bold text-slate-900">
                        B.Tech ISE — CGPA 7.00
                      </p>
                      <span className="text-xs text-slate-600">Women's Engineering College</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
                    <div className="p-2 rounded bg-[#0d1b3e]/5 text-[#0d1b3e]">
                      <Briefcase className="w-4 h-4 text-[#0d1b3e]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">Internships</span>
                      <p className="text-sm font-bold text-slate-900">
                        2 Industry Internships
                      </p>
                      <span className="text-xs text-slate-600">AI/ML & Web Development</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-2.5 rounded-lg bg-white border border-slate-200/70 shadow-2xs">
                    <div className="p-2 rounded bg-[#0d1b3e]/5 text-[#0d1b3e]">
                      <BookOpen className="w-4 h-4 text-[#0d1b3e]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">Core Projects</span>
                      <p className="text-sm font-bold text-slate-900">
                        3 AI & Systems Builds
                      </p>
                      <span className="text-xs text-slate-600">OCR, Search & Educational AI</span>
                    </div>
                  </div>
                </div>

                {/* Quick Action to preview the printed resume sheet */}
                <button
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-3 rounded-lg bg-[#0d1b3e] text-white text-xs font-semibold hover:bg-[#182c61] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <FileText className="w-3.5 h-3.5 text-sky-300" />
                  <span>Preview 2-Column Tech Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
