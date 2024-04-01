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
import DemoHomeScreen from "../../../assets/project-assets/alktunes/demos/AlktunesHomeDemo.mp4";
import DemoArtistPage from "../../../assets/project-assets/alktunes/demos/AlktunesArtistPageDemo.mp4";
import DemoSearchPage from "../../../assets/project-assets/alktunes/demos/AlktunesSearchDemo.mp4";
import GithubButton from "../../../components/Button/GithubButton";
import TagList from "../../../components/Tags/TagList";
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
      <Grid>
        <Grid.Item
          style={{
            border: "2px solid white",
            flex: 1,
            
          }}
        >
          <ContentContainer>
            <HeaderText>Alktunes</HeaderText>
            <h2>Luister naar je favoriete artiesten</h2>
            <DescriptionText>
              Alktunes is een web muziek applicatie die gebruikers de
              mogelijkheid biedt om liedjes van bekende artiesten te
              beluisteren.
            </DescriptionText>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item style={{ border: "2px solid white" }}>
          <ContentContainer>
            <InViewContainer
              style={{
                width: "100%",
              }}
              source={DemoHomeScreen}
            />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <InViewContainer
              style={{
                width: "100%",
              }}
              source={DemoArtistPage}
            />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <h2>Ontdek de muziek van je favoriete artiesten</h2>
            <DescriptionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              blanditiis debitis officia ipsam corrupti ut, libero odio
              consequuntur perspiciatis dolorum dolorem voluptatum eaque esse
              consequatur fugiat officiis tempora aliquid reiciendis eligendi
              qui dignissimos. Commodi eveniet culpa consequatur reiciendis
              perspiciatis ipsam!
            </DescriptionText>
            <DescriptionText>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
              atque excepturi id magni praesentium nesciunt maxime ex! Facere
              nemo assumenda optio quasi ratione odit quisquam cum eaque numquam
              ipsa, eveniet in ullam fuga aliquam natus nulla explicabo neque
              architecto est.
            </DescriptionText>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              id eaque iure adipisci officiis unde!
            </h2>
            <DescriptionText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
              fuga voluptates numquam? Error doloremque ex vel illo labore vero,
              quasi soluta molestiae sint rerum dolore! Atque cumque quos,
              exercitationem aliquid ea suscipit a voluptatibus commodi delectus
              non, ipsum eum iure?
            </DescriptionText>
            <DescriptionText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum nobis tempora aspernatur, repudiandae laboriosam
              temporibus quisquam mollitia necessitatibus recusandae quae
              repellat officiis, animi delectus, odio quis amet sed sit
              sapiente?
            </DescriptionText>
            <TagList>
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
              <TagList.Tag tagName="Express" />
              <TagList.Tag tagName="SASS" />
            </TagList>
            <TagList title="Links">
              <GithubButton href="#" title="Front-End" />
              <GithubButton href="#" title="Back-End" />
              <GithubButton href="#" title="Demo Video" />
            </TagList>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item>
          <ContentContainer>
            <InViewContainer
              style={{
                width: "100%",
              }}
              source={DemoSearchPage}
            />
          </ContentContainer>
        </Grid.Item>
      </Grid>
    </Container>
  );
}
