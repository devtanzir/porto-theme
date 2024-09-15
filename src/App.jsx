import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import "@fontsource/poppins";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
