import BackgroundVectorLogo from "../../../assets/background-logo-vector.svg";
import ImageQRCodeDemo from "../../../assets/project-assets/qrCode/images/DemoQRcodeScreen.png";
import QRCodeDemo from "../../../assets/project-assets/qrCode/videos/DemoQRcodeScreen.mp4";
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

export default function QRCode() {
  return (
    <Container
      props={{
        style: {
          background: `url(${BackgroundVectorLogo}) #3523a9`,
        },
      }}
    >
      <Grid
        style={{
          display: "block",
          gridTemplateColumns: `repeat(1, 1fr)`,
          height: "min-content",
          gridAutoRows: "initial",
        }}
      >
        <Grid.Item style={{ height: "min-content" }}>
          <ContentContainer
            style={{
              justifyContent: "flex-start",
              paddingLeft: "2%",
            }}
          >
            <HeaderText>QRCode</HeaderText>
            <DescriptionText>Zet text om in code!</DescriptionText>
            <DescriptionText>
              Ontwikkeld met React en ExpressJS, waarmee je moeiteloos QR-codes
              van verschillende formaten kunt creëren. Met een gestroomlijnde en
              intuïtieve interface kunnen gebruikers gemakkelijk door de website
              navigeren en in slechts enkele stappen hun gewenste QR-code
              genereren
            </DescriptionText>
          </ContentContainer>
          <ContentContainer
            style={{
              alignContent: "flex-start",
            }}
          >
            <InViewContainer
              fallbackImage={ImageQRCodeDemo}
              style={{ width: "100%" }}
              source={QRCodeDemo}
            />
          </ContentContainer>
          <ContentContainer
            style={{
              display: "flex",
              flexDirection: "column",

              gap: 10,
            }}
          >
            <TagList
              style={{
                alignContent: "flex-start",
              }}
            >
              <TagList.Tag tagName="React Native" />
              <TagList.Tag tagName="NodeJS" />
              <TagList.Tag tagName="QrCodeJS" />
              <TagList.Tag tagName="ExpressJS" />
              <TagList.Tag tagName="Cloudinary" />
            </TagList>
            <TagList title="Links">
              <GithubButton
                href="https://github.com/dcnxx1/qrCode"
                title="Front-End"
              />
              <GithubButton
                href="https://github.com/dcnxx1/qrcode-backend"
                title="Back-End"
              />
            </TagList>
          </ContentContainer>
        </Grid.Item>
      </Grid>
    </Container>
  );
}
