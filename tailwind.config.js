/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'custom-purple': 'hsl(259, 100%, 65%)',
          'light-red': 'hsl(0, 100%, 67%)'
        },
        neutral: {
          'off-white': 'hsl(0, 0%, 94%)',
          'light-grey': 'hsl(0, 0%, 86%)',
          'smokey-grey': 'hsl(0, 1%, 44%)',
          'off-black': 'hsl(0, 0%, 8%)'
        }
      },
      fontFamily: {
        regular: ["Regular"],
        medium: ["SemiBold"],
        bold: ["Bold"]
      }
    },
  },
  plugins: [require('daisyui')],
}

