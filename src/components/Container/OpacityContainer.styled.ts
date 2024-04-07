import { styled } from "styled-components";

interface Props {
  isSlideMenuOpen: boolean;
}
export const OpacityContainer = styled.div<Props>`
  background: black;
  display: ${({ isSlideMenuOpen }) => (isSlideMenuOpen ? "block" : "none")};
  opacity: 0.8;
  transition: display 2s ease-in;
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
`;
