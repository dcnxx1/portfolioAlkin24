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

export const DescriptionText = styled.p`
  color: white;
  font-weight: normal;

  font-size: 18px;
`;

export const SubHeaderText = styled.h2`
  color: white;
  
  font-size: 22px;
`;

export const PhoneImage = styled.img`
  height: 100%;
  object-fit: contain;
  align-self: center;
`;

export const TextDesktopOnly = styled(DescriptionText)`
  display: block;
  @media ${device.lg} {
    display: none;
  }
`;
