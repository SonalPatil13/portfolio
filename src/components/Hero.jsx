import { motion } from 'framer-motion';
import { GitFork, Link2, Mail, ArrowDown, MapPin } from 'lucide-react';
const Github = GitFork;
const Linkedin = Link2;
import { perSonalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute bottom-32 left-10 w-72 h-72 rounded-full bg-terracotta/5 blur-3xl" />
      </div>

      <div className="section-padding max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-3">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/10 border border-teal/20 text-teal text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              GenAI Engineer · Ahmedabad, India
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.08] mb-6"
            >
              Sonal
              <br />
              <span className="gradient-text">Patil</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-xl md:text-2xl text-navy/70 font-light leading-relaxed mb-3 max-w-xl"
            >
              {perSonalInfo.tagline}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-navy/50 tracking-wide mb-10"
            >
              {perSonalInfo.subTagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex items-center gap-5"
            >
              <a
                href={perSonalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-navy/50 hover:text-teal transition-colors text-sm"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={perSonalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-navy/50 hover:text-teal transition-colors text-sm"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${perSonalInfo.email}`}
                className="flex items-center gap-2 text-navy/50 hover:text-teal transition-colors text-sm"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Stats / Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="card border-stone/60 p-8 relative">
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal/20 to-terracotta/20 border border-stone flex items-center justify-center mb-6">
                <span className="font-display text-3xl font-bold text-teal">SP</span>
              </div>

              <h3 className="font-semibold text-navy text-lg mb-1">Sonal Patil</h3>
              <p className="text-teal text-sm font-medium mb-6">GenAI Engineer @ Adrta Technologies</p>

              {/* Key stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: 'Systems Built', value: '5+', sub: 'Production AI' },
                  { label: 'Experience', value: '1+', sub: 'Years in AI' },
                  { label: 'Education', value: '8.5', sub: 'CGPA (B.E.)' },
                  { label: 'Stack', value: 'Full', sub: 'AI → Backend' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-ivory rounded-xl p-4 border border-stone/50">
                    <div className="text-2xl font-display font-bold text-navy">{stat.value}</div>
                    <div className="text-xs text-teal font-medium">{stat.sub}</div>
                    <div className="text-xs text-navy/40 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Core focus tags */}
              <div className="flex flex-wrap gap-2">
                {['RAG Systems', 'Agentic AI', 'LangGraph', 'FastAPI', 'Document Intelligence'].map((tag) => (
                  <span key={tag} className="tag-teal">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy/30"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
