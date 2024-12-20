/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    // "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js,jsx,ts,tsx}'
  ],
  theme: {
    colors : {
      transparent: 'transparent',
      current: 'currentColor',
        primary : {
          dark: '#0C2D48', //moonblue
          light : '#00192E'
        },
        secondary: '#277CA0',
        background : {
          light: '#145DA0',
          dark: '#02427E'
        },
        text : {
          primary: '#FFFF',
          secondary: '#333'        
        },
        customGreen: '#10B981',
        error: '#EA4335',
        success: '#34A853', // green
        disabled: '#DADCE0' // light grey
    },
    extend: {
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
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--primary-dark': theme('colors.primary.dark'),
          '--primary-light': theme('colors.primary.light'),
          '--secondary-color': theme('colors.secondary'),
          '--background-light': theme('colors.background.light'),
          '--background-dark': theme('colors.background-dark'),
          '--text-light': theme('colors.text.primary'),
          '--text-dark': theme('colors.text.secondary'),
        }
      })      
    }
  ],
}

