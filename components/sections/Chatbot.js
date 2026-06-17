"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const WELCOME =
  "Bonjour ! Je suis SOGI, l'assistant virtuel de SOGIP Group. Comment puis-je vous aider ?";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll vers le bas lors de la réception/envoi de messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus sur le champ de saisie à l'ouverture de la fenêtre
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  // Gère le redimensionnement dynamique de la zone de texte en fonction du contenu
  useEffect(() => {
    const textarea = inputRef.current;
    if (!textarea) return;

    // Réinitialise la hauteur pour recalculer correctement le scrollHeight
    textarea.style.height = "auto";
    // Applique la nouvelle hauteur basée sur le contenu textuel
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [input]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: "user", content: text };

    // 1. On sauvegarde l'historique actuel AVANT d'ajouter le nouveau message
    // On filtre pour retirer le message d'accueil initial si celui-ci se retrouve en première position
    const rawHistory = [...messages];
    if (rawHistory[0]?.content === WELCOME) {
      rawHistory.shift(); // Gemini refuse un historique qui commence par le modèle
    }

    // 2. Mise à jour de l'interface
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: rawHistory.slice(-10), // Envoi de l'historique nettoyé et tronqué
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur serveur");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      console.error(err);
      toast.error("Impossible de contacter l'assistant. Réessayez.");
      // Optionnel : ne pas supprimer le message de l'utilisateur pour qu'il puisse le copier/recommencer
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-80 sm:w-96 rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "#111118",
              border: "1px solid rgba(201,168,76,0.2)",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
              height: "480px",
            }}
            role="dialog"
            aria-label="Assistant SOGI"
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3 flex-shrink-0"
              style={{
                background: "#1A1A22",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #9A7A30, #C9A84C)",
                  }}
                >
                  <BotIcon />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#F0EDE8" }}
                  >
                    SOGI
                  </p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    <span className="text-xs" style={{ color: "#8A8A8A" }}>
                      En ligne
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[#8A8A8A] hover:text-[#F0EDE8] transition-colors"
                aria-label="Fermer le chat"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap"
                    style={
                      msg.role === "user"
                        ? {
                            background:
                              "linear-gradient(135deg, #9A7A30, #C9A84C)",
                            color: "#0A0A0E",
                            fontWeight: 500,
                            borderRadius: "16px 16px 4px 16px",
                          }
                        : {
                            background: "#22222C",
                            color: "#F0EDE8",
                            border: "1px solid rgba(255,255,255,0.07)",
                            borderRadius: "16px 16px 16px 4px",
                          }
                    }
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-xl flex gap-1.5 items-center"
                    style={{
                      background: "#22222C",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: "#C9A84C" }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div
              className="px-3 py-3 flex-shrink-0"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="flex items-end gap-2 rounded-xl px-3 py-2"
                style={{
                  background: "#22222C",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="Posez votre question..."
                  rows={1}
                  className="flex-1 bg-transparent resize-none outline-none text-sm leading-relaxed py-1 custom-scrollbar"
                  style={{
                    color: "#F0EDE8",
                    maxHeight: "96px",
                    height: "auto",
                  }}
                  aria-label="Message"
                />
                <button
                  onClick={send}
                  disabled={!input.trim() || loading}
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 mb-[2px]"
                  style={{
                    background:
                      input.trim() && !loading
                        ? "linear-gradient(135deg, #9A7A30, #C9A84C)"
                        : "rgba(255,255,255,0.08)",
                    color: input.trim() && !loading ? "#0A0A0E" : "#4A4A55",
                  }}
                  aria-label="Envoyer"
                >
                  <SendIcon />
                </button>
              </div>
              <p
                className="text-center text-xs mt-2"
                style={{ color: "#4A4A55" }}
              >
                Propulsé par Google AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center relative"
        style={{
          background: "linear-gradient(135deg, #9A7A30, #C9A84C)",
          boxShadow: "0 8px 32px rgba(201,168,76,0.35)",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant SOGI"}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
              style={{ color: "#0A0A0E" }}
            >
              <CloseIcon />
            </motion.span>
          ) : (
            <motion.span
              key="bot"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
              style={{ color: "#0A0A0E" }}
            >
              <BotIcon large />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ border: "2px solid rgba(201,168,76,0.5)" }}
            animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    </div>
  );
}

function BotIcon({ large }) {
  const s = large ? "w-6 h-6" : "w-5 h-5";
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={s}
      aria-hidden="true"
    >
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <line x1="12" y1="7" x2="12" y2="11" />
      <line x1="8" y1="15" x2="8" y2="15" strokeWidth="3" />
      <line x1="16" y1="15" x2="16" y2="15" strokeWidth="3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
