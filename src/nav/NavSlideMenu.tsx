import {
  DescriptionText,
  HeaderText,
} from "../pages/Projects/Turnt/Turnt.styled";

import {
  Container,
  Content,
  MenuContainer,
  MenuLink,
} from "./NavSlideMenu.styled";
interface Props {
  isBurgerMenuOpen: boolean;
  toggleBurgerMenu: () => void;
}

export default function NavSlideMenu({
  isBurgerMenuOpen,
  toggleBurgerMenu,
}: Props) {
  return (
    <Container isBurgerMenuOpen={isBurgerMenuOpen}>
      <Content>
        <HeaderText>Menu</HeaderText>
        <MenuContainer>
          <MenuLink onClick={toggleBurgerMenu} href="/#Hero">
            <DescriptionText>Home</DescriptionText>
          </MenuLink>
          <MenuLink onClick={toggleBurgerMenu} href="/#About">
            <DescriptionText>Over</DescriptionText>
          </MenuLink>
          <MenuLink onClick={toggleBurgerMenu} href="/#Projects">
            <DescriptionText>Projecten</DescriptionText>
          </MenuLink>
          <MenuLink onClick={toggleBurgerMenu} href="/">
            <DescriptionText>CV</DescriptionText>
          </MenuLink>
        </MenuContainer>
      </Content>
    </Container>
  );
}
