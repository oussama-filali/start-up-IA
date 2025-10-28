// 🎨 Configuration Tailwind CSS v3 - Design System RevisAI
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Palette principale RevisAI
        primary: {
          DEFAULT: '#6366F1',
          50: '#EDEEFB',
          100: '#D9DCF7',
          500: '#6366F1',
          600: '#4F52E0',
          700: '#3B3FD0',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          50: '#F3E8FF',
          100: '#E9D5FF',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
        },
        accent: {
          DEFAULT: '#10B981',
          50: '#D1FAE5',
          100: '#A7F3D0',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
        },
        dark: '#1F2937',
        light: '#F9FAFB',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
