module.exports = {
content: [
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue"
  ],
  theme: {
    extend: {
      screens: {
        // Mobile Portrait (default, no prefix needed)
        // Mobile Landscape
        'mobile-ls': '480px',

        // Tablet Portrait
        'tablet-pt': '768px',

        // Tablet Landscape / Small Laptops
        'tablet-ls': '1024px',

        // Desktop / Standard Laptops
        'desktop': '1280px',

        // Large Desktop
        'desktop-lg': '1536px',
      },
      colors: {
        'villa-blue': '#93a9c6',
        'villa-darkblue': '#2c5282',
        'villa-beige': {
          50:  '#fffcf2', // almost white warm tint
          100: '#fef8e6', // very light cream
          200: '#fdf2d2', // light beige
          300: '#fdf6df', // base color (your current one)
          400: '#f3e6bf', // slightly richer
          500: '#e6d3a3', // mid beige
          600: '#cbb57f', // muted warm brown
          700: '#a88f5e', // deeper tone
          800: '#7f6b43', // dark earthy beige
          900: '#5a4a2e', // near-brown
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        handwriting: ["Patrick Hand", "cursive"],
      },
    },
  },
  plugins: [],
};