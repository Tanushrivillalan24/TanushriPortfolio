import React from 'react';
import {
  Code2,
  Globe,
  Wrench,
  Compass,
  CheckCircle2,
  Terminal,
  Layers,
  Sparkles,
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-[#0d1b3e]" />;
      case 'Web Technologies':
        return <Globe className="w-5 h-5 text-[#0d1b3e]" />;
      case 'Tools & Platforms':
        return <Wrench className="w-5 h-5 text-[#0d1b3e]" />;
      case 'Areas of Interest':
        return <Compass className="w-5 h-5 text-[#0d1b3e]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#0d1b3e]" />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-[#0d1b3e] text-white">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b3e] tracking-tight uppercase">
              Technical Skills & Interests
            </h2>
            <div className="h-0.5 w-16 bg-[#0d1b3e] mt-1" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technicalSkills.map((categoryGroup, index) => (
            <div
              key={index}
              id={`skills-group-${index}`}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs hover:shadow-sm hover:border-[#0d1b3e]/30 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100/90 text-[#0d1b3e]">
                      {getCategoryIcon(categoryGroup.category)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0d1b3e]">
                        {categoryGroup.category}
                      </h3>
                      {categoryGroup.description && (
                        <p className="text-xs text-slate-500 font-medium">
                          {categoryGroup.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {categoryGroup.skills.length} item{categoryGroup.skills.length > 1 ? 's' : ''}
                  </span>
                </div>

                {/* Skill Badges / Pills */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {categoryGroup.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-50 hover:bg-[#0d1b3e] border border-slate-200 hover:border-[#0d1b3e] text-slate-800 hover:text-white transition-all duration-200 cursor-default shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 group-hover:text-sky-300 transition-colors shrink-0" />
                      <div className="text-left">
                        <span className="text-sm font-semibold block leading-tight">
                          {skill.name}
                        </span>
                        {skill.level && (
                          <span className="text-[10px] text-slate-500 group-hover:text-slate-300 font-medium block leading-tight">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Note for Tech Resume consistency */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Resume Category: {categoryGroup.category}</span>
                <span className="font-mono text-[#0d1b3e]/70">Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Note / Ecosystem Bar */}
        <div className="mt-8 p-4 rounded-xl bg-[#0d1b3e]/5 border border-[#0d1b3e]/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0d1b3e]" />
            <span className="font-semibold text-[#0d1b3e]">Core Competency Stack:</span>
            <span>Python, Machine Learning, Web Technologies (HTML/CSS), Flask & FastAPI, OCR</span>
          </div>
          <a
            href="#projects"
            className="text-xs font-semibold text-[#0d1b3e] hover:underline underline-offset-4 shrink-0"
          >
            See skills demonstrated in projects →
          </a>
        </div>
      </div>
    </section>
  );
};
