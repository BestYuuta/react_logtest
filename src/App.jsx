import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import SocialMediaProfile from "./SocialMediaProfile"; // Updated import

const theme = createTheme({
  palette: {
    background: {
      default: "#f4f4f4",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SocialMediaProfile /> {/* Updated component */}
    </ThemeProvider>
  );
};

export default App;