import { prisma } from "@/lib/db/client";
import Image from "next/image";
import Link from "next/link";

// Définition des couleurs de badges selon la catégorie
const CATEGORY_COLORS = {
  BTP: "#C9A84C",
  Énergie: "#4CAF7D",
  Immo: "#7B9FC9",
  Academy: "#C97B4C",
};

// Récupération des projets depuis la base de données (Neon PostgreSQL via Prisma)
async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return projects;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    // Fallback de sécurité (si la bdd n'est pas encore seedée)
    return [
      {
        id: 1,
        title: "Résidence Modern Conakry",
        category: "BTP",
        imageUrl:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=80",
      },
      {
        id: 2,
        title: "Installation Solaire 10kWc",
        category: "Énergie",
        imageUrl:
          "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80",
      },
      {
        id: 3,
        title: "Villa LePropio — Kaloum",
        category: "Immo",
        imageUrl:
          "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80",
      },
      {
        id: 4,
        title: "Formation CEF — Batch 3",
        category: "Academy",
        imageUrl:
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
      },
    ];
  }
}

export default async function GaleriePage({ searchParams }) {
  // Récupération du paramètre de filtrage depuis l'URL (ex: /galerie?filter=BTP)
  const resolvedSearchParams = await searchParams;
  const currentFilter = resolvedSearchParams.filter || "Tous";

  const allProjects = await getProjects();

  // Filtrage des projets
  const filteredProjects =
    currentFilter === "Tous"
      ? allProjects
      : allProjects.filter(
          (project) =>
            project.category.toLowerCase() === currentFilter.toLowerCase(),
        );

  const categories = ["Tous", "BTP", "Énergie", "Immo", "Academy"];

  return (
    <main className="min-h-screen bg-[#0A0A0E] pt-24 pb-16 md:pt-32">
      <div className="container">
        {/* En-tête de la page */}
        <div
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          data-aos="fade-up"
        >
          <span className="badge badge-gold mb-4 inline-block">Portfolio</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-[#F0EDE8] mb-4">
            Notre <span className="text-gold-gradient">Galerie</span> de
            Réalisations
          </h1>
          <div className="divider-gold mx-auto my-4 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" />
          <p className="text-[#8A8A8A] text-sm md:text-base leading-relaxed">
            Découvrez l&apos;ensemble des projets menés par SOGIP Group et ses
            filiales à travers la Guinée. Vision, innovation et rigueur au
            service de vos ambitions.
          </p>
        </div>

        {/* Barre de navigation des filtres (Fonctionne par rafraîchissement d'URL propre à Next.js 15) */}
        <div
          className="flex flex-wrap justify-center items-center gap-2 mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {categories.map((cat) => {
            const isActive = currentFilter.toLowerCase() === cat.toLowerCase();
            return (
              <Link
                key={cat}
                href={cat === "Tous" ? "/galerie" : `/galerie?filter=${cat}`}
                scroll={false}
                className={`px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-200 border ${
                  isActive
                    ? "bg-[#C9A84C] text-[#0A0A0E] border-[#C9A84C] font-semibold shadow-lg shadow-[#C9A84C]/10"
                    : "bg-[#1A1A22] text-[#8A8A8A] border-white/5 hover:border-[#C9A84C]/30 hover:text-[#F0EDE8]"
                }`}
              >
                {cat === "Tous" ? "Tous les projets" : cat}
              </Link>
            );
          })}
        </div>

        {/* Grille de projets */}
        {filteredProjects.length === 0 ? (
          <div
            className="text-center py-20 bg-[#111118] rounded-2xl border border-white/5"
            data-aos="fade-up"
          >
            <p className="text-[#8A8A8A]">
              Aucun projet disponible dans cette catégorie pour le moment.
            </p>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((item, i) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] isolate border border-white/5"
                style={{ background: "#1A1A22" }}
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                {/* Gestion de l'image */}
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 -z-10">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={i < 3}
                  />
                </div>

                {/* Voile sombre au survol */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                  aria-hidden="true"
                />

                {/* Badge dynamique de la filiale */}
                <span
                  className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10"
                  style={{
                    background: "rgba(10,10,14,0.85)",
                    color: CATEGORY_COLORS[item.category] || "#C9A84C",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {item.category}
                </span>

                {/* Conteneur Titre et dégradé */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 pt-16 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(10,10,14,0.95) 0%, rgba(10,10,14,0.6) 60%, transparent 100%)",
                  }}
                >
                  <h3 className="text-base font-semibold tracking-wide text-[#F0EDE8]">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-[#8A8A8A] mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
