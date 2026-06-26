import React from "react";
import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER_ITEMS = [
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
  {
    id: 5,
    title: "Bâtiment Commercial — Matam",
    category: "BTP",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Centrale Solaire Kindia",
    category: "Énergie",
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80",
  },
];

// Mapping des couleurs de texte basé sur vos variables de marque
const CATEGORY_COLORS = {
  BTP: "text-[var(--color-gold)]",
  Énergie: "text-[var(--color-success,#4CAF7D)]",
  Immo: "text-[var(--color-primary-light,#7B9FC9)]",
  Academy: "text-[var(--color-gold-dark,#C97B4C)]",
};

export default function GalleryPreview() {
  return (
    <section className="py-20 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4">
        
        {/* Entête / Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          data-aos="fade-up"
        >
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-[var(--color-gold)] bg-[var(--color-gold)]/10 rounded-full mb-4 uppercase">
              Réalisations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[var(--color-text)]">
              Nos <span className="text-gold-gradient">projets</span>
            </h2>
            <div className="w-12 h-1 bg-[var(--color-gold)] rounded-full mt-4" />
          </div>
          
          <Link
            href="/galerie"
            className="px-5 py-2.5 rounded-xl font-semibold text-sm text-[var(--color-text)] border border-[var(--color-border)] bg-[var(--color-bg-alt)] hover:bg-[var(--color-border)]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] transition-all duration-300 self-start md:self-auto text-center"
          >
            Voir toute la galerie
          </Link>
        </div>

        {/* Grille des cartes de projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDER_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] isolate bg-[var(--color-bg-alt)] border border-[var(--color-border)] shadow-sm hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={i * 60}
            >
              {/* Image optimisée Next.js avec scale fluide au hover */}
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

              {/* Voile sombre d'assombrissement au survol */}
              <div
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* Badge de catégorie avec effet frosted glass */}
              <span
                className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-xl z-20 backdrop-blur-md bg-black/70 tracking-wide ${
                  CATEGORY_COLORS[item.category] || "text-[var(--color-gold)]"
                }`}
              >
                {item.category}
              </span>

              {/* Conteneur de titre */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 pt-16 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 z-20 bg-gradient-to-t from-black via-black/70 to-transparent"
              >
                <h3 className="text-base font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-[var(--color-gold)]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}