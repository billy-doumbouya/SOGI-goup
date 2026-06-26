"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "sonner";
import { useState } from "react";

const schema = yup.object({
  fullName: yup
    .string()
    .min(2, "Nom trop court")
    .required("Nom complet requis"),
  email: yup.string().email("Email invalide").required("Email requis"),
  phone: yup.string().optional(),
  subject: yup.string().min(4, "Sujet trop court").required("Sujet requis"),
  message: yup
    .string()
    .min(20, "Message trop court (min. 20 caractères)")
    .required("Message requis"),
});

export default function ContactPageClient() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      toast.success(
        "Message envoyé avec succès. Nous vous répondrons rapidement.",
      );
      reset();
    } catch {
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero — clip-path en vague bleue dégradée pour marquer l'entrée de page */}
      <section
        className="pt-32 pb-24 relative"
        style={{
          background:
            "linear-gradient(135deg, #0D3C66 0%, #1763A8 55%, #3F92DC 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
        }}
      >
        <div className="container text-center" data-aos="fade-up">
          <span
            className="badge mb-4"
            style={{
              background: "rgba(255,255,255,0.12)",
              color: "#FEFAE8",
              border: "1px solid rgba(239,190,0,0.40)",
            }}
          >
            Contact
          </span>
          <h1 className="font-display mb-4" style={{ color: "#FFFFFF" }}>
            Parlons de votre{" "}
            <span
              style={{
                color: "#F9D646",
              }}
            >
              projet
            </span>
          </h1>
          <div
            className="divider-gold center"
            style={{
              background: "linear-gradient(90deg, #D4A800, #F9D646)",
            }}
          />
          <p
            className="mt-4 max-w-lg mx-auto"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Notre équipe est disponible pour répondre à toutes vos questions et
            étudier vos besoins.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8" data-aos="fade-right">
              <InfoBlock
                icon={<LocationIcon />}
                label="Adresse"
                value="Conakry, République de Guinée"
              />
              <InfoBlock
                icon={<PhoneIcon />}
                label="Téléphone"
                value="+224 XX XX XX XX"
                href="tel:+224XXXXXXXXX"
              />
              <InfoBlock
                icon={<MailIcon />}
                label="Email général"
                value="contact@sogipgroup.com"
                href="mailto:contact@sogipgroup.com"
              />
              <InfoBlock
                icon={<MailIcon />}
                label="Email commercial"
                value="commercial@sogipgroup.com"
                href="mailto:commercial@sogipgroup.com"
              />
              <div
                className="p-6 rounded-xl"
                style={{
                  background: "#F7F9FC",
                  border: "1px solid rgba(23,99,168,0.15)",
                }}
              >
                <h4
                  className="font-display text-lg mb-4"
                  style={{ color: "#0D2440" }}
                >
                  Horaires
                </h4>
                <div className="space-y-2 text-sm" style={{ color: "#5A6B7D" }}>
                  <div className="flex justify-between">
                    <span>Lundi — Vendredi</span>
                    <span style={{ color: "#1763A8", fontWeight: 600 }}>
                      08h00 — 17h00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span style={{ color: "#1763A8", fontWeight: 600 }}>
                      09h00 — 13h00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3" data-aos="fade-left">
              <div className="card">
                <h3
                  className="font-display text-2xl mb-6"
                  style={{ color: "#0D2440" }}
                >
                  Envoyer un message
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Nom complet" error={errors.fullName?.message}>
                      <input
                        {...register("fullName")}
                        placeholder="Jean Dupont"
                        className={`input ${errors.fullName ? "error" : ""}`}
                      />
                    </Field>
                    <Field label="Email" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="jean@exemple.com"
                        className={`input ${errors.email ? "error" : ""}`}
                      />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <Field label="Téléphone (optionnel)">
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+224 XX XX XX XX"
                        className="input"
                      />
                    </Field>
                    <Field label="Sujet" error={errors.subject?.message}>
                      <input
                        {...register("subject")}
                        placeholder="Demande de devis BTP"
                        className={`input ${errors.subject ? "error" : ""}`}
                      />
                    </Field>
                  </div>
                  <Field
                    label="Message"
                    error={errors.message?.message}
                    className="mb-6"
                  >
                    <textarea
                      {...register("message")}
                      rows={5}
                      placeholder="Décrivez votre projet ou votre demande..."
                      className={`input resize-none ${errors.message ? "error" : ""}`}
                    />
                  </Field>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-full justify-center"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? (
                      <>
                        <SpinnerIcon />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <SendIcon />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, children, className = "" }) {
  return (
    <div className={className}>
      <label className="label">{label}</label>
      {children}
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

function InfoBlock({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(23,99,168,0.10)", color: "#1763A8" }}
      >
        {icon}
      </div>
      <div>
        <p
          className="text-xs font-medium tracking-widest uppercase mb-0.5"
          style={{ color: "#9AA8B5" }}
        >
          {label}
        </p>
        <p className="text-sm font-medium" style={{ color: "#0D2440" }}>
          {value}
        </p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.12 2.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function SendIcon() {
  return (
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
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
function SpinnerIcon() {
  return (
    <svg
      className="w-4 h-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  );
}