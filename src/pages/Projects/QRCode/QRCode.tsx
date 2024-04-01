import Container from "../../../components/Container/Container";
import Grid from "../../../components/Grid/Grid";
import { InViewContainer } from "../../../components/Video/Video";
import QRCodeDemo from "../../../assets/project-assets/qrCode/videos/DemoQRcodeScreen.mp4";
import BackgroundVectorLogo from "../../../assets/background-logo-vector.svg";
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
      <Grid style={{ border: "2px solid white" }}>
        <Grid.Item style={{ border: "2px solid white" }}>
          <ContentContainer
            style={{ border: "2px solid red", alignContent: "flex-start" }}
          >
            <HeaderText>QRCode</HeaderText>
            <DescriptionText>Zet text om in code!</DescriptionText>
          </ContentContainer>
        </Grid.Item>
        <Grid.Item style={{ border: "2px solid white" }}>
          <ContentContainer
            style={{
              border: "2px solid white",
              background: "red",
              alignContent: "flex-start",
            }}
          >
            <InViewContainer style={{ width: "100%" }} source={QRCodeDemo} />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item style={{ border: "2px solid white" }}>
          <ContentContainer
            style={{
              border: "2px solid white",
              background: "red",
              alignContent: "flex-start",
            }}
          >
            <InViewContainer style={{ width: "100%" }} source={QRCodeDemo} />
          </ContentContainer>
        </Grid.Item>
        <Grid.Item style={{ border: "2px solid white" }}>
          <ContentContainer
            style={{
              border: "2px solid white",
              background: "red",
              alignContent: "flex-start",
            }}
          >
            <InViewContainer style={{ width: "100%" }} source={QRCodeDemo} />
          </ContentContainer>
        </Grid.Item>
      </Grid>
    </Container>
  );
}
