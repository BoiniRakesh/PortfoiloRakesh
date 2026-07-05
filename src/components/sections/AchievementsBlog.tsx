import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { achievements, certifications, blogPosts } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { FaExternalLinkAlt, FaClock, FaTag } from 'react-icons/fa';

export function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={staggerItem} className="text-center mb-16">
            <div className="section-label">🏆 Achievements</div>
            <h2 className="section-title">Numbers That <span className="gradient-text">Matter</span></h2>
            <p className="section-subtitle max-w-xl mx-auto">Metrics and milestones from my development journey.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card p-6 text-center group"
              >
                <div className="text-3xl mb-2">{a.icon}</div>
                <div className="text-3xl font-black mb-1 gradient-text">{a.value}</div>
                <div className="font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{a.label}</div>
                <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{a.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div variants={staggerItem} className="text-center mb-12">
            <div className="section-label">🎓 Certifications</div>
            <h2 className="section-title">Continuous <span className="gradient-text">Learning</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="card p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm leading-tight" style={{ color: 'var(--text-primary)' }}>
                      {cert.title}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{cert.issuer} · {cert.year}</div>
                  </div>
                </div>
                <a
                  href={cert.credentialUrl}
                  className="flex items-center gap-1 text-xs transition-colors hover:text-[var(--brand)]"
                  style={{ color: 'var(--text-tertiary)' }}
                >
                  <FaExternalLinkAlt size={9} /> View Credential
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const categoryColors: Record<string, string> = {
    Microservices: '#6366f1',
    Java: '#f59e0b',
    'Spring Boot': '#10b981',
    DevOps: '#f43f5e',
    React: '#38bdf8',
    'System Design': '#8b5cf6',
    'Interview Preparation': '#ec4899',
  };

  return (
    <section id="blog" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="section-container">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={staggerItem} className="text-center mb-16">
            <div className="section-label">📝 Blog</div>
            <h2 className="section-title">Technical <span className="gradient-text">Writings</span></h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Deep-dives into Java, Spring Boot, microservices, and software engineering concepts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card p-6 flex flex-col group cursor-pointer"
              >
                {/* Category */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                    style={{
                      background: `${categoryColors[post.category] || '#6366f1'}12`,
                      color: categoryColors[post.category] || '#6366f1',
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                    <FaClock size={9} /> {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-base leading-snug mb-3 group-hover:text-[var(--brand)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-md" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-tertiary)', border: '1px solid var(--border)' }}>
                      <FaTag size={8} /> {tag}
                    </span>
                  ))}
                </div>

                {/* Date + CTA */}
                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{post.date}</span>
                  <span className="text-xs font-medium" style={{ color: 'var(--brand)' }}>
                    Read more →
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
