/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
import withMT from "@material-tailwind/react/utils/withMT";
import defaultTheme from "tailwindcss/defaultTheme";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import colors from "tailwindcss/colors";
import aspect from  '@tailwindcss/aspect-ratio'


module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
        
       
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
         shine: 'shine 5s linear infinite',
      
        },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
         shine: {
           '0%': { 'background-position': '100%' },
           '100%': { 'background-position': '-100%' },
         },
      },
    },
  },
  plugins: [flowbite.plugin(), addVariablesForColors, aspect
  ],
});

function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
//   darkMode: "media",
//   theme: {
//     extend: {
//       fontFamily: {
//         playfair: ["Playfair Display", "serif"],
//       },
//     },
//   },
//   plugins: [flowbite.plugin()],
// };
