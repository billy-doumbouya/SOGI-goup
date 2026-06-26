'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const SERVICES_TICKER = ['BTP', 'Immobilier', 'Énergie Solaire', 'Formation']

export default function HeroSection() {
  const canvasRef = useRef(null)

  // Signature element : particules dorées interactives ajustées sur le thème SOGIP
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
      particles = Array.from({ length: 45 }, () => ({
        x:  Math.random() * canvas.offsetWidth,
        y:  Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r:  Math.random() * 1.5 + 0.5,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.offsetWidth)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.offsetHeight) p.vy *= -1

        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d  = Math.sqrt(dx * dx + dy * dy)
        if (d < 90) { p.x += (dx / d) * 1.5; p.y += (dy / d) * 1.5 }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        // Utilisation de la couleur Or SOGIP (rgba de --color-gold)
        ctx.fillStyle = 'rgba(239, 190, 0, 0.35)'
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q  = particles[j]
          const dd = Math.hypot(p.x - q.x, p.y - q.y)
          if (dd < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(239, 190, 0, ${(1 - dd / 120) * 0.1})`
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg)] bg-[radial-gradient(ellipse_at_60%_40%,_var(--color-bg-subtle)_0%,_transparent_70%)]">
      
      {/* 🌊 CLIIP-PATH GÉOMÉTRIQUE COMPLEXE (Adapté aux teintes SOGIP de global.css) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden" aria-hidden="true">
        
        {/* Wave 1 : Fond subtil alternatif */}
        <div 
          className="absolute right-0 top-0 w-full lg:w-[70%] h-full bg-gradient-to-br from-[var(--color-bg-alt)] via-[var(--color-bg-subtle)] to-[var(--color-bg)] opacity-70 [clip-path:polygon(100%_0,0_0,40%_40%,20%_100%,100%_100%)]"
        />

        {/* Wave 2 : Éclat Or très fluide et translucide */}
        <div 
          className="absolute right-0 bottom-0 w-[85%] lg:w-[50%] h-[80%] bg-gradient-to-tr from-[var(--color-gold-subtle)] via-transparent to-[var(--color-gold-subtle)] [clip-path:polygon(100%_15%,15%_35%,60%_70%,0%_100%,100%_100%)] blur-sm"
        />

        {/* Wave 3 : Lame de découpe corporate asymétrique */}
        <div 
          className="absolute right-0 top-0 w-full lg:w-[45%] h-full bg-[var(--color-bg-alt)] border-l border-[var(--color-border)] shadow-sm [clip-path:polygon(100%_0,50%_0,20%_30%,65%_65%,35%_100%,100%_100%)] hidden md:block"
        />

        {/* Faisceau lumineux bleu/or mixé */}
        <div 
          className="absolute right-[10%] top-[-10%] w-[250px] h-[120%] bg-gradient-to-b from-[var(--color-blue-light)]/5 via-transparent to-transparent rotate-[20deg] [clip-path:polygon(20%_0,80%_0,100%_100%,0%_100%)] blur-2xl hidden lg:block"
        />
      </div>

      {/* Canvas des particules interactives */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Grille de fond technique et élégante utilisant var(--color-border) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(var(--color-border)_1px,_transparent_1px),_linear-gradient(90deg,_var(--color-border)_1px,_transparent_1px)] bg-[size:100px_100px] opacity-60"
        aria-hidden="true"
      />

      <div className="container relative z-20 pt-32 pb-20">
        <div className="max-w-4xl">

          {/* Badge issu de global.css (.badge-gold) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="badge badge-gold mb-8 inline-flex">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--color-gold-dark)] animate-pulse" />
              Holding Guinéenne Multisectorielle
            </span>
          </motion.div>

          {/* Headline avec classes natives de dégradés */}
          <motion.h1
            className="mb-6 text-[var(--color-text)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            Construire{' '}
            <span className="text-blue-gradient">aujourd'hui</span>
            <br />
            les solutions{' '}
            <span className="text-[var(--color-text-muted)] font-light italic">
              de demain
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl mb-10 max-w-2xl text-[var(--color-text-muted)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          >
            SOGIP Group développe des solutions modernes, durables et accessibles
            dans quatre secteurs clés en Guinée et en Afrique de l'Ouest.
          </motion.p>

          {/* Services tickers */}
          <motion.div
            className="flex flex-wrap gap-2 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            {SERVICES_TICKER.map((s, i) => (
              <span
                key={s}
                className="badge badge-blue text-[10px] font-bold tracking-widest cursor-default transition-all duration-300 hover:border-[var(--color-gold-dark)]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {s}
              </span>
            ))}
          </motion.div>

          {/* Boutons d'actions globaux (.btn-primary, .btn-outline) */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <Link href="/services" className="btn btn-primary group w-full sm:w-auto justify-center">
              Découvrir nos services
              <ArrowRightIcon />
            </Link>
            
            <Link href="/contact" className="btn btn-outline w-full sm:w-auto justify-center text-center">
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
          <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[var(--color-text-faint)]">
            Défiler
          </span>
          <motion.div
            className="w-px h-12 origin-top"
            style={{ background: 'linear-gradient(to bottom, var(--color-gold-dark), transparent)' }}
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
    <svg 
      viewBox="0 0 20 20" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" 
      aria-hidden="true"
    >
      <path d="M4 10h12M12 5l5 5-5 5" />
    </svg>
  )
}