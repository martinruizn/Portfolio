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
          '0 10px 36px rgba(15, 23, 20, 0.14), inset 0 1px 0 rgba(255,255,255,0.7)',
        glassDark:
          '0 10px 36px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.16)',
        glassHover:
          '0 14px 44px rgba(15, 23, 20, 0.18), inset 0 1px 0 rgba(255,255,255,0.8)',
        glassHoverDark:
          '0 14px 44px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.22)',
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
