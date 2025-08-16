/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#070b14" },
      backgroundImage: {
        'grid': "radial-gradient(#18223a 1px, transparent 1px)",
        'hero-gradient': "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 30%, #818cf8 60%, #a78bfa 100%)"
      }
    }
  },
  plugins: [],
}
