import React from 'react';
import { personalInfo } from '../data/portfolioData';

interface ResumeSheetProps {
  id?: string;
  isPrintVersion?: boolean;
}

export const ResumeSheet: React.FC<ResumeSheetProps> = ({ id = 'resume-sheet', isPrintVersion = false }) => {
  return (
    <div
      id={id}
      className={`w-full max-w-[850px] mx-auto bg-white text-slate-900 shadow-xl border border-slate-300 rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-12 print:shadow-none print:border-none print:rounded-none print:m-0 print:w-full print:max-w-none print:grid-cols-12`}
      style={{ minHeight: isPrintVersion ? 'auto' : '1100px' }}
    >
      {/* LEFT COLUMN: DARK NAVY ACCENT (#0d1b3e) */}
      <div className="md:col-span-4 bg-[#0d1b3e] text-white p-6 sm:p-8 flex flex-col justify-between print:col-span-4 print:bg-[#0d1b3e] print:text-white print:p-6">
        <div className="space-y-7">
          {/* Candidate Name */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-wider text-white uppercase">
              TANUSHRI.V
            </h1>
            <div className="h-0.5 w-12 bg-sky-400 mt-2" />
          </div>

          {/* CONTACT */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-widest text-sky-300 uppercase border-b border-sky-400/30 pb-1">
              CONTACT
            </h2>
            <div className="space-y-1.5 text-xs text-slate-200">
              <p className="font-mono text-[13px] text-white">9787267207</p>
              <p className="break-all text-slate-300 hover:text-white transition-colors">
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </p>
              <p className="break-all text-slate-300 hover:text-white transition-colors">
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/tanushri-v-5bb81b39a
                </a>
              </p>
              <p className="break-all text-slate-300 hover:text-white transition-colors">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/Tanushrivillalan24
                </a>
              </p>
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-widest text-sky-300 uppercase border-b border-sky-400/30 pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-2 text-xs text-slate-200">
              <div>
                <span className="text-slate-300 font-medium block">
                  Programming Languages:
                </span>
                <span className="font-semibold text-white">Python</span>
              </div>
              <div>
                <span className="text-slate-300 font-medium block">
                  Web Technologies:
                </span>
                <span className="font-semibold text-white">HTML, CSS</span>
              </div>
              <div>
                <span className="text-slate-300 font-medium block">
                  Tools & Platforms:
                </span>
                <span className="font-semibold text-white">VS Code, GitHub</span>
              </div>
            </div>
          </div>

          {/* AREA OF INTEREST */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-widest text-sky-300 uppercase border-b border-sky-400/30 pb-1">
              AREA OF INTEREST
            </h2>
            <div className="space-y-1 text-xs text-slate-200">
              <p className="font-medium text-white">• Software Development</p>
              <p className="font-medium text-white">
                • Artificial Intelligence & Machine Learning
              </p>
              <p className="font-medium text-white">
                • Web Application Development
              </p>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-widest text-sky-300 uppercase border-b border-sky-400/30 pb-1">
              LANGUAGES
            </h2>
            <div className="space-y-1 text-xs text-slate-200">
              <p className="font-medium text-white">English</p>
              <p className="font-medium text-white">Tamil</p>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold tracking-widest text-sky-300 uppercase border-b border-sky-400/30 pb-1">
              CERTIFICATIONS
            </h2>
            <div className="space-y-2 text-xs text-slate-200">
              <div>
                <p className="font-semibold text-white leading-tight">
                  Developing Soft Skills and Personality – NPTEL
                </p>
              </div>
              <div>
                <p className="font-semibold text-white leading-tight">
                  Data Science & Analytics – HP LIFE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Small footer tag inside sidebar */}
        <div className="mt-8 pt-4 border-t border-sky-400/20 text-[10px] text-slate-400">
          <span>B.Tech ISE Candidate</span>
        </div>
      </div>

      {/* RIGHT COLUMN: CRISP WHITE BODY */}
      <div className="md:col-span-8 bg-white p-6 sm:p-8 space-y-6 print:col-span-8 print:p-6 print:space-y-5">
        {/* PROFILE */}
        <section className="space-y-2">
          <h2 className="text-sm font-black tracking-widest text-[#0d1b3e] uppercase border-b-2 border-[#0d1b3e] pb-1">
            PROFILE
          </h2>
          <p className="text-xs text-slate-700 leading-relaxed text-justify">
            Final-year Information Science and Engineering student with hands-on exposure to Python, Artificial Intelligence, Machine Learning, Web Development and databases. Experienced in developing AI-driven learning platforms, document search systems and OCR-based solutions through academic projects and internships. Strong interest in building practical technology solutions and learning new tools. Seeking an entry-level Software Development or AI/ML role.
          </p>
        </section>

        {/* EDUCATION */}
        <section className="space-y-2.5">
          <h2 className="text-sm font-black tracking-widest text-[#0d1b3e] uppercase border-b-2 border-[#0d1b3e] pb-1">
            EDUCATION
          </h2>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between items-baseline font-bold text-[#0d1b3e]">
                <span>Women's Engineering College</span>
                <span className="font-normal text-slate-600">2023–2027</span>
              </div>
              <p className="text-slate-800 font-medium">
                B.Tech – Information Science and Engineering
              </p>
              <p className="text-slate-700 font-bold text-[11px]">CGPA – 7.00</p>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-bold text-[#0d1b3e]">
                <span>St. Patrick Matric Higher Secondary School</span>
                <span className="font-normal text-slate-600">2011–2023</span>
              </div>
              <p className="text-slate-800 font-medium">HSC – 71% (2023)</p>
              <p className="text-slate-800 font-medium">SSLC – (2021)</p>
            </div>
          </div>
        </section>

        {/* INTERNSHIPS */}
        <section className="space-y-2.5">
          <h2 className="text-sm font-black tracking-widest text-[#0d1b3e] uppercase border-b-2 border-[#0d1b3e] pb-1">
            INTERNSHIPS
          </h2>

          <div className="space-y-3.5 text-xs">
            <div>
              <div className="flex justify-between items-baseline font-bold text-[#0d1b3e]">
                <span>Cloudlogic Technologies Pvt. Ltd., Puducherry</span>
                <span className="font-normal text-slate-600">15 Jun 2025 – 13 Jul 2025</span>
              </div>
              <p className="font-bold text-slate-800">Web Development Intern</p>
              <p className="text-slate-600 text-[11px] leading-relaxed mt-0.5">
                Practical exposure to web development technologies and development practices.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-bold text-[#0d1b3e]">
                <span>Adz4Needz (OPC) Pvt. Ltd.</span>
                <span className="font-normal text-slate-600">22 Jun 2026 – 05 Jul 2026</span>
              </div>
              <p className="font-bold text-slate-800">AI/ML Intern</p>
              <p className="text-slate-600 text-[11px] leading-relaxed mt-0.5">
                Worked on Lead Scoring ML Model and AI-Driven Personalized Education Platform; practical AI/ML application development.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-2.5">
          <h2 className="text-sm font-black tracking-widest text-[#0d1b3e] uppercase border-b-2 border-[#0d1b3e] pb-1">
            PROJECTS
          </h2>

          <div className="space-y-3 text-xs">
            {/* LearnAI */}
            <div>
              <p className="font-bold text-[#0d1b3e]">
                LearnAI – Personalized Education Platform
              </p>
              <p className="text-slate-600 text-[11px] leading-relaxed mt-0.5">
                AI-driven learning platform with personalized learning paths, quizzes, summaries, and progress tracking.
              </p>
              <p className="text-[11px] text-slate-500 italic mt-0.5">
                <span className="font-semibold not-italic text-slate-700">Tech:</span> Python, Flask, MongoDB, HTML, CSS, AI API.
              </p>
            </div>

            {/* E-Book Chapter */}
            <div>
              <div className="flex justify-between items-baseline">
                <p className="font-bold text-[#0d1b3e]">
                  E-Book Chapter & Section Search System
                </p>
                <a
                  href="https://github.com/Tanushrivillalan24/ebook-chapter-section-search-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-sky-800 hover:underline font-mono"
                >
                  GitHub Repository ↗
                </a>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed mt-0.5">
                Search system to find relevant chapters and sections from PDF-based e-books using keyword queries; uses text processing/TF-IDF.
              </p>
              <p className="text-[11px] text-slate-500 italic mt-0.5">
                <span className="font-semibold not-italic text-slate-700">Tech:</span> Python, Flask, PyPDF2, Scikit-learn, TF-IDF.
              </p>
            </div>

            {/* Legal Metrology */}
            <div>
              <p className="font-bold text-[#0d1b3e]">
                Legal Metrology Compliance Checker
              </p>
              <p className="text-slate-600 text-[11px] leading-relaxed mt-0.5">
                AI-assisted system that scans packaged product labels using OCR, checks mandatory declarations and generates reports for human review.
              </p>
              <p className="text-[11px] text-slate-500 italic mt-0.5">
                <span className="font-semibold not-italic text-slate-700">Tech:</span> Python, FastAPI, Tesseract OCR, PyTesseract.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
