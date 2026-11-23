import { GitFork, Link2, Mail, Heart } from 'lucide-react';
const Github = GitFork;
const Linkedin = Link2;
import { perSonalInfo } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/5 py-10">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center">
              <span className="text-ivory font-display font-bold text-sm">S</span>
            </div>
            <div>
              <p className="text-white/70 font-medium text-sm">SaxiPatil</p>
              <p className="text-white/30 text-xs">AI Engineer</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-6 justify-center">
            {['About', 'Skills', 'Projects', 'Architecture', 'Case Studies', 'Mentorship', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-xs text-white/35 hover:text-teal-light transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={perSonalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-teal/20 flex items-center justify-center transition-colors"
            >
              <Github size={15} className="text-white/50 hover:text-teal-light" />
            </a>
            <a
              href={perSonalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-teal/20 flex items-center justify-center transition-colors"
            >
              <Linkedin size={15} className="text-white/50 hover:text-teal-light" />
            </a>
            <a
              href={`mailto:${perSonalInfo.email}`}
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-teal/20 flex items-center justify-center transition-colors"
            >
              <Mail size={15} className="text-white/50 hover:text-teal-light" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {year} SaxiPatil. All rights reserved.
          </p>
          <p className="text-white/20 text-xs flex items-center gap-1.5">
            Built with React · Vite · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
