"use client";

import { useState, useTransition, useRef } from "react";

const FORMAT_LABELS = {
  ONLINE: "En ligne",
  HYBRID: "Hybride",
  PRESENTIAL: "Présentiel",
};

const FORMAT_COLORS = {
  ONLINE: "#C9A84C",
  HYBRID: "#818CF8",
  PRESENTIAL: "#4ADE80",
};

export default function FormationsClient({
  formations,
  togglePublished,
  deleteFormation,
  createFormation,
}) {
  const [showForm, setShowForm] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef(null);

  const handleToggle = (id, current) => {
    startTransition(() => togglePublished(id, !current));
  };

  const handleDelete = (id) => {
    if (!confirm("Supprimer cette formation définitivement ?")) return;
    startTransition(() => deleteFormation(id));
    if (expanded === id) setExpanded(null);
  };

  const handleCreate = (formData) => {
    startTransition(async () => {
      await createFormation(formData);
      formRef.current?.reset();
      setShowForm(false);
    });
  };

  return (
    <div>
      {/* Bouton ajouter */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            background: "rgba(201,168,76,0.1)",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "#C9A84C",
          }}
        >
          {showForm ? "Annuler" : "+ Nouvelle formation"}
        </button>
      </div>

      {/* Formulaire */}
      {showForm && (
        <form
          ref={formRef}
          action={handleCreate}
          className="rounded-xl p-6 mb-6"
          style={{
            background: "#111118",
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <h3
            className="font-display text-lg mb-4"
            style={{ color: "#F0EDE8" }}
          >
            Nouvelle formation
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="col-span-2">
              <label className="label">Titre *</label>
              <input
                name="title"
                required
                className="input"
                placeholder="Ex : Formation en Gestion de projet"
              />
            </div>
            <div className="col-span-2">
              <label className="label">Description *</label>
              <textarea
                name="description"
                required
                rows={3}
                className="input resize-none"
                placeholder="Description de la formation..."
              />
            </div>
            <div>
              <label className="label">Durée *</label>
              <input
                name="duration"
                required
                className="input"
                placeholder="Ex : 3 mois"
              />
            </div>
            <div>
              <label className="label">Format *</label>
              <select name="format" required className="input">
                <option value="ONLINE">En ligne</option>
                <option value="HYBRID">Hybride</option>
                <option value="PRESENTIAL">Présentiel</option>
              </select>
            </div>
            <div>
              <label className="label">Niveau *</label>
              <input
                name="level"
                required
                className="input"
                placeholder="Ex : Débutant"
              />
            </div>
            <div>
              <label className="label">Prix</label>
              <input
                name="price"
                className="input"
                placeholder="Ex : 500 000 GNF"
              />
            </div>
            <div className="col-span-2">
              <label className="label">URL image</label>
              <input
                name="imageUrl"
                className="input"
                placeholder="https://..."
              />
            </div>
            <div className="col-span-2">
              <label className="label">Programme / Syllabus</label>
              <textarea
                name="syllabus"
                rows={2}
                className="input resize-none"
                placeholder="Contenu du programme..."
              />
            </div>
            <div>
              <label className="label">Ordre</label>
              <input
                name="order"
                type="number"
                className="input"
                defaultValue={0}
              />
            </div>
            <div className="flex items-end">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="published"
                  value="true"
                  defaultChecked
                  className="w-4 h-4 rounded"
                  style={{ accentColor: "#C9A84C" }}
                />
                <span className="text-sm" style={{ color: "#8A8A8A" }}>
                  Publier immédiatement
                </span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="btn btn-primary"
          >
            {isPending ? "Enregistrement..." : "Créer la formation"}
          </button>
        </form>
      )}

      {/* Liste */}
      <div className="space-y-3">
        {formations.length === 0 && (
          <div
            className="rounded-xl p-12 text-center"
            style={{
              background: "#111118",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <p className="text-sm" style={{ color: "#4A4A55" }}>
              Aucune formation créée.
            </p>
          </div>
        )}
        {formations.map((f) => (
          <div
            key={f.id}
            className="rounded-xl overflow-hidden"
            style={{
              background: "#111118",
              border: "1px solid rgba(255,255,255,0.07)",
              opacity: f.published ? 1 : 0.6,
            }}
          >
            {/* Row */}
            <div
              className="px-5 py-4 flex items-center gap-4 cursor-pointer"
              onClick={() => setExpanded(expanded === f.id ? null : f.id)}
            >
              {/* Format badge */}
              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-medium flex-shrink-0"
                style={{
                  background: `${FORMAT_COLORS[f.format]}18`,
                  color: FORMAT_COLORS[f.format],
                }}
              >
                {FORMAT_LABELS[f.format]}
              </span>

              {/* Titre */}
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: "#F0EDE8" }}
                >
                  {f.title}
                </p>
                <p className="text-xs" style={{ color: "#8A8A8A" }}>
                  {f.duration} · {f.level}
                  {f.price ? ` · ${f.price}` : ""}
                </p>
              </div>

              {/* Actions */}
              <div
                className="flex items-center gap-3 flex-shrink-0"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => handleToggle(f.id, f.published)}
                  disabled={isPending}
                  className="text-xs px-3 py-1 rounded-full transition-all"
                  style={
                    f.published
                      ? { background: "rgba(74,222,128,0.1)", color: "#4ADE80" }
                      : {
                          background: "rgba(255,255,255,0.05)",
                          color: "#8A8A8A",
                        }
                  }
                >
                  {f.published ? "Publié" : "Masqué"}
                </button>
                <button
                  onClick={() => handleDelete(f.id)}
                  disabled={isPending}
                  className="text-xs transition-colors"
                  style={{ color: "#4A4A55" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#EF4444")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#4A4A55")}
                >
                  Supprimer
                </button>
              </div>

              {/* Chevron */}
              <span
                className="text-xs flex-shrink-0 transition-transform duration-200"
                style={{
                  color: "#4A4A55",
                  transform: expanded === f.id ? "rotate(180deg)" : "none",
                }}
              >
                ▾
              </span>
            </div>

            {/* Détail dépliant */}
            {expanded === f.id && (
              <div
                className="px-5 pb-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                <p
                  className="text-sm leading-relaxed mt-4"
                  style={{ color: "#8A8A8A" }}
                >
                  {f.description}
                </p>
                {f.syllabus && (
                  <>
                    <p
                      className="text-xs font-medium uppercase tracking-widest mt-4 mb-1"
                      style={{ color: "#4A4A55" }}
                    >
                      Programme
                    </p>
                    <p className="text-sm" style={{ color: "#8A8A8A" }}>
                      {f.syllabus}
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
