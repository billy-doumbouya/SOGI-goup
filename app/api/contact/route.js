import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/client'
import { sendContactEmail } from '@/lib/email/mailer'
import { sendWhatsAppNotification } from '@/lib/whatsapp/twilio'

export async function POST(req) {
  try {
    const body = await req.json()
    const { fullName, email, phone, subject, message } = body

    // 1 — Validation basique
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants.' },
        { status: 400 }
      )
    }

    // 2 — Sauvegarde en base
    const contact = await prisma.contact.create({
      data: { fullName, email, phone: phone || null, subject, message },
    })

    // 3 — Email à l'admin (non bloquant)
    sendContactEmail({ fullName, email, phone, subject, message }).catch((err) =>
      console.error('[EMAIL ERROR]', err)
    )

    // 4 — Notification WhatsApp à l'admin (non bloquant)
    const waMsg = `*Nouveau message SOGIP Group*\n\n*Nom :* ${fullName}\n*Email :* ${email}\n*Tél :* ${phone || 'N/A'}\n*Sujet :* ${subject}\n\n${message}`
    sendWhatsAppNotification(waMsg).catch((err) =>
      console.error('[WHATSAPP ERROR]', err)
    )

    return NextResponse.json({ success: true, id: contact.id }, { status: 201 })
  } catch (err) {
    console.error('[CONTACT API]', err)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Méthode non autorisée.' }, { status: 405 })
}
