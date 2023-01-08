/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "primary": "#252734",
      "secondary": "#2A2C39",
      "accent": "#59ce8f",
      "neutral": "#65666D",
      "base-100": "#FFFFFF",
      "info": "#3BADC9",
      "success": "#1FC77E",
      "warning": "#F9CB66",
      "error": "#EB3351",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}