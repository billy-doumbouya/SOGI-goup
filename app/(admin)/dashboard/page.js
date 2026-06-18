import { prisma } from "@/lib/db/client";

async function getStats() {
  const [totalContacts, unread, totalLeads, totalFormations, totalGallery] =
    await Promise.all([
      prisma.contact.count(),
      prisma.contact.count({ where: { status: "UNREAD" } }),
      prisma.lead.count(),
      prisma.formation.count({ where: { published: true } }),
      prisma.galleryItem.count({ where: { published: true } }),
    ]);
  return { totalContacts, unread, totalLeads, totalFormations, totalGallery };
}

async function getRecentContacts() {
  return prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });
}

export default async function DashboardPage() {
  const [stats, recent] = await Promise.all([getStats(), getRecentContacts()]);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-3xl mb-1" style={{ color: "#F0EDE8" }}>
          Tableau de bord
        </h1>
        <p style={{ color: "#8A8A8A", fontSize: "0.9rem" }}>
          Vue d'ensemble de l'activité SOGIP Group
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="Messages"
          value={stats.totalContacts}
          sub={`${stats.unread} non lus`}
          icon={<InboxIcon />}
          accent
        />
        <StatCard
          label="Leads"
          value={stats.totalLeads}
          sub="Formulaires capture"
          icon={<UsersIcon />}
        />
        <StatCard
          label="Formations"
          value={stats.totalFormations}
          sub="Publiées"
          icon={<BookIcon />}
        />
        <StatCard
          label="Galerie"
          value={stats.totalGallery}
          sub="Photos publiées"
          icon={<ImageIcon />}
        />
      </div>

      {/* Recent contacts */}
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "#111118",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <h2 className="font-display text-lg" style={{ color: "#F0EDE8" }}>
            Derniers messages
          </h2>
          <a
            href="/dashboard/contacts"
            className="text-sm transition-colors"
            style={{ color: "#C9A84C" }}
          >
            Voir tout
          </a>
        </div>

        <div
          className="divide-y"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          {recent.length === 0 && (
            <p
              className="px-6 py-8 text-center text-sm"
              style={{ color: "#4A4A55" }}
            >
              Aucun message pour l'instant.
            </p>
          )}
          {recent.map((c) => (
            <div
              key={c.id}
              className="px-6 py-4 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3 min-w-0">
                {c.status === "UNREAD" && (
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#C9A84C" }}
                  />
                )}
                <div className="min-w-0">
                  <p
                    className="text-sm font-medium truncate"
                    style={{ color: "#F0EDE8" }}
                  >
                    {c.fullName}
                  </p>
                  <p className="text-xs truncate" style={{ color: "#8A8A8A" }}>
                    {c.subject}
                  </p>
                </div>
              </div>
              <span
                className="text-xs flex-shrink-0"
                style={{ color: "#4A4A55" }}
              >
                {new Date(c.createdAt).toLocaleDateString("fr-GN", {
                  day: "2-digit",
                  month: "short",
                })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, icon, accent }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{
        background: accent ? "rgba(201,168,76,0.06)" : "#111118",
        border: accent
          ? "1px solid rgba(201,168,76,0.2)"
          : "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: accent ? "#C9A84C" : "#8A8A8A" }}>{icon}</span>
        {accent && (
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#C9A84C" }}
          />
        )}
      </div>
      <p
        className="font-display text-3xl font-bold mb-0.5"
        style={{ color: accent ? "#C9A84C" : "#F0EDE8" }}
      >
        {value}
      </p>
      <p className="text-xs font-semibold mb-0.5" style={{ color: "#F0EDE8" }}>
        {label}
      </p>
      <p className="text-xs" style={{ color: "#4A4A55" }}>
        {sub}
      </p>
    </div>
  );
}

function InboxIcon() {
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}
function BookIcon() {
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
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}
function ImageIcon() {
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
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
