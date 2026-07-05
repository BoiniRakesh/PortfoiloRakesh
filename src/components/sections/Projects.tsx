import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';
import { projects } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const filters = ['All', 'Featured', 'Full Stack', 'Backend', 'Professional', 'Personal'];

const statusColors: Record<string, string> = {
  Production: '#10b981',
  Completed: '#6366f1',
  'In Progress': '#f59e0b',
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="card p-6 flex flex-col group"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
        >
          <FaCode size={16} style={{ color: 'var(--brand)' }} />
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-end">
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border"
            style={{
              background: `${statusColors[project.status] || '#6366f1'}12`,
              color: statusColors[project.status] || '#6366f1',
              borderColor: `${statusColors[project.status] || '#6366f1'}25`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: statusColors[project.status] || '#6366f1' }}
            />
            {project.status}
          </span>
          {project.category.includes('Featured') && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-400/10 text-yellow-500 border border-yellow-400/20">
              <FaStar size={9} /> Featured
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
        {project.title}
      </h3>
      <p className="text-xs font-mono mb-3" style={{ color: 'var(--brand)' }}>
        {project.subtitle} · {project.year}
      </p>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Highlights */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.highlights.map((h) => (
          <span
            key={h}
            className="px-2 py-0.5 rounded-md text-xs font-medium"
            style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
          >
            {h}
          </span>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.techStack.slice(0, 5).map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
        {project.techStack.length > 5 && (
          <span className="tag">+{project.techStack.length - 5}</span>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--brand)]"
          style={{ color: 'var(--text-tertiary)' }}
        >
          <FaGithub size={13} /> Code
        </a>
        {project.demo !== '#' && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--brand)]"
            style={{ color: 'var(--text-tertiary)' }}
          >
            <FaExternalLinkAlt size={11} /> Live Demo
          </a>
        )}
        <div className="ml-auto">
          <motion.div
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
            style={{ background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)' }}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--brand)', color: '#fff' }}
          >
            <HiArrowUpRight size={13} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = projects.filter(
    (p) => activeFilter === 'All' || p.category.includes(activeFilter)
  );

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <div className="section-label">🚀 Projects</div>
            <h2 className="section-title">
              Things I've <span className="gradient-text">Built</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              From enterprise microservices to personal full-stack applications — each project solving real problems.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div variants={staggerItem} className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActiveFilter(f)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={
                  activeFilter === f
                    ? {
                        background: 'var(--brand)',
                        color: '#fff',
                        border: '1px solid var(--brand)',
                      }
                    : {
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border)',
                      }
                }
              >
                {f}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div variants={staggerItem} className="text-center mt-16">
            <p className="text-sm mb-4" style={{ color: 'var(--text-tertiary)' }}>
              More projects on GitHub
            </p>
            <a
              href="https://github.com/rakeshboini"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="btn-secondary"
              >
                <FaGithub size={16} /> View All on GitHub
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
