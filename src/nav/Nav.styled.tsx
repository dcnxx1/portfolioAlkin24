import styled from "styled-components";
import { device } from "../breakpoints";

export const Container = styled.nav`
  background: black;
  height: 75px;
  position: sticky;
  position: -webkit-sticky;
  z-index: 9999;
  top: 0;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  @media ${device.lg} {
    max-width: 900px;
  }
  @media ${device.md} {
    max-width: 600px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
`;

export const LogoContainer = styled.div``;

export const Logo = styled.img`
  width: 75px;
`;

export const NavContent = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${device.md} {
    display: none;
  }
`;
export const NavLink = styled.a`
  text-decoration: none;
`;

export const BurgerMenuContainer = styled.div`
  display: none;
  @media ${device.md} {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const BurgerMenu = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
