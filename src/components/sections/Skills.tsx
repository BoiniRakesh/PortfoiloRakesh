import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const categories = Object.keys(skills) as (keyof typeof skills)[];

const categoryColors: Record<string, string> = {
  Languages: '#6366f1',
  Backend: '#10b981',
  Frontend: '#38bdf8',
  Database: '#f59e0b',
  DevOps: '#f43f5e',
  Testing: '#8b5cf6',
  Tools: '#64748b',
};

function SkillBar({ name, level, icon, inView }: { name: string; level: number; icon: string; inView: boolean }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{name}</span>
        </div>
        <span className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState<string>('Backend');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const activeSkills = skills[active as keyof typeof skills] || [];

  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-16">
            <div className="section-label">⚡ Technical Skills</div>
            <h2 className="section-title">
              Tools of the <span className="gradient-text">Trade</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              2.5+ years of enterprise experience across the full stack — from Java microservices to React frontends.
            </p>
          </motion.div>

          {/* Category tabs */}
          <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={
                  active === cat
                    ? {
                        background: `${categoryColors[cat] || 'var(--brand)'}18`,
                        color: categoryColors[cat] || 'var(--brand)',
                        border: `1px solid ${categoryColors[cat] || 'var(--brand)'}`,
                      }
                    : {
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border)',
                      }
                }
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="card p-8 space-y-5">
                {activeSkills.slice(0, Math.ceil(activeSkills.length / 2)).map((skill) => (
                  <SkillBar key={skill.name} {...skill} inView={inView} />
                ))}
              </div>
              <div className="card p-8 space-y-5">
                {activeSkills.slice(Math.ceil(activeSkills.length / 2)).map((skill) => (
                  <SkillBar key={skill.name} {...skill} inView={inView} />
                ))}
                {activeSkills.slice(Math.ceil(activeSkills.length / 2)).length === 0 && (
                  <div className="flex items-center justify-center h-full min-h-32 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    Select a category to view skills
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Tech stack icon cloud */}
          <motion.div variants={staggerItem} className="mt-16">
            <div className="text-center mb-8">
              <h3 className="font-semibold text-lg" style={{ color: 'var(--text-primary)' }}>
                Core Technology Stack
              </h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-tertiary)' }}>
                Technologies I work with daily
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Java 17', 'Spring Boot', 'Spring Cloud', 'React.js', 'Redux',
                'Microservices', 'Docker', 'Kubernetes', 'MySQL', 'JPA/Hibernate',
                'JUnit 5', 'Mockito', 'Jenkins', 'Git', 'Swagger/OpenAPI', 'REST API',
                'Resilience4j', 'OpenFeign', 'Eureka', 'API Gateway',
              ].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.03, duration: 0.3 }}
                  className="tag"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
