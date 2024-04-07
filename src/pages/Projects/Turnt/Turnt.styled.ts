import styled from "styled-components";
import { device } from "../../../breakpoints";

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
  font-family: "LTHoopSemiBold", sans-serif;
`;

export const DescriptionText = styled.p`
  color: white;
  font-weight: normal;
  font-size: 18px;
  font-family: "LTHoopRegular", sans-serif;
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

export const MobileGrid = styled.div<{ reverse?: boolean }>`
  display: grid;
  width: 100%;
  height: 100%;
  flex-basis: 200px;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 30% 70%;

  grid-template-areas: ${({ reverse }) =>
    reverse
      ? `"PhoneContainer InfoContainer"
    "PhoneContainer TechContainer"
  `
      : `
  "InfoContainer PhoneContainer"
  "TechContainer PhoneContainer"
  `};

  @media ${device.md} {
    place-content: center;
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.5fr;

    grid-template-areas:
      "InfoContainer"
      "PhoneContainer"
      "TechContainer";
  }
  margin-block: 20px;
  ${HeaderText} {
    text-align: center;
  }
  ${SubHeaderText} {
    text-align: center;
    padding-bottom: 20px;
  }
  ${ContentContainer} {
    place-content: center;
  }
`;

export const InfoContainer = styled.div`
  grid-area: InfoContainer;
  display: grid;
  width: 100%;
  height: 100%;
  @media ${device.md} {
    place-items: center;
    place-content: center;
  }
`;
export const PhoneContainer = styled.div`
  grid-area: PhoneContainer;
  display: grid;
  width: 100%;
  height: 100%;
  @media ${device.md} {
    place-items: center;
  }
`;

export const TechContainer = styled.div`
  grid-area: TechContainer;
  width: 100%;
  display: grid;
  height: 100%;
  @media ${device.md} {
    place-items: center;
    place-content: center;
  }
`;
