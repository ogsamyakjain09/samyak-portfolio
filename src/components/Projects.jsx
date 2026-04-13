// @ts-nocheck
import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    id: 1,
    title: 'GeoSpatial Satellite Analysis',
    subtitle: 'Land Use · Vegetation · Flood Risk',
    period: 'Jan 2025 – Present',
    description: 'Built an integrated land use, vegetation health and flood risk monitoring system using NASA/USGS Landsat satellite imagery, combining three ML models for multi-task geospatial intelligence.',
    points: [
      'Trained SVM and KNN classifiers for land-use classification achieving ~88% accuracy',
      'NDVI-based vegetation health analysis on labeled satellite bands',
      'LSTM temporal model to detect flood risk from multi-temporal satellite sequences',
      'Deployed as interactive Streamlit web app with real-time predictions',
    ],
    tech: ['Python', 'Streamlit', 'SVM', 'KNN', 'LSTM', 'NASA/USGS'],
    accent: '#00d4ff',
    icon: '🛰️',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Kidney Stone Detection',
    subtitle: 'Healthcare AI · Medical Imaging',
    period: 'Sep 2024 – Dec 2024',
    description: 'CNN-based diagnostic model for automated kidney stone detection from ultrasound and CT scan images with clinical-grade performance metrics.',
    points: [
      'Achieved ~89% validation accuracy on medical imaging dataset',
      'Image preprocessing: resizing, normalization, data augmentation',
      'Evaluated using precision, recall, F1-score and confusion matrix',
      'Deployed as user-facing diagnostic interface for medical practitioners',
    ],
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN'],
    accent: '#7c3aed',
    icon: '🏥',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Heart Disease Risk Prediction',
    subtitle: 'Clinical ML · Risk Assessment',
    period: 'Jun 2024 – Aug 2024',
    description: 'Multi-model ML system trained on the Cleveland Heart Disease dataset with thorough EDA and feature importance analysis for clinical interpretability.',
    points: [
      'Random Forest achieved best F1-score of ~87% after GridSearchCV tuning',
      'EDA revealing correlations between max heart rate and disease risk',
      'Feature importance analysis identifying top 5 clinical predictors',
      'Compared Logistic Regression, Random Forest and SVM models',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Random Forest'],
    accent: '#00ff88',
    icon: '❤️',
    status: 'Completed',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState(null)

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        padding: '120px 2rem',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .project-card {
          background: rgba(255,255,255,0.02);
          border-radius: 20px;
          padding: 2.5rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .project-card:hover {
          transform: translateY(-8px);
        }
        .project-tech-tag {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 0.75rem;
          font-family: JetBrains Mono, monospace;
          font-weight: 500;
        }
        .project-point {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 0.6rem;
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .project-card { padding: 1.5rem; }
        }
      `}</style>

      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.8rem', color: '#00d4ff',
            letterSpacing: '3px', marginBottom: '1rem',
          }}>
            03 / PROJECTS
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
            Things I Have Built
          </h2>
        </motion.div>

        {/* Projects list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {PROJECTS.map(function (project, idx) {
            return (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                onMouseEnter={function () { setHovered(project.id) }}
                onMouseLeave={function () { setHovered(null) }}
                style={{
                  border: hovered === project.id
                    ? '1px solid ' + project.accent
                    : '1px solid rgba(255,255,255,0.06)',
                  boxShadow: hovered === project.id
                    ? '0 0 40px ' + project.accent + '15'
                    : 'none',
                }}
              >
                {/* Gradient top bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, ' + project.accent + ', transparent)',
                  borderRadius: '20px 20px 0 0',
                }} />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  gap: '2rem',
                  alignItems: 'start',
                }}>
                  <div>
                    {/* Title row */}
                    <div style={{
                      display: 'flex', alignItems: 'center',
                      gap: '12px', marginBottom: '0.5rem', flexWrap: 'wrap',
                    }}>
                      <span style={{ fontSize: '1.8rem' }}>{project.icon}</span>
                      <div>
                        <h3 style={{
                          fontFamily: 'Orbitron, monospace',
                          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                          fontWeight: 700, color: '#e2e8f0',
                        }}>
                          {project.title}
                        </h3>
                        <div style={{
                          fontSize: '0.8rem', color: project.accent,
                          fontFamily: 'JetBrains Mono, monospace',
                        }}>
                          {project.subtitle}
                        </div>
                      </div>
                    </div>

                    <p style={{
                      color: '#64748b', fontSize: '0.9rem',
                      lineHeight: 1.7, marginBottom: '1.5rem',
                    }}>
                      {project.description}
                    </p>

                    {/* Bullet points */}
                    <div style={{ marginBottom: '1.5rem' }}>
                      {project.points.map(function (point, pIdx) {
                        return (
                          <div key={pIdx} className="project-point">
                            <span style={{
                              color: project.accent, marginTop: '3px',
                              flexShrink: 0, fontSize: '0.7rem',
                            }}>▶</span>
                            {point}
                          </div>
                        )
                      })}
                    </div>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.tech.map(function (t, tIdx) {
                        return (
                          <span
                            key={tIdx}
                            className="project-tech-tag"
                            style={{
                              background: project.accent + '15',
                              border: '1px solid ' + project.accent + '40',
                              color: project.accent,
                            }}
                          >
                            {t}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  {/* Right side info */}
                  <div style={{ textAlign: 'right', minWidth: '120px' }}>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      fontSize: '0.7rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      background: project.status === 'In Progress'
                        ? 'rgba(0,255,136,0.1)'
                        : 'rgba(0,212,255,0.1)',
                      border: '1px solid ' + (project.status === 'In Progress'
                        ? 'rgba(0,255,136,0.3)'
                        : 'rgba(0,212,255,0.3)'),
                      color: project.status === 'In Progress' ? '#00ff88' : '#00d4ff',
                      marginBottom: '0.8rem',
                    }}>
                      {project.status}
                    </div>
                    <div style={{
                      fontSize: '0.75rem', color: '#475569',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}>
                      {project.period}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}