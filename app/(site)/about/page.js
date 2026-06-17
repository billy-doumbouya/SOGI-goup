"use client";

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
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, #0A0A0E 60%)",
        }}
      >
        <div className="container text-center" data-aos="fade-up">
          <span className="badge badge-gold mb-4">À Propos</span>
          <h1 className="font-display mb-4">
            Notre <span className="text-gold-gradient">histoire</span>
          </h1>
          <div className="divider-gold center" />
          <p
            className="mt-4 max-w-2xl mx-auto text-lg"
            style={{ color: "#8A8A8A" }}
          >
            SOGIP Group est né d'une vision : développer des solutions modernes,
            durables et accessibles pour la Guinée et l'Afrique de l'Ouest.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: "#0A0A0E" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className="p-8 rounded-2xl"
              style={{
                background: "#111118",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
              data-aos="fade-right"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}
              >
                <TargetIcon />
              </div>
              <h2
                className="font-display text-2xl mb-3"
                style={{ color: "#F0EDE8" }}
              >
                Notre Mission
              </h2>
              <div className="divider-gold" />
              <p className="mt-4" style={{ color: "#8A8A8A", lineHeight: 1.8 }}>
                Développer des solutions modernes, durables et accessibles
                répondant aux besoins des particuliers, des entreprises et des
                institutions en Guinée et en Afrique de l'Ouest, grâce à une
                approche fondée sur l'innovation, la qualité et
                l'accompagnement.
              </p>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{
                background: "#111118",
                border: "1px solid rgba(201,168,76,0.15)",
              }}
              data-aos="fade-left"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C" }}
              >
                <EyeIcon />
              </div>
              <h2
                className="font-display text-2xl mb-3"
                style={{ color: "#F0EDE8" }}
              >
                Notre Vision
              </h2>
              <div className="divider-gold" />
              <p className="mt-4" style={{ color: "#8A8A8A", lineHeight: 1.8 }}>
                Devenir une référence en Guinée et en Afrique de l'Ouest,
                incarnant la devise
                <span style={{ color: "#C9A84C" }}>
                  {" "}
                  "Vision · Innovation · Réalisation"
                </span>{" "}
                — en construisant aujourd'hui les solutions de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "#111118" }}>
        <div className="container">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="badge badge-gold mb-4">Nos Valeurs</span>
            <h2 className="font-display">
              Ce qui nous <span className="text-gold-gradient">définit</span>
            </h2>
            <div className="divider-gold center mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <div
                key={v.label}
                className="card"
                data-aos="fade-up"
                data-aos-delay={i * 70}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(201,168,76,0.1)" }}
                >
                  <DiamondIcon />
                </div>
                <h3
                  className="font-display text-xl mb-2"
                  style={{ color: "#F0EDE8" }}
                >
                  {v.label}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#8A8A8A", lineHeight: 1.7 }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: "#0A0A0E" }}>
        <div className="container">
          <div className="text-center mb-14" data-aos="fade-up">
            <span className="badge badge-gold mb-4">Histoire</span>
            <h2 className="font-display">
              Notre <span className="text-gold-gradient">parcours</span>
            </h2>
            <div className="divider-gold center mt-4" />
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div
              className="absolute left-16 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)",
              }}
              aria-hidden="true"
            />

            <div className="space-y-8">
              {MILESTONES.map((m, i) => (
                <div
                  key={m.year}
                  className="flex gap-8"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  {/* Year */}
                  <div className="w-16 flex-shrink-0 text-right">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#C9A84C" }}
                    >
                      {m.year}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1">
                    <div
                      className="w-3 h-3 rounded-full border-2"
                      style={{ background: "#0A0A0E", borderColor: "#C9A84C" }}
                    />
                  </div>

                  {/* Content */}
                  <div className="pb-6">
                    <h4
                      className="font-display text-lg mb-1"
                      style={{ color: "#F0EDE8" }}
                    >
                      {m.label}
                    </h4>
                    <p
                      className="text-sm"
                      style={{ color: "#8A8A8A", lineHeight: 1.7 }}
                    >
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
      aria-hidden="true"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function DiamondIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    </svg>
  );
}
