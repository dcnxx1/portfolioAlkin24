import DemoAddToPlaylist from "../../../assets/project-assets/turnt/videos/DemoAddPlaylist.mp4";
import DemoHomeScreen from "../../../assets/project-assets/turnt/videos/DemoHomeScreen.mp4";
import DemoUpload from "../../../assets/project-assets/turnt/videos/DemoUpload.mp4";
import Container from "../../../components/Container/Container";
import Grid from "../../../components/Grid/Grid";
import { ContentContainer, DescriptionText, HeaderText } from "./Turnt.styled";

import patterns from "../../../assets/background-logo-vector.svg";
import { InViewContainer } from "../../../components/Video/Video";
import { CSSProperties } from "styled-components";

import code from "../../../assets/code.png";
import GithubButton from "../../../components/Button/GithubButton";
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
              Zodat jij alle wijzingen die jij maakt in je playlist gelijk weer
              kunt terugzien.
            </DescriptionText>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <HeaderText>Upload je muziekvideo of audio</HeaderText>

            <DescriptionText>
              Breng je muziek tot leven door je video- of audiobestand te
              uploaden en selecteer de perfecte 30 seconden die je wilt delen
              met gebruikers.
            </DescriptionText>
            <DescriptionText>
              Personaliseer je nummer verder door een passende coverfoto te
              kiezen die aansluit bij de sfeer en het genre, waardoor je
              gemakkelijker te vinden bent voor je publiek
            </DescriptionText>
            <span
              style={{ display: "block", background: "white", height: 2 }}
            ></span>
            <DescriptionText>
              Dankzij de kracht van FFMpeg wordt automatisch een tijdlijn
              gecreëerd voor elke video, waardoor elke upload een unieke
              ervaring wordt
            </DescriptionText>
            <DescriptionText>
              De geselecteerde tijd die de artiest kiest wordt als metadata aan
              de video toegevoegd. Vervolgens wordt de video verzonden naar de
              S3-bucket, die een Lambda-functie activeert met de metadata. De
              Lambda-functie start AWS MediaConvert op met de metadata, zodat de
              30 seconden clip in m3u8-formaat wordt gecreëerd. Nadat dit proces
              is voltooid, wordt de video teruggeplaatst in de S3-bucket, zodat
              de React Native-app deze kan ophalen met CloudFront CDN
            </DescriptionText>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <InViewContainer source={DemoUpload} />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item style={gridStyle}>
          <GithubButton href="https://github.com/dcnxx1/Turnt" title="Code" />
        </Grid.Item>
      </Grid>
    </Container>
  );
}

const gridStyle: CSSProperties = {
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",

  gridColumn: "span 2",
};
