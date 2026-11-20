import { FadeUp } from './ui/Animations';
import { projects } from '../data/portfolio';
import { ArrowRight, FlaskConical } from 'lucide-react';

// Engineering decisions with numbered steps — case study format
function CaseStudy({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <FadeUp delay={index * 0.1}>
      <div className="border border-stone/50 rounded-2xl overflow-hidden hover:border-teal/25 transition-colors mb-6">
        {/* Header strip */}
        <div className={`px-8 py-6 ${isEven ? 'bg-teal/5' : 'bg-terracotta/5'} border-b border-stone/40`}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-navy/40 block mb-2">
                Case Study {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display font-semibold text-navy text-xl leading-snug">
                {project.title}
              </h3>
              {project.subtitle && (
                <p className="text-teal text-sm mt-1">{project.subtitle}</p>
              )}
            </div>
            <div className="flex flex-wrap gap-2 max-w-xs">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="tag text-[11px]">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-8 bg-white/50">
          {/* Problem → Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy/40 block mb-3">
                Problem Statement
              </span>
              <p className="text-sm text-navy/65 leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-navy/40 block mb-3">
                Solution Approach
              </span>
              <p className="text-sm text-navy/65 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Engineering breakdown — numbered steps */}
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-navy/40 block mb-5">
              Engineering Breakdown
            </span>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.engineering.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-7 h-7 rounded-lg bg-navy/8 border border-stone flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-navy/50">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="text-sm text-navy/60 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge callout */}
          <div className="flex gap-4 bg-gradient-to-r from-teal/8 to-transparent border-l-4 border-teal rounded-r-xl p-5">
            <div className="shrink-0 mt-0.5">
              <span className="text-lg">💡</span>
            </div>
            <div>
              <span className="text-xs font-bold text-teal uppercase tracking-wider block mb-1.5">
                Key Technical Insight
              </span>
              <p className="text-sm text-navy/65 leading-relaxed">{project.challenges}</p>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}

export default function CaseStudies() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="case-studies" className="py-10 md:py-14 bg-navy/[0.02] border-y border-stone/40 scroll-mt-16">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp>
          <div className="flex items-center gap-3.5 mb-2">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <FlaskConical size={20} className="text-teal" />
            </div>
            <h2 className="section-title">Case Studies</h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-6 mb-7 items-start">
            <div className="lg:col-span-3">
              <h3 className="font-display text-2xl text-navy font-semibold mb-2 leading-snug">
                How I think through{' '}
                <em className="not-italic text-teal">hard engineering problems</em>
              </h3>
              <p className="text-navy/50 leading-relaxed text-sm">
                Deep dives into the real technical challenges behind each system — the decisions
                made, the trade-offs considered, and the specific insights that made the difference
                between a prototype and a system that works in production.
              </p>
            </div>
            <div className="lg:col-span-2 p-5 rounded-2xl bg-teal/8 border border-teal/15">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal mb-2">
                My Engineering Philosophy
              </p>
              <p className="text-xs md:text-sm text-navy/65 leading-relaxed">
                Every design decision in these systems was made by understanding the problem deeply
                first — not by picking a popular library. The goal is always a system that's
                <strong className="text-navy font-medium"> reliable, explainable, and maintainable</strong>,
                not just impressive in a demo.
              </p>
            </div>
          </div>
        </FadeUp>

        {/* Case Studies */}
        {featuredProjects.map((project, i) => (
          <CaseStudy key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
