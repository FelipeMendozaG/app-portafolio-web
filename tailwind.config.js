/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { ink: '#080b12', panel: '#111722', line: '#263041', cyan: '#67e8f9', violet: '#a78bfa', emerald: '#6ee7b7' },
      fontFamily: { sans: ['Space Grotesk', 'ui-sans-serif', 'sans-serif'], mono: ['DM Mono', 'ui-monospace', 'monospace'] },
      boxShadow: { glow: '0 0 36px rgba(103, 232, 249, 0.16)', card: '0 18px 60px rgba(0, 0, 0, 0.25)' }
    },
  },
  plugins: [],
}