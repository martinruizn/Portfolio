/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#235347',
        surface: {
          light: 'rgba(255,255,255,0.72)',
          dark: 'rgba(28,28,30,0.72)',
        },
        border: {
          glass: 'rgba(255,255,255,0.35)',
          glassDark: 'rgba(255,255,255,0.08)',
        },
      },
      borderRadius: {
        glass: '1.25rem',
        glassLg: '1.75rem',
        pill: '9999px',
      },
      boxShadow: {
        glass:
          '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.4)',
        glassDark:
          '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)',
        glassHover:
          '0 12px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.5)',
        glassHoverDark:
          '0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      backdropBlur: {
        glass: '20px',
        glassLg: '40px',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
