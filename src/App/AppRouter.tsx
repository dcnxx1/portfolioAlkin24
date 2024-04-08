import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

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
import PageNotFound from "../pages/Projects/PageNotFound/PageNotFound";
import ScrollToTopOnRouteChange from "../components/ScrollToTop/ScrollToTop";
import CV from "../pages/CV/CV";

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
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/projects/">
          <Route path="" element={<Navigate to={"/#Projects"} />} />
          <Route path="turnt" element={<Turnt />}>
            <Route path="*" element={<Turnt />} />
          </Route>
          <Route path="alktunes" element={<Alktunes />}>
            <Route path="*" element={<Alktunes />} />
          </Route>
          <Route path="kelli" element={<Kelli />}>
            <Route path="*" element={<Kelli />} />
          </Route>
          <Route path="cacaochat" element={<CacaoChat />}>
            <Route path="*" element={<CacaoChat />} />
          </Route>
          <Route path="qrcode" element={<QRCode />}>
            <Route path="*" element={<QRCode />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="cv" element={<CV />}>
          <Route path="*" element={<CV />} />
        </Route>
        <Route path="*" element={<HomeScreen />} />
      </Routes>

      <Foooter />
    </BrowserRouter>
  );
}
