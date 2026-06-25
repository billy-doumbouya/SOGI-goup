import Image from 'next/image'

/**
 * SogipLogo — composant réutilisable basé sur l'image /public/logo.png
 * Props :
 *   className  — classes Tailwind (ex: "h-10 w-auto")
 *   variant    — "full" (logo large) | "icon" (logo compact)
 *   theme      — conservé pour compatibilité (dark/light), sans effet direct
 *                ici puisque le logo.png contient déjà ses propres couleurs.
 *                Si besoin d'un fond clair/sombre, gère-le via le parent.
 */
export default function SogipLogo({
  className = 'h-10 w-auto',
  variant = 'full',
  theme = 'dark', // conservé pour compatibilité avec les appels existants
}) {
  // Dimensions de référence (ajuste selon les proportions réelles de logo.png)
  const dimensions =
    variant === 'icon'
      ? { width: 56, height: 56 }
      : { width: 320, height: 80 }

  return (
    <Image
      src="/logo.png"
      alt="SOGIP Group — Vision · Innovation · Réalisation"
      width={dimensions.width}
      height={dimensions.height}
      className={className}
      priority
    />
  )
}