import Container from "../../components/Container/Container";
import { Content, Image, DownloadButton, ButtonContainer } from "./CV.styled";
import BackgroundVector from "../../assets/background-logo-vector.svg";
import Page1 from "../../assets/resume/CVPage1.jpg";
import Page2 from "../../assets/resume/CVPage2.jpg";
import downloadButton from "../../assets/download.png";
import CVPDF from "../../assets/resume/CVAlkinSali.pdf";
import { saveAs } from "file-saver";
import DocumentTitle from "react-document-title";
import { DescriptionText } from "../Projects/Turnt/Turnt.styled";
import { useCallback } from "react";
export default function CV() {
  const downloadCV = useCallback(() => {
    saveAs(CVPDF, "AlkinSaliCV.pdf");
  }, []);
  return (
    <DocumentTitle title="Alkin Sali - CV">
      <Container
        props={{
          style: {
            backgroundImage: `url(${BackgroundVector})`,
            backgroundColor: "#3e27b9",
          },
        }}
      >
        <Content>
          <Image src={Page1} />
          <Image src={Page2} />
          <ButtonContainer>
            <DownloadButton onClick={downloadCV}>
              <Image src={downloadButton} />
              <DescriptionText>Downloaden</DescriptionText>
            </DownloadButton>
          </ButtonContainer>
        </Content>
      </Container>
    </DocumentTitle>
  );
}
