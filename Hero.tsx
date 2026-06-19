'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', onMouse)

    // Particles
    type Particle = {
      x: number; y: number; vx: number; vy: number
      size: number; alpha: number; hue: number; pulse: number
    }
    const count = 90
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.5 + 0.1,
      hue: Math.random() > 0.5 ? 195 : 210,
      pulse: Math.random() * Math.PI * 2,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.pulse += 0.01
        p.x += p.vx
        p.y += p.vy

        // Mouse repulsion (subtle)
        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 120) {
          const force = (120 - dist) / 120
          p.vx += (dx / dist) * force * 0.02
          p.vy += (dy / dist) * force * 0.02
        }

        // Dampen velocity
        p.vx *= 0.99
        p.vy *= 0.99

        // Wrap
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        const alpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse))
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, 45%, 65%, ${alpha})`
        ctx.fill()

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const ex = p.x - q.x
          const ey = p.y - q.y
          const edist = Math.sqrt(ex * ex + ey * ey)
          if (edist < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `hsla(200, 40%, 60%, ${0.06 * (1 - edist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Background gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="orb-1 absolute w-[700px] h-[700px] rounded-full opacity-[0.12]"
          style={{
            top: '-15%',
            left: '-10%',
            background: 'radial-gradient(circle, #427185 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="orb-2 absolute w-[600px] h-[600px] rounded-full opacity-[0.10]"
          style={{
            bottom: '-10%',
            right: '-5%',
            background: 'radial-gradient(circle, #6FAEBD 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="orb-3 absolute w-[400px] h-[400px] rounded-full opacity-[0.07]"
          style={{
            top: '40%',
            left: '50%',
            background: 'radial-gradient(circle, #DFDFE3 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6FAEBD]/20 bg-[#6FAEBD]/5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6FAEBD] animate-pulse" />
          <span className="text-xs text-[#6FAEBD] tracking-widest uppercase font-medium">
            Digital Marketing Agency
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-800 leading-[0.92] tracking-tight text-white"
            style={{ fontWeight: 800, letterSpacing: '-0.03em', lineHeight: '0.92' }}
          >
            Build a brand
            <br />
            <span className="text-gradient">people remember.</span>
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-lg md:text-xl text-[#DFDFE3]/55 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontWeight: 400 }}
        >
          From strategy setup to all‑out marketing campaigns,
          <br className="hidden sm:block" />
          we help businesses stand out and scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-full font-medium text-sm text-white overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #427185 0%, #6FAEBD 100%)',
              boxShadow: '0 0 40px rgba(111,174,189,0.25)',
            }}
          >
            <span className="relative z-10">Book Free Consultation</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#portfolio"
            className="group flex items-center gap-2 px-8 py-4 rounded-full font-medium text-sm text-[#DFDFE3]/70 border border-white/10 hover:border-white/25 hover:text-white transition-all duration-300"
          >
            View Portfolio
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#DFDFE3]/30 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-[#6FAEBD]/30 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-[#6FAEBD]"
            style={{ height: '40%' }}
            animate={{ y: ['0%', '250%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
