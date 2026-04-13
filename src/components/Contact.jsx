// @ts-nocheck
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'

const SOCIALS = [
  {
    name: 'LinkedIn',
    handle: 'samyak-jain118',
    url: 'https://linkedin.com/in/samyak-jain118',
    icon: '💼',
  },
  {
    name: 'GitHub',
    handle: 'Samyak-507',
    url: 'https://github.com/Samyak-507',
    icon: '🐙',
  },
  {
    name: 'Email',
    handle: 'samyak.23mip10118@vitbhopal.ac.in',
    url: 'mailto:samyak.23mip10118@vitbhopal.ac.in',
    icon: '📧',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [state, handleSubmit] = useForm('meevqjnp')

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: '120px 2rem',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          max-width: 1200px;
          margin: 4rem auto 0;
          align-items: start;
        }
        .contact-input {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(0,212,255,0.15);
          border-radius: 10px;
          padding: 14px 18px;
          color: #e2e8f0;
          font-size: 0.95rem;
          font-family: 'Space Grotesk', sans-serif;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }
        .contact-input:focus {
          border-color: rgba(0,212,255,0.5);
          background: rgba(0,212,255,0.04);
          box-shadow: 0 0 15px rgba(0,212,255,0.1);
        }
        .contact-input::placeholder { color: #475569; }
        .contact-textarea {
          resize: vertical;
          min-height: 140px;
        }
        .contact-submit {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #00d4ff, #7c3aed);
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
          font-family: Orbitron, monospace;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }
        .contact-submit:hover {
          box-shadow: 0 0 30px rgba(0,212,255,0.4);
          transform: translateY(-2px);
        }
        .contact-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        .social-card {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          padding: 1.2rem 1.5rem;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-bottom: 1rem;
        }
        .social-card:hover {
          transform: translateX(8px);
          background: rgba(255,255,255,0.05);
          border-color: rgba(0,212,255,0.3);
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>

      <div style={{
        position: 'absolute', bottom: 0, right: 0,
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
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
            06 / CONTACT
          </div>
          <h2 style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #ffffff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
          }}>
            Let's Connect
          </h2>
          <p style={{
            color: '#64748b', fontSize: '1rem',
            maxWidth: '500px', margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Open to internships, collaborations, and interesting data science problems.
            Drop a message and I'll get back to you!
          </p>
        </motion.div>

        <div className="contact-grid">

          {/* Left — Socials */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '0.9rem', color: '#00d4ff',
              letterSpacing: '2px', marginBottom: '2rem',
            }}>
              FIND ME ON
            </h3>

            {SOCIALS.map(function (social, idx) {
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: '12px',
                    background: 'rgba(0,212,255,0.08)',
                    border: '1px solid rgba(0,212,255,0.15)',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: '1.4rem',
                    flexShrink: 0,
                  }}>
                    {social.icon}
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'Orbitron, monospace',
                      fontSize: '0.8rem', fontWeight: 700,
                      color: '#e2e8f0', letterSpacing: '1px',
                      marginBottom: '3px',
                    }}>
                      {social.name}
                    </div>
                    <div style={{
                      fontSize: '0.8rem', color: '#64748b',
                      fontFamily: 'JetBrains Mono, monospace',
                    }}>
                      {social.handle}
                    </div>
                  </div>
                  <div style={{
                    marginLeft: 'auto', color: '#334155', fontSize: '1.2rem',
                  }}>
                    →
                  </div>
                </a>
              )
            })}

            {/* Availability box */}
            <motion.div
              animate={{
                borderColor: [
                  'rgba(0,255,136,0.2)',
                  'rgba(0,255,136,0.5)',
                  'rgba(0,255,136,0.2)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                marginTop: '2rem', padding: '1.5rem',
                background: 'rgba(0,255,136,0.03)',
                border: '1px solid rgba(0,255,136,0.2)',
                borderRadius: '14px',
              }}
            >
              <div style={{
                display: 'flex', alignItems: 'center',
                gap: '10px', marginBottom: '0.5rem',
              }}>
                <span style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: '#00ff88',
                  boxShadow: '0 0 10px #00ff88',
                  display: 'inline-block',
                }} />
                <span style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '0.8rem', color: '#00ff88',
                  fontWeight: 700, letterSpacing: '1px',
                }}>
                  AVAILABLE FOR WORK
                </span>
              </div>
              <p style={{
                color: '#64748b', fontSize: '0.85rem', lineHeight: 1.6,
              }}>
                Actively seeking Data Science internships.
                Ready to start immediately.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: '0.9rem', color: '#7c3aed',
              letterSpacing: '2px', marginBottom: '2rem',
            }}>
              SEND A MESSAGE
            </h3>

            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '3rem 2rem', textAlign: 'center',
                  background: 'rgba(0,255,136,0.05)',
                  border: '1px solid rgba(0,255,136,0.2)',
                  borderRadius: '16px',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <div style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '1rem', color: '#00ff88',
                  fontWeight: 700, marginBottom: '0.5rem',
                }}>
                  MESSAGE SENT!
                </div>
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                  Thanks for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.2rem' }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="contact-input"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="contact-input"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    required
                    className="contact-input contact-textarea"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    style={{ color: '#ff6b6b', fontSize: '0.8rem', marginTop: '4px' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="contact-submit"
                >
                  {state.submitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            textAlign: 'center', marginTop: '5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: '1.2rem', fontWeight: 900,
            background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
          }}>
            SAMYAK JAIN
          </div>
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem', color: '#334155',
            letterSpacing: '2px',
          }}>
            DATA SCIENCE · VIT BHOPAL UNIVERSITY · 2025
          </div>
        </motion.div>

      </div>
    </section>
  )
}