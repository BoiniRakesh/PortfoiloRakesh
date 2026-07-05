import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { HiSun, HiMoon, HiMenu, HiX } from 'react-icons/hi';
import { useTheme, useScrollProgress } from '../../hooks/index';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Blog', to: 'blog' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const scrollProgress = useScrollProgress();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass border-b border-[var(--border)] shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <ScrollLink to="home" smooth duration={600} className="cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-light)] flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-mono">BR</span>
                </div>
                <span className="font-bold text-sm hidden sm:block" style={{ color: 'var(--text-primary)' }}>
                  Rakesh<span style={{ color: 'var(--brand)' }}>Boini</span>
                </span>
              </motion.div>
            </ScrollLink>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={600}
                  spy
                  offset={-80}
                  activeClass="active"
                  className="nav-link cursor-pointer"
                >
                  {item.label}
                </ScrollLink>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggle}
                className="p-2 rounded-lg transition-colors"
                style={{
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border)',
                }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isDark ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isDark ? <HiSun size={18} /> : <HiMoon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              <ScrollLink to="contact" smooth duration={600}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary hidden sm:flex text-xs px-4 py-2"
                >
                  Hire Me
                </motion.button>
              </ScrollLink>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg"
                style={{ color: 'var(--text-secondary)', background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden border-t overflow-hidden"
              style={{ borderColor: 'var(--border)', background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}
            >
              <div className="section-container py-4 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <ScrollLink
                      to={item.to}
                      smooth
                      duration={600}
                      offset={-80}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2.5 px-4 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.label}
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
