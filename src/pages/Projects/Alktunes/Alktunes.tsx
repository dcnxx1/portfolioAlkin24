import backgroundVector from "../../../assets/background-logo-vector.svg";
import DemoArtistPage from "../../../assets/project-assets/alktunes/demos/AlktunesArtistPageDemo.mp4";
import DemoHomeScreen from "../../../assets/project-assets/alktunes/demos/AlktunesHomeDemo.mp4";
import DemoSearchPage from "../../../assets/project-assets/alktunes/demos/AlktunesSearchDemo.mp4";
import GithubButton from "../../../components/Button/GithubButton";
import Container from "../../../components/Container/Container";
import Grid from "../../../components/Grid/Grid";
import TagList from "../../../components/Tags/TagList";
import { InViewContainer } from "../../../components/Video/Video";
import {
  ContentContainer,
  DescriptionText,
  HeaderText,
} from "../Turnt/Turnt.styled";

export default function Alktunes() {
  return (
    <Container
      props={{
        style: {
          backgroundColor: "#3e27b3",
          backgroundImage: `url(${backgroundVector})`,
        },
      }}
    >
      <Grid
        style={{
          gridTemplateColumns: `repeat(1, 1fr)`,
          gap: "100px",
          gridAutoRows: "initial",
        }}
      >
        <Grid.Item
          style={{
            height: "min-content",
          }}
        >
          <ContentContainer style={{}}>
            <ContentContainer style={{ paddingLeft: "9%" }}>
              <HeaderText>Alktunes</HeaderText>
              <h2>Luister naar je favoriete artiesten</h2>
              <DescriptionText>
                Ontdek de ultieme muziek luisterervaring met Alktunes, een
                innovatieve web muziekapplicatie die gebruikers toegang biedt
                tot een uitgebreide bibliotheek van nummers van bekende
                artiesten. Of je nu op zoek bent naar hitlijsttoppers of
                verborgen pareltjes, Alktunes biedt een naadloos platform voor
                het verkennen en genieten van je favoriete muziek.
              </DescriptionText>
              <DescriptionText>
                Blijf vooroplopen met de dynamische homepage van Alktunes, elke
                drie uur vernieuwd om de nieuwste releases en trending tracks te
                laten zien. Ontdek nieuwe favorieten en blijf in contact met het
                steeds veranderende muzieklandschap.
              </DescriptionText>
            </ContentContainer>
            <InViewContainer source={DemoHomeScreen} />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item style={{ height: "min-content" }}>
          <ContentContainer>
            <ContentContainer style={{ paddingLeft: "9%" }}>
              <h2>Efficiënt Beheer van Afspeellijsten</h2>
              <DescriptionText>
                Voer moeiteloos Create, Read, Update, en Delete (CRUD)
                bewerkingen uit op afspeellijsten. Pas je muziekcollecties aan
                naar jouw stemming of gelegenheid, met de mogelijkheid om
                nummers toe te voegen, te verwijderen en te herschikken op jouw
                gemak.
              </DescriptionText>
              <h2>Artiestenprofielen</h2>
              <DescriptionText>
                Duik dieper in de wereld van muziek met gedetailleerde
                artiestenprofielen, waar je hun discografie kunt verkennen en je
                favoriete nummers opnieuw kunt beluisteren. Alktunes biedt een
                platform voor artiesten om hun talent te tonen en in contact te
                komen met hun publiek.
              </DescriptionText>
            </ContentContainer>
            <InViewContainer
              style={{
                width: "100%",
              }}
              source={DemoArtistPage}
            />
          </ContentContainer>
        </Grid.Item>

        <Grid.Item
          style={{
            height: "min-content",
          }}
        >
          <ContentContainer>
            <ContentContainer style={{ paddingLeft: "9%" }}>
              <h2>Krachtige Zoekmogelijkheden met AWS OpenSearch:</h2>
              <DescriptionText>
                Alktunes integreert de geavanceerde AWS OpenSearch-service om
                gebruikers een ongeëvenaarde zoekervaring te bieden. Met
                OpenSearch kunnen gebruikers snel en nauwkeurig door de
                uitgebreide muziekbibliotheek navigeren en specifieke nummers,
                artiesten of albums vinden.
              </DescriptionText>
              <DescriptionText>
                Dankzij de krachtige zoekfunctionaliteit van OpenSearch worden
                zoekopdrachten in realtime verwerkt, waardoor gebruikers direct
                relevante resultaten ontvangen.
              </DescriptionText>
              <DescriptionText>
                OpenSearch maakt gebruik van geavanceerde algoritmen voor
                tekstanalyse en matching, waardoor zelfs spelfouten of
                synoniemen worden opgevangen, zodat gebruikers altijd de
                gewenste resultaten krijgen.
              </DescriptionText>
            </ContentContainer>
            <InViewContainer
              style={{
                width: "100%",
              }}
              source={DemoSearchPage}
            />
            <ContentContainer
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TagList style={{ flex: 1 }}>
                <TagList.Tag tagName="React" />
                <TagList.Tag tagName="Javascript" />
                <TagList.Tag tagName="Figma" />
                <TagList.Tag tagName="Excalidraw" />
                <TagList.Tag tagName="AWS" />
                <TagList.Tag tagName="S3" />
                <TagList.Tag tagName="Lambda" />
                <TagList.Tag tagName="AWS API Gateway" />
                <TagList.Tag tagName="MySQL" />
                <TagList.Tag tagName="NodeJS" />
                <TagList.Tag tagName="ExpressJS" />
                <TagList.Tag tagName="AWS OpenSearch" />
                <TagList.Tag tagName="Full-Stack" />
                <TagList.Tag tagName="SASS" />
              </TagList>
              <TagList style={{ flex: 1 }} title="Links">
                <GithubButton href="#" title="Front-End" />
                <GithubButton href="#" title="Back-End" />
                <GithubButton href="#" title="Demo Video" />
              </TagList>
            </ContentContainer>
          </ContentContainer>
        </Grid.Item>
      </Grid>
    </Container>
  );
}
