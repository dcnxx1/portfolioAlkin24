import Container from "../../../components/Container/Container";
import { InnerContainer } from "../../../components/Container/Container.styled";
import Grid from "../../../components/Grid/Grid";
import {
  ContentContainer,
  DescriptionText,
  HeaderText,
} from "../Turnt/Turnt.styled";
import backgroundVector from "../../../assets/background-logo-vector.svg";
import { InViewContainer } from "../../../components/Video/Video";
import DemoKevin from "../../../assets/project-assets/kelli/demo/DemoKevin.mp4";
import DemoCharacters from "../../../assets/project-assets/kelli/demo/DemoCharacters.mp4";
import { useCallback, useState } from "react";
import GithubButton from "../../../components/Button/GithubButton";
import TagList from "../../../components/Tags/TagList";
import {
  DemoContainer,
  OverViewContainer,
  TechincalOverviewContainer,
} from "../../../components/Grid/Grid.styled";
export default function Kelli() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleIsMuted = useCallback(() => {
    console.log("setting muted to :>>", isMuted);
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <Container
      props={{
        style: {
          backgroundColor: "#3e27b3",
          backgroundImage: `url(${backgroundVector})`,
        },
      }}
    >
      <Grid>
        <OverViewContainer>
          <ContentContainer>
            <HeaderText>Kelli</HeaderText>
            <h2>
              Laat je woorden tot leven komen met deze simpele Text To Speech
              App!
            </h2>
            <DescriptionText>
              Kelli biedt een meeslepende en gepersonaliseerde ervaring met haar
              uitgebreide selectie van stemkarakters en nationaliteiten. Of je
              nu op zoek bent naar een krachtige Amerikaanse stem, een charmante
              Britse intonatie, of een levendige Franse klank, Kelli heeft het
              allemaal!
            </DescriptionText>
          </ContentContainer>
        </OverViewContainer>

        <DemoContainer>
          <ContentContainer>
            <InViewContainer
              onClick={toggleIsMuted}
              muted={isMuted}
              style={{
                borderRadius: "80px",
              }}
              source={DemoKevin}
            />
          </ContentContainer>
        </DemoContainer>
        <TechincalOverviewContainer>
          <ContentContainer>
            <span
              style={{ display: "block", height: 2, background: "white" }}
            ></span>
            <DescriptionText>
              Gebouwd met React Native en Expo, Kelli maakt ook gebruik van een
              NestJS backend. Met een API kunnen de client en de server met
              elkaar communiceren.
            </DescriptionText>
          </ContentContainer>
        </TechincalOverviewContainer>
      </Grid>

      <Grid reverse>
        <OverViewContainer>
          <ContentContainer>
            <HeaderText>Kies uit verschillende stemmen</HeaderText>
            <DescriptionText>
              Met Kelli kun je je boodschap echt laten opvallen door te kiezen
              uit een scala aan stemmen die perfect passen bij jouw doelgroep en
              boodschap. Van zakelijk en serieus tot speels en enthousiast,
              Kelli heeft de stem die je nodig hebt om je verhaal tot leven te
              brengen.
            </DescriptionText>
          </ContentContainer>
        </OverViewContainer>

        <DemoContainer>
          <ContentContainer>
            <InViewContainer
              style={{
                borderRadius: "80px",
              }}
              source={DemoCharacters}
            />
          </ContentContainer>
        </DemoContainer>

        <TechincalOverviewContainer>
          <ContentContainer>
            <span
              style={{ display: "block", height: 2, background: "white" }}
            ></span>
            <DescriptionText>
              Kelli maakt gebruik van AWS Polly voor het genereren van stemmen.
              AWS Polly is een krachtige tekst-naar-spraakdienst die natuurlijk
              klinkende stemmen biedt in verschillende talen en accenten.
            </DescriptionText>
            <TagList>
              <TagList.Tag tagName="Expo" />
              <TagList.Tag tagName="React Native" />
              <TagList.Tag tagName="NestJS" />
              <TagList.Tag tagName="AWS" />
              <TagList.Tag tagName="Typescript" />
              <TagList.Tag tagName="Cloud Computing" />
              <TagList.Tag tagName="React" />
              <TagList.Tag tagName="Full-Stack" />
              <TagList.Tag tagName="Back-end" />
              <TagList.Tag tagName="Excalidraw" />
              <TagList.Tag tagName="Github" />
              <TagList.Tag tagName="Figma" />
            </TagList>
            <TagList title="Links">
              <GithubButton href="" title="Code" />
            </TagList>
          </ContentContainer>
        </TechincalOverviewContainer>
      </Grid>
    </Container>
  );
}
