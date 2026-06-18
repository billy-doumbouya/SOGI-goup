"use client";

import { useState, useTransition } from "react";

const STATUS_LABELS = {
  UNREAD: { label: "Non lu", color: "#C9A84C" },
  READ: { label: "Lu", color: "#8A8A8A" },
  REPLIED: { label: "Répondu", color: "#4ADE80" },
  ARCHIVED: { label: "Archivé", color: "#4A4A55" },
};

const FILTERS = ["Tous", "UNREAD", "READ", "REPLIED", "ARCHIVED"];

export default function ContactsClient({
  contacts,
  updateStatus,
  deleteContact,
}) {
  const [filter, setFilter] = useState("Tous");
  const [selected, setSelected] = useState(null);
  const [isPending, startTransition] = useTransition();

  const filtered =
    filter === "Tous" ? contacts : contacts.filter((c) => c.status === filter);

  const handleStatus = (id, status) => {
    startTransition(() => updateStatus(id, status));
  };

  const handleDelete = (id) => {
    if (!confirm("Supprimer ce message définitivement ?")) return;
    startTransition(() => deleteContact(id));
    if (selected?.id === id) setSelected(null);
  };

  return (
    <div className="flex gap-4 h-[calc(100vh-13rem)]">
      {/* Liste */}
      <div
        className="flex flex-col rounded-xl overflow-hidden flex-shrink-0"
        style={{
          width: "380px",
          background: "#111118",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* Filtres */}
        <div
          className="flex gap-1 p-3 flex-wrap"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-3 py-1 rounded-full text-xs font-medium transition-all"
              style={
                filter === f
                  ? { background: "rgba(201,168,76,0.15)", color: "#C9A84C" }
                  : { background: "transparent", color: "#8A8A8A" }
              }
            >
              {f === "Tous" ? "Tous" : STATUS_LABELS[f].label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div
          className="flex-1 overflow-y-auto divide-y"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          {filtered.length === 0 && (
            <p className="p-8 text-center text-sm" style={{ color: "#4A4A55" }}>
              Aucun message.
            </p>
          )}
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelected(c)}
              className="w-full text-left px-4 py-3 transition-colors"
              style={{
                background:
                  selected?.id === c.id
                    ? "rgba(201,168,76,0.06)"
                    : "transparent",
              }}
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  {c.status === "UNREAD" && (
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#C9A84C" }}
                    />
                  )}
                  <span
                    className="text-sm font-medium truncate"
                    style={{ color: "#F0EDE8" }}
                  >
                    {c.fullName}
                  </span>
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    background: `${STATUS_LABELS[c.status].color}18`,
                    color: STATUS_LABELS[c.status].color,
                  }}
                >
                  {STATUS_LABELS[c.status].label}
                </span>
              </div>
              <p className="text-xs truncate mb-1" style={{ color: "#8A8A8A" }}>
                {c.subject}
              </p>
              <p className="text-xs" style={{ color: "#4A4A55" }}>
                {new Date(c.createdAt).toLocaleDateString("fr-GN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Détail */}
      <div
        className="flex-1 rounded-xl overflow-hidden flex flex-col"
        style={{
          background: "#111118",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {!selected ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-sm" style={{ color: "#4A4A55" }}>
              Sélectionnez un message
            </p>
          </div>
        ) : (
          <>
            {/* Header détail */}
            <div
              className="px-6 py-4 flex items-start justify-between gap-4"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div>
                <h2
                  className="font-display text-lg mb-0.5"
                  style={{ color: "#F0EDE8" }}
                >
                  {selected.fullName}
                </h2>
                <p className="text-sm" style={{ color: "#8A8A8A" }}>
                  {selected.email}
                  {selected.phone && ` · ${selected.phone}`}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <select
                  value={selected.status}
                  onChange={(e) => {
                    handleStatus(selected.id, e.target.value);
                    setSelected({ ...selected, status: e.target.value });
                  }}
                  disabled={isPending}
                  className="text-xs px-3 py-1.5 rounded-lg outline-none"
                  style={{
                    background: "#1A1A24",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#F0EDE8",
                  }}
                >
                  {Object.entries(STATUS_LABELS).map(([val, { label }]) => (
                    <option key={val} value={val}>
                      {label}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => handleDelete(selected.id)}
                  disabled={isPending}
                  className="text-xs px-3 py-1.5 rounded-lg transition-colors"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    color: "#EF4444",
                  }}
                >
                  Supprimer
                </button>
              </div>
            </div>

            {/* Corps */}
            <div className="flex-1 overflow-y-auto p-6">
              <p
                className="text-xs font-medium uppercase tracking-widest mb-2"
                style={{ color: "#4A4A55" }}
              >
                Sujet
              </p>
              <p
                className="text-sm mb-6 font-medium"
                style={{ color: "#C9A84C" }}
              >
                {selected.subject}
              </p>
              <p
                className="text-xs font-medium uppercase tracking-widest mb-2"
                style={{ color: "#4A4A55" }}
              >
                Message
              </p>
              <p
                className="text-sm leading-relaxed whitespace-pre-wrap"
                style={{ color: "#F0EDE8" }}
              >
                {selected.message}
              </p>
              <p className="text-xs mt-8" style={{ color: "#4A4A55" }}>
                Reçu le{" "}
                {new Date(selected.createdAt).toLocaleDateString("fr-GN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}{" "}
                · Source : {selected.source}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
