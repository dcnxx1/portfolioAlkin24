import { useCallback, useState } from "react";
import backgroundVector from "../../../assets/background-logo-vector.svg";

import DemoCharacters from "../../../assets/project-assets/kelli/demo/DemoCharacters.mp4";
import DemoKevin from "../../../assets/project-assets/kelli/demo/DemoKevin.mp4";
import ImageCharacters from "../../../assets/project-assets/kelli/images/DemoCharacters.png";
import ImageKevin from "../../../assets/project-assets/kelli/images/DemoKevin.png";

import GithubButton from "../../../components/Button/GithubButton";
import Container from "../../../components/Container/Container";
import TagList from "../../../components/Tags/TagList";
import { InViewContainer } from "../../../components/Video/Video";
import {
  ContentContainer,
  DescriptionText,
  HeaderText,
  InfoContainer,
  MobileGrid,
  PhoneContainer,
  SubHeaderText,
  TechContainer,
} from "../Turnt/Turnt.styled";
import DocumentTitle from "react-document-title";
export default function Kelli() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleIsMuted = useCallback(() => {
    console.log("setting muted to :>>", isMuted);
    setIsMuted(!isMuted);
  }, [isMuted]);

  return (
    <DocumentTitle title="Alkin Sali - Kelli">
      <Container
        props={{
          style: {
            backgroundColor: "#3e27b3",
            backgroundImage: `url(${backgroundVector})`,
          },
        }}
      >
        <MobileGrid>
          <InfoContainer>
            <ContentContainer>
              <HeaderText>Kelli</HeaderText>
              <SubHeaderText>
                Laat je woorden tot leven komen met deze simpele Text To Speech
                App!
              </SubHeaderText>
              <DescriptionText>
                Kelli biedt een meeslepende en gepersonaliseerde ervaring met
                haar uitgebreide selectie van stemkarakters en nationaliteiten.
                Of je nu op zoek bent naar een krachtige Amerikaanse stem, een
                charmante Britse intonatie, of een levendige Franse klank, Kelli
                heeft het allemaal!
              </DescriptionText>
            </ContentContainer>
          </InfoContainer>
          <PhoneContainer>
            <InViewContainer
              fallbackImage={ImageKevin}
              onClick={toggleIsMuted}
              muted={isMuted}
              style={{
                borderRadius: "80px",
              }}
              source={DemoKevin}
            />
          </PhoneContainer>
          <TechContainer>
            <ContentContainer>
              <DescriptionText>
                Gebouwd met React Native en Expo, Kelli maakt ook gebruik van
                een NestJS backend. Met een API kunnen de client en de server
                met elkaar communiceren.
              </DescriptionText>
            </ContentContainer>
          </TechContainer>
        </MobileGrid>
        <MobileGrid reverse>
          <InfoContainer>
            <ContentContainer>
              <HeaderText>Kies uit verschillende stemmen</HeaderText>
              <DescriptionText>
                Met Kelli kun je je boodschap echt laten opvallen door te kiezen
                uit een scala aan stemmen die perfect passen bij jouw doelgroep
                en boodschap. Van zakelijk en serieus tot speels en enthousiast,
                Kelli heeft de stem die je nodig hebt om je verhaal tot leven te
                brengen.
              </DescriptionText>
            </ContentContainer>
          </InfoContainer>
          <PhoneContainer>
            <InViewContainer
              fallbackImage={ImageCharacters}
              style={{
                borderRadius: "80px",
              }}
              source={DemoCharacters}
            />
          </PhoneContainer>
          <TechContainer>
            <ContentContainer style={{ paddingBottom: 20 }}>
              <DescriptionText>
                Kelli maakt gebruik van AWS Polly voor het genereren van
                stemmen. AWS Polly is een krachtige tekst-naar-spraakdienst die
                natuurlijk klinkende stemmen biedt in verschillende talen en
                accenten.
              </DescriptionText>
            </ContentContainer>
            <ContentContainer>
              <TagList style={{ paddingBottom: 20 }}>
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
                <GithubButton
                  href="https://github.com/dcnxx1/kelli"
                  title="Code"
                />
              </TagList>
            </ContentContainer>
          </TechContainer>
        </MobileGrid>
      </Container>
    </DocumentTitle>
  );
}
