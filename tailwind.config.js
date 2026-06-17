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
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#E8C96A',
          dark:    '#9A7A30',
          subtle:  'rgba(201,168,76,0.12)',
          border:  'rgba(201,168,76,0.25)',
        },
        dark: {
          DEFAULT: '#0A0A0E',
          alt:     '#111118',
          subtle:  '#16161E',
          surface: '#1A1A22',
          card:    '#22222C',
        },
        light: {
          DEFAULT: '#F7F4EF',
          alt:     '#EDEAE3',
          subtle:  '#E5E1D8',
        },
        text: {
          primary: '#F0EDE8',
          muted:   '#8A8A8A',
          faint:   '#4A4A55',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          accent:  'rgba(201,168,76,0.25)',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:    ['DM Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        hero:  ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
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
        gold:    '0 0 30px rgba(201,168,76,0.15)',
        'gold-lg': '0 0 60px rgba(201,168,76,0.2)',
        card:    '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.4s ease forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'nav-line':   'navLine 0.3s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,168,76,0.2)' },
          '50%':      { boxShadow: '0 0 40px rgba(201,168,76,0.4)' },
        },
        navLine: {
          '0%':   { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'gold-gradient':  'linear-gradient(135deg, #9A7A30, #C9A84C, #E8C96A)',
        'dark-gradient':  'linear-gradient(180deg, #0A0A0E 0%, #111118 100%)',
        'hero-gradient':  'radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.08) 0%, transparent 70%)',
        'card-gradient':  'linear-gradient(135deg, #1A1A22 0%, #111118 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
