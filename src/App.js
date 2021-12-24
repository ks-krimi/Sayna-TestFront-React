import React from "react";
import Routes from "./routes";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { mui } from "./theme/mui";

function App() {
  const theme = createTheme(mui);
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
