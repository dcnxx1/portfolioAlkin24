
import { Container, InnerContainer, Content, Image } from "./Hero.styled";

import me from "../../assets/me.jpg";

import { DescriptionText, HeaderText } from "../Projects/Turnt/Turnt.styled";

export default function Hero() {
  return (
    <Container>
      <InnerContainer>
        <Content>
          <HeaderText>Alkin Sali</HeaderText>
          <HeaderText>Full Stack Ontwikkelaar</HeaderText>
          <Image style={{ borderRadius: "50%"}} src={me} />
          <DescriptionText style={{ fontSize: 22 }}>
            Zelf geleerde Full-stack Developer met meer dan twee jaar ervaring
            in het ontwikkelen van schaalbare applicaties
          </DescriptionText>
          <DescriptionText style={{ fontSize: 22, fontWeight: "normal" }}>
            Bekwaam met diverse technologieen zoals React, React Native, NodeJS,
            AWS, Cloud Computing, Front-end en Back-end ontwikkeling.
          </DescriptionText>
        </Content>
      </InnerContainer>
    </Container>
  );
}
