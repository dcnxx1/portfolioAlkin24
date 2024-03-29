import Container from "../../../components/Container/Container";
import Grid from "../../../components/Grid/Grid";
import DemoHomeScreen from "../../../assets/project-assets/turnt/videos/DemoHomeScreen.mp4";
import DemoUpload from "../../../assets/project-assets/turnt/videos/DemoUpload.mp4";
import DemoAddToPlaylist from "../../../assets/project-assets/turnt/videos/DemoAddPlaylist.mp4";
import { ContentContainer, DescriptionText, HeaderText } from "./Turnt.styled";

import patterns from "../../../assets/background-logo-vector.svg";
import Video from "../../../components/Video/Video";

export default function Turnt() {
  return (
    <Container
      props={{
        style: {
          backgroundColor: "#3e27b3",
          backgroundImage: `url(${patterns})`,
        },
      }}
    >
      <Grid
        style={{
          gap: " 20px",
        }}
      >
        <Grid.Item>
          <ContentContainer>
            <HeaderText>Turnt</HeaderText>
            <DescriptionText style={{ color: "#ddd0d0" }}>
              Turnt is een muziekapplicatie gebouwd met{" "}
              <span style={{ color: "blue" }}>React Native</span> en{" "}
              <span style={{ color: "red" }}>NestJS</span>, geïnspireerd door
              TikTok. Gebruikers kunnen moeiteloos nieuwe liedjes en artiesten
              ontdekken en met een druk op de knop de beste 30 seconden
              beluisteren, geselecteerd door de artiesten zelf.
            </DescriptionText>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <Video source={DemoHomeScreen} />
          </ContentContainer>
        </Grid.Item>

        <Grid.Item>
          <ContentContainer style={{ overflow: "hidden", lineHeight: 0 }}>
            <Video source={DemoAddToPlaylist} />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <h1>Nadeloos streamen</h1>
            <h2>
              Stream opgeslagen nummers op en beluister ze met je scherm uit
            </h2>
            <h3 style={{ color: "white", fontWeight: "normal" }}>
              Ontdek een wereld van muziek en video's binnen handbereik. Blader
              door je eigen verzameling van opgeslagen nummers en geüploade
              liedjes. Wanneer je een nummer selecteert, opent zich een venster
              naar de bijpassende muziekvideo, rechtstreeks vanuit je
              bibliotheek.
            </h3>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <HeaderText>Upload je muziekvideo of audio</HeaderText>
            <DescriptionText>
              Selecteer de beste 30 seconden die jij wilt dat de gebruiker
              beluistert. Kies een genre, kies een cover foto en upload je
              bestand.
            </DescriptionText>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <Video source={DemoUpload} />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item style={{ width: "100%", border: "2px solid white" }}>
          <HeaderText>Yo</HeaderText>
        </Grid.Item>
      </Grid>
    </Container>
  );
}
