// 🎨 Configuration Tailwind CSS - Design System RevisAI
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Palette principale RevisAI
        primary: '#6366F1',     // Indigo
        secondary: '#8B5CF6',   // Violet
        accent: '#10B981',      // Vert
        dark: '#1F2937',        // Gris foncé
        light: '#F9FAFB',       // Gris clair
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
