module.exports = {
  content: ["./src/**/*.{html,ts}"],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0D6EFD",
        primaryGradient: "#127FFF",
        mainBlack: "#1C1C1C",
        slightBlack: "#505050",
        mainGray: "#8B96A5",
        slightGray: "#BDC4CD",
        primaryGray: "#DEE2E7",
        primaryWhite: "#EFF2F4",
        lightBlue: "#E3F0FF",
        blue: "#0D6EFD",
        lightGreen: "#C3FFCB",
        green: "#00B517",
        lightYellow: "#FFE5BF",
        orange: "#FF9017",
        mainRed: "#FA3434"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
