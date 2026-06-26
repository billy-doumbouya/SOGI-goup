import React from 'react';

const VALUES = [
  {
    label: "Excellence",
    desc: "Des standards élevés dans chaque réalisation, de la conception à la livraison.",
  },
  {
    label: "Innovation",
    desc: "Des solutions modernes et créatives adaptées aux réalités du contexte africain.",
  },
  {
    label: "Transparence",
    desc: "Une relation de confiance totale avec nos clients, partenaires et institutions.",
  },
  {
    label: "Engagement",
    desc: "Un accompagnement personnalisé à chaque étape du projet.",
  },
  {
    label: "Satisfaction client",
    desc: "La réussite du client est notre principal indicateur de performance.",
  },
];

const MILESTONES = [
  {
    year: "2014",
    label: "Création de SOGIP",
    desc: "Fondation du groupe à Conakry avec la vision d'un impact multisectoriel durable.",
  },
  {
    year: "2016",
    label: "Lancement SOGIP BTP",
    desc: "Démarrage des activités de construction et travaux publics en Guinée.",
  },
  {
    year: "2019",
    label: "Création de LePropio",
    desc: "Révolution de l'immobilier guinéen avec un modèle sans commission.",
  },
  {
    year: "2021",
    label: "Soleil Guinée",
    desc: "Expansion dans les énergies renouvelables face aux défis énergétiques du pays.",
  },
  {
    year: "2023",
    label: "SOGIP Academy",
    desc: "Lancement des formations certifiantes pour renforcer les compétences locales.",
  },
];

export const metadata = {
  title: "À Propos",
  description:
    "Découvrez l'histoire, la mission, les valeurs et la vision de SOGIP Group, holding guinéenne multisectorielle.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-[#0D2440] antialiased">
      
      {/* Hero Section avec Clip-Path asymétrique et dégradé radial Tailwind */}
      <section className="relative pt-32 pb-24 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(23,99,168,0.08)_0%,_#FFFFFF_70%)] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-slate-50/50 [clip-path:polygon(0_0,_100%_0,_100%_90%,_0_100%)]">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#D4A800] bg-[#D4A800]/10 rounded-full mb-4 uppercase">
            À Propos
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Notre <span className="bg-gradient-to-r from-[#1763A8] to-[#124E85] bg-clip-text text-transparent">histoire</span>
          </h1>
          <div className="w-12 h-1 bg-[#D4A800] mx-auto rounded-full" />
          <p className="mt-6 max-w-2xl mx-auto text-lg text-[#5A6B7D] leading-relaxed">
            SOGIP Group est né d'une vision : développer des solutions modernes,
            durables et accessibles pour la Guinée et l'Afrique de l'Ouest.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Box Mission */}
            <div
              className="p-8 md:p-10 rounded-2xl bg-[#F7F9FC] border border-[#1763A8]/15 hover:border-[#1763A8]/30 transition-all duration-300 shadow-sm"
              data-aos="fade-right"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#1763A8]/10 text-[#1763A8]">
                <TargetIcon />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-[#0D2440]">
                Notre Mission
              </h2>
              <div className="w-10 h-0.5 bg-[#D4A800] mb-4" />
              <p className="text-[#5A6B7D] leading-relaxed">
                Développer des solutions modernes, durables et accessibles
                répondant aux besoins des particuliers, des entreprises et des
                institutions en Guinée et en Afrique de l'Ouest, grâce à une
                approche fondée sur l'innovation, la qualité et
                l'accompagnement.
              </p>
            </div>

            {/* Box Vision */}
            <div
              className="p-8 md:p-10 rounded-2xl bg-[#F7F9FC] border border-[#1763A8]/15 hover:border-[#1763A8]/30 transition-all duration-300 shadow-sm"
              data-aos="fade-left"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#1763A8]/10 text-[#1763A8]">
                <EyeIcon />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-[#0D2440]">
                Notre Vision
              </h2>
              <div className="w-10 h-0.5 bg-[#D4A800] mb-4" />
              <p className="text-[#5A6B7D] leading-relaxed">
                Devenir une référence en Guinée et en Afrique de l'Ouest,
                incarnant la devise{" "}
                <span className="text-[#D4A800] font-medium">
                  "Vision · Innovation · Réalisation"
                </span>{" "}
                — en construisant aujourd'hui les solutions de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#D4A800] bg-[#D4A800]/10 rounded-full mb-4 uppercase">
              Nos Valeurs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Ce qui nous <span className="bg-gradient-to-r from-[#D4A800] to-[#B38E00] bg-clip-text text-transparent">définit</span>
            </h2>
            <div className="w-12 h-1 bg-[#D4A800] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <div
                key={v.label}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 70}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-[#D4A800]/10 text-[#D4A800]">
                  <DiamondIcon />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0D2440]">
                  {v.label}
                </h3>
                <p className="text-sm text-[#5A6B7D] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[#D4A800] bg-[#D4A800]/10 rounded-full mb-4 uppercase">
              Histoire
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Notre <span className="bg-gradient-to-r from-[#1763A8] to-[#124E85] bg-clip-text text-transparent">parcours</span>
            </h2>
            <div className="w-12 h-1 bg-[#D4A800] mx-auto rounded-full mt-4" />
          </div>

          <div className="relative max-w-2xl mx-auto px-4">
            {/* Ligne verticale dégradée */}
            <div
              className="absolute left-[2.25rem] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[#D4A800]/40 to-transparent"
              aria-hidden="true"
            />

            <div className="space-y-10">
              {MILESTONES.map((m, i) => (
                <div
                  key={m.year}
                  className="flex gap-6 items-start relative group"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  {/* Année à gauche */}
                  <div className="w-12 flex-shrink-0 text-right pt-0.5">
                    <span className="text-sm font-bold text-[#D4A800] tracking-wider">
                      {m.year}
                    </span>
                  </div>

                  {/* Point central de la timeline */}
                  <div className="relative flex-shrink-0 mt-2 z-10">
                    <div className="w-3 h-3 rounded-full border-2 bg-white border-[#D4A800] group-hover:bg-[#D4A800] transition-colors duration-300" />
                  </div>

                  {/* Contenu */}
                  <div className="flex-1 bg-slate-50/50 p-4 rounded-xl border border-slate-100 group-hover:bg-slate-50 transition-colors duration-300">
                    <h4 className="text-lg font-bold mb-1 text-[#0D2440]">
                      {m.label}
                    </h4>
                    <p className="text-sm text-[#5A6B7D] leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- ICONES NETTOYÉES ---
function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    </svg>
  );
}