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
      <InnerContainer>
        <Grid>
          <Grid.Item>
            <ContentContainer>
              <HeaderText>Kelli</HeaderText>
              <h2>
                Laat je woorden tot leven komen met deze simpele Text To Speech
                App!
              </h2>
              <DescriptionText>
                Kelli biedt een meeslepende en gepersonaliseerde ervaring met
                haar uitgebreide selectie van stemkarakters en nationaliteiten.
                Of je nu op zoek bent naar een krachtige Amerikaanse stem, een
                charmante Britse intonatie, of een levendige Franse klank, Kelli
                heeft het allemaal!
              </DescriptionText>
              <span
                style={{ display: "block", height: 2, background: "white" }}
              ></span>
              <DescriptionText>
                Gebouwd met React Native en Expo, Kelli maakt ook gebruik van
                een NestJS backend. Met een API kunnen de client en de server
                met elkaar communiceren.
              </DescriptionText>
            </ContentContainer>
          </Grid.Item>
          <Grid.Item>
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
          </Grid.Item>

          <Grid.Item>
            <ContentContainer>
              <InViewContainer
                style={{
                  borderRadius: "80px",
                }}
                source={DemoCharacters}
              />
            </ContentContainer>
          </Grid.Item>
          <Grid.Item>
            <ContentContainer>
              <HeaderText>Kies uit verschillende stemmen</HeaderText>
              <DescriptionText>
                Met Kelli kun je je boodschap echt laten opvallen door te kiezen
                uit een scala aan stemmen die perfect passen bij jouw doelgroep
                en boodschap. Van zakelijk en serieus tot speels en enthousiast,
                Kelli heeft de stem die je nodig hebt om je verhaal tot leven te
                brengen.
              </DescriptionText>
              <span
                style={{ display: "block", height: 2, background: "white" }}
              ></span>
              <DescriptionText>
                Kelli maakt gebruik van AWS Polly voor het genereren van
                stemmen. AWS Polly is een krachtige tekst-naar-spraakdienst die
                natuurlijk klinkende stemmen biedt in verschillende talen en
                accenten.
              </DescriptionText>
              <TagList>
                <TagList.Tag tagName="Expo" />
                <TagList.Tag tagName="React Native" />
                <TagList.Tag tagName="AWS" />
                <TagList.Tag tagName="Typescript" />
                <TagList.Tag tagName="Cloud Computing" />
                <TagList.Tag tagName="React" />
                <TagList.Tag tagName="Full-Stack" />
                <TagList.Tag tagName="Back-end" />
              </TagList>
            </ContentContainer>
          </Grid.Item>
          <Grid.Item
            style={{
              gridColumn: "span 2",
            }}
          >
            <GithubButton href="https://github.com/dcnxx1/kelli" title="Code" />
          </Grid.Item>
        </Grid>
      </InnerContainer>
    </Container>
  );
}
