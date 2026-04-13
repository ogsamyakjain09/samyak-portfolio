// @ts-nocheck
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { num: '8.09', label: 'CGPA' },
  { num: '3+', label: 'ML Projects' },
  { num: '600+', label: 'Students Coordinated' },
  { num: '2028', label: 'Graduating' },
]

const INTERESTS = [
  { icon: '🧠', label: 'Machine Learning' },
  { icon: '🛰️', label: 'Geospatial AI' },
  { icon: '🏥', label: 'Healthcare AI' },
  { icon: '☁️', label: 'Cloud (AWS)' },
  { icon: '🏏', label: 'Cricket' },
  { icon: '👥', label: 'Team Leadership' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: '120px 2rem',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-image-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .about-img {
          width: 100%;
          max-width: 380px;
          border-radius: 24px;
          object-fit: cover;
          aspect-ratio: 4/5;
          position: relative;
          z-index: 2;
          border: 1px solid rgba(0,212,255,0.2);
        }
        .about-img-fallback {
          width: 100%;
          max-width: 380px;
          aspect-ratio: 4/5;
          border-radius: 24px;
          background: linear-gradient(135deg, #0a1628 0%, #1e1b4b 50%, #0a1628 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Orbitron, monospace;
          font-size: 5rem;
          color: #00d4ff;
          font-weight: 900;
          border: 1px solid rgba(0,212,255,0.2);
          z-index: 2;
          position: relative;
        }
        .about-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(0,212,255,0.2);
          background: rgba(0,212,255,0.05);
          color: #94a3b8;
          transition: all 0.3s ease;
          cursor: default;
        }
        .about-tag:hover {
          border-color: rgba(0,212,255,0.5);
          color: #00d4ff;
          background: rgba(0,212,255,0.1);
        }
        .stat-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(0,212,255,0.1);
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          border-color: rgba(0,212,255,0.4);
          background: rgba(0,212,255,0.05);
          transform: translateY(-4px);
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-image-wrap {
            order: -1;
          }
        }
      `}</style>

      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="about-grid">

        {/* Left — Image */}
        <motion.div
          className="about-image-wrap"
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Decorative corner lines */}
          <div style={{
            position: 'absolute', top: -20, left: -20,
            width: 80, height: 80, zIndex: 1,
            borderTop: '2px solid #00d4ff',
            borderLeft: '2px solid #00d4ff',
            borderRadius: '4px 0 0 0',
          }} />
          <div style={{
            position: 'absolute', bottom: -20, right: -20,
            width: 80, height: 80, zIndex: 1,
            borderBottom: '2px solid #7c3aed',
            borderRight: '2px solid #7c3aed',
            borderRadius: '0 0 4px 0',
          }} />

          <img
            src="/photo.jpeg"
            alt="Samyak Jain"
            className="about-img"
            onError={function (e) {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'flex'
            }}
          />
          <div className="about-img-fallback" style={{ display: 'none' }}>
            SJ
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: 40, right: -20,
              background: 'rgba(2,8,24,0.95)',
              border: '1px solid rgba(0,212,255,0.3)',
              borderRadius: '12px',
              padding: '12px 16px',
              zIndex: 3,
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '1.2rem', fontWeight: 700,
              color: '#00d4ff',
            }}>89%</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Best Model Accuracy</div>
          </motion.div>

          {/* Second floating badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{
              position: 'absolute',
              top: 40, left: -20,
              background: 'rgba(2,8,24,0.95)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '12px',
              padding: '12px 16px',
              zIndex: 3,
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '1.2rem', fontWeight: 700,
              color: '#7c3aed',
            }}>VIT</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Bhopal University</div>
          </motion.div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Section label */}
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem', color: '#00d4ff',
            letterSpacing: '3px', marginBottom: '1rem',
          }}>
            01 / ABOUT ME
          </div>

          <h2 style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900, lineHeight: 1.1,
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Turning Data Into<br />
            <span style={{
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Intelligence
            </span>
          </h2>

          <p style={{
            color: '#94a3b8', lineHeight: 1.9,
            fontSize: '1rem', marginBottom: '1.2rem',
          }}>
            I'm a passionate Integrated MTech student in Data Science at VIT Bhopal University,
            obsessed with building ML systems that solve real-world problems. From detecting
            kidney stones with CNNs to monitoring flood risks from satellite imagery —
            I build end-to-end pipelines that actually work.
          </p>

          <p style={{
            color: '#94a3b8', lineHeight: 1.9,
            fontSize: '1rem', marginBottom: '2rem',
          }}>
            Off the screen, I lead teams on the cricket field — captaining my college
            team to tournament wins. The same instincts that make a good captain make
            a good data scientist: reading patterns, making decisions under pressure,
            and bringing out the best in your team.
          </p>

          {/* Interest tags */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.6rem',
            marginBottom: '2.5rem',
          }}>
            {INTERESTS.map(function (item, idx) {
              return (
                <span key={idx} className="about-tag">
                  {item.icon} {item.label}
                </span>
              )
            })}
          </div>

          {/* Stats row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}>
            {STATS.map(function (stat, idx) {
              return (
                <motion.div
                  key={idx}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <div style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: '1.4rem', fontWeight: 700,
                    color: '#00d4ff',
                    textShadow: '0 0 15px rgba(0,212,255,0.4)',
                  }}>
                    {stat.num}
                  </div>
                  <div style={{
                    fontSize: '0.7rem', color: '#64748b',
                    letterSpacing: '0.5px', marginTop: '4px',
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