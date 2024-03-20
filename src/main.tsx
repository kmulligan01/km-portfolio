import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//pages
import Home from "./pages/Home";
import NotFoundPage from "./pages/404";

//styles and fonts
import "./styles/global.css";
import "@fontsource/numans";
import "@fontsource-variable/exo";
import "@fontsource/carme";

//page routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
]);

//customize mui theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#0E2F2D",
    },
    secondary: {
      main: "#2B8C88",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
