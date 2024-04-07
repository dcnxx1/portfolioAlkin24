import styled from "styled-components";
import BackgroundLogoVector from "../../assets/background-logo-vector.svg";
import { device } from "../../breakpoints";
import { DescriptionText } from "../Projects/Turnt/Turnt.styled";

export const Container = styled.div`
  height: auto;
  min-height: calc(100vh - 75px);
`;

export const Image = styled.img``;

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  display: center;
  flex-direction: column;
  display: flex;
  width: 100%;

  ${Image} {
    width: 300px;
  }
  ${DescriptionText} {
    width: 50%;
  }

  @media ${device.md} {
    ${DescriptionText} {
      width: 90%;
      font-size: 18px;
    }
    ${Image} {
      width: 250px;
    }
    @media ${device.sm} {
      ${DescriptionText} {
        text-align: left;
      }
    }
  }
`;

export const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  @media ${device.lg} {
    max-width: 900px;
  }
  @media ${device.md} {
    max-width: 600px;
  }
  @media ${device.sm} {
  }
`;
