import Link from 'next/link'

const VALUES = [
  { label: 'Excellence',        desc: 'Des standards élevés dans chaque réalisation.' },
  { label: 'Innovation',        desc: 'Des solutions modernes adaptées au contexte africain.' },
  { label: 'Transparence',      desc: 'Une relation de confiance avec nos partenaires.' },
  { label: 'Engagement',        desc: 'Un accompagnement à chaque étape du projet.' },
]

export default function AboutPreview() {
  return (
    <section className="section" style={{ background: '#0A0A0E' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <div data-aos="fade-right">
              <span className="badge badge-gold mb-4">À Propos</span>
              <h2 className="font-display mb-4">
                Une référence en Guinée{' '}
                <span className="text-gold-gradient">et en Afrique</span>
              </h2>
              <div className="divider-gold" />
              <p className="mt-6 mb-8" style={{ color: '#8A8A8A', lineHeight: 1.8 }}>
                SOGIP Group est une holding guinéenne fondée avec la vision de développer
                des solutions modernes, durables et accessibles. Grâce à une approche
                fondée sur l'innovation, la qualité et l'accompagnement, nous construisons
                les solutions de demain, aujourd'hui.
              </p>
              <Link href="/about" className="btn btn-outline">
                En savoir plus sur nous
              </Link>
            </div>
          </div>

          {/* Right — values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-aos="fade-left">
            {VALUES.map((v, i) => (
              <div
                key={v.label}
                className="p-5 rounded-xl"
                style={{
                  background: '#1A1A22',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: 'rgba(201,168,76,0.1)' }}
                >
                  <CheckIcon />
                </div>
                <h4
                  className="font-display text-lg mb-1"
                  style={{ color: '#F0EDE8' }}
                >
                  {v.label}
                </h4>
                <p className="text-sm" style={{ color: '#8A8A8A' }}>{v.desc}</p>
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
    <svg viewBox="0 0 16 16" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <polyline points="3 8 6.5 11.5 13 5" />
    </svg>
  )
}
