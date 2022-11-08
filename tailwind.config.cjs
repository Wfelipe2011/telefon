/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "shadow-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
      colors: {
        "primary-100": "#D6B1FF",
        "primary-200": "#C18EFF",
        "primary-300": "#A66AFF",
        "primary-400": "#8A4BFF",
        "primary-500": "#6A2CFF",
        "primary-600": "#4D00E6",
        "primary-700": "#3A00B3",
        "primary-800": "#280080",
        "primary-900": "#1A005C",
        "secondary-100": "#B3D6FF",
        "secondary-200": "#8FC0FF",
        "secondary-300": "#6AA9FF",
        "secondary-400": "#4B8CFF",
        "secondary-500": "#2C6AFF",
        "secondary-600": "#004DE6",
        "secondary-700": "#003AB3",
        "secondary-800": "#002880",
        "secondary-900": "#001A5C",
        "tertiary-100": "#FFD6B1",
        "tertiary-200": "#FFC18E",
        "tertiary-300": "#FFA66A",
        "tertiary-400": "#FF8A4B",
        "tertiary-500": "#FF6A2C",
        "tertiary-600": "#E64D00",
        "tertiary-700": "#B33A00",
        "tertiary-800": "#802800",
        "tertiary-900": "#5C1A00",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
