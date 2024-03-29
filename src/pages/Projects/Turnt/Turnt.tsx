import DemoAddToPlaylist from "../../../assets/project-assets/turnt/videos/DemoAddPlaylist.mp4";
import DemoHomeScreen from "../../../assets/project-assets/turnt/videos/DemoHomeScreen.mp4";
import DemoUpload from "../../../assets/project-assets/turnt/videos/DemoUpload.mp4";
import Container from "../../../components/Container/Container";
import Grid from "../../../components/Grid/Grid";
import { ContentContainer, DescriptionText, HeaderText } from "./Turnt.styled";

import patterns from "../../../assets/background-logo-vector.svg";
import { InViewContainer } from "../../../components/Video/Video";

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
            <h2>Ontdek muziek op een geheel nieuwe manier met Turnt</h2>
            <DescriptionText>
              Turnt is een innovatieve muziekapplicatie gebouwd met React Native
              en NestJS, geïnspireerd door de populaire app TikTok. Wat Turnt
              uniek maakt, is dat gebruikers moeiteloos nieuwe liedjes en
              artiesten kunnen ontdekken en met één druk op de knop de beste 30
              seconden kunnen beluisteren - zorgvuldig geselecteerd door de
              artiesten zelf.
            </DescriptionText>

            <DescriptionText>
              Maar dat is niet alles! Gebruikers hebben ook de mogelijkheid om
              het volledige nummer te beluisteren, met slechts een tik op het
              scherm.
            </DescriptionText>

            <span
              style={{ background: "white", height: "2px", display: "block" }}
            ></span>

            <DescriptionText>
              Naadloos geïntegreerd met het iOS-besturingssysteem, stelt Turnt
              je in staat om moeiteloos door je feed te navigeren. Skip nummers,
              speel favorieten opnieuw af of spoel vooruit met gemak - allemaal
              vanaf je Apple-oortjes of Apple Watch.
            </DescriptionText>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <InViewContainer source={DemoHomeScreen} />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <InViewContainer source={DemoAddToPlaylist} />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <h1>Soepel Streamen</h1>
            <h2>
              Stream opgeslagen nummers op en beluister ze met je scherm uit
            </h2>
            <DescriptionText>
              Ontdek een wereld van muziek en video's binnen handbereik. Blader
              door je eigen verzameling van opgeslagen nummers en geüploade
              liedjes. Wanneer je een nummer selecteert, opent zich een venster
              naar de bijpassende muziekvideo, rechtstreeks vanuit je
              bibliotheek.
            </DescriptionText>
            <span
              style={{ display: "block", background: "white", height: 2 }}
            ></span>
            <DescriptionText>
              Door AWS MediaConvert worden worden alle bestanden naar m3u8
              formaat omgezet, waardoor je snel en met de beste kwaliteit van je
              liedjes kunt genieten.
            </DescriptionText>
            <DescriptionText>
              Voeg liedjes toe aan je afspeellijst en zie ze gelijk terug in je
              playlist. Deze technologie wordt aangedreven door React Query.
              Zodat jij alle wijzingen die jij maakt binnen je playlist gelijk
              weer kunt terugzien.
            </DescriptionText>
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
            <InViewContainer source={DemoUpload} />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item style={{ width: "200%", border: "2px solid white" }}>
          <HeaderText>Yo</HeaderText>
        </Grid.Item>
      </Grid>
    </Container>
  );
}
