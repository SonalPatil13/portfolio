import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './ui/Animations';
import { projects } from '../data/portfolio';
import { Calendar, ArrowRight, ChevronDown, ChevronUp, Layers } from 'lucide-react';

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeUp delay={index * 0.08}>
      <div className={`card group cursor-pointer h-full flex flex-col ${project.featured ? 'border-teal/20' : ''}`}>
        {project.featured && (
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta bg-terracotta/10 px-3 py-1 rounded-full mb-4 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
            Featured Project
          </div>
        )}

        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-display font-semibold text-navy text-lg leading-snug group-hover:text-teal transition-colors">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-teal text-sm mt-0.5">{project.subtitle}</p>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-navy/40 shrink-0 mt-1">
            <Calendar size={12} />
            {project.year}
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm text-navy/60 leading-relaxed mb-5">{project.summary}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-teal">{tag}</span>
          ))}
        </div>

        {/* Expand toggle — push to bottom */}
        <div className="mt-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-sm font-medium text-teal hover:text-teal-light transition-colors"
          >
            {expanded ? (
              <>Less detail <ChevronUp size={16} /></>
            ) : (
              <>Project deep-dive <ChevronDown size={16} /></>
            )}
          </button>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-stone/50 space-y-5">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy/40 block mb-2">The Problem</span>
                  <p className="text-sm text-navy/65 leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy/40 block mb-2">The Solution</span>
                  <p className="text-sm text-navy/65 leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-navy/40 block mb-3">Key Engineering Decisions</span>
                  <ul className="space-y-2">
                    {project.engineering.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-navy/60 leading-relaxed">
                        <ArrowRight size={14} className="text-teal shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-teal/5 border border-teal/15 rounded-xl p-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal block mb-2">Core Challenge Solved</span>
                  <p className="text-sm text-navy/65 leading-relaxed">{project.challenges}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-10 md:py-14 bg-navy/[0.02] border-y border-stone/40 scroll-mt-16">
      <div className="section-padding max-w-7xl mx-auto">

        {/* ── Page Title ── */}
        <FadeUp>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
            <div>
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                  <Layers size={20} className="text-teal" />
                </div>
                <h2 className="section-title">Projects</h2>
              </div>
              <p className="text-navy/50 max-w-lg leading-relaxed text-sm">
                What I've built — production AI systems designed and deployed for enterprise use.
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-display font-bold text-navy">{projects.length}</div>
              <div className="text-xs text-navy/40 mt-0.5">AI Systems Built</div>
            </div>
          </div>
        </FadeUp>

        {/* Featured Projects — always 2 columns */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other Projects — 2 columns */}
        <div className="grid md:grid-cols-2 gap-5">
          {others.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + featured.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
