import styled from "styled-components";
import { device } from "../../../breakpoints";
import { GridRow } from "../../../components/Grid/Grid.styled";

export const ContentContainer = styled.div`
  height: 100%;
  padding-inline: 20px;

  @media ${device.lg} {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    /* align-items: center; */

    video {
      width: 350px;
      align-self: center;
    }
  }
`;

export const HeaderText = styled.h1`
  color: white;
`;
export const GridRowReverseOnMobile = styled(GridRow)`
  @media ${device.lg} {
    flex-direction: column-reverse;
    ${ContentContainer} {
      ${HeaderText} {
        text-align: center;
      }
    }
  }
`;

export const DescriptionText = styled.h3`
  color: white;
  font-weight: normal;
  text-align: justify;
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

export const ViewMobileOnly = styled.div`
  display: none;
  @media ${device.lg} {
    display: block;
    width: 100%;
  }
`;

export const ViewDesktopOnly = styled.div`
  display: block;
  @media ${device.lg} {
    display: none;
  }
`;

export const TextDesktopOnly = styled(DescriptionText)`
  display: block;
  @media ${device.lg} {
    display: none;
  }
`;
