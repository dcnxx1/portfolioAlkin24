import "./style.css";
import me from "../../assets/me.jpg";
import socialMedias from "../../assets/social_medias.svg";
import { DescriptionText, HeaderText } from "../Projects/Turnt/Turnt.styled";
import {
  Container,
  Content,
  ContentContainer,
  InnerContainer,
  Image,
} from "./About.styled";

export default function About(): JSX.Element {
  return (
    <Container>
      <InnerContainer>
        <ContentContainer>
          <Content>
            <HeaderText>Over mij</HeaderText>
            <DescriptionText>
              Ik ben een zelfgeleerde full-stack ontwikkelaar met meer dan twee
              jaar ervaring in het ontwerpen en bouwen van applicaties. <br />
              <br /> Mijn focus ligt voornamelijk op het creëren van schaalbare
              en goedwerkende oplossingen voor zowel de front-end als de
              back-end van projecten.
            </DescriptionText>
          </Content>
          <Content style={{ display: "grid", placeItems: "center" }}>
            <Image style={{ borderRadius: "50%" }} src={me} />
          </Content>
        </ContentContainer>
        <ContentContainer>
          <Content style={{ display: "grid", placeItems: "center" }}>
            <Image src={socialMedias} />
          </Content>
          <Content>
            <HeaderText>Motivatie</HeaderText>
            <DescriptionText>
              Ik haal veel inspiratie uit bedrijven zoals Snapchat, Instagram,
              Whatsapp en Facebook. <br /> <br />
              Deze bedrijven hebben bewezen een enorme impact te hebben op
              miljoenen gebruikers over de hele wereld. <br /> <br />
              Mijn ultieme doel is om ook zo'n baanbrekende applicatie te
              ontwikkelen die een vergelijkbare impact heeft en het leven van
              veel mensen verbetert.
            </DescriptionText>
          </Content>
        </ContentContainer>
      </InnerContainer>
    </Container>
  );
}
