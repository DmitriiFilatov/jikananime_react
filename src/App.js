import React from "react";
import Navbar from "./components/layout/Navbar";
import Controls from "./components/layout/Controls";
import Footer from "./components/layout/Footer";

import { Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/mainTheme";
import BodyWrapper from "./components/styled/bodyWrapper";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />

        <BodyWrapper>
          <Container maxWidth="lg">
            <Controls />
          </Container>
        </BodyWrapper>

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
