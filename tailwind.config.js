/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { "inter": "Inter, sans-serif" },
      backgroundImage: {
        "home": "url('../src/assets/images/bg-home.png')",
        "about": "url('../src/assets/images/bg-about.png')",
      }
    },
  },
  plugins: [],
}

