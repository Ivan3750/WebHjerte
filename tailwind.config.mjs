/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Én fælles indholdsbredde på hele sitet (før 1152/1280 px) – header, hero og sektioner flugter nu
      maxWidth: { "6xl": "1440px", "7xl": "1440px" },
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
