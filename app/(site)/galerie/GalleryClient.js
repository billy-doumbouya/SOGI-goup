"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const CATEGORIES = ["Tous", "BTP", "Immo", "Énergie", "Academy"];

export default function GalleryClient({ items }) {
  const [active, setActive] = useState("Tous");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === "Tous" ? items : items.filter((i) => i.category === active);

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
          <span className="badge badge-gold mb-4">Galerie</span>
          <h1 className="font-display mb-4">
            Nos <span className="text-gold-gradient">réalisations</span>
          </h1>
          <div className="divider-gold center" />
          <p className="mt-4 max-w-lg mx-auto" style={{ color: "#8A8A8A" }}>
            Un aperçu de nos projets à travers les différentes filiales du
            groupe.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8" style={{ background: "#0A0A0E" }}>
        <div className="container">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={
                  active === cat
                    ? {
                        background: "linear-gradient(135deg, #9A7A30, #C9A84C)",
                        color: "#0A0A0E",
                        fontWeight: 600,
                      }
                    : {
                        background: "#1A1A22",
                        color: "#8A8A8A",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }
                }
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <p className="text-center py-16" style={{ color: "#4A4A55" }}>
              Aucune réalisation dans cette catégorie pour l'instant.
            </p>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <AnimatePresence>
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
                    style={{
                      background: "#1A1A22",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onClick={() => setLightbox(item)}
                    role="button"
                    aria-label={`Voir ${item.title}`}
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setLightbox(item)}
                  >
                    {/* Image */}
                    {item.imageUrl ? (
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #1A1A22, #22222C)",
                        }}
                        aria-hidden="true"
                      />
                    )}

                    {/* Overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(0,0,0,0.55)" }}
                      aria-hidden="true"
                    />

                    {/* Category */}
                    <span
                      className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(0,0,0,0.7)",
                        color: "#C9A84C",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {item.category}
                    </span>

                    {/* Title */}
                    <div
                      className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                      }}
                    >
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#F0EDE8" }}
                      >
                        {item.title}
                      </p>
                      {item.description && (
                        <p
                          className="text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ color: "#8A8A8A" }}
                        >
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{
              background: "rgba(0,0,0,0.9)",
              backdropFilter: "blur(8px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.title}
          >
            <motion.div
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
              style={{
                background: "#111118",
                border: "1px solid rgba(201,168,76,0.2)",
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.imageUrl ? (
                <div className="relative aspect-video">
                  <Image
                    src={lightbox.imageUrl}
                    alt={lightbox.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>
              ) : (
                <div
                  className="aspect-video"
                  style={{ background: "#1A1A22" }}
                />
              )}
              <div className="p-5">
                <span className="badge badge-gold mb-2">
                  {lightbox.category}
                </span>
                <h3
                  className="font-display text-xl"
                  style={{ color: "#F0EDE8" }}
                >
                  {lightbox.title}
                </h3>
                {lightbox.description && (
                  <p className="text-sm mt-2" style={{ color: "#8A8A8A" }}>
                    {lightbox.description}
                  </p>
                )}
              </div>
              <button
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(0,0,0,0.7)", color: "#F0EDE8" }}
                onClick={() => setLightbox(null)}
                aria-label="Fermer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
