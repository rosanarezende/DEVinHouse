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
    text: {
      primary: "#01402E",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },

  typography: {
    fontSize: 14,
    h1: { fontSize: "min(96px, 12vw)", color: "rgba(0, 0, 0, 0.7)" },
    h2: {
      fontSize: "min(60px, 10vw)",
      color: "rgba(87, 30, 94)",
      fontWeight: "bolder",
    },
    h3: { fontSize: "min(48px, 8vw)", color: "#591521", fontWeight: "revert" }, //fontWeight: "bold"
    h4: { fontSize: "min(34px, 7vw)" },
    h5: { fontSize: "min(24px, 6.5vw)", lineHeight: "33px" },
    h6: { fontSize: "min(20px, 5.5vw)", lineHeight: "28px", color: "#591521" },
    body1: { fontSize: "min(16px, 4.5vw)", lineHeight: "18px" },
    body2: { fontSize: "min(14px, 4vw)", lineHeight: "16px" },
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#EFE8DD",
      },
    },
  },
});
