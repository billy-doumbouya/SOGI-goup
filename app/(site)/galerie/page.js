import { prisma } from "@/lib/db/client";
import Image from "next/image";
import Link from "next/link";

// Définition des couleurs de badges calées sur la charte et les variables CSS
const CATEGORY_COLORS = {
  BTP: "var(--color-primary)",
  Énergie: "var(--color-gold)",
  Immo: "var(--color-primary-light, #3F92DC)", 
  Academy: "var(--color-gold-dark, #A88500)",
};

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
    // Fallback de sécurité
    return [
      {
        id: 1,
        title: "Résidence Modern Conakry",
        category: "BTP",
        imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&fit=crop&q=80",
      },
      {
        id: 2,
        title: "Installation Solaire 10kWc",
        category: "Énergie",
        imageUrl: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80",
      },
      {
        id: 3,
        title: "Villa LePropio — Kaloum",
        category: "Immo",
        imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop&q=80",
      },
      {
        id: 4,
        title: "Formation CEF — Batch 3",
        category: "Academy",
        imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
      },
    ];
  }
}

export default async function GaleriePage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const currentFilter = resolvedSearchParams.filter || "Tous";
  const allProjects = await getProjects();

  const filteredProjects =
    currentFilter === "Tous"
      ? allProjects
      : allProjects.filter(
          (project) => project.category.toLowerCase() === currentFilter.toLowerCase()
        );

  const categories = ["Tous", "BTP", "Énergie", "Immo", "Academy"];

  return (
    <main className="min-h-screen bg-[var(--color-bg)] pt-24 pb-16 md:pt-32">
      <div className="container mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16" data-aos="fade-up">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[var(--color-gold)] bg-[var(--color-gold)]/10 rounded-full mb-4 uppercase">
            Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-text)] mb-4">
            Notre <span className="text-blue-gradient">Galerie</span> de Réalisations
          </h1>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent mx-auto my-4" />
          <p className="text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed">
            Découvrez l'ensemble des projets menés par SOGIP Group et ses
            filiales à travers la Guinée. Vision, innovation et rigueur au
            service de vos ambitions.
          </p>
        </div>

        {/* Filters Navigation */}
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
                className={`px-5 py-2 text-xs md:text-sm font-medium rounded-full transition-all duration-300 border ${
                  isActive
                    ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] font-semibold shadow-lg shadow-[var(--color-primary)]/15"
                    : "bg-[var(--color-bg-alt)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-primary)]/30 hover:text-[var(--color-text)]"
                }`}
              >
                {cat === "Tous" ? "Tous les projets" : cat}
              </Link>
            );
          })}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div 
            className="text-center py-20 bg-[var(--color-bg-alt)] rounded-2xl border border-[var(--color-border)]"
            data-aos="fade-up"
          >
            <p className="text-[var(--color-text-muted)]">
              Aucun projet disponible dans cette catégorie pour le moment.
            </p>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((item, i) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] isolate border border-[var(--color-border)] bg-[var(--color-bg-alt)] shadow-sm hover:shadow-md transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                {/* Image Wrapper */}
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 -z-10">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={i < 3}
                  />
                </div>

                {/* Dark Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/40 z-10"
                  aria-hidden="true"
                />

                {/* Dynamic Category Badge */}
                <span
                  className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-20 backdrop-blur-md bg-[#0D2440]/80"
                  style={{ color: CATEGORY_COLORS[item.category] || "var(--color-gold)" }}
                >
                  {item.category}
                </span>

                {/* Info Text Overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-6 pt-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20 bg-gradient-to-t from-black/95 via-black/60 to-transparent"
                >
                  <h3 className="text-base font-semibold tracking-wide text-white group-hover:text-[var(--color-gold)] transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-white/80 mt-1.5 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
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