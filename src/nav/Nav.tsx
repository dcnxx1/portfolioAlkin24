import "./styles.css";
import logo from "../assets/logo.png";

import {
  Container,
  InnerContainer,
  Logo,
  LogoContainer,
  Content,
  NavContent,
  BurgerMenuContainer,
  BurgerMenu,
} from "./Nav.styled";
import burgermenu from "../assets/burger-bar.png";
import { NavLink } from "react-router-dom";
import { DescriptionText } from "../pages/Projects/Turnt/Turnt.styled";

export default function Nav({
  onPressToggleBurgerMenu,
}: {
  onPressToggleBurgerMenu: () => void;
}) {
  return (
    <Container>
      <InnerContainer>
        <Content>
          <LogoContainer>
            <NavLink to="/">
              <Logo src={logo} />
            </NavLink>
          </LogoContainer>
          <NavContent>
            <NavLink to="Hero">
              <DescriptionText>Intro</DescriptionText>
            </NavLink>
            <NavLink to="About">
              <DescriptionText>Over</DescriptionText>
            </NavLink>
            <NavLink to="Projects">
              <DescriptionText>Projecten</DescriptionText>
            </NavLink>
            <NavLink to="#">
              <DescriptionText>CV</DescriptionText>
            </NavLink>
          </NavContent>
          <BurgerMenuContainer>
            <BurgerMenu onClick={onPressToggleBurgerMenu} src={burgermenu} />
          </BurgerMenuContainer>
        </Content>
      </InnerContainer>
    </Container>
  );
}
