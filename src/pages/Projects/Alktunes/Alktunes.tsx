import Container from "../../../components/Container/Container";
import VectorBackground from "../../../assets/background-logo-vector.svg";
import DemoHomeScreen from "../../../assets/project-assets/alktunes/demos/AlktunesHomeDemo.mp4";
import DemoArtistPage from "../../../assets/project-assets/alktunes/demos/AlktunesArtistPageDemo.mp4";
import DemoSearchPage from "../../../assets/project-assets/alktunes/demos/AlktunesSearchDemo.mp4";
import {
  ContentContainer,
  DemoContainer,
  Grid,
  OverviewContainer,
  TechnicalOverviewContainer,
} from "./Alktunes.styled";
import { InViewContainer } from "../../../components/Video/Video";
import {
  DescriptionText,
  HeaderText,
  SubHeaderText,
} from "../Turnt/Turnt.styled";
import TagList from "../../../components/Tags/TagList";
import GithubButton from "../../../components/Button/GithubButton";

export default function Alktunes() {
  return (
    <Container
      props={{
        style: {
          gap: 20,
          backgroundImage: `url(${VectorBackground})`,
          backgroundColor: "#3e27b9",
        },
      }}
    >
      <Grid>
        <OverviewContainer>
          <ContentContainer>
            <HeaderText>Alktunes</HeaderText>
            <SubHeaderText>Luister naar je favoriete artiesten</SubHeaderText>
            <DescriptionText>
              Ontdek de ultieme muziek luisterervaring met Alktunes, een
              innovatieve web muziekapplicatie die gebruikers toegang biedt tot
              een uitgebreide bibliotheek van nummers van bekende artiesten. Of
              je nu op zoek bent naar hitlijsttoppers of verborgen pareltjes,
              Alktunes biedt een naadloos platform voor het verkennen en
              genieten van je favoriete muziek.
            </DescriptionText>
          </ContentContainer>
        </OverviewContainer>
        <DemoContainer>
          <ContentContainer
            style={{
              display: "flex",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InViewContainer
              style={{ width: "100%" }}
              source={DemoHomeScreen}
            />
          </ContentContainer>
        </DemoContainer>
        <TechnicalOverviewContainer>
          <ContentContainer>
            <DescriptionText>
              Blijf vooroplopen met de dynamische homepage van Alktunes, elke
              drie uur vernieuwd om de nieuwste releases en trending tracks te
              laten zien. Ontdek nieuwe favorieten en blijf in contact met het
              steeds veranderende muzieklandschap.
            </DescriptionText>
          </ContentContainer>
        </TechnicalOverviewContainer>
      </Grid>
      <Grid reverse>
        <OverviewContainer>
          <ContentContainer>
            <SubHeaderText>Artiestenprofielen</SubHeaderText>
            <DescriptionText>
              Duik dieper in de wereld van muziek met gedetailleerde
              artiestenprofielen, waar je hun discografie kunt verkennen en je
              favoriete nummers opnieuw kunt beluisteren.
            </DescriptionText>
          </ContentContainer>
        </OverviewContainer>
        <DemoContainer>
          <ContentContainer
            style={{
              display: "flex",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InViewContainer
              style={{
                width: "100%",
              }}
              source={DemoArtistPage}
            />
          </ContentContainer>
        </DemoContainer>
        <TechnicalOverviewContainer>
          <SubHeaderText>Efficiënt Beheer van Afspeellijsten</SubHeaderText>
          <DescriptionText>
            Voer moeiteloos Create, Read, Update, en Delete (CRUD) bewerkingen
            uit op afspeellijsten. Pas je muziekcollecties aan naar jouw
            stemming of gelegenheid, met de mogelijkheid om nummers toe te
            voegen, te verwijderen en te herschikken op jouw gemak.
          </DescriptionText>
        </TechnicalOverviewContainer>
      </Grid>
      <Grid>
        <OverviewContainer>
          <ContentContainer
            style={{
              display: "grid",
              placeContent: "flex-end",
            }}
          >
            <SubHeaderText>
              Krachtige Zoekmogelijkheden met AWS OpenSearch:
            </SubHeaderText>
            <DescriptionText>
              Alktunes integreert de geavanceerde AWS OpenSearch-service om
              gebruikers een ongeëvenaarde zoekervaring te bieden. Met
              OpenSearch kunnen gebruikers snel en nauwkeurig door de
              uitgebreide muziekbibliotheek navigeren en specifieke nummers,
              artiesten of albums vinden.
            </DescriptionText>
          </ContentContainer>
        </OverviewContainer>
        <DemoContainer>
          <ContentContainer
            style={{
              display: "flex",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InViewContainer
              style={{ width: "100%" }}
              source={DemoSearchPage}
            />
          </ContentContainer>
        </DemoContainer>
        <TechnicalOverviewContainer>
          <ContentContainer>
            <DescriptionText>
              Dankzij de krachtige zoekfunctionaliteit van OpenSearch worden
              zoekopdrachten in realtime verwerkt, waardoor gebruikers direct
              relevante resultaten ontvangen.
            </DescriptionText>
            <DescriptionText>
              OpenSearch maakt gebruik van geavanceerde algoritmen voor
              tekstanalyse en matching, waardoor zelfs spelfouten of synoniemen
              worden opgevangen, zodat gebruikers altijd de gewenste resultaten
              krijgen.
            </DescriptionText>
            <span style={{ padding: 10 }}></span>

            <TagList style={{marginBottom: 10}}>
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
        </TechnicalOverviewContainer>
      </Grid>
    </Container>
  );
}
