import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "SOGIP Academy — Formations Certifiantes",
  description:
    "SOGIP Academy (CEF-CONSEIL) propose des formations certifiantes en ligne et hybrides adaptées au marché professionnel moderne.",
};

const SERVICES = [
  {
    label: "Flexibilité d'apprentissage",
    desc: "Formations en ligne et hybrides, adaptées à votre rythme et à vos contraintes professionnelles.",
  },
  {
    label: "Pédagogie innovante",
    desc: "Des méthodes d'enseignement modernes pensées pour un apprentissage efficace et concret.",
  },
  {
    label: "Expertise reconnue",
    desc: "Des formateurs expérimentés, qualifiés dans leurs domaines respectifs.",
  },
  {
    label: "Accompagnement professionnel",
    desc: "Un suivi personnalisé pour vous aider à atteindre vos objectifs de carrière.",
  },
];

const ENGAGEMENTS = [
  "Formations orientées résultats",
  "Certifications reconnues",
  "Formats en ligne et hybrides",
  "Pédagogie adaptée au marché actuel",
  "Accompagnement individualisé",
  "Insertion professionnelle facilitée",
];

export default function AcademyPage() {
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
            <span className="badge badge-gold mb-4">SOGIP Academy</span>
            <h1 className="font-display mb-4">
              Cabinet d'Études, <span className="text-gold-gradient">Formations</span> et Conseils
            </h1>
            <div className="divider-gold" />
            <p
              className="mt-5 text-lg"
              style={{ color: "#8A8A8A", lineHeight: 1.8 }}
            >
              SOGIP Academy (CEF-CONSEIL) propose des formations certifiantes
              en ligne et hybrides adaptées aux réalités du marché
              professionnel moderne. Nous contribuons au développement des
              compétences et à l'insertion professionnelle des jeunes et des
              professionnels.
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
            Nos <span className="text-gold-gradient">engagements pédagogiques</span>
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
                  <CapIcon />
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
              <span className="badge badge-gold mb-4">Notre mission</span>
              <h2
                className="font-display text-3xl mb-4"
                style={{ color: "#F0EDE8" }}
              >
                Développer les{" "}
                <span className="text-gold-gradient">compétences</span>
              </h2>
              <div className="divider-gold" />
              <p className="mt-5" style={{ color: "#8A8A8A", lineHeight: 1.8 }}>
                SOGIP Academy contribue au développement des compétences et à
                l'insertion professionnelle des jeunes et des professionnels,
                à travers des formations pensées pour répondre aux exigences
                réelles du marché du travail.
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
function CapIcon() {
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
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
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