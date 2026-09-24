import React from 'react';
import { Award, Languages as LanguagesIcon, CheckCircle2, ShieldCheck, Globe2 } from 'lucide-react';
import { certifications, languages } from '../data/portfolioData';

export const CertificationsAndLanguages: React.FC = () => {
  return (
    <section id="certifications" className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#0d1b3e] text-white">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0d1b3e] tracking-tight uppercase">
                  Certifications
                </h2>
                <div className="h-0.5 w-12 bg-[#0d1b3e] mt-1" />
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  id={`cert-item-${idx}`}
                  className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-sm hover:border-[#0d1b3e]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {cert.title}
                      </h3>
                    </div>
                    {cert.description && (
                      <p className="text-xs sm:text-sm text-slate-600 pl-7 leading-relaxed">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  <div className="sm:text-right shrink-0 pl-7 sm:pl-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#0d1b3e]/10 text-[#0d1b3e] font-bold text-xs">
                      {cert.issuer}
                    </span>
                    <span className="block text-[11px] text-slate-400 mt-1">
                      Verified Course
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#0d1b3e] text-white">
                <LanguagesIcon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0d1b3e] tracking-tight uppercase">
                  Languages
                </h2>
                <div className="h-0.5 w-12 bg-[#0d1b3e] mt-1" />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Proficient in both technical communication and regional bilingual engagement.
              </p>

              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div
                    key={idx}
                    id={`lang-item-${idx}`}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between hover:bg-slate-100/60 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0d1b3e] font-bold text-xs shadow-2xs">
                        {lang.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900">
                          {lang.name}
                        </h3>
                        <span className="text-xs text-slate-500 font-medium">
                          {lang.proficiency}
                        </span>
                      </div>
                    </div>

                    {lang.native ? (
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                        Native
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-sky-800 bg-sky-100/80 px-2 py-0.5 rounded">
                        Fluent
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-slate-400" />
                <span>Comfortable with remote and international engineering teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
