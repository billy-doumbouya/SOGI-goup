import Link from 'next/link'

const VALUES = [
  { label: 'Excellence',          desc: 'Des standards élevés dans chaque réalisation.' },
  { label: 'Innovation',          desc: 'Des solutions modernes adaptées au contexte africain.' },
  { label: 'Transparence',        desc: 'Une relation de confiance avec nos partenaires.' },
  { label: 'Engagement',          desc: 'Un accompagnement à chaque étape du projet.' },
  { label: 'Satisfaction client', desc: 'Des résultats pensés pour répondre aux besoins réels.' },
]

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left — text */}
          <div data-aos="fade-right">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[var(--color-gold)] bg-[var(--color-gold)]/10 rounded-full mb-4 uppercase">
              À Propos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text)] mb-4">
              Une référence en Guinée{' '}
              <span className="text-gold-gradient">et en Afrique</span>
            </h2>
            <div className="w-12 h-1 bg-[var(--color-gold)] rounded-full mt-4" />
            <p className="mt-6 mb-8 text-[var(--color-text-muted)] text-base leading-relaxed max-w-xl">
              SOGIP Group est une holding guinéenne multisectorielle spécialisée dans
              la construction, l'immobilier, les énergies renouvelables et la formation
              professionnelle. Notre mission est de développer des solutions modernes,
              durables et accessibles, répondant aux besoins des particuliers, des
              entreprises et des institutions.
            </p>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold border border-[var(--color-gold)]/30 text-[var(--color-text)] rounded-xl hover:bg-[var(--color-gold)] hover:text-[#0A0A0E] hover:border-[var(--color-gold)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] transition-all duration-300"
            >
              En savoir plus sur nous
            </Link>
          </div>

          {/* Right — values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
            {VALUES.map((v, i) => (
              <div
                key={v.label}
                className={`group p-6 rounded-2xl bg-[var(--color-bg-alt)] border border-[var(--color-border)] shadow-sm hover:border-[var(--color-gold)]/20 hover:shadow-md transition-all duration-300 ${
                  i === VALUES.length - 1 ? 'sm:col-span-2' : ''
                }`}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                {/* Check Icon Container */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 bg-[var(--color-gold)]/10 text-[var(--color-gold)] transition-transform duration-300 group-hover:scale-105"
                >
                  <CheckIcon />
                </div>
                
                {/* Title */}
                <h4 className="text-lg font-bold mb-1 text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-gold)]">
                  {v.label}
                </h4>
                
                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <svg 
      viewBox="0 0 16 16" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="w-4 h-4" 
      aria-hidden="true"
    >
      <polyline points="3 8 6.5 11.5 13 5" />
    </svg>
  )
}