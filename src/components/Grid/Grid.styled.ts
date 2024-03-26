import styled, { keyframes } from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, 1fr));
  grid-template-rows: repeat(2, minmax(min-content, 1fr));
  grid-auto-rows: 1fr 1fr;
  grid-auto-columns: 1fr 1fr;
`;

export const GridItem = styled.div`
  height: auto;
  min-height: calc(100vh - 120px);
`;
