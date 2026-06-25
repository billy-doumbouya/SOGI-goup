const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function main() {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    throw new Error(
      "ADMIN_PASSWORD manquant dans .env — impossible de créer le compte admin."
    );
  }

  const password = await bcrypt.hash(adminPassword, 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@sogipgroup.com" },
    update: {},
    create: {
      name: "Administrateur SOGIP",
      email: "admin@sogipgroup.com",
      password,
      role: "SUPER_ADMIN",
    },
  });
  console.log("Admin créé :", admin.email);

  // Seed galerie — images placeholder Unsplash (à remplacer via le dashboard admin)
  const gallery = [
    {
      title: "Résidence Modern Conakry",
      category: "BTP",
      imageUrl:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      order: 1,
    },
    {
      title: "Installation Solaire 10kWc",
      category: "Énergie",
      imageUrl:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
      order: 2,
    },
    {
      title: "Villa LePropio — Kaloum",
      category: "Immo",
      imageUrl:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      order: 3,
    },
    {
      title: "Formation CEF — Batch 3",
      category: "Academy",
      imageUrl:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
      order: 4,
    },
    {
      title: "Bâtiment Commercial — Matam",
      category: "BTP",
      imageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      order: 5,
    },
    {
      title: "Centrale Solaire Kindia",
      category: "Énergie",
      imageUrl:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80",
      order: 6,
    },
  ];

  for (const item of gallery) {
    await prisma.galleryItem.upsert({
      where: { id: `seed-${item.order}` },
      update: {},
      create: { ...item, id: `seed-${item.order}` },
    });
  }
  console.log("Galerie initialisée.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());