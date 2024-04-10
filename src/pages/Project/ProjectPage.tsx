import Card from "../../components/Card/Card";

import LaptopAlktunes from "../../assets/project-assets/alktunes/alktunes_laptop.svg";
import IphoneTurnt from "../../assets/project-assets/turnt/iphone_turnt.svg";

import SamsungCacaoChat from "../../assets/project-assets/cacaochat/SamsungCacaoChat.svg";
import iPhoneKelli from "../../assets/project-assets/kelli/iPhone_kelli.svg";
import iMacQrCode from "../../assets/project-assets/qrCode/iMacQrCode.svg";
import { Column, FlexContainer } from "./ProjectPage.styled";

import Container from "../../components/Container/Container";
import { HeaderText } from "../Projects/Turnt/Turnt.styled";

interface Props {
  relativePath?: string;
}

export default function ProjectPage({}: Props) {
  return (
    <Container>
      <FlexContainer id="Projects">
        <HeaderText style={{ paddingLeft: 10 }}>Projecten</HeaderText>
        <Column>
          <Card linkTo={"/turnt"} color1="#ea698b" color2="#8b23d1">
            <Card.Image source={IphoneTurnt} />
            <Card.Title>Turnt</Card.Title>
            <Card.Description>Ontdek muziek in 30 seconden</Card.Description>
          </Card>
          <Card linkTo={"/alktunes"} color1="#000000" color2="#6c6a6d">
            <Card.Image source={LaptopAlktunes} />
            <Card.Title>Alktunes</Card.Title>
            <Card.Description>
              Luister naar je favoriete artiesten
            </Card.Description>
          </Card>
        </Column>
        <Column>
          <Card linkTo={"/kelli"} color1="#ffb900" color2="#ee9b0f">
            <Card.Image source={iPhoneKelli} />
            <Card.Title>Kelli</Card.Title>
            <Card.Description>Laat Je Woorden Tot Leven Komen</Card.Description>
          </Card>
          <Card linkTo={"/qrcode"} color1="#d63879" color2="#701d3f">
            <Card.Image source={iMacQrCode} />
            <Card.Title>QRCode</Card.Title>
            <Card.Description>
              Scan, Deel, Vergemakkelijk: QRCode
            </Card.Description>
          </Card>
        </Column>
        <Column>
          <Card linkTo={"/cacaochat"} color1="#ffffff" color2="#e4e4e4">
            <Card.Image source={SamsungCacaoChat} />
            <Card.Title style={{ color: "black" }}>CacaoChat</Card.Title>
            <Card.Description style={{ color: "black" }}>
              Chatten Over De Hele Wereld
            </Card.Description>
          </Card>
          <Card
            style={{ pointerEvents: "none", opacity: 0, cursor: "auto" }}
            linkTo={"/cacaochat"}
            color1="#ffffff"
            color2="#e4e4e4"
          >
            <Card.Image source={SamsungCacaoChat} />
            <Card.Title>Turnt</Card.Title>
            <Card.Description>Ontdek muziek in 30 seconden</Card.Description>
          </Card>
        </Column>
      </FlexContainer>
    </Container>
  );
}
