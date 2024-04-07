import styled from "styled-components";

import { Link } from "react-router-dom";
import { DescriptionText } from "../pages/Projects/Turnt/Turnt.styled";
import BackgroundVector from "../assets/background-logo-vector.svg";
interface ContainerProps {
  isBurgerMenuOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #3523a9;
  background-image: url(${BackgroundVector});
  width: 60%;
  height: 100%;
  right: 0;
  position: absolute;
  z-index: 12000;
  transition: right 4s ease-in linear;
  @media screen and (min-width: 900px) {
    right: -1200px;
  }
`;

export const Content = styled.div`
  position: sticky;
  padding: 5px;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
`;
export const MenuContainer = styled.div``;

export const MenuLink = styled.a`
  font-size: 14px;
  color: white;
  text-decoration: none;

  scroll-margin-top: 6rem;
  overflow: initial !important;
  ${DescriptionText} {
    font-size: 28px;
    padding-block: 20px;
  }
`;
