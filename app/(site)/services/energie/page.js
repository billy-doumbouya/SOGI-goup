import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "Soleil Guinée — Énergies Renouvelables",
  description:
    "Soleil Guinée accompagne particuliers et entreprises dans leurs projets d'énergies renouvelables avec des solutions fiables et durables.",
};

const SERVICES = [
  {
    label: "Études énergétiques",
    desc: "Analyse complète de vos besoins pour dimensionner la solution énergétique la plus adaptée.",
  },
  {
    label: "Dimensionnement solaire",
    desc: "Calcul précis de la puissance et des équipements nécessaires selon votre consommation.",
  },
  {
    label: "Fourniture d'équipements",
    desc: "Panneaux, batteries et onduleurs sélectionnés pour leur fiabilité et leur durabilité.",
  },
  {
    label: "Installation et mise en service",
    desc: "Installation professionnelle de votre système solaire, prêt à l'emploi.",
  },
  {
    label: "Paramétrage et assistance",
    desc: "Configuration optimale et support technique pour un fonctionnement sans accroc.",
  },
  {
    label: "Maintenance et suivi",
    desc: "Suivi régulier des performances pour garantir la longévité de votre installation.",
  },
];

const ENGAGEMENTS = [
  "Solutions fiables et économiques",
  "Études énergétiques personnalisées",
  "Équipements durables",
  "Performance et autonomie garanties",
  "Accompagnement à chaque étape",
  "Rentabilité énergétique optimisée",
];

export default function EnergiePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-20"
        style={{
          background:
            "radial-gradient(ellipse at 40% 0%, rgba(201,168,76,0.07) 0%, #0A0A0E 65%)",
        }}
      >
        <div className="container">
          <div className="max-w-3xl" data-aos="fade-up">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm mb-6 transition-colors hover:text-[#C9A84C]"
              style={{ color: "#8A8A8A" }}
            >
              <BackIcon /> Tous les services
            </Link>
            <span className="badge badge-gold mb-4">Soleil Guinée</span>
            <h1 className="font-display mb-4">
              Énergies <span className="text-gold-gradient">Renouvelables</span>
            </h1>
            <div className="divider-gold" />
            <p
              className="mt-5 text-lg"
              style={{ color: "#8A8A8A", lineHeight: 1.8 }}
            >
              Soleil Guinée accompagne particuliers et entreprises dans leurs
              projets d'énergies renouvelables grâce à des solutions fiables,
              économiques et durables. Au-delà des installations, nous
              accompagnons nos clients à chaque étape afin de garantir
              performance, autonomie et rentabilité énergétique.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section" style={{ background: "#0A0A0E" }}>
        <div className="container">
          <h2
            className="font-display text-3xl mb-10"
            style={{ color: "#F0EDE8" }}
            data-aos="fade-up"
          >
            Nos <span className="text-gold-gradient">prestations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <div
                key={s.label}
                className="card"
                data-aos="fade-up"
                data-aos-delay={i * 60}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    color: "#C9A84C",
                  }}
                >
                  <SunIcon />
                </div>
                <h3
                  className="font-display text-lg mb-2"
                  style={{ color: "#F0EDE8" }}
                >
                  {s.label}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#8A8A8A", lineHeight: 1.7 }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="section" style={{ background: "#111118" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <span className="badge badge-gold mb-4">Notre approche</span>
              <h2
                className="font-display text-3xl mb-4"
                style={{ color: "#F0EDE8" }}
              >
                Performance et{" "}
                <span className="text-gold-gradient">autonomie</span>
              </h2>
              <div className="divider-gold" />
              <p className="mt-5" style={{ color: "#8A8A8A", lineHeight: 1.8 }}>
                Chaque installation Soleil Guinée est pensée pour durer.
                De l'étude initiale à la maintenance, nous restons présents
                pour garantir à nos clients une autonomie énergétique réelle
                et rentable.
              </p>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              data-aos="fade-left"
            >
              {ENGAGEMENTS.map((e, i) => (
                <div
                  key={e}
                  className="flex items-center gap-3 p-4 rounded-xl"
                  style={{
                    background: "#1A1A22",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  data-aos="fade-up"
                  data-aos-delay={i * 50}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(201,168,76,0.15)",
                      color: "#C9A84C",
                    }}
                  >
                    <CheckIcon />
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#F0EDE8" }}
                  >
                    {e}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function BackIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M16 10H4M9 5L4 10l5 5" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3 h-3"
      aria-hidden="true"
    >
      <polyline points="2 6 5 9 10 3" />
    </svg>
  );
}