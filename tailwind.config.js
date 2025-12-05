/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0a192f',
        'electric-blue': '#64ffda',
        'neon-purple': '#b392ac', // Adjusted for better contrast if needed, or stick to a vibrant one
        'slate-light': '#8892b0',
        'slate-dark': '#495670',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
