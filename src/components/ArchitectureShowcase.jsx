import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './ui/Animations';
import { projects } from '../data/portfolio';
import { ArrowRight, GitBranch } from 'lucide-react';

// SVG Architecture Diagram component
function ArchDiagram({ steps }) {
  return (
    <div className="relative overflow-x-auto py-6">
      <div className="flex items-center gap-0 min-w-max mx-auto w-fit">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center">
            {/* Node */}
            <div className="flex flex-col items-center w-36">
              <div className="w-28 h-16 rounded-xl bg-gradient-to-br from-teal/15 to-teal/5 border border-teal/25 flex items-center justify-center px-3 text-center shadow-sm">
                <span className="text-xs font-semibold text-teal leading-snug">{step.step}</span>
              </div>
              <p className="text-[10px] text-navy/40 text-center mt-2 leading-relaxed max-w-[110px]">
                {step.detail}
              </p>
            </div>
            {/* Arrow */}
            {i < steps.length - 1 && (
              <div className="flex items-center px-1 pb-6">
                <div className="w-6 h-px bg-teal/40" />
                <ArrowRight size={12} className="text-teal/60 -ml-1" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ArchitectureShowcase() {
  const [active, setActive] = useState(projects[0].id);
  const featuredProjects = projects.filter((p) => p.featured);
  const selectedProject = featuredProjects.find((p) => p.id === active) || featuredProjects[0];

  return (
    <section id="architecture" className="py-10 md:py-14 section-padding max-w-7xl mx-auto scroll-mt-16">
      {/* Header */}
      <FadeUp>
        <div className="flex items-center gap-3.5 mb-2">
          <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
            <GitBranch size={20} className="text-teal" />
          </div>
          <h2 className="section-title">System Architecture</h2>
        </div>
        <p className="text-navy/50 max-w-xl mb-6 leading-relaxed text-sm">
          System design walkthroughs — data flow, component choices, and engineering decisions.
        </p>
      </FadeUp>

      {/* Project Selector */}
      <FadeUp delay={0.1}>
        <div className="flex flex-wrap gap-2.5 mb-6">
          {featuredProjects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === p.id
                  ? 'bg-navy text-ivory shadow-sm'
                  : 'bg-white border border-stone/60 text-navy/60 hover:border-navy/30 hover:text-navy'
              }`}
            >
              {p.title.split(' ').slice(0, 3).join(' ')}…
            </button>
          ))}
        </div>
      </FadeUp>

      {/* Architecture Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="card border-teal/15 p-8"
        >
          {/* Project info */}
          <div className="mb-8">
            <h3 className="font-display font-semibold text-navy text-xl mb-2">
              {selectedProject.title}
              {selectedProject.subtitle && (
                <span className="text-teal font-normal ml-2 text-lg">
                  {selectedProject.subtitle}
                </span>
              )}
            </h3>
            <p className="text-navy/55 text-sm max-w-2xl leading-relaxed">
              {selectedProject.summary}
            </p>
          </div>

          {/* Architecture Flow Diagram */}
          <div className="bg-ivory/80 rounded-xl border border-stone/50 mb-8 overflow-hidden">
            <div className="px-6 pt-5 pb-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy/40">
                Data Flow & Architecture
              </span>
            </div>
            <ArchDiagram steps={selectedProject.architecture} />
          </div>

          {/* Two-col: Engineering decisions + Challenges */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-navy text-sm mb-4 uppercase tracking-wider text-xs text-navy/40">
                Engineering Decisions
              </h4>
              <ul className="space-y-3">
                {selectedProject.engineering.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-navy/60 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal/5 border border-teal/15 rounded-xl p-5">
              <h4 className="font-semibold text-teal text-xs uppercase tracking-wider mb-3">
                Core Challenge
              </h4>
              <p className="text-sm text-navy/65 leading-relaxed">
                {selectedProject.challenges}
              </p>

              <div className="mt-6">
                <h4 className="font-semibold text-navy text-xs uppercase tracking-wider mb-3 text-navy/40">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tag-teal text-[11px]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
