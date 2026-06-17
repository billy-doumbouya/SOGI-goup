"use client"; // <-- Déclare le composant côté client pour utiliser usePathname et onClick

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import SogipLogo from "@/components/icons/SogipLogo";

const NAV = [
  {
    label: "Vue générale",
    href: "/dashboard",
    icon: <GridIcon />,
  },
  {
    label: "Messages",
    href: "/dashboard/contacts",
    icon: <InboxIcon />,
  },
  {
    label: "Leads",
    href: "/dashboard/leads",
    icon: <UsersIcon />,
  },
  {
    label: "Galerie",
    href: "/dashboard/galerie",
    icon: <ImageIcon />,
  },
  {
    label: "Formations",
    href: "/dashboard/formations",
    icon: <BookIcon />,
  },
  {
    label: "Contenu pages",
    href: "/dashboard/contenu",
    icon: <EditIcon />,
  },
];

export default function AdminSidebar({ user }) {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <aside
      className="hidden md:flex flex-col w-60 min-h-screen flex-shrink-0"
      style={{
        background: "#0D0D14",
        borderRight: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Logo */}
      <div
        className="px-5 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <SogipLogo variant="icon" className="h-9 w-9" />
        <p
          className="text-xs mt-2 font-medium tracking-widest uppercase"
          style={{ color: "#4A4A55" }}
        >
          Administration
        </p>
      </div>

      {/* Nav */}
      <nav
        className="flex-1 px-3 py-4"
        role="navigation"
        aria-label="Navigation admin"
      >
        <ul className="space-y-1">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                {/* Suppression de onMouseEnter/onMouseLeave au profit de hover:text-[#F0EDE8] */}
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                    active ? "" : "hover:text-[#F0EDE8]"
                  }`}
                  style={
                    active
                      ? {
                          background: "rgba(201,168,76,0.1)",
                          color: "#C9A84C",
                          borderLeft: "2px solid #C9A84C",
                        }
                      : { color: "#8A8A8A" }
                  }
                >
                  <span
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: active ? "#C9A84C" : "inherit" }}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User + logout */}
      <div
        className="px-4 py-4"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: "linear-gradient(135deg, #9A7A30, #C9A84C)",
              color: "#0A0A0E",
            }}
          >
            {user?.name?.[0]?.toUpperCase() || "A"}
          </div>
          <div className="min-w-0">
            <p
              className="text-xs font-medium truncate"
              style={{ color: "#F0EDE8" }}
            >
              {user?.name || "Administrateur"}
            </p>
            <p className="text-xs truncate" style={{ color: "#4A4A55" }}>
              {user?.email || ""}
            </p>
          </div>
        </div>

        {/* Suppression de onMouseEnter/onMouseLeave au profit de hover:text-red-500 */}
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 text-[#8A8A8A] hover:text-red-500"
        >
          <LogoutIcon />
          Se déconnecter
        </button>
      </div>
    </aside>
  );
}

function GridIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}
function InboxIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
function ImageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}
function EditIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function LogoutIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}
