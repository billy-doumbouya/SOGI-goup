import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host:   process.env.SMTP_HOST,
  port:   Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

/**
 * Envoie un email de notification à l'admin lors d'un nouveau message contact.
 */
export async function sendContactEmail({ fullName, email, phone, subject, message }) {
  await transporter.sendMail({
    from:    process.env.SMTP_FROM,
    to:      process.env.ADMIN_EMAIL,
    replyTo: email,
    subject: `[SOGIP] Nouveau message : ${subject}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0A0A0E;color:#F0EDE8;padding:32px;border-radius:12px;border:1px solid rgba(201,168,76,0.2)">
        <div style="text-align:center;margin-bottom:24px">
          <span style="font-size:24px;font-weight:700;letter-spacing:4px;color:#F0EDE8">SOGIP</span>
          <span style="font-size:10px;letter-spacing:6px;color:#C9A84C;display:block;margin-top:4px">GROUP</span>
        </div>
        <h2 style="color:#C9A84C;font-size:18px;margin-bottom:20px;border-bottom:1px solid rgba(201,168,76,0.2);padding-bottom:12px">
          Nouveau message de contact
        </h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;color:#8A8A8A;width:120px">Nom</td><td style="color:#F0EDE8;font-weight:600">${fullName}</td></tr>
          <tr><td style="padding:8px 0;color:#8A8A8A">Email</td><td><a href="mailto:${email}" style="color:#C9A84C">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#8A8A8A">Téléphone</td><td style="color:#F0EDE8">${phone || 'Non renseigné'}</td></tr>
          <tr><td style="padding:8px 0;color:#8A8A8A">Sujet</td><td style="color:#F0EDE8">${subject}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#1A1A22;border-radius:8px;border-left:3px solid #C9A84C">
          <p style="color:#8A8A8A;font-size:12px;margin:0 0 8px">Message :</p>
          <p style="color:#F0EDE8;line-height:1.7;margin:0">${message.replace(/\n/g, '<br>')}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#4A4A55;text-align:center">
          SOGIP Group — Vision · Innovation · Réalisation
        </p>
      </div>
    `,
  })
}

/**
 * Envoie un email de confirmation automatique à l'expéditeur.
 */
export async function sendAutoReplyEmail({ fullName, email }) {
  await transporter.sendMail({
    from:    process.env.SMTP_FROM,
    to:      email,
    subject: 'SOGIP Group — Nous avons bien reçu votre message',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#0A0A0E;color:#F0EDE8;padding:32px;border-radius:12px;border:1px solid rgba(201,168,76,0.2)">
        <div style="text-align:center;margin-bottom:24px">
          <span style="font-size:24px;font-weight:700;letter-spacing:4px;color:#F0EDE8">SOGIP</span>
          <span style="font-size:10px;letter-spacing:6px;color:#C9A84C;display:block;margin-top:4px">GROUP</span>
        </div>
        <h2 style="color:#C9A84C;font-size:18px;margin-bottom:16px">Bonjour ${fullName},</h2>
        <p style="color:#8A8A8A;line-height:1.7">
          Nous avons bien reçu votre message et nous vous en remercions.
          Notre équipe vous répondra dans les plus brefs délais, généralement sous 24h ouvrées.
        </p>
        <p style="color:#8A8A8A;line-height:1.7;margin-top:16px">
          En attendant, n'hésitez pas à explorer nos services sur notre site.
        </p>
        <div style="text-align:center;margin-top:28px">
          <a href="${process.env.NEXT_PUBLIC_SITE_URL}/services" style="display:inline-block;background:linear-gradient(135deg,#9A7A30,#C9A84C);color:#0A0A0E;font-weight:600;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:14px">
            Découvrir nos services
          </a>
        </div>
        <p style="margin-top:32px;font-size:12px;color:#4A4A55;text-align:center">
          SOGIP Group — Vision · Innovation · Réalisation
        </p>
      </div>
    `,
  })
}
