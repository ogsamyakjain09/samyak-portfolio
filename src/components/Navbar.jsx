// @ts-nocheck
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Education', href: 'timeline' },
  { name: 'Achievements', href: 'achievements' },
  { name: 'Contact', href: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(function () {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return function () {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <style>{`
        .nav-wrap {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 0 2rem; transition: all 0.4s ease;
        }
        .nav-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center;
          justify-content: space-between; height: 70px;
        }
        .nav-logo {
          font-family: Orbitron, monospace; font-size: 1.4rem;
          font-weight: 900; text-decoration: none; letter-spacing: 2px;
          background: linear-gradient(135deg, #00d4ff, #7c3aed);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .nav-links {
          display: flex; gap: 2rem; align-items: center;
        }
        .nav-link {
          color: #94a3b8; text-decoration: none; font-size: 0.9rem;
          font-weight: 500; letter-spacing: 0.5px; transition: color 0.3s ease;
        }
        .nav-link:hover { color: #00d4ff; }
        .nav-link.active { color: #00d4ff; }
        .nav-resume {
          padding: 8px 20px; border: 1px solid #00d4ff;
          border-radius: 6px; color: #00d4ff; text-decoration: none;
          font-size: 0.85rem; font-weight: 600; letter-spacing: 1px;
          font-family: Orbitron, monospace; transition: all 0.3s ease;
        }
        .nav-resume:hover { box-shadow: 0 0 20px rgba(0,212,255,0.4); }
        .hamburger {
          display: none; background: none; border: none;
          cursor: pointer; flex-direction: column; gap: 5px; padding: 4px;
        }
        .mobile-menu {
          background: rgba(2,8,24,0.98);
          border-top: 1px solid rgba(0,212,255,0.1);
          overflow: hidden;
        }
        .mobile-link {
          display: block; padding: 14px 2rem; color: #94a3b8;
          text-decoration: none; font-size: 1rem; font-weight: 500;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.3s;
        }
        .mobile-link:hover { color: #00d4ff; }
        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <div
        className="nav-wrap"
        style={{
          background: scrolled ? 'rgba(2,8,24,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : 'none',
        }}
      >
        <div className="nav-inner">

          <a href="#hero" className="nav-logo">SJ.</a>

          <div className="nav-links">
            {LINKS.map(function (link, idx) {
              return (
                <a key={idx} href={link.href} className={active === link.name ? 'nav-link active' : 'nav-link'} onClick={function () { setActive(link.name) }}>{link.name}</a>
              )
            })}
            <a href="/resume.pdf" download className="nav-resume">RESUME</a>
          </div>

          <button className="hamburger" onClick={function () { setMenuOpen(!menuOpen) }}>
            {[0, 1, 2].map(function (i) {
              return (
                <motion.span
                  key={i}
                  animate={{
                    rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                    y: menuOpen && i === 0 ? 9 : menuOpen && i === 2 ? -9 : 0,
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                  style={{
                    display: 'block',
                    width: '24px',
                    height: '2px',
                    background: '#00d4ff',
                    borderRadius: '2px',
                  }}
                />
              )
            })}
          </button>

        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {LINKS.map(function (link, idx) {
                return (
                  <a key={idx} href={link.href} className="mobile-link" onClick={function () { setMenuOpen(false) }}>{link.name}</a>
                )
              })}
              <div style={{ padding: '14px 2rem' }}>
                <a href="/resume.pdf" download style={{ color: '#00d4ff', textDecoration: 'none', fontFamily: 'Orbitron, monospace', fontSize: '0.85rem' }}>DOWNLOAD RESUME</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </>
  )
}