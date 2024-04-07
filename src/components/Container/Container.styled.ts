import styled from "styled-components";
import { device } from "../../breakpoints";

export const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 175px);
  padding-block: 50px;
  @media ${device.lg} {
    min-height: auto;
    height: 100%;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-width: 1200px;
  margin: 0 auto;
  @media ${device.lg} {
    max-width: 800px;
  }
`;
