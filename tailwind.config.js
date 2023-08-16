/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    require("path").join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}"
    ),
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(100%)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideIn: "slideIn .25s ease-in-out forwards var(--delay, 0)",
      },
      transitionProperty: {
        size: "all 1s ease-in-out",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        text: "#f0ebf4",
        background: "#0f0b14",
        primary: "#67e8f9",
        secondary: "#a855f7",
        accent: "#765397",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
  },
};
