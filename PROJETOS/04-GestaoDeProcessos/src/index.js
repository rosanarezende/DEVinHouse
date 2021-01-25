import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import "./index.css";

import Routes from "./routes";
import theme from "./utils/theme";
import store from "./redux/store";

ReactDOM.render(
  <>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    </Provider>
  </>,
  document.getElementById("root")
);
