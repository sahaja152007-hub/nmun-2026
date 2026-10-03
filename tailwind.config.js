/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'paper': '#F4EFE6',
        'paper-card': '#FAF6F0',
        'riso-coral': '#FF4D4D',
        'riso-indigo': '#1B2A4A',
        'washi-tape': '#F6E05E',
        'ink-charcoal': '#121316',
        'stamped-red': '#E53E3E',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        sans: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'riso-indigo': '4px 4px 0px #1B2A4A',
        'riso-indigo-lg': '6px 6px 0px #1B2A4A',
        'riso-coral': '4px 4px 0px #FF4D4D',
        'riso-coral-lg': '6px 6px 0px #FF4D4D',
        'riso-washi': '4px 4px 0px #F6E05E',
        'riso-multi': '3px 3px 0px #FF4D4D, 6px 6px 0px #1B2A4A',
      }
    },
  },
  plugins: [],
}
