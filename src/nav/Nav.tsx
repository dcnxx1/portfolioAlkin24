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
  NavLink,
} from "./Nav.styled";
import burgermenu from "../assets/burger-bar.png";

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
            <NavLink href="/">
              <Logo src={logo} />
            </NavLink>
          </LogoContainer>
          <NavContent>
            <NavLink href="/#Hero">
              <DescriptionText>Intro</DescriptionText>
            </NavLink>
            <NavLink href="/#About">
              <DescriptionText>Over</DescriptionText>
            </NavLink>
            <NavLink href="/#Projects">
              <DescriptionText>Projecten</DescriptionText>
            </NavLink>
            <NavLink href="/cv">
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
