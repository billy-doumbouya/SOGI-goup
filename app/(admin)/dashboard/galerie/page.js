import { prisma } from "@/lib/db/client";
import { revalidatePath } from "next/cache";
import GalerieClient from "./GalerieClient";

export const metadata = { title: "Galerie | SOGIP Admin" };

async function togglePublished(id, published) {
  "use server";
  await prisma.galleryItem.update({ where: { id }, data: { published } });
  revalidatePath("/dashboard/galerie");
}

async function deleteItem(id) {
  "use server";
  await prisma.galleryItem.delete({ where: { id } });
  revalidatePath("/dashboard/galerie");
}

async function createItem(formData) {
  "use server";
  const data = {
    title: formData.get("title"),
    description: formData.get("description") || null,
    imageUrl: formData.get("imageUrl"),
    category: formData.get("category"),
    order: parseInt(formData.get("order") || "0", 10),
    published: formData.get("published") === "true",
  };
  await prisma.galleryItem.create({ data });
  revalidatePath("/dashboard/galerie");
}

const CATEGORIES = ["BTP", "Énergie", "Immo", "Academy"];

export default async function GaleriePage() {
  const items = await prisma.galleryItem.findMany({
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });

  return (
    <div>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1
            className="font-display text-3xl mb-1"
            style={{ color: "#F0EDE8" }}
          >
            Galerie
          </h1>
          <p style={{ color: "#8A8A8A", fontSize: "0.9rem" }}>
            {items.length} élément{items.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <GalerieClient
        items={items}
        categories={CATEGORIES}
        togglePublished={togglePublished}
        deleteItem={deleteItem}
        createItem={createItem}
      />
    </div>
  );
}
