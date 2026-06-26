// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// const CATEGORIES = ["Tous", "BTP", "Immo", "Énergie", "Academy"];

// export default function GalleryClient({ items }) {
//   const [active, setActive] = useState("Tous");
//   const [lightbox, setLightbox] = useState(null);

//   const filtered =
//     active === "Tous" ? items : items.filter((i) => i.category === active);

//   return (
//     <>
//       {/* Hero — vague bleue, cohérente avec la page Contact */}
//       <section
//         className="pt-32 pb-24 relative"
//         style={{
//           background:
//             "linear-gradient(135deg, #0D3C66 0%, #1763A8 55%, #3F92DC 100%)",
//           clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
//         }}
//       >
//         <div className="container text-center" data-aos="fade-up">
//           <span
//             className="badge mb-4"
//             style={{
//               background: "rgba(255,255,255,0.12)",
//               color: "#FEFAE8",
//               border: "1px solid rgba(239,190,0,0.40)",
//             }}
//           >
//             Galerie
//           </span>
//           <h1 className="font-display mb-4" style={{ color: "#FFFFFF" }}>
//             Nos <span style={{ color: "#F9D646" }}>réalisations</span>
//           </h1>
//           <div
//             className="divider-gold center"
//             style={{ background: "linear-gradient(90deg, #D4A800, #F9D646)" }}
//           />
//           <p
//             className="mt-4 max-w-lg mx-auto"
//             style={{ color: "rgba(255,255,255,0.85)" }}
//           >
//             Un aperçu de nos projets à travers les différentes filiales du
//             groupe.
//           </p>
//         </div>
//       </section>

//       {/* Filter tabs */}
//       <section className="py-8" style={{ background: "#FFFFFF" }}>
//         <div className="container">
//           <div className="flex flex-wrap gap-2 justify-center mb-10">
//             {CATEGORIES.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActive(cat)}
//                 className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
//                 style={
//                   active === cat
//                     ? {
//                         background: "linear-gradient(135deg, #0D3C66, #1763A8)",
//                         color: "#FFFFFF",
//                         fontWeight: 600,
//                       }
//                     : {
//                         background: "#F7F9FC",
//                         color: "#5A6B7D",
//                         border: "1px solid rgba(13,36,64,0.08)",
//                       }
//                 }
//                 aria-pressed={active === cat}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>

//           {/* Grid */}
//           {filtered.length === 0 ? (
//             <p className="text-center py-16" style={{ color: "#9AA8B5" }}>
//               Aucune réalisation dans cette catégorie pour l'instant.
//             </p>
//           ) : (
//             <motion.div
//               layout
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
//             >
//               <AnimatePresence>
//                 {filtered.map((item) => (
//                   <motion.div
//                     key={item.id}
//                     layout
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     transition={{ duration: 0.25 }}
//                     className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer"
//                     style={{
//                       background: "#F7F9FC",
//                       border: "1px solid rgba(13,36,64,0.08)",
//                     }}
//                     onClick={() => setLightbox(item)}
//                     role="button"
//                     aria-label={`Voir ${item.title}`}
//                     tabIndex={0}
//                     onKeyDown={(e) => e.key === "Enter" && setLightbox(item)}
//                   >
//                     {/* Image */}
//                     {item.imageUrl ? (
//                       <Image
//                         src={item.imageUrl}
//                         alt={item.title}
//                         fill
//                         className="object-cover transition-transform duration-500 group-hover:scale-105"
//                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       />
//                     ) : (
//                       <div
//                         className="absolute inset-0"
//                         style={{
//                           background:
//                             "linear-gradient(135deg, #EEF3F9, #F7F9FC)",
//                         }}
//                         aria-hidden="true"
//                       />
//                     )}

//                     {/* Overlay — reste sombre intentionnellement : nécessaire pour la lisibilité du texte sur photo */}
//                     <div
//                       className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                       style={{ background: "rgba(10,20,35,0.55)" }}
//                       aria-hidden="true"
//                     />

//                     {/* Category */}
//                     <span
//                       className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
//                       style={{
//                         background: "rgba(13,36,64,0.75)",
//                         color: "#F9D646",
//                         backdropFilter: "blur(8px)",
//                       }}
//                     >
//                       {item.category}
//                     </span>

//                     {/* Title — overlay sombre conservé, contraste nécessaire sur photo */}
//                     <div
//                       className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300"
//                       style={{
//                         background:
//                           "linear-gradient(to top, rgba(10,20,35,0.85), transparent)",
//                       }}
//                     >
//                       <p
//                         className="text-sm font-medium"
//                         style={{ color: "#FFFFFF" }}
//                       >
//                         {item.title}
//                       </p>
//                       {item.description && (
//                         <p
//                           className="text-xs mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                           style={{ color: "#CDE3F8" }}
//                         >
//                           {item.description}
//                         </p>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* Lightbox — fond modal sombre conservé volontairement (overlay plein écran sur photo) */}
//       <AnimatePresence>
//         {lightbox && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center p-4"
//             style={{
//               background: "rgba(10,20,35,0.88)",
//               backdropFilter: "blur(8px)",
//             }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setLightbox(null)}
//             role="dialog"
//             aria-modal="true"
//             aria-label={lightbox.title}
//           >
//             <motion.div
//               className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
//               style={{
//                 background: "#FFFFFF",
//                 border: "1px solid rgba(239,190,0,0.30)",
//               }}
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {lightbox.imageUrl ? (
//                 <div className="relative aspect-video">
//                   <Image
//                     src={lightbox.imageUrl}
//                     alt={lightbox.title}
//                     fill
//                     className="object-cover"
//                     sizes="(max-width: 1024px) 100vw, 896px"
//                   />
//                 </div>
//               ) : (
//                 <div
//                   className="aspect-video"
//                   style={{ background: "#F7F9FC" }}
//                 />
//               )}
//               <div className="p-5">
//                 <span className="badge badge-gold mb-2">
//                   {lightbox.category}
//                 </span>
//                 <h3
//                   className="font-display text-xl"
//                   style={{ color: "#0D2440" }}
//                 >
//                   {lightbox.title}
//                 </h3>
//                 {lightbox.description && (
//                   <p className="text-sm mt-2" style={{ color: "#5A6B7D" }}>
//                     {lightbox.description}
//                   </p>
//                 )}
//               </div>
//               <button
//                 className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center"
//                 style={{ background: "rgba(10,20,35,0.65)", color: "#FFFFFF" }}
//                 onClick={() => setLightbox(null)}
//                 aria-label="Fermer"
//               >
//                 <svg
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-4 h-4"
//                   aria-hidden="true"
//                 >
//                   <line x1="18" y1="6" x2="6" y2="18" />
//                   <line x1="6" y1="6" x2="18" y2="18" />
//                 </svg>
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }