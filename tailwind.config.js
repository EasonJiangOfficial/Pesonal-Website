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
        "gradient-start-orange": '#f97316',
        "gradient-end-orange": '#eab308',
        "gradient-start-green": '#5EC269',
        "gradient-end-green": '#10B981',
        "gradient-start-blue": '#3B82F6',
        "gradient-end-blue": '#2563EB',
        "gradient-start-red": '#EF4444',
        "gradient-end-red": '#DC2626',
        "gradient-start-purple": '#8B5CF6',
        "gradient-end-purple": '#7C3AED',
        "gradient-start-pink": '#EC4899',
        "gradient-end-pink": '#DB2777',
      }
    },
  },
  plugins: [],
}
