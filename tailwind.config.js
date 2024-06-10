/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        "amarillo-sazon": "#f3c332",
        "negro-sazon": "#0a0a0a",
        "amarillo-favoritos": "#FFD314",
      },
      backgroundImage: {
        frontImage:
          "url(https://images.pexels.com/photos/8844888/pexels-photo-8844888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
