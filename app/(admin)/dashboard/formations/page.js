import { prisma } from "@/lib/db/client";
import { revalidatePath } from "next/cache";
import FormationsClient from "./FormationsClient";

export const metadata = { title: "Formations | SOGIP Admin" };

async function togglePublished(id, published) {
  "use server";
  await prisma.formation.update({ where: { id }, data: { published } });
  revalidatePath("/dashboard/formations");
}

async function deleteFormation(id) {
  "use server";
  await prisma.formation.delete({ where: { id } });
  revalidatePath("/dashboard/formations");
}

async function createFormation(formData) {
  "use server";
  await prisma.formation.create({
    data: {
      title: formData.get("title"),
      description: formData.get("description"),
      duration: formData.get("duration"),
      format: formData.get("format"),
      level: formData.get("level"),
      price: formData.get("price") || null,
      imageUrl: formData.get("imageUrl") || null,
      syllabus: formData.get("syllabus") || null,
      order: parseInt(formData.get("order") || "0", 10),
      published: formData.get("published") === "true",
    },
  });
  revalidatePath("/dashboard/formations");
}

export default async function FormationsPage() {
  const formations = await prisma.formation.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl mb-1" style={{ color: "#F0EDE8" }}>
          Formations
        </h1>
        <p style={{ color: "#8A8A8A", fontSize: "0.9rem" }}>
          {formations.filter((f) => f.published).length} publiée
          {formations.filter((f) => f.published).length !== 1 ? "s" : ""} /{" "}
          {formations.length} au total
        </p>
      </div>

      <FormationsClient
        formations={formations}
        togglePublished={togglePublished}
        deleteFormation={deleteFormation}
        createFormation={createFormation}
      />
    </div>
  );
}
