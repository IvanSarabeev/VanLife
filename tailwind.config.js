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
      },
      backgroundColor: {
        "coral": "#FFF7ED",
        "light-coral": "#FFCC8D",
        "dark-coral": "#FF8C38",
        "footer": "#252525",
      },
      textColor: {
        "custom-black": "#161616",
        "footer-gray": "#AAAAAA",
      }

    },
  },
  plugins: [],
}

