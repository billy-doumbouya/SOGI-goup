import Link from 'next/link'

export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: '#0A0A0E' }}
    >
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Top border glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
        aria-hidden="true"
      />

      <div className="container relative z-10 text-center" data-aos="fade-up">
        <span className="badge badge-gold mb-6 mx-auto">Travaillons ensemble</span>

        <h2 className="font-display mx-auto mb-6" style={{ maxWidth: '700px' }}>
          Prêt à concrétiser votre{' '}
          <span className="text-gold-gradient">projet ?</span>
        </h2>

        <div className="divider-gold center" />

        <p className="mt-6 mb-10 mx-auto text-lg" style={{ color: '#8A8A8A', maxWidth: '520px' }}>
          Notre équipe est disponible pour étudier vos besoins et vous proposer
          des solutions adaptées à votre situation.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact" className="btn btn-primary">
            Démarrer un projet
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
              <path d="M4 10h12M12 5l5 5-5 5" />
            </svg>
          </Link>
          <Link href="/services" className="btn btn-outline">
            Explorer nos services
          </Link>
        </div>
      </div>

      {/* Bottom border glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px]"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
