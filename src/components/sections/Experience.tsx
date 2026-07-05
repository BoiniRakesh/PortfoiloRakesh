import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { experiences } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <div className="section-label">💼 Experience</div>
            <h2 className="section-title">
              Where I've <span className="gradient-text">Worked</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Building enterprise-grade software at scale, from backend APIs to cloud deployments.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className="relative"
              >
                <div className="card p-8 mb-6">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Company icon */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.1))', border: '1px solid rgba(99,102,241,0.2)' }}
                      >
                        <FaBriefcase size={20} style={{ color: 'var(--brand)' }} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-400/10 text-green-400 border border-green-400/20">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-base font-semibold mt-1 hover:underline transition-colors"
                          style={{ color: 'var(--brand)' }}
                        >
                          {exp.company}
                          <FaExternalLinkAlt size={10} />
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:text-right">
                      <div className="flex items-center gap-1.5 text-sm sm:justify-end" style={{ color: 'var(--text-tertiary)' }}>
                        <FaCalendar size={11} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm sm:justify-end" style={{ color: 'var(--text-tertiary)' }}>
                        <FaMapMarkerAlt size={11} />
                        {exp.location}
                      </div>
                      <span className="tag sm:self-end">{exp.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-sm mb-4" style={{ color: 'var(--text-primary)' }}>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((ach, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -12 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: j * 0.08 + 0.3, duration: 0.4 }}
                          className="flex items-start gap-2.5"
                        >
                          <FaCheckCircle
                            size={13}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: 'var(--brand)' }}
                          />
                          <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {ach}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <h4 className="font-semibold text-xs mb-3 uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Looking for new opportunities card */}
            <motion.div
              variants={staggerItem}
              className="text-center p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(167,139,250,0.06))',
                border: '1px dashed rgba(99,102,241,0.3)',
              }}
            >
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                Open to New Opportunities
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                Looking for senior backend, full-stack, or microservices engineering roles.
              </p>
              <a
                href={`mailto:${import.meta.env.VITE_EMAIL || 'rakeshboini79372@gmail.com'}`}
                className="btn-primary inline-flex"
              >
                Get In Touch →
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
