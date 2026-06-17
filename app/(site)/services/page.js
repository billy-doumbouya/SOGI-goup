import Link from "next/link";

const SERVICES = [
  {
    href: "/services/btp",
    label: "SOGIP BTP",
    subtitle: "Construction · Travaux Publics · Aménagement",
    desc: "Constructions résidentielles et commerciales, génie civil, voiries, réhabilitation et aménagement de bas-fonds agricoles avec une approche moderne et durable.",
    items: [
      "Constructions résidentielles et commerciales",
      "Travaux de génie civil",
      "Voiries et aménagements",
      "Réhabilitation et rénovation",
      "Aménagement de bas-fonds agricoles",
    ],
    color: "#C9A84C",
    bgHover: "hover:bg-[#C9A84C]/10", // Ajout d'une opacité en Tailwind pure
  },
  {
    href: "/services/immo",
    label: "LePropio",
    subtitle: "Immobilier sans commission",
    desc: "Révolutionner l'immobilier guinéen en proposant une vente sans commission, centrée sur les intérêts du client, avec évaluateurs, coachs et notaires.",
    items: [
      "Vente et achat de biens immobiliers",
      "Évaluation immobilière",
      "Accompagnement juridique",
      "Coaching immobilier",
      "Mise en valeur des propriétés",
    ],
    color: "#7B9FC9",
    bgHover: "hover:bg-[#7B9FC9]/10",
  },
  {
    href: "/services/energie",
    label: "Soleil Guinée",
    subtitle: "Énergies Renouvelables",
    desc: "Solutions fiables, économiques et durables pour les projets d'énergies renouvelables des particuliers et entreprises à travers toute la Guinée.",
    items: [
      "Études énergétiques",
      "Dimensionnement solaire",
      "Fourniture d'équipements",
      "Installation et mise en service",
      "Maintenance et suivi",
    ],
    color: "#F0C040",
    bgHover: "hover:bg-[#F0C040]/10",
  },
  {
    href: "/services/academy",
    label: "SOGIP Academy",
    subtitle: "Cabinet d'Études, Formations & Conseils",
    desc: "Formations certifiantes en ligne et hybrides adaptées aux réalités du marché professionnel moderne, pour les jeunes et les professionnels.",
    items: [
      "Formations en ligne et hybrides",
      "Pédagogie innovante",
      "Formations certifiantes",
      "Accompagnement professionnel",
      "Insertion professionnelle",
    ],
    color: "#C97B4C",
    bgHover: "hover:bg-[#C97B4C]/10",
  },
];

export const metadata = {
  title: "Nos Services",
  description:
    "SOGIP Group intervient dans la construction, l'immobilier, les énergies renouvelables et la formation professionnelle.",
};

export default function ServicesPage() {
  return (
    <>
      <section
        className="pt-32 pb-16"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, #0A0A0E 60%)",
        }}
      >
        <div className="container text-center" data-aos="fade-up">
          <span className="badge badge-gold mb-4">Services</span>
          <h1 className="font-display mb-4">
            Quatre domaines d'
            <span className="text-gold-gradient">expertise</span>
          </h1>
          <div className="divider-gold center" />
          <p className="mt-4 max-w-xl mx-auto" style={{ color: "#8A8A8A" }}>
            Des solutions intégrées pour répondre aux besoins des particuliers,
            entreprises et institutions en Guinée.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "#0A0A0E" }}>
        <div className="container space-y-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.href}
              className="card group"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <p
                    className="text-xs font-medium tracking-widest uppercase mb-2"
                    style={{ color: s.color }}
                  >
                    {s.subtitle}
                  </p>
                  <h2
                    className="font-display text-3xl mb-3"
                    style={{ color: "#F0EDE8" }}
                  >
                    {s.label}
                  </h2>
                  <div
                    className="w-10 h-0.5 mb-4"
                    style={{ background: s.color }}
                  />
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#8A8A8A" }}
                  >
                    {s.desc}
                  </p>

                  {/* Remplacement propre de l'interactivité par des classes Tailwind et styles inline */}
                  <Link
                    href={s.href}
                    className={`btn btn-outline transition-colors duration-200 ${s.bgHover}`}
                    style={{ borderColor: `${s.color}40`, color: s.color }}
                  >
                    Découvrir {s.label}
                    <ArrowIcon />
                  </Link>
                </div>

                <div className="lg:w-1/2">
                  <ul className="space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${s.color}15`, color: s.color }}
                        >
                          <CheckIcon />
                        </span>
                        <span className="text-sm" style={{ color: "#8A8A8A" }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ArrowIcon() {
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
      <path d="M4 10h12M12 5l5 5-5 5" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-3 h-3"
      aria-hidden="true"
    >
      <polyline points="2 6 5 9 10 3" />
    </svg>
  );
}
