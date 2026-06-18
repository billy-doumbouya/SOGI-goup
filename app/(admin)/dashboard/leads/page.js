import { prisma } from "@/lib/db/client";
import { revalidatePath } from "next/cache";

export const metadata = { title: "Leads | SOGIP Admin" };

async function deleteLead(id) {
  "use server";
  await prisma.lead.delete({ where: { id } });
  revalidatePath("/dashboard/leads");
}

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl mb-1" style={{ color: "#F0EDE8" }}>
          Leads
        </h1>
        <p style={{ color: "#8A8A8A", fontSize: "0.9rem" }}>
          {leads.length} lead{leads.length !== 1 ? "s" : ""} capturé
          {leads.length !== 1 ? "s" : ""}
        </p>
      </div>

      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: "#111118",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* En-tête tableau */}
        <div
          className="grid grid-cols-12 px-6 py-3 text-xs font-medium uppercase tracking-widest"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            color: "#4A4A55",
          }}
        >
          <span className="col-span-3">Nom</span>
          <span className="col-span-3">Email</span>
          <span className="col-span-2">Téléphone</span>
          <span className="col-span-2">Intérêt</span>
          <span className="col-span-1">Source</span>
          <span className="col-span-1 text-right">Date</span>
        </div>

        {/* Rows */}
        <div
          className="divide-y"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          {leads.length === 0 && (
            <p
              className="px-6 py-10 text-center text-sm"
              style={{ color: "#4A4A55" }}
            >
              Aucun lead pour l'instant.
            </p>
          )}
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="grid grid-cols-12 px-6 py-4 items-center text-sm group"
            >
              <span
                className="col-span-3 font-medium truncate pr-4"
                style={{ color: "#F0EDE8" }}
              >
                {lead.fullName}
              </span>
              <a
                href={`mailto:${lead.email}`}
                className="col-span-3 truncate pr-4 transition-colors hover:underline"
                style={{ color: "#C9A84C" }}
              >
                {lead.email}
              </a>
              <span
                className="col-span-2 truncate pr-4"
                style={{ color: "#8A8A8A" }}
              >
                {lead.phone || "—"}
              </span>
              <span
                className="col-span-2 truncate pr-4"
                style={{ color: "#8A8A8A" }}
              >
                {lead.interest || "—"}
              </span>
              <span className="col-span-1 text-xs" style={{ color: "#4A4A55" }}>
                {lead.source}
              </span>
              <span
                className="col-span-1 text-xs text-right"
                style={{ color: "#4A4A55" }}
              >
                {new Date(lead.createdAt).toLocaleDateString("fr-GN", {
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
