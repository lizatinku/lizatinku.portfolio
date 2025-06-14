/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunsetRed: '#E94E77',
        sunsetOrange: '#F57C42',
        sunsetYellow: '#F4B400',
        sunsetPink: '#F6C1C0',
        duskPurple: '#6D28D9',
      },
      boxShadow: {
        glow: '0 0 10px rgba(255, 182, 193, 0.8)', // pink glow
      },
      dropShadow: {
        glow: '0 0 8px rgba(59,130,246,0.75)', // blue glow for icons
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
