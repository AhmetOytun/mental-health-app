/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        epilogueRegular: ["Epilogue-Regular", "sans-serif"],
        epilogueMedium: ["Epilogue-Medium", "sans-serif"],
        epilogueBold: ["Epilogue-Bold", "sans-serif"],
        epilogueBlack: ["Epilogue-Black", "sans-serif"],
        epilogueSemiBold: ["Epilogue-SemiBold", "sans-serif"],
        epilogueLight: ["Epilogue-Light", "sans-serif"],
        epilogueExtraLight: ["Epilogue-ExtraLight", "sans-serif"],
        epilogueExtraBold: ["Epilogue-ExtraBold", "sans-serif"],
        epilogueThin: ["Epilogue-Thin", "sans-serif"],
        rubikBlack: ["Rubik-Black", "sans-serif"],
        rubikBold: ["Rubik-Bold", "sans-serif"],
        rubikExtraBold: ["Rubik-ExtraBold", "sans-serif"],
        rubikLight: ["Rubik-Light", "sans-serif"],
        rubikMedium: ["Rubik-Medium", "sans-serif"],
        rubikRegular: ["Rubik-Regular", "sans-serif"],
        rubikSemiBold: ["Rubik-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
