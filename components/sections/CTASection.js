import React from 'react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[var(--color-bg)]">
      
      {/* Halo lumineux doré en arrière-plan */}
      <div
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_70%)]"
        aria-hidden="true"
      />

      {/* Ligne lumineuse dorée supérieure */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 relative z-10 text-center" data-aos="fade-up">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[var(--color-gold)] bg-[var(--color-gold)]/10 rounded-full mb-6 uppercase">
          Travaillons ensemble
        </span>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mx-auto mb-6 max-w-[700px] text-[var(--color-text)]">
          Prêt à concrétiser votre{' '}
          <span className="text-gold-gradient">
            projet ?
          </span>
        </h2>

        <div className="w-12 h-1 bg-[var(--color-gold)] mx-auto rounded-full mb-6" />

        <p className="mb-10 mx-auto text-base md:text-lg text-[var(--color-text-muted)] max-w-[520px] leading-relaxed">
          Notre équipe est disponible pour étudier vos besoins et vous proposer
          des solutions adaptées à votre situation.
        </p>

        {/* Boutons d'action standardisés */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/contact" 
            className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#0A0A0E] bg-[var(--color-gold)] hover:bg-[var(--color-gold-light,#E5C46E)] transition-all duration-300 shadow-lg shadow-[var(--color-gold)]/10 hover:shadow-[var(--color-gold)]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] w-full sm:w-auto justify-center"
          >
            Démarrer un projet
            <svg 
              viewBox="0 0 20 20" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              aria-hidden="true"
            >
              <path d="M4 10h12M12 5l5 5-5 5" />
            </svg>
          </Link>
          
          <Link 
            href="/services" 
            className="px-6 py-3 rounded-xl font-semibold text-sm text-[var(--color-text)] border border-[var(--color-border)] bg-[var(--color-bg-alt)] hover:bg-[var(--color-border)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] transition-all duration-300 w-full sm:w-auto justify-center text-center"
          >
            Explorer nos services
          </Link>
        </div>
      </div>

      {/* Ligne lumineuse dorée inférieure */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}