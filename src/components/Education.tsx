import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle, School } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-[#0d1b3e] text-white">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b3e] tracking-tight uppercase">
              Education
            </h2>
            <div className="h-0.5 w-16 bg-[#0d1b3e] mt-1" />
          </div>
        </div>

        {/* Timeline container */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:content-[''] before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
          {educationHistory.map((edu, index) => (
            <div key={edu.id} className="relative group">
              {/* Timeline dot */}
              <div className="absolute -left-[30px] sm:-left-[38px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#0d1b3e] group-hover:scale-110 transition-transform flex items-center justify-center shadow-xs" />

              {/* Card */}
              <div className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-sm hover:border-[#0d1b3e]/30 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/70">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0d1b3e] flex items-center gap-2">
                      <span>{edu.institution}</span>
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 mt-0.5">
                      {edu.degree}
                    </p>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 shrink-0">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {edu.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md bg-[#0d1b3e] text-white">
                      <Award className="w-3.5 h-3.5 text-sky-300" />
                      {edu.grade}
                    </span>
                  </div>
                </div>

                {edu.secondaryDetails && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {edu.secondaryDetails}
                  </p>
                )}

                {edu.id === 'btech-ise' && (
                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-600 font-medium">
                      Major: Information Science & Engineering
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-600 font-medium">
                      Status: Final Year Undergraduate (Graduating 2027)
                    </span>
                    <span className="px-2.5 py-1 rounded bg-sky-50 border border-sky-200 text-[#0d1b3e] font-semibold">
                      Academic Standing: 7.00 CGPA
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
