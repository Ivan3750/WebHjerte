/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        jello: 'jello-vertical 0.9s both',
      },
      keyframes: {
        'jello-vertical': {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '40%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '50%': { transform: 'scale3d(0.85, 1.15, 1)' },
          '65%': { transform: 'scale3d(1.05, 0.95, 1)' },
          '75%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
      },
    },
  },
  plugins: [],
};1
