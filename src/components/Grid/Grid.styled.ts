import styled from "styled-components";
import { device } from "../../breakpoints";

export const GridContainer = styled.div<{ reverse: boolean }>`
  width: 100%;
  height: 100%;
  min-height: 100vh;


  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: minmax(1fr, 50%) minmax(1fr, 50%);
  grid-template-areas: ${({ reverse }) =>
    reverse
      ? `"DemoContainer OverviewContainer"
        "DemoContainer TechnicalOverviewContainer"
      `
      : `"OverviewContainer DemoContainer"
    "TechnicalOverviewContainer DemoContainer"`};


  @media ${device.md} {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr;
    grid-template-areas:
      "OverviewContainer"
      "DemoContainer"
      "TechnicalOverviewContainer";
  }
`;

export const GridItem = styled.div`
  height: auto;
  min-height: calc(100vh - 120px);
  width: 100%;

  @media ${device.lg} {
  }
`;

export const OverViewContainer = styled.div`
  grid-area: OverviewContainer;
`;
export const DemoContainer = styled.div`
  grid-area: DemoContainer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TechincalOverviewContainer = styled.div`
  grid-area: TechnicalOverviewContainer;
`;

export const GridRow = styled.div`
  width: 100%;
  display: flex;
`;
