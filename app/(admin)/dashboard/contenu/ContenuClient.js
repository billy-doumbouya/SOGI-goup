"use client";

import { useState, useTransition } from "react";

export default function ContenuClient({ pages, contentMap, saveContent }) {
  const [activeTab, setActiveTab] = useState(pages[0].key);
  const [drafts, setDrafts] = useState(() => {
    const init = {};
    pages.forEach(({ key }) => {
      const record = contentMap[key];
      init[key] = record ? JSON.stringify(record.content, null, 2) : "{}";
    });
    return init;
  });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState({});
  const [isPending, startTransition] = useTransition();

  const handleSave = (pageKey) => {
    let parsed;
    try {
      parsed = JSON.parse(drafts[pageKey]);
    } catch {
      setErrors((e) => ({
        ...e,
        [pageKey]: "JSON invalide. Corrigez avant d'enregistrer.",
      }));
      return;
    }
    setErrors((e) => ({ ...e, [pageKey]: null }));

    startTransition(async () => {
      await saveContent(pageKey, parsed);
      setSaved((s) => ({ ...s, [pageKey]: true }));
      setTimeout(() => setSaved((s) => ({ ...s, [pageKey]: false })), 2500);
    });
  };

  const activeRecord = contentMap[activeTab];

  return (
    <div className="flex gap-4">
      {/* Onglets pages */}
      <div
        className="flex flex-col gap-1 w-44 flex-shrink-0 rounded-xl p-3"
        style={{
          background: "#111118",
          border: "1px solid rgba(255,255,255,0.07)",
          alignSelf: "flex-start",
        }}
      >
        {pages.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className="text-left px-3 py-2 rounded-lg text-sm font-medium transition-all"
            style={
              activeTab === key
                ? { background: "rgba(201,168,76,0.1)", color: "#C9A84C" }
                : { color: "#8A8A8A" }
            }
          >
            {label}
            {contentMap[key] && (
              <span
                className="block text-xs mt-0.5"
                style={{ color: "#4A4A55", fontSize: "0.65rem" }}
              >
                {new Date(contentMap[key].updatedAt).toLocaleDateString(
                  "fr-GN",
                  {
                    day: "2-digit",
                    month: "short",
                  },
                )}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Éditeur */}
      <div className="flex-1">
        <div
          className="rounded-xl overflow-hidden"
          style={{
            background: "#111118",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Header */}
          <div
            className="px-6 py-4 flex items-center justify-between"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div>
              <h2 className="font-display text-lg" style={{ color: "#F0EDE8" }}>
                {pages.find((p) => p.key === activeTab)?.label}
              </h2>
              {activeRecord && (
                <p className="text-xs mt-0.5" style={{ color: "#4A4A55" }}>
                  Dernière modification :{" "}
                  {new Date(activeRecord.updatedAt).toLocaleDateString(
                    "fr-GN",
                    {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    },
                  )}
                  {activeRecord.updatedBy && ` par ${activeRecord.updatedBy}`}
                </p>
              )}
            </div>
            <button
              onClick={() => handleSave(activeTab)}
              disabled={isPending}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
              style={
                saved[activeTab]
                  ? { background: "rgba(74,222,128,0.1)", color: "#4ADE80" }
                  : {
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      color: "#C9A84C",
                    }
              }
            >
              {saved[activeTab]
                ? "✓ Enregistré"
                : isPending
                  ? "Enregistrement..."
                  : "Enregistrer"}
            </button>
          </div>

          {/* Zone JSON */}
          <div className="p-6">
            {errors[activeTab] && (
              <p
                className="text-xs mb-3 px-3 py-2 rounded-lg"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  color: "#EF4444",
                }}
              >
                {errors[activeTab]}
              </p>
            )}
            <textarea
              value={drafts[activeTab]}
              onChange={(e) =>
                setDrafts((d) => ({ ...d, [activeTab]: e.target.value }))
              }
              rows={24}
              spellCheck={false}
              className="w-full rounded-lg p-4 text-sm font-mono outline-none resize-none"
              style={{
                background: "#0D0D14",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#F0EDE8",
                lineHeight: 1.6,
              }}
              placeholder='{\n  "title": "...",\n  "description": "..."\n}'
            />
            <p className="text-xs mt-2" style={{ color: "#4A4A55" }}>
              Le contenu doit être un JSON valide. Les données sont récupérées
              dynamiquement par les pages du site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
