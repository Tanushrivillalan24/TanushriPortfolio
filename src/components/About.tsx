import React from 'react';
import { User, Target, Cpu, Database, Search, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      desc: 'Hands-on practical development of predictive models, lead scoring, and intelligent learning systems.',
    },
    {
      icon: Search,
      title: 'Document & OCR Systems',
      desc: 'Building text extraction with PyPDF2, TF-IDF semantic keyword retrieval, and Tesseract label verification.',
    },
    {
      icon: Database,
      title: 'Full-Stack & Databases',
      desc: 'Developing web services using Python (Flask & FastAPI), MongoDB, and responsive modern interfaces.',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance & Quality',
      desc: 'Implementing statutory checking systems and maintaining clean, practical engineering workflows.',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header styled like the resume header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-[#0d1b3e] text-white">
            <User className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b3e] tracking-tight uppercase">
              About / Profile
            </h2>
            <div className="h-0.5 w-16 bg-[#0d1b3e] mt-1" />
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide uppercase text-slate-500">
                <Target className="w-4 h-4 text-[#0d1b3e]" />
                <span>Professional Objective & Background</span>
              </div>

              <p
                id="about-profile-text"
                className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal"
              >
                {personalInfo.about}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0d1b3e] shadow-2xs">
                  🎓 B.Tech ISE (2023–2027)
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0d1b3e] shadow-2xs">
                  ⭐ CGPA 7.00
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0d1b3e] shadow-2xs">
                  📍 Puducherry / India
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-2xs">
                  🚀 Ready for Immediate Internships & Full-Time Offers
                </span>
              </div>
            </div>

            {/* Quick Summary Aside */}
            <div className="lg:col-span-4 bg-white rounded-xl p-5 border border-slate-200 shadow-2xs space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0d1b3e] pb-2 border-b border-slate-100">
                Core Competencies
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0d1b3e]" />
                  <span>Python Development & Scripting</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0d1b3e]" />
                  <span>AI & Machine Learning Models</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0d1b3e]" />
                  <span>OCR & Document Text Processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0d1b3e]" />
                  <span>Web App Prototyping (HTML, CSS)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0d1b3e]" />
                  <span>Database & Data Flow Design</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4 Feature Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-200/80">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-[#0d1b3e]/40 transition-colors shadow-2xs"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0d1b3e]/5 flex items-center justify-center text-[#0d1b3e] mb-3">
                    <Icon className="w-5 h-5 text-[#0d1b3e]" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
