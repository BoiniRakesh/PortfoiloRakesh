import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '../../data/portfolio';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label">💬 Testimonials</div>
          <h2 className="section-title">What Colleagues <span className="gradient-text">Say</span></h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="card p-10 text-center"
            >
              <FaQuoteLeft size={28} className="mx-auto mb-6" style={{ color: 'var(--brand)', opacity: 0.4 }} />
              <p className="text-lg leading-relaxed mb-8 italic" style={{ color: 'var(--text-primary)' }}>
                "{testimonials[current].text}"
              </p>
              <div>
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold"
                  style={{ background: 'linear-gradient(135deg, var(--brand-dark), var(--brand-light))' }}
                >
                  {testimonials[current].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                  {testimonials[current].name}
                </div>
                <div className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  {testimonials[current].role} · {testimonials[current].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button onClick={prev} className="btn-secondary p-3 rounded-xl" aria-label="Previous">
              <FaChevronLeft size={14} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2 h-2 rounded-full transition-all duration-200"
                  style={{ background: i === current ? 'var(--brand)' : 'var(--border)' }}
                />
              ))}
            </div>
            <button onClick={next} className="btn-secondary p-3 rounded-xl" aria-label="Next">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
