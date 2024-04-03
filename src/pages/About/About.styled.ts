import { styled } from "styled-components";
import { device } from "../../breakpoints";
import { DescriptionText, HeaderText } from "../Projects/Turnt/Turnt.styled";

export const Container = styled.div`
  height: auto;
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
    ${HeaderText} {
      text-align: center;
    }
  }
  @media ${device.sm} {
    max-width: 400px;
    ${DescriptionText} {
      text-align: left;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-self: flex-end;

  @media ${device.sm} {
    flex-direction: column;
    &:nth-child(1) {
      flex-direction: column-reverse;
    }
  }
`;

export const Image = styled.img`
  width: 40%;
`;
export const Content = styled.div`
  flex: 1;
  @media ${device.md} {
    ${Image} {
      width: 70%;
    }
    @media ${device.sm} {
      padding-inline: 10px;
    }
  }
`;
