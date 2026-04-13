// @ts-nocheck
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EDUCATION = [
  {
    degree: 'Integrated MTech — Data Science & Computational Intelligence',
    school: 'VIT Bhopal University',
    period: 'Nov 2023 – Present',
    grade: 'CGPA: 8.09 (Ongoing)',
    details: 'Machine Learning · Deep Learning · Data Structures · DBMS · Cloud Computing · Statistics',
    icon: '🎓',
    accent: '#00d4ff',
  },
  {
    degree: 'Senior Secondary — Science (CBSE)',
    school: 'Deepak Memorial Academy, Sagar MP',
    period: 'Completed July 2023',
    grade: '76.4%',
    details: 'Physics · Chemistry · Mathematics · Computer Science',
    icon: '📚',
    accent: '#7c3aed',
  },
  {
    degree: 'High School (CBSE)',
    school: 'Sagar Public School, Gandhi Nagar',
    period: 'Completed March 2020',
    grade: '82.6%',
    details: 'All Subjects',
    icon: '🏫',
    accent: '#00ff88',
  },
]

const CERTIFICATIONS = [
  {
    name: 'Applied Machine Learning in Python',
    issuer: 'Coursera — University of Michigan',
    date: 'Sept 2024',
    icon: '🏆',
    accent: '#00d4ff',
  },
  {
    name: 'Cloud Computing',
    issuer: 'NPTEL — IIT',
    date: 'Jan – Apr 2025',
    icon: '☁️',
    accent: '#7c3aed',
  },
]

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="timeline"
      ref={ref}
      style={{
        padding: '120px 2rem',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .timeline-line {
          position: absolute;
          left: 28px;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, #00d4ff, #7c3aed, transparent);
        }
        .timeline-item {
          position: relative;
          padding-left: 70px;
          margin-bottom: 3rem;
        }
        .timeline-dot {
          position: absolute;
          left: 16px;
          top: 8px;
          width: 24px; height: 24px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.8rem;
          z-index: 2;
        }
        .cert-card {
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }
        .cert-card:hover {
          transform: translateX(8px);
        }
        .edu-card {
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
          padding: 1.8rem 2rem;
          transition: all 0.3s ease;
        }
        .edu-card:hover {
          background: rgba(255,255,255,0.04);
        }
        .tl-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          max-width: 1200px;
          margin: 4rem auto 0;
        }
        @media (max-width: 768px) {
          .tl-grid { grid-template-columns: 1fr; gap: 3rem; }
          .timeline-item { padding-left: 50px; }
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem', color: '#00d4ff',
            letterSpacing: '3px', marginBottom: '1rem',
          }}>
            04 / EDUCATION & CERTIFICATIONS
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
            My Journey
          </h2>
        </motion.div>

        <div className="tl-grid">

          {/* Education timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '1rem', color: '#00d4ff',
              letterSpacing: '2px', marginBottom: '2rem',
            }}>
              EDUCATION
            </h3>
            <div style={{ position: 'relative' }}>
              <div className="timeline-line" />
              {EDUCATION.map(function (edu, idx) {
                return (
                  <motion.div
                    key={idx}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
                  >
                    <div
                      className="timeline-dot"
                      style={{
                        background: edu.accent + '20',
                        border: '2px solid ' + edu.accent,
                      }}
                    >
                      {edu.icon}
                    </div>
                    <div className="edu-card" style={{
                      border: '1px solid ' + edu.accent + '25',
                    }}>
                      <div style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.7rem', color: edu.accent,
                        letterSpacing: '1px', marginBottom: '0.4rem',
                      }}>
                        {edu.period}
                      </div>
                      <h4 style={{
                        fontFamily: 'Orbitron, monospace',
                        fontSize: '0.85rem', fontWeight: 700,
                        color: '#e2e8f0', marginBottom: '0.3rem',
                        lineHeight: 1.4,
                      }}>
                        {edu.degree}
                      </h4>
                      <div style={{
                        fontSize: '0.85rem', color: '#94a3b8',
                        marginBottom: '0.5rem',
                      }}>
                        {edu.school}
                      </div>
                      <div style={{
                        display: 'inline-block',
                        padding: '3px 10px',
                        background: edu.accent + '15',
                        border: '1px solid ' + edu.accent + '30',
                        borderRadius: '50px',
                        fontSize: '0.75rem',
                        color: edu.accent,
                        fontFamily: 'JetBrains Mono, monospace',
                        marginBottom: '0.8rem',
                      }}>
                        {edu.grade}
                      </div>
                      <div style={{
                        fontSize: '0.78rem', color: '#475569',
                        lineHeight: 1.6,
                      }}>
                        {edu.details}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '1rem', color: '#7c3aed',
              letterSpacing: '2px', marginBottom: '2rem',
            }}>
              CERTIFICATIONS
            </h3>

            {CERTIFICATIONS.map(function (cert, idx) {
              return (
                <motion.div
                  key={idx}
                  className="cert-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
                  style={{
                    border: '1px solid ' + cert.accent + '25',
                  }}
                >
                  <div style={{
                    width: 50, height: 50, borderRadius: '12px',
                    background: cert.accent + '15',
                    border: '1px solid ' + cert.accent + '30',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.5rem',
                    flexShrink: 0,
                  }}>
                    {cert.icon}
                  </div>
                  <div>
                    <div style={{
                      fontWeight: 600, color: '#e2e8f0',
                      fontSize: '0.95rem', marginBottom: '0.3rem',
                    }}>
                      {cert.name}
                    </div>
                    <div style={{
                      fontSize: '0.8rem', color: '#64748b',
                      marginBottom: '0.3rem',
                    }}>
                      {cert.issuer}
                    </div>
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.72rem', color: cert.accent,
                    }}>
                      {cert.date}
                    </div>
                  </div>
                </motion.div>
              )
            })}

            {/* Quote box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                marginTop: '2rem',
                padding: '1.5rem 2rem',
                background: 'rgba(0,212,255,0.03)',
                border: '1px solid rgba(0,212,255,0.1)',
                borderLeft: '3px solid #00d4ff',
                borderRadius: '0 12px 12px 0',
              }}
            >
              <p style={{
                color: '#64748b', fontSize: '0.9rem',
                lineHeight: 1.7, fontStyle: 'italic',
              }}>
                "Continuously upskilling through certifications and hands-on projects
                to stay at the cutting edge of data science and ML."
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}