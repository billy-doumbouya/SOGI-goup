'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const SERVICES_TICKER = ['BTP', 'Immobilier', 'Énergie Solaire', 'Formation']

export default function HeroSection() {
  const canvasRef = useRef(null)

  // Signature element : particules dorées interactives
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = canvas.getContext('2d')
    let particles = []
    let animId
    let mouse = { x: -1000, y: -1000 }

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * (window.devicePixelRatio || 1)
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1)
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1)
    }

    const create = () => {
      particles = Array.from({ length: 55 }, () => ({
        x:  Math.random() * canvas.offsetWidth,
        y:  Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r:  Math.random() * 1.5 + 0.4,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.offsetWidth)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d  = Math.sqrt(dx * dx + dy * dy)
        if (d < 90) { p.x += (dx / d) * 1.8; p.y += (dy / d) * 1.8 }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(201,168,76,0.45)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q  = particles[j]
          const dd = Math.hypot(p.x - q.x, p.y - q.y)
          if (dd < 130) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(201,168,76,${(1 - dd / 130) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })
      animId = requestAnimationFrame(draw)
    }

    resize()
    create()
    draw()

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => { mouse.x = -1000; mouse.y = -1000 }
    const onResize = () => { resize(); create() }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    canvas.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.06) 0%, #0A0A0E 65%)' }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="badge badge-gold mb-8 inline-flex">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: '#C9A84C' }}
              />
              Holding Guinéenne Multisectorielle
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-display mb-6"
            style={{
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            Construire{' '}
            <span className="text-gold-gradient">aujourd'hui</span>
            <br />
            les solutions{' '}
            <span style={{ color: '#8A8A8A', fontStyle: 'italic', fontWeight: 300 }}>
              de demain
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl"
            style={{ color: '#8A8A8A', lineHeight: 1.75 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            SOGIP Group développe des solutions modernes, durables et accessibles
            dans quatre secteurs clés en Guinée et en Afrique de l'Ouest.
          </motion.p>

          {/* Services ticker */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {SERVICES_TICKER.map((s, i) => (
              <span
                key={s}
                className="text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  color: '#C9A84C',
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {s}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <Link href="/services" className="btn btn-primary">
              Découvrir nos services
              <ArrowRightIcon />
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Nous contacter
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          aria-hidden="true"
        >
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: '#4A4A55' }}>
            Défiler
          </span>
          <motion.div
            className="w-px h-12 origin-top"
            style={{ background: 'linear-gradient(to bottom, #C9A84C, transparent)' }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M4 10h12M12 5l5 5-5 5" />
    </svg>
  )
}
