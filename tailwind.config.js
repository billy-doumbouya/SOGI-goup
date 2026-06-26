/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ─── SOGIP BRAND TOKENS ───────────────────────
        // Bleu dégradé calé sur le logo (clair → marine profond)
        blue: {
          50:  '#EAF3FC',
          100: '#CDE3F8',
          200: '#9CC8F0',
          300: '#69ABE6',
          400: '#3F92DC',
          500: '#1F7BCB', // bleu "milieu" du dégradé du logo
          600: '#1763A8', // bleu principal — proche du O/G du logo
          700: '#114E85', // bleu profond — base du dégradé
          800: '#0D3C66',
          900: '#0A2C4C',
          950: '#061B30',
          DEFAULT: '#1763A8',
        },
        // Or/jaune vif du logo (le trait au-dessus du I)
        gold: {
          50:  '#FEFAE8',
          100: '#FDF3C2',
          200: '#FBE584',
          300: '#F9D646',
          400: '#F6C81E',
          500: '#EFBE00', // jaune logo principal
          600: '#D4A800', // pour contraste texte sur fond clair
          700: '#A88500',
          800: '#7C6300',
          900: '#574500',
          DEFAULT: '#EFBE00',
          subtle:  'rgba(239,190,0,0.10)',
          border:  'rgba(239,190,0,0.25)',
        },
        // Fond clair / ivoire (remplace "dark")
        light: {
          DEFAULT: '#FFFFFF',
          alt:     '#F7F9FC',
          subtle:  '#EEF3F9',
          card:    '#FFFFFF',
        },
        text: {
          primary: '#0D2440',
          muted:   '#5A6B7D',
          faint:   '#9AA8B5',
          inverse: '#F7F9FC',
        },
        border: {
          DEFAULT: 'rgba(13,36,64,0.08)',
          accent:  'rgba(239,190,0,0.30)',
        },
      },
      fontFamily: {
        display: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        sans:    ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        hero:  ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },
      spacing: {
        section: 'clamp(4rem, 10vw, 8rem)',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        gold:      '0 0 30px rgba(239,190,0,0.18)',
        'gold-lg': '0 0 60px rgba(239,190,0,0.22)',
        blue:      '0 8px 30px rgba(17,99,168,0.12)',
        card:      '0 4px 24px rgba(13,36,64,0.08)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'nav-line':   'navLine 0.3s ease forwards',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        pulseGold: { '0%, 100%': { boxShadow: '0 0 20px rgba(239,190,0,0.18)' }, '50%': { boxShadow: '0 0 40px rgba(239,190,0,0.32)' } },
        navLine: { '0%': { width: '0%' }, '100%': { width: '100%' } },
      },
      backgroundImage: {
        'brand-gradient':  'linear-gradient(135deg, #0D3C66 0%, #1763A8 50%, #3F92DC 100%)',
        'gold-gradient':   'linear-gradient(135deg, #A88500, #EFBE00, #F9D646)',
        'light-gradient':  'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)',
        'hero-gradient':   'radial-gradient(ellipse at 60% 40%, rgba(239,190,0,0.08) 0%, transparent 70%)',
        'card-gradient':   'linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 100%)',
        'gold-band':       'linear-gradient(90deg, #D4A800, #EFBE00, #F9D646, #EFBE00, #D4A800)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}