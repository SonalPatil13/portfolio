import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from './ui/Animations';
import { skills } from '../data/portfolio';
import { Cpu, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('AI & LLM');
  const categories = Object.keys(skills);

  return (
    <section id="skills" className="py-10 md:py-14 bg-navy/[0.02] border-y border-stone/40 scroll-mt-16">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp>
          <div className="flex items-center gap-3.5 mb-2">
            <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
              <Cpu size={20} className="text-teal" />
            </div>
            <h2 className="section-title">Skills & Expertise</h2>
          </div>
          <p className="text-navy/50 max-w-lg mb-6 leading-relaxed text-sm">
            Core technologies, frameworks, and tools I use to design, develop, and deploy production AI solutions.
          </p>
        </FadeUp>

        {/* Category Tabs */}
        <FadeUp delay={0.08}>
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-teal text-ivory shadow-sm'
                    : 'bg-white border border-stone/60 text-navy/60 hover:border-teal/40 hover:text-teal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
        >
          {skills[activeCategory].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="card group p-4 flex items-center justify-between hover:border-teal/40 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-teal/10 group-hover:bg-teal/20 flex items-center justify-center transition-colors">
                  <CheckCircle2 size={14} className="text-teal" />
                </div>
                <span className="font-medium text-navy text-sm group-hover:text-teal transition-colors">
                  {skill.name}
                </span>
              </div>
              <span className="text-[11px] font-medium text-navy/40 bg-stone/50 px-2.5 py-1 rounded-full">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Ecosystem */}
        <FadeUp delay={0.15} className="mt-8 pt-6 border-t border-stone/50">
          <p className="text-xs font-semibold tracking-widest uppercase text-navy/40 mb-3 text-center">
            Comprehensive AI & Software Stack
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              'Python', 'LangChain', 'LangGraph', 'RAG', 'RAGAS', 'ChromaDB',
              'FastAPI', 'Django', 'SQL Server', 'PostgreSQL', 'Docker', 'Git',
              'HuggingFace', 'Prompt Engineering', 'Embedding Models', 'Cross-Encoder Reranking',
              'Agentic AI', 'Multi-turn Dialogue', 'Vector Search', 'LLM Evaluation'
            ].map((tech) => (
              <span key={tech} className="tag hover:border-teal/40 hover:text-teal cursor-default transition-colors text-xs">
                {tech}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
