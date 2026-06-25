import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "LePropio — Immobilier sans commission",
  description:
    "LePropio révolutionne l'immobilier en Guinée en proposant une vente sans commission, centrée sur les intérêts du client.",
};

const SERVICES = [
  {
    label: "Vente et achat de biens",
    desc: "Accompagnement complet pour vendre ou acheter un bien immobilier, sans intermédiaire ni commission cachée.",
  },
  {
    label: "Évaluation immobilière",
    desc: "Estimation juste et transparente de la valeur réelle de votre bien par notre équipe d'évaluateurs.",
  },
  {
    label: "Accompagnement juridique",
    desc: "Nos notaires partenaires sécurisent chaque étape de votre transaction immobilière.",
  },
  {
    label: "Coaching immobilier",
    desc: "Des conseils personnalisés pour vous aider à prendre les meilleures décisions immobilières.",
  },
  {
    label: "Mise en valeur des propriétés",
    desc: "Présentation optimisée de votre bien pour attirer les acheteurs les plus sérieux.",
  },
];

const ENGAGEMENTS = [
  "Zéro commission sur la vente",
  "Transparence à chaque étape",
  "Équipe d'évaluateurs qualifiés",
  "Accompagnement juridique inclus",
  "Coaching immobilier personnalisé",
  "Intérêts du client au centre",
];

export default function ImmoPage() {
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
            <span className="badge badge-gold mb-4">LePropio</span>
            <h1 className="font-display mb-4">
              Immobilier <span className="text-gold-gradient">sans commission</span>
            </h1>
            <div className="divider-gold" />
            <p
              className="mt-5 text-lg"
              style={{ color: "#8A8A8A", lineHeight: 1.8 }}
            >
              LePropio révolutionne l'immobilier en proposant une vente sans
              commission, centrée sur les intérêts du client. Notre équipe
              composée d'évaluateurs, de coachs immobiliers et de notaires
              accompagne les clients dans toutes les étapes de leur transaction
              immobilière sans intermédiaire.
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
            Nos <span className="text-gold-gradient">services</span>
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
                  <HomeIcon />
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
              <span className="badge badge-gold mb-4">Notre objectif</span>
              <h2
                className="font-display text-3xl mb-4"
                style={{ color: "#F0EDE8" }}
              >
                Un immobilier{" "}
                <span className="text-gold-gradient">plus transparent</span>
              </h2>
              <div className="divider-gold" />
              <p className="mt-5" style={{ color: "#8A8A8A", lineHeight: 1.8 }}>
                Notre objectif est de rendre l'immobilier plus transparent,
                accessible et avantageux. Chaque transaction LePropio est
                pensée pour protéger les intérêts du client, sans frais
                d'intermédiaire.
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
function HomeIcon() {
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
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
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