/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx,ts,tsx}",
  ],
  theme: {
    colors : {
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
    extend: {},
  },
  plugins: [],
}

