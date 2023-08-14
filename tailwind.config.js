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
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        'text': '#eff2e8',
        'background': '#030302',
        'primary': '#3c3257',
        'secondary': '#190b42',
        'accent': '#6d5b9f',
      },
    },
  },
  plugins: [require("daisyui")],
};
