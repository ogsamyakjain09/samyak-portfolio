// @ts-nocheck
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const TYPED_STRINGS = [
  'Data Scientist',
  'ML Engineer',
  'Deep Learning Enthusiast',
  'AWS Cloud Practitioner',
  'Cricket Team Captain',
  'Problem Solver',
]

export default function Hero() {
  const typedRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(function () {
    let currentIndex = 0
    let currentText = ''
    let isDeleting = false
    let timer

    function type() {
      const fullText = TYPED_STRINGS[currentIndex]
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1)
      } else {
        currentText = fullText.substring(0, currentText.length + 1)
      }
      if (typedRef.current) typedRef.current.textContent = currentText
      let speed = isDeleting ? 40 : 80
      if (!isDeleting && currentText === fullText) {
        speed = 2000; isDeleting = true
      } else if (isDeleting && currentText === '') {
        isDeleting = false
        currentIndex = (currentIndex + 1) % TYPED_STRINGS.length
        speed = 400
      }
      timer = setTimeout(type, speed)
    }

    timer = setTimeout(type, 800)
    return function () { clearTimeout(timer) }
  }, [])

  useEffect(function () {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let nodes = []

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      nodes = []
      for (let i = 0; i < 70; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 2 + 1,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,212,255,0.5)'
        ctx.fill()
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = 'rgba(0,212,255,' + (0.12 * (1 - dist / 120)) + ')'
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return function () {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', overflow: 'hidden',
      }}
    >
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.08) 0%, rgba(2,8,24,0.6) 70%)',
      }} />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        textAlign: 'center', padding: '80px 1.5rem 0',
        maxWidth: '900px', width: '100%',
      }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(0,255,136,0.08)',
            border: '1px solid rgba(0,255,136,0.25)',
            borderRadius: '50px', padding: '6px 16px',
            marginBottom: '2rem', fontSize: '0.8rem',
            color: '#00ff88', fontFamily: 'JetBrains Mono, monospace',
          }}
        >
          <span style={{
            width: 8, height: 8, borderRadius: '50%',
            background: '#00ff88', boxShadow: '0 0 8px #00ff88',
            display: 'inline-block',
          }} />
          Open to Internship Opportunities
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            width: 150, height: 150,
            margin: '0 auto 2rem', position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute', inset: -4, borderRadius: '50%',
            background: 'linear-gradient(135deg, #00d4ff, #7c3aed, #00ff88)',
          }} />
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'var(--bg-primary)', margin: '3px',
          }} />
          <img
            src="/photo.jpeg"
            alt="Samyak Jain"
            onError={function (e) { e.target.style.display = 'none' }}
            style={{
              position: 'absolute', inset: 4,
              width: 'calc(100% - 8px)', height: 'calc(100% - 8px)',
              borderRadius: '50%', objectFit: 'cover', zIndex: 1,
            }}
          />
          <div style={{
            position: 'absolute', inset: 4,
            width: 'calc(100% - 8px)', height: 'calc(100% - 8px)',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0a1628, #1e1b4b)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Orbitron, monospace', fontSize: '1.5rem',
            color: '#00d4ff', fontWeight: 700, zIndex: 0,
          }}>
            SJ
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          SAMYAK JAIN
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
            fontFamily: 'JetBrains Mono, monospace',
            color: '#00d4ff', marginBottom: '1.5rem', minHeight: '2rem',
          }}
        >
          <span style={{ color: '#7c3aed' }}>&gt; </span>
          <span ref={typedRef} />
          <span style={{
            display: 'inline-block', width: '2px', height: '1.2em',
            background: '#00d4ff', marginLeft: '2px', verticalAlign: 'middle',
          }} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            color: '#94a3b8', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.8,
          }}
        >
          Integrated MTech student at VIT Bhopal, building end-to-end ML pipelines
          at the intersection of healthcare AI and geospatial intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            display: 'flex', justifyContent: 'center',
            gap: 'clamp(1rem, 4vw, 3rem)', flexWrap: 'wrap', marginBottom: '3rem',
          }}
        >
          {[
            { num: '3+', label: 'ML Projects' },
            { num: '2', label: 'Certifications' },
            { num: '600+', label: 'Events Led' },
            { num: '89%', label: 'Best Accuracy' },
          ].map(function (stat, i) {
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: 700, color: '#00d4ff',
                  textShadow: '0 0 20px rgba(0,212,255,0.5)',
                }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', letterSpacing: '1px' }}>
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={function () {
              const el = document.getElementById('projects')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
              border: 'none', borderRadius: '8px', color: '#fff',
              fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
              fontFamily: 'Orbitron, monospace', letterSpacing: '1px',
            }}
          >
            VIEW PROJECTS
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '14px 32px', background: 'transparent',
              border: '1px solid #00d4ff', borderRadius: '8px',
              color: '#00d4ff', fontWeight: 700, fontSize: '0.95rem',
              cursor: 'pointer', textDecoration: 'none',
              fontFamily: 'Orbitron, monospace', letterSpacing: '1px',
              display: 'inline-block',
            }}
          >
            DOWNLOAD CV
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={function () {
            const el = document.getElementById('about')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}
          style={{
            marginTop: '4rem', cursor: 'pointer',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '8px',
          }}
        >
          <span style={{ fontSize: '0.7rem', color: '#64748b', letterSpacing: '2px' }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 20, height: 30,
              border: '1px solid rgba(0,212,255,0.4)',
              borderRadius: 10, display: 'flex',
              justifyContent: 'center', paddingTop: 4,
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 3, height: 6, background: '#00d4ff', borderRadius: 2 }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}