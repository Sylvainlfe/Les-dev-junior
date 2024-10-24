import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Realisation from "./pages/Realisation";
import Contact from "./pages/Contact";
import Copyright from "./pages/Copyright";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/#realisation",
        element: <Realisation />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/copyright",
        element: <Copyright />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
