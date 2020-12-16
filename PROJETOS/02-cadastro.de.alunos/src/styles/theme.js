import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#F2F2F2" },
    primary: {
      light: "rgba(86, 191, 142, 0.78)",
      main: "rgba(86, 191, 142, 1)",
      dark: "rgba(77, 167, 125, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(217, 171, 154, 0.75)",
      main: "rgba(217, 171, 154, 1)",
      dark: "rgba(190, 150, 135, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    // "#025939", // "#591521", // "#01402E", // "#8C1B39",
    // #56BF8E // #D9CFA0 // #D9D6D2 // #D9AB9A
    text: {
      primary: "#01402E",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },

  typography: {
    fontSize: 14,
    h1: { fontSize: "min(96px, 12vw)", color: "rgba(0, 0, 0, 0.87)" },
    h2: { fontSize: "min(60px, 10vw)", color: "#01402E", fontWeight: "bolder" },
    h3: { fontSize: "min(48px, 8vw)", color: "#591521", fontWeight: "revert" }, //fontWeight: "bold"
    h4: { fontSize: "min(34px, 7vw)" },
    h5: { fontSize: "min(24px, 6.5vw)", lineHeight: "33px" },
    h6: { fontSize: "min(20px, 5.5vw)", lineHeight: "28px" },
    body1: { fontSize: "min(16px, 4.5vw)", lineHeight: "18px" },
    body2: { fontSize: "min(14px, 4vw)", lineHeight: "16px" },
  },
  overrides: {
    // MuiOutlinedInput: {
    //   root: {
    //     borderRadius: "26px",
    //   },
    //   input: {
    //     textAlign: "center",
    //   },
    // },
    // MuiButton: {
    //   root: {
    //     borderRadius: "26px",
    //   },
    // },
    MuiPaper: {
      // rounded: {
      //   borderRadius: "16px",
      // },
      root: {
        backgroundColor: "#d9cfa04d",
      },
    },
    // MuiInputLabel: {
    //   formControl: {
    //     width: "calc(100% - 18px)",
    //     textAlign: "center",
    //   },
    //   shrink: {
    //     textAlign: "left",
    //   },
    // },
  },
});
