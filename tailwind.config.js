/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          hover: '#2563eb', // blue-600
          foreground: '#ffffff'
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
