module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      aljazeera: "Al-Jazeera, -apple-system"
    },
    colors:{
      'orange' : '#FBD675',
      'white': '#ffffff',
      'black': '#000000',
      'lightgray': '#f8f8f8',
      'lightBlue' : '#2994F8',
      'gray' : '#eee',
      'grate': '#e1e1e1',
      'lightBlack' : 'rgba(10, 0, 0, 0.281)'
    },
    extend: {
      backgroundImage: {
        'background': "url('../public/assets/images/map.svg')",
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.1) 0 0 20px',
      },
      fontFamily: {
        bold: ["Al-Jazeera-Arabic-Bold", "sans-serif"],
        regu: ["Al-Jazeera-Arabic-Regular", "sans-serif"],
      },
    },
    screens: {
      'sm': '320px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 960px) { ... }

      'lg': '985px',
      // => @media (min-width: 1440px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
