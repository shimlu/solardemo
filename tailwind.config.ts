import type { Config } from "tailwindcss";

// Brand colors live as CSS variables in src/app/globals.css (RGB triplets),
// so the whole theme can be tweaked in one place.
const withVar = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: withVar("brand"),
          dark: withVar("brand-dark"),
          light: withVar("brand-light"),
        },
        accent: {
          DEFAULT: withVar("accent"),
          dark: withVar("accent-dark"),
          light: withVar("accent-light"),
        },
        sun: withVar("sun"),
        ink: withVar("ink"),
        muted: withVar("muted"),
        surface: withVar("surface"),
        line: withVar("line"),
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(15 40 80 / 0.06), 0 8px 24px -8px rgb(15 40 80 / 0.12)",
        lift: "0 2px 4px rgb(15 40 80 / 0.08), 0 20px 40px -12px rgb(15 40 80 / 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
