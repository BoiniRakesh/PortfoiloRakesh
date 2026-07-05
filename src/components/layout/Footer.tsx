import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';
import { Link as ScrollLink } from 'react-scroll';
import { personalInfo } from '../../data/portfolio';

const quickLinks = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
const socials = [
  { icon: FaGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: SiLeetcode, href: personalInfo.social.leetcode, label: 'LeetCode' },
  { icon: SiHackerrank, href: personalInfo.social.hackerrank, label: 'HackerRank' },
  { icon: FaEnvelope, href: personalInfo.social.email, label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg-secondary)' }}>
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-light)] flex items-center justify-center">
                <span className="text-white font-bold text-sm font-mono">BR</span>
              </div>
              <span className="font-bold" style={{ color: 'var(--text-primary)' }}>
                Boini Rakesh
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              Full Stack Java Developer building enterprise-grade applications with Spring Boot, React, and Microservices.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg transition-colors"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <ScrollLink
                    to={link}
                    smooth
                    duration={600}
                    offset={-80}
                    className="text-sm cursor-pointer transition-colors capitalize hover:text-[var(--brand)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {link}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4 uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
              Get In Touch
            </h3>
            <div className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <p>📧 {personalInfo.email}</p>
              <p>📱 {personalInfo.phone}</p>
              <p>📍 {personalInfo.location}</p>
              <p className="mt-4">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span style={{ color: '#4ade80' }}>Available for opportunities</span>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: 'var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
            © {new Date().getFullYear()} Boini Rakesh. All rights reserved.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: 'var(--text-tertiary)' }}>
            Built with <FaHeart size={10} color="#f43f5e" /> using React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
