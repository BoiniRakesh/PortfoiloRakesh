import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Build a mailto link — opens the user's email client, works 100% with zero setup
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hi Rakesh,\n\n${form.message}\n\n---\nFrom: ${form.name}\nEmail: ${form.email}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoUrl;

    // Show success state
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 6000);
  };

  const baseInput: React.CSSProperties = {
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    borderRadius: '12px',
    padding: '11px 15px',
    fontSize: '14px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    fontFamily: 'inherit',
  };

  const focusInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--brand)';
    e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.12)';
  };
  const blurInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--border)';
    e.target.style.boxShadow = 'none';
  };

  const contactItems = [
    { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  const socials = [
    { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub', color: 'var(--text-primary)' },
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn', color: '#0ea5e9' },
    { icon: SiLeetcode, href: personalInfo.social.leetcode, label: 'LeetCode', color: '#f59e0b' },
  ];

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <div className="section-label">📬 Contact</div>
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Have an opportunity, project, or just want to talk tech? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">

            {/* ── Left panel ── */}
            <motion.div variants={staggerItem} className="lg:col-span-2 space-y-5">
              <div className="card p-6">
                <h3 className="font-bold text-base mb-5" style={{ color: 'var(--text-primary)' }}>
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-center gap-3 group">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
                      >
                        <Icon size={14} style={{ color: 'var(--brand)' }} />
                      </div>
                      <div>
                        <div className="text-xs mb-0.5" style={{ color: 'var(--text-tertiary)' }}>{label}</div>
                        <div
                          className="text-sm font-medium transition-colors group-hover:text-[var(--brand)]"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t" style={{ borderColor: 'var(--border)' }}>
                  <p className="text-xs mb-3" style={{ color: 'var(--text-tertiary)' }}>Find me on</p>
                  <div className="flex gap-2">
                    {socials.map(({ icon: Icon, href, label, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                        style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)', color }}
                        aria-label={label}
                      >
                        <Icon size={15} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(167,139,250,0.06))',
                  border: '1px solid rgba(99,102,241,0.2)',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    Available for Opportunities
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Open to full-time roles, contract projects, and freelance work. Response within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* ── Right: Form ── */}
            <motion.div variants={staggerItem} className="lg:col-span-3">
              <div className="card p-7">
                <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                  Send a Message
                </h3>
                <p className="text-xs mb-5" style={{ color: 'var(--text-tertiary)' }}>
                  Fills out and opens your email client automatically.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Name <span style={{ color: 'var(--brand)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        style={baseInput}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                        Your Email <span style={{ color: 'var(--brand)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={baseInput}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Subject <span style={{ color: 'var(--brand)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Job Opportunity / Project / Just saying hi"
                      style={baseInput}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                      Message <span style={{ color: 'var(--brand)' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the opportunity, project, or just say hello..."
                      style={{ ...baseInput, resize: 'vertical' }}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  {/* Success banner */}
                  {status === 'sent' && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl text-sm font-medium text-center"
                      style={{
                        background: 'rgba(74,222,128,0.1)',
                        border: '1px solid rgba(74,222,128,0.3)',
                        color: '#4ade80',
                      }}
                    >
                      ✓ Your email client should have opened with the message pre-filled!
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01, y: -1 }}
                    whileTap={{ scale: 0.99 }}
                    style={{
                      width: '100%',
                      padding: '13px 24px',
                      borderRadius: '12px',
                      background: status === 'sent'
                        ? 'rgba(74,222,128,0.15)'
                        : 'linear-gradient(135deg, #4338ca, #6366f1)',
                      color: status === 'sent' ? '#4ade80' : '#ffffff',
                      border: status === 'sent' ? '1px solid rgba(74,222,128,0.3)' : 'none',
                      fontWeight: 600,
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: status === 'sent' ? 'none' : '0 4px 20px -4px rgba(99,102,241,0.4)',
                      transition: 'background 0.3s, box-shadow 0.3s',
                    }}
                  >
                    {status === 'idle' ? (
                      <><span>Open Email Client</span><span>→</span></>
                    ) : (
                      <><span>✓</span><span>Email Client Opened!</span></>
                    )}
                  </motion.button>

                  <p className="text-center text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    Or email directly at{' '}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="underline transition-colors hover:text-[var(--brand)]"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
