import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#32de84",
      light: "#66FF00",
      dark: "#17B169",
    },
    secondary: {
      main: "#214FF3",
      light: "#6FE5FF",
      dark: "#002577",
    },
  },
  typography: {
    fontFamily: '"Roboto", "system-ui", "-apple-system", "BlinkMacSystemFont"',
    h1: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: 700,
    },
    h2: {
      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
      fontWeight: 700,
    },
    h3: {
      fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)",
      fontWeight: 700,
    },
    h4: {
      fontSize: "clamp(1rem, 2vw, 1.875rem)",
      fontWeight: 700,
    },
    h5: {
      fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
      fontWeight: 700,
    },
  },
});
