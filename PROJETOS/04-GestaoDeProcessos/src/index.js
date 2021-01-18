import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import "./index.css";

import Routes from "./routes";
import theme from "./utils/theme";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
