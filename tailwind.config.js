/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gal: {
      "blue-100": "#53A1FB",
      "purple-100": "#81A0FA",
      "purple-200": "#9A93E1",
      "purple-300": "##774A94",
      "pink-100": "#C58BC6",
      "pink-200": "#EE97AF",
        },
      },
    },
  },
  plugins: [],
};
