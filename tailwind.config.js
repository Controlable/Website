/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          hover: '#2563eb', // blue-600
          foreground: '#ffffff'
        },
        accent: {
          DEFAULT: '#2563eb', // blue-600
          hover: '#1d4ed8', // blue-700
          light: '#eff6ff', // blue-50
          text: '#1e40af', // blue-800
          'text-dark': '#60a5fa', // blue-400
          'text-dark-hover': '#93c5fd', // blue-300
          'border-dark': '#3b82f6', // blue-500
          highlight: '#1e3a8a' // blue-900
        },
        secondary: {
          DEFAULT: '#64748b', // slate-500
          foreground: '#ffffff'
        },
        background: '#0f172a', // slate-900
        surface: '#1e293b', // slate-800
        text: {
          main: '#f8fafc', // slate-50
          muted: '#94a3b8' // slate-400
        }
      },
      fontSize: {
        display: ['2.25rem', { lineHeight: '2.5rem' }],
        body: ['1rem', { lineHeight: '1.5rem' }]
      }
      // Add other theme extensions here
    }
  },
  plugins: []
}
