import styled from "styled-components";
import BackgroundVector from "../../assets/background-logo-vector.svg";
import { device } from "../../breakpoints";
export const Container = styled.div`
  width: 100%;
  height: 20vh;
  background-color: black;
  position: relative;
  min-height: 350px;
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 50px;
  @media ${device.lg} {
    max-width: 900px;
  }
  @media ${device.md} {
    max-width: 600px;
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  min-height: 100%;
  height: 100%;
  align-items: center;
  gap: 20px;
  @media ${device.md} {
    gap: 5px;
  }
`;
export const FooterText = styled.p`
  color: #2b2b2b;
  font-size: 14px;
`;
export const FooterImageContainer = styled.div`
  flex-grow: 1;
`;

export const FooterImageLogo = styled.img`
  width: 100%;
  max-width: 150px;
  @media ${device.md} {
    max-width: 75px;
  }
`;

export const FooterSocialsContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: flex-end;
  gap: 20px;
  flex: 2;
  flex-direction: column;
  height: 100%;
`;
export const FooterRedirect = styled.a`
  text-decoration: none;
`;
export const FooterContainerName = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;

  @media ${device.md} {
    flex: 3;
  }
`;
export const FooterIcon = styled.img`
  width: 35px;
`;
export const FooterSiteContent = styled.div`
  width: 100%;
  height: 100%;
`;
