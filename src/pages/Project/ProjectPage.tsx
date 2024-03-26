import Card from "../../components/Card/Card";
import "./style.css";

import LaptopAlktunes from "../../assets/project-assets/alktunes/alktunes_laptop.svg";
import IphoneTurnt from "../../assets/project-assets/turnt/iphone_turnt.svg";
import IMacShopee from "../../assets/project-assets/shopee/iMac_shopee.svg";
import iPhoneKelli from "../../assets/project-assets/kelli/iPhone_kelli.svg";
import iMacQrCode from "../../assets/project-assets/qrCode/iMacQrCode.svg";
import SamsungCacaoChat from "../../assets/project-assets/cacaochat/iMacQrCode.svg";
export default function ProjectPage() {
  return (
    <div id="Project">
      <div className="project__header">
        <h1>Projecten</h1>
      </div>
      <section className={"grid-normal"}>
        <Card
          linkTo="projects/turnt"
          onClickLearnMore={() => {
            console.log("pressed");
          }}
          className="turnt"
          description="Ontdek muziek in 30 seconden"
          imgSource={IphoneTurnt}
          title="Turnt"
        />
        <Card
          className="alktunes"
          imgSource={LaptopAlktunes}
          onClickLearnMore={() => console.log("yoo...")}
          description="Luister naar je favoriete artiesten"
          title="Alktunes"
        />
        <Card
          className="shopee"
          onClickLearnMore={() => console.log("yoo...")}
          description="Shop je favoriete merken"
          imgSource={IMacShopee}
          title="Shopee"
        />
        <Card
          onClickLearnMore={() => console.log("yoo...")}
          description="Laat je woorden tot leven komen"
          imgSource={iPhoneKelli}
          title="Kelli"
          className="kelli"
        />

        <Card
          onClickLearnMore={() => console.log("yoo...")}
          description="Scan, Deel, Vergemakkelijk: QRCode"
          imgSource={iMacQrCode}
          title="QRCode Generator"
          className="qrcode"
        />

        <Card
          onClickLearnMore={() => console.log("yoo...")}
          description="Chatten over de hele wereld"
          imgSource={SamsungCacaoChat}
          title="Cacao Chat"
          className="cacao-chat"
        />
      </section>
    </div>
  );
}
