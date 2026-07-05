import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaStar, FaCodeBranch, FaCode } from 'react-icons/fa';
import { staggerContainer, staggerItem } from '../../utils/animations';

const githubUsername = 'rakeshboini';

const pinnedRepos = [
  { name: 'smart-pricing-app', description: 'Spring Boot microservices for automotive dealership pricing', stars: 12, forks: 3, lang: 'Java', color: '#f59e0b' },
  { name: 'lqa-logistics-audit', description: 'Logistics quality audit system with React + Spring Boot', stars: 8, forks: 2, lang: 'Java', color: '#f59e0b' },
  { name: 'ecommerce-fullstack', description: 'Full-stack e-commerce with Spring Boot + React', stars: 21, forks: 7, lang: 'Java', color: '#f59e0b' },
  { name: 'banking-rest-api', description: 'Secure banking REST API with Spring Security + JWT', stars: 15, forks: 4, lang: 'Java', color: '#f59e0b' },
  { name: 'employee-management', description: 'HR management system with role-based access', stars: 9, forks: 2, lang: 'Java', color: '#f59e0b' },
  { name: 'url-shortener-redis', description: 'URL shortener with Redis caching + analytics', stars: 11, forks: 3, lang: 'Java', color: '#f59e0b' },
];

export default function GitHub() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="github" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.div variants={staggerItem} className="text-center mb-16">
            <div className="section-label"><FaGithub size={12} className="inline" /> GitHub</div>
            <h2 className="section-title">Open Source & <span className="gradient-text">Activity</span></h2>
            <p className="section-subtitle max-w-xl mx-auto">
              Consistently building, committing, and sharing. Find my open-source work on GitHub.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div variants={staggerItem} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Public Repos', value: '20+', icon: '📦' },
              { label: 'Total Stars', value: '90+', icon: '⭐' },
              { label: 'Contributions', value: '800+', icon: '🔥' },
              { label: 'Followers', value: '50+', icon: '👥' },
            ].map((stat) => (
              <div key={stat.label} className="card p-5 text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="font-black text-2xl gradient-text">{stat.value}</div>
                <div className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Contribution graph */}
          <motion.div variants={staggerItem} className="card p-6 mb-8 overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <FaGithub size={16} style={{ color: 'var(--text-secondary)' }} />
              <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                Contribution Activity
              </h3>
            </div>
            <img
              src={`https://ghchart.rshah.org/6366f1/${githubUsername}`}
              alt="GitHub contribution graph"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </motion.div>

          {/* Pinned repos */}
          <motion.div variants={staggerItem}>
            <h3 className="font-semibold text-sm mb-5" style={{ color: 'var(--text-primary)' }}>
              Pinned Repositories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pinnedRepos.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={`https://github.com/${githubUsername}/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="card p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center gap-2">
                    <FaCode size={13} style={{ color: 'var(--brand)' }} />
                    <span className="font-mono text-sm font-semibold" style={{ color: 'var(--brand)' }}>
                      {repo.name}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      <span className="w-2 h-2 rounded-full" style={{ background: repo.color }} />
                      {repo.lang}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      <FaStar size={10} /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      <FaCodeBranch size={10} /> {repo.forks}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="text-center mt-10">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <FaGithub size={15} /> View Full GitHub Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
