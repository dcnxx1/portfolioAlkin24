import { BrowserRouter, Route, Routes } from "react-router-dom";

import Foooter from "../components/Footer/Footer";
import Nav from "../nav/Nav";
import Alktunes from "../pages/Projects/Alktunes/Alktunes";
import CacaoChat from "../pages/Projects/CacaoChat/CacaoChat";
import Kelli from "../pages/Projects/Kelli/Kelli";
import QRCode from "../pages/Projects/QRCode/QRCode";
import Turnt from "../pages/Projects/Turnt/Turnt";

import { useCallback, useEffect, useState } from "react";
import { OpacityContainer } from "../components/Container/OpacityContainer.styled";
import HomeScreen from "../Homescreen/HomeScreen";
import OutsideAlerter from "../hooks/OutsideAlerter";
import useWindowSize from "../hooks/useWindowResize";
import NavSlideMenu from "../nav/NavSlideMenu";

export default function AppRouter() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [width] = useWindowSize();

  const toggleBurgerMenu = useCallback(() => {
    isBurgerMenuOpen ? setIsBurgerMenuOpen(false) : setIsBurgerMenuOpen(true);
  }, [isBurgerMenuOpen]);

  useEffect(() => {
    if (width >= 900) {
      document.body.style.overflowY = "scroll";
      setIsBurgerMenuOpen(false);
    }
  }, [width]);

  useEffect(() => {
    if (isBurgerMenuOpen) {
      document.body.style.overflowY = "hidden";

      return;
    }
    document.body.style.overflowY = "scroll";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isBurgerMenuOpen]);

  return (
    <BrowserRouter>
      {isBurgerMenuOpen && (
        <OutsideAlerter onOutsideClick={toggleBurgerMenu}>
          <NavSlideMenu
            toggleBurgerMenu={toggleBurgerMenu}
            isBurgerMenuOpen={isBurgerMenuOpen}
          />
        </OutsideAlerter>
      )}
      <OpacityContainer isSlideMenuOpen={isBurgerMenuOpen} />
      <Nav onPressToggleBurgerMenu={toggleBurgerMenu} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/projects">
          <Route path="turnt" element={<Turnt />} />
          <Route path="alktunes" element={<Alktunes />} />
          <Route path="kelli" element={<Kelli />} />
          <Route path="cacaochat" element={<CacaoChat />} />
          <Route path="qrcode" element={<QRCode />} />
          <Route path="*" element={<div>Broer...</div>} />
        </Route>
        <Route path="*" element={<div>Errorista</div>} />
      </Routes>

      <Foooter />
    </BrowserRouter>
  );
}
