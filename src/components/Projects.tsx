import React, { useState } from 'react';
import {
  Code,
  Github,
  ExternalLink,
  BookOpen,
  Search,
  CheckCircle,
  FileCheck,
  Cpu,
  Layers,
  Sparkles,
  X,
  ArrowRight,
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'NLP/Search':
        return <Search className="w-5 h-5 text-[#0d1b3e]" />;
      case 'AI/ML':
        return <Cpu className="w-5 h-5 text-[#0d1b3e]" />;
      default:
        return <Code className="w-5 h-5 text-[#0d1b3e]" />;
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#0d1b3e] text-white">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0d1b3e] tracking-tight uppercase">
                Featured Projects
              </h2>
              <div className="h-0.5 w-16 bg-[#0d1b3e] mt-1" />
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Production-oriented implementations focusing on practical AI workflows, OCR document parsing, and NLP text retrieval.
          </p>
        </div>

        {/* 3 Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-2xs hover:shadow-lg hover:-translate-y-1 hover:border-[#0d1b3e]/40 transition-all duration-300"
            >
              <div>
                {/* Top Bar with Category Badge and Icon */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-[#0d1b3e]/10 transition-colors">
                      {getProjectIcon(project.category)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-[#0d1b3e] group-hover:text-[#182c61] transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                {/* Key Bullet points preview */}
                <div className="mt-4 pt-3 border-t border-slate-100/80 space-y-1.5">
                  {project.highlights.slice(0, 2).map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                      <span className="text-[#0d1b3e] font-bold shrink-0">•</span>
                      <span className="line-clamp-1">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section: Tech Stack & Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                {/* Tech Stack Small Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons: View Code + View Architecture Details */}
                <div className="flex items-center gap-2 pt-1">
                  <a
                    id={`view-code-btn-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#0d1b3e] text-white text-xs sm:text-sm font-semibold hover:bg-[#182c61] active:scale-[0.98] transition-all shadow-xs"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    type="button"
                    title="View project overview & architecture"
                    className="py-2 px-3 rounded-lg border border-slate-300 text-slate-700 hover:text-[#0d1b3e] hover:bg-slate-50 hover:border-slate-400 text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
            <div
              className="bg-white rounded-2xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
              role="dialog"
              aria-modal="true"
            >
              {/* Header */}
              <div className="bg-[#0d1b3e] text-white p-6 relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  type="button"
                  className="absolute top-4 right-4 p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono tracking-wider uppercase text-sky-300">
                  {selectedProject.category} • Architecture & Features
                </span>
                <h3 className="text-2xl font-bold mt-1 text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    System Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Implementation Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 text-[#0d1b3e] border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action in Modal */}
                <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0d1b3e] text-white text-sm font-semibold hover:bg-[#182c61] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Open GitHub Repository</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    type="button"
                    className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
