import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import "normalize-css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./nav/Nav.tsx";
import Turnt from "./pages/Projects/Turnt.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Turnt />,
    children: [
      {
        path: "turnt",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
  </React.StrictMode>
);
