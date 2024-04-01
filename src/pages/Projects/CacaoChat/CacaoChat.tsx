import Container from "../../../components/Container/Container";
import Grid from "../../../components/Grid/Grid";
import {
  ContentContainer,
  DescriptionText,
  HeaderText,
} from "../Turnt/Turnt.styled";
import LogoBackgroundVector from "../../../assets/background-logo-vector.svg";
import CacaoChatDemo from "../../../assets/project-assets/cacaochat/videos/CacaoChatShowcase.mp4";
import { InViewContainer } from "../../../components/Video/Video";
import TagList from "../../../components/Tags/TagList";
import GithubButton from "../../../components/Button/GithubButton";
export default function CacaoChat() {
  return (
    <Container
      props={{
        style: {
          background: `url(${LogoBackgroundVector})`,
          backgroundColor: ` #3e27b3`,
        },
      }}
    >
      <Grid>
        <Grid.Item>
          <ContentContainer>
            <HeaderText>CacaoChat</HeaderText>
            <DescriptionText>
              Chat met iedereen die in een kamer zit.
            </DescriptionText>
            <DescriptionText>
              Met CacaoChat kun je groepen creëren waarin je met andere mensen
              kan chatten. Voer je gebruikersnaam in en de naam van de kamer en
              chat met mensen over de hele wereld!.
            </DescriptionText>
            <span
              style={{
                height: 2,
                display: "block",
                background: "white",
                width: "100%",
              }}
            ></span>
            <DescriptionText>
              CacaoChat is gebouwd met Kotlin in de Android omgeving. Voor de
              backend wordt een NodeJS Express server gebruikt om de client te
              laten communiceren met de back-end. Socket.IO zorgt voor een
              soepele uitwisseling van berichten
            </DescriptionText>
            <TagList>
              <TagList.Tag tagName="Android" />
              <TagList.Tag tagName="Kotlin" />
              <TagList.Tag tagName="NodeJS" />
              <TagList.Tag tagName="ExpressJS" />
              <TagList.Tag tagName="Socket.IO" />
              <TagList.Tag tagName="HTML" />
              <TagList.Tag tagName="CSS" />
              <TagList.Tag tagName="Javascript" />
            </TagList>
            <TagList title="Links">
              <GithubButton href="" title="Front-End" />
              <GithubButton href="" title="Back-End" />
            </TagList>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <InViewContainer style={{ width: "100%" }} source={CacaoChatDemo} />
          </ContentContainer>
        </Grid.Item>
      </Grid>
    </Container>
  );
}
