import styled from "styled-components";
import { device } from "../../breakpoints";
export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: grid;

  grid-template-columns: repeat(1, minmax(min-content, 1fr));
  /* grid-auto-rows: 1fr;
  grid-auto-columns: 1fr; */
`;

export const GridItem = styled.div`
  height: auto;
  min-height: calc(100vh - 120px);
  width: 100%;

  @media ${device.lg} {
    min-height: initial;
  }
`;

export const GridRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;

  @media ${device.lg} {
    flex-direction: column;
  }
`;
