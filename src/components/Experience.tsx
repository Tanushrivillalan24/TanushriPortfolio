import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, ArrowUpRight } from 'lucide-react';
import { internships } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-[#0d1b3e] text-white">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b3e] tracking-tight uppercase">
              Internship Experience
            </h2>
            <div className="h-0.5 w-16 bg-[#0d1b3e] mt-1" />
          </div>
        </div>

        {/* Internships Cards Grid */}
        <div className="space-y-6">
          {internships.map((exp, index) => (
            <div
              key={exp.id}
              id={`internship-card-${index}`}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-2xs hover:shadow-md hover:border-[#0d1b3e]/40 transition-all duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-[#0d1b3e]">
                      {exp.company}
                    </h3>
                    {exp.location && (
                      <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  <p className="text-base font-semibold text-slate-700 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#0d1b3e]/10 text-[#0d1b3e] text-xs font-bold uppercase tracking-wider">
                      {exp.role}
                    </span>
                  </p>
                </div>

                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-[#0d1b3e] border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.duration}</span>
                  </span>
                </div>
              </div>

              {/* Primary summary line */}
              <div className="mt-4">
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Key contributions */}
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Responsibilities & Outcomes:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                  {exp.contributions.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 bg-slate-50/80 p-3 rounded-xl border border-slate-200/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0d1b3e] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech / Skills tags used */}
              <div className="mt-4 pt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-slate-400">Skills demonstrated:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
