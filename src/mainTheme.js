import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#403c97",
      light: "#6965c3",
      dark: "#2c2e7e",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    h6: {
      fontSize: "1rem",
    },
    h5: {
      fontSize: "1.2rem",
    },
    h4: {
      fontSize: "1.6rem",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
