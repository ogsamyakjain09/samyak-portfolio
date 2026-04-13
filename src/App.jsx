// @ts-nocheck
import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

export default function App() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(function () {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0

    function moveCursor(e) {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = mouseX - 6 + 'px'
      cursor.style.top = mouseY - 6 + 'px'
    }

    function animateFollower() {
      followerX += (mouseX - followerX - 17) * 0.12
      followerY += (mouseY - followerY - 17) * 0.12
      follower.style.left = followerX + 'px'
      follower.style.top = followerY + 'px'
      requestAnimationFrame(animateFollower)
    }

    window.addEventListener('mousemove', moveCursor)
    animateFollower()
    return function () { window.removeEventListener('mousemove', moveCursor) }
  }, [])

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Achievements />
      <Contact />
    </div>
  )
}