import Image from "next/image";
import Link from "next/link";

// Placeholder gallery items — replaced by DB data in production
const PLACEHOLDER_ITEMS = [
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
  {
    id: 5,
    title: "Bâtiment Commercial — Matam",
    category: "BTP",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Centrale Solaire Kindia",
    category: "Énergie",
    imageUrl:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&auto=format&fit=crop&q=80",
  },
];
const CATEGORY_COLORS = {
  BTP: "#C9A84C",
  Énergie: "#4CAF7D",
  Immo: "#7B9FC9",
  Academy: "#C97B4C",
};

export default function GalleryPreview() {
  return (
    <section className="section" style={{ background: "#111118" }}>
      <div className="container">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          data-aos="fade-up"
        >
          <div>
            <span className="badge badge-gold mb-4">Réalisations</span>
            <h2 className="font-display">
              Nos <span className="text-gold-gradient">projets</span>
            </h2>
            <div className="divider-gold mt-4" />
          </div>
          <Link
            href="/galerie"
            className="btn btn-outline self-start md:self-auto"
          >
            Voir toute la galerie
          </Link>
        </div>

        {/* Masonry-like grid */}
       <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {PLACEHOLDER_ITEMS.map((item, i) => (
        <div
          key={item.id}
          className="group relative rounded-xl overflow-hidden aspect-[4/3] isolate"
          style={{
            background: "#22222C",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
          data-aos="fade-up"
          data-aos-delay={i * 60}
        >
          {/* Image optimisée Next.js */}
          <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105 -z-10">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              priority={i < 3} // Charge les 3 premières images en priorité
            />
          </div>

          {/* Overlay sombre au survol */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ background: "rgba(0,0,0,0.5)" }}
            aria-hidden="true"
          />

          {/* Badge de catégorie */}
          <span
            className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full z-10"
            style={{
              background: "rgba(10,10,14,0.75)",
              color: CATEGORY_COLORS[item.category] || "#C9A84C",
              backdropFilter: "blur(8px)",
            }}
          >
            {item.category}
          </span>

          {/* Titre avec dégradé de lisibilité constant */}
          <div
            className="absolute bottom-0 left-0 right-0 p-5 pt-12 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10"
            style={{
              background: "linear-gradient(to top, rgba(10,10,14,0.95) 0%, rgba(10,10,14,0.6) 50%, transparent 100%)",
            }}
          >
            <p className="text-sm font-medium tracking-wide" style={{ color: "#F0EDE8" }}>
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </section>
      </div>
    </section>
  );
}
