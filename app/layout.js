import "../styles/globals.css";
import { Toaster } from "sonner";
import AOSInit from "@/components/layout/AOSInit";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sogipgroup.com",
  ),

  title: {
    default: "SOGIP Group — Vision · Innovation · Réalisation",
    template: "%s | SOGIP Group",
  },
  description:
    "SOGIP Group, holding guinéenne multisectorielle spécialisée dans la construction, l'immobilier, les énergies renouvelables et la formation professionnelle.",
  keywords: [
    "SOGIP",
    "Guinée",
    "BTP",
    "Immobilier",
    "Énergie solaire",
    "Formation",
    "Conakry",
  ],
  authors: [{ name: "SOGIP Group" }],
  openGraph: {
    type: "website",
    locale: "fr_GN",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "SOGIP Group",
    title: "SOGIP Group — Vision · Innovation · Réalisation",
    description:
      "Holding guinéenne multisectorielle. BTP · Immobilier · Énergie · Formation.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "SOGIP Group" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOGIP Group",
    description: "Holding guinéenne multisectorielle.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logos/sogip-icon.svg",
    apple: "/logos/sogip-icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <AOSInit />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1A1A22",
              border: "1px solid rgba(201,168,76,0.25)",
              color: "#F0EDE8",
              fontFamily: "DM Sans, sans-serif",
            },
            classNames: {
              success: "toast-success",
              error: "toast-error",
            },
          }}
          richColors={false}
        />
      </body>
    </html>
  );
}
