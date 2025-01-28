/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all files inside src/
  ],
  theme: {
    extend: {
      fontSize: {
        "course-details-heading-large": ["36px", { lineHeight: "44px" }],
        "home-heading-small": ["28px", { lineHeight: "34px" }],
        "home-heading-large": ["48px", { lineHeight: "56px" }],
      },
    },
  },
  plugins: [],
};

// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       fontSize: {
//         "course-details-heading-small": ["26px", "36px"],

//       },
//     },
//   },
//   plugins: [],
// };
