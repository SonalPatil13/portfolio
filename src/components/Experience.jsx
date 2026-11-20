import { FadeUp } from './ui/Animations';
import { experience, education, certifications } from '../data/portfolio';
import { Briefcase, GraduationCap, Award, ChevronRight } from 'lucide-react';

function SectionLabel({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <div className="w-7 h-7 rounded-lg bg-teal/10 flex items-center justify-center">
        <Icon size={14} className="text-teal" />
      </div>
      <h3 className="font-semibold text-navy text-xs uppercase tracking-widest">{label}</h3>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-14 section-padding max-w-7xl mx-auto scroll-mt-16">

      {/* ── Page Title ── */}
      <FadeUp>
        <div className="flex items-center gap-3.5 mb-2">
          <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
            <Briefcase size={20} className="text-teal" />
          </div>
          <h2 className="section-title">Experience</h2>
        </div>
        <p className="text-navy/50 max-w-xl mb-6 leading-relaxed text-sm">
          Where I've built things — my professional journey, academic foundation, and certifications.
        </p>
      </FadeUp>

      {/* ── 1. WORK EXPERIENCE ── */}
      <FadeUp delay={0.08}>
        <SectionLabel icon={Briefcase} label="Work Experience" />
      </FadeUp>

      <div className="mb-8">
        {experience.map((job, i) => (
          <FadeUp key={i} delay={0.12 + i * 0.08}>
            <div className="relative pl-6 border-l-2 border-stone/60 pb-4">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-teal border-2 border-ivory" />
              <div className="card ml-4 p-5">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-semibold text-navy text-base">{job.company}</h4>
                    <p className="text-teal font-medium text-sm mt-0.5">{job.role}</p>
                  </div>
                  <span className="text-xs text-navy/40 font-medium bg-stone/50 px-3 py-1 rounded-full whitespace-nowrap">
                    {job.duration}
                  </span>
                </div>
                <ul className="space-y-2.5 mb-4">
                  {job.description.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-navy/60 leading-relaxed">
                      <ChevronRight size={14} className="text-teal shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="tag-teal text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* ── 2. EDUCATION ── */}
      <FadeUp delay={0.15}>
        <SectionLabel icon={GraduationCap} label="Education" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-stone/60 bg-white/60 hover:border-teal/30 transition-colors"
            >
              <div className="flex justify-between items-start gap-2 mb-1.5">
                <h4 className="font-medium text-navy text-sm leading-snug">{edu.degree}</h4>
                <span className="text-xs font-bold text-teal bg-teal/10 px-2 py-0.5 rounded whitespace-nowrap shrink-0">
                  {edu.score}
                </span>
              </div>
              <p className="text-xs text-navy/50">{edu.institution}</p>
              <p className="text-xs text-navy/40 mt-1">{edu.duration}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* ── 3. CERTIFICATIONS ── */}
      <FadeUp delay={0.2}>
        <SectionLabel icon={Award} label="Certifications & Training" />
        <div className="grid sm:grid-cols-2 gap-3.5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="p-4 rounded-xl border border-stone/60 bg-white/60 hover:border-terracotta/30 transition-colors"
            >
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-terracotta/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Award size={14} className="text-terracotta" />
                </div>
                <div>
                  <h4 className="font-medium text-navy text-sm">{cert.title}</h4>
                  <p className="text-xs text-teal mt-0.5">{cert.org}</p>
                  <p className="text-xs text-navy/40 mt-0.5">{cert.date}</p>
                  <p className="text-xs text-navy/55 mt-1.5 leading-relaxed">{cert.highlight}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>

    </section>
  );
}
