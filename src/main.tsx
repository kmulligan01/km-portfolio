import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import NotFoundPage from "./pages/404";
import Contact from "./pages/Contact";

//styles and fonts
import "./styles/global.css";
import "@fontsource/numans";
import "@fontsource-variable/exo";
import "@fontsource/carme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
