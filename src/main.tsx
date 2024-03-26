import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import "normalize-css";
import {
  BrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Nav from "./nav/Nav.tsx";
import Turnt from "./pages/Projects/Turnt/Turnt.tsx";
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
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/">
          <Route path="turnt" element={<Turnt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
