"use client";

import { useState, useTransition, useRef } from "react";

export default function GalerieClient({
  items,
  categories,
  togglePublished,
  deleteItem,
  createItem,
}) {
  const [filter, setFilter] = useState("Tous");
  const [showForm, setShowForm] = useState(false);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef(null);

  const filtered =
    filter === "Tous" ? items : items.filter((i) => i.category === filter);

  const handleToggle = (id, current) => {
    startTransition(() => togglePublished(id, !current));
  };

  const handleDelete = (id) => {
    if (!confirm("Supprimer cet élément de la galerie ?")) return;
    startTransition(() => deleteItem(id));
  };

  const handleCreate = (formData) => {
    startTransition(async () => {
      await createItem(formData);
      formRef.current?.reset();
      setShowForm(false);
    });
  };

  return (
    <div>
      {/* Barre de contrôle */}
      <div className="flex items-center justify-between mb-6 gap-4">
        <div className="flex gap-1 flex-wrap">
          {["Tous", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={
                filter === cat
                  ? { background: "rgba(201,168,76,0.15)", color: "#C9A84C" }
                  : {
                      background: "#111118",
                      color: "#8A8A8A",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex-shrink-0"
          style={{
            background: "rgba(201,168,76,0.1)",
            border: "1px solid rgba(201,168,76,0.3)",
            color: "#C9A84C",
          }}
        >
          {showForm ? "Annuler" : "+ Ajouter"}
        </button>
      </div>

      {/* Formulaire ajout */}
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
            Nouvel élément
          </h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="label">Titre *</label>
              <input
                name="title"
                required
                className="input"
                placeholder="Ex : Résidence Kaloum"
              />
            </div>
            <div>
              <label className="label">Catégorie *</label>
              <select name="category" required className="input">
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-2">
              <label className="label">URL image *</label>
              <input
                name="imageUrl"
                required
                className="input"
                placeholder="https://..."
              />
            </div>
            <div className="col-span-2">
              <label className="label">Description</label>
              <input
                name="description"
                className="input"
                placeholder="Description optionnelle"
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
                  Publié
                </span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="btn btn-primary"
          >
            {isPending ? "Enregistrement..." : "Ajouter à la galerie"}
          </button>
        </form>
      )}

      {/* Grille */}
      {filtered.length === 0 ? (
        <div
          className="rounded-xl p-12 text-center"
          style={{
            background: "#111118",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <p className="text-sm" style={{ color: "#4A4A55" }}>
            Aucun élément dans cette catégorie.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-xl overflow-hidden group"
              style={{
                background: "#111118",
                border: "1px solid rgba(255,255,255,0.07)",
                opacity: item.published ? 1 : 0.5,
              }}
            >
              {/* Image */}
              <div
                className="aspect-video bg-cover bg-center relative"
                style={{
                  backgroundImage: item.imageUrl
                    ? `url(${item.imageUrl})`
                    : "none",
                  background: item.imageUrl ? undefined : "#1A1A24",
                }}
              >
                {!item.imageUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span style={{ color: "#4A4A55", fontSize: "0.75rem" }}>
                      Aucune image
                    </span>
                  </div>
                )}
                <span
                  className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    color: "#C9A84C",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {item.category}
                </span>
              </div>

              {/* Info + actions */}
              <div className="p-4">
                <p
                  className="text-sm font-medium mb-1 truncate"
                  style={{ color: "#F0EDE8" }}
                >
                  {item.title}
                </p>
                {item.description && (
                  <p
                    className="text-xs truncate mb-3"
                    style={{ color: "#8A8A8A" }}
                  >
                    {item.description}
                  </p>
                )}
                <div className="flex items-center justify-between mt-2">
                  <button
                    onClick={() => handleToggle(item.id, item.published)}
                    disabled={isPending}
                    className="text-xs px-3 py-1 rounded-full transition-all"
                    style={
                      item.published
                        ? {
                            background: "rgba(74,222,128,0.1)",
                            color: "#4ADE80",
                          }
                        : {
                            background: "rgba(255,255,255,0.05)",
                            color: "#8A8A8A",
                          }
                    }
                  >
                    {item.published ? "Publié" : "Masqué"}
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={isPending}
                    className="text-xs transition-colors"
                    style={{ color: "#4A4A55" }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.color = "#EF4444")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.color = "#4A4A55")
                    }
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
