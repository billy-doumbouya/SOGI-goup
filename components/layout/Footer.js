import Link from "next/link";
import SogipLogo from "@/components/icons/SogipLogo";

const SERVICES = [
  { href: "/services/btp", label: "SOGIP BTP" },
  { href: "/services/immo", label: "LePropio — Immobilier" },
  { href: "/services/energie", label: "Soleil Guinée" },
  { href: "/services/academy", label: "SOGIP Academy" },
];

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À Propos" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
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
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.549 4.099 1.508 5.826L0 24l6.335-1.476A11.927 11.927 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.49-5.178-1.346l-.371-.218-3.762.876.947-3.653-.24-.387A9.958 9.958 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0A0A0E",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <SogipLogo className="h-10 w-auto mb-5" />
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#8A8A8A" }}
            >
              Holding guinéenne multisectorielle. Construire aujourd'hui les
              solutions de demain.
            </p>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                /* Remplacement propre de onMouseEnter/Leave par des classes Tailwind interactives border et text */
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/5 text-[#8A8A8A] bg-[#1A1A22] transition-all duration-200 hover:border-[#C9A84C]/40 hover:text-[#C9A84C]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "#C9A84C" }}
            >
              Nos Services
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  {/* Utilisation de la classe hover:text-[#F0EDE8] au lieu du JS */}
                  <Link
                    href={s.href}
                    className="text-sm text-[#8A8A8A] transition-colors duration-200 hover:text-[#F0EDE8]"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "#C9A84C" }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  {/* Utilisation de la classe hover:text-[#F0EDE8] au lieu du JS */}
                  <Link
                    href={l.href}
                    className="text-sm text-[#8A8A8A] transition-colors duration-200 hover:text-[#F0EDE8]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "#C9A84C" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <LocationIcon />
                <span className="text-sm" style={{ color: "#8A8A8A" }}>
                  Conakry, République de Guinée
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                {/* Utilisation de la classe hover:text-[#C9A84C] au lieu du JS */}
                <a
                  href="tel:+224XXXXXXXXX"
                  className="text-sm text-[#8A8A8A] transition-colors duration-200 hover:text-[#C9A84C]"
                >
                  +224 XX XX XX XX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                {/* Utilisation de la classe hover:text-[#C9A84C] au lieu du JS */}
                <a
                  href="mailto:contact@sogipgroup.com"
                  className="text-sm text-[#8A8A8A] transition-colors duration-200 hover:text-[#C9A84C]"
                >
                  contact@sogipgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            color: "#4A4A55",
          }}
        >
          <span>© {year} SOGIP Group. Tous droits réservés.</span>
          <div className="flex items-center gap-1">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "#C9A84C" }}
            ></span>
            <span style={{ color: "#C9A84C", letterSpacing: "0.1em" }}>
              Vision · Innovation · Réalisation
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9A84C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 mt-0.5 flex-shrink-0"
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
      stroke="#C9A84C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 flex-shrink-0"
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
      stroke="#C9A84C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 flex-shrink-0"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
