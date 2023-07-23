/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "custom-blue":"#4E80EE",
        "custom-green":"#5EC269",
        "custom-red":"#DD524C",
        "custom-yellow":"#E2B53E",
        "custom-purple":"#9D59EF",
        "custom-pink":"#DA5597",
      }
    },
  },
  plugins: [],
}
