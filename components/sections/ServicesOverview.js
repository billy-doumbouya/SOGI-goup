'use client'
import React from 'react'
import Link from 'next/link'

const SERVICES = [
  {
    href: '/services/btp',
    label: 'SOGIP BTP',
    subtitle: 'Construction · Travaux Publics · Aménagement',
    description: 'Constructions résidentielles, génie civil, voiries et aménagement de bas-fonds agricoles avec une approche moderne et durable.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    href: '/services/immo',
    label: 'LePropio',
    subtitle: 'Immobilier sans commission',
    description: 'Vente et achat de biens immobiliers sans intermédiaire. Évaluation, coaching immobilier et accompagnement juridique inclus.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    href: '/services/energie',
    label: 'Soleil Guinée',
    subtitle: 'Énergies Renouvelables',
    description: 'Études énergétiques, dimensionnement solaire, installation et maintenance pour particuliers et entreprises.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  },
  {
    href: '/services/academy',
    label: 'SOGIP Academy',
    subtitle: "Cabinet d'Études & Formations",
    description: 'Formations certifiantes en ligne et hybrides orientées résultats, adaptées aux réalités du marché professionnel moderne.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4">

        {/* En-tête / Header de section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[var(--color-gold)] bg-[var(--color-gold)]/10 rounded-full mb-4 uppercase">
            Nos Activités
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-4">
            Quatre secteurs,{' '}
            <span className="text-gold-gradient">une vision</span>
          </h2>
          <div className="w-12 h-1 bg-[var(--color-gold)] mx-auto rounded-full mt-4" />
          <p className="max-w-xl mx-auto mt-6 text-[var(--color-text-muted)] leading-relaxed">
            SOGIP Group intervient dans des domaines complémentaires pour répondre
            aux besoins des particuliers, des entreprises et des institutions.
          </p>
        </div>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block p-8 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] shadow-sm hover:shadow-md hover:border-[var(--color-gold)]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Conteneur de l'icône */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105 bg-[var(--color-gold)]/10 text-[var(--color-gold)]"
              >
                {s.icon}
              </div>

              {/* Sous-titre textuel */}
              <p className="text-xs font-bold tracking-widest uppercase mb-2 text-[var(--color-gold)] opacity-90">
                {s.subtitle}
              </p>
              
              {/* Titre principal de la carte */}
              <h3 className="text-2xl font-bold mb-3 text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-gold)]">
                {s.label}
              </h3>
              
              {/* Description */}
              <p className="text-sm leading-relaxed mb-6 text-[var(--color-text-muted)]">
                {s.description}
              </p>

              {/* Lien d'action avec transition transform pour la flèche */}
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors duration-300">
                En savoir plus
                <svg 
                  viewBox="0 0 20 20" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                  aria-hidden="true"
                >
                  <path d="M4 10h12M12 5l5 5-5 5" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}