module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        primary: '#071637'
      },
      bg: {
        gray: '#707070',
        blue: '#7495CB'
      },
      mustard: '#DEB986',
      white: "#FFFFFF"
    },
    fontFamily: {
      'display': ['EB Garamond', 'serif'],
    },
    extend: {
      backgroundImage: theme => ({
        'backdrop': "url('/src/assets/backdrop.jpeg')"
       })
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '1rem',
      'tiny': '.875rem',
       'base': '1.25rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     }
  },
  variants: {
    extend: {},
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: [],
}
