/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    backgroundImage: {
      "my-image": "url('../assets/images/c.jpg')",
      // Add more image classes as needed
    },
  },
  plugins: [require("flowbite/plugin")],
};
