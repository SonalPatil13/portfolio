import { FadeUp } from './ui/Animations';
import { currentlyExploring } from '../data/portfolio';

export default function LearningJourney() {
  return (
    <section id="exploring" className="py-28 section-padding max-w-7xl mx-auto">
      {/* Header */}
      <FadeUp>
        <div className="flex items-center gap-4 mb-5">
          <div className="h-px flex-1 bg-stone/60 max-w-12" />
          <span className="text-xs font-medium tracking-widest uppercase text-teal">Currently Exploring</span>
        </div>
        <div className="grid lg:grid-cols-5 gap-10 mb-16 items-end">
          <div className="lg:col-span-3">
            <h2 className="section-title mb-4">
              What I'm building
              <br />
              <em className="not-italic text-teal">knowledge on right now</em>
            </h2>
            <p className="text-navy/50 leading-relaxed max-w-lg">
              The frontier of GenAI Engineering moves fast. These are the areas I'm actively
              investing time in — reading papers, building experiments, and forming opinions on.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="p-5 bg-terracotta/8 border border-terracotta/20 rounded-2xl">
              <p className="text-xs font-semibold text-terracotta uppercase tracking-wider mb-2">
                Learning approach
              </p>
              <p className="text-sm text-navy/60 leading-relaxed">
                I learn by building. Every topic here comes with a small experiment or code
                exploration — not just reading. I believe the fastest way to understand an AI
                concept is to break it in a controlled environment.
              </p>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Exploration cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {currentlyExploring.map((item, i) => (
          <FadeUp key={item.topic} delay={i * 0.08}>
            <div className="card h-full group hover:border-teal/30">
              <div className="text-3xl mb-5">{item.icon}</div>
              <h3 className="font-semibold text-navy mb-3 group-hover:text-teal transition-colors">
                {item.topic}
              </h3>
              <p className="text-sm text-navy/55 leading-relaxed">{item.description}</p>

              {/* Progress indicator */}
              <div className="mt-5 pt-4 border-t border-stone/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-navy/40">In progress</span>
                  <span className="text-xs text-teal font-medium">Active</span>
                </div>
                <div className="h-1 bg-stone/60 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal to-teal-light"
                    style={{ width: `${[65, 45, 55, 70][i]}%` }}
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      {/* Learning timeline / journey */}
      <FadeUp delay={0.3} className="mt-20">
        <div className="card border-stone/60 p-8">
          <h3 className="font-display font-semibold text-navy text-xl mb-8">
            Engineering Learning Journey
          </h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-stone/60" />
            <div className="space-y-8 pl-12">
              {[
                {
                  period: '2024',
                  title: 'Data Foundation',
                  body: 'Built strong data analysis skills through IBM SkillBuild and hands-on work with 1M+ row datasets. Learned to think in data before thinking in models.',
                  tags: ['Python', 'SQL', 'Power BI', 'EDA'],
                },
                {
                  period: 'Early 2025',
                  title: 'GenAI Engineering Entry — First Principles',
                  body: 'Started building RAG pipelines without frameworks first — to truly understand chunking, embedding, and vector retrieval from scratch. This foundation proved invaluable.',
                  tags: ['RAG', 'ChromaDB', 'Embeddings', 'Prompt Engineering'],
                },
                {
                  period: 'Mid 2025',
                  title: 'Production Systems at Adrta',
                  body: 'Moved into production — building AI systems that enterprise teams depend on daily. Learned that production reliability demands very different thinking from prototype quality.',
                  tags: ['LangChain', 'FastAPI', 'Document Intelligence'],
                },
                {
                  period: '2026',
                  title: 'Agentic AI & Stateful Systems',
                  body: 'Deep work with LangGraph to build multi-turn, stateful agentic systems. Implemented RAGAS evaluation to bring rigour to AI output quality measurement.',
                  tags: ['LangGraph', 'RAGAS', 'Agentic AI', 'Multi-turn Dialogue'],
                },
                {
                  period: 'Now',
                  title: 'Multi-Agent Orchestration & Fine-Tuning',
                  body: 'Exploring collaborative multi-agent patterns, LLM fine-tuning with LoRA/QLoRA, and production-grade vector search optimization. The next frontier.',
                  tags: ['Multi-Agent', 'Fine-tuning', 'Vector Optimization', 'AI Safety'],
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-9 top-1 w-3 h-3 rounded-full bg-teal border-2 border-ivory" />
                  <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                    {item.period}
                  </span>
                  <h4 className="font-semibold text-navy mt-1 mb-2">{item.title}</h4>
                  <p className="text-sm text-navy/60 leading-relaxed mb-3">{item.body}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag text-[11px]">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
