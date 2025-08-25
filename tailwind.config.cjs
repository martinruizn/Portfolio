/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#FF5300',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
