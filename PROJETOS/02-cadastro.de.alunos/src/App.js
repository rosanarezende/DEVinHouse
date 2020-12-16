import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./styles/theme";

import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Home />
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
