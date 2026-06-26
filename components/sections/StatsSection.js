'use client'
import React, { useEffect, useRef, useState } from 'react'
import { STATS } from '@/lib/stat'

function useCounter(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

function StatItem({ value, suffix, label, desc, active, delay }) {
  const count = useCounter(value, 1600, active)
  return (
    <div
      className="text-center px-6 py-10 transition-colors duration-300 hover:bg-[var(--color-bg-subtle)]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Valeur numérique avec gradient Or SOGIP natif */}
      <div
        className="text-5xl md:text-6xl font-extrabold mb-2 text-gold-gradient"
        aria-label={`${value}${suffix} ${label}`}
      >
        {count}{suffix}
      </div>
      
      {/* Label principal adapté à var(--color-text) */}
      <div className="text-base font-bold mb-1 text-[var(--color-text)]">
        {label}
      </div>
      
      {/* Description atténuée adaptée à var(--color-text-muted) */}
      <div className="text-xs text-[var(--color-text-muted)] max-w-[200px] mx-auto leading-relaxed">
        {desc}
      </div>
    </div>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--color-bg-alt)] border-t border-b border-[var(--color-border)]"
    >
      {/* Ligne lumineuse décorative supérieure aux couleurs Or SOGIP */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-px pointer-events-none bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent"
        aria-hidden="true"
      />
      
      <div className="container mx-auto">
        {/* Grille avec séparateurs adaptatifs basés sur var(--color-border) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[var(--color-border)] border-[var(--color-border)]">
          {STATS.map((s, i) => (
            <StatItem key={s.label} {...s} active={active} delay={i * 100} />
          ))}
        </div>
      </div>
      
      {/* Ligne lumineuse décorative inférieure aux couleurs Or SOGIP */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-px pointer-events-none bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}