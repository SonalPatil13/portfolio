/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F5F2EB',
        'ivory-dark': '#EDE9DF',
        navy: '#202C3A',
        'navy-light': '#2D3E50',
        teal: '#245C63',
        'teal-light': '#2E7A82',
        terracotta: '#C58B68',
        'terracotta-light': '#D4A080',
        stone: '#D9D4C9',
        'stone-dark': '#B8B1A5',
        ink: '#1A2332',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
