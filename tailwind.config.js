/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFFFFF',
          text: '#333333',
          primary: '#DCF8C6',
          secondary: '#EAEAEA',
          primaryText: '#000000',
          secondaryText: '#333333',
          accent: '#4CAF50'
        },
        dark: {
          background: '#1E1E1E',
          text: '#FFFFFF',
          primary: '#DCF8C6',
          secondary: '#333333',
          primaryText: '#000000',
          secondaryText: '#FFFFFF',
          accent: '#4CAF50'
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    },
    keyframes: {
      zoomIn: {
        from: { opacity: 0, transform: 'scale(0)' },
        to: { opacity: 1, transform: 'scale(1)' }
      },
      zoomOut: {
        from: { opacity: 1, transform: 'scale(1)' },
        to: { opacity: 0, transform: 'scale(0)' }
      }
    },
    animation: {
      zoomIn: 'zoomIn 0.3s forwards',
      zoomOut: 'zoomOut 0.3s forwards'
    }
  },
  plugins: []
}
