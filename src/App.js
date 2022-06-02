import React from "react";
import Navbar from "./components/layout/Navbar";
import Controls from "./components/layout/Controls";

import { Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/mainTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container maxWidth="lg">
          <Controls />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
