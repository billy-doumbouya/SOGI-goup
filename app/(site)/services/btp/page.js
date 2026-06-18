import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: "SOGIP BTP — Construction & Travaux Publics",
  description:
    "SOGIP BTP intervient dans la construction, les travaux publics et l'aménagement en Guinée avec une approche moderne et durable.",
};

const SERVICES = [
  {
    label: "Constructions résidentielles",
    desc: "Villas, appartements et logements modernes adaptés aux besoins des familles guinéennes.",
  },
  {
    label: "Constructions commerciales",
    desc: "Bureaux, commerces, entrepôts et bâtiments industriels aux normes internationales.",
  },
  {
    label: "Travaux de génie civil",
    desc: "Infrastructures routières, ponts, dalots et ouvrages d'art durables.",
  },
  {
    label: "Voiries et aménagements",
    desc: "Aménagement de voies d'accès, parkings, espaces verts et zones urbaines.",
  },
  {
    label: "Réhabilitation et rénovation",
    desc: "Remise en état et modernisation de bâtiments existants.",
  },
  {
    label: "Aménagement de bas-fonds",
    desc: "Valorisation agricole de bas-fonds pour une production durable.",
  },
];

const ENGAGEMENTS = [
  "Qualité des ouvrages certifiée",
  "Respect strict des délais",
  "Excellence opérationnelle",
  "Matériaux de qualité supérieure",
  "Équipe d'ingénieurs expérimentés",
  "Suivi de chantier rigoureux",
];

export default function BTPPage() {
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
              className="inline-flex items-center gap-2 text-sm mb-6 transition-colors"
              style={{ color: "#8A8A8A" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A8A")}
            >
              <BackIcon /> Tous les services
            </Link>
            <span className="badge badge-gold mb-4">SOGIP BTP</span>
            <h1 className="font-display mb-4">
              Construction ·{" "}
              <span className="text-gold-gradient">Travaux Publics</span> ·
              Aménagement
            </h1>
            <div className="divider-gold" />
            <p
              className="mt-5 text-lg"
              style={{ color: "#8A8A8A", lineHeight: 1.8 }}
            >
              SOGIP BTP intervient dans la construction de bâtiments, les
              travaux publics et l'aménagement de bas-fonds avec une approche
              moderne et durable. Notre engagement repose sur la qualité des
              ouvrages, le respect des délais et l'excellence opérationnelle.
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
                  <BuildingIcon />
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
              <span className="badge badge-gold mb-4">Nos engagements</span>
              <h2
                className="font-display text-3xl mb-4"
                style={{ color: "#F0EDE8" }}
              >
                La qualité comme{" "}
                <span className="text-gold-gradient">standard</span>
              </h2>
              <div className="divider-gold" />
              <p className="mt-5" style={{ color: "#8A8A8A", lineHeight: 1.8 }}>
                Chaque projet SOGIP BTP est réalisé avec le plus haut niveau
                d'exigence. Notre équipe d'ingénieurs et de techniciens garantit
                des ouvrages durables, conformes aux normes et livrés dans les
                délais convenus.
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
function BuildingIcon() {
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
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
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
