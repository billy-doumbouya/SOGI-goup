const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  const password = await bcrypt.hash('SogipAdmin2024!', 12)

  const admin = await prisma.user.upsert({
    where:  { email: 'admin@sogipgroup.com' },
    update: {},
    create: {
      name:     'Administrateur SOGIP',
      email:    'admin@sogipgroup.com',
      password,
      role:     'SUPER_ADMIN',
    },
  })

  console.log('Admin créé :', admin.email)

  // Seed galerie placeholder
  const gallery = [
    { title: 'Résidence Modern Conakry',      category: 'BTP',     imageUrl: '', order: 1 },
    { title: 'Installation Solaire 10kWc',    category: 'Énergie', imageUrl: '', order: 2 },
    { title: 'Villa LePropio — Kaloum',        category: 'Immo',    imageUrl: '', order: 3 },
    { title: 'Formation CEF — Batch 3',        category: 'Academy', imageUrl: '', order: 4 },
    { title: 'Bâtiment Commercial — Matam',   category: 'BTP',     imageUrl: '', order: 5 },
    { title: 'Centrale Solaire Kindia',        category: 'Énergie', imageUrl: '', order: 6 },
  ]

  for (const item of gallery) {
    await prisma.galleryItem.upsert({
      where:  { id: `seed-${item.order}` },
      update: {},
      create: { ...item, id: `seed-${item.order}` },
    })
  }

  console.log('Galerie initialisée.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
