/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        transparent: 'transparent',
        current: 'currentColor',
          'primary' : {
            'dark': '#0C2D48', //moonblue
            'light' : '#00192E'
          },
          'secondary': '#277CA0',
          'background' : {
            'light': '#145DA0',
            'dark': '02427E'
          },
          'text' : {
            'primary': '#FFFFF',
            'secondary': '#FFEECF'        
          },
          'error': '#EA4335',
          'success': '#34A853', // green
          'disabled': '#DADCE0' // light grey
      },
      screens: {
        xs: '425px', // Small phones
        sm: '640px', // Mobile
        md: '768px', // Tablets
        lg: '1024px', // Laptop
        xl: '1280px', // Desktop
        xxl: '1536px', // Large Screen
        xxxl: '1920px' // Ultra-large screens
      }
    },
  },
  plugins: [],
}

