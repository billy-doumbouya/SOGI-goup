'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 4,    suffix: '',   label: 'Filiales actives',          desc: 'BTP · Immo · Énergie · Formation' },
  { value: 10,   suffix: '+',  label: 'Années d\'expérience',      desc: 'En Guinée et Afrique de l\'Ouest' },
  { value: 200,  suffix: '+',  label: 'Projets réalisés',          desc: 'Constructions, installations, formations' },
  { value: 1500, suffix: '+',  label: 'Clients satisfaits',        desc: 'Particuliers, entreprises, institutions' },
]

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
      className="text-center px-6 py-8"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div
        className="text-5xl md:text-6xl font-display font-bold mb-2 text-gold-gradient"
        aria-label={`${value}${suffix} ${label}`}
      >
        {count}{suffix}
      </div>
      <div
        className="text-base font-semibold mb-1"
        style={{ color: '#F0EDE8' }}
      >
        {label}
      </div>
      <div className="text-sm" style={{ color: '#4A4A55' }}>
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
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: '#111118',
        borderTop:    '1px solid rgba(255,255,255,0.07)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Gold glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
        aria-hidden="true"
      />

      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0"
          style={{ '--tw-divide-opacity': 1, borderColor: 'rgba(255,255,255,0.06)' }}
        >
          {STATS.map((s, i) => (
            <StatItem key={s.label} {...s} active={active} delay={i * 100} />
          ))}
        </div>
      </div>

      {/* Gold glow bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
