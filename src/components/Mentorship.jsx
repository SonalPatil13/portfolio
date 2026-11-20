import { motion } from 'framer-motion';
import { FadeUp } from './ui/Animations';
import { mentorInfo } from '../data/portfolio';
import { Compass, Quote, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Mentorship() {
  return (
    <section id="mentorship" className="py-10 md:py-14 section-padding max-w-7xl mx-auto scroll-mt-16">
      {/* ── Section Header ── */}
      <FadeUp>
        <div className="flex items-center gap-3.5 mb-2">
          <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
            <Compass size={20} className="text-teal" />
          </div>
          <h2 className="section-title">Mentorship & Leadership</h2>
        </div>
        <p className="text-navy/50 max-w-xl mb-7 leading-relaxed text-sm">
          Recognizing the guidance, technical direction, and continuous support that shaped my AI journey from scratch.
        </p>
      </FadeUp>

      {/* ── Main Mentor Card ── */}
      <FadeUp delay={0.1}>
        <div className="card p-6 md:p-8 border-teal/20 relative overflow-hidden bg-gradient-to-br from-white via-white to-teal/[0.03]">
          {/* Subtle decorative accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-teal/5 rounded-full blur-2xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone/50">
            <div className="flex items-center gap-4">
              {/* Avatar Initials Badge */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal to-teal-light text-ivory flex items-center justify-center font-display text-xl font-bold shadow-sm shrink-0">
                SP
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-display text-2xl font-bold text-navy">{mentorInfo.name}</h3>
                  <span className="text-[11px] font-semibold text-teal bg-teal/10 px-3 py-0.5 rounded-full border border-teal/20">
                    {mentorInfo.tenure}
                  </span>
                </div>
                <p className="text-teal font-medium text-sm mt-0.5">{mentorInfo.role}</p>
                <p className="text-navy/40 text-xs mt-0.5">
                  {mentorInfo.company} · {mentorInfo.experience}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-stone/40 px-3.5 py-1.5 rounded-xl border border-stone/60 w-fit">
              <Award size={15} className="text-terracotta" />
              <span className="text-xs text-navy/70 font-medium">Engineering Manager & Mentor</span>
            </div>
          </div>

          {/* Body Narrative */}
          <div className="py-6">
            <p className="text-navy/70 text-[15px] leading-relaxed max-w-3xl">
              {mentorInfo.summary}
            </p>
          </div>

          {/* 4 Pillars of Mentorship Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {mentorInfo.contributions.map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-ivory/60 border border-stone/50 hover:border-teal/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={13} className="text-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm leading-snug">{item.title}</h4>
                    <p className="text-xs text-navy/55 mt-1.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Quote Block */}
          <div className="bg-gradient-to-r from-teal/10 via-teal/5 to-transparent border-l-4 border-teal rounded-r-xl p-4.5 flex gap-3.5 items-start">
            <div className="w-8 h-8 rounded-lg bg-teal/15 flex items-center justify-center shrink-0 mt-0.5">
              <Quote size={15} className="text-teal" />
            </div>
            <div>
              <p className="text-xs font-semibold text-teal uppercase tracking-wider mb-1">
                Guiding Philosophy & Impact
              </p>
              <p className="text-sm text-navy/75 italic leading-relaxed">
                "{mentorInfo.quote}"
              </p>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
