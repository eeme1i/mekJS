module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': '650px',
    },
    boxShadow: {
      '2xl': '0 0px 50px 0px rgba(0, 0, 0, 0.10)',
    },
    extend: {
      width: {
        '128': '32rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/bg.png')",
      },
      fontFamily: {
        sans: ['inter', 'sans'],
        mono: ['"Space Mono"', 'mono'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
