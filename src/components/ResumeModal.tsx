import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, FileText } from 'lucide-react';
import { ResumeSheet } from './ResumeSheet';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyAsPlainText = () => {
    const text = `
TANUSHRI.V
Final-year Information Science & Engineering Student | Aspiring Software Development / AI-ML Engineer
Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedinUsername}
GitHub: ${personalInfo.githubUsername}

PROFILE:
${personalInfo.about}

TECHNICAL SKILLS:
- Programming Languages: Python
- Web Technologies: HTML, CSS
- Tools & Platforms: VS Code, GitHub
- Area of Interest: Software Development, Artificial Intelligence & Machine Learning, Web Application Development

EDUCATION:
- Women's Engineering College | B.Tech – Information Science and Engineering | CGPA – 7.00 (2023–2027)
- St. Patrick Matric Higher Secondary School | HSC – 71% (2023) | SSLC (2021) (2011–2023)

INTERNSHIPS:
- Cloudlogic Technologies Pvt. Ltd., Puducherry (15 Jun 2025 – 13 Jul 2025)
  Web Development Intern
  Practical exposure to web development technologies and development practices.
- Adz4Needz (OPC) Pvt. Ltd. (22 Jun 2026 – 05 Jul 2026)
  AI/ML Intern
  Worked on Lead Scoring ML Model and AI-Driven Personalized Education Platform; practical AI/ML application development.

PROJECTS:
1. LearnAI – Personalized Education Platform
   AI-driven learning platform with personalized learning paths, quizzes, summaries, and progress tracking.
   Tech: Python, Flask, MongoDB, HTML, CSS, AI API.
2. E-Book Chapter & Section Search System (Repo: https://github.com/Tanushrivillalan24/ebook-chapter-section-search-system)
   Search system to find relevant chapters and sections from PDF-based e-books using keyword queries; uses text processing/TF-IDF.
   Tech: Python, Flask, PyPDF2, Scikit-learn, TF-IDF.
3. Legal Metrology Compliance Checker
   AI-assisted system that scans packaged product labels using OCR, checks mandatory declarations and generates reports for human review.
   Tech: Python, FastAPI, Tesseract OCR, PyTesseract.

CERTIFICATIONS:
- Developing Soft Skills and Personality – NPTEL
- Data Science & Analytics – HP LIFE

LANGUAGES:
- English, Tamil
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-slate-100 rounded-2xl w-full max-w-4xl shadow-2xl border border-slate-300 overflow-hidden flex flex-col max-h-[95vh]">
        {/* Modal Top Control Bar (Hidden when printing) */}
        <div className="bg-[#0d1b3e] text-white px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-400" />
            <span className="font-bold text-sm sm:text-base">
              Tanushri V — Official Curriculum Vitae / Resume
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              type="button"
              id="modal-print-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-900 text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={copyAsPlainText}
              type="button"
              id="modal-copy-text-btn"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              type="button"
              id="modal-close-btn"
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors ml-1"
              aria-label="Close resume modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Canvas containing the Resume */}
        <div className="overflow-y-auto p-4 sm:p-6 bg-slate-200/70 flex-1 flex justify-center">
          <div className="w-full">
            <ResumeSheet id="modal-resume-sheet" />
          </div>
        </div>

        {/* Footer Note inside modal */}
        <div className="bg-white border-t border-slate-200 px-4 py-2.5 text-center text-xs text-slate-500 no-print flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Tip: Click "Print / Save PDF" to generate a physical copy or export to PDF.</span>
          <span className="font-medium text-[#0d1b3e]">
            Contact: tanushrivillalan@gmail.com • +91 9787267207
          </span>
        </div>
      </div>
    </div>
  );
};
