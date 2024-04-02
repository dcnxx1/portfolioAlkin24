import styled from "styled-components";
import iPhoneTurnt from "../../../assets/project-assets/turnt/iphone_turnt.svg";
import { device } from "../../../breakpoints";
import { InViewContainer } from "../../../components/Video/Video";

export const ContentContainer = styled.div`
  /* height: 100%; */
  padding-inline: 10px;
  display: grid;
  place-content: center;

  @media ${device.lg} {
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.lg} {
      display: flex;
      border: 2px solid white;
      justify-content: flex-end;
      align-items: center;
      align-content: flex-end;
      height: fit-content;
    }
    video {
      width: 350px;
    }
  }
`;

export const HeaderText = styled.h1`
  color: white;
`;

export const DescriptionText = styled.h3`
  color: white;
  font-weight: normal;
`;

export const PhoneImage = styled.img`
  height: 100%;
  object-fit: contain;
  align-self: center;
`;

export const TextMobileOnly = styled(DescriptionText)`
  display: none;
  @media ${device.lg} {
    display: block;
  }
`;

export const TextDesktopOnly = styled(DescriptionText)`
  display: block;
  @media ${device.lg} {
    display: none;
  }
`;
