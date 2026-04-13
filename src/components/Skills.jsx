// @ts-nocheck
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILL_GROUPS = [
  {
    category: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    category: 'ML / DL Frameworks',
    icon: '🧠',
    skills: [
      { name: 'Scikit-Learn', level: 88 },
      { name: 'TensorFlow', level: 85 },
      { name: 'Keras', level: 85 },
      { name: 'OpenCV', level: 78 },
    ],
  },
  {
    category: 'Data & Visualization',
    icon: '📊',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'NumPy', level: 88 },
      { name: 'Matplotlib', level: 82 },
      { name: 'Seaborn', level: 80 },
    ],
  },
  {
    category: 'Cloud & Deployment',
    icon: '☁️',
    skills: [
      { name: 'AWS (EC2, S3)', level: 72 },
      { name: 'Streamlit', level: 85 },
      { name: 'MySQL', level: 78 },
      { name: 'Git & GitHub', level: 82 },
    ],
  },
]

const CONCEPTS = [
  'CNN', 'LSTM', 'SVM', 'KNN', 'EDA',
  'Hyperparameter Tuning', 'GridSearchCV',
  'Model Evaluation', 'Data Augmentation',
  'NDVI Analysis', 'Transfer Learning',
  'Feature Engineering', 'Cross Validation',
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: '120px 2rem',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        .skill-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(0,212,255,0.1);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }
        .skill-card:hover {
          border-color: rgba(0,212,255,0.3);
          background: rgba(0,212,255,0.03);
          transform: translateY(-4px);
        }
        .skill-bar-bg {
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.06);
          border-radius: 3px;
          overflow: hidden;
          margin-top: 8px;
        }
        .concept-tag {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-family: JetBrains Mono, monospace;
          border: 1px solid rgba(124,58,237,0.3);
          background: rgba(124,58,237,0.05);
          color: #94a3b8;
          transition: all 0.3s ease;
          cursor: default;
        }
        .concept-tag:hover {
          border-color: rgba(124,58,237,0.7);
          color: #a78bfa;
          background: rgba(124,58,237,0.1);
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Background glow */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '1rem' }}
        >
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem', color: '#00d4ff',
            letterSpacing: '3px', marginBottom: '1rem',
          }}>
            02 / SKILLS
          </div>
          <h2 style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Technical Arsenal
          </h2>
        </motion.div>

        {/* Skill cards grid */}
        <div className="skills-grid">
          {SKILL_GROUPS.map(function (group, gIdx) {
            return (
              <motion.div
                key={gIdx}
                className="skill-card"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gIdx * 0.15 }}
              >
                <div style={{
                  display: 'flex', alignItems: 'center',
                  gap: '10px', marginBottom: '1.5rem',
                }}>
                  <span style={{ fontSize: '1.4rem' }}>{group.icon}</span>
                  <span style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '0.85rem', fontWeight: 700,
                    color: '#00d4ff', letterSpacing: '1px',
                  }}>
                    {group.category}
                  </span>
                </div>

                {group.skills.map(function (skill, sIdx) {
                  return (
                    <div key={sIdx} style={{ marginBottom: '1.2rem' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                        <span style={{
                          fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500,
                        }}>
                          {skill.name}
                        </span>
                        <span style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.75rem', color: '#00d4ff',
                        }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-bar-bg">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: skill.level + '%' } : {}}
                          transition={{ duration: 1, delay: gIdx * 0.15 + sIdx * 0.1 + 0.3, ease: 'easeOut' }}
                          style={{
                            height: '100%',
                            background: 'linear-gradient(90deg, #00d4ff, #7c3aed)',
                            borderRadius: '3px',
                            boxShadow: '0 0 8px rgba(0,212,255,0.4)',
                          }}
                        />
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            )
          })}
        </div>

        {/* Key concepts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem', color: '#7c3aed',
            letterSpacing: '3px', marginBottom: '1.5rem',
          }}>
            KEY CONCEPTS
          </div>
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            gap: '0.7rem', justifyContent: 'center',
          }}>
            {CONCEPTS.map(function (concept, idx) {
              return (
                <span key={idx} className="concept-tag">{concept}</span>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}