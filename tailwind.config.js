/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif'
      },
      colors: {
        personalite: {
          0:   '#FFFFFF',
          50:  '#F5F3F4',
          100: '#D3D3D3',
          200: '#B1A7A6',
          300: '#E5383B',
          500: '#BA181B',
          600: '#A4161A',
          700: '#660708',
          800: '#161A1D',
          900: '#0B090A'
        },
        social: {
          github: '#171515',
          linkedin: '#0e76a8',
          instagram: '#4f5bd5',
          instagram1: '#962fbf',
          instagram2: '#d62976',
          whatsapp: '#34af23',
        },
      },
      animation: {
        'bounce-slow5': 'bounce 5s linear infinite',
        'bounce-slow4': 'bounce 4.8s linear infinite',
        'bounce-slow3': 'bounce 4.6s linear infinite',
        'bounce-slow2': 'bounce 4.4s linear infinite',
        'bounce-fast': 'bounce 1s linear infinite',
      },
    }
  },
  plugins: [],
}
