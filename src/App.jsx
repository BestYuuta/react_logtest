// App.jsx
import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import SocialMediaProfile from "./SocialMediaProfile";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#fff" ,
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* Reset CSS cho đồng nhất */}
      <CssBaseline />

      {/* Hiển thị trang SocialMediaProfile */}
      <SocialMediaProfile />
    </ThemeProvider>
  );
}

export default App;