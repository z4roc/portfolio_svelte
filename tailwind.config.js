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
      borderWidth: {
        1: "1px",
      },
      colors: {
        bgdark: "#222222",
      },
    },
  },
  plugins: [require("daisyui")],
};
