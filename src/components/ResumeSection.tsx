import React, { useState } from 'react';
import { FileText, Printer, Download, Eye, Check, Copy } from 'lucide-react';
import { ResumeSheet } from './ResumeSheet';
import { personalInfo } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-12 sm:py-16 bg-slate-100/70 border-b border-slate-200 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#0d1b3e] text-white">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b3e] tracking-tight uppercase">
                Curriculum Vitae / Resume
              </h2>
              <div className="h-0.5 w-16 bg-[#0d1b3e] mt-1" />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              id="resume-section-print-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0d1b3e] text-white text-xs sm:text-sm font-semibold hover:bg-[#182c61] active:scale-[0.98] transition-all shadow-xs cursor-pointer"
            >
              <Printer className="w-4 h-4 text-sky-300" />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={copyEmail}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 text-xs sm:text-sm font-medium transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Contact</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Embedded 2-Column Sheet Presentation */}
        <div className="bg-white/40 p-2 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs flex justify-center">
          <ResumeSheet id="embedded-resume-sheet" />
        </div>
      </div>
    </section>
  );
};
