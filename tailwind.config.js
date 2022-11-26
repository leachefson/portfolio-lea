/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        "purple-600":'#8458B3',
        "purple-400":'#d0bdf4',
        "purple-200":'#e5eaf5',
        "purple-900":'#494d5f',
        "yellow-primary":"#EFEDE0",
        "china-blue":"#323e74",
        "olive-green":"#767c7c",
        "lilac":"#7f6b8d",
        "porcelain":"#fff4e9",
        "prune":"#3e1929",
        "salmon":"#F8B4B4",
        "dark":"#22181c"
      },
      fontFamily: {
        Press: ['Press Start 2P', 'cursive'],
        Nav:['Montserrat','sans-serif'],
        primary:['Lora','sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html",  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
};
