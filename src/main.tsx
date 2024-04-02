import "normalize-css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App/App.tsx";
import Foooter from "./components/Footer/Footer.tsx";
import Nav from "./nav/Nav.tsx";
import Alktunes from "./pages/Projects/Alktunes/Alktunes.tsx";
import CacaoChat from "./pages/Projects/CacaoChat/CacaoChat.tsx";
import Kelli from "./pages/Projects/Kelli/Kelli";
import QRCode from "./pages/Projects/QRCode/QRCode.tsx";
import Turnt from "./pages/Projects/Turnt/Turnt";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/">
          <Route path="turnt" element={<Turnt />} />
          <Route path="alktunes" element={<Alktunes />} />
          <Route path="kelli" element={<Kelli />} />
          <Route path="cacaochat" element={<CacaoChat />} />
          <Route path="qrcode" element={<QRCode />} />
        </Route>
      </Routes>
      <Foooter />
    </BrowserRouter>
  </React.StrictMode>
);
