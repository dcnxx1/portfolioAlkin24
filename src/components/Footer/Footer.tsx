import LOGO from "../../assets/logo.png";
import iconEmail from "../../assets/email.png";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";

import {
  Container,
  FooterContainerName,
  FooterIcon,
  FooterImageContainer,
  FooterImageLogo,
  FooterRedirect,
  FooterSocialsContainer,
  FooterText,
  InnerContainer,
} from "./Footer.styled";

import { FooterContainer } from "./Footer.styled";

export default function Foooter() {
  return (
    <Container>
      <InnerContainer>
        <FooterContainer>
          <FooterImageContainer>
            <FooterImageLogo
              style={{
                width: "100%",
                height: "100%",
              }}
              src={LOGO}
            />
          </FooterImageContainer>

          <FooterContainerName>
            <FooterText> © Alkin Sali 2024</FooterText>
          </FooterContainerName>

          <FooterSocialsContainer>
            <FooterRedirect href="mailto:alkisali1@hotmail.com?subject=Onderwerp...">
              <FooterIcon src={iconEmail} />
            </FooterRedirect>
            <FooterRedirect href="https://www.linkedin.com/in/alkinn/">
              <FooterIcon src={linkedinIcon} />
            </FooterRedirect>
            <FooterRedirect href="https://github.com/dcnxx1" target="_blank">
              <FooterIcon src={githubIcon} />
            </FooterRedirect>
            <FooterIcon />
          </FooterSocialsContainer>
        </FooterContainer>
      </InnerContainer>
    </Container>
  );
}
