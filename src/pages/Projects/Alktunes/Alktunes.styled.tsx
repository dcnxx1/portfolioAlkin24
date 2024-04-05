import styled from "styled-components";
import VectorBackground from "../../../assets/background-logo-vector.svg";
import { device } from "../../../breakpoints";
import { HeaderText, SubHeaderText } from "../Turnt/Turnt.styled";

export const Grid = styled.div<{ reverse?: boolean }>`
  display: grid;
  height: 100%;
  margin-block: 20px;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: ${({ reverse }) =>
    reverse
      ? `"DemoContainer OverviewContainer" 
        "DemoContainer TechnicalOverviewContainer"`
      : `"OverviewContainer DemoContainer" 
        "TechnicalOverviewContainer DemoContainer"`};

  @media ${device.lg} {
    gap: 20px;
    padding-inline: 10px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(max-content, 50%));
    grid-template-areas:
      "OverviewContainer"
      "DemoContainer"
      "TechnicalOverviewContainer";
    ${HeaderText} {
      text-align: center;
    }
    ${SubHeaderText} {
      text-align: center;
    }
  }
  @media ${device.md} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, min-content);
    grid-template-areas:
      "OverviewContainer"
      "DemoContainer"
      "TechnicalOverviewContainer";

    ${HeaderText} {
      text-align: center;
    }
    ${SubHeaderText} {
      text-align: center;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;

  place-content: center;
`;

export const OverviewContainer = styled.div`
  grid-area: OverviewContainer;
  height: 100%;
  gap: 10px;
  width: 100%;
  ${SubHeaderText} {
    padding-bottom: 10px;
  }
`;
export const DemoContainer = styled.div`
  grid-area: DemoContainer;
  gap: 10px;
  width: 100%;
  height: 100%;
  ${SubHeaderText} {
    padding-bottom: 10px;
  }
`;
export const TechnicalOverviewContainer = styled.div`
  grid-area: TechnicalOverviewContainer;
  width: 100%;
  height: 100%;
  ${SubHeaderText} {
    padding-bottom: 10px;
  }
`;
