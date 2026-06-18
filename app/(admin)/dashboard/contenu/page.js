import { prisma } from "@/lib/db/client";
import { revalidatePath } from "next/cache";
import ContenuClient from "./ContenuClient";

export const metadata = { title: "Contenu pages | SOGIP Admin" };

const PAGES = [
  { key: "home", label: "Accueil" },
  { key: "about", label: "À propos" },
  { key: "services", label: "Services" },
  { key: "contact", label: "Contact" },
];

async function saveContent(page, content) {
  "use server";
  await prisma.pageContent.upsert({
    where: { page },
    update: { content, updatedAt: new Date() },
    create: { page, content },
  });
  revalidatePath("/dashboard/contenu");
}

export default async function ContenuPage() {
  const records = await prisma.pageContent.findMany();
  const contentMap = Object.fromEntries(records.map((r) => [r.page, r]));

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl mb-1" style={{ color: "#F0EDE8" }}>
          Contenu des pages
        </h1>
        <p style={{ color: "#8A8A8A", fontSize: "0.9rem" }}>
          Modifiez le contenu JSON de chaque page du site.
        </p>
      </div>

      <ContenuClient
        pages={PAGES}
        contentMap={contentMap}
        saveContent={saveContent}
      />
    </div>
  );
}
