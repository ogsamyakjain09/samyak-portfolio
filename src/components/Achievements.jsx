// @ts-nocheck
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Health-O-Tech Hackathon Finalist',
    org: 'BVIT Bhopal',
    year: '2025',
    description: 'Competed in a healthcare-focused collegiate hackathon and was recognised as a finalist among all participating teams.',
    accent: '#00d4ff',
    category: 'Hackathon',
  },
  {
    icon: '🏏',
    title: 'Cricket Tournament Finalist',
    org: 'Medicaps University, Indore',
    year: 'March 2025',
    description: 'Led college cricket team to the finals of a university-level inter-college tournament, demonstrating team leadership and strategy under pressure.',
    accent: '#00ff88',
    category: 'Sports',
  },
  {
    icon: '⚡',
    title: 'Event Management Lead',
    org: 'Firefox Club — VIT Bhopal',
    year: 'Jun 2024 – Present',
    description: 'Coordinated technical and cultural events for 600+ participants, managing logistics, scheduling, and cross-functional team operations.',
    accent: '#7c3aed',
    category: 'Leadership',
  },
  {
    icon: '🎪',
    title: 'Coordinator — Adviya 2024',
    org: 'Cultural & Sports Fest, VIT Bhopal',
    year: 'Feb 2024',
    description: 'Planned and executed campus-wide cultural and sports events, leading cross-functional student teams across multiple event tracks.',
    accent: '#f59e0b',
    category: 'Leadership',
  },
  {
    icon: '🌱',
    title: 'NSS Plantation Drive',
    org: 'VIT Bhopal × Sehore Government',
    year: 'December 2024',
    description: 'Contributed to planting 10,000+ trees in collaboration with the state government. Organised and mobilised volunteer teams for the initiative.',
    accent: '#00ff88',
    category: 'Social Impact',
  },
]

const CRICKET_STATS = [
  { num: '🏏', label: 'Cricket Captain' },
  { num: '🥈', label: 'Tournament Finalist' },
  { num: '👥', label: 'Team Leader' },
  { num: '🎯', label: 'Strategist' },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="achievements"
      ref={ref}
      style={{
        padding: '120px 2rem',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .ach-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 4rem;
        }
        .ach-card {
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .ach-card:hover {
          transform: translateY(-6px);
        }
        .ach-category {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 50px;
          font-size: 0.7rem;
          font-family: JetBrains Mono, monospace;
          margin-bottom: 1rem;
        }
        .cricket-card {
          background: rgba(0,255,136,0.03);
          border: 1px solid rgba(0,255,136,0.15);
          border-radius: 20px;
          padding: 2.5rem;
          margin-top: 3rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .cricket-stat {
          text-align: center;
          padding: 1rem;
          background: rgba(0,255,136,0.05);
          border-radius: 12px;
          border: 1px solid rgba(0,255,136,0.1);
          transition: all 0.3s ease;
        }
        .cricket-stat:hover {
          background: rgba(0,255,136,0.1);
          border-color: rgba(0,255,136,0.3);
          transform: scale(1.05);
        }
        @media (max-width: 900px) {
          .ach-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .ach-grid { grid-template-columns: 1fr; }
          .cricket-card { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '30%', right: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

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
            05 / ACHIEVEMENTS
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
            Beyond the Code
          </h2>
          <p style={{
            color: '#64748b', fontSize: '1rem',
            maxWidth: '500px', margin: '1rem auto 0',
            lineHeight: 1.7,
          }}>
            Leadership, impact, and wins — both on the field and off it.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="ach-grid">
          {ACHIEVEMENTS.map(function (ach, idx) {
            return (
              <motion.div
                key={idx}
                className="ach-card"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  border: '1px solid ' + ach.accent + '20',
                  boxShadow: 'inset 0 0 30px ' + ach.accent + '05',
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, ' + ach.accent + ', transparent)',
                  borderRadius: '16px 16px 0 0',
                }} />

                <span className="ach-category" style={{
                  background: ach.accent + '15',
                  border: '1px solid ' + ach.accent + '30',
                  color: ach.accent,
                }}>
                  {ach.category}
                </span>

                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                  {ach.icon}
                </div>

                <h3 style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '0.9rem', fontWeight: 700,
                  color: '#e2e8f0', marginBottom: '0.4rem',
                  lineHeight: 1.4,
                }}>
                  {ach.title}
                </h3>

                <div style={{
                  fontSize: '0.8rem', color: ach.accent,
                  fontFamily: 'JetBrains Mono, monospace',
                  marginBottom: '0.8rem',
                }}>
                  {ach.org} · {ach.year}
                </div>

                <p style={{
                  color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7,
                }}>
                  {ach.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Cricket spotlight */}
        <motion.div
          className="cricket-card"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem', color: '#00ff88',
              letterSpacing: '2px', marginBottom: '0.8rem',
            }}>
              SPOTLIGHT
            </div>
            <h3 style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: 900, color: '#e2e8f0',
              marginBottom: '1rem', lineHeight: 1.3,
            }}>
              Captain on the Field,<br />
              <span style={{
                background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Leader in the Lab
              </span>
            </h3>
            <p style={{
              color: '#64748b', fontSize: '0.95rem', lineHeight: 1.8,
            }}>
              Captaining a cricket team teaches you the same skills that make a
              great data scientist — reading patterns, making decisions under pressure,
              adapting strategies, and motivating your team to perform at their best.
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem',
          }}>
            {CRICKET_STATS.map(function (stat, idx) {
              return (
                <motion.div
                  key={idx}
                  className="cricket-stat"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>
                    {stat.num}
                  </div>
                  <div style={{
                    fontSize: '0.7rem', color: '#00ff88',
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '0.5px',
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}