/**
 * SogipLogo — composant SVG réutilisable
 * Props :
 *   className  — classes Tailwind (ex: "h-10 w-auto")
 *   variant    — "full" (logo + texte) | "icon" (hexagone seul)
 *   theme      — "dark" (texte clair) | "light" (texte sombre)
 */
export default function SogipLogo({
  className = 'h-10 w-auto',
  variant = 'full',
  theme = 'dark',
}) {
  const textColor   = theme === 'dark' ? '#F0EDE8' : '#1A1A1A'
  const mutedColor  = theme === 'dark' ? '#8A8A8A' : '#6B6B6B'
  const accentColor = theme === 'dark' ? '#C9A84C' : '#9A7A30'

  if (variant === 'icon') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 56 56"
        fill="none"
        className={className}
        role="img"
        aria-label="SOGIP Group"
      >
        <defs>
          <linearGradient id="sg-gold-i" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#9A7A30" />
            <stop offset="50%"  stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#E8C96A" />
          </linearGradient>
          <filter id="sg-glow-i">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <polygon
          points="28,4 50,16 50,40 28,52 6,40 6,16"
          fill="#0E0E14"
          stroke="url(#sg-gold-i)"
          strokeWidth="1.5"
        />
        <rect x="14" y="34" width="5" height="10" rx="0.8" fill="url(#sg-gold-i)" opacity="0.5" />
        <rect x="22" y="27" width="5" height="17" rx="0.8" fill="url(#sg-gold-i)" opacity="0.72" />
        <rect x="30" y="18" width="5" height="26" rx="0.8" fill="url(#sg-gold-i)" />
        <line x1="14" y1="34" x2="35" y2="18" stroke="url(#sg-gold-i)" strokeWidth="0.8" opacity="0.35" />
        <circle cx="35" cy="18" r="2" fill="#E8C96A" filter="url(#sg-glow-i)" />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 80"
      fill="none"
      className={className}
      role="img"
      aria-label="SOGIP Group — Vision · Innovation · Réalisation"
    >
      <defs>
        <linearGradient id="sg-gold" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#9A7A30" />
          <stop offset="50%"  stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#E8C96A" />
        </linearGradient>
        <filter id="sg-glow">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Hexagon */}
      <polygon
        points="40,12 66,26 66,54 40,68 14,54 14,26"
        fill={theme === 'dark' ? '#0E0E14' : '#F0EDE8'}
        stroke="url(#sg-gold)"
        strokeWidth="1.5"
      />

      {/* Rising bars */}
      <rect x="22" y="46" width="6" height="12" rx="1" fill="url(#sg-gold)" opacity="0.5" />
      <rect x="31" y="37" width="6" height="21" rx="1" fill="url(#sg-gold)" opacity="0.72" />
      <rect x="40" y="26" width="6" height="32" rx="1" fill="url(#sg-gold)" />

      {/* Ascending guide */}
      <line x1="22" y1="46" x2="46" y2="26" stroke="url(#sg-gold)" strokeWidth="1" opacity="0.35" />
      <circle cx="46" cy="26" r="2.5" fill="#E8C96A" filter="url(#sg-glow)" />

      {/* SOGIP */}
      <text
        x="82"
        y="36"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="4"
        fill={textColor}
      >
        SOGIP
      </text>

      {/* Separator */}
      <line x1="82" y1="43" x2="228" y2="43" stroke="url(#sg-gold)" strokeWidth="0.6" opacity="0.4" />

      {/* GROUP */}
      <text
        x="83"
        y="58"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="10"
        fontWeight="300"
        letterSpacing="6"
        fill={accentColor}
        opacity="0.9"
      >
        GROUP
      </text>

      {/* Tagline */}
      <text
        x="83"
        y="71"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontSize="7.5"
        fontWeight="300"
        letterSpacing="1.5"
        fill={mutedColor}
      >
        Vision · Innovation · Réalisation
      </text>
    </svg>
  )
}
