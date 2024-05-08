/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      rotate: {
        360: "360deg",
      },
      scale: {
        70: "0.7",
      },
      fontFamily: {
        dahlia: ["Dahlia Medium"],
        mona: ["Mona Sans", "sans-serif"],
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
      },
      blur: { xs: "1px" },
      colors: {
        gold: "#fad12b",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      width: {
        "1k": "1024px",
        "7h": "750px",
      },
      height: {
        "1k": "1024px",
        "7h": "750px",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        spotlights: "spotlights 2s ease .75s 1 forwards",
        "2000ms": "2000ms",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        spotlights: {
          "0%": {
            opacity: 0,
            transform: "translate(72%, 62%) scale(0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(10%,10%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  plugins: [addVariablesForColors],
};
// bg-gradient-to-b from-pink-50 to-red-100
function addVariablesForColors({ addBase, theme }) {
  let newVars = Object.fromEntries(
    Object.entries(theme("colors")).map(([key, val]) => [`--color-${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
