const relumeTailwind = require("@relume_io/relume-tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [relumeTailwind],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Ensure the boxShadow utilities are present
      boxShadow: {
        xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
        // You can also add other shadow sizes if needed.
      },      
      colors: {
        // Your base palette
        carrotOrange: {
          lightest: "#FDF4E9",
          lighter: "#FCEAD3",
          light: "#F6B665",
          base: "#F39723",   // orange base for secondary background
          dark: "#C2781C",
          darker: "#613C0E",
          darkest: "#482D0A",
        },
        deepSapphire: {
          lightest: "#E6E8EF",
          lighter: "#CDD2E0",
          light: "#506493",
          base: "#052266",
          dark: "#041B51",
          darker: "#020D28",
          darkest: "#010A1E",
        },
        neutral: {
          white: "#FFFFFF",
          lightest: "#F2F2F2",
          lighter: "#D8D9D9",
          light: "#B2B3B4",
          base: "#7F8082",
          dark: "#4C4D50",
          darker: "#191B1E",
          darkest: "#000205",
        },
        // Override tokens used by Relume UI:
        text: {
          // Here your tokens are defined; you can also add hover tokens
          primary: "#000000",    // For buttons with variant="primary"
          secondary: "#000000",  // For buttons with variant="secondary"
          alternative: "#000000",
          // Optional: hover text states if needed (or simply rely on the same color)
          primaryHover: "#000000",
          secondaryHover: "#000000",
        },
        background: {
          // For buttons:
          primary: "#FFFFFF",    // white background for primary buttons
          secondary: "#F39723",  // orange background for secondary buttons
          alternative: "#F6B665",
          // Define hover backgrounds:
          primaryHover: "#F2F2F2",     // a slightly different white—or a subtle gray tint—for primary hover
          secondaryHover: "#E6861C",   // a slightly darker or modified orange for secondary hover
          alternativeHover: "#F39723",

        },
        border: {
          primary: "#transparent",  // light gray border for primary buttons
          secondary: "D8D9D9", // no border for secondary buttons
          alternativeHover: "transparent", // no border for secondary buttons

          // Optionally, add hover border states:
          primaryHover: "#transparent",  // a darker gray on hover for primary buttons
          secondaryHover: "B2B3B4",
          alternativeHover: "#transparent"
        },
        ring: {
          primary: "#E6B582", // focus ring color remains the same
        },
      },
    },
  },
  plugins: [],
};
