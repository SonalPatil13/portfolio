import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from './ui/Animations';
import { personalInfo } from '../data/portfolio';
import { Mail, GitFork, Link2, MapPin, Send, CheckCircle } from 'lucide-react';
const Github = GitFork;
const Linkedin = Link2;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens default email client with pre-filled details
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Hi Sonal,\n\n${form.message}\n\nBest,\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-10 md:py-14 bg-navy scroll-mt-16">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <FadeUp>
          <div className="flex items-center gap-3.5 mb-2">
            <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center">
              <Mail size={20} className="text-teal-light" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-ivory font-bold">Contact</h2>
          </div>
          <p className="text-teal-light font-display text-xl md:text-2xl mb-2">
            Let's build something meaningful together.
          </p>
          <p className="text-white/40 max-w-lg mb-8 leading-relaxed text-sm">
            Whether you're looking for an GenAI Engineer for your team, want to collaborate on
            a challenging problem, or just want to talk about AI systems — I'd love to hear
            from you.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <FadeUp delay={0.1}>
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'sonalpatil-genaiengineer',
                  href: personalInfo.linkedin,
                },
                {
                  icon: Github,
                  label: 'GitHub',
                  value: 'SonalPatil13',
                  href: personalInfo.github,
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: personalInfo.location,
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center shrink-0">
                    <item.icon size={16} className="text-teal-light" />
                  </div>
                  <div>
                    <p className="text-xs text-white/35 uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-white/75 hover:text-teal-light transition-colors text-sm font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white/75 text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </FadeUp>

            {/* Availability note */}
            <FadeUp delay={0.2}>
              <div className="mt-10 p-5 rounded-xl border border-teal/25 bg-teal/10">
                <p className="text-xs font-semibold text-teal-light uppercase tracking-wider mb-2">
                  Response time
                </p>
                <p className="text-sm text-white/55 leading-relaxed">
                  I typically respond within 24–48 hours. For urgent opportunities,
                  reaching out on LinkedIn is usually fastest.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Contact Form */}
          <FadeUp delay={0.15} className="lg:col-span-3">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <CheckCircle size={48} className="text-teal-light mb-5" />
                <h3 className="font-display text-2xl text-ivory mb-3">Your email client opened!</h3>
                <p className="text-white/40 max-w-sm">
                  Your message draft is ready to send. Looking forward to connecting with you.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Smith' },
                  { name: 'email', label: 'Email address', type: 'email', placeholder: 'jane@company.com' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      required
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder-white/25 focus:outline-none focus:border-teal/50 transition-colors text-sm"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the opportunity, project, or question you have..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-ivory placeholder-white/25 focus:outline-none focus:border-teal/50 transition-colors resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-teal hover:bg-teal-light text-ivory font-medium rounded-xl transition-all duration-200 shadow-sm"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
