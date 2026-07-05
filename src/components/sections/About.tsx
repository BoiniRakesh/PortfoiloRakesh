import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaRocket } from 'react-icons/fa';
import { personalInfo, education } from '../../data/portfolio';
import { staggerContainer, staggerItem } from '../../utils/animations';

const timeline = [
  {
    year: '2019',
    title: 'Started B.Tech (ECE)',
    description: 'Enrolled at JNTUH College of Engineering, Jagtial. Discovered passion for programming and software development.',
    icon: FaGraduationCap,
    color: '#6366f1',
  },
  {
    year: '2021',
    title: 'Self-Taught Java Development',
    description: 'Deep-dived into Java, OOP, Data Structures and built first web applications. Solved 200+ LeetCode problems.',
    icon: FaRocket,
    color: '#8b5cf6',
  },
  {
    year: '2023',
    title: 'B.Tech Graduation — CGPA 7.5',
    description: 'Graduated with strong foundations in both electronics and software engineering. Completed multiple full-stack projects.',
    icon: FaGraduationCap,
    color: '#10b981',
  },
  {
    year: '2023 Dec',
    title: 'Joined Tech Mahindra',
    description: 'Started as Full Stack Java Developer. Working on enterprise microservices for automotive clients including Mazda Motor Corporation.',
    icon: FaBriefcase,
    color: '#f59e0b',
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={staggerItem} className="text-center mb-20">
            <div className="section-label">
              👤 About Me
            </div>
            <h2 className="section-title">
              The <span className="gradient-text">Story</span> Behind the Code
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              From ECE graduate to enterprise backend architect — a journey driven by curiosity, consistency, and clean code.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Story + Stats */}
            <motion.div variants={staggerItem}>
              {/* Profile card */}
              <div className="card p-8 mb-8">
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black text-white flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, var(--brand-dark), var(--brand-light))' }}
                  >
                    BR
                  </div>
                  <div>
                    <h3 className="font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
                      {personalInfo.name}
                    </h3>
                    <p className="text-sm mb-2" style={{ color: 'var(--brand)' }}>
                      Full Stack Java Developer
                    </p>
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                      <FaMapMarkerAlt size={10} />
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  I'm a Full Stack Java Developer with <strong style={{ color: 'var(--text-primary)' }}>2.5+ years</strong> of enterprise experience. 
                  I specialize in building scalable backend systems with <strong style={{ color: 'var(--text-primary)' }}>Spring Boot microservices</strong> and 
                  dynamic frontends with <strong style={{ color: 'var(--text-primary)' }}>React.js</strong>.
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  At <strong style={{ color: 'var(--text-primary)' }}>Tech Mahindra</strong>, I've contributed to production systems for 
                  <strong style={{ color: 'var(--text-primary)' }}> Mazda Motor Corporation</strong>, handling high-throughput pricing and 
                  logistics quality workflows across distributed microservices.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  I'm passionate about clean architecture, test-driven development, and building systems that scale gracefully under pressure.
                </p>
              </div>

              {/* Quick info grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Experience', value: '2.5+ Years' },
                  { label: 'Location', value: 'Hyderabad, India' },
                  { label: 'Education', value: 'B.Tech ECE' },
                  { label: 'Status', value: '🟢 Available' },
                  { label: 'Focus', value: 'Backend + Full Stack' },
                  { label: 'CGPA', value: '7.5 / 10.0' },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="p-4 rounded-xl"
                    style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border)' }}
                  >
                    <div className="text-xs mb-1" style={{ color: 'var(--text-tertiary)' }}>{label}</div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Timeline */}
            <motion.div variants={staggerItem}>
              <h3 className="font-bold text-xl mb-8" style={{ color: 'var(--text-primary)' }}>
                My Journey
              </h3>
              <div className="relative">
                {/* Vertical line */}
                <div
                  className="absolute left-5 top-0 bottom-0 w-px"
                  style={{ background: 'linear-gradient(180deg, var(--brand), var(--border))' }}
                />

                <div className="space-y-8">
                  {timeline.map((item, i) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.15 + 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="flex gap-6 pl-14 relative"
                    >
                      {/* Icon */}
                      <div
                        className="absolute left-0 w-10 h-10 rounded-full flex items-center justify-center border-2 flex-shrink-0"
                        style={{
                          background: `${item.color}18`,
                          borderColor: item.color,
                          color: item.color,
                        }}
                      >
                        <item.icon size={14} />
                      </div>

                      {/* Content */}
                      <div className="card p-5 flex-1">
                        <div
                          className="text-xs font-mono mb-1"
                          style={{ color: item.color }}
                        >
                          {item.year}
                        </div>
                        <h4 className="font-semibold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>
                          {item.title}
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="mt-8 card p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaGraduationCap style={{ color: 'var(--brand)' }} />
                  <h4 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Education</h4>
                </div>
                {education.map((edu) => (
                  <div key={edu.degree}>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{edu.degree}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>{edu.institution}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{edu.year}</span>
                      <span className="tag">CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
