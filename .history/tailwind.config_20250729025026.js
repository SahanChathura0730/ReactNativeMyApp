/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}","./layouts/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        slabThin: ["RobotoSlabThin"],
        slabLight: ["RobotoSlabLight"],
        slab: ["RobotoSlabRegular"],     // default
        slabMedium: ["RobotoSlabMedium"],
        slabSemiBold: ["RobotoSlabSemiBold"],
        slabBold: ["RobotoSlabBold"],
        slabExtraBold: ["RobotoSlabExtraBold"],
        slabBlack: ["RobotoSlabBlack"],
      },
    },
  },
  plugins: [],
}