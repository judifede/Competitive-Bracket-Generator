/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/**/*.css",
  ],
  theme: {
    extend: {
      spacing: {
        'form_gap': '2.5rem',
      },
    },
  },
  plugins: [],
}