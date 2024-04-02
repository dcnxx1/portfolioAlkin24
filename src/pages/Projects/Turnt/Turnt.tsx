import Container from "../../../components/Container/Container";
import Grid from "../../../components/Grid/Grid";
import patterns from "../../../assets/background-logo-vector.svg";
import { InViewContainer } from "../../../components/Video/Video";
import {
  DemoContainer,
  OverViewContainer,
  TechincalOverviewContainer,
} from "../../../components/Grid/Grid.styled";
import DemoHomeScreen from "../../../assets/project-assets/turnt/videos/DemoHomeScreen.mp4";
import DemoAddPlaylist from "../../../assets/project-assets/turnt/videos/DemoAddPlaylist.mp4";
import DemoUpload from "../../../assets/project-assets/turnt/videos/DemoUpload.mp4";
import { ContentContainer, DescriptionText, HeaderText } from "./Turnt.styled";
import GithubButton from "../../../components/Button/GithubButton";
import TagList from "../../../components/Tags/TagList";

export default function Turnt() {
  return (
    <Container
      props={{
        style: {
          backgroundColor: "#3e27b9",
          backgroundImage: `url(${patterns})`,
        },
      }}
    >
      <Grid>
        <OverViewContainer>
          <ContentContainer style={{ display: "grid", placeContent: "center" }}>
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
          </ContentContainer>
        </OverViewContainer>
        <DemoContainer>
          <InViewContainer
            fallbackSource={DemoHomeScreen}
            source={DemoHomeScreen}
          />
        </DemoContainer>
        <TechincalOverviewContainer>
          <ContentContainer>
            <span
              style={{
                background: "white",
                height: "2px",
                display: "block",
              }}
            ></span>
            <DescriptionText>
              Naadloos geïntegreerd met het iOS-besturingssysteem, stelt Turnt
              je in staat om moeiteloos door je feed te navigeren. Skip nummers,
              speel favorieten opnieuw af of spoel vooruit met gemak - allemaal
              vanaf je Apple-oortjes of Apple Watch.
            </DescriptionText>
          </ContentContainer>
        </TechincalOverviewContainer>
      </Grid>

      <Grid reverse>
        <OverViewContainer>
          <ContentContainer style={{ display: "grid", placeContent: "center" }}>
            <HeaderText>Soepel Streamen</HeaderText>
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
          </ContentContainer>
        </OverViewContainer>
        <DemoContainer>
          <InViewContainer source={DemoAddPlaylist} />
        </DemoContainer>
        <TechincalOverviewContainer>
          <ContentContainer>
            <span
              style={{
                background: "white",
                height: "2px",
                display: "block",
              }}
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
        </TechincalOverviewContainer>
      </Grid>
      <Grid>
        <OverViewContainer>
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
          </ContentContainer>
        </OverViewContainer>
        <DemoContainer>
          <ContentContainer>
            <InViewContainer source={DemoUpload} />
          </ContentContainer>
        </DemoContainer>
        <TechincalOverviewContainer>
          <ContentContainer>
            <DescriptionText>
              <span
                style={{ display: "block", background: "white", height: 2 }}
              ></span>
              <br />
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
            <TagList>
              <TagList.Tag tagName="Bare React Native" />
              <TagList.Tag tagName="Prisma" />
              <TagList.Tag tagName="MySQL" />
              <TagList.Tag tagName="Docker" />
              <TagList.Tag tagName="Javascript" />
              <TagList.Tag tagName="AWS" />
              <TagList.Tag tagName="FFmpeg" />
              <TagList.Tag tagName="React Query" />
              <TagList.Tag tagName="S3" />
              <TagList.Tag tagName="Lambda" />
              <TagList.Tag tagName="AWS MediaConvert" />
              <TagList.Tag tagName="CloudFront" />
              <TagList.Tag tagName="Typescript" />
              <TagList.Tag tagName="Github" />
              <TagList.Tag tagName="Photoshop" />
              <TagList.Tag tagName="Adobe Premiere Pro" />
              <TagList.Tag tagName="Figma" />
              <TagList.Tag tagName="Excalidraw" />
            </TagList>
            <TagList title="Links">
              <GithubButton href="#" title="Back-end" />
              <GithubButton href="#" title="Front-end" />
            </TagList>
          </ContentContainer>
        </TechincalOverviewContainer>
      </Grid>
    </Container>
  );
}
