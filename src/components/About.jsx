import { FadeUp, FadeIn } from './ui/Animations';
import { perSonalInfo, principles } from '../data/portfolio';
import { Shield, Layers, BarChart2, BookOpen, User } from 'lucide-react';

const iconMap = {
  'Architecture First': Layers,
  'Evaluate Everything': BarChart2,
  'Safety by Design': Shield,
  'Build to Understand': BookOpen,
};

export default function About() {
  return (
    <section id="about" className="py-10 md:py-14 section-padding max-w-7xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <FadeUp>
        <div className="flex items-center gap-3.5 mb-2">
          <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
            <User size={20} className="text-teal" />
          </div>
          <h2 className="section-title">About Me</h2>
        </div>
        <p className="text-navy/50 max-w-xl mb-6 leading-relaxed text-sm">
          Engineer first, AI practitioner second — my background, core focus, and engineering values.
        </p>
      </FadeUp>

      <div className="grid lg:grid-cols-5 gap-10 items-start">
        {/* Left: Story */}
        <div className="lg:col-span-3">
          <FadeUp delay={0.1}>
            <h3 className="font-display text-2xl text-navy font-semibold mb-4 leading-snug">
              Building practical AI solutions with an{' '}
              <span className="text-teal font-normal italic">engineering-first</span> mindset.
            </h3>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="space-y-4 text-navy/65 leading-relaxed text-[15px]">
              <p>
                I'm an ML Engineer who builds practical, production-oriented AI systems — not just prototypes.
                My work spans RAG pipelines, agentic AI, conversational systems and intelligent document
                automation that enterprise teams actually use day to day.
              </p>
              <p>
                What drives me isn't the hype around AI — it's the{' '}
                <strong className="text-navy font-medium">engineering craft</strong>: understanding how systems
                fail in production, designing retrieval pipelines that actually surface the right information,
                and building agents that make decisions you can trust.
              </p>
              <p>
                I care deeply about{' '}
                <strong className="text-navy font-medium">AI safety and responsible deployment</strong>. I think
                the most important skill in this field is knowing when to keep the AI in the loop and when to
                hand control back to humans.
              </p>
              <p>
                I believe the best AI systems are ones that solve real business problems elegantly — not ones
                that use the most cutting-edge model, but ones that are designed with the right architecture
                for the right problem.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={perSonalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2 px-4">
                GitHub Profile
              </a>
              <a href={perSonalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm py-2 px-4">
                LinkedIn
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Right: Engineering Principles */}
        <div className="lg:col-span-2">
          <FadeUp delay={0.15}>
            <p className="text-xs font-semibold tracking-widest uppercase text-navy/40 mb-4">
              Engineering Principles
            </p>
            <div className="space-y-3.5">
              {principles.map((p, i) => {
                const Icon = iconMap[p.title] || BookOpen;
                return (
                  <FadeUp key={p.title} delay={0.2 + i * 0.08}>
                    <div className="flex gap-4 group">
                      <div className="mt-1 w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                        <Icon size={15} className="text-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy text-sm mb-1">{p.title}</h4>
                        <p className="text-sm text-navy/55 leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
