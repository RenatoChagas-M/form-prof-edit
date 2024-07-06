/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '40/1': "40%",
        '50/1': "50%",
      },
      height: {
        '90/1': "90%",
      },
    },
  },
  plugins: [
    
  ],
}

